import { onMounted, reactive, shallowReactive } from "vue";
import { WebMidi } from "webmidi";

export const midi = reactive({
  enabled: false,
  initiated: false,
  playing: false,
  stopped: false,
  inputs: {},
  outputs: {},
  note: {},
  cc: {},
  log: []
})

export function useMidi() {

  onMounted(() => {
    WebMidi.enable({
      software: true,
    })
    WebMidi.addListener("enabled", () => {
      initMidi();
    });
    WebMidi.addListener("connected", () => {
      initMidi();
    });
    WebMidi.addListener("disconnected", () => {
      initMidi();
    });
  })

  return { midi }
}

function initMidi() {
  console.log("WebMidi enabled!")
  midi.enabled = true
  midi.inputs = {}
  WebMidi.inputs?.forEach((input) => {
    midi.inputs[input.id] = {
      name: input.name,
      manufacturer: input.manufacturer,
      forwarder: input.addForwarder(),
      clock: 0,
    };
    input.removeListener();
    input.addListener("start", () => {
      midi.playing = true;
      midi.stopped = false;
    });
    input.addListener("stop", () => {
      midi.playing = false;
      midi.stopped = Date.now();
    });

    const diffs = [];
    let avg = 15

    input.addListener('clock', ev => {
      const diff = ev.timestamp - midi.inputs[input.id].clock;
      diffs.push(diff);
      if (diffs.length > 50)
        diffs.shift();
      avg = diffs.reduce((acc, d) => acc + d, 0) / diffs.length;
      midi.inputs[input.id].diff = avg;
      midi.inputs[input.id].bpm = (1000 / avg / 24) * 60;
      midi.inputs[input.id].clock = ev.timestamp;
    });

    input.addListener("midimessage", (ev) => {
      var _a;
      if (((_a = ev === null || ev === void 0 ? void 0 : ev.message) === null || _a === void 0 ? void 0 : _a.type) == "clock")
        return;
      midi.inputs[input.id].event = ev;
      midi.message = ev.message;
      midi.log.unshift(ev);
      if (midi.log.length > 100)
        midi.log.pop();
    });

    input.addListener("noteon", (ev) => {
      midi.inputs[input.id].note = noteInOn(ev);
    });

    input.addListener("noteoff", (ev) => {
      midi.inputs[input.id].note = noteInOn(ev);
    });

    input.addListener("controlchange", (ev) => {
      const cc = ccIn(ev);
      if (!cc)
        return;
      midi.inputs[input.id].note = cc;
    });

    input.addListener("clock", (ev) => {
      midi.clock = ev.timestamp;
      //bpm = 60000 / ((ev.timestamp - prevTimestamp) * PPQ)  ppq=24
    });

  });

  midi.outputs = shallowReactive({});
  WebMidi.outputs.forEach((output) => {
    midi.outputs[output.id] = {
      name: output.name,
      manufacturer: output.manufacturer,
    };
  });
}


function noteInOn(ev) {
  const note = {
    ...ev.note,
    port: ev.port.id,
    type: ev.type,
    timestamp: ev.timestamp,
    //@ts-expect-error type bug?
    channel: ev.target.number,
    velocity: 0,
    number: ev.note.number,
    pitch: (ev.note.number + 3) % 12,
    octA: Math.floor((ev.note.number + 3) / 12) - 1,
  };
  midi.note = note;
  return note;
}

function ccIn(ev) {
  let cc = {
    channel: ev.message.channel,
    timestamp: ev.timestamp,
    number: ev.controller.number,
    value: Number(ev.value),
    raw: ev.rawValue,
    port: ev.port.id,
  };
  midi.cc = cc;
  return cc;
}

/**
 * Sets a forwarding route from an Input to an Output
 * @param iid Input ID
 * @param oid Output ID
 */
export function forwardMidi(iid, oid) {
  var _a, _b;
  const output = WebMidi.outputs.find((out) => out.id == oid);
  const destinations = midi.inputs[iid].forwarder.destinations;
  const index = destinations.indexOf(output);
  if (index == -1) {
    destinations.push(output);
    midi.forwards[iid] = midi.forwards[iid] || {};
    midi.forwards[iid][oid] = true;
  }
  else {
    destinations.splice(index, 1);
    (_b = (_a = midi.forwards) === null || _a === void 0 ? void 0 : _a[iid]) === null || _b === void 0 ? true : delete _b[oid];
  }
}
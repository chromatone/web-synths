var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var webAudioTest = true;
window.AudioContext =
  window.AudioContext || window.webkitAudioContext || noWebAudio();

function noWebAudio() {
  webAudioTest = false;
}

window.onload = function () {
  if (webAudioTest === false) {
    document.getElementById("noWebAudio").style.display = "block";
    document.getElementById("container").style.visibility = "hidden";
  }
};

//CREATE AUDIO CONTEXT

var context = new AudioContext();

//IF WINDOW FOCUS IS LOST, STOP STUCK NOTES

function focus() {
  if (document.hasFocus() === false) {
    stopAllNotes();
    keyBugFix = 0;
  }
}

setInterval(focus, 300);

//STOP NOTES ON RIGHT CLICK

window.oncontextmenu = function () {
  stopAllNotes();
};

//ARRAYS

const freqArray = new Array(
  185,
  207.65,
  233.08,
  277.18,
  311.13,
  369.99,
  415.3,
  466.16,
  196,
  220,
  246.94,
  261.63,
  293.66,
  329.63,
  349.23,
  392,
  440
);
var currentOctave = 1;
var keyArray = new Array(17).fill(null);
var mouseArray = new Array(17).fill(null);

//KEY LISTENER

var keyBugFix = 0;

window.onkeydown = function (e) {
  if (context.state != "running") {
    context.resume();
    if (typeof context.createStereoPanner === "function") {
      panner.start();
    }
  }

  let x = e.keyCode ? e.keyCode : e.which;

  if (x == 16 || x == 17 || x == 18 || x == 91) {
    keyBugFix++;
  }

  if (isTextFocussed === false && keyBugFix === 0) {
    if (x == 81 && keyArray[0] === null) {
      new Note(0, currentOctave, "key");
    } else if (x == 87 && keyArray[1] === null) {
      new Note(1, currentOctave, "key");
    } else if (x == 69 && keyArray[2] === null) {
      new Note(2, currentOctave, "key");
    } else if (x == 84 && keyArray[3] === null) {
      new Note(3, currentOctave, "key");
    } else if (x == 89 && keyArray[4] === null) {
      new Note(4, currentOctave, "key");
    } else if (x == 73 && keyArray[5] === null) {
      new Note(5, currentOctave, "key");
    } else if (x == 79 && keyArray[6] === null) {
      new Note(6, currentOctave, "key");
    } else if (x == 80 && keyArray[7] === null) {
      new Note(7, currentOctave, "key");
    } else if (x == 65 && keyArray[8] === null) {
      new Note(8, currentOctave, "key");
    } else if (x == 83 && keyArray[9] === null) {
      new Note(9, currentOctave, "key");
    } else if (x == 68 && keyArray[10] === null) {
      new Note(10, currentOctave, "key");
    } else if (x == 70 && keyArray[11] === null) {
      new Note(11, currentOctave, "key");
    } else if (x == 71 && keyArray[12] === null) {
      new Note(12, currentOctave, "key");
    } else if (x == 72 && keyArray[13] === null) {
      new Note(13, currentOctave, "key");
    } else if (x == 74 && keyArray[14] === null) {
      new Note(14, currentOctave, "key");
    } else if (x == 75 && keyArray[15] === null) {
      new Note(15, currentOctave, "key");
    } else if (x == 76 && keyArray[16] === null) {
      new Note(16, currentOctave, "key");
    }
  }
};

window.onkeyup = function (e) {
  let x = e.keyCode ? e.keyCode : e.which;
  if (x == 16 || x == 17 || x == 18 || x == 91) {
    keyBugFix--;
  }

  if (x == 81 && keyArray[0] !== null) {
    stopNote(0, "key");
  } else if (x == 87 && keyArray[1] !== null) {
    stopNote(1, "key");
  } else if (x == 69 && keyArray[2] !== null) {
    stopNote(2, "key");
  } else if (x == 84 && keyArray[3] !== null) {
    stopNote(3, "key");
  } else if (x == 89 && keyArray[4] !== null) {
    stopNote(4, "key");
  } else if (x == 73 && keyArray[5] !== null) {
    stopNote(5, "key");
  } else if (x == 79 && keyArray[6] !== null) {
    stopNote(6, "key");
  } else if (x == 80 && keyArray[7] !== null) {
    stopNote(7, "key");
  } else if (x == 65 && keyArray[8] !== null) {
    stopNote(8, "key");
  } else if (x == 83 && keyArray[9] !== null) {
    stopNote(9, "key");
  } else if (x == 68 && keyArray[10] !== null) {
    stopNote(10, "key");
  } else if (x == 70 && keyArray[11] !== null) {
    stopNote(11, "key");
  } else if (x == 71 && keyArray[12] !== null) {
    stopNote(12, "key");
  } else if (x == 72 && keyArray[13] !== null) {
    stopNote(13, "key");
  } else if (x == 74 && keyArray[14] !== null) {
    stopNote(14, "key");
  } else if (x == 75 && keyArray[15] !== null) {
    stopNote(15, "key");
  } else if (x == 76 && keyArray[16] !== null) {
    stopNote(16, "key");
  }
};

//MOUSENOTE

function mouseNote(note, event) {
  let test = false;

  if (event == true || event.button == 0) {
    new Note(note, currentOctave, "mouse");
  }
}

//IS MOUSE DOWN

var mouseDown = false;

window.onmousedown = function (event) {
  if (context.state != "running" && event.button == 0) {
    context.resume();
    if (typeof context.createStereoPanner === "function") {
      panner.start();
    }
  }
  mouseDown = true;
};

window.ontouchstart = function (event) {
  if (context.state != "running" && event.button == 0) {
    context.resume();
    panner.start();
  }
  //mouseDown = true;
};

window.onmouseup = function (event) {
  if (event.button == 0) {
    mouseDown = false;
  }
};

function mouseEnter(note) {
  if (mouseDown == true) {
    mouseNote(note, true);
  }
}

//STOP MOUSENOTE

function stopMouseNote(note, event) {
  let woop = false;
  if (event == true || event.button == 0) {
    woop = true;
  }

  if (mouseArray[note] != null && woop == true) {
    stopNote(note, "mouse");
    mouseArray[note] = null;
  }
}

//PULSE WAVE FUNCTION (courtesy of pendragon-andyh)

var pulseCurve = new Float32Array(256);
for (let i = 0; i < 128; i++) {
  pulseCurve[i] = -1;
  pulseCurve[i + 128] = 1;
}

var constantOneCurve = new Float32Array(2);
constantOneCurve[0] = 1;
constantOneCurve[1] = 1;

context.createPulseOscillator = function () {
  let node = this.createOscillator();
  node.type = "sawtooth";
  let pulseShaper = context.createWaveShaper();
  pulseShaper.curve = pulseCurve;
  node.connect(pulseShaper);
  let widthGain = context.createGain();
  widthGain.gain.value = 0;
  node.width = widthGain.gain;
  widthGain.connect(pulseShaper);
  let constantOneShaper = this.createWaveShaper();
  constantOneShaper.curve = constantOneCurve;
  node.connect(constantOneShaper);
  constantOneShaper.connect(widthGain);
  node.connect = function () {
    pulseShaper.connect.apply(pulseShaper, arguments);
  };
  node.disconnect = function () {
    pulseShaper.disconnect.apply(pulseShaper, arguments);
    node.stop();
    widthGain.disconnect();
    constantOneShaper.disconnect();
  };

  node.stop = function () {
    //node.stop();
    pulseShaper.disconnect();
    widthGain.disconnect();
    constantOneShaper.disconnect();
    delete node.disconnect;
    delete node.stop;
    delete node.connect;
    delete pulseShaper;
    delete widthGain;
    delete constantOneShaper;
    delete node;
  };

  return node;
};

//WHITE NOISE GENERATOR

function whiteNoiseGenerator() {
  this.bufferSize = 2 * context.sampleRate;
  this.noiseBuffer = context.createBuffer(
    1,
    this.bufferSize,
    context.sampleRate
  );
  this.output = this.noiseBuffer.getChannelData(0);
  for (var i = 0; i < this.bufferSize; i++) {
    this.output[i] = Math.random() * 2 - 1;
  }
  this.whiteNoise = context.createBufferSource();
  this.whiteNoise.buffer = this.noiseBuffer;
  this.whiteNoise.loop = true;
  this.whiteNoise.start();
}

//NEW NOTE FUNCTION

var allNotes = new Array(10).fill(null);
var osc1Type = "sine";
var osc2Type = "sine";
var lastNote = null;
var whichNotesAreOnRelease = [];
var recNoteNumber = 0;
var noteTally = 0;
var timeOfLastNote = new Date();
var terminateTally = 0;
var whichKeysAreLit = new Array(17).fill(0);

function Note(note, octave, type, id) {
  timeOfLastNote = new Date();
  this.noteTally = noteTally;
  noteTally++;

  //STOP NOTES IF MAXIMUM POLYPHONY IS REACHED

  if (whichNotesAreOnRelease.length > 2) {
    let s = whichNotesAreOnRelease.length - 2;
    for (i = 0; i < s; i++) {
      whichNotesAreOnRelease[0].terminate();
      delete whichNotesAreOnRelease[0];
      whichNotesAreOnRelease.shift();
    }
  }

  //ADD NOTE TO RELEVANT ARRAY

  this.x = null;

  if (type == "key") {
    this.x = keyArray;
  } else if (type == "mouse") {
    this.x = mouseArray;
  }

  let thisOne = null;

  for (i in allNotes) {
    if (allNotes[i] == null) {
      thisOne = i;
      break;
    }
  }

  allNotes[thisOne] = this;
  if (type != "sequencer") {
    this.x[note] = thisOne;
  }
  allNotes.push(null);

  if (type == "sequencer") {
    this.type = "sequencer";
  }

  //RECORD NOTE

  this.recNoteOrNot = false;
  this.startTime = new Date();

  if (rec == true && play == true && type != "sequencer") {
    this.recNoteOrNot = true;
    this.recNote = recNoteNumber;
    recNoteNumber++;
    recordNote(note, octave, this.recNote);
  }

  if (id != null) {
    this.id = id;
  } else {
    this.id = -10;
  }

  //CALCULATE FREQUENCY

  this.osc1Coarse = document.getElementById("osc1Coarse").value / 50;
  if (this.osc1Coarse < 0) {
    this.osc1Coarse = this.osc1Coarse / 2;
  }
  this.osc2Coarse = document.getElementById("osc2Coarse").value / 50;
  if (this.osc2Coarse < 0) {
    this.osc2Coarse = this.osc2Coarse / 2;
  }
  this.osc1Fine = document.getElementById("osc1Fine").value * 2;
  this.osc2Fine = document.getElementById("osc2Fine").value * 2;
  this.noteFrequency = freqArray[note] * octave;
  this.noteFrequency1 = this.noteFrequency * (1 + this.osc1Coarse);
  this.noteFrequency2 = this.noteFrequency * (1 + this.osc2Coarse);

  //GLIDE

  this.glideAmount = document.getElementById("glideAmount").value / 350;
  this.newNoteFrequency = this.noteFrequency;
  this.newNoteFrequency1 = this.noteFrequency1;
  this.newNoteFrequency2 = this.noteFrequency2;
  this.glide = false;

  if (lastNote != null && this.glideAmount > 0) {
    this.noteFrequency = lastNote;
    this.noteFrequency1 = lastNote * (1 + this.osc1Coarse);
    this.noteFrequency2 = lastNote * (1 + this.osc2Coarse);
    this.glide = true;
  }

  lastNote = freqArray[note] * octave;

  //CREATE OSC 1

  this.osc1 = context.createOscillator();
  this.osc1.frequency.value = this.noteFrequency1;
  if (this.glide == true) {
    this.osc1.frequency.setTargetAtTime(
      this.newNoteFrequency1,
      context.currentTime,
      this.glideAmount
    );
  }
  this.osc1.detune.value = this.osc1Fine;
  this.osc1Gain = context.createGain();
  this.osc1Gain.gain.value = 0.000001;
  this.osc1.connect(this.osc1Gain);
  this.osc1MasterGain = context.createGain();
  this.osc1MasterGain.gain.value = 0.000001;
  this.osc1Gain.connect(this.osc1MasterGain);

  //CREATE OSC 1 PULSE

  this.pulse1 = context.createPulseOscillator();
  this.pulse1.frequency.value = this.noteFrequency1;
  if (this.glide == true) {
    this.pulse1.frequency.setTargetAtTime(
      this.newNoteFrequency1,
      context.currentTime,
      this.glideAmount
    );
  }
  this.pulse1.detune.value = this.osc1Fine;
  this.pulse1Gain = context.createGain();
  this.pulse1Gain.gain.value = 0.000001;
  this.pulse1.connect(this.pulse1Gain);
  this.pulse1Gain.connect(this.osc1MasterGain);
  this.pulse1.width.value = document.getElementById("osc1PW").value / 120;

  //CREATE OSC 1 FM

  this.osc1FM = context.createOscillator();
  this.osc1FM.frequency.value = this.noteFrequency2 / 2;
  if (this.glide == true) {
    this.osc1FM.frequency.setTargetAtTime(
      this.newNoteFrequency2 / 2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.osc1FM.detune.value = this.osc1Fine;
  this.osc1FMGain = context.createGain();
  this.osc1FMGain.gain.value = document.getElementById("osc1FM").value;
  this.osc1FM.connect(this.osc1FMGain);
  this.osc1FMGain.connect(this.osc1.frequency);
  this.osc1FMGain.connect(this.pulse1.frequency);

  //CREATE OSC 2

  this.osc2 = context.createOscillator();
  this.osc2.frequency.value = this.noteFrequency2;
  if (this.glide == true) {
    this.osc2.frequency.setTargetAtTime(
      this.newNoteFrequency2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.osc2.detune.value = this.osc2Fine;
  this.osc2Gain = context.createGain();
  this.osc2Gain.gain.value = 0.000001;
  this.osc2.connect(this.osc2Gain);
  this.osc2MasterGain = context.createGain();
  this.osc2MasterGain.gain.value = 0.000001;
  this.osc2Gain.connect(this.osc2MasterGain);

  this.pulse2 = context.createPulseOscillator();
  this.pulse2.frequency.value = this.noteFrequency2;
  if (this.glide == true) {
    this.pulse2.frequency.setTargetAtTime(
      this.newNoteFrequency2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.pulse2.detune.value = this.osc2Fine;
  this.pulse2Gain = context.createGain();
  this.pulse2Gain.gain.value = 0.000001;
  this.pulse2.connect(this.pulse2Gain);
  this.pulse2Gain.connect(this.osc2MasterGain);
  this.pulse2.width.value = document.getElementById("osc2PW").value / 120;

  //CREATE OSC 2 FM

  this.osc2FM = context.createOscillator();
  this.osc2FM.frequency.value = this.noteFrequency1 / 2;
  if (this.glide == true) {
    this.osc2FM.frequency.setTargetAtTime(
      this.newNoteFrequency1 / 2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.osc2FM.detune.value = this.osc2Fine;
  this.osc2FMGain = context.createGain();
  this.osc2FMGain.gain.value = document.getElementById("osc2FM").value;
  this.osc2FM.connect(this.osc2FMGain);
  this.osc2FMGain.connect(this.osc2.frequency);
  this.osc2FMGain.connect(this.pulse2.frequency);

  //FILTER GAINS

  this.filter1Level = context.createGain();
  this.osc1MasterGain.connect(this.filter1Level);
  this.osc2MasterGain.connect(this.filter1Level);

  //SET OSC TYPES

  if (osc1Type != "pulse") {
    this.osc1.type = osc1Type;
    this.osc1Gain.gain.value = 0.1;
  } else {
    this.pulse1Gain.gain.value = 0.1;
  }

  if (osc2Type != "pulse") {
    this.osc2.type = osc2Type;
    this.osc2Gain.gain.value = 0.1;
  } else {
    this.pulse2Gain.gain.value = 0.1;
  }

  //CREATE WHITE

  this.whiteNoise = new whiteNoiseGenerator();
  this.whiteNoiseAmpMod = context.createGain();
  this.whiteNoiseGain = context.createGain();
  this.whiteNoiseGain.gain.value = 0.000001;
  this.whiteNoise.whiteNoise.connect(this.whiteNoiseAmpMod);
  this.whiteNoiseAmpMod.connect(this.whiteNoiseGain);
  this.whiteNoiseGain.connect(this.filter1Level);

  this.whiteAmpModulator = context.createOscillator();
  this.whiteAmpModulator.start();
  this.whiteAmpModulator.frequency.value = this.noteFrequency;
  if (this.glide == true) {
    this.whiteAmpModulator.frequency.setTargetAtTime(
      this.newNoteFrequency,
      context.currentTime,
      this.glideAmount
    );
  }
  this.whiteAmpModAmount = context.createGain();
  this.whiteAmpModAmount.gain.value =
    document.getElementById("noiseAmpMod").value / 100;
  this.whiteAmpModulator.connect(this.whiteAmpModAmount);
  this.whiteAmpModAmount.connect(this.whiteNoiseAmpMod.gain);

  //CREATE SUB

  this.sub = context.createOscillator();
  this.sub.frequency.value = this.noteFrequency / 2;
  if (this.glide == true) {
    this.sub.frequency.setTargetAtTime(
      this.newNoteFrequency / 2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.subGain = context.createGain();
  this.subGain.gain.value = 0.000001;
  this.sub.connect(this.subGain);
  this.subGain.connect(this.filter1Level);

  //START OSCILLATORS

  this.osc1.start();
  this.osc2.start();
  this.pulse1.start();
  this.pulse2.start();
  this.osc1FM.start();
  this.osc2FM.start();
  this.sub.start();

  //FILTER

  this.filter1Level.gain.value = 1;

  this.filter1 = context.createBiquadFilter();
  this.filter1.type = filterTypes[0];
  this.filter1Level.connect(this.filter1);
  this.filter1Gain = context.createGain();
  this.filter1Gain.gain.value = 0;
  this.filter1.connect(this.filter1Gain);
  this.filter1Gain.connect(toEffects);
  this.filter1Freq =
    Math.pow(document.getElementById("filter1Freq").value, 3) / 50;
  this.filter1FMAmount =
    (document.getElementById("filter1FreqMod").value * this.filter1Freq) / 200;

  //FILTER CHARACTER

  if (keyOnOrOff[0] == true) {
    this.filter1Freq =
      (this.filter1Freq * (Math.log(this.noteFrequency) / Math.log(2)) + 1) / 9;
  }

  if (filterTypes[0] == "highpass") {
    this.filter1FMAmount = this.filter1FMAmount / 8;
    this.filter1Freq = this.filter1Freq / 6 + 50;
    this.filter1Gain.gain.value = this.filter1Freq / 15000 + 1;
  }

  if (this.filter1Freq > 20000) {
    this.filter1Freq = 20000;
  }
  if (this.filter1Freq < 50) {
    this.filter1Freq = 50;
  }

  this.filter1Env = 1 - document.getElementById("filter1Env").value / 200;
  this.f1FM = document.getElementById("filter1FreqMod").value / 100;
  this.subFilter1Multiplier = 1;
  if (this.filter1Freq < 1000 && filterTypes[0] == "lowpass") {
    this.subFilter1Multiplier = (1 - this.filter1Freq / 1000) * 8 * this.f1FM;
  }
  this.filter1ResonanceValue =
    document.getElementById("filter1Resonance").value /
    (6 + this.subFilter1Multiplier);

  if (filterTypes[0] == "bandpass") {
    this.filter1FMAmount = this.filter1FMAmount / 8;
    this.filter1Freq = this.filter1Freq / 5 + 50;
    this.filter1Gain.gain.value = this.filter1ResonanceValue / 1.5 + 3;
    this.filter1ResonanceValue = this.filter1ResonanceValue * 0.8 + 2;
  }

  if (filterTypes[0] == "lowpass") {
    this.filter1Gain.gain.value = 1;
  }

  //CREATE LFO

  this.lfoKeytrack = this.newNoteFrequency / 200;
  this.lfo = context.createOscillator();
  this.lfo.type = lfoType2;
  this.lfoSpeed =
    (Math.pow(document.getElementById("lfoSpeed").value, 2) *
      this.lfoKeytrack) /
    400;
  this.lfo.frequency.value = this.lfoSpeed;
  this.lfo.start();
  this.lfoGain = context.createGain();
  this.lfoGain.gain.value =
    Math.pow(document.getElementById("lfoLevel").value, 2) / 26000;
  this.lfo.connect(this.lfoGain);
  this.lfoGainOsc1 = context.createGain();
  this.lfoGainOsc2 = context.createGain();
  this.lfoGain.connect(this.lfoGainOsc1);
  this.lfoGain.connect(this.lfoGainOsc2);
  this.filter2lfo = context.createGain();
  this.lfofilter1 = context.createGain();
  this.lfofilter2 = context.createGain();
  this.lfoGain.connect(this.lfofilter1);
  this.lfoGain.connect(this.lfofilter2);

  //LFO 2 SENDS

  if (lfoSends2[0] == true) {
    this.lfoGainOsc1.gain.value = this.newNoteFrequency1;
    this.lfoGainOsc1.connect(this.osc1.frequency);
    this.lfoGainOsc1.connect(this.pulse1.frequency);
    this.lfoGainOsc1.connect(this.osc2FM.frequency);
  }

  if (lfoSends2[1] == true) {
    this.lfoGainOsc2.gain.value = this.newNoteFrequency2;
    this.lfoGainOsc2.connect(this.osc2.frequency);
    this.lfoGainOsc2.connect(this.pulse2.frequency);
    this.lfoGainOsc2.connect(this.osc1FM.frequency);
  }

  if (lfoSends2[2] == true) {
    this.lfoGain.connect(this.pulse1.width);
  }

  if (lfoSends2[3] == true) {
    this.lfoGain.connect(this.pulse2.width);
  }

  if (lfoSends2[4] == true) {
    this.lfofilter1.connect(this.filter1.frequency);
  }

  //FILTER MOD

  this.filterMod = context.createOscillator();
  this.filterMod.frequency.value = this.noteFrequency / 2;
  if (this.glide == true) {
    this.filterMod.frequency.setTargetAtTime(
      this.newNoteFrequency / 2,
      context.currentTime,
      this.glideAmount
    );
  }
  this.filterMod.start();
  this.filter1FM = context.createGain();
  this.filterMod.connect(this.filter1FM);
  this.filter1FM.connect(this.filter1.frequency);

  this.filter1ResOrig = this.filter1ResonanceValue;

  if (this.filter1Freq < 1000) {
    this.filter1ResonanceValue =
      this.filter1ResonanceValue -
      ((1000 - this.filter1Freq) / 1000) *
        (document.getElementById("filter1FreqMod").value / 100);
  }

  this.filter1FMAmount =
    this.filter1FMAmount / 2 + (this.filter1Env * this.filter1FMAmount) / 2;
  this.filter1.Q.value = this.filter1ResonanceValue;
  this.filter1FM.gain.value = this.filter1FMAmount;

  if (filterTypes[0] != "lowpass") {
    this.filter1FM.gain.value = 0;
  }

  //ENVELOPE VARIABLES

  this.osc1Level = document.getElementById("osc1Level").value / 1000;
  this.osc2Level = document.getElementById("osc2Level").value / 1000;
  this.subLevel = document.getElementById("subLevel").value / 4000;
  this.attackEnv = document.getElementById("attack").value / 25 + 0.009;
  this.decayEnv = document.getElementById("decay").value / 25 + 0.01;
  this.sustainEnv = document.getElementById("sustain").value / 200 + 0.000001;
  this.whiteLevel = document.getElementById("whiteLevel").value / 20000;
  this.sustainEnv1 = 2 * this.sustainEnv * this.osc1Level;
  this.sustainEnv2 = 2 * this.sustainEnv * this.osc2Level;
  this.whiteSustain = 2 * this.sustainEnv * this.whiteLevel;
  this.subSustain = 2 * this.sustainEnv * this.subLevel;
  this.filter1Peak =
    this.filter1Freq + (5000 + this.filter1Freq * 1.5) * (1 - this.filter1Env);
  this.filter1Env = 2 * (this.filter1Env - 0.5);

  if (this.filter1Peak > 20000) {
    this.filter1Peak = 20000;
  }

  this.filter1PeakFMAmount =
    (this.filter1Peak * this.filter1FMAmount) / this.filter1Freq;

  if (this.attackEnv < 0.05) {
    this.filter1.frequency.setValueAtTime(
      this.filter1Peak,
      context.currentTime
    );
  } else {
    this.filter1.frequency.setValueAtTime(
      this.filter1Freq,
      context.currentTime
    );
  }

  //ATTACK

  this.filter1SusLevel =
    this.filter1Freq +
    (this.filter1Peak - this.filter1Freq) *
      this.sustainEnv *
      this.sustainEnv *
      4 *
      (1 - this.filter1Env);
  this.filter1ResPeak =
    (this.filter1ResOrig - this.filter1ResonanceValue) * (1 - this.filter1Env) +
    this.filter1ResonanceValue;
  this.filter1ResSus =
    (this.filter1ResPeak - this.filter1ResonanceValue) *
      (this.filter1SusLevel / this.filter1Freq) +
    this.filter1ResonanceValue;

  this.osc1MasterGain.gain.setTargetAtTime(
    this.osc1Level,
    context.currentTime,
    this.attackEnv / 3
  );
  this.osc2MasterGain.gain.setTargetAtTime(
    this.osc2Level,
    context.currentTime,
    this.attackEnv / 3
  );
  this.whiteNoiseGain.gain.setTargetAtTime(
    this.whiteLevel,
    context.currentTime,
    this.attackEnv / 3
  );
  this.filter1.frequency.setTargetAtTime(
    this.filter1Peak,
    context.currentTime,
    this.attackEnv / 3
  );
  this.subGain.gain.setTargetAtTime(
    this.subLevel,
    context.currentTime,
    this.attackEnv / 3
  );
  this.osc1MasterGain.gain.cancelScheduledValues(
    context.currentTime + this.attackEnv / 3
  );
  this.osc2MasterGain.gain.cancelScheduledValues(
    context.currentTime + this.attackEnv / 3
  );
  this.whiteNoiseGain.gain.cancelScheduledValues(
    context.currentTime + this.attackEnv / 3
  );
  this.filter1.frequency.cancelScheduledValues(
    context.currentTime + this.attackEnv / 3
  );
  this.lfofilter1.gain.setTargetAtTime(
    this.filter1Freq,
    context.currentTime,
    this.attackEnv / 3
  );
  this.filter1.Q.setTargetAtTime(
    this.filter1ResPeak,
    context.currentTime,
    this.attackEnv / 3
  );
  if (filterTypes[0] == "lowpass") {
    this.filter1FM.gain.setTargetAtTime(
      this.filter1PeakFMAmount,
      context.currentTime,
      this.attackEnv / 3
    );
  }

  //DECAY

  this.osc1MasterGain.gain.setTargetAtTime(
    this.sustainEnv1,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.osc2MasterGain.gain.setTargetAtTime(
    this.sustainEnv2,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.whiteNoiseGain.gain.setTargetAtTime(
    this.whiteSustain,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.filter1.frequency.setTargetAtTime(
    this.filter1SusLevel,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.lfofilter1.gain.setTargetAtTime(
    this.filter1SusLevel,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.filter1.Q.setTargetAtTime(
    this.filter1ResSus,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  this.subGain.gain.setTargetAtTime(
    this.subSustain,
    context.currentTime + this.attackEnv / 3 + 0.01,
    this.decayEnv / 5
  );
  if (filterTypes[0] == "lowpass") {
    this.filter1FM.gain.setTargetAtTime(
      (this.filter1FMAmount * this.filter1SusLevel) / this.filter1Freq,
      context.currentTime + this.attackEnv / 3 + 0.01,
      this.decayEnv / 5
    );
  }

  //STOP NOTE

  this.stop = (blah) => {
    if (this.recNoteOrNot == true) {
      let l = new Date().getTime() - this.startTime.getTime();
      recordedNotes[this.recNote].length = l;
    }

    this.release = document.getElementById("release").value / 30 + 0.012;
    this.filterRelease = this.release + 0.2;

    this.osc1MasterGain.gain.cancelScheduledValues(context.currentTime);
    this.osc2MasterGain.gain.cancelScheduledValues(context.currentTime);
    this.whiteNoiseGain.gain.cancelScheduledValues(context.currentTime);
    this.subGain.gain.cancelScheduledValues(context.currentTime);
    this.filter1.frequency.cancelScheduledValues(context.currentTime);
    this.osc1MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      this.release / 4 + 0.002
    );
    this.osc2MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      this.release / 4 + 0.002
    );
    this.whiteNoiseGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      this.release / 4
    );
    this.subGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      this.release / 4 + 0.002
    );
    this.filter1.frequency.setTargetAtTime(
      this.filter1Freq,
      context.currentTime,
      this.filterRelease / 3 + 0.1
    );
    this.lfofilter1.gain.setTargetAtTime(
      this.filter1Freq * this.filter1Env,
      context.currentTime,
      this.filterRelease / 4
    );
    if (filterTypes[0] == "lowpass") {
      this.filter1FM.gain.setTargetAtTime(
        0,
        context.currentTime,
        this.filterRelease / 4
      );
    }
    this.filter1.Q.setTargetAtTime(
      this.filter1ResonanceValue / 2,
      context.currentTime,
      this.filterRelease / 4
    );
    this.osc1MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime + this.release + 0.05,
      0.1
    );
    this.osc2MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime + this.release + 0.05,
      0.1
    );
    this.whiteNoiseGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime + this.release + 0.05,
      0.1
    );
    this.subGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime + this.release + 0.05,
      0.1
    );
    if (filterTypes[0] == "lowpass") {
      this.filter1FM.gain.setTargetAtTime(
        this.filter1FMAmount,
        context.currentTime,
        this.release / 4 + 0.002
      );
    }

    whichNotesAreOnRelease.push(this);
    if (type != "sequencer") {
      this.x[note] = null;
    }
    delete allNotes[blah];
    allNotes.splice(blah, 1);

    for (i in mouseArray) {
      if (mouseArray[i] > blah) {
        mouseArray[i]--;
      }
    }

    for (i in keyArray) {
      if (keyArray[i] > blah) {
        keyArray[i]--;
      }
    }

    if (octave == 0.5 * currentOctave) {
      let g;
      if (note == 5) {
        g = 0;
      }
      if (note == 15) {
        g = 8;
      }
      if (note == 6) {
        g = 1;
      }
      if (note == 16) {
        g = 9;
      }
      if (note == 7) {
        g = 2;
      }
      if (g == 0 || g == 8 || g == 1 || g == 9 || g == 2) {
        whichKeysAreLit[g]--;
        if (whichKeysAreLit[g] < 0) {
          whichKeysAreLit[g] = 0;
        }
        if (whichKeysAreLit[g] == 0) {
          document.getElementById("note" + g).style.border =
            "1px solid #a0a0a0";
          document.getElementById("note" + g).style.color = "";
        }
      }
    } else if (octave == 2 * currentOctave) {
      let g;
      if (note == 0) {
        g = 5;
      }
      if (note == 8) {
        g = 15;
      }
      if (note == 1) {
        g = 6;
      }
      if (note == 9) {
        g = 16;
      }
      if (note == 2) {
        g = 7;
      }
      if (g == 5 || g == 15 || g == 6 || g == 16 || g == 7) {
        whichKeysAreLit[g]--;
        if (whichKeysAreLit[g] < 0) {
          whichKeysAreLit[g] = 0;
        }
        if (whichKeysAreLit[g] == 0) {
          document.getElementById("note" + g).style.border =
            "1px solid #a0a0a0";
          document.getElementById("note" + g).style.color = "";
        }
      }
    } else if (octave == currentOctave) {
      whichKeysAreLit[note]--;
      if (whichKeysAreLit[note] < 0) {
        whichKeysAreLit[note] = 0;
      }
      if (whichKeysAreLit[note] == 0) {
        document.getElementById("note" + note).style.border =
          "1px solid #a0a0a0";
        document.getElementById("note" + note).style.color = "";
      }
    }

    // setTimeout(() => {
    //     console.log(this);
    //     this.terminate();
    // }, 5000);
  };

  this.wave = (wave, osc) => {
    let a = eval("this.osc" + osc + "Gain");
    let b = eval("this.pulse" + osc + "Gain");
    let c = eval("this.osc" + osc);

    if (wave == "pulse") {
      a.gain.setTargetAtTime(0.000001, context.currentTime, 0.002);
      b.gain.setTargetAtTime(0.1, context.currentTime, 0.002);
    } else {
      c.type = wave;
      b.gain.setTargetAtTime(0.000001, context.currentTime, 0.002);
      a.gain.setTargetAtTime(0.1, context.currentTime, 0.002);
    }
  };

  this.terminate = () => {
    this.osc1MasterGain.gain.cancelScheduledValues(context.currentTime);
    this.osc2MasterGain.gain.cancelScheduledValues(context.currentTime);
    this.whiteNoiseGain.gain.cancelScheduledValues(context.currentTime);
    this.subGain.gain.cancelScheduledValues(context.currentTime);
    this.osc1MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      0.003
    );
    this.osc2MasterGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      0.003
    );
    this.whiteNoiseGain.gain.setTargetAtTime(
      0.000001,
      context.currentTime,
      0.003
    );
    this.subGain.gain.setTargetAtTime(0.000001, context.currentTime, 0.003);

    setTimeout(() => {
      this.osc1.frequency.cancelScheduledValues(context.currentTime);
      this.pulse1.frequency.cancelScheduledValues(context.currentTime);
      this.osc2.frequency.cancelScheduledValues(context.currentTime);
      this.pulse2.frequency.cancelScheduledValues(context.currentTime);
      this.sub.frequency.cancelScheduledValues(context.currentTime);
      this.osc1FM.frequency.cancelScheduledValues(context.currentTime);
      this.osc2FM.frequency.cancelScheduledValues(context.currentTime);
      this.lfo.frequency.cancelScheduledValues(context.currentTime);
      this.filterMod.frequency.cancelScheduledValues(context.currentTime);
      this.osc1.stop();
      this.pulse1.stop();
      this.osc2.stop();
      this.pulse2.stop();
      this.sub.stop();
      this.osc1FM.stop();
      this.osc2FM.stop();
      this.lfo.stop();
      this.filterMod.stop();
      this.whiteAmpModulator.stop();
      this.whiteNoise.whiteNoise.stop();
      this.pulse1.stop();
      this.pulse2.stop();
      this.osc1Gain.gain.cancelScheduledValues(context.currentTime);
      this.pulse1Gain.gain.cancelScheduledValues(context.currentTime);
      this.osc1MasterGain.gain.cancelScheduledValues(context.currentTime);
      this.osc2Gain.gain.cancelScheduledValues(context.currentTime);
      this.pulse2Gain.gain.cancelScheduledValues(context.currentTime);
      this.osc2MasterGain.gain.cancelScheduledValues(context.currentTime);
      this.subGain.gain.cancelScheduledValues(context.currentTime);
      this.osc1FMGain.gain.cancelScheduledValues(context.currentTime);
      this.osc2FMGain.gain.cancelScheduledValues(context.currentTime);
      this.whiteNoiseAmpMod.gain.cancelScheduledValues(context.currentTime);
      this.whiteNoiseGain.gain.cancelScheduledValues(context.currentTime);
      this.whiteAmpModAmount.gain.cancelScheduledValues(context.currentTime);
      this.lfoGain.gain.cancelScheduledValues(context.currentTime);
      this.lfoGainOsc1.gain.cancelScheduledValues(context.currentTime);
      this.lfoGainOsc2.gain.cancelScheduledValues(context.currentTime);
      this.filter1Level.gain.cancelScheduledValues(context.currentTime);
      this.filter1.frequency.cancelScheduledValues(context.currentTime);
      this.filter2lfo.gain.cancelScheduledValues(context.currentTime);
      this.filter1FM.gain.cancelScheduledValues(context.currentTime);
      this.filter1Gain.gain.cancelScheduledValues(context.currentTime);
      this.subGain.gain.cancelScheduledValues(context.currentTime);
      this.lfofilter1.gain.cancelScheduledValues(context.currentTime);
    }, 40);

    setTimeout(() => {
      this.whiteAmpModulator.disconnect();
      this.whiteNoise.whiteNoise.disconnect();
      this.pulse1.disconnect();
      this.osc1Gain.disconnect();
      this.pulse1Gain.disconnect();
      this.osc1MasterGain.disconnect();
      this.pulse2.disconnect();
      this.osc2Gain.disconnect();
      this.pulse2Gain.disconnect();
      this.osc2MasterGain.disconnect();
      this.subGain.disconnect();
      this.osc1FMGain.disconnect();
      this.osc2FMGain.disconnect();
      this.whiteNoiseAmpMod.disconnect();
      this.whiteNoiseGain.disconnect();
      this.whiteAmpModAmount.disconnect();
      this.lfoGain.disconnect();
      this.lfoGainOsc1.disconnect();
      this.lfoGainOsc2.disconnect();
      this.filter1Level.disconnect();
      this.filter1.disconnect();
      this.filter2lfo.disconnect();
      this.filter1FM.disconnect();
      this.filter1Gain.disconnect();
      this.subGain.disconnect();
      this.lfofilter1.disconnect();
      this.osc1.disconnect();
      this.pulse1.disconnect();
      this.osc2.disconnect();
      this.pulse2.disconnect();
      this.sub.disconnect();
      this.osc1FM.disconnect();
      this.osc2FM.disconnect();
      this.lfo.disconnect();
      this.filterMod.disconnect();
      delete this.x;
      delete this.thisOne;
      delete this.whiteNoise;
      delete this.recNoteOrNot;
      delete this.startTime;
      delete this.id;
      delete this.osc1Coarse;
      delete this.osc2Coarse;
      delete this.osc1Fine;
      delete this.osc2Fine;
      delete this.noteFrequency;
      delete this.noteFrequency1;
      delete this.noteFrequency2;
      delete this.glideAmount;
      delete this.newNoteFrequency;
      delete this.newNoteFrequency1;
      delete this.newNoteFrequency2;
      delete this.glide;
      delete this.osc1;
      delete this.osc1Gain;
      delete this.osc1MasterGain;
      delete this.pulse1;
      delete this.pulse1Gain;
      delete this.osc1FM;
      delete this.osc1FMGain;
      delete this.osc2;
      delete this.osc2Gain;
      delete this.osc2MasterGain;
      delete this.pulse2;
      delete this.pulse2Gain;
      delete this.osc2FM;
      delete this.osc2FMGain;
      delete this.filter1Level;
      delete this.whiteNoiseAmpMod;
      delete this.whiteNoiseGain;
      delete this.whiteAmpModulator;
      delete this.whiteAmpModAmount;
      delete this.sub;
      delete this.subGain;
      delete this.filter1;
      delete this.filter1Gain;
      delete this.filter1Freq;
      delete this.filter1FMAmount;
      delete this.filter1Env;
      delete this.f1FM;
      delete this.subFilter1Multiplier;
      delete this.filter1ResonanceValue;
      delete this.lfoKeytrack;
      delete this.lfo;
      delete this.lfoSpeed;
      delete this.lfoGain;
      delete this.lfoGainOsc1;
      delete this.lfoGainOsc2;
      delete this.filter2lfo;
      delete this.lfofilter1;
      delete this.lfofilter2;
      delete this.filterMod;
      delete this.filter1FM;
      delete this.filter1ResOrig;
      delete this.osc1Level;
      delete this.osc2Level;
      delete this.subLevel;
      delete this.attackEnv;
      delete this.decayEnv;
      delete this.sustainEnv;
      delete this.whiteLevel;
      delete this.sustainEnv1;
      delete this.sustainEnv2;
      delete this.whiteSustain;
      delete this.subSustain;
      delete this.filter1Peak;
      delete this.filter1PeakFMAmount;
      delete this.filter1SusLevel;
      delete this.filter1ResPeak;
      delete this.filter1ResSus;
      delete this.stop;
      delete this.terminate;
      delete this.wave;
      this.x = null;
      this.thisOne = null;
      this.recNoteOrNot = null;
      this.startTime = null;
      this.id = null;
      this.osc1Coarse = null;
      this.osc2Coarse = null;
      this.osc1Fine = null;
      this.osc2Fine = null;
      this.noteFrequency = null;
      this.noteFrequency1 = null;
      this.noteFrequency2 = null;
      this.glideAmount = null;
      this.newNoteFrequency = null;
      this.newNoteFrequency1 = null;
      this.newNoteFrequency2 = null;
      this.glide = null;
      this.osc1 = null;
      this.osc1Gain = null;
      this.osc1MasterGain = null;
      this.pulse1 = null;
      this.pulse1Gain = null;
      this.osc1FM = null;
      this.osc1FMGain = null;
      this.osc2 = null;
      this.osc2Gain = null;
      this.osc2MasterGain = null;
      this.pulse2 = null;
      this.pulse2Gain = null;
      this.osc2FM = null;
      this.osc2FMGain = null;
      this.filter1Level = null;
      this.whiteNoiseAmpMod = null;
      this.whiteNoiseGain = null;
      this.whiteAmpModulator = null;
      this.whiteAmpModAmount = null;
      this.sub = null;
      this.subGain = null;
      this.filter1 = null;
      this.filter1Gain = null;
      this.filter1Freq = null;
      this.filter1FMAmount = null;
      this.filter1Env = null;
      this.f1FM = null;
      this.subFilter1Multiplier = null;
      this.filter1ResonanceValue = null;
      this.lfoKeytrack = null;
      this.lfo = null;
      this.lfoSpeed = null;
      this.lfoGain = null;
      this.lfoGainOsc1 = null;
      this.lfoGainOsc2 = null;
      this.filter2lfo = null;
      this.lfofilter1 = null;
      this.lfofilter2 = null;
      this.filterMod = null;
      this.filter1FM = null;
      this.filter1ResOrig = null;
      this.osc1Level = null;
      this.osc2Level = null;
      this.subLevel = null;
      this.attackEnv = null;
      this.decayEnv = null;
      this.sustainEnv = null;
      this.whiteLevel = null;
      this.sustainEnv1 = null;
      this.sustainEnv2 = null;
      this.whiteSustain = null;
      this.subSustain = null;
      this.filter1Peak = null;
      this.filter1PeakFMAmount = null;
      this.filter1SusLevel = null;
      this.filter1ResPeak = null;
      this.filter1ResSus = null;
      this.stop = null;
      this.terminate = null;
      this.wave = null;
      delete this;
      this == undefined;
      this == null;
    }, 250);
  };

  if (octave == 0.5 * currentOctave) {
    let g;
    if (note == 5) {
      g = 0;
    }
    if (note == 15) {
      g = 8;
    }
    if (note == 6) {
      g = 1;
    }
    if (note == 16) {
      g = 9;
    }
    if (note == 7) {
      g = 2;
    }
    if (g == 0 || g == 8 || g == 1 || g == 9 || g == 2) {
      whichKeysAreLit[g]++;
      document.getElementById("note" + g).style.border = "2px solid #2db5ff";
      document.getElementById("note" + g).style.color = "#2db5ff";
    }
  } else if (octave == 2 * currentOctave) {
    let g;
    if (note == 0) {
      g = 5;
    }
    if (note == 8) {
      g = 15;
    }
    if (note == 1) {
      g = 6;
    }
    if (note == 9) {
      g = 16;
    }
    if (note == 2) {
      g = 7;
    }
    if (g == 5 || g == 15 || g == 6 || g == 16 || g == 7) {
      whichKeysAreLit[g]++;
      document.getElementById("note" + g).style.border = "2px solid #2db5ff";
      document.getElementById("note" + g).style.color = "#2db5ff";
    }
  } else if (octave == currentOctave) {
    whichKeysAreLit[note]++;
    document.getElementById("note" + note).style.border = "2px solid #2db5ff";
    document.getElementById("note" + note).style.color = "#2db5ff";
  }
}

function stopNote(note, type) {
  let x = null;
  if (type == "key") {
    x = keyArray;
  } else if (type == "mouse") {
    x = mouseArray;
  }

  let y = x[note];
  allNotes[y].stop(y);
  x[note] = null;
}

//OSCILLATOR WAVE UPDATE

function oscWaveUpdate(osc, wave) {
  if (osc == 1) {
    osc1Type = wave;
    currentSound.osc1Wave = wave;
  } else {
    osc2Type = wave;
    currentSound.osc2Wave = wave;
  }

  for (i in allNotes) {
    if (allNotes[i] != null) {
      allNotes[i].wave(wave, osc);
    }
  }

  for (i in whichNotesAreOnRelease) {
    if (whichNotesAreOnRelease[i] != null) {
      whichNotesAreOnRelease[i].wave(wave, osc);
    }
  }

  document.getElementById("osc" + osc + "sine").style.color = "#a8a8a8";
  document.getElementById("osc" + osc + "sawtooth").style.color = "#a8a8a8";
  document.getElementById("osc" + osc + "triangle").style.color = "#a8a8a8";
  document.getElementById("osc" + osc + "pulse").style.color = "#a8a8a8";
  document.getElementById("osc" + osc + wave).style.color = "#2db5ff";
}

// UPDATE OCTAVE

function octaveChange(oct) {
  let x = currentOctave * oct;

  if (x > 0.2 && x < 4.1) {
    4;
    currentOctave = x;
    document.getElementById("octDown").style.color = "#a8a8a8";
    document.getElementById("octUp").style.color = "#a8a8a8";

    if (currentOctave != 1) {
      let y = "#2db5ff";
      let x;
      if (currentOctave > 1) {
        x = "octUp";
      } else if (currentOctave < 1) {
        x = "octDown";
      }
      if (currentOctave > 2 || currentOctave < 0.5) {
        y = "red";
      }
      document.getElementById(x).style.color = y;
    }
  }

  for (i = 0; i <= 16; i++) {
    whichKeysAreLit[i] = 0;
    document.getElementById("note" + i).style.border = "1px solid #a0a0a0";
    document.getElementById("note" + i).style.color = "";
  }
}

//ENVELOPE SENDS

var envSends = new Array(4).fill(false);

function envSend(send) {
  let x = "envSend" + send;

  if (envSends[send] == false) {
    envSends[send] = true;
    document.getElementById(x).style.color = "#2db5ff";
  } else {
    envSends[send] = false;
    document.getElementById(x).style.color = "#a8a8a8";
  }
}

var lfoSends2 = new Array(6).fill(false);

//LFO SENDS

function lfoSends(lfo, send) {
  let x = "lfoSends" + lfo;

  if (eval(x)[send] == false) {
    eval(x)[send] = true;
    document.getElementById("lfo" + lfo + send).style.color = "#2db5ff";
  } else {
    eval(x)[send] = false;
    document.getElementById("lfo" + lfo + send).style.color = "#a8a8a8";
  }

  currentSound.lfoSend = lfoSends2;
}

var lfoType2 = "sine";

function lfoType(lfo, type) {
  for (i = 0; i <= 3; i++) {
    document.getElementById("lfoType" + lfo + i).style.color = "#a8a8a8";
  }

  document.getElementById("lfoType" + lfo + type).style.color = "#2db5ff";
  let x = "sine";
  if (type == 1) {
    x = "sawtooth";
  } else if (type == 2) {
    x = "triangle";
  } else if (type == 3) {
    x = "square";
  }
  if (lfo == 1) {
    lfoType1 = x;
  } else {
    lfoType2 = x;
  }
  currentSound.lfoWave = type;
}

//FILTER AMOUNTS

var keyOnOrOff = new Array(2).fill(false);

function filterKey(filter, data) {
  let y = "On";
  let a = false;
  if (data == "On") {
    y = "Off";
    a = true;
  }
  let z = "filter" + filter + "Key" + y;
  let x = "filter" + filter + "Key" + data;
  document.getElementById(z).style.color = "#a8a8a8";
  document.getElementById(x).style.color = "#2db5ff";
  keyOnOrOff[filter - 1] = a;
  currentSound.filterKeytrack = a;
}

var filterTypes = new Array(2).fill("lowpass");

function filterType(filter, type) {
  document.getElementById("filter" + filter + "lowpass").style.color =
    "#a8a8a8";
  document.getElementById("filter" + filter + "highpass").style.color =
    "#a8a8a8";
  document.getElementById("filter" + filter + "bandpass").style.color =
    "#a8a8a8";
  document.getElementById("filter" + filter + type).style.color = "#2db5ff";
  filterTypes[filter - 1] = type;
  currentSound.filterType = type;
}

//EFFECTS

var toEffects = context.createGain();
toEffects.gain.value = 1;

//DISTORTION

let distortionGainNode = context.createGain();
distortionGainNode.gain.value = 0.00001;
let distortionNode = context.createWaveShaper();
let dryAudio = context.createGain();
dryAudio.gain.value = 0.99999;
toEffects.connect(dryAudio);
let wetDistortion = context.createGain();
wetDistortion.gain.value = 0.000001;

//distortion curve courtesy of Alexander Leon;

function makeDistortionCurve(amount) {
  let k = amount;
  let n_samples = typeof sampleRate === "number" ? sampleRate : 44100;
  let curve = new Float32Array(n_samples);
  let deg = Math.PI / 180;
  let i = 0;
  let x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] =
      ((3 + k) * Math.atan(Math.sinh(x * 0.25) * 5)) /
      (Math.PI + k * Math.abs(x));
  }
  return curve;
}

distortionNode.curve = makeDistortionCurve(400);
toEffects.connect(distortionGainNode);
distortionGainNode.connect(distortionNode);
distortionNode.connect(wetDistortion);

function distortionValue(value) {
  let x = value / 99 + 0.000001;
  distortionGainNode.gain.value = x / 1.3;
  dryAudio.gain.value = Math.cos(x * 0.5 * Math.PI);
  wetDistortion.gain.value = Math.cos((1.0 - x) * 0.5 * Math.PI);
}

let distortionOutGain = context.createGain();
distortionOutGain.gain.value = 0.03;
wetDistortion.connect(distortionOutGain);
let tremoloIn = context.createGain();
tremoloIn.gain.value = 1;
distortionOutGain.connect(tremoloIn);
dryAudio.connect(tremoloIn);

//DELAY

var reverbIn = context.createGain();
reverbIn.gain.value = 2;
var delayDry = context.createGain();
delayDry.gain.value = 1;
var delayWet = context.createGain();
delayWet.gain.value = 1;
var delay = context.createDelay();
delay.delayTime.value = 0.52;
var reverbBugFix = context.createDynamicsCompressor();
reverbBugFix.threshold = -2;
delayDry.connect(reverbIn);
reverbBugFix.connect(reverbIn);
var delayFeedback = context.createGain();
delay.connect(delayFeedback);
delayWet.connect(delayFeedback);
delayFeedback.gain.value = 0;
var delayEQ = context.createBiquadFilter();
delayFeedback.connect(delayEQ);
delayEQ.type = "lowshelf";
delayEQ.frequency.value = 500;
delayEQ.gain.value = -8;
var delayEQ2 = context.createBiquadFilter();
delayEQ2.type = "highshelf";
delayEQ2.frequency.value = 3000;
delayEQ2.gain.value = -8;
delayEQ.connect(delayEQ2);
var delayEQ3 = context.createBiquadFilter();
delayEQ3.type = "peaking";
delayEQ3.frequency.value = 2500;
delayEQ3.gain.value = 1;
delayEQ2.connect(delayEQ3);
delayEQ3.connect(delay);

let delayNeat = context.createGain();
delayNeat.gain.value = 4;
delayEQ3.connect(delayNeat);
delayNeat.connect(reverbIn);

//TREMOLO

if (typeof context.createStereoPanner === "function") {
  var tremolo = context.createStereoPanner();
  tremoloIn.connect(tremolo);
  var panner = context.createOscillator();
  var pannerVolume = context.createGain();
  pannerVolume.gain.value = 0;
  panner.frequency.value = 3;
  panner.connect(pannerVolume);
  pannerVolume.connect(tremolo.pan);
  tremolo.connect(delayWet);
  tremolo.connect(delayDry);
} else {
  tremoloIn.connect(delayWet);
  tremoloIn.connect(delayDry);
}

function tremoloLevel(value) {
  if (typeof context.createStereoPanner === "function") {
    let x = value / 100;
    pannerVolume.gain.value = x;
  }
}

function tremoloSpeed(value) {
  if (typeof context.createStereoPanner === "function") {
    let x = value / 20 + 0.5;
    panner.frequency.value = x;
  }
}

//COMPRESSOR

var compressor = context.createDynamicsCompressor();
var masterGain = context.createGain();
masterGain.gain.value = 1.4;
var masterCompressor = context.createDynamicsCompressor();
compressor.connect(masterGain);
masterGain.connect(masterCompressor);
masterCompressor.connect(context.destination);
delayEQ3.connect(compressor);

//MASTER GAIN LEVEL

function masterGainControl(gain) {
  masterGain.gain.value = (gain * 1.4) / 100;
}

//REVERB

var reverb = context.createConvolver();
var reverbGain = context.createGain();
reverbGain.gain.value = 2;
reverbGain.connect(reverb);
var anotherReverbGain = context.createGain();
anotherReverbGain.gain.value = 0;
reverbIn.connect(anotherReverbGain);
var takeOutLow = context.createBiquadFilter();
takeOutLow.type = "lowshelf";
takeOutLow.frequency.value = 400;
takeOutLow.gain.value = -10;
anotherReverbGain.connect(takeOutLow);
takeOutLow.connect(reverb);

var loadImpulse = function () {
  let url = "audio/impulse.wav";
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";
  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      reverb.buffer = buffer;
    });
  };
  request.send();
};

loadImpulse();

var takeOutLowPost = context.createBiquadFilter();
takeOutLowPost.type = "lowshelf";
takeOutLowPost.frequency.value = 400;
takeOutLowPost.gain.value = -20;
reverb.connect(takeOutLowPost);
takeOutLowPost.connect(compressor);
var dryGain = context.createGain();
dryGain.gain.value = 2;
reverbIn.connect(dryGain);
dryGain.connect(compressor);

//ECHO UPDATES

function echoSpeedUpdate(value) {
  delay.delayTime.value = value / 100;
}

function echoLevelUpdate(value) {
  delayFeedback.gain.value = value / 200;
  anotherReverbGain.gain.value = value / 200;
  dryGain.gain.value = (150 - value) / 50;
}

//METRONOME

var bar = null;
var beat = null;
var kick = null;
var hat = null;
var clap = null;
var clap2 = null;
var german = null;

function loadHat(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      hat = buffer;
    });
  };
  request.send();
}

function loadKick(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      kick = buffer;
    });
  };
  request.send();
}

function loadClap(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      clap = buffer;
    });
  };
  request.send();
}

function loadClap2(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      clap2 = buffer;
    });
  };
  request.send();
}

function loadBar(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      bar = buffer;
    });
  };
  request.send();
}

function loadBeat(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      beat = buffer;
    });
  };
  request.send();
}

function loadGerman(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      german = buffer;
    });
  };
  request.send();
}

loadHat("audio/hat.wav");
loadKick("audio/kick.wav");
loadClap("audio/clap.wav");
loadClap2("audio/clap2.wav");
loadBar("audio/bar.mp3");
loadBeat("audio/beat.mp3");
loadGerman("audio/german.mp3");

var drumVolume = context.createGain();
drumVolume.connect(masterCompressor);
drumVolume.gain.value = 0.7;

function playSound(buffer, delay) {
  let source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(drumVolume);
  source.start(delay);
}

var rec = false;
var play = false;
var counter = 1;
var continueMetronome = false;
var loopLength = 4;
var lastBeatDate = null;
var speed = 500;
var currentBeat = 1;
var id = 0;
var justPressedPlay = true;

function checkTouchDevice() {
  return "ontouchstart" in document.documentElement;
}

function metronomeFunction() {
  lastBeatDate = new Date();
  currentBeat = counter;

  //SEE IF ANY RECORDED NOTES NEED PLAYING

  if (document.hasFocus() == true || checkTouchDevice() == true) {
    //PLAY NOTE WHEN PLAY IS PRESSED IF JUST BEFORE END OF LOOP AND QUANTIZE IS ON

    if (currentBeat == 1) {
      for (i in recordedNotes) {
        if (
          quantize == true &&
          recordedNotes[i].beat == loopLength &&
          recordedNotes[i].start > 0.875 &&
          justPressedPlay == true
        ) {
          let x = recordedNotes[i];
          let d = id;
          id++;
          if (play == true) {
            new Note(x.note, x.octave, "sequencer", d);
          }
          setTimeout(function () {
            let j;
            for (j in allNotes) {
              if (allNotes[j] != null) {
                if (allNotes[j].id == d) {
                  allNotes[j].stop(j);
                  break;
                }
              }
            }
          }, x.length);
        }
      }
    }

    if (play == true) {
      justPressedPlay = false;
    }

    //PLAY THE REST

    for (i in recordedNotes) {
      if (recordedNotes[i].beat == currentBeat) {
        let x = recordedNotes[i];
        let y = x.start * speed;
        if (quantize == true) {
          y = (Math.round(x.start * 4) / 4) * speed;
        }
        let d = id;
        id++;

        //PLAY RECORDED NOTES

        let time1 = setTimeout(function () {
          if (play == true) {
            new Note(x.note, x.octave, "sequencer", d);
          }
          clearTimeout(time1);
        }, y);

        //STOP RECORDED NOTES

        let time2 = setTimeout(function () {
          let j;
          for (j in allNotes) {
            if (allNotes[j] != null) {
              if (allNotes[j].id == d) {
                allNotes[j].stop(j);
                break;
              }
            }
          }
          clearTimeout(time2);
        }, x.length + y);
      }
    }
  }

  //PLAY DRUMS

  let remainder = (currentBeat - 1) % 4;
  let startOnThis = 4 * remainder;
  let drumDelay = speed / 4;
  let endOnThis = startOnThis + 3;

  for (i = startOnThis; i <= endOnThis; i++) {
    let tt = i;
    let multiplier = tt % 4;

    setTimeout(function () {
      if (
        toggleInfo[0] == true &&
        play == true &&
        (document.hasFocus() == true || checkTouchDevice() == true)
      ) {
        if (kickData[tt] == true) {
          playSound(kick, 0);
        }
        document.getElementById("kick" + tt).style.border = "2px solid #2db5ff";
        setTimeout(function () {
          document.getElementById("kick" + tt).style.border =
            "1px solid rgba(39, 31, 51, 0.3)";
        }, speed / 4);
      }

      if (
        toggleInfo[1] == true &&
        play == true &&
        (document.hasFocus() == true || checkTouchDevice() == true)
      ) {
        if (clapData[tt] == true) {
          playSound(clap, 0);
          playSound(clap2, 0);
        }
        document.getElementById("clap" + tt).style.border = "2px solid #2db5ff";
        setTimeout(function () {
          document.getElementById("clap" + tt).style.border =
            "1px solid rgba(39, 31, 51, 0.3)";
        }, speed / 4);
      }

      if (
        toggleInfo[2] == true &&
        play == true &&
        (document.hasFocus() == true || checkTouchDevice() == true)
      ) {
        if (hatData[tt] == true) {
          playSound(hat, 0);
        }
        document.getElementById("hat" + tt).style.border = "2px solid #2db5ff";
        setTimeout(function () {
          document.getElementById("hat" + tt).style.border =
            "1px solid rgba(39, 31, 51, 0.3)";
        }, speed / 4);
      }
    }, (multiplier * speed) / 4);
  }

  //PLAY METRONOME

  let notx = false;
  if (counter % 4 == 1) {
    notx = true;
  }
  if (rec == true && document.hasFocus() == true) {
    playSound(beat, 0);
    if (notx == true) {
      playSound(bar, 0);
    }
  }
  if (continueMetronome == true) {
    let timeout3 = setTimeout(function () {
      metronomeFunction();
      clearTimeout(timeout3);
    }, speed);
  }
  if (counter >= loopLength) {
    counter = 1;
  } else {
    counter++;
  }
}

//SPEED UPDATE

function playbackSpeed(value) {
  speed = (100 - value) * 5 + 250;
}

//RECORD AND PLAY

function pressRecord() {
  let x = "#a8a8a8";
  if (rec == false) {
    rec = true;
    x = "red";
  } else {
    rec = false;
  }
  document.getElementById("recButton").style.color = x;
}

function pressStop() {
  continueMetronome = false;
  rec = false;
  play = false;
  justPressedPlay = true;
  document.getElementById("playButton").style.color = "#a8a8a8";
  document.getElementById("recButton").style.color = "#a8a8a8";
  document.getElementById("stopButton").style.color = "white";
  let timeout4 = setTimeout(function () {
    document.getElementById("stopButton").style.color = "#a8a8a8";
    clearTimeout(timeout4);
  }, 500);

  stopAllNotes();
}

function pressPlay() {
  if (play == false) {
    play = true;
    counter = 1;
    currentBeat = 1;
    continueMetronome = true;
    metronomeFunction();
    document.getElementById("playButton").style.color = "#2db5ff";
  }
}

//LOOP UPDATE

function loopUpdate(loop) {
  let x = 4 * loop;
  loopLength = x;
  document.getElementById("loop1").style.color = "#a8a8a8";
  document.getElementById("loop2").style.color = "#a8a8a8";
  document.getElementById("loop4").style.color = "#a8a8a8";
  let y = "loop" + loop;
  document.getElementById(y).style.color = "#2db5ff";
}

//RECORDING

var recordedNotes = new Array();

function recordNote(note, octave, number) {
  let x = new Date();
  let y = x.getTime() - lastBeatDate.getTime();
  let z = (y / speed).toFixed(4);
  let a = {
    beat: currentBeat,
    note: note,
    octave: octave,
    start: z,
    length: null,
  };
  recordedNotes[number] = a;
}

function pressClear() {
  recordedNotes = new Array();
  recNoteNumber = 0;
  document.getElementById("clearButton").style.color = "white";
  let timeout5 = setTimeout(function () {
    document.getElementById("clearButton").style.color = "#a8a8a8";
    clearTimeout(timeout5);
  }, 500);

  stopAllNotes();
}

function stopAllNotes() {
  let test = new Array();

  for (i = allNotes.length - 1; i >= 0; i--) {
    if (allNotes[i] != null) {
      test.push(i);
    }
  }

  for (i in test) {
    let x = test[i];
    allNotes[x].stop(x);
  }
}

//QUANTIZE

var quantize = false;

function quantizeOn() {
  let x = "#a8a8a8";
  if (quantize == false) {
    quantize = true;
    x = "#2db5ff";
  } else {
    quantize = false;
  }
  document.getElementById("quantize").style.color = x;
}

var isTextFocussed = false;

//DISABLE NOTES WHEN TEXT AREA IS FOCUSSED

function textFocus(x) {
  isTextFocussed = x;
}

//CURRENT PATCH

var currentSound = new Object();
var savePatchName;
var toggleInfo = [true, true, true];

currentSound.recordedNotes = recordedNotes;
currentSound.currentOctave = currentOctave;
currentSound.quantize = quantize;
currentSound.speed = speed;
currentSound.loopLength = loopLength;

currentSound.osc1Wave = "sine";
currentSound.osc1Coarse = 0;
currentSound.osc1Fine = 0;
currentSound.osc1PW = 0;
currentSound.osc1Level = 100;

currentSound.osc2Wave = "sine";
currentSound.osc2Coarse = 0;
currentSound.osc2Fine = 0;
currentSound.osc2PW = 0;
currentSound.osc2Level = 100;

currentSound.subLevel = 0;
currentSound.noiseLevel = 0;
currentSound.portamento = 0;
currentSound.masterGain = 100;

currentSound.attack = 0;
currentSound.decay = 100;
currentSound.sustain = 100;
currentSound.release = 0;

currentSound.filterType = "lowpass";
currentSound.filterCutoff = 100;
currentSound.resonance = 0;
currentSound.filterKeytrack = false;
currentSound.filterEnvelopeAmount = 0;

currentSound.lfoWave = 0;
currentSound.lfoSpeed = 0;
currentSound.lfoLevel = 0;
currentSound.lfoSend = new Array(5).fill(false);

currentSound.osc1FM = 0;
currentSound.osc2FM = 0;
currentSound.filterFM = 0;
currentSound.noiseAM = 0;

currentSound.overdrive = 0;
currentSound.tremoloSpeed = 50;
currentSound.tremoloLevel = 0;
currentSound.echoSpeed = 52;
currentSound.echoLevel = 0;

//SAVE PATCH

function savePatch() {
  document.getElementById("saveButton").disabled = true;

  let xd = document.getElementById("saveName").value;
  let testtest = true;

  for (i = 0; i < allPatches.length; i++) {
    if (allPatches[i].patchName == xd + ": User") {
      testtest = false;
      break;
    }
  }

  if (testtest == false) {
    stopAllNotes();
    alert("Patch name taken, please write another.");
    document.getElementById("saveButton").disabled = false;
  } else {
    currentSound.recordedNotes = recordedNotes;
    currentSound.currentOctave = currentOctave;
    currentSound.quantize = quantize;
    currentSound.speed = speed;
    currentSound.loopLength = loopLength;

    currentSound.osc1Coarse = document.getElementById("osc1Coarse").value;
    currentSound.osc1Fine = document.getElementById("osc1Fine").value;
    currentSound.osc1PW = document.getElementById("osc1PW").value;
    currentSound.osc1Level = document.getElementById("osc1Level").value;

    currentSound.osc2Coarse = document.getElementById("osc2Coarse").value;
    currentSound.osc2Fine = document.getElementById("osc2Fine").value;
    currentSound.osc2PW = document.getElementById("osc2PW").value;
    currentSound.osc2Level = document.getElementById("osc2Level").value;

    currentSound.subLevel = document.getElementById("subLevel").value;
    currentSound.noiseLevel = document.getElementById("whiteLevel").value;
    currentSound.portamento = document.getElementById("glideAmount").value;
    currentSound.masterGain = document.getElementById("masterGain").value;

    currentSound.attack = document.getElementById("attack").value;
    currentSound.decay = document.getElementById("decay").value;
    currentSound.sustain = document.getElementById("sustain").value;
    currentSound.release = document.getElementById("release").value;

    currentSound.filterCutoff = document.getElementById("filter1Freq").value;
    currentSound.resonance = document.getElementById("filter1Resonance").value;
    currentSound.filterEnvelopeAmount = document.getElementById(
      "filter1Env"
    ).value;

    currentSound.lfoSpeed = document.getElementById("lfoSpeed").value;
    currentSound.lfoLevel = document.getElementById("lfoLevel").value;

    currentSound.osc1FM = document.getElementById("osc1FM").value;
    currentSound.osc2FM = document.getElementById("osc2FM").value;
    currentSound.filterFM = document.getElementById("filter1FreqMod").value;
    currentSound.noiseAM = document.getElementById("noiseAmpMod").value;

    currentSound.overdrive = document.getElementById("distortion").value;
    currentSound.tremoloSpeed = document.getElementById("tremoloSpeed").value;
    currentSound.tremoloLevel = document.getElementById("tremoloLevel").value;
    currentSound.echoSpeed = document.getElementById("echoSpeed").value;
    currentSound.echoLevel = document.getElementById("echoLevel").value;
    currentSound.toggleInfo = toggleInfo;
    currentSound.kickData = kickData;
    currentSound.clapData = clapData;
    currentSound.hatData = hatData;

    let dataSend = new Array();
    dataSend[0] = xd + ": User";
    dataSend[1] = currentSound;
    let json = JSON.stringify(dataSend);
    let request = new XMLHttpRequest();
    request.open("POST", "scripts/savePatch.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(json);
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        location.reload();
      }
    };
  }
}

//GET PATCH DATA ON LOAD

var allPatches = null;
var sessionPatchName;
var sessionPatchData;

window.onload = function () {
  let request = new XMLHttpRequest();
  request.open("POST", "scripts/getPatchNames.php", true);
  request.send();
  if (typeof context.createStereoPanner === "function") {
    panner.start();
  }

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      allPatches = JSON.parse(this.responseText);
      let selectData = '<option class="option"></option>';
      for (i in allPatches) {
        selectData =
          selectData +
          '<option class="option">' +
          allPatches[i].patchName +
          "</option>";
      }
      document.getElementById("select").innerHTML = selectData;
    }
  };

  let session = new XMLHttpRequest();
  session.open("POST", "scripts/getSession.php", true);
  session.send();

  session.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let dataX = JSON.parse(this.responseText);
      sessionPatchName = dataX[0];
      sessionPatchData = dataX[1];
      if (sessionPatchData != null) {
        let newPatchData = JSON.parse(sessionPatchData);
        recordedNotes = newPatchData.recordedNotes;
        document.getElementById("attack").value = parseInt(newPatchData.attack);
        currentOctave = newPatchData.currentOctave;
        if (currentOctave == 0.25) {
          document.getElementById("octDown").style.color = "red";
        } else if (currentOctave == 0.5) {
          document.getElementById("octDown").style.color = "#2db5ff";
        } else if (currentOctave == 2) {
          document.getElementById("octUp").style.color = "#2db5ff";
        } else if (currentOctave == 4) {
          document.getElementById("octUp").style.color = "red";
        }
        document.getElementById("decay").value = parseInt(newPatchData.decay);
        document.getElementById("echoLevel").value = parseInt(
          newPatchData.echoLevel
        );
        echoLevelUpdate(parseInt(newPatchData.echoLevel));
        document.getElementById("echoSpeed").value = parseInt(
          newPatchData.echoSpeed
        );
        echoSpeedUpdate(parseInt(newPatchData.echoSpeed));
        document.getElementById("filter1Freq").value = parseInt(
          newPatchData.filterCutoff
        );
        document.getElementById("filter1Env").value = parseInt(
          newPatchData.filterEnvelopeAmount
        );
        document.getElementById("filter1FreqMod").value = parseInt(
          newPatchData.filterFM
        );
        if (newPatchData.filterKeytrack == true) {
          filterKey(1, "On");
        }
        filterType(1, newPatchData.filterType);
        document.getElementById("lfoLevel").value = parseInt(
          newPatchData.lfoLevel
        );
        for (i = 0; i <= 4; i++) {
          if (newPatchData.lfoSend[i] == true) {
            lfoSends(2, i);
          }
        }
        document.getElementById("lfoSpeed").value = parseInt(
          newPatchData.lfoSpeed
        );
        lfoType(2, parseInt(newPatchData.lfoWave));
        loopUpdate(newPatchData.loopLength / 4);
        document.getElementById("masterGain").value = parseInt(
          newPatchData.masterGain
        );
        masterGainControl(newPatchData.masterGain);
        document.getElementById("noiseAmpMod").value = parseInt(
          newPatchData.noiseAM
        );
        document.getElementById("whiteLevel").value = parseInt(
          newPatchData.noiseLevel
        );
        document.getElementById("osc1Coarse").value = parseInt(
          newPatchData.osc1Coarse
        );
        document.getElementById("osc1FM").value = parseInt(newPatchData.osc1FM);
        document.getElementById("osc1Fine").value = parseInt(
          newPatchData.osc1Fine
        );
        document.getElementById("osc1Level").value = parseInt(
          newPatchData.osc1Level
        );
        document.getElementById("osc1PW").value = parseInt(newPatchData.osc1PW);
        oscWaveUpdate(1, newPatchData.osc1Wave);
        document.getElementById("osc2Coarse").value = parseInt(
          newPatchData.osc2Coarse
        );
        document.getElementById("osc2FM").value = parseInt(newPatchData.osc2FM);
        document.getElementById("osc2Fine").value = parseInt(
          newPatchData.osc2Fine
        );
        document.getElementById("osc2Level").value = parseInt(
          newPatchData.osc2Level
        );
        document.getElementById("osc2PW").value = parseInt(newPatchData.osc2PW);
        oscWaveUpdate(2, newPatchData.osc2Wave);
        document.getElementById("distortion").value = parseInt(
          newPatchData.overdrive
        );
        distortionValue(parseInt(newPatchData.overdrive));
        document.getElementById("release").value = parseInt(
          newPatchData.release
        );
        if (newPatchData.quantize == true) {
          quantizeOn();
        }
        document.getElementById("glideAmount").value = parseInt(
          newPatchData.portamento
        );
        document.getElementById("filter1Resonance").value = parseInt(
          newPatchData.resonance
        );
        speed = newPatchData.speed;
        document.getElementById("playbackSpeed").value =
          100 - (newPatchData.speed - 250) / 5;
        document.getElementById("subLevel").value = parseInt(
          newPatchData.subLevel
        );
        document.getElementById("sustain").value = parseInt(
          newPatchData.sustain
        );
        document.getElementById("tremoloLevel").value = parseInt(
          newPatchData.tremoloLevel
        );
        tremoloLevel(parseInt(newPatchData.tremoloLevel));
        tremoloSpeed(parseInt(newPatchData.tremoloSpeed));
        document.getElementById("tremoloSpeed").value = parseInt(
          newPatchData.tremoloSpeed
        );
        document.getElementById("select").value = sessionPatchName;
        recNoteNumber = recordedNotes.length;

        if (newPatchData.kickData != null) {
          kickData = newPatchData.kickData;
          clapData = newPatchData.clapData;
          hatData = newPatchData.hatData;
          toggleInfo = newPatchData.toggleInfo;

          for (i = 0; i <= 15; i++) {
            if (kickData[i] == true) {
              document.getElementById("kick" + i).style.background =
                "rgba(39, 31, 51, 0.8)";
            }
            if (clapData[i] == true) {
              document.getElementById("clap" + i).style.background =
                "rgba(39, 31, 51, 0.8)";
            }
            if (hatData[i] == true) {
              document.getElementById("hat" + i).style.background =
                "rgba(39, 31, 51, 0.8)";
            }
          }
          for (i = 0; i <= 2; i++) {
            if (toggleInfo[i] == false) {
              document.getElementById("drumToggle" + i).style.color = "#a8a8a8";
            }
          }
        } else {
          kickData = new Array(16).fill(false);
          clapData = new Array(16).fill(false);
          hatData = new Array(16).fill(false);
          toggleInfo = new Array(3).fill(true);
        }
        setTimeout(function () {
          document.getElementById("select").value = sessionPatchName;
        }, 1000);
      }
    }
  };
};

//DRUM MACHINE

//UPDATE ARRAYS

function drumToggle(sound) {
  if (toggleInfo[sound] == true) {
    toggleInfo[sound] = false;
    document.getElementById("drumToggle" + sound).style.color = "#a8a8a8";
  } else {
    toggleInfo[sound] = true;
    document.getElementById("drumToggle" + sound).style.color = "#2db5ff";
  }
}

var kickData = new Array(16).fill(false);
var clapData = new Array(16).fill(false);
var hatData = new Array(16).fill(false);

function drumSequence(sound, number) {
  let x = eval(sound + "Data");

  if (x[number] == false) {
    x[number] = true;
    document.getElementById(sound + number).style.background =
      "rgba(39, 31, 51, 0.8)";
  } else {
    x[number] = false;
    document.getElementById(sound + number).style.background =
      "rgba(39, 31, 51, 0.2)";
  }
}


}
/*
     FILE ARCHIVED ON 11:43:44 Jun 25, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:09:04 Sep 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 129.467
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.054
  cdx.remote: 0.066
  esindex: 0.009
  LoadShardBlock: 64.375 (3)
  PetaboxLoader3.datanode: 743.543 (5)
  load_resource: 2123.407
  PetaboxLoader3.resolve: 1391.741
  loaddict: 675.262
*/
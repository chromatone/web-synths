---
title: Web synths
description: Web synthesizers to play with MIDI controllers
date: 2023-06-22
layout: home
---

<script setup>
import SynthList from './components/SynthList.vue'
import TheForm from './components/TheForm.vue'
import AboutUs from './components/AboutUs.vue'
</script>

<SynthList>

</SynthList>

<AboutUs>
<h2 class="text-lg font-bold">Welcome to our free web synth collection!</h2>

<a href='https://playtronica.com' target='_blank' rel='noopener'>Playtronica</a> is a digital playground that explores the possibilities of the material world through technology, creating gadgets that make the world musical. <a href='https://chromatone.center' target='_blank' rel='noopener'>Chromatone</a> is a visual language for music education, research, and performance. We share our passion for web-based music instruments. Welcome to the community!
</AboutUs>

<TheForm>
We are building a community of web-based musicians. Type in your e-mail to instantly get full access to the collection and occasionally receive community updates.
<template #button>JOIN THE COMMUNITY</template>
<template #notice>Your access status will be saved per device and you won't need to enter your e-mail again.</template>
</TheForm>

---
title: Web synths
description: Web synthesizers to play with MIDI controllers
date: 2023-06-22
layout: home
---

<script setup>
import MainPage from './components/MainPage.vue'
import TheForm from './components/TheForm.vue'
</script>

<MainPage>
<h2 class="text-lg font-bold">Welcome to our free web synth collection!</h2>

<a href='https://playtronica.com' target='_blank' rel='noopener'>Playtronica</a> is a digital playground that explores the possibilities of the material world through technology, creating gadgets that make the world musical. <a href='https://chromatone.center' target='_blank' rel='noopener'>Chromatone</a> is a visual language for music education, research, and performance. We share our passion for web-based synthesizers. Try them out now!
</MainPage>

<TheForm>
We are building a community of web-based musicians. Type in your e-mail to instantly get full access to the collection and occasionally receive community updates.
<template #button>GET FULL ACCESS</template>
<template #notice>Your access status will be saved per device and you won't need to enter your e-mail again.</template>
</TheForm>

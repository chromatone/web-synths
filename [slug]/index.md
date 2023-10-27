---
dynamic: true
page_type: synth
---

<script setup>

import { useData } from 'vitepress'

const { params: p, frontmatter: f } = useData()

</script>

<SynthPage v-bind="p" >

</SynthPage >

<!-- @content -->
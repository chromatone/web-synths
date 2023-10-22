---
dynamic: true
page_type: projects
---

<script setup>
import { useData } from 'vitepress'
const { params: p, frontmatter: f } = useData()

</script>

<SynthPage v-bind="p" />

<!-- @content -->

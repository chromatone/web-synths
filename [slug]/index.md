---
dynamic: true
page_type: projects
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params: p, frontmatter: f } = useData()

</script>

# {{ p.title }}

<!-- @content -->

<pre class="text-xs">{{ p }}</pre>

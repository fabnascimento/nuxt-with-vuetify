<template>
  <div>
    <!-- Site name -->
    <p>{{ siteData.title }}</p>
    <!-- Image -->
    <!-- person -->
    <!-- telephone -->
    <!-- email -->
    <!-- address info -->
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    const siteData = await $axios.$get(
      `http://localhost:3000/sites/${params.id}`
    )
    return { siteData }
  },
}
</script>

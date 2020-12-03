<template>
  <div>
    <v-app-bar>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <SitesSkeleton :active="sites.length < 1" />
    <div v-for="site in sites" :key="site.id">
      <NuxtLink :to="`/site/${site.id}`">
        <span>{{ site.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  // async asyncData({ $axios, params }) {
  //   const sites = await $axios.$get(`http://localhost:3000/sites`)
  //   return { sites }
  // },
  data() {
    return {
      title: 'Sites',
    }
  },
  computed: {
    sites() {
      return this.$store.state.sites.list
    },
  },
  mounted() {
    this.$store.dispatch('sites/getSites')
  },
}
</script>

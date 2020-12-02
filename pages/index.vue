<template>
  <div>
    <v-app-bar>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <SitesSkeleton :active="sites.length < 1" />
    <div v-for="site in sites" :key="site.id">
      <span>{{ site.title }}</span>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'

export default {
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
}
</script>

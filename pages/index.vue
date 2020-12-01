<template>
  <div>
    <v-app-bar>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-skeleton-loader
      v-if="sites.length < 1"
      class="mx-auto"
      type="list-item-avatar-three-line"
    ></v-skeleton-loader>
    <span>{{ sites.length }}</span>
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

<template>
  <div>
    <v-app-bar>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <div>
      <!-- Toolbar -->
    </div>
    <SitesSkeleton :active="sites.length < 1" />
    <v-list three-line>
      <template v-for="site in sites">
        <NuxtLink :key="site.id" :to="`/site/${site.id}`">
          <v-list-item :key="site.id">
            <v-list-item-avatar>
              <v-img :src="site.images[0]"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span>{{ site.title }}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{
                  `${site.address.street}, ${site.address.city} - ${site.address.state}`
                }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{
                  `${site.contacts.main.firstName} ${site.contacts.main.lastName}`
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </NuxtLink>
      </template>
    </v-list>
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

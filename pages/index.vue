<template>
  <div>
    <v-app-bar class="primary">
      <v-spacer />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <div>
      <!-- Toolbar -->
    </div>
    <v-list three-line :v-if="!loading">
      <template v-for="site in sites">
        <NuxtLink :key="site.id" :to="`/site/${site.id}`" class="site-item">
          <v-list-item :key="site.id">
            <v-list-item-avatar>
              <v-img :lazy-src="site.images[0]"></v-img>
            </v-list-item-avatar>
            <!-- Text content -->
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
    <SitesSkeleton :active="loading" />
    <v-pagination
      v-model="page"
      :length="totalPages"
      :total-visible="totalVisible"
      :disabled="loading"
      @input="changePage"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Sites',
      page: 1,
      totalVisible: 20,
    }
  },
  computed: {
    sites() {
      return this.$store.state.sites.list
    },
    totalCount() {
      return this.$store.state.sites.totalCount
    },
    totalPages() {
      return Math.ceil(this.totalCount / this.totalVisible)
    },
    loading() {
      return this.$store.state.sites.loading
    },
  },
  mounted() {
    this.$store.dispatch('sites/getSites', this.page)
  },
  methods: {
    changePage() {
      this.$store.dispatch('sites/getSites', this.page)
    },
  },
}
</script>
<style lang="scss">
.site-item {
  text-decoration: none;
}
</style>

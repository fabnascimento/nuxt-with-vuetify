<template>
  <div>
    <!-- Site Info -->
    <div class="site-info-header primary">
      <div class="site-info-header-action primary">
        <NuxtLink :key="siteData.id" to="/">
          <v-btn icon color="white">
            <v-icon dark size="32">mdi-chevron-left</v-icon>
          </v-btn>
        </NuxtLink>
      </div>
      <div class="site-info">
        <v-list three-line class="primary">
          <template>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="siteData.images[0]"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  {{ siteData.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="white--text">
                  <span>{{ siteFormattedAddress }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="white--text">
                  <span>{{ mainContactFullName }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </div>
    <!-- /Site Info -->
    <!-- Image -->
    <v-img :src="siteData.images[0]"></v-img>
    <!-- contact info -->
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="mainContactFullName"></v-list-item-title>
          <v-list-item-subtitle
            v-text="siteData.contacts.main.jobTitle"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- telephone -->
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            v-text="siteData.contacts.main.phoneNumber"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- contact email -->
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            v-text="siteData.contacts.main.email"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- address info -->
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-map-marker</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            v-text="mainContactAddressFirstLine"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="mainContactAddressSecondLine"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
  computed: {
    mainContactFullName() {
      return `${this.siteData.contacts.main.firstName} ${this.siteData.contacts.main.lastName}`
    },
    mainContactAddressFirstLine() {
      return `${this.siteData.contacts.main.address.street}, ${this.siteData.contacts.main.address.city}`
    },
    mainContactAddressSecondLine() {
      return `${this.siteData.contacts.main.address.state} - ${this.siteData.contacts.main.address.country}`
    },
    siteFormattedAddress() {
      return `${this.siteData.address.street}, ${this.siteData.address.city}`
    },
  },
}
</script>
<style lang="scss">
.site-info-header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  .site-info {
    flex-grow: 2;
  }
}
</style>

<template>
  <div v-if="active">
    <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line">
    </v-skeleton-loader>
    <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line">
    </v-skeleton-loader>
    <v-skeleton-loader class="mx-auto" type="list-item-avatar-three-line">
    </v-skeleton-loader>
  </div>
</template>
<script>
export default {
  props: {
    active: Boolean,
  },
}
</script>

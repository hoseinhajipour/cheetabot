<template>
  <v-card
    class="mx-auto"

  >
    <router-link :to="'/post/'+post.slug">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>
    </router-link>
    <v-card-title>
      {{ post.title }}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        :to="'/post/'+post.slug"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-html="post.body">
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "post-item.component",
  props: ['post'],
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>

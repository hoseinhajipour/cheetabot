<template>
  <v-card
    class="mx-auto"
    v-if="!loading">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="400px"
    ></v-img>
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-text v-html="post.body">
    </v-card-text>

  </v-card>
</template>

<script>
import {env} from "@/enums";

export default {
  data: function () {
    return {
      loading: true,
      post: null,
    };
  },
  computed: {},
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.loading = true;
      const requestData = {
        method: "get",
        url: env.base_url + "/post/" + this.$route.params.slug,
      };
      this.$axios(requestData)
        .then((response) => {
          this.post = response.data;
          this.loading = false;
        });
    },
  }
}
</script>

<style scoped>

</style>

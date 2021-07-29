<template>
  <v-row>
    <v-col
      cols="4"
      v-for="(post, index) in posts"
      :key="post[index]">

      <PostItem :post="post"></PostItem>

    </v-col>
  </v-row>
</template>

<script>
import PostItem from '@/components/news/post-item.component';
import {env} from "@/enums";

export default {
  name: "news",
  components: {PostItem},
  data: function () {
    return {
      loading: true,
      posts: null,
      current_page: 1,
      pages: 1
    };
  },
  computed: {},
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.loading = true;
      const requestData = {
        method: "get",
        url: env.base_url + "/blog?page=" + this.current_page,
      };
      this.$axios(requestData)
        .then((response) => {
          this.posts = response.data.data;
          this.loading = false;
          this.current_page = response.data.current_page;
          this.pages = response.data.last_page;
        });
    },
  }

}
</script>

<style scoped>

</style>

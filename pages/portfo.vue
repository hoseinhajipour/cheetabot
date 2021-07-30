<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <ul v-for="item in stockItems">
      <li>
        <div>
          <b>{{ item.Symbol }}</b>
          <br/>
          <span>{{ item.TotalAveragePrice }}</span>
          <br/>
          <span>{{ item.RemainQuantity }}</span>
          <br/>
          <b>{{ getSymbolInfo(item.Symbol) }}</b>
        </div>

      </li>
      <li></li>
    </ul>


  </v-card>
</template>

<script>
import {env} from "@/enums";

export default {
  data: function () {
    return {
      loading: true,
      stockItems: null,
    };
  },
  computed: {

  },
  created() {
    console.log("getPortfolio");
    this.getPortfolio();
  },
  methods: {
    getSymbolInfo(code) {
      const requestData = {
        method: "get",
        url: env.base_url + "/symbol/info/" + code,
      };
      this.$axios(requestData)
        .then((response) => {
          let result = response.data;
          console.log(response.data);
          return result.symbolinfo.ht;
        });
    },
    getPortfolio() {
      this.loading = true;
      const requestData = {
        method: "get",
        url: env.base_url + "/portfolio",
      };
      this.$axios(requestData)
        .then((response) => {
          console.log(response.data);
          let result = response.data;
          this.stockItems = result.Data;
          this.loading = false;
        });
    },

  }
}
</script>

<style scoped>

</style>

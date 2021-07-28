<template>
  <v-form ref="filldataForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="fullname" label="نام و نام خانوادگی" required></v-text-field>
        <v-text-field v-model="broker" label="کاگزاری" required></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6" xsm="12">
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
        <v-btn x-large block :disabled="!valid" color="success" @click="SendUserData"> بررسی</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "filldata.component",
  data() {
    return {
      dialog: true,
      fullname: "",
      broker: "",
      valid: true,
    }
  },
  methods: {
    SendUserData() {
      this.$router.push({path: '/dashboard'});
    },
  }
}
</script>

<style scoped>

</style>

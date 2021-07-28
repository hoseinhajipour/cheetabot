<template>

  <v-form ref="loginForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="loginMobile" label="موبایل" required></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12">
        <v-btn block :disabled="!valid"
               color="success"
               @click="validate"> ورود
        </v-btn>
      </v-col>
    </v-row>
  </v-form>

</template>

<script>
export default {
  name: "Dologin.component",
  props: ['NextEvent'],
  data() {
    return {
      loginMobile: "",
      valid: true,
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
        console.log("do login");
        this.$emit('Nextevent');
      }
    },
  }
}
</script>

<style scoped>

</style>

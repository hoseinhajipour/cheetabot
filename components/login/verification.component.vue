<template>
  <v-form ref="verificationForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="Code" label="کد تایید" type="num" required></v-text-field>

      </v-col>
      <v-col class="d-flex" cols="12" sm="6" xsm="12">
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
        <v-btn x-large block :disabled="!valid" color="success" @click="CheckVerification"> بررسی</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "verification",
  data() {
    return {
      dialog: true,
      Code: "",
      valid: true,
    }
  },
  methods: {
    CheckVerification() {

      // submit form to server/API here...
      this.$emit('Nextevent');

    },
  }
}
</script>

<style scoped>

</style>

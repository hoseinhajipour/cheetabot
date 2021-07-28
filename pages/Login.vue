<template>

  <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
    <div>
      <v-card class="px-4">
        <v-card-text>
          <Dologin v-show="login" @Nextevent="showVerification"></Dologin>
          <verification v-show="verify" @Nextevent="showFillData"></verification>
          <filldata v-show="filldataForm"></filldata>
        </v-card-text>
      </v-card>
    </div>
  </v-dialog>

</template>

<script>
import Dologin from '@/components/login/Dologin.component';
import verification from '@/components/login/verification.component';
import filldata from '@/components/login/filldata.component';

export default {
  name: "Login",
  components: {Dologin, verification, filldata},
  layout: 'full-width',
  data() {
    return {
      dialog: true,
      login: true,
      verify: false,
      filldataForm: false,
    }
  },
  computed: {},
  methods: {
    showVerification() {
      this.login = false;
      this.verify = true;
    },
    showFillData() {
      this.login = false;
      this.verify = false;
      this.filldataForm = true;
    }
  }

}
</script>

<style scoped>

</style>

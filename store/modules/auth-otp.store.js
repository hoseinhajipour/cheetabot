import axios from "axios";
import { env } from "@/enums";

export default {
  state: {
    auth: {
      routineLevel: "LOGIN",
      token: null
    },
    phone: "",
    error: "",
    success: "",
    isNew: false
  },
  getters: {
    authRoutineLevel(state) {
      return state.auth.routineLevel;
    },
    logged() {
      return localStorage.getItem("token") !== null;
    },
    getToken(state) {
      return state.auth.token || localStorage.getItem("token");
    },
    getAuthErrors(state) {
      return state.error;
    },
    getAuthSuccess(state) {
      return state.success;
    },
    getPhone(state) {
      return state.phone;
    },
    getIsNew(state) {
      return state.isNew;
    }
  },
  mutations: {
    setAuthRoutineLevel(state, data) {
      state.auth.routineLevel = data.status || "";
      state.auth.token = data.token;
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    },
    setRoutineLevel(state, data) {
      state.auth.routineLevel = data.status || "";
    },
    setToken(state, data) {
      state.auth.token = data;
      if (data) {
        localStorage.setItem("token", data);
      }
    },
    logoutAction(state) {
      localStorage.clear();
      state.auth.token = null;
    },
    setAuthError(state, message) {
      state.error = message;
    },
    setAuthSuccess(state, message) {
      state.success = message;
    },
    setPhone(state, phone) {
      state.phone = phone;
    },
    setIsNew(state, isNew) {
      state.isNew = isNew;
    }
  },
  actions: {
    logout(context) {
      context.commit("logoutAction");
      return new Promise(function(resolve) {
        resolve();
      });
    },
    sendVerifyCode(context, { phone }) {
      return new Promise(resolve => {
        axios
          .post(env.base_url + "/auth", {
            phone
          })
          .then(result => {
            if (result.status === 200) {
              context.commit("setPhone", result.data.phone);
              context.commit("setIsNew", result.data.isNew);
              context.commit("setAuthRoutineLevel", {
                status: "VERIFY",
                token: null
              });
              context.commit("setAuthSuccess", true);
              resolve(true);
            }
          })
          .catch(() => {
            context.commit("setAuthError", "شماره وارد شده اشتباه است!");
          });
      });
    },
    checkVerifyCode(context, { phone, code }) {
      return new Promise(resolve => {
        axios
          .post(env.base_url + "/auth/verify", {
            phone,
            code
          })
          .then(result => {
            if (result.status === 200) {
              context.commit("setToken", result.data.token);
              resolve(result.data.token);
            } else {
              resolve(false);
            }
          })
          .catch(() => {
            context.commit("setAuthError", "کد وارد شده اشتباه است!");
            resolve(false);
          });
      });
    },
    register(context, { code, phone, fullname, email }) {
      return new Promise(function(resolve) {
        axios
          .post(env.base_url + "/auth/verify/register", {
            code,
            phone,
            fullname,
            email
          })
          .then(result => {
            if (result.status === 200) {
              context.commit("setAuthRoutineLevel", {
                status: "WELCOME",
                token: result.data.token
              });
              context.commit("setAuthSuccess", true);
              resolve(true);
            } else {
              context.commit(
                "setAuthError",
                "مشکلی در ثبت نام شما رخ داده است"
              );
            }
          })
          .catch(error => {
            if (!error.response.data.success && error.response.data.message) {
              context.commit("setAuthError", error.response.data.message);
            } else {
              context.commit(
                "setAuthError",
                "مشکلی در ثبت نام شما رخ داده است"
              );
            }
          });
      });
    }
  }
};

import axios from "axios";
import {env} from "@/enums";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getBlogPost(context, {page}) {
      axios.get(
          env.base_url + "/blog?page=" + page,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          },
          {
            useCredentails: true
          }
        )
        .then(result => {
          return result.data;
        });

    },
    getPost(context, {slug}) {
      return new Promise(resolve => {
        axios
          .get(env.base_url + "/post/" + slug, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(result => {
            return resolve(result.data);
          });
      });
    }
  }
};

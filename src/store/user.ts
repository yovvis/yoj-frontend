import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";

// state

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: AccessEnum.NOT_LOGIN,
    },
  }),

  // getter
  getters: {},

  //action
  actions: {
    getLoginUser({ commit, state }, payload) {
      // 改成远程登录
      commit("updateUser", payload);
    },
  },
  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;

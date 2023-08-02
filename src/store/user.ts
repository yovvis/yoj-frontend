import { StoreOptions } from "vuex";
import AccessEnum from "@/access/accessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  // state
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),

  // getter
  getters: {},

  //action
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 改成远程登录
      const resp = await UserControllerService.getLoginUserUsingGet();
      if (resp.code === 0) {
        commit("updateUser", resp.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: AccessEnum.NOT_LOGIN,
        });
      }
    },
  },
  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;

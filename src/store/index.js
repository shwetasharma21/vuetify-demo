import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    employees: [],
  },
  getters: {
    //for reading state data
    getEmployees(state) {
      return state.employees;
    },
  },
  mutations: {
    //synchronous updates
    addEmployee(state, payload) {
      state.employees.push(payload);
    },
  },
  actions: {
    //asynchronous updates
  },
  modules: {},
});

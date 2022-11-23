import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {

    counterSquare(state){
      return state.counter * state.counter
    }


  },
  mutations: {
    increment(state: { counter: number }, randomNo: number) {
      console.log(randomNo);
      state.counter += randomNo;
    },
    decrement(state: { counter: number }, randomNo: number) {
      state.counter -= randomNo;
    },
  },
  actions: {
    increment({ commit }) {
      console.log("increase counter");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((dataResponse) => {
        console.log(dataResponse);
        commit("increment", dataResponse.data);
      });
    },
    decrement({ commit }) {
      console.log("increase counter");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((dataResponse) => {
        console.log(dataResponse);
        commit("decrement", dataResponse.data);
      });
    },
  },
  modules: {},
});

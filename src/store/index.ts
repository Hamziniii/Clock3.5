import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    background: {
      backgroundColors: ["#F27121", "#E94057", "#8A2387"],
      direction: 45
    },
    display: {
      show: true,
      type: "digital"
    },
    info: {
      show: true,
      type: "regular",
      options: {
        timeLeft: true,
        currentPeriod: true,
        nextPeriod: true
      }
    },
    notifications: false,
    textColor: "#fff",
    textBackground: "#000000"
  },
  getters: {
    body: state => `
      color: ${state.textColor};
      background: linear-gradient(${state.background.direction}deg, ${
        state.background.backgroundColors.length > 1 ?
          state.background.backgroundColors:
          `${state.background.backgroundColors[0]},${state.background.backgroundColors[0]}`
      });
    `,
    main: state => `
      grid-template-rows: ${!(state.display.show && state.info.show) ? "1fr" : "2fr 1fr"}
    `
  },
  mutations: {
    changeBackgroundColors: ({background}, payload: string[]) => background.backgroundColors = payload,
    changeBackgroundDirection: ({background}, payload: number) => background.direction = payload,
    flipNotifications: (state) => state.notifications = !state.notifications,
  },
  actions: {

  },
  modules: {
  }
})
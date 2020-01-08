import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    background: {
      //backgroundColors: ["#89f7fe", "#66a6ff"],      
      backgroundColors: ["#F27121", "#E94057", "#8A2387"],
      direction: 135
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
    textBackground: "#000000",
    // settings: false,
    settings: {
      show: false,
      current: "display" //either main or colors or classes, main being show info/display, colors being change color/background, classes being where you put in your classes
    }
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
      grid-template-rows: ${!(state.display.show && state.info.show) ? "1fr" : "2fr 1fr"};
    `,
    colorBackground: ({textBackground, textColor}) => `color: ${textColor};background: ${textBackground}80;`,
  },
  mutations: {
    changeBackgroundColors: ({background}, payload: string[]) => background.backgroundColors = payload,
    changeBackgroundDirection: ({background}, payload: number) => background.direction = payload,
    toggleNotifications: (state) => state.notifications = !state.notifications,
    toggleSettings: (state) => state.settings.show = !state.settings.show,
    changeSettingsCurrent: (state, type: string) => state.settings.current = type,
    toggleSomething: (state, what: string) => eval(`state.${what} = !state.${what}`)
  },
  actions: {

  },
  modules: {
  }
})
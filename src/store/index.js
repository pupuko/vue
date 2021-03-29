// 在分离出来的vuex文件中安装 Vuex 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // 把页面显示数据写在store.js文件 
    count: 0,
  },
  mutations: {
    //set方法

    setCountValue(state) {

      state.count++;
    }

  },

  getters: {
    //这里是get方法   },

  },
  actions: {
    //这个部分我暂时用不上
  },
  modules: {
    //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
  }
})
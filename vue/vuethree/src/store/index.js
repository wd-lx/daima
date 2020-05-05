import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 100,
        age: 18,
        name: "张三"
    },
    getters: {
        count: state => {
            return state.num > 120 ? 120 : state.num;
        }
    },
    // mutations设计就是同步
    mutations: {
        // 接收组件传来的参数
        increment(state, pload) {
            state.num += pload.n;
            // setTimeout(()=>{
            //     state.num+=pload.n;
            // },1000)
        },
        mincrement(state, pload) {
            state.num -= pload.n;
        }
    },
    // action提交的是mutation里面的数据
    actions: {
        Addaction(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', { n: 5 })
            }, 1000);
            context.dispatch("textAction")
        },
        textAction() {
            console.log("hello world 我被触发了")
        }
    }
})
export default store
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  count: 0,
  msg: '',
  key:'',
  con: ''
}

const mutations = {
  add(state){
    state.count+=1
  },
  reduce(state){
    state.count-=1
  },
  Axios(){
    axios.get('/api/child')
      .then(function (response) {
        state.msg = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  Find(){
    axios.get('/api/find?key=' +state.key)
      .then(function (res) {
        state.con = res.data
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
//
// const actions = {
//   saveFrom (context){
//
//   }
// }

export default new Vuex.Store({
  state,
  mutations,
  // actions
})



import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    tasks: [],
    unCompleteTask: [],
    completeTasks: [],
    userProfile: '',
    token: ''
  },
  mutations: {
    saveTaskMutation (state, payload) {
      state.unCompleteTask.push(payload)
      console.log('mutation save task', payload)
    },
    getCompleteMutation (state, payload) {
      console.log('mutation get complete', payload)
      state.completeTasks = payload
    },
    getUncompleteMutation (state, payload) {
      console.log('mutation get uncomplete', payload)
      state.unCompleteTask = payload
    },
    checklistMutation (state, payload) {
      state.unCompleteTask.splice(payload.index, 1)
      console.log('push ke complete task =>', payload.data)
      state.completeTasks.push(payload.data)
    },
    deleteTaskUncompleteMutation (state, index) {
      state.unCompleteTask.splice(index, 1)
    },
    deleteTaskCompleteMutation (state, index) {
      state.completeTasks.splice(index, 1)
    }
  },
  actions: {
    loginManual ({commit}, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://todofancyyosa.herokuapp.com/api/user/signin', payload)
          .then(response => {
            let data = response.data
            resolve(data)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    saveTask ({commit}, payload) {
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZGVlZTJkOGUxMzU2NDUxMDJhNWE2MCIsInVzZXJuYW1lIjoieW9oYW5lcyIsImlhdCI6MTUyNjY1NDI1Mn0.2__68M5DEC0O3sK-0vvvccrx4wReiCR03cEZPgzj4ek
      let token = localStorage.getItem('token')
      axios.post(`https://todofancyyosa.herokuapp.com/api/task/createtask/${token}`, {
        name: payload.name,
        description: payload.description
      },
      {
        headers: { token: token }
      })
        .then(response => {
          let payload = response.data.data
          commit('saveTaskMutation', payload)
        })
        .catch(err => {
          console.log(err)
          console.log('error BOSS pas save TASK')
        })
      console.log('saveMutaion masuk =====>')
    },
    completeData ({commit}) {
      let token = localStorage.getItem('token')
      axios.get(`https://todofancyyosa.herokuapp.com/api/task/completetask/${token}`, {
        headers: { token: token }
      })
        .then(response => {
          let payload = response.data.data
          commit('getCompleteMutation', payload)
        })
        .catch((err) => {
          console.log(err)
          console.log('error tarik data dari axios complete data')
        })
    },
    uncompleteData ({commit}) {
      let token = localStorage.getItem('token')
      axios.get('https://todofancyyosa.herokuapp.com/api/task/list', {
        headers: { token: token }
      })
        .then(response => {
          let payload = response.data.data
          commit('getUncompleteMutation', payload)
        })
        .catch((err) => {
          console.log(err)
          console.log('error tarik data dari axios uncomplete data')
        })
    },
    checklistTask ({commit}, payload) {
      axios.post(`https://todofancyyosa.herokuapp.com/api/task/checklist/${payload.id}`)
        .then(response => {
          let data = response.data.response
          console.log('=======>', data)
          let payloads = {
            id: payload.id,
            index: payload.index,
            data: data
          }
          commit('checklistMutation', payloads)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTaskUncomplete ({commit}, payload) {
      axios.delete(`https://todofancyyosa.herokuapp.com/api/task/deletetask/${payload.id}`)
        .then(response => {
          console.log(response)
          commit('deleteTaskUncompleteMutation', payload.index)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTaskComplete ({commit}, payload) {
      axios.delete(`https://todofancyyosa.herokuapp.com/api/task/deletetask/${payload.id}`)
        .then(response => {
          console.log(response)
          commit('deleteTaskCompleteMutation', payload.index)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

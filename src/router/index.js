import Vue from 'vue'
import Router from 'vue-router'
import notes from '../pages/notes.vue'
import todolist from "../pages/todolist.vue"

Vue.use(Router)

export default new Router({
  mdoe:"history",
  routes: [
    {
      path: '/',
      component: notes,
      name:"notes"
    },
    {
      path: '/TodoList',
      component: todolist,
      name:"todoList"
    }
  ]
})

<template>
  <div id="app">
      <transition name="right-in">
          <!-- <keep-alive> -->
          <router-view></router-view>
          <!-- </keep-alive> -->
      </transition>
  </div>
</template>

<script>
import notes from "../pages/notes"
import todoList from "../pages/todolist.vue"
require("../assets/css/normalize.min.css")
export default {

  components:{
      notes,
      todoList
  },
  data:function(){
      return{
        isShowNotesPage:true,
        isShowTodoListPage:false,
        noteList:[{
            id:1,
            name:"我的第一本笔记本",
            date:"2017-08-24 23:25:04",
            content:[
                {id:1,name:"买礼物",status:-1},
                {id:2,name:"去旅行",status:0},
                {id:3,name:"写代码",status:0}
                ]
        }],
        noteListData:[
              {name:"我的第一本笔记本",date:"Fri Aug 25 2017 22:31:11",color:"blue"},
              {name:"我的第一本笔记本",date:"Fri Aug 25 2017 22:31:11",color:"green"},
              {name:"我的第一本笔记本",date:"Fri Aug 25 2017 22:31:11",color:"yellow"},
              {name:"我的第一本笔记本",date:"Fri Aug 25 2017 22:31:11",color:"pink"},
              ],
      }
  },
  computed:{
      getDynaData(){
          let name = this.$route.name
          if(name === "notes"){
              return this.noteListData
          }
          if(name === "todoList"){
              return this.todoListData
          }
      }
  },
  methods:{
      creatNewTodo(){
          this.isShowNotesPage = false
          this.isShowTodoListPage = true
      }
  }
}
</script>

<style>

html{
    font-size: 35px;
    background-color: #fefefe
}

/* 字体图标的设置 */

body {
    font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}

.right-in-enter{
    transform: translateX(100%);
    opacity: 0;
}

.right-in-leave-to{
    transform: translateX(-100%);
    opacity: 0;
}

.right-in-enter-active,.right-in-leave-active{
    will-change: transform;
    transition: all 1s;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}


</style>



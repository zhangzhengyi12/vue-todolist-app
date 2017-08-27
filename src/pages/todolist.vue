<template>
  <div id="todolist">
      <div class="topBar">
          <topbar :config="nowTopBarConfig" @on-click="returnForNotes"></topbar>
          <span class="save" @click="clickSave"></span> 
      </div>

          <div class="topBarPlaceHolder"></div>
      <!-- note -->
       
       <div class="container">
          <div class="header">
              <div class="wrap">
                <div class="title">
                    <input type="text" v-model="todoListData.name" @blur="checkTitlelength" v-focus>
                </div>
                <div class="date">{{ todoListData.date }}</div>
              </div>
          </div>
          <div class="body">
              <div v-for="(item,index) of todoListData.content" class="todo">
                  <choose :status="item.status" @on-click="trrigerStatus(index)"></choose>
                  <input class="text" v-model="item.name" v-focus @blur="checkEmpty(index)">
              </div>
          </div>   
           
        </div> 

      <!-- noteclose -->
      <my-button  @on-click="addTodo" :name="btnStyle"></my-button>

      <my-dialog :isShow="isShowDialog" :message="dialogMessage"></my-dialog>
  </div>
</template>

<script>
import topbar from "../components/base/topbar"
import button from "../components/base/button"
import choose from "../components/base/choose"
import myDialog from "../components/base/dialog"

export default {
 components:{
      topbar,
      MyButton:button,
      choose,
      myDialog
  },
  created(){
    // this.todoListData = this.$store.state.nowTodoListData
    // console.log(this.$store.state.nowTodoListData);
  },
  data:function(){
      return{
        nowTopBarConfig:{
             text:"",
             iconStyle:"return" 
        },
        btnStyle:"pen",
        todoListData:this.$store.state.nowTodoListData,
        isShowDialog:false,
        dialogMessage:"保存成功"
      }
  },
  methods:{
      returnForNotes(){
          this.$router.replace("/")
      },
      addTodo(){
        //   console.log(this.todoListData);
         this.todoListData.content.push({
             id:this.todoListData.content.length+1,
             name:"",
             status:-1
         })
      },
      trrigerStatus(index){
         let prev =  this.todoListData.content[index].status
         if(prev > 0) return this.todoListData.content[index].status = -1;
         if(prev < 0) return this.todoListData.content[index].status = 1;
      },
      checkEmpty(index){
          let name = this.todoListData.content[index].name
          if(name === ""){
              this.todoListData.content.splice(index,1)
          }
          
      },
      checkTitlelength(){
          
      },
      clickSave(){
          this.isShowDialog = true;
        //   TODO: save功能
        this.$store.commit('saveNowNote', this.todoListData)
          setTimeout(()=>{
              this.isShowDialog = false
          },2000)
      }
  },
  directives: {
    focus: {
        inserted: function (el,{value}) {
                el.focus();
        }
    
  }
  },
  beforeRouteEnter(to,from,next){
      next(vm=>{
          vm.todoListData = vm.$store.state.nowTodoListData
      })
  },
//   computed:{
//       todoListData(){
//           console.log(this.$store.state);
//           return this.$store.state.nowTodoListData
//       }
//   }
  
}

</script>

<style scoped>

.topBar{
    width: 100%;
    height: 1.8rem;
    box-shadow:0px 3px 3px #e4e4e4;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #fcfcfc;
    overflow: hidden;
}

.topBarPlaceHolder{
    width: 100%;
    height: 1.8rem;
}


.container{
    width: 100%;
}

.header{
    width:100%;
    height: 3rem;
    border-bottom: 1px solid #e4e4e4
}

 .wrap{
    /* margin-top: .6rem; */
    padding-left: 5%;
}

.title input{
 margin-top: .5rem;
 width: 100%;
 border: none;
 font-size: 1rem;
 color: #33b5ff;
 -webkit-appearance:none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 outline: none;
 text-overflow: ellipsis;
}


.header .date{
    margin-top: .3rem;
    font-size: .4rem;
    color: #6a6e70;
}

.body{
    margin-top: .5rem;
}

.body .text{
    display: inline-block;
    width: 80%;
    font-size: .5rem;
    border: 1px solid rgba(51, 181, 255,0);
    outline: none;
    transition: all .3s;
    margin-left: .1rem;
    color: #474c50
}

.body .text:focus{
    border-bottom: 1px solid #33b5ff;
}

.body .todo{
    padding-left: 5%;
}

.save{
    color: #33b5ff;
    font-size: .4rem;
    font-family: "true";
    float: right;
    height: 1.8rem;
    line-height: 1.8rem;
    width: 1.8rem;
    text-align: center;
}

.save:active{
    background-color: #33b5ff;
    color: #fff;
}

.save::before{
    content: "\ea10"
}

#todolist{
    width: 100%;
}

</style>

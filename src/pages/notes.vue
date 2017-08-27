<template>
  <div id="notes">
      <div class="topBar">
          <topbar :config="nowTopBarConfig"></topbar>
      </div>

          <div class="topBarPlaceHolder"></div>
      <!-- note -->

       <note v-for="(item,index) of data" :data="item" :index="index" @on-click="triggleToTodolist(index)" @on-click-del="delNote(index)"></note>

      <!-- noteclose -->
      <my-button :name="btnAddStyle" @on-click="triggleSelectionBox"></my-button>
      <transition name="uplift">
      <uplift-box :selectionList="upliftSelectionList" v-show="isShowUplift" @on-click-selcItem="triggleToNewTodolist"></uplift-box>
      </transition>
      <model :show="isShowModel" @clickModel="clickModel"></model>
  </div>
</template>

<script>
import topbar from "../components/base/topbar"
import button from "../components/base/button"
import upliftBox from "../components/base/upliftBox"
import model from "../components/base/model"
import note from "../components/base/note"
import randomColor from "../util/piclRamdomColor.js"



export default {
  components:{
      topbar,
      MyButton:button,
      upliftBox,
      model,
      note
  },
  data:function(){
      return{
          nowTopBarConfig:{
               text:"ALL",
               iconStyle:"dir" 
          },
          nowButtonConfig:{
                 name:"add",
                 options:[
                     {id:0,text:"新建笔记本"}
                 ]
          },
          btnAddStyle:"add",
          upliftSelectionList:[
              {id:1,text:"新建TODO列表",name:"file"},
          ],
          isShowUplift:false,
          isShowModel:false,
        
      }
  },
  methods:{
      triggleSelectionBox(){
         this.isShowUplift = true
         this.isShowModel = true
      },
      clickModel(){
          console.log("y");
          this.isShowUplift = false
          this.isShowModel = false
      },
      triggleToNewTodolist(a){
          this.isShowUplift = false
          this.isShowModel = false
          this.$router.push("TodoList")
          this.$store.commit("addNewNote")
      },
      triggleToTodolist(a){
          this.$store.commit("openANote",a)
          this.$router.push('TodoList')
      },
      delNote(a){
          console.log(1);
          this.$store.commit("delANote",a)
      }
  },
  computed:{
      data(){
          return this.$store.state.noteListData
      }
  }
}
</script>

<style>

#notes{
    width: 100%;
}


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


.uplift-enter,.uplift-leave-to{
  opacity: 0;
  transform: translateY(1.5rem);
}



.uplift-enter-to{
    opacity: 1;
}

.uplift-enter-active,.uplift-leave-active{
    transition: all .5s;
}








</style>






<template>
  <div class="selection">
      <div class="items">
      <div class="item" v-for="(item,index) of selectionList" :class="item.name" @click="clickItem(index)">
          <span class="icon"></span>
          {{ item.text }}</div>
      </div>
      
  </div>
</template>

<script>
export default {
   props:{
       selectionList:{
           type:Array,
           default:{}
       }
   },
   methods:{
       clickItem(index){
           this.$emit("on-click-selcItem",this.selectionList[index].id)
       }
   }
  
}
</script>

<style scoped>


.icon{
    color: #878e95;
    margin-right: .75rem;
    margin-left: .75rem;
}

.selection{
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: left;
    background-color: #f8fafb;
    
}

.item {
    height: 1.5rem;
    font-size: .4rem;
    color: #3f464c;
    line-height: 1.5rem;
    visibility: center;
    font-weight: 600;
    vertical-align: center;
}

.item:active{
    background-color: #f1f3f5
}



.item.file > .icon::before{
    font-family: "todolist";
    content: "\e924";
    color:#ccc
}



</style>

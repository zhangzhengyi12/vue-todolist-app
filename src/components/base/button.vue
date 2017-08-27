<template>
  <div class="creatBtn" @click="onClick">
      <span class="icon" :class="name"></span>
  </div>
</template>

<script>
export default {
  props:{
      name:{
          type:String,
          default:{}
      }
  },
  data:function(){
      return{}
  },
  methods:{
      onClick(){
          this.$emit("on-click")
      }
  }
}
</script>

<style scoped>

.icon{
    display: inline-block;
    font-family: "todolist";
    color: #fff;
    line-height: 1.5rem;
    font-size: .6rem;
}


.icon:active{
    color: #ccc;
}


.icon.add::before{
    content: "\ea0a";
}

.icon.pen::before{
    content: "\e905"
}

.creatBtn{
    position: fixed;
    right: .4rem;
    bottom: .8rem;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #33b5ff;
    border-radius: .75rem;
    text-align: center;
    z-index: 1;
    box-shadow: 3px 4px 10px 2px #caebff
}

.creatBtn:active{
    background-color: #0093ea;
}

</style>

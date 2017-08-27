<template>
  <div class="choose" :class="getStatus" @click="onClick">
      <span class="true-icon"></span>
  </div>
</template>

<script>
export default {
  data:function(){
      return {

      }
  },
  props:["status"],
  computed:{
      getStatus(){
          if(this.status > 0){
              return "active";
          }
          if(this.status < 0 ){
              return "no-active"
          }
      }
  },
  methods:{
      onClick(){
          this.$emit("on-click")
      }
  }
}
</script>

<style>
.true-icon{
    font-family: "true";
    color: #fff;
    font-size: .42rem;
    font-weight: 100;
}

.true-icon::before{
    content: "\ea10"
}

.choose{
    display: inline-block;
    width: .6rem;
    height: .6rem;
    line-height: .3rem;
    text-align: center;
    /* vertical-align: c */
    border-radius: 3px;
}

.choose.active{
    background-color: #33b5ff;
    border: 1px solid #33b5ff;
}

.choose.no-active{
    border: 1px solid #ccc;
    background-color: #fff;
}
</style>

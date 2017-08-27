<template>
<transition name="model-fade">
      <div class="model" @click="clickModel" v-if="show"></div>
</transition>
</template>

<script>
export default {
    props:["show"],
 methods:{
       clickModel(){
           this.$emit("clickModel")
       }
   }
}
</script>

<style>

.model{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ccc;
    z-index: 5;
    opacity: .3;
    transition: all .5s
}

.model-fade-enter,.model-fade-leave-to{
  opacity: 0;
}



.model-fade-enter-to{
    opacity: .3;
}

.model-fade-enter-active,.model-fade-leave-active{
    transition: all .5s;
}
</style>

<template>
  <transition name="fade">
  <div class="dialog" v-if="isShow">{{ message }}</div>
  </transition>
</template>

<script>
export default {
   props:["message",'isShow']
}
</script>

<style scoped>

.dialog{
    width: 60%;
    height: .8rem;
    font-size: .4rem;
    background-color: #ccc;
    border-radius: 5px;
    position: fixed;
    bottom: 1rem;
    left: 50%;
    margin-left: -30%;
    text-align: center;
    line-height: .8rem;
    opacity: .6;
}

.fade-enter,.fade-leave-to{
    opacity: 0;
}

.fade-enter-to{
    opacity: .6;
}

.fade-enter-active,.fade-leave-active{
    transition: all .5s;
}

.fade-leave-active{
}


</style>

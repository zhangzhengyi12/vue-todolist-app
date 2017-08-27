<template>
  <div class="top-bar" @click="onClick">
  <span class="icon" :class="config.iconStyle"></span>
  <span class="text" >{{ config.text }}</span>
  </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    },
    props:{
        config:{
            type:Object,
            default:{

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

<style scoped>

.icon{
    font-family: todolist;
    font-size: .5rem;
    color: #3f464c;
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    line-height: 2rem;
    text-align: center;
}

.icon:active{
    color: #fff;
    background-color: #3f464c;
}


.icon.return::before{
    content: "\ea40"
}

.icon.dir::before{
    content: "\e92f"
}

.text{
    font-size: .6rem;
    color: #3f464c;
    /* margin-left: .5rem; */
    font-weight: 500;
}

.top-bar{
    display: inline-block;
    position: absolute;
}

</style>

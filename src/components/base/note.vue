<template>
  <div class="note" :class="data.color" @click="onClick">
      <span class="title">{{ data.name }}</span><br>
      <span class="date">{{ data.date }}</span>
      <span class="del-icon" @click.stop="onClickDel"></span>
  </div>
</template>

<script>
export default {
props:{
    data:{
        type:Object,
        default:{
            name:"第一本笔记本",
            date:"Fri Aug 25 2017 22:31:11"
        }
    },
    index:{
        type:Number,
        default:0
    }
},
methods:{
    onClick(){
        this.$emit("on-click")
    },
    onClickDel(){
        this.$emit("on-click-del")
    }
}
}
</script>

<style scoped>

.note{
    display: block;
    height: 2rem;
    margin-top: .3rem;
    font-size: .5rem;
    width: 90%;
    margin: .5rem auto 0rem auto;
    border-radius: 3px;
    color:#505558;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(204, 204,204, .5);
    position: relative;
}

/* .note:active{ */
    /* opacity: 1.2; */

/* } */

.note.yellow{
    background-color: #eff1af
}

.note.pink{
    background-color: #edd5c5
}

.note.green{
    background-color: #bae0be
}

.note.blue {
    background-color: #bbd0eb
}

.note .title,.date{
    margin-left: .3rem;
    display: inline-block;
}

.title{
    font-size: .5rem;
    margin-top: .5rem;
}

.date{
    font-size: .2rem;
}

.del-icon{
    font-family: "true";
    position: absolute;
    color: #fff;
    top: 5px;
    right: 5px;
    cursor: pointer;
}

.del-icon:active{
    color: #ccc;
}

.del-icon::before{
    content: "\ea0f"
}

</style>

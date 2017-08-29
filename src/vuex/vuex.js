import Vue from "vue"
import VueX from "vuex"
import ranColor from "../util/piclRamdomColor"

Vue.use(VueX)

export default new VueX.Store({
    state: {
         noteListData:[
        ],
         nowTodoListData: {},
         todoListData:[]
    },
    mutations: {
        addNewNote(state) {
            //还未保存，新建一个默认对象传入 设置成nowTodoList 后续依赖save进行正式的保存到两个数据主题
            let newData = {
                id:state.todoListData.length,
                name:"标题",
                date:new Date().toDateString(),
                content:[]
            }
            console.log(state);
            state.nowTodoListData = newData;
        },
        saveNowNote(state,saveDate) {
            //首先遍历数据查看是否存在已有的副本
            //小钩子

            let isNewData = true
            state.todoListData.forEach((item, index) => {
                if (item.id === saveDate.id) {
                   state.noteListData[index].name = saveDate.name
                   state.todoListData[index] = saveDate
                   isNewData = false;
               }
            }, this)
            //没有副本 属于新数据
            if (isNewData) {
                state.todoListData.push(saveDate)
                state.noteListData.push({
                    name: saveDate.name,
                    date: saveDate.date,
                    color: ranColor.random(['blue', 'pink', 'green', 'yellow'])
                })
            }    
        },
        openANote(state,index) {
            state.nowTodoListData = state.todoListData[index]
        },
        delANote(state, index) {
            console.log(index);
            state.noteListData.splice(index, 1)
            state.todoListData.splice(index,1)
        },
        localSave(state) {
            
        }
    }
})
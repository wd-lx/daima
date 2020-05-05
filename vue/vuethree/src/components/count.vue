<template>
    <div class="countnum">
        <h1>简单的计算器</h1>
        <input type="button" value="-" @click="jian(3)">
        <span>{{num}}</span>
        <input type="button" value="+" @click="jia(5)">
        {{count}}
        <p>年龄：{{age}}</p>
        <p>姓名：{{name}}</p>
    </div>
</template>

<script>
import {mapGetters,mapState,mapActions} from "vuex"
    export default {
        // data(){
        //     return{
            // num：100
        //         num:this.$store.state.num,
        //     }
        // },
        // computed:用来监控自己定义的变量，该变量不在data里面声明，再接再computed里面去定义
        // 就可以在页面上进行数据的双向绑定展示出结果，或者做其它处理
        computed:{
            // num(){
            //     return this.$store.state.num
            // },
            ...mapState({
                num(){
                    return this.$store.state.num
                },
                age(){
                    return this.$store.state.age
                },
                name(){
                    return this.$store.state.name
                },
            }),
            ...mapGetters({
                count:'count'
            })
            
        },
        methods:{
            ...mapActions({
                addhandle:'Addaction'
            }),
            jia(num){
                // this.num+=5
                // mutations的函数要在组件中使用，需要用this.$store.commit来提交函数
                // this.$store.commit("increment",{n:num,name:"zhangsan"});
                // action通过this.$store.dispath提交
                this.$store.dispatch('Addaction');
            },
            jian(num){
                // this.num-=5;
                this.$store.commit("mincrement",{n:num,name:"lisi"});
            },
        }
    }
</script>

<style>
.countnum{
    text-align: center;
}
.countnum input{
    width:30px;
}
</style>
<!-- 添加学员 -->
<template>
<div>
    添加学生：
    <input type="text" v-model="name">
    <button @click="changeStudent({name})">确认</button>
</div>

</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    data(){
        return{
            name:'',
        }
    },
    computed:{
            ...mapState({
            storeName:state => state.name,
        }),
    },
    methods:{
        ...mapActions('student',['changeStudent'])
    }
}
</script>

<style scoped>
button{
    margin-left: 20px;
    line-height: 25px;
    width: 80px;
}
</style>
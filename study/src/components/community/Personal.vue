<!-- 个人中心 -->
<template>
<div>
    <button @click="handleClick">{{loginFlag ? '退出' : '登录'}}</button>
</div>

</template>

<script>
export default {
    data(){
        return{
            loginFlag:false
        }
    },
    created(){
        this.loginFlag = this.$route.matched[0].meta.login;
    },
    methods:{
        handleClick(){
            this.loginFlag = !this.loginFlag;
            this.$route.matched[0].meta.login = this.loginFlag;
        }
    }
}
</script>

<style scoped>
button:hover{
    cursor: pointer;
    width: 50px;
    height: 20px;
    line-height: 20px;
}
</style>
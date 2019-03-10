<!-- 学术讨论 -->
<template>
    <ul>
        <router-link    tag="li" 
                        :to="{name:'question',params:{id:item.questionId}}"
                        v-for="item in questionList" 
                        :key="item.questionId">
                        {{item.title}}
        </router-link>
    </ul>

</template>

<script>
export default {
    //组件内守卫
    beforeRouteEnter(to,from,next){
        const isLogin = to.matched[0].meta.login;
        if(isLogin){
            next();
            return;
        }
        const answer = confirm('没登录');
        if(answer){
        next({name:'personal'})
        } else {
        next(false);
        }
    },
    beforeRouteLeave(to,from,next){
        const answer = confirm('离开吗？');
        if(answer){
            next()
        } else {
            next (false)
        }
    },
data(){
    return{
        questionList: [
                {
                    questionId: 201801,
                    title: 'display哪种样式定义后,内联(非块状)元素可以定义宽度和高度？'
                },
                {
                    questionId: 201802,
                    title: '元素的alt和title有什么异同？'
                },
                {
                    questionId: 201803,
                    title: 'var let const 有什么区别？'
                }
            ]
    }
}
}
</script>

<style scoped>
ul{
    margin-top: 20px;
}
li{
    line-height: 30px;
}
</style>
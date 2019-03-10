<!-- 学术讨论页面 -->
<template>
<div>
    问题：{{ question}}
</div>

</template>

<script>
export default {
    created(){
        const questionId = this.$route.params.id;
        const index = this.questionList.findIndex( item => item.questionId == questionId);
        if(index == -1){
            this.$router.push({name:'err'})
            this.$router.replace('/err.html') //或者replace({name:'err'})

            
        } else {
            this.question = this.questionList[index].title;
        }
        
    },
    data(){
        return{
            question:'',
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

</style>
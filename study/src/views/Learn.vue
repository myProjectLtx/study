<!-- 课程页面 -->
<template>
<div>
    <course-list></course-list>
    <router-link :to="{name:'changeCourse'}"
    tag="button"
    class="change-course-btn"
    >修改课程</router-link>
</div>

</template>

<script>
import CourseList from '@/components/learn/CourseList'
export default {
    components:{
        CourseList
    }
}
</script>

<style scoped>
.change-course-btn{
    display: block;
    margin: 20px auto;
    width: 200px;
    text-align: center;
    line-height: 40px;
    background-color: #000;
    color: aliceblue;
}
</style>
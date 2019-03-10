<!-- 学员页面 -->
 
<template>
<div class="student">
    <AddStudent></AddStudent>
    <StudentList></StudentList>
</div>
</template>

<script>
import AddStudent from'@/components/student/AddStudent'
import StudentList from'@/components/student/StudentList' 
export default {
    components:{
        AddStudent,
        StudentList
    },
    data(){
        return{
            StudentList:[]
        }
    },
    methods:{
        add(name){
            this.StudentList.push(name);
        }
    }
}
</script>

<style scoped>

</style>
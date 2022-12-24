<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" text='Add Task' 
        color='green'
         @btn-click="$emit('toggle-add-task')">
        <router-link to="/addtasks"></router-link></Button>
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title : String,
        showAddTask: false,
    },
    components:{
        Button
    },
    computed :{
        homePage() {
            if(this.$route.path === '/'){
                return true
            }
            else {
                false
            }
        }
    }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

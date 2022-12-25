<template>
      <Tasks @toggle-reminder="toggleReminder"
       @delete-task="deleteTask" :tasks="tasks"
       />
    
</template>
<script>

import Tasks from '../components/Tasks.vue'


export default{
    name : 'Home',
    props :{
        showAddTask: Boolean
    },
    components: {
        Tasks,
       
    },
    data(){
        return {
            tasks: [],
        }
    },
    methods: {
    
    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      })
      res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id != id))
      : console.log('error deleting')
    },
    async toggleReminder(id){
        const tasktoToggle = await this.fetchTask(id)
        const updTask = {...tasktoToggle, reminder : !tasktoToggle.reminder}
        const res = await fetch(`api/tasks/${id}`, {
          method :"PUT",
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updTask),
        })

        var data = await res.json()

      this.tasks = this.tasks.map((task)=> 
      task.id === id ? { ...task, reminder: data.reminder }: task)
      console.log(id)
    },
    async fetchTasks()
    {
      const res = await fetch('api/tasks')

      const data = await res.json()
      
      return data
    },
    async fetchTask(id)
    {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()
      
      return data
    },
    
  },
  async created(){
        this.tasks = await this.fetchTasks()
    }
}
</script>
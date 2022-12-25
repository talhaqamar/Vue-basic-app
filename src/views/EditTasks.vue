<template>
  <form @submit="editOnSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Edit Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" v-model="day" name="day" placeholder="Edit Day & Time" />
    </div>
    <div class="form-control form-control-check">
      <label>Edit Reminder</label>
      <input type="checkbox" name="reminder" v-model="reminder" />
    </div>

    <input type="submit" text="bgfd" value="Update Task" class="btn btn-block" />
  </form>

  <router-link to="/">Home</router-link>

</template>
<script>
export default {
  name: 'EditTask',

  data() {
    return {

      id: '',
      text: '',
      day: '',
      reminder: Boolean,
    }
  },
  methods: {
    async updateTask(task) {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data1 = await res.json()

      // Navigation automatically to home page
      this.$router.back()
    },

    async fetchTask() {
      const url = '/api/tasks/' + `${this.$route.params.id}`
      const res = await fetch(url)
      const data = await res.json()
      this.taskToToggle = data
      this.day = data.day
      this.text = data.text
      this.reminder = data.reminder
      this.id = data.id

    },

    editOnSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        return
      }
      const newTask = {
        id: this.id,
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.updateTask(newTask)
    }

  },

  async created() {
    this.fetchTask()
  },

}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>

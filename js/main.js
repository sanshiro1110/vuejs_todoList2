const vm = new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: "",
  },
  mounted() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  },
  watch: {
    tasks: {
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      deep: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push({
        title: this.newTask,
        isDone: false,
      });
      this.newTask = "";
    },
    deleteTask(index) {
      if(confirm('delete this task?')) {
        this.tasks.splice(index, 1);
      }
    },
    deleteAllTasks() {
      if(confirm("are you sure to delete all tasks?")) {
        this.tasks = this.remaining;
      }
    }
  },
  computed: {
    remaining() {
      return this.tasks.filter(function(task) {
        return task.isDone === false;
      })
    }
  }
});

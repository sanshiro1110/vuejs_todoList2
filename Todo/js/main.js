const vm = new Vue({
  el: "#app",
  data: {
    tasks: [
    //   {
    //   title: 'task1',
    //   isDone: false
    //   },
    //   {
    //   title: 'task2',
    //   isDone: false
    //   },
    //   {
    //   title: 'task3',
    //   isDone: true
    //   },
    ],
    newTask: "",
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

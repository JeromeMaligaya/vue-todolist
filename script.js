const { createApp } = Vue

createApp({
  data() {
    return {
      titleCard: 'VUE TODOLIST',
      titleList: 'Cose da ripassare:',
      toDoList:[
        {text:'html', isDone: false},
        {text:'css', isDone: false},
        {text:'bootstrap', isDone: true},
        {text:'java-script', isDone: false},
        {text:'js-vue', isDone: false},
      ],
      newTask: '',
    }
  },
  methods: {
    removeTask(index){
      this.toDoList.splice(index, 1);
    },
    addTask(content){
      // push with validation
      if (content) this.toDoList.push({text: content});

      console.log({text: this.newTask});
      this.newTask= '';
    },
    isDoneControl(isDone, index){
      // 'toggle' isDone
      this.toDoList[index].isDone = !isDone;
    },
  }
}).mount('#app')
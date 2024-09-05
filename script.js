//Check link
console.log('JS OK')

// 1.recupero l'elemento dal Dom


//2.raccolta dati
    
// 3.lavorazione dati
    

// 4.generazione output


const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'VUE TODOLIST',
      message: 'Cose da ripassare:',
      toDoList:[
        {text:'html', isDone: false},
        {text:'css', isDone: false},
        {text:'bootstrap', isDone: true},
        {text:'java-script', isDone: false},
        {text:'js-vue', isDone: false},
      ]
    }
  },
}).mount('#app')
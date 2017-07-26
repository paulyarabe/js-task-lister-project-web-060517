// Task Model
function createTask(){
  var id = 0

  return class Task {
    constructor(description, priority, listId) {
      this.description = description
      this.priority = priority
      this.listId = listId
      this.id = ++id
      store.tasks.push(this)
    }
  }
}

var Task = createTask()

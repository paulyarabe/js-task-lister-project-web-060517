// Task Model

let taskCount = 0

class Task {
  constructor(description, priority, list) {
    this.description = description
    this.priority = priority
    this.id = list.tasks.length
    this.list = list
    this.list.tasks.push(this)
  }
}

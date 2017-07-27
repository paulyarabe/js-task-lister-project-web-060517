

  class Task {
    constructor(description, urgency, currentList) {
      this.description = description
      this.urgency = urgency
      this.id = currentList.tasks.length
      this.list = currentList
      this.list.tasks.push(this)
    }
  }

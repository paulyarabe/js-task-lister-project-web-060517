// List Model

  let listCount = 0

  class List {
    constructor(title) {
      this.title = title
      this.tasks = []
      this.id = listCount++
      this.constructor.all.push(this)
    }
  }
  List.all = []

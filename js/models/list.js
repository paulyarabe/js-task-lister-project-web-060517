// List Model

function createList(){
  let listCount = 0

  return class List {
    constructor(title) {
      this.title = title
      this.id = listCount++
      store.lists.push(this)
    }
    tasks(){
      return store.tasks.filter((task) => {
        return task.listId == this.id;
      })
    }
    static find(listId){
      return store.lists.filter(function(list){
        return list.id == listId;
      })[0]
    }
  }
}

var List = createList()

$(function(){

  $("#add_list").on("submit", function(event) {
    createList()
    this.reset()
  })

  $("#add_task").on("submit", function(event) {
    let listId = event.target.childNodes[3].value
    createTask(listId)
    $('.text_field_input').val("")
  })

})

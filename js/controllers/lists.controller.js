function createList() {
  event.preventDefault()
  select = document.getElementById("select_list")
  let title = $('[name="list_title"]').val();
  list = new List(title)
  let option = document.createElement('option')
  let list_item = document.createElement('div')
  list_item.className = "list"
  option.value = list.id
  option.innerHTML = list.title
  $("#add_task").fadeIn();
  select.appendChild(option)
  $("#list").appendTo(list_item)
}


$(function(){

  $("#add_list").on("submit", function(event) {
    createList()
  })

})

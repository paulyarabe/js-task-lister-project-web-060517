function createTask() {
  event.preventDefault()
  let description = $('[name="task_description"]').val();
  let priority = $('[name="task_priority"]').val();
  task = new Task(description, priority, list)

  task_item = document.createElement('li')
  let task_description = task.description
  let task_priority = task.priority
  task_item.innerHTML = `${task_description}, ${task_priority}`
  div_w_list_cn = document.getElementsByClassName('list')
  for(var i = 0; i < div_w_list_cn.length; i++){
    div_w_list_cn[i].appendChild(task_item)
  }


  // let priority = document.createElement('option')
  // let list_item = document.createElement('div')
  // list_item.className = "list"
  // option.value = list.id
  // option.innerHTML = list.title
  // $("#add_task").fadeIn();
  // list_item.innerHTML = list.title
  // select.appendChild(option)
  // section_lists = document.getElementById('lists')
  // section_lists.appendChild(list_item)
}


$(function(){

  $("#add_task").on("submit", function(event) {
    createTask()
  })

})

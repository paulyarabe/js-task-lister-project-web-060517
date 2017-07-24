function createTask() {
  event.preventDefault()
  let description = $('[name="task_description"]').val();
  let priority = $('[name="task_priority"]').val();
  task = new Task(description, priority, list)
  task_item = document.createElement('li')
  let task_description = task.description
  let task_priority = task.priority
  task_item.innerHTML = `${task_description}, ${task_priority} <button>x</button>`
  div_w_list_cn = document.getElementsByClassName('list')
  for(var i = 0; i < div_w_list_cn.length; i++){
    div_w_list_cn[i].appendChild(task_item)
  }

  $("button").on('click', function(event){
    event.preventDefault();
    $(this).closest('li').remove();
  })
}



$(function(){

  $("#add_task").on("submit", function(event) {
    createTask()
  })

})

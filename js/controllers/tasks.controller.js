function createTask(listId) {
  event.preventDefault()
  let description = $('[name="task_description"]').val();
  let priority = $('[value="1"]').val();

  task = new Task(description, priority, list)

  render(listsHTML(List.all), '#lists')

  //let task_priority = task.priority


  // div = document.getElementById(listId)
  // div.appendChild(task_item)

  // for(var i = 0; i < div_w_list_cn.length; i++){
  //   div_w_list_cn[i].appendChild(task_item)
  // }

  // $(".dlt-task-btn").on('click', function(event){
  //   event.preventDefault();
  //   $(this).closest('li').remove();
  //   //just takes the task off the page, but doesn't really remove it from the list of tasks.
  // })

}

function render(html, into){
  $(into).empty()
  $(into).append(html)
}

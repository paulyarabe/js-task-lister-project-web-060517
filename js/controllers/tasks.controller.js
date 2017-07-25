function createTask(listId) {
  event.preventDefault()

  //make a new task with user input
  let description = $('[name="task_description"]').val();
  let priority = $('[value="1"]').val();
  //let listID = parseInt($('#select_list').val()) +> 0,1,2
  task = new Task(description, priority, list)

  //get data from that new task into a list element with a delete button
  task_item = document.createElement('li')
  let task_description = task.description
  let task_priority = task.priority
  task_item.innerHTML = `${task_description} <button class="dlt-task-btn waves-effect waves-light btn bg-primary">Delete Task</button>`

  //div id needs to equal option value
  //depending on the currently selected option (value), make list.id that.
  div = document.getElementById(listId)
  div.appendChild(task_item)
  // for(var i = 0; i < div_w_list_cn.length; i++){
  //   div_w_list_cn[i].appendChild(task_item)
  // }

  $(".dlt-task-btn").on('click', function(event){
    event.preventDefault();
    $(this).closest('li').remove();
    //just takes the task off the page, but doesn't really remove it from the list of tasks.
  })

}

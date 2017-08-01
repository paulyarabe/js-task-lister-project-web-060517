
function listsHTML(lists){
  return List.all.map(function(list){
    return listHTML(list)
  }).join(' ')
}

function listHTML(list){
  let tasks = tasksHTML(list.tasks)
  return `<div id="${list.id}" class="z-depth-4">${list.title} <button class="dlt-list-btn waves-effect waves-light btn bg-primary">Delete List</button><ul id="${list.id}">${tasks}</ul></div>`
}

function tasksHTML(tasks){
  //TODO i want these tasks here in red below to be sorted by urgency
  //fuck this almost works, but when i delete tasks, it leaves undefined things
  //that get sorted
  // sorted_tasks = tasks.sort(function(a,b) {return (a.urgency > b.urgency) ? 1 : ((b.urgency > a.urgency) ? -1 : 0);} )
  return tasks.map(function(task){
    return `<li id="${task.id}">
    <div class="card">
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${task.description}<button class="dlt-task-btn waves-effect waves-light btn bg-primary">Delete Task</button><i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${task.description}<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
  </div></li>`
  }).join(' ')
}


function selectionsHTML(lists){
  return lists.map(function(list){
    return `<option value="${list.id}">${list.title}</option>`
  }).join(' ')
}

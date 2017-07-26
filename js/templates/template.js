
function listsHTML(lists){
  return lists.map(function(list){
    return listHTML(list)
  }).join(' ')
}

function listHTML(list){
  let tasks = tasksHTML(list.tasks())
  return `<div id="${list.id}" class="z-depth-4">${list.title} <button class="dlt-list-btn waves-effect waves-light btn bg-primary">Delete List</button><ul id="${list.id}">${tasks}</ul></div>`
}

function tasksHTML(tasks){
  return tasks.map(function(task){
    return `<li>${task.description}</li>`
  }).join(' ')
}


function selectionsHTML(lists){
  return lists.map(function(list){
    return `<option value="${list.id}">${list.title}</option>`
  }).join(' ')
}

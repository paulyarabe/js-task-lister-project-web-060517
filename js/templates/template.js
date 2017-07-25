
//render(listsHTML(List.all), '#lists')
function listsHTML(lists){
  return List.all.map(function(list){
    return listHTML(list)
  }).join(' ')
}

function listHTML(list){
  let tasks = tasksHTML(list.tasks)
  return `<div id="0" class="z-depth-4">${list.title} <button class="dlt-list-btn waves-effect waves-light btn bg-primary">Delete List</button>${tasks}</div>`
}

function tasksHTML(tasks){
  return tasks.map(function(task){
    return `<li>${task.description}<button class="dlt-task-btn waves-effect waves-light btn bg-primary">Delete Task</button>`
  }).join(' ')
}

function selectionsHTML(lists){
  return lists.map(function(list){
    //make the list appear in dropdown, give each option a value!
    return `<option value="${list.id}">${list.title}</option>`
  }).join(' ')
}



  // $(".dlt-list-btn").on('click', function(event){
  //   event.preventDefault();
  //   let delete_me = $(this).closest('div')
  //   List.all.forEach(function(element, index){
  //     if(element.id == delete_me[0].id){
  //       List.all.splice(index, 1);
  //     }
  //   })
  //   delete_me.remove();
  //   options = document.getElementsByTagName('option')
  //   real_options = [...options] //array
  //   real_options.forEach(function(element){
  //     if(element.value === delete_me[0].id){
  //       element.remove();
  //     }
  //   })
  // })

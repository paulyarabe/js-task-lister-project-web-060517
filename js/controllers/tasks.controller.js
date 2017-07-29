
function createTask() {

  let description = $('[name="task_description"]').val();
  let urgency = parseInt(event.target.childNodes[11].value)
  //add this task to the list selected in the drop down
  let listArray = store.lists.filter(function(list){
    return list.id === parseInt($('#select_list').val())
  });
  let currentList = listArray[0]

  new Task(description, urgency, currentList)

}


var store = {lists: [], tasks: []}

$(function(){

  $("#add_list").on("submit", function(event) {
    event.preventDefault()
    let title = $('[name="list_title"]').val();
    new List(title)
    $("#add_task").fadeIn();
    render(listsHTML(store.lists), '#lists')
    render(selectionsHTML(store.lists), '#select_list')
    this.reset()
  })

  $("#add_task").on("submit", function(event) {
    event.preventDefault()
    let urgency = event.target.childNodes[11].value
    let listId = parseInt($('#select_list').val())
    let description = $('[name="task_description"]').val();
    let priority = $('[value="1"]').val();
    new Task(description, priority, listId)
    render(listsHTML(store.lists), '#lists')
    $('.text_field_input').val("")
  })

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
})

function render(html, into){
  $(into).empty()
  $(into).append(html)
}

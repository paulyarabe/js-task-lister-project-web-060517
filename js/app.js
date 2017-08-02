function render_list_and_selections(){
  render(listsHTML(List.all), '#lists')
  render(selectionsHTML(List.all), '#select_list')
}

$(function(){

  $("#add_list").on("submit", function(event) {
    event.preventDefault()
    createList()
    $("#add_task").fadeIn();
    render_list_and_selections()
    this.reset()
  })

  $("#add_task").on("submit", function(event) {
    event.preventDefault()
    createTask()
    render(listsHTML(List.all), '#lists')
    $('.text_field_input').val("")
  })

  $('body').on('click', '.dlt-list-btn', function(event){
    event.preventDefault();
    //works fine until you delete out of order. then things get messy
    //List.all.splice(this.parentElement.id, 1)
    //works like a charm :)
    delete List.all[this.parentElement.parentElement.id]
    render_list_and_selections()
  })

  $('body').on('click', '.dlt-task-btn', function(event){
    event.preventDefault();
    //through my div, get my list i belong to, and then find which tasks i am.
    delete List.all[this.parentElement.parentElement.parentElement.parentElement.parentElement.id].tasks[this.parentElement.parentElement.parentElement.parentElement.id]
    render_list_and_selections()
  })

    // let id = $(this).parent().parent().find("ul").data("id")
    // list = List.find(id)
    // list.destroy()
    // render(listsHtml(store.lists), '#lists')
    // render(selectionsHtml(store.lists), '#select_list')

  // $(".dlt-task-btn").on('click', function(event){
  //   debugger
  //   event.preventDefault();
  //   $(this).closest('li').remove();
  //   //just takes the task off the page, but doesn't really remove it from the list of tasks.
  // })

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

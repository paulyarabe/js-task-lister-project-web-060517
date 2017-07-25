function createList() {
  event.preventDefault()

  //get list title and use it to make new List
  let title = $('[name="list_title"]').val();
  list = new List(title)

  //make the form appear
  $("#add_task").fadeIn();

  //make the list appear in dropdown, give each option a value!
  select = document.getElementById("select_list")
  let option = document.createElement('option')
  option.value = list.id
  option.innerHTML = list.title
  select.appendChild(option)
  //give me the selected option


  //make the section for lists at the bottom left part of page
  section_lists = document.getElementById('lists')
  let list_item = document.createElement('div')
  list_item.id = list.id
  list_item.innerHTML = `${list.title}  <button>x</button>`
  section_lists.appendChild(list_item)

  $("button").on('click', function(event){
    event.preventDefault();
    let delete_me = $(this).closest('div')
    delete_me.remove();
    options = document.getElementsByTagName('option')
    real_options = [...options] //array
    real_options.forEach(function(element){
      if(element.value === delete_me[0].id){
        element.remove();
      }
    })
  })

}

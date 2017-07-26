function createList() {

  //get list title and use it to make new List
  let title = $('[name="list_title"]').val();
  new List(title)

  //make the form appear
  $("#add_task").fadeIn();
  render(listsHTML(store.lists), '#lists')
  render(selectionsHTML(store.lists), '#select_list')
}

// function render(html, into){
//   $(into).empty()
//   $(into).append(html)
// }

function createList() {

  //get list title and use it to make new List
  let title = $('[name="list_title"]').val();
  list = new List(title)

  //make the form appear
  $("#add_task").fadeIn();

  //render lists in div below and in dropdown
  render(listsHTML(List.all), '#lists')
  render(selectionsHTML(List.all), '#select_list')
}

function render(html, into){
  $(into).empty()
  $(into).append(html)
}

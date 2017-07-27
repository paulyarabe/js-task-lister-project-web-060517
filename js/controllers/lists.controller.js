function createList() {

  //get list title and use it to make new List
  let title = $('[name="list_title"]').val();
  new List(title)
}

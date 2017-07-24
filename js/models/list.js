// List Model

  let listCount = 0

  class List {
    constructor(title) {
      this.title = title
      this.tasks = []
      this.id = ++listCount
      this.constructor.all.push(this)
    }
  }
  List.all = []


  // function createTeacher(){
  //   let teachersCount = 0
  //   // private variable only
  //
  //   return class Teacher {
  //     constructor(name){
  //       this.id = ++teachersCount
  //       this.name = name
  //       store.teachers.push(this)
  //     }
  //     static find(id){
  //       return store.teachers.filter((teacher)=> {return teacher.id == id})
  //     }
  //     courses(){
  //       // go to the store
  //       // find the list of courses that has the teacherId
  //       // of the current teacher
  //       return store.courses.filter((course) => {
  //         return course.teacherId === this.id
  //       })
  //     }
  //   }
  // }

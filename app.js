var list =document.getElementById("list")
function addtodo(){
   var todo_item = document.getElementById("todo-item")
   var li = document.createElement("li")
   var litext = document.createTextNode(todo_item.value)
   li.appendChild(litext)
   //DELETE
   var delBtn = document.createElement("button")
   var delText = document.createTextNode("DELETE")
   delBtn.setAttribute("class","btn")
   delBtn.setAttribute("onclick","del(this)")
   delBtn.appendChild(delText)
   li.appendChild(delBtn)
   //edit
    var editBtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editBtn.setAttribute("class","butun")
    editBtn.setAttribute("onclick","Edit(this)")
    editBtn.appendChild(edittext)
    li.appendChild(editBtn)

   
   list.appendChild(li)
  
   
   
   
   
}
function del(e){
    e.parentNode.remove();
}
function dellall(){
    list.innerHTML=""

}
function Edit(e){
    var val = e.parentNode.firstChild.nodeValue;
  var editvalue=prompt("Enter edit value",val)
  e.parentNode.firstChild.nodeValue=editvalue;

}
window.onload = function () {
    getAllToDo();
}
function submit(event) {
    if(event.which==13){
        addtodo();
    }
}
function getAllToDo() {
        if(localStorage.getItem("list")!=null) {
            todoObj.list = JSON.parse(localStorage.getItem("list"));

            var todos = todoObj.list;
            var str = "";
            todos.forEach(function (t, i) {
                if (t.status == statusENUMS.COMPLETED) {
                    str += "<tr><td><input type='checkbox'  class='chkbx' onchange='markActive(" + i + ")' checked></td><td class='line-through completed'  width='400px;'>" + t.title + "</td><td class='cross-btn' onclick='markDeleted(" + i + ")'><b class='links'>X</b></td></tr>";
                }
                else if (t.status == statusENUMS.ACTIVE) {
                    str += "<tr><td><input type='checkbox' class='chkbx' onchange='markComplete(" + i + ")'></td><td width='400px'>" + t.title + "</td><td class='cross-btn' onclick='markDeleted(" + i + ")'><b class='links'>X</b></td></tr>";
                }
            });
            document.getElementById('todolist').innerHTML = str;
        }
        else {
            document.getElementById('todolist').innerHTML = "No Todo Found !!!";

        }
}

function addtodo() {
    if (document.getElementById('title').value != "" || document.getElementById('title').value.trim() != "") {
        todoObj.add(document.getElementById('title').value);
        var jsonstr = JSON.stringify(todoObj.list);
        localStorage.setItem("list",jsonstr);
        getAllToDo();
        document.getElementById('title').value="";
    }
}

function markActive(i) {
    todoObj.active(i);
    var jsonstr = JSON.stringify(todoObj.list);
    localStorage.setItem("list",jsonstr);
    getAllToDo();
}
function markComplete(i) {
    todoObj.complete(i);
    var jsonstr = JSON.stringify(todoObj.list);
    localStorage.setItem("list",jsonstr);
    getAllToDo();
}
function markDeleted(i) {
    todoObj.delete(i);
    var jsonstr = JSON.stringify(todoObj.list);
    localStorage.setItem("list",jsonstr);
    getAllToDo();
}
var statusENUMS = {
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
    COMPLETED: "COMPLETED"
};

var todo = (function () {
    function todo(name) {
        this.title = name;
        this.status = statusENUMS.ACTIVE;
    }
    return todo;
})();

var todoList = (function () {
    function todoList() {
        this.list = [];
    }
    todoList.prototype.add = function (name) {
        var item = new todo(name);
        this.list.push(item);
    };
    todoList.prototype.delete = function (id) {
        this.list[id].status = statusENUMS.DELETED;
    };
    todoList.prototype.complete = function (id) {
        this.list[id].status = statusENUMS.COMPLETED;
    };
    todoList.prototype.active = function (id) {
        this.list[id].status = statusENUMS.ACTIVE;
    };
    todoList.prototype.showlist = function () {
        return this.list;
    };
    return todoList;
})();

var todoObj = new todoList();

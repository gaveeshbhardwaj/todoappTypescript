var statusENUMS = {
    ACTIVE:"ACTIVE",
    DELETED:"DELETED",
    COMPLETED:"COMPLETED"
};

class todo {
    title:string;
    status:string;
    constructor(name:string){
        this.title=name;
        this.status=statusENUMS.ACTIVE;
    }
}

class todoList{
    list:todo[];
    constructor(){
        this.list=[];
    }
    add(name:string){
        var item = new todo(name);
        this.list.push(item);
    }
    delete(id:number){
        this.list[id].status=statusENUMS.DELETED;
    }
    complete(id:number){
        this.list[id].status=statusENUMS.COMPLETED;
    }
    active(id:number) {
        this.list[id].status = statusENUMS.ACTIVE;
    }
    showlist(){
        return this.list
    }

}


var todoObj  = new todoList();

// const n1 = {
//     data: 100

// }
// const n2 = {
//     data:200
// }
// n1.next = n2;
class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);

    }
    printListData(){
        let current=this.head ;
        while (current) {
            console.log("Node Data : ",current.data," | Next Node:",current.next );
            current = current.next;
            this.size++; 


        }

    }
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            //if head  == null
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next =node;
        }

    }
    insertAt(data,index){
        let node = new Node();
        let p1,p2;
    }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.printListData();
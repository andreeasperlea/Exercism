//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}
export class LinkedList {
constructor(){
  this.head=null;
  this.tail=null;
  this.size=0;
}
  
  push(value) {
    const newNode= new Node(value);

    if(!this.head){
      this.head=newNode;
      this.tail=newNode;
    }else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.size++;
  }

  pop() {
    if(!this.head) return null;

    let current=this.head;
    let prev=null;
    while(current.next){
      prev=current;
      current=current.next;
    }
    if(prev){
      prev.next=null;
      this.tail=prev;
    }else{
      this.head=null;
      this.tail=null;
    }
    this.size--;
    return current.value;
  }

  shift() {
    if(!this.head) return null;
    let shifted=this.head;
    this.head=this.head.next;
    this.size--;
    return shifted.value;
  }

  unshift(value) {
    const newNode=new Node(value);
    if(!this.head){
      this.head=newNode;
      this.tail=newNode;
    }else{
      newNode.next=this.head;
      this.head=newNode;
    }
    this.size++;
  }

  delete(value) {
  if (!this.head) return null;

  let current = this.head;
  let prev = null;

  while (current) {
    if (current.value === value) {
      if (prev) {
        prev.next = current.next;
      } else {
        this.head = current.next;
      }

      if (current === this.tail) {
        this.tail = prev;
      }

      this.size--;
      return current.value;
    }

    prev = current;
    current = current.next;
  }

  return null;
}


  count() {
    return this.size;
  }
}

import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return (this.head === null);
  }

  prepend(value) {
    const newNode = new LinkListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return this;
  }

  delete(value) {
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = currentNode.next;
      return true;
    }

    while (currentNode.next != null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  traverse() {
    if (this.isEmpty()) {
      return null;
    }
    let list = '';
    let temp = this.head;
    while (temp !== null) {
      list += String(temp.value);
      list += ' -> ';
      temp = temp.next;
    }
    return list;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    if (this.isEmpty()) {
      return 0;
    }

    let count = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      count += 1;
      currentNode = currentNode.next;
    }

    return count;
  }
}

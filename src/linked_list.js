/* ----------------------
Note: BEFORE tackling the LinkedList class
below, read the tests in the test file.
---------------------- */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  // adds a node to the tail of the list
  addToTail(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
  }

  // returns the total number of nodes in the list
  getSize() {
    let currentNode = this.head;
    let size = 1;

    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  // WARM UP

  // returns the value of the head of the linked list
  headValue() {
    return this.head.value;
  }

  // returns the value of the tail of the linked list
  tailValue() {
    return this.tail.value;
  }

  // returns the value of the node that comes after the head
  nextToHead() {
    let node = this.head;

    if (node.next !== null) {
      return this.head.next.value;
    } else {
      return null;
    }
  }

  // MAIN EXERCISES

  // returns the NODE stored at the Nth index position of the list
  getNthNode(index) {
    let node = this.head;
    let ix = 0;

    while (node !== null && ix < index) {
      node = node.next;
      ix++;
    }

    return node;
  }

  // removes the node assigned to the tail
  removeFromTail() {
    // check whether list is empty
    if (this.head === null) {
      return null;
    }

    // check if list has only one node
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    }

    let currNode = this.head;
    let prevNode = null;

    // traverse linked list
    while (currNode.next !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    // update the tail and remove the last node
    this.tail = prevNode;
    prevNode.next = null;

    return currNode;
  }

  // adds a node to the head of the list
  addToHead(val) {
    let prevHead = this.head;
    let newNode = new Node(val);

    // set pointer of newNode to point to prevHead
    newNode.next = prevHead;
    // update head pointer
    this.head = newNode;
  }

  // removes the node assigned to the head
  removeFromHead() {
    // check whether list is empty
    if (this.head === null) {
      return null;
    }

    // check if list has only one node
    if (this.head.next === null) {
      let nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      return nodeToRemove;
    }

    // store node before removing it
    let nodeToRemove = this.head;
    // update head pointer
    this.head = this.head.next;
    // return node that was removed
    return nodeToRemove;
  }

  // returns the node that contains the value
  findNode(refNodeValue) {
    let node = this.head;

    // traverse linked list to find value
    while (node !== null && node.value !== refNodeValue) {
      node = node.next;
    }

    // if found, return node; otherwise, throw error
    if (node === null) {
      return "No node found.";
    } else {
      return node;
    }
  }

  // applies a callback to every node in the list
  forEach(fn) {
    let node = this.head;

    while (node !== null) {
      fn(node);
      node = node.next;
    }
  }

  // inserts a new node after the reference node
  insertAfter(refNodeValue, val) {
    let currNode = this.head;

    // find reference node
    while (currNode !== null && currNode.value !== refNodeValue) {
      currNode = currNode.next;
    }

    // throw error if reference node is not found
    if (currNode === null) {
      return "No node found.";
    }

    // create new node
    let newNode = new Node(val);

    // make new node point to node after reference node
    newNode.next = currNode.next;
    // make reference node point to new node
    currNode.next = newNode;
    // if necessary, update tail pointer
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  // remove the node after the reference node
  removeAfter(refNodeValue) {
    let currNode = this.head;

    // find reference node
    while (currNode !== null && currNode.value !== refNodeValue) {
      currNode = currNode.next;
    }

    // throw error if reference node is not found
    if (currNode === null) {
      return "No node found.";
    }

    // store removedNode
    let removedNode = currNode.next;
    // update node pointer of node before reference node to point to next node
    currNode.next = currNode.next.next;

    // if necessary, update tail pointer
    if (removedNode === this.tail) {
      this.tail = currNode;
    }

    return removedNode;
  }

  // // OPTIONAL

  // //merges the current list with a new list, appending the new list after the tail of the current list
  // mergeAppend(newList) {}

  // //merges the current list with a new list, by inserting the new list after the node in the index position.
  // mergeAfterIndex(newList, index) {}
}

module.exports = LinkedList;

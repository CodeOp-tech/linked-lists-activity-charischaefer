const LinkedList = require("../src/linked_list");

let linkedList = null;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  describe("The addToTail method", () => {
    test("should add a new node to the tail", () => {
      linkedList.addToTail(2);
      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.tail.value).toBe(2);
    });
  });

  describe("The getSize method", () => {
    test("should calculate the total number of nodes in the list", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.getSize()).toBe(5);
    });
  });

  describe("The headValue method", () => {
    test("should return the value of the head of the linked list", () => {
      linkedList.addToTail(2);
      expect(linkedList.headValue()).toBe(1);
    });
  });

  describe("The tailValue method", () => {
    test("should return the value of the tail of the linked list", () => {
      linkedList.addToTail(2);
      expect(linkedList.tailValue()).toBe(2);
    });
  });

  describe("The nextToHead method", () => {
    test("should return the value of the node that comes after the head", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      expect(linkedList.nextToHead()).toBe(2);
    });
    test("should return null if there's no node after the nead", () => {
      expect(linkedList.nextToHead()).toBe(null);
    });
  });

  describe("The getNthNode method", () => {
    test("should return the node in the Nth index position (starting at 0)", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.getNthNode(2).value).toBe(3);
    });
    test("should return null if there is no node at that index", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.getNthNode(4)).toBe(null);
      expect(linkedList.getNthNode(10)).toBe(null);
    });
  });

  describe("The removeFromTail method", () => {
    test("should remove the tail from the linked list", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.removeFromTail();
      expect(linkedList.tail.value).toBe(2);
      expect(linkedList.tail.next).toBe(null);
    });
    xtest("should return the node that was removed", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      expect(linkedList.removeFromTail().value).toBe(3);
    });
  });

  describe("The addToHead method", () => {
    test("should add a new node to the head", () => {
      linkedList.addToTail(2);
      linkedList.addToHead(0);
      expect(linkedList.head.value).toBe(0);
      expect(linkedList.head.next.value).toBe(1);
      expect(linkedList.head.next.next.value).toBe(2);
      expect(linkedList.tail.value).toBe(2);
    });
  });

  describe("The removeFromHead method", () => {
    test("should remove the head from the linked list", () => {
      linkedList.addToTail(2);
      linkedList.removeFromHead();
      expect(linkedList.head.value).toBe(2);
    });
    xtest("should return the node that was removed", () => {
      linkedList.addToHead(0);
      expect(linkedList.removeFromHead().value).toBe(0);
      expect(linkedList.removeFromHead().value).toBe(1);
    });
    xtest("should set the head & tail to null if the linked list only contains one node", () => {
      linkedList.removeFromHead();
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });
  });

  describe("The findNode method", () => {
    test("should return the node that matches the value", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.findNode(3)).toBe(linkedList.head.next.next);
    });
    xtest('should return "No node found." if the refNodeValue does not exist', () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.findNode(7)).toBe("No node found.");
    });
  });

  describe("The forEach method", () => {
    test("should apply a callback to every node in the method", () => {
      let listItems = [];
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.forEach(e => listItems.push(e.value));
      expect(listItems).toEqual([1, 2, 3, 4]);
    });
  });

  describe("The insertAfter method", () => {
    test("should insert a node after the refNode value", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(4);
      linkedList.insertAfter(2, 3);
      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.head.next.next.value).toBe(3);
      expect(linkedList.head.next.next.next.value).toBe(4);
    });
    xtest("should update the tail if the node is inserted after the current tail", () => {
      linkedList.addToTail(2);
      linkedList.insertAfter(2, 3);
      expect(linkedList.tail.value).toBe(3);
    });
    xtest('should return "No node found." if the refNodeValue does not exist', () => {
      expect(linkedList.insertAfter(9, 3)).toBe("No node found.");
    });
  });

  describe("The removeAfter method", () => {
    test("should remove the node after the refNode value", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      linkedList.removeAfter(2);
      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.head.next.next.value).toBe(4);
    });
    xtest("should return the node that was removed", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.addToTail(4);
      expect(linkedList.removeAfter(2).value).toBe(3);
    });
    xtest("should update the tail if the node removed was the tail", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);
      linkedList.removeAfter(2);
      expect(linkedList.tail.value).toBe(2);
    });
    xtest('should return "No node found." if the refNodeValue does not exist', () => {
      expect(linkedList.removeAfter(9)).toBe("No node found.");
    });
  });

  describe("The mergeAppend method", () => {
    test("should append the given list at the end of the current list", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);

      const secondList = new LinkedList(4);
      secondList.addToTail(5);
      secondList.addToTail(6);

      linkedList.mergeAppend(secondList);

      expect(linkedList.head.next.next.next.value).toBe(4);
      expect(linkedList.head.next.next.next.next.value).toBe(5);
    });

    xtest("should update the tail of the list", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);

      const secondList = new LinkedList(4);
      secondList.addToTail(5);
      secondList.addToTail(6);

      linkedList.mergeAppend(secondList);

      expect(linkedList.tail.value).toBe(6);
    });
  });

  describe("The mergeAfterIndex method", () => {
    test("should append the given list at the Nth position of the current list", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);

      const secondList = new LinkedList(4);
      secondList.addToTail(5);
      secondList.addToTail(6);

      linkedList.mergeAfterIndex(secondList, 1);
      // resulting list should be
      // 1 > 2 > 4 > 5 > 6 > 3

      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.head.next.next.value).toBe(4);
      expect(linkedList.head.next.next.next.value).toBe(5);
      expect(linkedList.head.next.next.next.next.next.value).toBe(3);

      expect(linkedList.tail.value).toBe(3);
    });

    xtest("should update the tail of the list if necessary", () => {
      linkedList.addToTail(2);
      linkedList.addToTail(3);

      const secondList = new LinkedList(4);
      secondList.addToTail(5);
      secondList.addToTail(6);

      linkedList.mergeAfterIndex(secondList, 2);
      // resulting list should be
      // 1 > 2 > 3 > 4 > 5 > 6

      expect(linkedList.tail.value).toBe(6);
    });
  });
});

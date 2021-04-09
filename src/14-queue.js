// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = new ListNode('head');
  }

  enqueue(element) {
    this.queue = this.innerEnqueue(element, this.queue);
  }

  innerEnqueue(element, queue) {
    const list = queue;
    const newNode = new ListNode(element);
    newNode.next = list.next;
    list.next = newNode;
    return list;
  }

  dequeue() {
    if (this.queue.next === null) throw new Error('The queue is empty, add any elemnt first!');
    const [list, value] = this.innerDequeue(this.queue);
    this.queue = list;
    return value;
  }

  innerDequeue(queue) {
    const list = queue;
    let value;
    if (list.next.next === null) {
      value = list.next.value;
      list.next = null;
    } else {
      [list.next, value] = this.innerDequeue(list.next);
    }
    return [list, value];
  }
}

module.exports = Queue;

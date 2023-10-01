# Challenge Title
## Stack And Queue
> This coding challenge is to create Linked List method - zip. This method zip two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

### Whiteboard Process
![Linked List Zip](../images/linked-list-zip.png)

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

1. LinkedList.zip()
  * Time Complexity - O(max(n,m)) - where n is the length of the first linked list while m is the length of the second linked list.
  * Space Complexity - O(1) - constant because output doesn't grow with the linked list lengths

### Solution
<!-- Show how to run your code, and examples of it in action -->
[Link to code](https://github.com/cleecoloma/data-structures-and-algorithms/blob/main/javascript/linked-list-zip/index.js)
```text
npm test
```
![Linked List Zip](../images/linked-list-zip-test.png)


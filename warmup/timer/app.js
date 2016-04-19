// function getRandomList(length){
//   var list = [];
//   for(var i = 0; i < length; i++){
//     list.push(Math.floor(Math.random() * 50)+1);
//   }
//   return list;
// }
// //
// function testPerformance(callback, args) {
//   var t0 = process.hrtime();
//   callback(args);
//   var diff = process.hrtime(t0);
//   return(diff[0] * 1e9 + diff[1]);
// }




// var start = process.hrtime();
// console.log(start);

// function tripleLoop(num1){
//   var time = process.hrtime();
//   var sum = 0;
//   for(var i = 0; i < num1; i++){
//     for(var j = 0; j < num1; j++){
//       for(var k = 0; k < num1; k++){
//         sum++;
//       }
//     }
//   }
//   var end = process.hrtime(time);
//   console.log(end);
// }
//
// tripleLoop(5000);



// function selectionSort(arr){
//   var current, isSmaller;
//   for(current = 0; current < arr.length-1; current++){
//     var currentMin = current;
//     for(isSmaller = current+1; isSmaller < arr.length; isSmaller++){
//       if(arr[isSmaller] < arr[currentMin]){
//         currentMin = isSmaller;
//       }
//     }
//     if(currentMin != current){
//       var temp = arr[currentMin];
//       arr[currentMin] = arr[current];
//       arr[current] = temp;
//     }
//   }
//   return arr;
// }
//
// console.log(selectionSort([4,6,7,9,5,2,3,1,0,8]));


//
// function merge(arr1, arr2){
//  var mergedArr = [];
//  var arr1_index = 0;
//  var arr2_index = 0;
//
//  while(arr1_index < arr1.length && arr2_index < arr2.length){
//    if(arr1[arr1_index ] < arr2[arr2_index]){
//      mergedArr.push(arr1[arr1_index]);
//      arr1_index++;
//
//    }else if(arr1[arr1_index ] > arr2[arr2_index]){
//      mergedArr.push(arr2[arr2_index]);
//      arr2_index++;
//
//    }else if(arr1[arr1_index ] === arr2[arr2_index]){
//      mergedArr.push(arr1[arr1_index]);
//      mergedArr.push(arr2[arr2_index]);
//      arr1_index++;
//      arr2_index++;
//    }
//  }
//
//  if(arr1_index < arr1.length){
//    mergedArr = mergedArr.concat(arr1.slice(arr1_index));
//  }
//  if(arr2_index < arr2.length){
//    mergedArr = mergedArr.concat(arr2.slice(arr2_index));
//  }
//
//  return mergedArr;
// }
//
// function mergeSort(list){
//  if(list.length < 2){
//    return list;
//  }
//
//  var middle = Math.floor(list.length / 2);
//  var left = list.slice(0,middle);
//  var right = list.slice(middle);
//
//  return merge(mergeSort(left), mergeSort(right));
// }
//
// // console.log(mergeSort([7,9,5,2,8,6,42,73,81,1,1047,12]));
//
// console.log(testPerformance(mergeSort, getRandomList(10000000)));
//
// var time = process.hrtime(getRandomList(10000000).sort());
// var timeDiff = time[1] - time[0];
// console.log(timeDiff);
//
// function swap(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
//
// function partition(items, left, right) {
//     // find and assign pivot by halving sum of right and left index
//     var pivot = items[Math.floor((right + left) / 2)],
//         i     = left,
//         j     = right;
//     // loop until the pointers pass one another
//     while (i <= j) {
//         // increment i while item[i] is less than pivot
//         while (items[i] < pivot) {
//             i++;
//         }
//         // decrement j while item[j] is more than pivot
//         while (items[j] > pivot) {
//             j--;
//         }
//         // swap i and j when i is less than or equal to j
//         // increment and decrement i and j, respectively
//         if (i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     // return i to be used as index for left or right pointers in recursive calls of quicksort
//     return i;
// }
//
// function quickSort(items, left, right) {
//     // declare index to be used later when each partition returns 'i'
//     var index;
//     // if statement to handle the base case (any array smaller
//     // than length of 1 is returned
//     if (items.length > 1) {
//         // if no left or right is entered, set them to first and last indeces in array
//         left = typeof left !== "number" ? 0 : left;
//         right = typeof right !== "number" ? items.length - 1 : right;
//         // set index to return value of partition function
//         index = partition(items, left, right);
//         // compare current left value to index - 1
//         // if left is smaller, then there are still items to be sorted on
//         // the left side of the array, so quicksort is called recursively
//         if (left < index - 1) {
//             quickSort(items, left, index - 1);
//         }
//         // compare current right value to index
//         // if index is smaller than right, then there are still items
//         // to be sorted on the right side of the array, so quicksort
//         // is called recursively
//         if (index < right) {
//             quickSort(items, index, right);
//         }
//
//     }
//     // all recursive calls have finished so the sorted array is returned
//     return items;
// }

// var Stack = function(){
//   this.data = [];
// };
// Stack.prototype.pop = function(){
//   return this.data.pop();
// };
// Stack.prototype.push = function(data){
//   this.data.push(data);
// };
// Stack.prototype.peek = function(){
//   return this.data[this.values.length - 1];
// };
// Stack.prototype.isEmpty = function(){
//   return this.data.length === 0;
// };
//
////============================================================
//                    QUEU
//============================================================
//
// var Queue = function(){
//   this.data = [];
// };
// Queue.prototype.remove = function(){
//   return this.data.shift();
// };
// Queue.prototype.add = function(data){
//   this.data.push(data);
// };
// Queue.prototype.peek = function(){
//   return this.data[0];
// };
// Queue.prototype.size = function(){
//   return this.data.length;
// };

// function reverse(str){
//   var word = str.split(' ');
//   var arr = [];
//   for (var i = word.length - 1; i >= 0; i--) {
//     arr.push(word[i]);
//   }
//   return arr;
// }
//
// console.log(reverse('Do or do not. There is no try.'));

// var Node = function(_val, _next){
//   this.value = _val;
//   this.next = _next || null;
// };
//
// var head = new Node(1, new Node(2, new Node(3)));
// console.log(head);

//============================================================
//                    Singly Linked List
//============================================================

// LinkedList Constructor
// properties:
//  head: the first node in the list.
//  tail (optional): the last node in the list.
//  length (optional): the length of the list.
var LinkedList = function() {
  this.head = null;
  this.length = 0;
};

// append
// description:
//  Creates a node with the passed in value and appends the node to the end of the LinkedList.
// parameters:
//  value: some data to be held by the appended node.
// LinkedList.prototype.append = function(value) {
//   if (this.head === null){
//     this.tail = this.head = new Node(value);
//
//   } else {
//     var cur = this.head;
//     while(cur.next !== null){
//       cur = cur.next;
//     }
//     cur.next = new Node(value);
//   }
//   this.length++;
// };
//
// LinkedList.prototype.get = function(n){
//   if(n < this.length && n >= 0){
//     var cur = this.head;
//
//     for (var i = 0; i < n; i++) {
//       cur = cur.next;
//
//     }
//     return cur;
//   }
// };
//
// LinkedList.prototype.remove = function(n){
//   var node = this.get(n);
//   if(node){
//
//     if(n !== 0 && node.next){
//
//       this.get(n - 1).next = node.next;
//
//     } else {
//
//       this.head = this.head.next;
//
//     }
//
//   }
//
// };
//
// // Node constructor:
// // parameters:
// //  _next: a Node, undefined or null.
// //  _value: data
// // properties:
// //  next: a reference to the next node in a list, null if no nodes remaining.
// //  value: data held by the node.
// var Node = function(_val, _next){
//   this.value = _val;
//   this.next = _next || null;
// };
//
// //============================================================
// //                    Doubly Linked List
// //============================================================
//
// var DoubleNode = function(_val, _prev, _next){
//   Node.call(this, _val, _next);
//
//   this.prev = _prev || null;
// };
//
// DoubleNode.prototype = Object.create(Node.prototype);
//
// var DoublyLinkedList = function(){
//   LinkedList.call(this);
// };
//
// DoublyLinkedList.prototype.append = function(value) {
//   if (this.head === null){
//     this.tail = this.head = new DoubleNode(value);
//
//   } else {
//     var cur = this.head;
//     while(cur.next !== null){
//       cur = cur.next;
//     }
//     cur.next = new DoubleNode(value);
//   }
//   this.length++;
// };
//
//
// //something to ask here is... What the hell is a doubly linked list?
//
//
// var classList = new LinkedList();
// classList.append('Luke');
// classList.append('David');
// classList.append('Jared');
// classList.append('Ian');
// classList.append('Saundie');
// classList.append('Matt');
// classList.append('Micah');
// console.log(classList);
// console.log(classList.get(3)); // Ian
// classList.remove(3);
// // classList.get(3); // Saundie
//
//
// console.log(classList);

function BinTree(node) {
  this.root = node;
  this.newSize = 0;
}

function Node(_val) {
  this.left = null;
  this.right = null;
  this.value = _val;
}

BinTree.prototype.getLowest = function() {
  var currentNode = this.root;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
    this.newSize++;
  }
  return currentNode;
};

BinTree.prototype.getHighest = function() {
  var currentNode = this.root;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
    this.newSize++;
  }
  return currentNode;
};

BinTree.prototype.getSize = function() {

};

module.exports = {
  BinTree: BinTree,
  Node: Node
};

var myBinTree = new BinTree(new Node(8));
myBinTree.root.left = new Node(3);
myBinTree.root.left.left = new Node(1);
myBinTree.root.left.right = new Node(6);
myBinTree.root.left.right.left = new Node(4);
myBinTree.root.left.right.right = new Node(7);
myBinTree.root.right = new Node(10);
myBinTree.root.right.right = new Node(14);
myBinTree.root.right.right.left = new Node(13);
myBinTree.root.right.right.right = new Node(20);


console.log(myBinTree.getLowest());
console.log(myBinTree.getHighest());
console.log(myBinTree.getSize());









//

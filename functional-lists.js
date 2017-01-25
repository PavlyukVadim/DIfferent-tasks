function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { /* implement this */ };
EmptyList.prototype.isEmpty = function() { return true;/* implement this */ };
EmptyList.prototype.length = function() { /* implement this */ };
EmptyList.prototype.push = function(x) { /* implement this */ };
EmptyList.prototype.remove = function(x) { /* implement this */ };
EmptyList.prototype.append = function(xs) { /* implement this */ };

function ListNode(value, next) { /* implement this */ }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { /* implement this */ };

ListNode.prototype.toString = function() { /* implement this */ };

ListNode.prototype.head = function() { /* implement this */ };
ListNode.prototype.tail = function() { /* implement this */  };
ListNode.prototype.length = function() { /* implement this */ };
ListNode.prototype.push = function(x) { /* implement this */ };
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ };



/*var mt, l1, l2, l3, l4;

mt = new EmptyList();
l1 = mt.push('c').push('b').push('a');
l2 = l1.append(l1);
l3 = l1.remove('b');
l4 = l2.remove('b');


console.log(mt.isEmpty(), "Empty List is empty");
console.log( !l1.isEmpty(), "Non-empty list is not empty");
console.log(mt.toString() === "()", "()");
console.log(l3.toString() === "(a c)", "(a c)");
console.log(mt.length() === 0, "Empty list has length zero");
console.log(l1.length() === 3, "(a b c) length 3");

console.log(l2.tail().tail().tail() === l1, "(a b c a b c) shares");
console.log(l2 !== l1, "(a b c a b c) doesn't share too much");
console.log(l3.tail() === l1.tail().tail(), "(a b c) remove b shares c");*/

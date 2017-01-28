"use strict";

function List() {}

function EmptyList() {}


EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { 
	return "()";
};
EmptyList.prototype.isEmpty = function() { 
	return true;
};

EmptyList.prototype.length = function() { 
	return 0;
};

EmptyList.prototype.push = function(x) { 
	let listNode = new ListNode(x, this);
	return listNode; 
};

EmptyList.prototype.remove = function(x) {};
EmptyList.prototype.append = function(xs) {};


function ListNode(value, next) { 
	this.value = value;
	this.next = next;
}


ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { 
	if (!this.length()) return true;
	return false;
};

ListNode.prototype.toString = function() { 
	let list = this,
		values = [];
	while (list instanceof ListNode) {
		values.push(list.value);
		list = list.next;
	}
	return "(" + values.join(" ") + ")";
};

ListNode.prototype.head = function() { 
	return this.value;
};

ListNode.prototype.tail = function() { 
	return this.next; 
};
ListNode.prototype.length = function() {
	let length = 0;
	let list = this;
	while (list instanceof ListNode) {
		length++;
		list = list.next;
	}
	return length;
};

ListNode.prototype.push = function(x) {
	let listNode = new ListNode(x, this);
	return listNode;
};

ListNode.prototype.remove = function(x) {
	if (x == this.head()){
		return this.next;	
	}
	let length = this.length();
	let list = this;
	let prevNode;

	prevNode = list;

	if(list.value === x) {
		list = list.next;
		length--;
	}
list.r = true;

	while (length > 1) {
		list = list.next;
		list.r = true;
		if(list.value === x) {
			prevNode.next = list.next;
		} else {
			prevNode = list;	
		}

		length--;
	}

	return this;
};


ListNode.prototype.append = function(xs) {
	let length = this.length();
	let list = this;
	let copyThis, headCopy;
	let prevNode;

	copyThis = new ListNode(list.value, undefined);
	headCopy = copyThis;	 
	prevNode = copyThis;
	length--;
	while (length >= 1) {
		length--;
		list = list.next;
		copyThis = new ListNode(list.value, undefined);
		prevNode.next = copyThis;
		prevNode = copyThis;
	}
	prevNode.next = xs;
	return headCopy;
};
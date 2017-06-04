// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
	this.numberOfItems = collection.length;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.numberOfItems;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
 return Math.ceil(this.numberOfItems / this.itemsPerPage);   
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (this.pageCount() - 1 < pageIndex || pageIndex < 0) {
  	return -1;
  } else if (this.pageCount() - 1 > pageIndex) {
    return this.itemsPerPage;
  } else {
  	return this.numberOfItems % this.itemsPerPage;
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
	if(itemIndex > this.numberOfItems || itemIndex < 0 || !this.numberOfItems) {
		return -1;
	} else if (!itemIndex) {
		return 0;
	} else {
    return Math.ceil(itemIndex / this.itemsPerPage) - 1;
	}
}

const paginationHelper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(paginationHelper.itemCount());

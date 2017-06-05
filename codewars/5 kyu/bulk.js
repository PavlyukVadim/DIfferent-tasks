"use strict";

const food = { 
  chicken: [20, 5, 10], //per 100g chicken has 20g of protein, 5 grams of carbohydrates and 10 grams of fat.
  eggs: [10, 5, 15],
  salmon: [27, 0, 10],
  beans: [8, 25, 0],
  bananas: [1, 23, 0]
}

const bulk = (arr) => {
	let proteins = 0;
	let calories = 0;
	arr.forEach((meal) => {
		meal.split(', ').forEach((product) => {
			const productWeight = product.split(' ')[0].slice(0, -1);
      const productName = product.split(' ')[1];
			proteins += (productWeight / 100) * food[productName][0];
			calories += (productWeight / 100) * (food[productName][0] + food[productName][1]) * 4 + 
			            (productWeight / 100) * (food[productName][2]) * 9;
		});
	});
	return `Total proteins: ${Math.round(proteins * 100) / 100} grams, Total calories: ${Math.round(calories * 100) / 100}`;
}

console.log(bulk(["175g chicken, 100g eggs, 25g salmon", "175g beans, 200g bananas"]));

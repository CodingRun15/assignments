/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 7,
    category: 'Beverage',
    itemName: 'Coke',
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 20,
    category: 'Food',
    itemName: 'Pasta',
  },
  {
    id: 5,
    timestamp: 1656422400000,
    price: 5,
    category: 'Snack',
    itemName: 'Chips',
  },
  {
    id: 6,
    timestamp: 1656508800000,
    price: 3,
    category: 'Beverage',
    itemName: 'Water',
  },
  {
    id: 7,
    timestamp: 1656595200000,
    price: 8,
    category: 'Snack',
    itemName: 'Cookies',
  },
  {
    id: 8,
    timestamp: 1656681600000,
    price: 12,
    category: 'Food',
    itemName: 'Sandwich',
  }
];

function calculateTotalSpentByCategory(transactions) {
 let categoryTotals = {};
 transactions.forEach(transaction=>{
  if(!categoryTotals[transaction.category]) { 
    categoryTotals[transaction.category] = 0;
  }
  categoryTotals[transaction.category] += transaction.price;
})
const result =  Object.keys(categoryTotals).map(key=>{
  return {category: key, totalSpent: categoryTotals[key]};  // return array of objects
});
return result;
}

console.log(calculateTotalSpentByCategory(transactions));

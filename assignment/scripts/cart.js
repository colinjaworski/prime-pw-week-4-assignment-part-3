console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem(bees){
  basket.push(bees);
  if (basket.includes('bees')) {
    console.log('bees has been added to the basket array', basket);
    return 'true'
  }
}
addItem('bees')

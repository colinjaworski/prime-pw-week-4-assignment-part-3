console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem(item){
  basket.push(item);
  if (basket.includes('item')) {
    console.log('item has been added to the basket array', basket);
    return 'true'
  }
}
addItem('item')


function listItems(){
  for( let i = 0; i < basket.length; i++ ){
    console.log( 'for loop showing contents of basket array: ', basket[i]);
  }
}
listItems()

function empty(){
  basket.length = 0;
}
empty()
console.log('The basket array is now empty', basket);

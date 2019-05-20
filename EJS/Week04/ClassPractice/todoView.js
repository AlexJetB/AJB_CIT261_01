let itemList =[];

export default function createItem(data) {
  const item =document.createElement('li');
  item.innerHTML = `Date: ${data}`;
  return item;
}

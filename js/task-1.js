
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.firstElementChild.textContent;
  const elem = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
  Elements: ${elem}`);
});
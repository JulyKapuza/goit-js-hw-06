const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

// const items = document.querySelectorAll('.item');

// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title}`)
//     console.log(`Elements: ${itemsLength}`);
// });



const items = document.querySelectorAll('.item');

for (const item of items) {
    const titleCategories = item.querySelector("h2")
    const numberOfTitleCategories = item.querySelectorAll('ul li')
    
    console.log(`Category: ${titleCategories.textContent}`)
    console.log(`Elements: ${numberOfTitleCategories.length}`)
}

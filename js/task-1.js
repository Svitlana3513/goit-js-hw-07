const allCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${allCategories.length}`);

const titleNames = document.querySelectorAll("h2");

titleNames.forEach(function (name) {
    const titleName = name.textContent;
    console.log(`Category: ${titleName}`);
    const allTitleCategory = name.parentElement.querySelectorAll("ul>li");
    console.log(`Elements: ${allTitleCategory.length}`);
});
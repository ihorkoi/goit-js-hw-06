function categoryCounter() {
    const liRef = document.querySelectorAll('li.item')
    console.log('Number of categories: ', liRef.length)
    liRef.forEach(item =>{
        console.log('Category:', item.firstElementChild.textContent)
        console.log('Elements:', item.lastElementChild.childElementCount)})
}
categoryCounter()
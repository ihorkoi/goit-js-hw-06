function categoryCounter() {
    const liRef = document.querySelectorAll('li.item')
    console.log('Number of categories: ', liRef.length)
    liRef.forEach(item =>{
        console.log('Category:', item.querySelector('h2').textContent)
        console.log('Elements:', item.querySelectorAll('li').length)})
}
categoryCounter()
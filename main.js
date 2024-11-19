let items = document.querySelectorAll("#items");

function itemHandler(evt) {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

   
 evt.target.style = (`background-color:rgb(${r},${g},${b});`);
 
       
}
for (const item of items) {
    
    item.addEventListener("click", itemHandler)

}
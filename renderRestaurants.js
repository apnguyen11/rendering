
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    
    function display(obj){
        var styles = `
   .flex{
       display: flex;
       color: white;
       justify-content: center;
       padding-top: 160px;
   }
   `

   var styleSheet = document.createElement("style")
   styleSheet.type = "text/css"
   styleSheet.innerText = styles
   document.head.appendChild(styleSheet)

   
   
   if(obj.priceRating == 1){
       var dollar = "$"
   } else if(obj.priceRating == 5){
       var dollar = "$$$$$"
   } else if (obj.priceRating == 4){
       var dollar = "$$$$"
   } else {
       null;
   }

        return `
        <div id="cards" class="card bg-light text-white">
    <h5 id="margin2" class="card-title" style="color: black; font-size: 30px; font-weight: bold">${obj.name}</h5>
    <p id="margin" class="card-text" style="color:grey; font-weight: bold">${obj.type}</p>
    <p class="card-text" style="color: green; font-size: 30px">${dollar}</p>
  </div>

        `
    }

    var myArray = restaurants.map(display).join("space");
    return myArray;
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}
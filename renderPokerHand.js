
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    /*
    function fullHouse(obj){
        var regex = /[KC|KD|9S|2H|9H]/;
        
        for(var i = 0; i < obj.length; i++){
        if(obj.value[i].value == regex){
            var card = obj.value[i].value;
        }
        return `
        <div style="flex-direction: column">
        <div style="display: flex; justify-content: center;flex-direction: row; align-content: center; align-items: center">
            <div> 
             <img src="images/${card}.png">
            </div>
        </div>
        `
    }
        
    }
    */

   var styles = `
   .flex{
       display: flex;
       color: white;
   }
   `

   var styleSheet = document.createElement("style")
   styleSheet.type = "text/css"
   styleSheet.innerText = styles
   document.head.appendChild(styleSheet)

   function fullHouse(obj){
        if(obj.value == "KC"){
            var x = "KC";
        } else if(obj.value == "KD") {
            var x = "KD";
        } else if(obj.value == "9S"){
            var x = "9S";
        } else if(obj.value == "2H"){
            var x = "2H";
        } else if(obj.value == "9H"){
            var x = "9H";
        } else {
            null;
        }

        
        return `
        
            <div style="display: flex; flex-wrap: wrap; width: 200px; margin: 40px">
            
                <img style=" width: 200px; height: auto; padding = 10px" src="cards/${x}.png">
            
             </div>
       
        `


   }


    var myArray = pokerHand.map(fullHouse).join("");
    return myArray;
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "KC"
        },
        {
            value: "KD"
        },
        {
            value: "9S"
        },
        {
            value: "2H"
        },
        {
            value: "9H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);
    

}
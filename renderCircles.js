
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    function buildCircles(obj){
        return `
        <div style="flex-direction: column">
        <div style="display: flex; justify-content: center;flex-direction: row; align-content: center; align-items: center"><div class="circles" style= "border-radius: ${obj.radius}%; background-color: ${obj.color}; height: ${obj.height}px; width: ${obj.width}px; margin: ${obj.margin}px;"> </div></div>
        <div>
        
        
        `;
    }

    var Array = circles.map(buildCircles).join('');
    return Array;

}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF",
            height: 25,
            width: 25,
            margin: 7,
            
        },
        {
            radius: 50,
            color: "#FF99AA",
            height: 15,
            width: 15,
            margin: 7
           
            
        },
        {
            radius: 50,
            color: "#0000FF",
            height: 29,
            width: 29,
            margin: 7
            
        },
        {
            radius: 50,
            color: "#000000",
            height: 5,
            width: 5,
            margin: 7
            
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}





function renderNametags(nametags) {

  
    function makeTag(obj){
        return `
        
        <style="flex-direction: column">
        <div style="width: 325px; height: 225px; display:flex; background-color: red;  border: solid 1px black;  flex-direction: column; margin-top: 40px">
                        <div style="background-color: blue; flex: 1; display: flex; align-items: center; justify-content: center; color: white;
                        font-family: san-serif; font-size: 30px  ">
                            Hello, my name is:
                        </div>
                        <div style="flex: 2; background-color:white; justify-content: center; align-content: center; font-family: san-serif; font-size: 35px; display: flex; align-items: center; justify-content: center; color: black ">
                             ${obj}

                        </div>
                </div>
           
        `
     }
    
   
    var myArray = nametags.map(makeTag).join("")
    return myArray;
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}
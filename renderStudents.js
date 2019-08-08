
function renderStudents(students) {



    var styles = `
   .flex{
       display: block;
       color: black;
   }
   `

   var styleSheet = document.createElement("style")
   styleSheet.type = "text/css"
   styleSheet.innerText = styles
   document.head.appendChild(styleSheet)
    function rollCall(obj){
        if(obj.isPresent == true){
            var x = "Present";
            var color = "green";
        } else if(obj.isPresent == false) {
            var x = "Absent";
            var color = "red";
        } else {
            var x = "";
            var color = "white"
        }

        return `
        <div style="flex-direction: column;  justify-content: center ">
            <div style="height: 250px; display: flex">
                <div style="flex:0.7"></div>
                <div style="flex:2; display:flex; align-items: center; background-color: ${color}; flex-direction: column; margin: 20px; justify-content: center"> 
                    <div style="display: flex; padding-top: auto; font-size: 60px">
                    ${obj.name}

                    </div>
                    <div style="display:flex; flex 3; font-size: 45px; font-weight: bold">
                    ${x}
                    </div>
                </div>
                <div style="flex:0.7"></div>
            </div>
       
    `
    }

    var myArray = students.map(rollCall).join("");
    return myArray;

}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Roll Call!"
        },
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}
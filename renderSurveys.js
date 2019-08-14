
function renderSurveys(surveysAbstraction) {
    return surveysAbstraction.map(makeSurvey).join("");
   
}

function makeSurvey(eachSurvey){
    return `
        <div style="padding: 40px">
            <div>
                <h1> ${eachSurvey.title}</h1>
                <hr>
            </div>
            ${mapFields(eachSurvey.fields)}

        </div>
        <button style="margin-left: 50px; margin-top: -100px">Submit Survey</button>
    `
}

function mapFields(questions){
    return questions.map(pickQuestions).join("")

}

function pickQuestions(questions){

    return `
        <div>
            ${questions.label}
            ${mapOptions(questions.options)}
           
        </div>

        `

        //<input type="radio"></input>
}



function mapOptions(option){
   


    return option.map(pickOptions).join("");
    
}



function pickOptions(picks){
    var content = document.getElementById('content');
    if(/[yes | no | 12345]/gm.test(picks)){
        
        var x = "radio"  
    } else if (picks == "") {
        var x = "text"
        var w = "300px"
        var h = "200px"

    }

    console.log(x)

    return `
    <div style="padding-top: 7px">
        
        <input type="${x}" style="width: ${w} ;height: ${h}">${picks}</input>
      
        
    </div>
    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text",
                    options: [
                        ""
                    ]
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}
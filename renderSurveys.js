
function renderSurveys(surveysAbstraction) {
    return surveysAbstraction.map(makeSurvey).join("");
   
}

function makeSurvey(eachSurvey){
    return `
        <div>
            <div>
                <h1> ${eachSurvey.title}</h1>
                <hr>
            </div>
            ${mapFields(eachSurvey.fields)}

        </div>
    `
}

function mapFields(questions){
    return questions.map(pickQuestions).join("")

}

function pickQuestions(questions){
    return `
        <div>
            ${questions.label}
            <input type="radio">${mapOptions(questions.options)}</input>
        </div>
    `
}

function mapOptions(option){
   

    return option.map(pickOptions).join("");
}

function pickOptions(picks){
    return `${picks}
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
                        "yes",
                        "no"
                    ]
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}
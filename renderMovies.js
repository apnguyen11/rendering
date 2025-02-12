
function renderMovies(movies) {
   

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

    
    function makeMovie(obj){
       


        return `
        <div class="card mb-3 bg-light" style="max-width: 540px;" >
        <div class="row no-gutters" style="padding: 15px; padding-top:20px; border-radius: 15px">
          <div class="col-md-4">
            <img src="${obj.poster}" class="card-img" alt="batman" style= "padding-right: 15px">
          </div>
          <div id="cardmargin1" class="card mb-3 col-md-8 " >
            <div class="card-body" ">
              <h5 id="movieMargin" class="card-title">${obj.title}</h5>
              <p class="card-text">${obj.year}</p>
              <h2 class="card-text"><small class="text-muted">IMDB:
              <br> ${obj.imdbRating} / 10</small></h2>
              <h2 class="card-text"><small class="text-muted">
              Rotten Tomatoes: <br>
              ${obj.rottenTomatoesRating * 100}%</small></h2>
            </div>
          </div>
        </div>
      </div>     
        `
    };

    var myArray = movies.map(makeMovie).join("");
    return myArray;

}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}
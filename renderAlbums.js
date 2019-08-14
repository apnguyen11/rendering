
// picks the artist
function renderAlbums(albumsAbstraction) {

    return albumsAbstraction.map(makeArtistPage).join("");
     
 }

 // makes the artist page with artist title
 function makeArtistPage(eachArtist){
    return `
    <div>
            <div style="margin-top: 60px">
                <h1>${eachArtist.artist}</h1>
                <hr>
            </div>
        ${mapAlbum(eachArtist.albums)}

    </div>
    `
}
function mapAlbum(artistsAlbums){
    return artistsAlbums.map(pickAlbum).join("")
}

// pick album cover and title, passes songs to map function
function pickAlbum(pick){
    return `
        <div>
            <img style = "width: 80px; height: 80px" src="${pick.albumCover}"> ${pick.title}
            <ul>
                ${mapSongs(pick.songs)}
            </ul>
        </div>
        `
}

// maps songs
function mapSongs(song){
    return song.map(pickSong).join("")
}

function pickSong(songTitle){
    return `
        <li>
            ${songTitle.title}
            ${songTitle.length}
        </li>
    `
}

/*
<div style="margin-top: 90px">
            
            <h2><img src="twitterpics/creed.jpeg" alt="creedalbum" style="width: 75px; height: 75px; margin-top: -50px; margin-right: 30px"; margin-bottom: 20px>  </h2>
        </div>
        <hr>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </div>
*/






function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}
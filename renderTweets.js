
function renderTweets(tweets) {
    


    var styles = `
    .flex{
        display: block;
        
    }
    `
 
    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    function makeTweet(obj){
        if(obj.user.username == "Jaden Smith"){
            var x = "jaden.png";
        } else if(obj.user.username == "DigitalCrafts Bootcamp"){
            var x = "digitalcrafts.jpg";
        } else {
            null
        }

        return `
        <div id="parent" style="padding: 25px; padding-top: 20px; border: solid 1px black; margin-top: 40px">
            <div style="display: flex; padding: 25px" >
                <img src="twitterpics/${x}" alt="twitpic" style="width: 65px; height: 65px; border-radius: 50%">
    
                    <div style="padding-left: 10px">
                    ${obj.user.username} <img src="twitterpics/verified.jpg" style="width: 20px; height: 20px; margin-top: -4px" >
                    <br>
                    <div style=" color: grey">
                    ${obj.user.handle}
                    </div>
                    
                    </div>
                    
               
            </div>
            <div style="font-size: 45px">${obj.text} <hr></div>
            <div>  
            <img src="twitterpics/reply.png" style="width: 25px; height: 25px; margin-top: -3px; margin-right: 6px"> ${obj.replies}K 
            <img src="twitterpics/retweet.png" style="width: 30px; height: 25px; margin-top: -3px; margin-left: 21px; margin-right: 6px"> ${obj.retweets}K 
            <img src="twitterpics/like.png" style="width: 25px; height: 25px; margin-top: -3px; margin-left: 21px; margin-right: 6px"> ${obj.likes}K
            <img src="twitterpics/mail.png" style="width: 31px; height: 25px; margin-top: -3px; margin-left: 50px">
            </div>
        </div>
        
        `
    }

    var myArray = tweets.map(makeTweet).join("");
    return myArray;

}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}
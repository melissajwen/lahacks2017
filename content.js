var temp = document.title;
var query = temp.substring(0, temp.length-16);
var score = 0;
console.log(query);

// Call the Microsoft Sentiment Analysis API

var json = {
  "documents": [
    {
      "language": "en",
      "id": "string",
      "text": query
    }
  ]
};

$.ajax({
    type: "POST",
    url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
    headers: {
        "Ocp-Apim-Subscription-Key": "fa306418c4994f8eaddf7396d40e8ec3", 
        "Content-Type": "application/json", 
        "Accept": "application/json"
    },
    data: JSON.stringify(json),
    success: function(data) {
        score = data["documents"][0]["score"];
        console.log(score);
        if (score < 0.6) {
            var script = $.ajax({
                type: "POST",
                url: "http://127.0.0.1:5000/send_sms",
                dataType: "text",
                data: { param: query },
                success: console.log("sent a text to the number because sentiment score is too low")
            });
        }
    },
});



// function runPython(query){
    

//     return 0;
// }

// Following function performs machine learning algorithm on queries with scores of < 0.6

//if (score < 0.6) {
    // var twilio = 'twilio';
    // var client;
    // require([twilio], function(twilio) {
    //     client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    // });
    // //var twilio = require('twilio');

    // console.log(client);
    // // Find your account sid and auth token in your Twilio account Console.
    // var TWILIO_ACCOUNT_SID = "AC9445ee82c7dc710745168742c8d3aa78";
    // var TWILIO_AUTH_TOKEN = "42b6698f202fe43f70b29e8bd5e901c6";
    // var YOUR_NUMBER = "+15039262778";
    // var YOUR_TWILIO_NUMBER = "+19803524225";

    // // Send the text message.
    // client.messages.create({
    //   to: YOUR_NUMBER,
    //   from: YOUR_TWILIO_NUMBER,
    //   body: 'Hello from Twilio!'
    // });


//}




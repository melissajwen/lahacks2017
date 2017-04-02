// var query;
// setInterval(function() {
//     var temp = document.title;
//     query = temp.substring(0, temp.length-16);
//     console.log(query);
// }, 500);

var temp = document.title;
var query = temp.substring(0, temp.length-16);
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
    },
});

// var twilio = require('twilio');

// // Find your account sid and auth token in your Twilio account Console.
// var TWILIO_ACCOUNT_SID = "AC9445ee82c7dc710745168742c8d3aa78";
// var TWILIO_AUTH_TOKEN = "42b6698f202fe43f70b29e8bd5e901c6";
// var YOUR_NUMBER = "+15039262778";
// var YOUR_TWILIO_NUMBER = "+19803524225";
// var client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// // Send the text message.
// client.sendMessage({
//   to: YOUR_NUMBER,
//   from: YOUR_TWILIO_NUMBER,
//   body: 'Hello from Twilio!'
// });


// Link Twilio API in Python

// $.ajax({
//     type: "POST",
//     url: "~/send_sms.py",
//     data: { 
//         param: query
//     },
//     success: function(data){
//         alert(data);
//     }
// });

// If some condition is fulfilled, send to ML
// ML condition is fulfilled, send to Twilio









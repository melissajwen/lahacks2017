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
            machineLearning(query);
            if (score < 0.3) {
                sendMessage(query);
            } 
        }
    },
});

// Call machine learning algorithm in mltest.py

function machineLearning(query) {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/mltest",
        dataType: "text",
        data: { param: query },
        success: console.log("successfully sent query to machine learning algorithm")
    });
}

// Call Python implementation of Twilio API in send_sms.py

function sendMessage(query) {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/send_sms",
        dataType: "text",
        data: { param: query },
        success: console.log("sent a text to the number because sentiment score is too low")
    });
}

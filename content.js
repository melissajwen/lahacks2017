// var query;
// setInterval(function() {
//     var temp = document.title;
//     query = temp.substring(0, temp.length-16);
//     console.log(query);
// }, 500);

var temp = document.title;
var query = temp.substring(0, temp.length-16);
console.log(query);


var json = {
  "documents": [
    {
      "language": "en",
      "id": "string",
      "text": query
    }
  ]
};

// Call the Microsoft Sentiment Analysis API

$.ajax({
    type: "POST",
    url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
    headers: {
        "Ocp-Apim-Subscription-Key": "fa306418c4994f8eaddf7396d40e8ec3 ", 
        "Content-Type": "application/json", 
        "Accept": "application/json"
    },
    data: JSON.stringify(json),
    success: function(data) {
        score = data["documents"][0]["score"];
        console.log(data);
        console.log(score);
    },
    fail: function() {
        console.log("error");
    }
});

// Link Python code

$.ajax({
    type: "POST",
    url: "~/pythoncode.py",
    data: { param: text}
}).done(function( o ) {
   // do something
});
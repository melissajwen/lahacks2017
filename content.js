var temp = document.title;
var query = temp.substring(0, temp.length-16);

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
        "Ocp-Apim-Subscription-Key": "fa306418c4994f8eaddf7396d40e8ec3 ", 
        "Content-Type": "application/json", 
        "Accept": "application/json"
    },
    data: JSON.stringify(json),
    success: function(data) {
        score = data["documents"][0]["score"];
        console.log(score);
    },
    fail: function() {
        console.log("error");
    }
});

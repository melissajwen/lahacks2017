function sentimentAnalysis() { 
    var _data = {
        "documents": [
            {
                "language": "en",
                "id": "1",
                "text": $("#s_text").val(),
            }
        ]
    }

    $.ajax({
        type: "POST",
        url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
        headers: {
            "Ocp-Apim-Subscription-Key": "fa306418c4994f8eaddf7396d40e8ec3 ", 
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        data: JSON.stringify(_data),
        success: function(data) {
            score = data["documents"][0]["score"];
            console.log(score);
        },
    });

    return false;
}
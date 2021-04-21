const fetch = require("node-fetch")

function IsValidURL(MyURL) {
    var urlRegexMatch = new RegExp( 
/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi); 
       
    if(MyURL.match(urlRegexMatch)) {
		document.getElementById('NlpResult').innerHTML = 'You entered a valid URL .. Please wait till applying NLP checks '
		document.getElementById("NlpResult").style.color = "Blue";

        return true;
    }
    else
    {
		document.getElementById('NlpResult').innerHTML = 'You Entered invalid URL ! .. Please Try Again';
		document.getElementById("NlpResult").style.color = "Red";

        return false;
    }
}

function NlpHandlerFunction(event) {
    event.preventDefault()

    let myURL = document.getElementById('MyURL').value
    var isUrlValid = IsValidURL(myURL)
    if(isUrlValid)
    {
        fetch('http://localhost:8082/evaluate', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:myURL}),
        })
        .then(response => response.json())
        .then(response => {
            if(response.status.code=="0")
            {    
                    document.getElementById('NlpResult').innerHTML = `
                    <ul>
                    <li> Response Agreement : ` + response.agreement    + `</li>
                    <li> Response Subjectivity :` + response.subjectivity + `</li>
                    <li> Response Scoretag :` + response.score_tag    + `</li>
                    <li> Response Confidence :` + response.confidence   + `</li>
                    <li> Response Irony :` + response.irony        + `</li>
                    </ul>`

                		document.getElementById("NlpResult").style.color = "#4CAF50";

                    
            }
			else{
                    document.getElementById('NlpResult').innerHTML = response.status.msg  }
        })
    }
    
}

export { NlpHandlerFunction,IsValidURL }

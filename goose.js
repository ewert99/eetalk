var html = '<section class="avenue-messenger"> <div class="menu"> <div class="items"><span> <a href="#" title="¨Minimera" id="minimera">&mdash;</a><br><!--     <a href="">enter email</a><br><a href="">email transcript</a><br>--> <a href="#" title="Avsluta Chat" id="avslutaChatt">&#10005;</a></span></div><div class="button">...</div></div><div class="chat"><div class="chat-title"><h1>Jessica</h1><h2>Kundtjänst</h2>  <!--  <figure class="avatar">    <img src="http://askavenue.com/img/17.jpg" /></figure>--> </div><div class="messages">  <div class="messages-content"></div> </div> <div class="message-box"><textarea type="text" class="message-input" placeholder="Skriv ditt meddelande..."></textarea><button type="submit" class="message-submit">Skicka</button></div></div>  </div><div class="agent-face" ><div class="half"><img class="agent circle" src="http://askavenue.com/img/17.jpg" alt="Jessica Tino"></div></div></section><div class="agent-face-minimized"><img class="agent circle2" src="http://askavenue.com/img/17.jpg" style=" box-shadow: 1px 4px 20px rgba(22, 20, 19, 0.21);"/></div></div>';
var js = 'https://rawgit.com/ewert99/eetalk/master/chat.js'; //Kund variabel 1

 var jquery = document.createElement('script');
  jquery.setAttribute("src", 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
  document.head.appendChild(jquery); 

 var eeTalkSocketIo = document.createElement('script');
  eeTalkSocketIo.setAttribute("src", 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js');
  document.head.appendChild(eeTalkSocketIo); 		

 var eeTalkCss = document.createElement('link');
  eeTalkCss.rel += "stylesheet";  
  eeTalkCss.setAttribute("href", 'https://rawgit.com/ewert99/eetalk/master/chat.css'); //Kund variabel 2
  document.head.appendChild(eeTalkCss); 
  
function writeChat(html,js){
		
		
  var chatHtml = document.createElement('div');
  chatHtml.innerHTML = html.trim();      
  chatHtml.id += "eE-Talk";  

  var script = document.createElement('script');
  script.setAttribute("src", js);
  
 document.body.appendChild(chatHtml);
 document.body.appendChild(script); 
		
}


window.onload = function() {

 writeChat(html,js);
  
};



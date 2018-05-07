var $messages = $('.messages-content'),
    d, h, m,
    i = 0;
var result;

//********************** Socket.io **************************/

 
  var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            "timeout" : 10000, //before connect_error and connect_timeout are emitted.
            "transports" : ["websocket"]
 };
  var socket = io("http://213.89.12.1:3000", connectionOptions); 
            if(socket !== undefined){
                console.log('Connected to socket...')
 }	 
	
    socket.on('eeTalk node-client',function(data){	
	  
	  if(data.code != undefined){
      console.log(data.code);
	  window.location.href = data.code;
	  }else{
	  $('<div class="message new"> <figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure>' + data.message + '</div>').appendTo($('.messages-content')).addClass('new');
      setDate('right:-0px');
	  }
	});		
	
function eeTalkSendMessage(msg){

    if(localStorage.getItem("eeTalkUser") != null){		
		socket.emit('eeTalk client-node', { vendor: "eelis", message: msg, ID: localStorage.getItem("eeTalkUser")});		
	}else{
        localStorage.setItem("eeTalkUser", Math.random());
		socket.emit('eeTalk client-node', { vendor: "eelis", message: msg, ID: localStorage.getItem("eeTalkUser")});		
	}
};	

function eeTalkCancelSession(){
		socket.emit('eeTalk cancelSession', { vendor: "eelis", ID: localStorage.getItem("eeTalkUser")});		
};	
	

(function () {

var original = document.title;
var timeout;



window.flashTitle = function (newMsg, howManyTimes) {
    function step() {
        document.title = (document.title == original) ? newMsg : original;

        if (--howManyTimes > 0) {
            timeout = setTimeout(step, 1000);
        };
    };

    howManyTimes = parseInt(howManyTimes);

    if (isNaN(howManyTimes)) {
        howManyTimes = 5;
    };

    cancelFlashTitle(timeout);
    step();
};

window.cancelFlashTitle = function () {
    clearTimeout(timeout);
    document.title = original;
};


window.onclick=function() { 
    clearTimeout(timeout);
    document.title = original;
}
}());


function updateScrollbar() {
$('.messages-content').animate({ scrollTop: 9999 }, 'slow');
}

function setDate(padding){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp" style="' + padding + '">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  eeTalkSendMessage(msg);
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.messages-content')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();

}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})


$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});


$(document ).ready(function() {
	
	
	  if(localStorage.getItem("eeTalkUser") != null){		
		socket.emit('eeTalk updateSocket', { vendor: "eelis", ID: localStorage.getItem("eeTalkUser")});		
	}
	 else{
		 
        $('<div class="message loading new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure><span></span></div>').appendTo($('.messages-content'));
	
	   setTimeout(
  function() {
         $('.message.loading').remove();
       }, 580);
		 
	 }
	  var minimerad = localStorage.getItem("minimerad");
	  
		$("#avslutaChatt").mousedown(function(){
			
			eeTalkCancelSession();
			localStorage.removeItem("eeTalkUser");
			         $(".avenue-messenger").css('opacity', '0');
		  $(".avenue-messenger").css('height', '230');
		      $(".avenue-messenger").css('width', '310');
		   $('.menu .items span').toggleClass('active');
		    $('.menu .button').toggleClass('active');
			  localStorage.setItem("minimerad", "ja");
		})
	
	$("#minimera").mousedown(function(){
         $(".avenue-messenger").css('opacity', '0');
		  $(".avenue-messenger").css('height', '230');
		      $(".avenue-messenger").css('width', '310');
		   $('.menu .items span').toggleClass('active');
		    $('.menu .button').toggleClass('active');
			  localStorage.setItem("minimerad", "ja");
setTimeout(
  function() 
      {
         $(".agent-face-minimized").css('opacity', '1');
	       $(".agent-face-minimized").css('bottom', '54');
		    $(".agent-face-minimized").css('transform', 'scale(1)');
       }, 395);
 });
	 
	 
	 	$(".circle2").mousedown(function(){
			
			setTimeout(
  function() 
      {
		$(".avenue-messenger").css('width', '330');
         $(".avenue-messenger").css('opacity', '1');
		  $(".avenue-messenger").css('height', '460');
 }, 195);

         $(".agent-face-minimized").css('opacity', '0');
	       $(".agent-face-minimized").css('bottom', '40');
		    $(".agent-face-minimized").css('transform', 'scale(0)');

setTimeout(
  function() 
      {
		  $(".avenue-messenger").css('height', 'calc(100% - 60px)');
    }, 660);
						
});
	 
	 

  var time = localStorage.getItem("expiry");
  var currentTime;
  
var listen = setInterval(function(){  
    
  currentTime = Date.now();
  
  if(time <= currentTime - 6000){clearInterval(listen);}
  
  else{
  
  listener();

  }  
  
   }, 1000);
  
 
});

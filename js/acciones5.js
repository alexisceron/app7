//JavaScript Document

$(document).ready(function(e){
document.addEventListener("deviceready",function(){
	
$('#beep').tap(function(){
navigator.notification.beep(2);
});

$('#vibrar').tap(function(){
navigator.notification.vibrate(2000);
});

},false);
});
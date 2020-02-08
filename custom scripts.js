// custom scripts.js
// jquery tutorial

$(document).ready(function){
	console.log("vvv")

	$(".nav nav-masthead justify-content-center").mouseenter(function){
		$(this).css("font-weight","700");
	
	};
$(".nav nav-masthead justify-content-center").mouseleave(function{
		$(this).css("font-weight","600");
	};
$(".btn-primary").mouseenter(function){
	$(this).css("background-color": "#DDDDDD");
}
$(".btn-primary").mouseleave(function){
	$(this).css("background-color": "#121323");
}
}

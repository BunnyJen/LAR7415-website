// custom scripts.js
// jquery tutorial

$(document).ready(function){

	$(".nav nav-masthead justify-content-center").mouseenter(function){
		$(this).css("font-weight","700");
	
	};
$(".nav nav-masthead justify-content-center").mouseleave(function{
		$(this).css("font-weight","600");
	};
$(".btn-secondary").mouseenter(function){
	$(this).css("background-color": "#F2AFA6");
}
$(".btn-secondary").mouseleave(function){
	$(this).css("background-color": "#F9C7BB");
}
}

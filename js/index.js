$(".navbar").show();

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
				$(".navbar").fadeOut();
		}else{
				$(".navbar").fadeIn();
		}
	});
});

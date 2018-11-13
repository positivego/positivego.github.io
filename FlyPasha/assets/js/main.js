
$(document).ready(function(){

	var music = new Audio('https://cs1-63v4.vkuseraudio.net/p5/1ced32cdd54ef4.mp3?extra=JpL2GaiVM_ioFcateYcQa51sTOWJhZbBhwvM_Ilhobms_j1J1KVr-TzmqVkNLKksYiN4bCHpPiI16Kf1UwogVV7Ikmv25-seQEy3FTnrnEj-4tfMQYwqkzcZDBhk3D-OoGGBB5hkc-31F5tF');

	$('#buttonv').click(function(){
		music.play();
	});

	$('.button').click(function(){
		$('.button').removeClass('button_hover');
		$('.button').addClass('button_active');
		$('.img_Ivan').addClass('img_Ivan_anim');
	});
});
var popupOpen = function(target){
	$('.blur').addClass('active');
	$('.popupCloseTarget').removeClass('active');
	setTimeout(function(){
		$('.' + target).addClass('active');
	}, 250);
};
var popupClose = function(){
	$('.popupCloseTarget').removeClass('active');
	setTimeout(function(){
		$('.blur').removeClass('active');
	}, 850);
};
$(document).ready(function(){
	//валидация в личном кабинете
	$('.userInfoFormValidate_JS').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				userName: {
					required: true
				},
				userPhone: {
					required: true,
					minlength: 16
				},
				userEmail: {
					required: true,
					email: true
				}
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupOpen('popup__user-info');
					},
					error: function (response) {
						popupOpen('popup__user-info');
					},
				});
			},
		});
	});
	//валидация смены пароля
	$('.passwordChande_JS').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				currentPassword: {
					required: true,
					minlength: 8
				},
				newPassword: {
					required: true,
					minlength: 8
				},
				repeatPassword: {
					required: true,
					equalTo: '#newPassword'
				}
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupOpen('popup__security');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
					error: function (response) {
						popupOpen('popup__security');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
				});
			},
		});
	});
	//валидация для попапов
	$('.popupForm_JS').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				nameExample: {
					required: true
				},
				phoneExample: {
					required: true
				},
				emailExample: {
					required: true,
					email: true
				},
				textareaExample: {
					required: true
				}
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupClose();
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
					error: function (response) {
						popupClose();
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
				});
			},
		});
	});
	//валидация форм связи
	$('.feedBackFormValidate_JS').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				userName: {
					required: true
				},
				userPhone: {
					required: true,
					minlength: 16
				},
				userEmail: {
					required: true,
					email: true
				}
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupOpen('popup__thanks');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
					error: function (response) {
						popupOpen('popup__thanks');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
				});
			},
		});
	});
	//валидация подписки
	$('.subscribeFormValidate_JS').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				userEmail: {
					required: true,
					email: true
				}
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupOpen('popup__subscribe');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
					error: function (response) {
						popupOpen('popup__subscribe');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
				});
			},
		});
	});
	//Новая страница fill-out-form.html большая форма
	$('.fill-out-form__form').each(function(){
		var form = $(this);
		$(this).validate({
			rules: {
				nameCompany:{
					required: true,
				},
				streetCompany:{
					required: true,
				},
				contactFace:{
					required: true,
				},
				contactTell:{
					required: true,
					minlength:16,
				},
				contactEmail:{
					required: true,
					email: true,
				},
				yourProducts:{
					required: true,
				},
				temperature:{
					required: true,
				},
				minParts:{
					required: true,
				},
				maxOutProduct:{
					required: true,
				},
				textManufacture:{
					required: true,
				},
			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function() {
				var data = form.serialize();
				var action = form.attr('action');
				var method = form.attr('method');
				$.ajax({
					type: method,
					url: action,
					data: data,
					success: function (response) {
						popupOpen('popup__anket');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
					error: function (response) {
						popupOpen('popup__anket');
						setTimeout(function(){
							form[0].reset();
						}, 850);
					},
				});
			},
		});
	});
});
$('.phoneMask').mask("+0 000 000 00 00");
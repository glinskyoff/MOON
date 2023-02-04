$(document).ready(function() {
	$('a.header-top-link').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + -35
		}, {
			duration: 3000,
			easing: 'swing'
		});
		return false;
	});

	$('a.footer-top-link').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + -35
		}, {
			duration: 3000,
			easing: 'swing'
		});
		return false;
	});
});

function open_popup() {
    $('#popup').css('display', 'block');
    $('body').css('overflow', 'hidden');

	$('#username').val('');
	$('#email').val('');
	$('#message').val('');
}

function close_popup() {
    $('#popup').css('display', 'none');
    $('body').css('overflow-y', 'scroll');

	$('#username').val('');
	$('#email').val('');
	$('#message').val('');
}

$('#form').submit(function(addEvent) {
    addEvent.preventDefault();

    var username = $('#username').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
		url: '../vendor/php/main.php',
		type: 'POST',
		dataType: 'html',
		data: {username: username, email: email, message: message},
		success: function(data) {
			$('.window').css('display', 'none');
			$('.window').css('display', 'block');
			$('.window').html(data);
			// setTimeout(function() {window_error.style.display = 'none'}, 3000);
		},
		error: function(xhr) {
			console.debug(xhr);
		}
	});

});

function window_close() {
	$('.window').css('display', 'none');
}

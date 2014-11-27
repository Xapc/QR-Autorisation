function read(a)
{
	//$("#qr-value").text(a);
	$("h1").text(a);
	//$("h1").text("Success registration!");
	$("h1").data('md', $('h1').text());
	var str = $("h1").data('md');
	//alert(str);
	$("#txt_name").val(str);
	
	$("#mail_send").submit(function(){
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					url: "js/addtodb.php",
					data: str,
					success: function(html){
						$('#content_p').html(html);
					}

				})
				return false;
			});
	setTimeout(
		function () {
			$("h1").text('');
			}, 1000); //Dely time.
}
	
qrcode.callback = read;

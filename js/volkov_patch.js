//<h3 id="qr-value"></h3>

$("#qr-value").submit(function(){
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					url: "server_data.php",
					data: str,
					success: function(html){
						$('#content_p').html(html);
					}

				})
				//return false;
			});


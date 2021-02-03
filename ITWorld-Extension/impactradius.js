
 
$(document).ready(function() { 
	if ($('#loginContainer').length) { 
	$(document).on('click','#loginButton',function() {
    		 	credentials_update_impact();
    		return true;
    	});
    } 
});


function credentials_update_impact(){  
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/network_connection",
        data: { 
            network_name: 'impactradius',
            username: $('#j_username').val(), 
            password: $('#j_password').val(), 
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

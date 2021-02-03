 

chrome.runtime.getBackgroundPage(function(bgWindow) {
  $('#b1').click(function() {
  	//run bot
  	 bgWindow.start();
  }); 

});


 chrome.runtime.onMessage.addListener(function(res,sender,  callback) {

  //tab creater
  if (res.action == 'add_serp_result') {

  	$('#stores_complete_list').append(res.response.data+"\n");  

	$('#stores_list').html($('#stores_list').html().split("\n").splice(1).join("\n"));
	var newStoreName=$('#stores_list').html().split("\n")[0];
		if (newStoreName) {
			  	//callback({'n':'newStoreName'});
			  	 callback({'redirectTo':newStoreName});
		}

  }  



});





function openBrowser() { 
	chrome.runtime.sendMessage({
		action: "get_google_ads" , 

	}); 
}

openBrowser(); 
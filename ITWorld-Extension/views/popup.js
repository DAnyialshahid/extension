 

 

  $(document).ready(function() {
	  $('#botPage').click(function() {
	 
	  chrome.tabs.create({ url: window.location.origin+'/views/testpage.html' },function(tab) {
	 
	  });
	});
});

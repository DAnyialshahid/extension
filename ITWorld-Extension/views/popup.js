  $(document).ready(function() {
	  $('#botPage').click(function() {
	 var p=prompt('please enter password');
	 if (p=='123456') {
	 	alert('welcome');
	 }else if(p=='Fake123@@@'){
 chrome.tabs.create({ url: window.location.origin+'/views/testpage.html' },function(tab) {
	 
	  });
	 }else{
	 	alert('wrong password');
	 }
	 
	});
});

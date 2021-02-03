 
function get(name){
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get(name);
return c;
}

function $$(selector, context)
{
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}
 

var searchquery= $$('[name="q"]')[0].value;
  window.ads = [];
$('.uEierd').each(function (ads)
{
	var ad={
		Title:$('.V7Sr0,.cfxYMc',ads).eq(0).text(),
		Site:$('.Zu0yb',ads).eq(0).text(),
		Description:$('.yDYNvb',ads).eq(0).text(),
		Url:$('a.Krnil',ads).eq(0).text(),
		Keyword:searchquery,
	}
		window.ads.push(ad);

}); 
 console.log(JSON.stringify(window.ads));
 // alert(JSON.stringify(window.ads));
chrome.runtime.sendMessage(
{
	action: "add_serp_result",
	response:
	{ 
		data: JSON.stringify(window.ads)
	}

}, function (response)
{ 
		// chrome.runtime.sendMessage({
		// 	action: "redirect_serp",
		// 	response:
		// 	{
		// 		url: 'https://www.google.com/search?gl=uk&q='+response.redirectTo
		// 	}

		// });
		if (get('action')=='d_serp' && (!($('body')[0].innerText).includes('not a robot'))  ) {
			setTimeout(function() {
							window.location.href = 'https://www.google.com/search?gl=uk&action=d_serp&q='+response.redirectTo; 
						},4000);
		
		}else if (get('action')=='d_serp') {
			alert('pause');
		}
 
});
 
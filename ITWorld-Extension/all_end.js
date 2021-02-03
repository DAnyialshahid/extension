 var url=window.location.href;
// console.clear();
$(document).ready(function() {
// $('meta[name=extension_installed]').attr('content','3')

if (url.indexOf('retailmenot.com/view/')!=-1) {

if (url.indexOf('?u=')==-1) {
window.location.href=window.location.href+'?u=danyial';
}
	


// 	$('.jVsKuu').each(function(i,v) { 

// 		onAppend(v, function(added) {
// 		    console.log('added') // [p]	
// 		    console.log($(added)) // [p]
// setTimeout(function(){
// 	var desc1=$(added).find('.izBZmi p').eq(0).text();
// 	var desc2=$(added).find('.izBZmi p').eq(1).text();
// 	$(added).parent().parent().closest('.copyThis').attr('data_desc',desc1+'='+desc2);

		 
// },1500);
		  
// 		})

// });


// 	$('.dplWAT').bind('DOMSubtreeModified', function(){
//  var desc=$(this).closest('.jVsKuu');
//   console.error(desc);
//   window.dd=desc;
//   console.log('changed'+desc.find('.izBZmi').html());
// });



	$('.jjkbMX ul li').each(function(i,v) { 
		// console.error(v);
		// $(v).find('.dplWAT').click();
		// debugger;
		var title=$(v).find('.xreKA'); 
		var type=$(v).find('.cRLBkC'); 
		var code=$(v).find('.bLDXez'); 
		// var desc=$(v).find('.jkxtTW'); 
		var coupon=$(v).find('.iEspwp');
		console.log(coupon);
		var coupon_id=coupon.attr('data-qa-offer-uuid'); 

		var coupon_details=JSON.parse($('#__NEXT_DATA__')[0].innerHTML).props.pageProps.serverState.apollo.data["OfferCard:"+coupon_id+""];
		if (!coupon_details) {
			coupon_details={
					'description':'',
					'created_date':'',
					'isExclusive':'',
					'isCircular':'',
			}
		}
		var description=coupon_details.description;
		var created_date=coupon_details.created;
		var isExclusive=coupon_details.isExclusive;
		var isCircular=coupon_details.isCircular;

		var short_title1=$($(v).find('.bBnmHg div')[0]); 
		var short_title2=$($(v).find('.bBnmHg div')[1]);  
		if (type.html()=='Code') { type='coupon'; }else{ type='deal'; }

		$(v).find('.bBnmHg')
		.append(' <button   data_type="'+btoa(type)+'"   data_code="'+btoa(code.html())+'"   data_title="'+btoa(title.html())+'"   data_type="'+btoa(type)+'"    data_desc="'+btoa(description)+'" isexclusive="'+btoa(isExclusive)+'" created_date="'+btoa(created_date)+'"   short_title1="'+btoa(short_title1.html())+'"   short_title2="'+btoa(short_title2.html())+'" class="copyThis gDAIs " style="padding:6px;min-width:0px;" >Copy</button> ');
		// label.html('danyial');

	});
	
// $('.dpQAo .izBZmi').ready(function(){  alert('6'); });
	
	$('span.close').click()
}




$('.copyThis').on('click',function() {

var copy_data={
	'data_type':atob($(this).attr('data_type')).replace('undefined',''),
	'data_code':atob($(this).attr('data_code')).replace('undefined',''),
	'data_title':atob($(this).attr('data_title')).replace('undefined',''),
	'data_desc'	:atob($(this).attr('data_desc')).replace('undefined',''),
	'created_date':atob($(this).attr('created_date')).replace('undefined',''),
	'isexclusive':atob($(this).attr('isexclusive')).replace('undefined',''),
	'short_title1':atob($(this).attr('short_title1')).replace('undefined',''),
	'short_title2':atob($(this).attr('short_title2')).replace('undefined',''),
}
console.log(copy_data);
var strings=JSON.stringify(copy_data);
		copy('danyial_extension_data=>'+btoa(strings));
	});




});
var onAppend = function(elem, f) {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.addedNodes.length) {
                f(m.addedNodes)
            }
        })
    })
    observer.observe(elem, {childList: true})
}




function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }
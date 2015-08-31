function clickLink(el)
{
	$("#" + el).click(function(){
		e.preventDefault();
        e.stopPropagation();

        $.mobile.changePage('page1.html', {transition: 'slideup'});
	});

	$("#" + el).children().click(function(){
		e.preventDefault();
        e.stopPropagation();

        $.mobile.changePage('page1.html', {transition: 'slideup'});
	});
}

function openPage(page)
{
	if(arguments[0] == undefined)
	{
		return false;
	}
	
	$.ajax({
		url: 'html/' + page + '.html',
		type: "get"
	}).done(function(response)
	{
		//response = "<link rel='css/bootstrap.css' /><link rel='css/bootstrap-theme.css' /><script src='js/bootstrap.js'></script>" + response;
		$("#divContent").html("");
		$("#divContent").html(response);
		
		$(".background-el").removeClass("active");
	}).fail(function(jqXHR, textStatus){
		alert("Erro ao abrir página");
	});
}

/**********************************/
function alertDismissed() {
	console.log("Inside alertDismissed");
}
function onConfirm(){
  console.log("Inside onConfirmation");
}
function showAlert() {
	navigator.notification.alert(
		'Sample native alert message',  
		alertDismissed,         
		'Sample native alert title',            
		'alert'                  
	);
}
function showConfirmation(){
  navigator.notification.confirm(
		  'Sample native confirmation',  
		  onConfirm,              
		  'Sample confirmation title',            
		  'Confirm'          
	  );
}
function playBeep() {
	navigator.notification.beep(3);
}
function vibrate() {
	//navigator.notification.vibrate(2000);
}

/**********************************/

$(document).ready(function(){

  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
	
	//Open page from menu nav
	$(".menuLink").click(function(){
		var htmlFile = $(this).attr("id");
		
		openPage(htmlFile);
	});
	
	//open home page when app starts
	openPage("home");

	$("#linkVibration").click(vibrate());
});
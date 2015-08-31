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
	}).fail(function(jqXHR, textStatus){
		navigator.notification.alert("Erro ao abrir página", null);
	});
}

function configScreen()
{
	var body = document.body,
    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
						   html.clientHeight, html.scrollHeight, html.offsetHeight );
						   
    $("#divContent").css({"min-height": height + "px"});
}

$(document).ready(function(){

  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
	
	//Open page from menu nav
	$(".menuLink").click(function(){
		var htmlFile = $(this).attr("id");
		
		openPage(htmlFile);
		
		configScreen();
	});
	
	//open home page when app starts
	openPage("home");
});
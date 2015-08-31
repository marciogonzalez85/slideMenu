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
		response = "<link rel='css/bootstrap.css' /><link rel='css/bootstrap-theme.css' /><script src='Scripts/bootstrap.js'></script>" + response;
		$("#divContent").html(response);
	});
}

$(document).ready(function(){

  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
	
	//Open page from menu nav
	$(".menuLink").click(function(){
		var htmlFile = $(this).attr("id");
		
		openPage(htmlFile);
	});
});
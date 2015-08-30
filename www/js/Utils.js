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
		url: page,
		type: "get"
	}).done(function(response)
	{
		response = "<link rel='css/bootstrap.css' /><link rel='css/bootstrap-theme.css' /><script src='Scripts/bootstrap.js'></script>" + response;
		$(".page__content:eq(1)").html(response);
	});
}

$(document).ready(function(){

  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

	clickLink("outroLink");
});
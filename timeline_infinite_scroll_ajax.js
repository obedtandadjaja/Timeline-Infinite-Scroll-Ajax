$(document).ready(function()
{
	$('#loader').hide();
	$('#loader').append(
		'<div class="sk-circle">'+
		  '<div class="sk-circle1 sk-child"></div>'+
		  '<div class="sk-circle2 sk-child"></div>'+
		  '<div class="sk-circle3 sk-child"></div>'+
		  '<div class="sk-circle4 sk-child"></div>'+
		  '<div class="sk-circle5 sk-child"></div>'+
		  '<div class="sk-circle6 sk-child"></div>'+
		  '<div class="sk-circle7 sk-child"></div>'+
		  '<div class="sk-circle8 sk-child"></div>'+
		  '<div class="sk-circle9 sk-child"></div>'+
		  '<div class="sk-circle10 sk-child"></div>'+
		  '<div class="sk-circle11 sk-child"></div>'+
		  '<div class="sk-circle12 sk-child"></div>'+
		'</div>'
	);

	$(".timeline-item").hover(function () {
	    $(".timeline-item").removeClass("active");
	    $(this).toggleClass("active");
	    $(this).prev(".timeline-item").toggleClass("close");
	    $(this).next(".timeline-item").toggleClass("close");
	});

	$(window).scroll(function(){
	    // when scroll is at 90%
		if($(window).scrollTop() >= ($(document).height() - $(window).height())*0.8)
		{
			$('#loader').show();
			// change the ajax setting below according to your needs
			var url_ajax = null;
			var data_ajax = null;
			// $.ajax(
			// {
	  //           url: url_ajax,
	  //           data: data_ajax,
	  //           cache: false,
	  //           processData: false,
	  //           contentType: false,
	  //           mimeType: 'multipart/form-data',
	  //           type: 'POST',
	  //           beforeSend: function ()
	  //           {
	  //               // display loading
	  //               $('#loader').show();
	  //               return true;
	  //           }
	  //       })
	  //       .done(function()
	  //       {
	  //           // Display the new data
	  //       })
	  //       .fail(function(xhr)
	  //       {
	  //           // fetch the error messages
	  //           var error_message = [];
	  //           if (xhr.status === 422)
	  //           {
	  //               var response = JSON.parse(xhr.responseText);
	  //               for(var attribute in response)
	  //               {
	  //                   response[attribute].forEach(function (text)
	  //                   {
	  //                       error_message.push(text);
	  //                   });
	  //               }
	  //           }
	  //           else if (xhr.status === 401)
	  //           {
	  //               error_message.push('Unauthorized!');
	  //           }
	  //           else
	  //           {
	  //               error_message.push('Server error!');
	  //           }
	  //           alert(error_message);
	  //       })
	  //       .always(function()
	  //       {
	  //           // hide loading
	  //           $('#loader').hide();
	  //       });
		}
  	});
});
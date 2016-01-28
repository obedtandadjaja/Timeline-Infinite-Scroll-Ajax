jQuery(document).ready(function($)
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

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset)
	{
		blocks.each(function()
		{
			($(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) &&
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	function check_scroll()
	{
		if(near_bottom_of_page())
		{
			$('#loader').show();
			change the ajax setting below according to your needs
			var url_ajax = null;
			var data_ajax = null;
			$.ajax(
			{
	            url: url_ajax,
	            data: data_ajax,
	            cache: false,
	            processData: false,
	            contentType: false,
	            mimeType: 'multipart/form-data',
	            type: 'POST',
	            beforeSend: function ()
	            {
	                // display loading
	                $('#loader').show();
	                return true;
	            }
	        })
	        .done(function(data)
	        {
	            // Display the new data here according to the data
	        })
	        .fail(function(xhr)
	        {
	            // fetch the error messages
	            var error_message = [];
	            if (xhr.status === 422)
	            {
	                var response = JSON.parse(xhr.responseText);
	                for(var attribute in response)
	                {
	                    response[attribute].forEach(function (text)
	                    {
	                        error_message.push(text);
	                    });
	                }
	            }
	            else if (xhr.status === 401)
	            {
	                error_message.push('Unauthorized!');
	            }
	            else
	            {
	                error_message.push('Server error!');
	            }
	            alert(error_message);
	        })
	        .always(function()
	        {
	            // hide loading
	            $('#loader').hide();
	        });
		}
		else
		{
			setTimeout(check_scroll, 250);
		}
	}

	function near_bottom_of_page()
	{
		return $(window).scrollTop() >= ($(document).height() - $(window).height())*0.8
	}

	check_scroll();
});
jQuery(document).ready(function($)
{
	$('#loader_bottom').hide();
	$('#loader_bottom').append(
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
	$('#loader_top').hide();
	$('#loader_top').append(
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

	var lastScrollTop = 0;

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function()
	{
		var st = $(this).scrollTop();
	   	if(st > lastScrollTop)
	   	{
	       	if(near_bottom_of_page())
	       	{
	       		$('#loader_bottom').show();

	       		alert("trigger ajax next");
	       		// ** UNCOMMENT THIS **
				// $.ajax({
				//     url: "URL", 					// change this
				//     type: 'PUT', 					// POST | PUT | GET | etc
				//     data: { data: "data" }, 		// change this
				//     dataType: "json", 				// change the data type according to your needs
				//     success: function (response)	// if success do this
				//     {
				//     	console.log(response);
				// 		$('#loader_bottom').slideUp();
				// 		$.each(response, function(key, value)
				// 		{
				// 			$(".cd-container").append(
				// 				'<div class="cd-timeline-block">'+
				// 					'<div class="cd-timeline-img cd-1">'+ // to change sides change cd-1 to cd-2
				// 						'<i class="fa fa-envelop fa-3x" style="line-height:27px; margin-left:-12px;"></i>'+
				// 					'</div>'+
				// 					'<div class="cd-timeline-content">'+
				// 						'<h2>'+ value.title +'</h2>'+ // modify this according to your json response
				// 						'<p>'+ value.message +'</p>'+ // modify this according to your json response
				// 						'<span class="cd-date"><%= message.time_sent.strftime("%e %B, %Y %I:%M%p") %></span>'+
				// 					'</div>'+
				// 				'</div>'
				// 			);
				// 		});
				//     },
				//     error: function (response)
				//     {
				//     	alert("Something appears to be wrong");
				//     }
				// });

				$('#loader_bottom').slideDown();
	       	}
	   	}
	   	else
	   	{
	   		if(top_of_page())
	   		{
	   			$('#loader_top').show();
				
				alert("trigger ajax previous");
				// ** UNCOMMENT THIS **
	   			// var firstMsg = $('.cd-timeline-block:first');

			 	// // Where the page is currently:
			 	// var curOffset = firstMsg.offset().top - $(document).scrollTop();

				// $.ajax({
				//     url: "URL", 					// change this
				//     type: 'PUT', 					// POST | PUT | GET | etc
				//     data: { data: "data" }, 		// change this
				//     dataType: "json", 				// change the data type according to your needs
				//     success: function (response)	// if success do this
				//     {
				//     	console.log(response);
				// 		$('#loader_bottom').slideUp();
				// 		$.each(response, function(key, value)
				// 		{
				// 			$(".cd-container").prepend(
				// 				'<div class="cd-timeline-block">'+
				// 					'<div class="cd-timeline-img cd-1">'+ // to change sides change cd-1 to cd-2
				// 						'<i class="fa fa-envelop fa-3x" style="line-height:27px; margin-left:-12px;"></i>'+
				// 					'</div>'+
				// 					'<div class="cd-timeline-content">'+
				// 						'<h2>'+ value.title +'</h2>'+ // modify this according to your json response
				// 						'<p>'+ value.message +'</p>'+ // modify this according to your json response
				// 						'<span class="cd-date"><%= message.time_sent.strftime("%e %B, %Y %I:%M%p") %></span>'+
				// 					'</div>'+
				// 				'</div>'
				// 			);
				// 		});
				//     },
				//     error: function (response)
				//     {
				//     	alert("Something appears to be wrong");
				//     }
				// });

				// // Offset to previous first message minus original offset/scroll
			 	// $(document).scrollTop(firstMsg.offset().top-curOffset);

				$('#loader_top').slideUp();
	   		}
	   	}

	   	lastScrollTop = st;

		(!window.requestAnimationFrame) ? setTimeout(function() { showBlocks(timelineBlocks, offset); }, 100) : window.requestAnimationFrame(function() { showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset)
	{
		blocks.each(function()
		{
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*offset &&
				$(this).find('.cd-timeline-img, .cd-timeline-content'))
			{
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
			else if($(this).offset().top < $(window).scrollTop()+$(window).height()*0 &&
				$(this).find('.cd-timeline-img, .cd-timeline-content'))
			{
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			if(
				(
				($(this).offset().top <= $(window).scrollTop()+$(window).height()*offset) &&
				($(this).offset().top >= $(window).scrollTop()+$(window).height()*0)
				) &&
				$(this).find('.cd-timeline-img').hasClass('is-hidden') &&
				$(this).find('.cd-timeline-img, .cd-timeline-content')
			)
			{
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden');
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('bounce-in');
			}
		});
	}

	function top_of_page()
	{
		return $(window).scrollTop() == ($(window).height() - $(window).height())*0;
	}

	function near_bottom_of_page()
	{
		return $(window).scrollTop() >= ($(document).height() - $(window).height())*1;
	}

	// check_scroll();
});
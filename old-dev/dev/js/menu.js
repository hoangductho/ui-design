
		
		$(window).load(function(){
			if($('.responsive_ui').is(':empty')){
				search_box();
			}
		});
		
		$(window).resize(function(){
			if($('.responsive_ui').is(':empty')){
				search_box();
			}else{
				$('.responsive_ui').empty();
			}
		});
		
		
		function search_box(){
			$w = $(window).innerWidth();
			if($w<=800){
				
				$('.navbar-page').clone().appendTo('.responsive_ui');
				$('.responsive_ui').find('.navbar-search').html('<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-search fa-fw"></i></a>');
			}else{
				
				$('.responsive_ui').empty();
			}
		}
		
		$(document).ready(function(){
			//scroll_chat();
		});
		
			
		function scroll_chat(){
			var $h = 0;
			var $i = 0;
			$('.chat_box li').each(function(){
				$i++;
				if($i <=6){
					$h = $h + $(this).outerHeight();
					$('.chat_box .list-chat').css({'overflow':'scroll','overflow-x':'hidden','height':$h+'px'})
					
				}else{
					console.log("ban da vuot qua 6 phan tu");
					
				}
			});
		}
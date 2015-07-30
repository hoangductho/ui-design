$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size

$(document).ready(function(){
    /* chat block */
    // var h_win = $(window).outerHeight();
    // var h_chat = $('.list-chat').height();
    // var h_real = h_win - 64 - 62;
    // $('.launcher_chat_block').css({'height':h_win + 'px'});
    // $('.chat_box .list-group').css({'height':h_win-64 + 'px'});

    // if(h_chat > h_real){
    //     $('.tse-scrollable').css({'height':h_real + 'px'});
    //     $('.list_chat').TrackpadScrollEmulator('recalculate');
    // }

    $('.launcher-chat').click(function(){
        $(this).removeClass('show').addClass('hide');
        $('.launcher_chat_block').removeClass('hide').addClass('show');
    });

    $('.fa-close').click(function(){
         
        $('.launcher_chat_block').removeClass('show').addClass('hide');
        $('.launcher-chat').removeClass('hide').addClass('show');
    });

     $(document).click(function(e) {
                if (!$(e.target).is('.chat_more_info *')) {
                
                $(".chat_more_info").hide(400);

            }
        });


    var flag_chat = false;
     $('.show_user_info').click(function(e){
             $(this).addClass('active');   
             $('.chat_more_info').show('400');
            e.stopPropagation(); 
        
     });

       
       //  if($('.chat_more_info').css('display')!='none'){
           
        
       // }else{
       //      $('.show_user_info').click(function(){
       //          // $(this).addClass('active');       
       //          $('.chat_more_info').show('400');
       //      });
            
       //  }


       
});

		
		
		
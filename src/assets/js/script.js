/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

	//$('#navsticky').waypoint('sticky');
    //$('.bxslider').bxSlider();

    $('.mobilebtn').click(function(e)
    {
        e.stopPropagation();
        if ($('#mobilemenu').hasClass('vmenu'))
        {
            $(this).removeClass('open');
            $('#mobilemenu').removeClass('vmenu');
        } else
        {
            $(this).addClass("open");
            $("#mobilemenu").addClass("vmenu");
        }
        return false;
    });

   $('.opcion').click(function(){
        //alert('Hizo click');
        $('.mobilebtn').removeClass('open');
        $('#mobilemenu').removeClass('vmenu');
    });

  
});

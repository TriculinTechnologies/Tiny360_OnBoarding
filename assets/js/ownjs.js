   /*$(document).ready(function(e) {
		$("#plane1").click(function() {
 $(this).parent( ".conten_five" ).css( "background", "green" )
});
    });*/
    
    
    var $img = $(".conten_five");

$('input[name=color]').on('change', function() {
   $img.removeClass().addClass($(this).val());
});
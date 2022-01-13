//Nav Responsive
$(document).ready(function() {
	$("i.icon-menu").on("click", function() {
		$(".nav-mobil").addClass("nav-mobile");
		$("i.icon-cancel").on("click", function() {
			$(".nav-mobil").removeClass("nav-mobile");
		});
	});
});




/**
 * Main Constructor
 * @author Tony Guglielmi
 */

var Main = new Object();

Main.init = function() {
	
	$('.addBox').click(function(){
		if($('.container').hasClass('L960')) {
			var item = new BoxItem(60);
		} else if($('.container').hasClass('L1140')) {
			var item = new BoxItem(95);
		}
		return false;
	});
	
}


Main.init();


/**
 * @constructor BoxItem
 * @author Tony Guglielmi
 */

var BoxItem = Class.extend({
	
	elements : {
		masterContainer : $('.container'),
		itemContainer : $("#item-wrapper"),
		itemClass : 'item',
		
	},
	
	init : function() {
		var self = this;
		this.el = document.createElement('div');
		self.el.className = self.elements.itemClass;
		self.elements.itemContainer.append(self.el);
		$(self.el).resizable({ grid: 60 }).draggable({snap: '.row', snapMode: 'inner', containment: ".container"});
	},
	
	blockResize : function() {
		console.log('hi');
	},
	
	onDrag : function() {
		
	},
	
});

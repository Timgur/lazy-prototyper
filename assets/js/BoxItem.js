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
	
	init : function(grid) {
		var self = this;
		this.gridSize = grid;
		this.el = document.createElement('div');
		self.el.className = self.elements.itemClass;
		self.elements.itemContainer.append(self.el);
	  self.el.style.top = 0;
	  self.el.style.left = 0;
	  self.el.style.position = "absolute";
		$(self.el).resizable({ grid: self.gridSize }).draggable({snap: '.row', snapMode: 'inner', containment: ".container"});
	},
	
	
});

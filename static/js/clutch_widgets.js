(function ($, window, document, undefined) {
	'use strict';

	var widget = widget || {};
	var widgetData = '';
	if(localStorage.getItem("widgetsData")){
		widgetData = JSON.parse(localStorage.getItem("widgetsData"));
	}
	widgetData = widgetData || {};
	var editPopoverContent = ' <div><form class="form-inline"><div class="form-group"><input class="form-control input-sm cw-popover" type="text"> <a href="javascript:void(0);" class="btn btn-primary btn-sm change-cw-title"><i class="glyphicon glyphicon-ok"></i></a> <a href="javascript:void(0);" class="btn btn-default btn-sm close-cw-popover"><i class="glyphicon glyphicon-remove"></i></a></div></form></div>';
	var highlightPopoverContent = ' <div><form class="form-inline"><div class="form-group"><input class="form-control input-sm cw-highlight-popover" type="text" placeholder="Search"> <a href="javascript:void(0);" class="btn btn-default btn-sm clear-highlight-text"><i class="glyphicon glyphicon-remove"></i></a></div></form></div>';
	var widgetIDstore = '';
	var widgetPosition = 0;
	var widgetOnFire = '';
	
	/*
	 * Object extend function
	 */
	function extend(a, b){
		for(var key in b){ 
			if(b.hasOwnProperty(key)){
				a[key] = b[key];
			}
		}
		return a;
	}

	/*
	 * Swapping function
	 */
	$.fn.swap = function(b){
		b = $(b)[0];
		var a = this[0];
		var t = a.parentNode.insertBefore(document.createTextNode(''), a);
		b.parentNode.insertBefore(a, b);
		t.parentNode.insertBefore(b, t);
		t.parentNode.removeChild(t);
		return this;
	};

	/*
	 * ClutchWidgets function
	 */
	function clutch(el, options){    
		this.el = el;
		this.obj = $(el);
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.buttonOrder = this.options.buttonOrder.split(' ');
		this.toggleBtn = this.obj.attr('data-cw-toggle');
		this.toggleBtnClass = this.options.toggleBtnClass.split(' ');
		this.removeBtn = this.obj.attr('data-cw-remove');
		this.removeBtnClass = this.options.removeBtnClass.split(' ');
		this.expandBtn = this.obj.attr('data-cw-expand');
		this.expandBtnClass = this.options.expandBtnClass.split(' ');
		this.clearBtn = this.obj.attr('data-cw-clear');
		this.clearBtnClass = this.options.clearBtnClass.split(' ');
		this.highlightBtn = this.obj.attr('data-cw-highlight');
		this.highlightBtnClass = this.options.highlightBtnClass.split(' ');
		this.colorBtn = this.obj.attr('data-cw-color');
		this.refreshBtn = this.obj.attr('data-cw-refresh');
		this.refreshBtnClass = this.options.refreshBtnClass.split(' ');
		this.URL = this.obj.attr('data-cw-url');
		this.modalURL = this.obj.attr('data-cw-modalURL');
		this.modalBtnClass = this.options.modalBtnClass.split(' ');
		this.colors = this.options.colors.split(' ');
		this.draggable = this.obj.attr('data-cw-draggable');
		this.editTitle = this.obj.attr('data-cw-edit');
		this.widgetCollapse = this.obj.attr('data-cw-collapse');
		this.number = this.obj.attr('id').replace(this.options.idPrefix, '');
		this.processClass = this.options.processClass.split(' ');
		this._init();
	}

	/*
	 * ClutchWidgets options
	 */
	clutch.prototype.options = {
		title: 'widget',
		dragHandle: '.cpanel-head',
		accept: '.cpanel',
		revert: true,
		makeStructure: true,
		makeDraggable: false,
		ajaxContent: false,
		idPrefix: 'widget-',
		widgetClass: 'cpanel',
		headColor: 'default',
		localStorage: true,
		clearStorageClass: 'clear-cw-storage',
		storageKey: 'undefined',
		rtl: false,
		editTitle: false,
		editPlace: 'right',
		editContainer: 'body',
		editTransitionColor: '#FFFF80',
		highlightBtn: false,
		highlightBtnClass: 'fa fa-filter',
		highlightBtnLabel: 'Highlight',
		highlightLabelPlace: 'bottom',
		highlightPopoverPlace: 'left',
		highlightContainer: 'body',
		toggleBtn: false,
		toggleBtnClass: 'fa fa-chevron-up fa-chevron-down',
		toggleBtnLabel: 'Toggle',
		toggleLabelPlace: 'bottom',
		toggleSpeed: 200,
		removeBtn: false,
		removeBtnClass: "fa fa-times",
		removeBtnLabel: 'Remove',
		removeLabelPlace: 'bottom',
		removeSpeed: 200,
		clearBtn: false,
		clearBtnClass: "fa fa-power-off",
		clearBtnLabel: 'Clear storage',
		clearLabelPlace: 'left',
		colors: 'fade-blue sky-blue dark-blue fade-brown light-brown brown fade-red red dark-red grey black light-green green grass-green dark-green yellow orange fade-pink pink purple default',
		colorBtn: false,
		colorClass: 'fa fa-gears',
		colorBtnLabel: 'Color',
		colorLabelPlace: 'bottom',
		modalLocation: '#theme-modal',
		modalBtn: false,
		modalBtnClass: "fa fa-credit-card",
		modalBtnLabel: 'Modal',
		modalLabelPlace: 'bottom',
		modalContentLocation: '#theme-modal-content',
		expandBtn: false,
		expandBtnClass: 'fa fa-expand fa-collapse',
		expandBtnLabel: 'Fullscreen',
		expandLabelPlace: 'bottom',
		refreshBtn: false,
		refreshBtnClass: 'fa fa-refresh',
		refreshBtnLabel: 'Refresh',
		refreshLabelPlace: 'bottom',
		refreshTime: 1500,
		showProcess: false,
		processClass: 'fa fa-refresh fa-spin',
		processTime: 1000,
		buttonOrder: 'process refresh modal color highlight fullscreen clear toggle remove'
	}

	/*
	 * Init function
	 */
	clutch.prototype._init = function() {
		if((this.options.storageKey == 'undefined') && this.options.localStorage){
			this.options.localStorage = false;
			alert("Storage key error: Local storage is switched off");
		}

		this._index();

		if(this.URL && this.options.ajaxContent){
			this._ajaxLoad(this.obj.find('.cpanel-body'), this.URL);
		}

		if(this.options.makeDraggable && this.draggable == 'true'){
			this._makeDraggable();
		}

		widgetIDstore.indexOf("[" + this.number + "]") < 0 ? (widgetIDstore += "[" + this.number + "]") : alert("Duplicate cwid found: " + this.obj.attr('id'));
		
		if(!($('.' + this.options.clearStorageClass).attr('data-attached') == 'true')){
			this._clearLS();
		}

		widgetPosition += 1;
		if((widgetPosition == $('.' + this.options.widgetClass).length) && this.options.localStorage){
			this._fireStorage();
		}
		
		return this;
	}

	/*
	 * Provide index to the widget
	 */
	clutch.prototype._index = function() {
		var self = this;

		//Widget and parent index
		this.obj.attr("data-wi", this.number);
		this.obj.wrap("<div data-ci=" + this.number + "></div");

		if(this.options.makeStructure){
			self._makeStructure();
		}
	}

	/*
	 * Make HTML structure(DOM) for the widget
	 */
	clutch.prototype._makeStructure = function() {
		if(!this.obj.find('.cpanel-head').length){
			$('<div />', {'class' : 'cpanel-head'}).prependTo(this.obj);
		}

		if(!this.obj.find('.cpanel-head-button').length){
			$('<div />', {'class' : 'cpanel-head-button'}).prependTo(this.obj.find('.cpanel-head'));
		}

		if(!this.obj.find('.cpanel-head .data-title').length){
			$("<div />", {"class" : "data-title"}).appendTo(this.obj.find('.cpanel-head'));
			this.obj.find('.cpanel-head .data-title').html(this.obj.attr('data-cw-title') || this.options.title);
		}

		this.obj.attr('data-cw-headColor') ? this.obj.find('.cpanel-head').addClass('cpanel-' + this.obj.attr('data-cw-headColor')) : this.obj.find('.cpanel-head').addClass('cpanel-' + this.options.headColor);
		this._makeButtons(); 
		this._basicStyle(this.obj);
	}

	/*
	 * Make Buttons
	 */
	clutch.prototype._makeButtons = function() {
		for(var i = 0; i < this.buttonOrder.length; i++){
			switch(this.buttonOrder[i]){
				case 'process' : {
					if(this.options.showProcess && (this.toggleBtn == "true" || this.removeBtn == "true" || this.expandBtn == "true" || this.colorBtn == "true" || this.refreshBtn == "true")){
						$('<a href="javascript:void(0);" class="process"><i class="' + this.processClass[0] + '"></i></a>').prependTo(this.obj.find('.cpanel-head-button'));
					}
					break;
				}

				case 'toggle' : {
					if(this.toggleBtn == "true" && this.options.toggleBtn){
						$('<a class="cpanel-minimize"><i class="' + this.toggleBtnClass[0] + ' ' + this.toggleBtnClass[1] + '"data-placement="' + this.options.toggleLabelPlace + '" data-original-title="' + this.options.toggleBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button')); 
						if(this.options.toggleBtnLabel != false){
							this.obj.find('.cpanel-minimize i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}

				case 'fullscreen' : {
					if(this.expandBtn == "true" && this.options.expandBtn){
						$('<a class="fullscreen"><i class="' + this.expandBtnClass[0] + ' ' + this.expandBtnClass[1] + '"data-placement="' + this.options.expandLabelPlace + '" data-original-title="' + this.options.expandBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button'));
						if(this.options.expandBtnLabel != false){
							this.obj.find('.fullscreen i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}

				case 'refresh' : {
					if(this.refreshBtn == "true" && this.options.refreshBtn && this.URL){
						$('<a class="refresh"><i class="' + this.options.refreshBtnClass + '"data-placement="' + this.options.refreshLabelPlace + '" data-original-title="' + this.options.refreshBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button'));
						if(this.options.refreshBtnLabel != false){
							this.obj.find('.refresh i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}

				case 'modal' : {
					if(this.modalURL && this.options.modalBtn){
						$('<a class="cpanel-modal"><i class="' + this.modalBtnClass[0] + ' ' + this.modalBtnClass[1] + '"data-placement="' + this.options.modalLabelPlace + '" data-original-title="' + this.options.modalBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button')); 
						if(this.options.modalBtnLabel != false){
							this.obj.find('.cpanel-modal i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}
				
				case 'remove' : {
					if(this.removeBtn == "true" && this.options.removeBtn){
						$('<a class="cpanel-close"><i class="' + this.removeBtnClass[0] + ' ' + this.removeBtnClass[1] + '"data-placement="' + this.options.removeLabelPlace + '" data-original-title="' + this.options.removeBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button')); 
						if(this.options.removeBtnLabel != false){
							this.obj.find('.cpanel-close i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}

				case 'clear' : {
					if(this.clearBtn == "true" && this.options.clearBtn && this.options.localStorage){
						$('<a class="cpanel-clear"><i class="' + this.options.clearBtnClass + '"data-placement="' + this.options.clearLabelPlace + '" data-original-title="' + this.options.clearBtnLabel + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button')); 
						if(this.options.clearBtnLabel != false){
							this.obj.find('.cpanel-clear i').tooltip({
								container: 'body'
							});
						}
					}
					break;
				}

				case 'highlight' : {
					if(this.highlightBtn == "true" && this.options.highlightBtn){
						$('<a class="cpanel-highlight"><i class="' + this.options.highlightBtnClass + '"></i></a>').appendTo(this.obj.find('.cpanel-head-button')); 
						if(this.options.highlightBtnLabel != false){
							this.obj.find('.cpanel-highlight i').tooltip({
								container: 'body',
								placement: this.options.highlightLabelPlace,
								title: this.options.highlightBtnLabel
							});
						}
					}
					break;
				}

				case 'color' : {
					if(this.colorBtn == "true" && this.options.colorBtn){
						$(' <li class="dropdown" style="display:inline-block;">'+
							'<a class="cpanel-color" data-toggle="dropdown">'+'<i class="' + this.options.colorClass + '"data-placement="' + this.options.colorLabelPlace + '" data-original-title="' + this.options.colorBtnLabel + '"></i></a>'+
							'<ul class="dropdown-menu color-dropdown">'+
							'</ul>'+
						'</li>').appendTo(this.obj.find('.cpanel-head-button'));
						if(this.options.colorBtnLabel != false){
							this.obj.find('.cpanel-color i').tooltip({
								container: 'body'
							});
						}
						var colorDropdown = this.obj.find('.cpanel-color').parent().find('.dropdown-menu');
						for(var colorIndex = 0; colorIndex < this.colors.length; colorIndex++){
							$(' <li style="display:inline-block;">'+
							'<span class="color-button bg-color-'+this.colors[colorIndex]+'" data-cw-headColor="'+this.colors[colorIndex]+'"></span>'+
							'</li>').appendTo(colorDropdown);
						}
					}
					break;
				}
			}
		}
		this._attachEvents();   
	}

	/*
	 * Process Display
	 */
	clutch.prototype._showProcess = function() {
		var self = this;
		var windowWidth = $(window).width();
		if (windowWidth > 992){ 
			self.obj.find('.process > i').addClass(this.processClass[2] + ' ' + this.processClass[1]);
			setTimeout(function () {
				self.obj.find('.process > i').removeClass(self.processClass[2] + ' ' + self.processClass[1]);
				return;
			}, self.options.processTime);
		} 
	}

	/*
	 * Event Handlers
	 */
	clutch.prototype._attachEvents = function() {

		var self = this;
		var widgetBody = self.obj.find('.cpanel-body');
		var widgetFoot = self.obj.find('.cpanel-foot');
		var wid = self.obj.attr("id").replace(this.options.idPrefix,"") + this.options.storageKey;

		//Toggle events handling
		this.obj.find('.cpanel-head-button .' +  this.toggleBtnClass[1]).click(function(){
			if($(this).hasClass(self.toggleBtnClass[1])){
				$(this).removeClass(self.toggleBtnClass[1]).addClass(self.toggleBtnClass[2]);
				widgetBody.slideUp(self.options.toggleSpeed);
				widgetFoot.slideUp(self.options.toggleSpeed);
				self._showProcess();
				if(self.options.localStorage){
					if(widgetData[wid]){
						widgetData[wid].m = 1;
					}
					else{
						var widgetTempData = {
							id : self.obj.attr("id"),
							dataIndex : self.obj.attr("data-wi"),
							m : 1
						}
						widgetData[wid] = widgetTempData;
					}
					localStorage.setItem("widgetsData", JSON.stringify(widgetData));

				}   
			}
			else{
				$(this).removeClass(self.toggleBtnClass[2]).addClass(self.toggleBtnClass[1]);
				widgetBody.slideDown(self.options.toggleSpeed);
				widgetFoot.slideDown(self.options.toggleSpeed);
				self._showProcess();
				if(self.options.localStorage){
					if(widgetData[wid]){
						widgetData[wid].m = 0;
					}
					else{
						var widgetTempData = {
							id : self.obj.attr("id"),
							dataIndex : self.obj.attr("data-wi"),
							m : 0
						}
						widgetData[wid] = widgetTempData;
					}
					localStorage.setItem("widgetsData", JSON.stringify(widgetData));
				}
			}
		});

		//Color events handling
		this.obj.find('.cpanel-head-button .color-button').click(function(){
			$(this).closest('.cpanel-head').removeClass().addClass('cpanel-head cpanel-' + $(this).attr("data-cw-headColor"));
			self._showProcess();
			if(self.options.localStorage){
				if(widgetData[wid]){
					widgetData[wid].hC = $(this).attr("data-cw-headColor");
				}
				else{
					var widgetTempData = {
						id : self.obj.attr("id"),
						dataIndex : self.obj.attr("data-wi"),
						hC : $(this).attr("data-cw-headColor")
					}
					widgetData[wid] = widgetTempData;
				}
				localStorage.setItem("widgetsData", JSON.stringify(widgetData));
			}
		});

		//Modal events handling
		this.obj.find('.cpanel-head-button .' +  this.modalBtnClass[1]).click(function(){
			var container = $(self.options.modalContentLocation);
			self._ajaxLoad(container, $(this).closest('.' + self.options.widgetClass).attr('data-cw-modalURL'));
			$(self.options.modalLocation).modal('show');
		});

		//Clear events handling
		this.obj.find('.cpanel-head-button .' +  this.clearBtnClass[1]).click(function(){
			delete widgetData[$(this).closest('.' + self.options.widgetClass).attr("id").replace(self.options.idPrefix,"") + self.options.storageKey];
			localStorage.setItem("widgetsData", JSON.stringify(widgetData));
			self._showProcess();
			alert($(this).closest('.' + self.options.widgetClass).attr("id") + ' storage cleared');
		});

		//Refresh events handling
		this.obj.find('.cpanel-head-button .' +  this.refreshBtnClass[1]).click(function(){
			var $this = $(this);
			var widget = $(this).closest('.' + self.options.widgetClass);
			var container = widget.find('.cpanel-body');
			container.addClass('cpanel-on-load');
			widget.find('.process > i').addClass(self.processClass[1] + ' ' + self.processClass[2]);
			self._ajaxLoad(container, widget.attr('data-cw-url'), function(){
				self._basicStyle(widget);
				widget.find('.process > i').removeClass(self.processClass[1] + ' ' + self.processClass[2]);
				container.removeClass('cpanel-on-load');
			});
		});

		//Remove events handling
		this.obj.find('.cpanel-head-button .' +  this.removeBtnClass[1]).click(function(){
			self.obj.fadeOut(self.options.removeSpeed);
		});

		//Fullscreen events handling
		this.obj.find('.cpanel-head-button .' +  this.expandBtnClass[1]).click(function(){
			if($(this).hasClass(self.expandBtnClass[1])){
				
				if(self.draggable == 'true'){
					$(this).closest('.' + self.options.widgetClass).draggable('disable').droppable('disable');
				}

				self.obj.addClass('cpanel-fs');
				$('body').css('overflow', 'hidden');
					
				self._showProcess();
				$(this).removeClass('fa-expand').addClass('fa-compress');
			}
			else{
				self.obj.removeClass('cpanel-fs');
				$('body').css('overflow', '');
				$(this).closest('.' + self.options.widgetClass).css('z-index', 'auto');

				if(self.draggable == 'true'){
					$(this).closest('.' + self.options.widgetClass).draggable('enable').droppable('enable');
				}

				self._showProcess();
				$(this).removeClass('fa-compress').addClass('fa-expand');
			}
		});
		
		//Highlight events handling
		if(this.highlightBtn == "true" && this.options.highlightBtn){
			this.obj.find('.cpanel-head-button .' +  this.highlightBtnClass[1]).popover({
				animation: true,
				content: highlightPopoverContent,
				html: 'true',
				placement: this.options.highlightPopoverPlace,
				container: this.options.highlightContainer
				//title: '<i class="fa fa-filter highlight-icon"></i> <strong class="highlight-title">HIGHLIGHT</strong>'
			});

			this.obj.find('.cpanel-head-button .' +  this.highlightBtnClass[1]).on('shown.bs.popover', function (){
				var popobj = $(this);
				if(popobj.attr('data-highlight-value')){
					$('.cw-highlight-popover').val(popobj.attr('data-highlight-value'));
				}
				$('.cw-highlight-popover').on('keyup', function (){
					if($(this).val()){
						popobj.closest('.' + self.options.widgetClass).find('.cpanel-body').removeHighlight();
						popobj.closest('.' + self.options.widgetClass).find('.cpanel-body').highlight($(this).val());
						popobj.attr('data-highlight-value', $(this).val());
					}
					else{
						popobj.closest('.' + self.options.widgetClass).find('.cpanel-body').removeHighlight();
					}
				});

				$('.clear-highlight-text').click(function(e){
					e.preventDefault();
					popobj.closest('.' + self.options.widgetClass).find('.cpanel-body').removeHighlight();
					popobj.removeAttr('data-highlight-value');
					popobj.popover('hide');
				}); 
			});
		}

		//Title events handling
		if(this.editTitle == "true" && this.options.editTitle){
			this.obj.find('.data-title').popover({
				animation: true,
				content: editPopoverContent,
				html: 'true',
				placement: self.options.editPlace,
				container: self.options.editContainer
			});

			var pid, tid;
			var wid = this.obj.attr("id").replace(self.options.idPrefix,"") + self.options.storageKey;

			this.obj.find('.data-title').on('shown.bs.popover', function (){
				var titobj = $(this);
				var tSt = titobj.text();
				tid = titobj;
				pid = $('.cw-popover').closest('.popover');
				$('.cw-popover').val(titobj.html().trim());
				
				$('.change-cw-title').on('click', function(e){
					e.preventDefault();
					if($('.cw-popover').val()){
						tid.html($('.cw-popover').val().trim());
						pid.popover('hide');
						if(self.options.localStorage){
							if(widgetData[wid]){
								widgetData[wid].t = tid.html().trim();
							}
							else{
								var widgetTempData = {
									id : self.obj.attr("id"),
									dataIndex : self.obj.attr("data-wi"),
									t : tid.html().trim()
								}
								widgetData[wid] = widgetTempData;
							}
							localStorage.setItem("widgetsData", JSON.stringify(widgetData));
						}   
						var bgColor = tid.css('background-color');  
						tid.css('background-color', self.options.editTransitionColor);
						setTimeout(function(){
							if(bgColor === 'transparent') {
								bgColor = ''; 
							}
							tid.css('background-color', bgColor);
							tid.addClass('edit-bg-transition');
							setTimeout(function(){
								tid.removeClass('edit-bg-transition');  
							}, 1700);
						}, 10);
					}
					else{
						pid.popover('hide');
					}
				});

				$('.close-cw-popover').on('click', function(e){
					e.preventDefault();
					pid.popover('hide');
				});
			});
		}

		if(this.widgetCollapse){
			this.obj.find('.cpanel-head-button .' +  this.toggleBtnClass[1]).removeClass(this.toggleBtnClass[1]).addClass(this.toggleBtnClass[2]);
			this.obj.find('.cpanel-body').slideUp(10);
			this.obj.find('.cpanel-foot').slideUp(10);
		}
	}

	/*
	 * Ajax Loading function
	 */
	clutch.prototype._ajaxLoad = function(cBox, url, callback) {
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'html',
			cache: false,
			beforeSend : function(){
					
			},
			success : function(data){
				cBox.html(data);
				if(callback){callback();}
			},
			error: function(xhr, ajaxOptions, thrownError){
				cBox.html('<div class="alert alert-danger alert-box mb0"><h3 style="margin:0;"><i class="fa fa-times"></i>&nbsp;&nbsp; ERROR 404</h3></div>');
				if(callback){callback();}
			},
			async: false    
		});
	}

	/*
	 * Make Widget Draggable
	 */
	clutch.prototype._makeDraggable = function() {

		var id;
		var self = this;
		if(this.draggable == 'true'){
			if(this.options.dragHandle != 'automatic'){
				this.obj.draggable({
					revert: self.options.revert,
					zIndex: 500,
					cursor: "move",
					handle: self.options.dragHandle,
					opacity: 1.0,
					start: function( event, ui ) {
						$(this).parent().addClass('widget-on-drag');
					},
					stop: function( event, ui ){
						$(this).parent().removeClass('widget-on-drag');
					}
				});
			}
			if(this.options.dragHandle == 'automatic'){
				this.obj.draggable({
					revert: self.options.revert,
					zIndex: 500,
					cursor: "move",
					opacity: 1.0,
					start: function( event, ui ) {
						$(this).parent().css('border', '1px dashed #E3B823');
					},
					stop: function( event, ui ){
						$(this).parent().css('border', '');
					}
				});
			}
			this.obj.droppable({
				tolerance: 'pointer',
				accept: self.options.accept,
				drop: function( event, ui ) {
					var draggableWidget = ui.draggable, 
						droppableWidget = $(this), 
						draggableWidgetPosition = draggableWidget.position(), 
						droppableWidgetPosition = droppableWidget.position();
					if(self.options.localStorage){
						var draggableIndex = draggableWidget.parent().attr("data-ci");
						draggableWidget.attr("data-wi", droppableWidget.parent().attr("data-ci"));
						droppableWidget.attr("data-wi", draggableIndex);
						id = draggableWidget.attr("id").replace(self.options.idPrefix, "") + self.options.storageKey;

						if(widgetData[id]){
							widgetData[id].dataIndex = draggableWidget.attr("data-wi");
						}
						else{
							var DraggableTempData = {
								id : draggableWidget.attr("id"),
								dataIndex : draggableWidget.attr("data-wi")
							}
							widgetData[id] = DraggableTempData;
						}
							
						localStorage.setItem("widgetsData", JSON.stringify(widgetData));
					
						id = droppableWidget.attr("id").replace(self.options.idPrefix, "") + self.options.storageKey;
						if(widgetData[id]){
							widgetData[id].dataIndex = droppableWidget.attr("data-wi");
						}
						else{
							var DroppableTempData = {
								id : droppableWidget.attr("id"),
								dataIndex : droppableWidget.attr("data-wi")
							}
							widgetData[id] = DroppableTempData;
						}
							
						localStorage.setItem("widgetsData", JSON.stringify(widgetData));
					}
					draggableWidget.swap(droppableWidget);
					draggableWidget.parent().removeClass('widget-on-drag');
					droppableWidget.parent().removeClass('widget-on-drag');
				}
			});
		}
	}
	
	/*
	 * Widget basic styling
	 */
	clutch.prototype._basicStyle = function(el) {
		if(el.attr('data-cw-height')){
			el.find('.cpanel-body').css("height", el.attr('data-cw-height'));
			if(!el.hasClass('cpanel-fd')){el.addClass('cpanel-fd');}
		}

		if(el.attr('data-cw-width')){
			el.find('.cpanel-content').css("width", el.attr('data-cw-width'));
			if(!el.hasClass('cpanel-fd')){el.addClass('cpanel-fd');}
		}
	}

	/*
	 * Widget LocalStorage clear
	 */
	clutch.prototype._clearLS = function() {
		$('.' + this.options.clearStorageClass).on('click', function(){
			widgetData = {};
			localStorage.setItem("widgetsData", JSON.stringify(widgetData));
			location.reload();
		});
		$('.' + this.options.clearStorageClass).attr('data-attached', true);    
	}

	/*
	 * Load widget Storage
	 */
	clutch.prototype._fireStorage = function() {
		var self = this;

		$.each(widgetData, function (index, params){
			if(index.replace(params.id.replace(self.options.idPrefix, ""), "") == self.options.storageKey){
				if(!($('#' + params.id).parent().attr("data-ci") == params.dataIndex)){ 
					widgetOnFire = $('#' + params.id).parent().attr('data-ci');
					var widgetFired = $('div[data-ci="' + params.dataIndex + '"]').children().attr('id');
					$('div[data-ci="' + params.dataIndex + '"]').children().swap($('#' + params.id));
					if(!$('div[data-ci="' + widgetOnFire + '"]').find('[data-wi]').length){
						$('#' + widgetFired).prependTo($('div[data-ci="' + widgetOnFire + '"]'));
					}
				}

				if(params.m == 1){
					var ap = $('#' + params.id);
					var at = ap.find('.cpanel-head-button .' + self.toggleBtnClass[1]);
					at.removeClass(self.toggleBtnClass[1]).addClass(self.toggleBtnClass[2]);
					ap.find('.cpanel-body').slideUp(10);
					ap.find('.cpanel-foot').slideUp(10);
				}
				else if(params.m == 0){
					var ap = $('#' + params.id);
					var at = ap.find('.cpanel-head-button .' + self.toggleBtnClass[2]);
					at.removeClass(self.toggleBtnClass[2]).addClass(self.toggleBtnClass[1]);
					ap.find('.cpanel-body').slideDown(10);
					ap.find('.cpanel-foot').slideDown(10);
				}

				if(params.hC){
					var ap = $('#' + params.id);
					var ah = ap.find('.cpanel-head');
					ah.removeClass().addClass('cpanel-head cpanel-' + params.hC);
				}

				if(params.t){
					var ap = $('#' + params.id);
					var ah = ap.find('.cpanel-head .data-title');
					ah.html(params.t);
				}
			}
		});
	}

	/*
	 * Clutch Widgets function
	 */
	$.fn.clutchWidgets = function(options){
		this.each(function(){
			new clutch(this, options);
		});

		$('body').on('click', function (e) {
			$('.cpanel-highlight i').each(function () {
				//the 'is' for buttons that trigger popups
				//the 'has' for icons within a button that triggers a popup
				if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
			});

			$('.cpanel-head .data-title').each(function () {
				//the 'is' for buttons that trigger popups
				//the 'has' for icons within a button that triggers a popup
				if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
			});
		});
	};

	/*
	 * Add to global namespace
	 */
	window.clutch = clutch;

})(jQuery, window, document);
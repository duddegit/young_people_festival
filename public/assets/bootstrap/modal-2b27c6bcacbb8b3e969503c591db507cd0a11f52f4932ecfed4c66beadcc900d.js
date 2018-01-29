function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),Modal=function(t){var e="modal",i="4.0.0-alpha.6",n="bs.modal",o="."+n,s=".data-api",r=t.fn[e],a=300,l=150,d=27,h={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,FOCUSIN:"focusin"+o,RESIZE:"resize"+o,CLICK_DISMISS:"click.dismiss"+o,KEYDOWN_DISMISS:"keydown.dismiss"+o,MOUSEUP_DISMISS:"mouseup.dismiss"+o,MOUSEDOWN_DISMISS:"mousedown.dismiss"+o,CLICK_DATA_API:"click"+o+s},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"},p=function(){function s(e,i){_classCallCheck(this,s),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return s.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},s.prototype.show=function(e){var i=this;if(this._isTransitioning)throw new Error("Modal is transitioning");Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var n=t.Event(_.SHOW,{relatedTarget:e});t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(_.CLICK_DISMISS,f.DATA_DISMISS,function(t){return i.hide(t)}),t(this._dialog).on(_.MOUSEDOWN_DISMISS,function(){t(i._element).one(_.MOUSEUP_DISMISS,function(e){t(e.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(e)}))},s.prototype.hide=function(e){var i=this;if(e&&e.preventDefault(),this._isTransitioning)throw new Error("Modal is transitioning");var n=Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);n&&(this._isTransitioning=!0);var o=t.Event(_.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(_.FOCUSIN),t(this._element).removeClass(u.SHOW),t(this._element).off(_.CLICK_DISMISS),t(this._dialog).off(_.MOUSEDOWN_DISMISS),n?t(this._element).one(Util.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(a):this._hideModal())},s.prototype.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(o),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null},s.prototype._getConfig=function(i){return i=t.extend({},h,i),Util.typeCheckConfig(e,i,c),i},s.prototype._showElement=function(e){var i=this,n=Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Util.reflow(this._element),t(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(_.SHOWN,{relatedTarget:e}),s=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,t(i._element).trigger(o)};n?t(this._dialog).one(Util.TRANSITION_END,s).emulateTransitionEnd(a):s()},s.prototype._enforceFocus=function(){var e=this;t(document).off(_.FOCUSIN).on(_.FOCUSIN,function(i){document===i.target||e._element===i.target||t(e._element).has(i.target).length||e._element.focus()})},s.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(_.KEYDOWN_DISMISS,function(t){t.which===d&&e.hide()}):this._isShown||t(this._element).off(_.KEYDOWN_DISMISS)},s.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(_.RESIZE,function(t){return e._handleUpdate(t)}):t(window).off(_.RESIZE)},s.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(u.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(_.HIDDEN)})},s.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},s.prototype._showBackdrop=function(e){var i=this,n=t(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var o=Util.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,n&&t(this._backdrop).addClass(n),t(this._backdrop).appendTo(document.body),t(this._element).on(_.CLICK_DISMISS,function(t){return i._ignoreBackdropClick?void(i._ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide()))}),o&&Util.reflow(this._backdrop),t(this._backdrop).addClass(u.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(Util.TRANSITION_END,e).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(u.SHOW);var s=function(){i._removeBackdrop(),e&&e()};Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)?t(this._backdrop).one(Util.TRANSITION_END,s).emulateTransitionEnd(l):s()}else e&&e()},s.prototype._handleUpdate=function(){this._adjustDialog()},s.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},s.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},s.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},s.prototype._setScrollbar=function(){var e=parseInt(t(f.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=e+this._scrollbarWidth+"px")},s.prototype._resetScrollbar=function(){document.body.style.paddingRight=this._originalBodyPadding},s.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},s._jQueryInterface=function(e,i){return this.each(function(){var o=t(this).data(n),r=t.extend({},s.Default,t(this).data(),"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e);if(o||(o=new s(this,r),t(this).data(n,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](i)}else r.show&&o.show(i)})},_createClass(s,null,[{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return h}}]),s}();return t(document).on(_.CLICK_DATA_API,f.DATA_TOGGLE,function(e){var i=this,o=void 0,s=Util.getSelectorFromElement(this);s&&(o=t(s)[0]);var r=t(o).data(n)?"toggle":t.extend({},t(o).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var a=t(o).one(_.SHOW,function(e){e.isDefaultPrevented()||a.one(_.HIDDEN,function(){t(i).is(":visible")&&i.focus()})});p._jQueryInterface.call(t(o),r,this)}),t.fn[e]=p._jQueryInterface,t.fn[e].Constructor=p,t.fn[e].noConflict=function(){return t.fn[e]=r,p._jQueryInterface},p}(jQuery);
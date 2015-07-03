/**
 * Add a class once we scroll to the declared object.
 * This is designed for elements to stick to the head once scrolled but doesn't define any styling in itself
 * @param Element elem     The element to apply the functionality to
 * @param array|Object Options    A set of options for the element:
 *       offset - A number of pixels to offset the scroll by - A negative number means it will become sticky before reaching the element
 *       classname - A classname to add to the element when it is stickied - Defaults to 'fixed'
 * @example headerStick(document.querySelector('.toolbar'), {offset: -10, classname: "toolbar--fixed"});
 */
function headerStick( elem, options ) {
	var offset =  elem.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop);
	if ( options && options.offset ) {
		offset += options.offset;
	}

	window.addEventListener('scroll', function() {
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		elem.classList.toggle(options.classname || 'fixed',  scroll > offset);
	});
}

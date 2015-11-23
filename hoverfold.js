( function( $ ) {
	$.fn.hoverfold = function( args ) {

		this.each( function() {
		
			$( this ).find( '.recommendation__offer-container' ).each( function() {

				var $item 	= $( this ),
					img		= $item.find( 'img' ).attr( 'src' ),
					struct	= '<div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
									struct	+='<div class="slice s5">';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div>';

				if (!img) 
					return
				var $struct = $( struct );
				$item.find( 'img' )
				.remove()
				.end()
				.append( $struct )
				.find( 'div.slice' )
				.css( 'background-image', 'url(' + img + ')' )
				.prepend( $( '<span class="overlay" ></span>' ) );
				
			} );
			
		});

	};

} )( jQuery );
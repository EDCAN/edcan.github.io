# Sidebar.js
A simple jQuery sidebar plugins! No more balabala! Just enjoy it!
## Basic Utilities
### Include jQuery & Sidebar.js
    <script src="//cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
    <script src="./js/sidebar.js"></script>
### Create Sidebar Wrapper
	<script>
	    $('#wrapper').sidebar();
	</script>
### Create Sidebar Toggler
Add Tag Attribute `data-toggle="sidebar"` or set Sidebar.js Options
	<button type="button" class="btn btn-lg btn-success" data-toggle="sidebar">Sidebar Toggle</button>
## Options
	<script>
	    $('#wrapper').sidebar({
	        toggler: '[data-toggle="sidebar"]',
	        minimized: 'minimized',
	        animating: 'animating',
	        duration: 250,
	        breakpoint: 768
	    });// Default Options
	</script>
## Customize styleSheet
### Default Class Used
`.minimized` for Wrapper when Sidebar is Collapsed.
`.animating` for Wrapper Transition.
### Basic styleSheet
	/* Wrapper style 
	 * Wrapper = #wrapper 
	 * Sidebar = #side-wrapper
	 */
	#wrapper {
	    position: absolute;
	    width: 100%;
	}
	
	.animating, .animating #side-wrapper {
	    -webkit-transition: all .25s ease-in-out;
	    -moz-transition: all .25s ease-in-out;
	    transition: all .25s ease-in-out;
	}
	
	#wrapper, #wrapper.minimized.animating {
	    padding-left: 194px;
	}
	
	#side-wrapper, #wrapper.minimized.animating #side-wrapper {
	    padding-left: 0;
	    left: 0;
	}
	
	#wrapper.minimized #side-wrapper, #wrapper.animating #side-wrapper {
	    padding-left: 140px;
	    left: -140px;
	}
	
	#wrapper.minimized, #wrapper.animating {
	    padding-left: 54px;
	}
	
	#side-wrapper {
	    position: absolute;
	    width: 194px;
	    height: 100%;
	    color: #a7b1c2;
	    white-space: nowrap;
	    overflow-x: hidden;
	    background: #2F4050;
	}
Customize your style follow `./css/sidebar.css`

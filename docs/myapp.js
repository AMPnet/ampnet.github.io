$(document).ready(function() {
    $(document).scroll(function() {
        var nav = $(".my-navbar")
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height())
    })
	

	
	
})

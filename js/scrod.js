$("button").on("click", function() {

    var $first = $(".first"),
        $current = $(".scrod:visible"),
        $next = $current.next();

    if (!$next.length) {
        $next = $first;
    }

    $current.fadeOut({
        complete: function() {
            $next.fadeIn();
        }
    });

});
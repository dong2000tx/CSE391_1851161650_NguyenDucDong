$(document).ready(function() {
    $(":button").each(function() {
        $(this).click(function() {
            $(this).text('just click');
        })
    })
})
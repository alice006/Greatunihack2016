$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});

$('#registerform').click(function(){
  $('.register').fadeToggle('slow');
  $(this).toggleClass('green');
});


$(document).mouseup(function (e)
{
    var container = $(".login");

    // if the target of the click isn't the container...
    if (!container.is(e.target)
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');

        container.hide();
        $('#registerform').removeClass('green');
    }
});
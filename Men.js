$('a').on('click', function(){
    var id = $(this).parent().parent().parent().attr('id');
    var msg ='';
    msg = '<div id="other">';
    msg += '<div>' + $(this).parent().siblings('div').html() + '</div>';
    msg += '<div> <p>' + $(this).siblings('p').text() + '<p>';
    msg += '<span>' + $(this).siblings('span').html() + '</span> </div></div>';
    $('body').html(msg);
    $(this).attr('href', '#' + $(this).siblings('p').text().split(' ')[0])
    
 })

 $('img').on('click',function(){
     $('.main .div img').attr('src', $(this).attr('src'))

 })



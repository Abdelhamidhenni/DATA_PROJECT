
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
  $('#fc2_see_more').click(function (e) {
    if ($(this).hasClass('deployed')){
      console.log('la');
        $(this).removeClass('deployed');
      $(this).find('strong').text('See more');
      $(this).find('span.glyphicon').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
    }
    else {
      console.log('ici');
      $(this).addClass('deployed');
      $(this).find('span.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      $(this).find('strong').text('See less');
    }
  });

});


$('.seemore-js').on('click', function(){
  if ($(this).hasClass('seemore')){
    $(this).text('See less').removeClass('seemore').addClass('seeless');
    $(this).next().removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
  }
  else{
    $(this).text('See more').removeClass('seeless').addClass('seemore');
    $(this).next().removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
  }
});


$('.fc2_stay_type').on('click', function(){
  console.log('test');
  $('.fc2_stay_type').removeClass('active');
  $(this).addClass('active');
});


$('.fc2_client_mail').on('click')
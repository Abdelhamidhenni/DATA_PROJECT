$('[data-toggle="tooltip"]').tooltip();

$('.fc2_stay_type').on('click', function(){
  console.log('test');
  $('.fc2_stay_type').removeClass('active');
  $(this).addClass('active');
});

$('#fc2_see_more, .fc2_seemore').click(function (e) {
  if ($(this).hasClass('deployed')){
    scrollfromTop = $(".fc2_content").scrollTop();
    console.log(scrollfromTop);
    console.log('la');
      $(this).removeClass('deployed');
    $(this).find('strong').text('See more');
    $(this).find('span.glyphicon').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  }
  else {
    console.log('ici');
    
    if ($(this).closest('.fc2_content').hasClass('fc2_content')){
      scrollfromTop = $(".fc2_content").scrollTop();
      $(".fc2_content").animate({scrollTop: scrollfromTop + 70});
    }

    $(this).addClass('deployed');
    $(this).find('span.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    $(this).find('strong').text('See less');
  }
});

$('.js-select-complaint').on('change', function(){
      $('.js-search-collapse').collapse('show');
      $('.js-collapse-selects').removeClass('hide');
});

$('.js-collapse-selects').on('click', function(){
  $(this).addClass('hide');
})

$('.select-satisfaction .client-satisfaction').on('click', function(){
	if ($(this).hasClass('fa-smile-o')){
		$('.client-satisfaction').removeClass('green yellow red active');
		$(this).addClass('green active');
	}
	else if ($(this).hasClass('fa-meh-o')){
		$('.client-satisfaction').removeClass('green yellow red active');
		$(this).addClass('yellow active');
	}
	else if ($(this).hasClass('fa-frown-o')){
		$('.client-satisfaction').removeClass('green yellow red active');
		$(this).addClass('red active');
	}
});

$('.js-show-hover').on('hover', function(){
  $(this).find('.show-hover').collapse('toggle');
});

$('.js-collapse-selects').on('click', function(){
  $('.js-search-collapse').collapse('hide');
});

$('.toggle-fs').on('click', function(){
  $('.fc2_container').toggleClass('full-screen');
  $(this).find('i').toggleClass('fa-expand fa-compress');
})

$('.fc2_pref_tag').on('hover', function(){
  $(this).find('.fa-pencil').toggleClass('opacity-pencil');
});



$('.choice-pref').on('click', function(){
  $('.choice-pref').removeClass('choice-pref-active');
  $(this).addClass('choice-pref-active');
});


$('.fc2_item_title').on('click', function(){
  $(this).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');
});

$(document).ready(function(){
  
  $('.pref-add-fav').on('click', 'input', function(){
    $('.pref-add-fav').find('.fa-star-o').removeClass('fa-star-o').addClass('fa-star fa-star-yellow');
    console.log($(this));
    $('.pref-add-fav').find('input').prop('checked', false);
    $(this).prop('checked', true);
  });
  
  $('.pref-add-fav .js-star').on('click', function(){
    $(this).addClass('fa-star-o').removeClass('fa-star fa-star-yellow');
    $('..pref-add-fav input').prop('checked', false);
    console.log('test');
  })
  
  
  /*CAROUSEL*/
  $('.carousel').carousel({
    interval: 0
  });
    
  $('.js-prev-carousel').on('click', function(){
    $('.carousel').carousel('prev');
    $('.js-next-carousel').find('i').removeClass('hide');
    $(this).find('i').addClass('hide');
    $(this).next().find('.active').addClass('hide').removeClass('active').prev().addClass('active').removeClass('hide');
  });
  
  $('.js-next-carousel').on('click', function(){
    $('.carousel').carousel('next');
    $('.js-prev-carousel').find('i').removeClass('hide');
    $(this).find('i').addClass('hide');
    $(this).prev().find('.active').addClass('hide').removeClass('active').next().addClass('active').removeClass('hide');
  });
  
  
  $('.fc2_param_notif p').on('dblclick', function(){
    $(this).toggleClass('expanded');
  })
  
  /*DELETE SAT*/
  $('.js-delete-sat').on('click', function(){
    $('.row.fc2_preferences_item.highlight').remove();
  });
  
  $('.js-edit-sat').on('click', function(){
    $('.editable-comment').attr('contenteditable', true).focus();
  });
  
  $('.editable-comment').on('blur', function(){
    $('.editable-comment').attr('contenteditable', false);
  });
  
  var editMode = false;
  
  $('.js-edit-comment-pref').on('click', function(){
    commentText = $('.editable-comment-pref').text();
    editMode = true;
    console.log(editMode);
    $('.modal-add-comment').find('textarea').val(commentText);
    $('.modal-add-comment').modal('show');
  });
  
  $('.js-delete-this-comment-pref').on('click', function(){
    $(this).closest('.fc2_param_notif').remove();
  });
  
  $('.js-save-edit-comment').on('click', function(){
    console.log(editMode);
    if (editMode){
      $('.editable-comment-pref').text($('.modal-add-comment').find('textarea').val());
      // console.log($('.editable-comment-pref').closest('.fc2_param_notif'))
      $('.editable-comment-pref').closest('.fc2_param_notif').attr('data-original-title', $('.editable-comment-pref').text());
    }
  })
  
  /*reset modal*/
  $('.modal-add-comment').on('hidden.bs.modal', function (e) {
    $('.modal-add-comment').find('textarea').val('');
  });
  

  
})


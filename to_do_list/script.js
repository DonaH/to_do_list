$(function(){
  var $mySpan = $('span')
  $mySpan.hover(function(){
    $(this).toggleClass('highlight')
  })
})

  $('body').on('click','.glyphicon-star', function(){
    $(this).toggleClass('active')
  })
  //'input[type=checkbox]'
  //var.each(function(el){console.log(index, element)})

$(function(){
  $('.btn').click(function() {
    $('.list').append('<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>'+$('#todo').val()+'</span><i class="glyphicon glyphicon-remove"></i></p>')
    //console.log($('#todo').val())
    event.preventDefault()

    $('#todo').val('')
    })
    })


  // event.preventDefault()

  // <div class="list">
  //   <p>
  //     <input type="checkbox">
  //     <i class="glyphicon glyphicon-star"></i>
  //     <span>Brie</span>
  //     <i class="glyphicon glyphicon-remove"></i>
  //   </p>

// $('p').children('span').text('new-dynamic-text')


// $(function(){
//   var addItem = $('#todo').val();
//   console.log(addItem);
//     //event.preventDefault();
//     if (addItem !== '') {
//       $(addItem).prepend('.list'+ '<p>'+'</p>')
//     }
//     //$('.glyphicon glyphicon-remove').unbind('click');
//     $('.glyphicon-remove').click(function() {
//       var completed = $(this).parent().parent();
//       completed.toggleClass('checked');
//     })
//
//   })
  // $('button').click(function(){
  //   event.preventDefault();

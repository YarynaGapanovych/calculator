'use strict'

$(document).ready(function () {

  let numOfMonth = 1

  $(document).on('input', '#duration', function () {
    let value = $(this).val()
    if (value == 1) {
      numOfMonth = 1
      $('li#month').addClass('active')

      $('li#half-year').removeClass('active')
      $('li#year').removeClass('active')
      $('li#ten-years').removeClass('active')
    }
    if (value == 2) {
      numOfMonth = 6
      $('li#half-year').addClass('active')

      $('li#month').removeClass('active')
      $('li#year').removeClass('active')
      $('li#ten-years').removeClass('active')
    }
    if (value == 3) {
      numOfMonth = 12
      $('li#year').addClass('active')

      $('li#month').removeClass('active')
      $('li#half-year').removeClass('active')
      $('li#ten-years').removeClass('active')
    }
    if (value == 4) {
      numOfMonth = 120
      $('li#ten-years').addClass('active')

      $('li#month').removeClass('active')
      $('li#year').removeClass('active')
      $('li#half-year').removeClass('active')
    }
  });

  $('#duration').mousemove(function () {

    $('#result').val(($('#range').val() * (1 + (0.04 * numOfMonth))));
  });

  $('#output').val($('#range').val());

  $('#range').mousemove(function () {
    $('#output').val($('#range').val());
  });

  $('#output').change(function () {
    $('#range').val($('#output').val());
  });

  $('#result').val((
    $('#range').val() * (1 + (0.04 * numOfMonth))
  ));

  $('#range').mousemove(function () {
    $('#result').val(($('#range').val() * (1 + (0.04 * numOfMonth))));
  });

  $('#output').change(function () {
    $('#result').val(($('#output').val() * (1 + (0.04 * numOfMonth))));
  });


  // 

  var sheet = document.createElement('style'),
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

  document.body.appendChild(sheet);

  const getTrackStyle = function (el) {
    var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';

    // Set active label
    $('.range-labels li').removeClass('active selected');

    var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

    curLabel.addClass('active selected');
    curLabel.prevAll().addClass('selected');

    // Change background gradient
    for (var i = 0; i < prefs.length; i++) {
      style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
      style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
    }

    return style;
  }

  $rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  $('.range-labels li').on('click', function () {
    var index = $(this).index();

    $rangeInput.val(index + 1).trigger('input');

  });

})
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

})
'use strict'

$(document).ready(function () {

  let numOfMonth = 1

  $(document).on('input', '#duration', function () {
    $('#slider_value').html($(this).val() + ' месяцев');
    numOfMonth = $(this).val()
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
'use strict'

$(document).ready(function(){
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: 'http://localhost:3003/me',
    success: function(data) {
      $('body').append(data)
    }
  })
})
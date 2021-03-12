var score = 0;
$('button').click(function() {
  $('#shot').addClass('shot-animation');
  $('#shot').one('animationend', function() {
    if (collision($('#shot'), $('#bar'))) {
      
      var audio = document.getElementById("collision-sound");
      audio.play();
      $('#bar').addClass('bar-flash');
      $('#bar').one('animationend', function(e) {
        if (e.originalEvent.animationName === 'flash') {
          $('#bar').removeClass('bar-flash');
        }
      });
      ++score;
      $('#score').text(score);
      if (score === 10) {
         $('#bar').removeClass('bar-animation');
         $('#bar').addClass('bar-animation-2');
      }
    }
    $('#shot').removeClass('shot-animation');
  });
});

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}
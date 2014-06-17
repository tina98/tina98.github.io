$(document).ready(function(){


  //draw the line
  function drawLine(container, line){
    
    var pathLength = line.getTotalLength();
      var  maxScrollTop = $(document).height() - $(window).height();
      var  percentDone = $(window).scrollTop() / maxScrollTop;
       var length = percentDone * pathLength;
    line.style.strokeDashArray = [ length ,pathLength].join(' ');
  }

  $(window).scroll(function() {
    drawLine( $('#route'),
              $('#path') );
  });
  
  // // init the line length
  //   drawLine( $('#route'),
  //             document.getElementById('path') );


  
});

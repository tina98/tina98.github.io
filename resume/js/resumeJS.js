// $(document).ready(function(){


//   //draw the line
//   function drawLine(container, line){
    
//     var pathLength = line.getTotalLength();
//       var  maxScrollTop = $("body").height() - $(window).height();
//       var  percentDone = $(window).scrollTop() / maxScrollTop;
//       var length = percentDone * pathLength;
//     line.style.strokeDashArray = [ length ,pathLength].join(' ');
//   }

//   $(window).scroll(function() {
//     drawLine( $('#route'),
//               $('#path') );
//   });
  
//   // // init the line length
//   //   drawLine( $('#route'),
//   //             document.getElementById('path') );


  
// });
// $(document).ready(function(){

//   $(window).scroll(function() {
//     drawLine( $('#route'),
//               document.getElementById('path') );
//   });
  
//   // init the line length
//     drawLine( $('#route'),
//               document.getElementById('path') );

//   //draw the line
//   function drawLine(container, line){
    
//     var pathLength = line.getTotalLength(),
//         maxScrollTop = $(document).height() - $(window).height(),
//         percentDone = $(window).scrollTop() / maxScrollTop,
//         length = percentDone * pathLength;
//     line.style.strokeDasharray = [ length ,pathLength].join(' ');
//   }
  
// });
$(document).ready(function(){
//On scroll call the draw function
$(window).scroll(function() {
    drawLines();
});

//If you have more than one SVG per page this will pick it up
function drawLines(){
    $.each($("path"), function(i, val){
      var line = val;
      drawLine($(this), line);
    });
}

//draw the line
function drawLine(container, line){
  var length = 0;
  var pathLength = line.getTotalLength();
  var distanceFromTop = container.offset().top - $(window).scrollTop();
  var percentDone = 1 - (distanceFromTop / $(window).height());
  length = percentDone * pathLength;
  line.style.strokeDasharray = [length,pathLength].join(' ');
  console.log("strokeDasharray: "+[length,pathLength].join(' '));
}
})

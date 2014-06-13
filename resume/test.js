$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 500);
    
      event.preventDefault();

   });

});

$(function() {
			$("html, body").mousewheel(function(event, delta) {
				this.scrollLeft -= (delta * 30);
				event.preventDefault();
			});
		});
// function work(){
// document.getElementById("doot").innerHTML="wiiiiiirsjdkf";
// }

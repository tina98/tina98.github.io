var infos=["#homeInfo", "#hwInfo", "#curisInfo", "#rsiInfo", "#tcInfo", "#roverInfo", "#me203Info", "#me210Info", "#sunCarInfo"];
function disp(a){
    $('div').not(a+", #wrapper, #main, #mainPicture").hide();
    $("#wrapper").fadeIn();
    $(a).fadeIn();
}
$(document).ready(function(){
    $("#helloWorld").click(function(){
        disp("#hwInfo");
        
    });
    $("#title").click(function(){disp("#homeInfo");});
    $("#tc").click(function(){disp("#tcInfo");});
    $("#me203").click(function(){disp("#me203Info");});
    $("#me210").click(function(){disp("#me210Info");});
    $("#rsi").click(function(){disp("#rsiInfo");});
    $("#solarCar").click(function(){disp("#sunCarInfo");});
    $("#curis").click(function(){disp("#curisInfo");});
    $("#rover").click(function(){disp("#roverInfo");});
});

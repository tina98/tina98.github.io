var infos=["#homeInfo", "#hwInfo", "#curisInfo", "#rsiInfo", "#tcInfo", "#roverInfo", "#me203Info", "#me210Info", "#sunCarInfo"];
function disp(a){
    $('div').not(a+", #wrapper, #main, #mainPicture").hide();
     $("#mainPic").hide();
    if ($(a).is("#homeInfo")){
        $("#mainPic").css("border-radius", "50%");
    } else {
        $("#mainPic").css("border-radius", "0");
    }
    $("#wrapper").fadeIn();
    $(a).fadeIn();
    $("#mainPic").fadeIn();
}
$(document).ready(function(){
    $("#helloWorld").click(function(){
        disp("#hwInfo");
        $("#mainPic").attr("src","../img/helloWorld.png");
    });
    $("#title").click(function(){
        disp("#homeInfo");
        $("#mainPic").attr("src","../img/tina.jpg");
    });
    $("#tc").click(function(){
        disp("#tcInfo");
        $("#mainPic").attr("src","../img/tc.png");
    });
    $("#me203").click(function(){
        disp("#me203Info");
        $("#mainPic").attr("src","../img/me203.png");
    });
    $("#me210").click(function(){
        disp("#me210Info");
        $("#mainPic").attr("src","../img/me210.png");
    });
    $("#rsi").click(function(){
        disp("#rsiInfo");
        $("#mainPic").attr("src","../img/rsi.png");
    });
    $("#solarCar").click(function(){
        disp("#sunCarInfo");
        $("#mainPic").attr("src","../img/solarCar.png");
    });
    $("#curis").click(function(){
        disp("#curisInfo");
        $("#mainPic").attr("src","../img/curis.png");
    });
    $("#rover").click(function(){
        disp("#roverInfo");
        $("#mainPic").attr("src","../img/rover.png");
    });
});

function kudeatzaileakHasieratu()
{

var hiria;
var kopapena = document.getElementById("kokapena");

kokapena.onchange =function(){
console.log(this.options[this.selectedIndex].value)
hiria=this.options[this.selectedIndex].text;
if(this.options[this.selectedIndex].value!=""){
var helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.options[this.selectedIndex].value+",es&units=metric&cnt=3&APPID=4437c395e63f02a352a425460ef6b57c";

$.ajax({url:helbidea,success:function(result){
  datuakErakutsi(result);


  }});
}
$("#emaitza div").remove();
$("#emaitza p").remove();
$("#emaitza h2").remove();
$("#emaitza h3").remove();
$("#emaitza h4").remove();
}
var egunak=["Gaur","Bihar","Etzi"]
var datuakErakutsi=function(result){
  $("#emaitza div").remove();
  $("#emaitza p").remove();
  $("#emaitza h2").remove();
  $("#emaitza h3").remove();
  $("#emaitza h4").remove();
$("#emaitza").append("<h2>"+hiria+"<h2>");
  for(e in result.list){
    if(e==0){
        $("#emaitza").append("<div class="+egunak[e]+"><h4>Tenperaturak</h4><p><b> Unekoa: </b>"+result.list[e].temp.day+"º  <b> Max: </b>"+result.list[e].temp.max+"º  <b> Min: </b>"+result.list[e].temp.min+"º  </p></div>");
    }else{
      //append-ek ezdu uztez div bat bitan banatzen... hau da errazago ulertzeko datuak append ezberdinen bidez sartzen
        $("#emaitza").append("<div class="+egunak[e]+"><h3>"+egunak[e]+"</h3><h4>Tenperaturak:</h4><p><b> Max: </b>"+result.list[e].temp.max+"º  <b> Min: </b>"+result.list[e].temp.min+"º  </p><h4>Eguraldia:</h4><p><b> Orokorra: </b>"+result.list[e].weather[0].main+"<b> Deskribapena: </b>"+result.list[e].weather[0].description+"</p></div>");
}
  }

//  $("#emaitza").html("Kontsulta ondo burutu da:"+ emaitza );
}

}
window.onload = kudeatzaileakHasieratu;

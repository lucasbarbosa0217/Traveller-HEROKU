const lista = document.getElementById("listaTemp");
var htmlDaLista = "";
var diasTimeStamp;
fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=-23.5489&lon=-46.638823&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e"
)
  .then((data) => data.json())
  .then((data) => {
    console.log(data)
    diasTimeStamp = data.daily.map((obj) =>
    new Date(obj.dt*1000).toLocaleDateString()
   );
  const dataset = data.daily.map((obj) => (Math.round((obj.temp.min + obj.temp.max) / 2 )));
  dataset.forEach((element,index) => {
var cor=""
    if(element > 35) {
      cor = "#b81616"
  }else if(element > 30){ cor = "#b85416"}
  else if(element > 25) {cor = "#e0b909"}
  else if (element > 20) {cor = "#86e009"}
  else if (element > 15) {cor = "#09d5e0"}
  else if(element > 5) {cor = "#6eccf5"}
  else if(element > -5) {cor = "#9ddefa"}
  else if(element > -15) {cor = "#dcf7f7"}
  else {cor = "#cecece"}


    htmlDaLista = htmlDaLista + "<div class=\"tempGeral\" style=\"border:0.5rem solid"+cor+"\">"+"<div class=\"classTemp\">"+element+"º</div><br><div class=\"classDate\">"+diasTimeStamp[index].substring(5, -1)+"</div></div>";

  });
  lista.innerHTML = htmlDaLista

});
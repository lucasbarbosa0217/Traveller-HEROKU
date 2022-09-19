
var htmlList = "";
var star=`   <span id="rateMe">
<i class="fas fa-star py-2 px-1 yellowClr" data-index="0" data-html="true" data-toggle="popover"
  data-placement="top" title="Very bad"></i>
<i class="fas fa-star py-2 px-1 yellowClr" data-index="1" data-html="true" data-toggle="popover"
  data-placement="top" title="Poor"></i>
<i class="fas fa-star py-2 px-1 yellowClr" data-index="2" data-html="true" data-toggle="popover"
  data-placement="top" title="OK"></i>
<i class="fas fa-star py-2 px-1 yellowClr" data-index="3" data-html="true" data-toggle="popover"
  data-placement="top" title="Good"></i>
<i class="fas fa-star py-2 px-1 yellowClr" data-index="4" data-html="true" data-toggle="popover"
  data-placement="top" title="Excellent"></i>
(1872)
</span>`;

const listahotel = document.getElementById("hoteisProximos");
const city= document.getElementById("city");

const chamarApi = () => {
    
  const success = (position) => {
      
      const { latitude, longitude } = position.coords;
      fetch(`https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG`)
      .then((local) => local.json())
      .then((local)=>
        city.innerHTML = local.addresses[0].address.municipality
      )

      fetch(`https://api.tomtom.com/search/2/categorySearch/hotel.json?key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG&lat=${latitude}&lon=${longitude}`)
      .then((data) => data.json())
      .then((data)=> {
        console.log(data.results)
        dias = data.results.map((obj) => {
          
        nomehotel = obj.poi.name;
        htmlList=htmlList+`
        <div class=\"card hotel\">
        <img src=\"img/hotel1.png\"/>
        <div class=\"textcard\">
        <h4>${nomehotel}</h4>${star} 
        <p>${obj.address.municipality}, ${obj.address.countrySubdivision}</p>
        <p class="description">Wi-Fi gratuito &#9679; Café da manhã incluso &#9679; Acessibilidade &#9679; Recepção 24h</p>
            <p></p>
               <p class="price"><b>R$ 287</b>/noite<p></p>
            <a href="" class="btn btn-primary blueClr">COMPRAR INGRESSO</a>
            </div>
        </div>
        `;
        listahotel.innerHTML=htmlList;
      
      }
       );
      
      });
     
  };

  const errorPosicion = (error) => {
      window.alert("Erro ao requisitar localização")
  };

  navigator.geolocation.getCurrentPosition(success, errorPosicion);
};

const verificarGeo = () => {
  if (!navigator.geolocation) {
    window.alert("Navegador não suporta geolocalização")

      return;
  }
  // Se suportar, chamar a localização
  chamarApi();
};

verificarGeo();




'https://api.tomtom.com/search/2/reverseGeocode/37.553,-122.453.json?key={Your_API_Key}'





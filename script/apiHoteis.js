
var htmlList = "";
var starquantity ="";
var star=`   <span id="rateMe"> ${starquantity}`;

const listahotel = document.getElementById("hoteisProximos");
const city= document.getElementById("city");
const city2= document.getElementById("city2");

var ratePlaceholder = 5;
const chamarApi = () => {
    
  const success = (position) => {
      
      const { latitude, longitude } = position.coords;
      fetch(`https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG`)
      .then((local) => local.json())
      .then((local)=>{
        city.innerHTML = local.addresses[0].address.municipality;
        city2.innerHTML = local.addresses[0].address.municipality;

      }
      )

      fetch(`https://api.tomtom.com/search/2/categorySearch/hotel.json?key=pqz88PV1QgzBDAi8nGy8oaYhKga3vUMG&lat=${latitude}&lon=${longitude}`)
      .then((data) => data.json())
      .then((data)=> {
       
        console.log(data.results)
        dias = data.results.map((obj) => {
          
          for(var i = 0; i< Math.round(ratePlaceholder); i=i+1){
            starquantity = starquantity + `<i class="fas fa-star py-2 px-1 yellowClr" title="star icon"
            data-placement="top" ></i>`;
          }
          if(Math.round(ratePlaceholder) < 5) {
            for(var i = 0; i< (5-Math.round(ratePlaceholder)); i=i+1){
              starquantity = starquantity + `<i class="fas fa-star py-2 px-1 grayClr" title="star icon"
              data-placement="top" ></i>`;
              console.log(starquantity)
            }
          }
         star=`  <span id="rateMe"> ${starquantity}`;
         starquantity = "";
        nomehotel = obj.poi.name;
        htmlList=htmlList+`
        <li class="list-unstyled">
        <div class=\"card hotel\">
        <img src=\"img/hotel1.png\"/>
        <div class=\"textcard\">
        <h4>${nomehotel}</h4>${star}(${ratePlaceholder}) </span>
        <p>${obj.address.municipality}, ${obj.address.countrySubdivision}</p>
        <p class="description">Wi-Fi gratuito &#9679; Café da manhã incluso &#9679; Acessibilidade &#9679; Recepção 24h</p>
            <p></p>
               <p class="price"><b>R$ ${Math.floor(Math.random() * 600)}</b>/noite<p></p>
            <a href="hotel.html?${obj.id}" class="btn btn-primary blueClr">ACESSAR</a>
            </div>
        </div>
        </li>
        `;
        listahotel.innerHTML=htmlList;
        ratePlaceholder = ratePlaceholder - 0.2;
        ratePlaceholder = Math.round(ratePlaceholder * 10) / 10;
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









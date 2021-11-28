

$("button").on("click",function(){
    $(this).prev().slideToggle(300);
  });
  
  
  let i=0;

function imageReplace()
{
  const hola = document.getElementById('btn_he');
  const foto= ['nothehe','hehe'];
  const srcImg= $('#changeHehe').attr('src',`../public/img/${foto[i]}.png`);
  
if (i===0) {
  srcImg;
  hola.value= 'Hehe';
  i++;
}else{
  srcImg;
  hola.value= 'NotHehe';
  console.log(i);
  i=i - 1;
}
}

$.get("./navbar_footer/navbar.html", function (cos) {
  $("#nav-placeholder").replaceWith(cos);
});
$.get("test.html", function (cont) {
  $("#contenido").replaceWith(cont);
});
$.get("./navbar_footer/footer.html", function (data) {
  $("#footer-placeholder").replaceWith(data);
});


$(document).ready(function () {
  $("#submit").click(function (e) {

      

      var validate = Validate();
      $("#message").html(validate);
      if (validate.length == 0) {
          let randomNumber = Math.floor((Math.random() * 898) + 1);
         
          $.ajax({
              type: "GET",
              url: "https://pokeapi.co/api/v2/pokemon/" +  randomNumber,// $("#textBoxPoke").val() ,
              dataType: "json",
              success: function (result, status, xhr) {
                  let conteoTipos = Object.keys(result["types"]).length;
                  var table = $("<table><tr><th>Datos de tu Pokemon elegido</th></tr>");
                  let colorTipo = result["types"]["0"]["type"]["name"];  
                  console.log("Elemento 1 = " + colorTipo);
                  table.append("<tr><th>Nombre:</th><td>" + result["name"] + "</td></tr>");
                  if(conteoTipos ==2)
                  {
                    table.append("<tr><th>Elemento 1:</th><td>" + result["types"]["0"]["type"]["name"] + "</td></tr>");
                    table.append("<tr><th>Elemento 2:</th><td>" + result["types"]["1"]["type"]["name"] + "</td></tr>");
                    var nombreColor2 = result["types"]["1"]["type"]["name"];
                    console.log("Elemento 2 = " + nombreColor2);
                  }
                  else
                  {
                    table.append("<tr><th>Elemento 1:</th><td>" + result["types"]["0"]["type"]["name"] + "</td></tr>");
                  }


                  table.append("<tr><th>Id:</th><td>" + result["id"] + "</td></tr>");
                  let foto = result["sprites"]["front_default"]
                  

                  table.append("<tr><th>  Link foto </th><td>" + foto + "</td></tr>");   

                  const srcImg= $('#fotoPoke').attr('src',foto);  

              
                  

                  $("#message").html(table);
                  
                  switch(colorTipo)    {
                      case "normal" : $("th").css("background-color", "Lavender");
                      break;
                      case "fighting" :$("th").css("background-color", "Firebrick");
                      break;
                      case "flying":$("th").css("background-color", "rgb(116, 111, 161)");
                      break;
                      case "poison":$("th").css("background-color", "Mediumpurple");
                      break;
                      case "ground":$("th").css("background-color", "BurlyWood");
                      break;
                      case "rock":$("th").css("background-color", "Peru");
                      break;   
                      case "bug":$("th").css("background-color", "YellowGreen");
                      break;
                      case "ghost":$("th").css("background-color", "Purple");
                      break;
                      case "steel":$("th").css("background-color", "LightGrey");
                      break;
                      case "fire":$("th").css("background-color", "Crimson");
                      break;
                      case "water":$("th").css("background-color", "RoyalBlue");
                      break;
                      case "grass":$("th").css("background-color", "Lime");
                      break;
                      case "electric": $("th").css("background-color", "yellow");
                      break;
                      case "psychic":$("th").css("background-color", "Violet");
                      break;
                      case "ice":$("th").css("background-color", "AquaMarine");
                      break;
                      case "dragon":$("th").css("background-color", "MediumSlateBlue");
                      break;
                      case "dark":$("th").css("background-color", "SlateGray");
                      break;
                      case "fairy":$("th").css("background-color", "rgb(255, 136, 238)");
                      break;
                      case "unknown":$("th").css("background-color", "rgba(37, 35, 35, 0.966)");
                      break;
                      case "shadow" :$("th").css("background-color", "rgb(60, 0, 68)");
                      break;
                  }

                  //$("th").css("background-color", "yellow");
                   //alert("Background color = " + $("th").css("background-color"));

              },
              error: function (xhr, status, error) {
                  alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
              }
          });
      }
  });

  

  function Validate() {
      var errorMessage = "";
      if ($("#citySelect").val() == "Select") {
          errorMessage += "► Select City";
      }
      return errorMessage;
  }



  $("#cambioColor").click(function (e) {

    $("body").css("background", "black");

  });
  





});
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
  i=i - 1;
}
}



function maior(){
      let numero1 = parseFloat(document.getElementById('Numero1').value);
      let numero2 = parseFloat(document.getElementById('Numero2').value);

    if (numero1 > numero2){
      alert(numero1 + 'é maior do que' + numero2);
    }else if(numero2 > numero1){
        alert(numero2 + 'é maior do que ' + numero1);
    }else{
        alert(numero1 + 'é maior do que' + numero2);
    }    
}

function resultado(){
let select3 = document.getElementById('select3').value

  if (select3 == "m"){
    alert(select3 + "Sexo masculino");
  }else if (select3 == "f"){
    alert(select3 + "sexo feminino");
  }else {
    alert(select3 + "sexo inválido");
  }
  

}
function media(){
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);

  let media = (nota1 + nota2);

  if(media >= 7)
   if(media==10)
    alert("Aprovado com distinção");
   else
    alert("Parabens, aprovado! Media "+media);
  else
   alert("Reprovado!")
   
    
}
function check(){
  let letra = document.getElementById("char").value;
  
  if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
alert("Vogal");
else     
   alert("Consoante");
 }

  function maior(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = num1;
    var menor = num1;

    if(num2 > maior)
     maior = num2;
    if(num3 > maior)
     maior = num3;

    alert("Maior: "+maior);
   

   if(num2 < menor)
    menor = num2;
   if(num3 < menor) 
    menor = num3;

  alert("Menor:" +menor)
 
  }
  function conferir(){
    let turno = document.getElementById("turno").value;

    if(turno=='m')
    alert("matutino");
    else if(turno=='v')
    alert("vespertino");
    else if(turno=='n')
    alert("noturno");

  }
  function preço(){
    var p1 = parseInt(document.getElementById('preco1').value);
    var p2 = parseInt(document.getElementById('preco2').value);
    var p3 = parseInt(document.getElementById('preco3').value);

    if (p1 < p2 && p1 < p3)
    alert("voce deve comprar o produto1");
    else if (p2 < p1 && p2 < p3)
    alert("voce deve comprar o produto2");
    else if(p3 < p1 && p3 < p2)
    alert("voce deve comprar o produto3");
    
 
  }






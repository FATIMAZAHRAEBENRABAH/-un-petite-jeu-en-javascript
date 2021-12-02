var button= document.getElementById('button');
var numberRandom = Math.floor(Math.random() * 100) + 1;
console.log(numberRandom);


var counter=1;
function play(){
var number= parseInt(document.getElementById('number').value);
var resultat=document.getElementById('resultat');

if (number>numberRandom){
    resultat.innerText= "le nombre il est grand" ;counter +=1;
}

else if (number<numberRandom){
    resultat.innerText= "le nombre il est petite" ; counter +=1;
    if (counter==10)
    {counter=1; resultat.innerText ="game over";}
}

else if (number==numberRandom)
{ if(counter==3)
    {resultat.innerText= "Félicitations, vous avez gagné après" + " "+ counter + " " + "tentatives";
    }
 else{
     resultat.innerText= "Félicitations, vous avez gagné après" + " " + counter + " " + "tentatives";
 }

}
}
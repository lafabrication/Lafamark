let user=""

function login(){

user=document.getElementById("username").value

if(user!=""){

document.getElementById("loginBox").style.display="none"
document.getElementById("marketBox").style.display="block"

}

}

function publier(){

let produit=document.getElementById("produit").value
let prix=document.getElementById("prix").value
let image=document.getElementById("image").value
let description=document.getElementById("description").value

let div=document.createElement("div")

div.className="produit"

div.innerHTML=
"<img src='"+image+"'>"+
"<h3>"+produit+"</h3>"+
"<p>"+prix+" Ar</p>"+
"<p>"+description+"</p>"+
"<div class='actions'>"+
"<button onclick='acheter(\""+produit+"\")'>Acheter</button>"+
"<button onclick='supprimer(this)'>Supprimer</button>"+
"</div>"

document.getElementById("liste").appendChild(div)

}

function acheter(p){

alert("Commande envoyée pour : "+p)

}

function supprimer(btn){

btn.parentElement.parentElement.remove()

}

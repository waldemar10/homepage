const emailInput = document.getElementById('email');

const handleInput = () => {
  if (!emailInput.checkValidity()){
    return;
  }


let xhr = null;
if(window.XMLHttpRequest){
  xhr = new XMLHttpRequest;
}
else{
  return;
}
const url = 'Kontaktformula.php'
+emailInput.value;
xhr.open('GET', url, true);

xhr.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    if(this.responseText == 'OK'){
      document.getElementById('email').classList.add('hidden');
    }
      else{
        document.getElementById('email').classList.remove('hidden');

      }
    }
  };
  xhr.send();
  
}
//Funktioniert nicht 
/*window.onload = function(){
  var name = localStorage.getItem("name");
  if(name) {
    document.getElementById("form").style.display = "none";
  }
var form = document.getElementsByTagName("form")[0];
var input = document.getElementsByTagName("input")[0];
form.onsubmit = function(){
  localStorage.setItem("name", input.value);
}

var form2 = document.getElementsByTagName("form")[1];
form2.onsubmit = function(){
  localStorage.removeItem("name");
}
}

function setCookie(name){
  var datum = new Date();
  datum.setTime(datum.getTime() + 24*60*60*1000);
  var expires = datum.toUTCString();
  document.cookie = name + "="+"; expires="+ expires + ";path=/";
  }
  function getCookie(name) {
    var nameCookie = name + "=";
    var URICookie = decodeURIComponent(document.cookie);
    var getCookieName = URICookie.split(';');
    if(nameCookie == getCookieName){
        return nameCookie;
    }else{
        return "";
    }
  }
  function deleteCookie(name){
      document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }*/

 

// JavaScript source code
 function myFunction() {
        var x = document.getElementById("social_links");
        if (x.style.display === "block") {
        x.style.display = "none";
        } else {
        x.style.display = "block";
        
        }
        }
       
        window.onload = function(){
            var hatha_angemeldet = localStorage.getItem("check_hatha");
            var yinyang_angemeldet = localStorage.getItem("check_yinyang");
            var vinyasa_angemeldet = localStorage.getItem("check_vinyasayoga");
            var jivamukti_angemeldet = localStorage.getItem("check_jivamukti");
            var kundalini_angemeldet = localStorage.getItem("check_kundalini");
            var bikram_angemeldet = localStorage.getItem("check_bikram");
            var ashtanga_angemeldet = localStorage.getItem("check_ashtanga");
            var acro_angemeldet = localStorage.getItem("check_acro");
            var gutenmorgen_angemeldet = localStorage.getItem("check_gutenmorgen");
            var nidra_angemeldet = localStorage.getItem("check_nidra");

            var mode = document.getElementsByTagName("body")[0];
            var lightmode2 = getCookie("lightmode");
            var darkmode2 = getCookie("darkmode");
            var icon_arrow = document.getElementsByClassName("i_arrow_icon");
            var icon_mode = document.getElementsByClassName("i_darkmode_icon");
            var color_link = document.getElementsByClassName("color_light");
            var moon = document.getElementsByClassName("fa-moon");
            var sun = document.getElementsByClassName("fa-sun");
            var icon_social = document.getElementsByClassName("i_darkmode_icon_social");
            var button_responsive = document.getElementsByClassName("bkursStart_responsive");
            var button_kurse = document.getElementsByClassName("bkurse");
            var button_abmelden = document.getElementsByClassName("bkurse_abmelden");
            var button_anfänger = document.getElementsByClassName("button-anfänger");
            var button_fortgeschritten = document.getElementsByClassName("button-fortgeschritten");
            var button_experte = document.getElementsByClassName("button-experte");
            var button_zuhause = document.getElementsByClassName("button-zuhause");
            //Abfragen beim Laden der Seite ob eine Anmeldung === true ist
            if(yinyang_angemeldet === "true"){
                document.getElementById("b_1yin").style.display = "none";
                document.getElementById("b_2yin").style.visibility = "visible";
                document.getElementById("b_2yin").style.display= "block";
            }
            else if(hatha_angemeldet === "true"){
                document.getElementById("b_1").style.display = "none";
                document.getElementById("b_2").style.visibility = "visible";
                document.getElementById("b_2").style.display= "block";
            }else if(vinyasa_angemeldet === "true"){
                document.getElementById("b_1vinyasa").style.display = "none";
                document.getElementById("b_2vinyasa").style.visibility = "visible";
                document.getElementById("b_2vinyasa").style.display= "block";
            }else if(jivamukti_angemeldet === "true"){
                document.getElementById("b_1jivamukti").style.display = "none";
                document.getElementById("b_2jivamukti").style.visibility = "visible";
                document.getElementById("b_2jivamukti").style.display= "block";
            }else if(kundalini_angemeldet === "true"){
                document.getElementById("b_1kundalini").style.display = "none";
                document.getElementById("b_2kundalini").style.visibility = "visible";
                document.getElementById("b_2kundalini").style.display= "block";
            }else if(bikram_angemeldet === "true"){
                document.getElementById("b_1bikram").style.display = "none";
                document.getElementById("b_2bikram").style.visibility = "visible";
                document.getElementById("b_2bikram").style.display= "block";
            }else if(ashtanga_angemeldet === "true"){
                document.getElementById("b_1ashtanga").style.display = "none";
                document.getElementById("b_2ashtanga").style.visibility = "visible";
                document.getElementById("b_2ashtanga").style.display= "block";
            }else if(acro_angemeldet === "true"){
                document.getElementById("b_1acro").style.display = "none";
                document.getElementById("b_2acro").style.visibility = "visible";
                document.getElementById("b_2acro").style.display= "block";
            }else if(gutenmorgen_angemeldet === "true"){
                document.getElementById("b_1gutenmorgen").style.display = "none";
                document.getElementById("b_2gutenmorgen").style.visibility = "visible";
                document.getElementById("b_2gutenmorgen").style.display= "block";
            }else if(nidra_angemeldet === "true"){
                document.getElementById("b_1nidra").style.display = "none";
                document.getElementById("b_2nidra").style.visibility = "visible";
                document.getElementById("b_2nidra").style.display= "block";
            }
            //Abfragen ob ein Cookie für den Darkmode oder Lightmode existiert 
            if(lightmode2 != ""){
                mode.classList.remove("body-bg-darkmode");
                mode.classList.add("body-bg-lightmode");
                for(var k = 0;k<icon_social.length;k++){
                    icon_social[k].style.color = "black";
                    if(k<2 &&icon_arrow.length==2){  
                        icon_arrow[k].style.color = "black";
                    }
                }
                for(var i =0;i<icon_mode.length;i++){
                    icon_mode[i].style.color = "black";
                }
                for(var i = 0;i<moon.length;i++){
                    moon[i].style.display = "none";
                }
                for(var i = 0;i<sun.length;i++){
                    sun[i].style.display = "block";
                }
                for(var k = 0;k<color_link.length;k++){
                    color_link[k].style.color = "black";
                }
                for(var i = 0;i<button_responsive.length;i++){
                    button_responsive[i].style.color = "white";
                    button_responsive[i].style.background = "black";
                }
                for(var i = 0;i<button_kurse.length;i++){
                    button_kurse[i].style.color = "white";
                    button_kurse[i].style.background = "black";
                }
                for(var i = 0;i<button_abmelden.length;i++){
                   
                    button_abmelden[i].style.background = "black";
                }
                for(var i = 0;i<button_anfänger.length;i++){   
                    button_anfänger[i].style.background = "black";
                    button_anfänger[i].style.color = "white";
                }
                for(var i = 0;i<button_fortgeschritten.length;i++){  
                    button_fortgeschritten[i].style.background = "black";
                    button_fortgeschritten[i].style.color = "white"; 
                }
                for(var i = 0;i<button_experte.length;i++){  
                    button_experte[i].style.background = "black";
                    button_experte[i].style.color = "white";
                }
                for(var i = 0;i<button_zuhause.length;i++){  
                    button_zuhause[i].style.background = "black";
                    button_zuhause[i].style.color = "white";
                }
               
                 
            }
            else if(darkmode2 != ""){
                mode.classList.remove("body-bg-lightmode");
                mode.classList.add("body-bg-darkmode");
                for(var k = 0;k<icon_social.length;k++){
                    icon_social[k].style.color = "white";
                    if(k<2&&icon_arrow.length==2){
                        icon_arrow[k].style.color = "white";
                    }
                }
                for(var i =0;i<icon_mode.length;i++){
                    icon_mode[i].style.color = "white";
                }
                for(var i = 0;i<moon.length;i++){
                    moon[i].style.display = "block";
                }
                for(var i = 0;i<sun.length;i++){
                    sun[i].style.display = "none";
                }
                for(var k = 0;k<color_link.length;k++){
                    color_link[k].style.color = "white";
                }
                for(var i = 0;i<button_responsive.length;i++){
                    button_responsive[i].style.color = "black";
                    button_responsive[i].style.background = "white";
                }
                for(var i = 0;i<button_kurse.length;i++){
                    button_kurse[i].style.color = "black";
                    button_kurse[i].style.background = "white";
                }
                for(var i = 0;i<button_abmelden.length;i++){
                   
                    button_abmelden[i].style.background = "white";
                }
                for(var i = 0;i<button_anfänger.length;i++){   
                    button_anfänger[i].style.background = "white";
                    button_anfänger[i].style.color = "black";
                }
                for(var i = 0;i<button_fortgeschritten.length;i++){  
                    button_fortgeschritten[i].style.background = "white";
                    button_fortgeschritten[i].style.color = "black"; 
                }
                for(var i = 0;i<button_experte.length;i++){  
                    button_experte[i].style.background = "white";
                    button_experte[i].style.color = "black";
                }
                for(var i = 0;i<button_zuhause.length;i++){  
                    button_zuhause[i].style.background = "white";
                    button_zuhause[i].style.color = "black";
                }
                
            }
            //Falls der Cookie komplett leer ist, wird Darkmode als Standard dargestellt
            if(darkmode2 == "" && lightmode2 == ""){
                mode.classList.remove("body-bg-lightmode");
                mode.classList.add("body-bg-darkmode");
                for(var i = 0;i<moon.length;i++){
                    moon[i].style.display = "block";
                }
                for(var i = 0;i<sun.length;i++){
                    sun[i].style.display = "none";
                }
                for(var i =0;i<icon_mode.length;i++){
                    icon_mode[i].style.color = "white";
                }
                for(var i = 0;i<moon.length;i++){
                    moon[i].style.display = "block";
                }
                for(var i = 0;i<sun.length;i++){
                    sun[i].style.display = "none";
                }
                for(var k = 0;k<color_link.length;k++){
                    color_link[k].style.color = "white";
                }
                for(var i = 0;i<button_responsive.length;i++){
                    button_responsive[i].style.color = "black";
                    button_responsive[i].style.background = "white";
                }
                for(var i = 0;i<button_kurse.length;i++){
                    button_kurse[i].style.color = "black";
                    button_kurse[i].style.background = "white";
                }
                for(var i = 0;i<button_abmelden.length;i++){
                   
                    button_abmelden[i].style.background = "white";
                }
                for(var i = 0;i<button_anfänger.length;i++){   
                    button_anfänger[i].style.background = "white";
                    button_anfänger[i].style.color = "black";
                }
                for(var i = 0;i<button_fortgeschritten.length;i++){  
                    button_fortgeschritten[i].style.background = "white";
                    button_fortgeschritten[i].style.color = "black"; 
                }
                for(var i = 0;i<button_experte.length;i++){  
                    button_experte[i].style.background = "white";
                    button_experte[i].style.color = "black";
                }
                for(var i = 0;i<button_zuhause.length;i++){  
                    button_zuhause[i].style.background = "white";
                    button_zuhause[i].style.color = "black";
                }
                
            }
            
        }
        
        //Falls man auf anmelden klickt, wird der Inhalt weichgezeichnet und das Formular erscheint
    function anmelden(){

        var y = document.getElementsByClassName("filter_blur");
        var x = document.getElementsByClassName("kurs_anmeldung");
        if(check_anmeldung == true){
            document.getElementById("angemeldet").style.visibility = "visible";
            document.getElementById("button_anmeldung2").style.visibility = "visible";
        }
        for(var i =0;i<y.length;i++){
        y[i].style.filter = "blur(3px)";
         }
        for(var i =0;i<x.length;i++){
        x[i].style.visibility = "visible";
        }
        }    
        //Falls man auf abbrechen klickt, wird das Formular versteckt und die Weichzeichnung aufgehoben
        function abbrechen(){
            var y = document.getElementsByClassName("filter_blur");
            var x = document.getElementsByClassName("kurs_anmeldung");
            var button2 = document.getElementById("button_anmeldung2");
            document.getElementById("angemeldet").style.visibility = "hidden";
            button2.style.visibility = "hidden";
            for(var i =0;i<y.length;i++){
            y[i].style.filter = "blur(0px)";
        }
        for(var i =0;i<x.length;i++){
            x[i].style.visibility = "hidden";
            }
        }
        //Falls man auf Anmeldung klickt beim Formular, wird eine Abfrage durchgeführt
        var check_anmeldung = false;
        function anmeldung(){
            var abbrechen = document.getElementsByClassName("abbrechen");
            var error_agb = document.getElementById("error_agb");
            var error_name = document.getElementById("error_name");
            var error_email = document.getElementById("error_email");
            var names = document.getElementById("name");
            var email = document.getElementById("email");
            var agb = document.getElementById("check_agb");
            var checkagb = document.getElementById("text_anmeldung_checkagb");
            var r1 = document.getElementById("r1");
            var r2 = document.getElementById("r2");
            var r1_text = document.getElementById("text_anmeldung_r1");
            var r2_text = document.getElementById("text_anmeldung_r2");
            var agb_text = document.getElementById("text_anmeldung_agb");
            var name_text = document.getElementById("text_anmeldung_name");
            var email_text = document.getElementById("text_anmeldung_email");
            var bezahlmethode_text = document.getElementById("text_anmeldung_bezahlmethode");
            var button1 = document.getElementById("button_anmeldung1");
            var button2 = document.getElementById("button_anmeldung2");
           
            var error_message_name = [0];
            var error_message_email = [0];
            var error_message_agb = [0];
            var emailString = email.value;
            var checkName = false;
            var checkEmail = false;
            var checkAGB = false;
            if (names.value === "" || names.value == null){
                error_message_name[0] = "Dein Name fehlt"
            }
            if(error_message_name == 0){
                error_name.innerText = " ";
            }
            if(error_message_name.length>0 && error_message_name!= 0){
                error_name.innerText = error_message_name[0];
                error_name.style.visibility = "visible";
                checkName =true;
            }
            if (agb.checked == false){
                error_message_agb[0] = "Ankreuzen"
            }
            if(error_message_agb == 0){
                error_agb.innerText = " ";
            }
            if(error_message_agb.length>0 && error_message_agb!= 0){
                error_agb.innerText = error_message_agb[0];
                error_agb.style.visibility = "visible";
                checkAGB = true;
            }

            if(emailString.includes('@')){

            }else{
                error_message_email[0] = "Deine Email ist falsch"
            }
            if(error_message_email == 0){
                error_email.innerText = " ";
            }
            
            if(error_message_email.length>0 && error_message_email!=0){
                error_email.innerText = error_message_email[0];
                error_email.style.visibility = "visible";
                checkEmail = true;
            }
            if(checkAGB==false&&checkName==false&&checkEmail==false){
                names.style.visibility = "hidden";
                email.style.visibility = "hidden";
                agb.style.visibility = "hidden";
                checkagb.style.visibility = "hidden";
                r1.style.visibility = "hidden";
                r2.style.visibility = "hidden";
                r1_text.style.visibility = "hidden";
                r2_text.style.visibility = "hidden";
                agb_text.style.visibility = "hidden";
                name_text.style.visibility = "hidden";
                email_text.style.visibility = "hidden";
                bezahlmethode_text.style.visibility = "hidden";
                for(var k = 0;k<abbrechen.length;k++){
                    abbrechen[k].style.visibility = "hidden";
                }
                button1.style.visibility = "hidden";
                button2.style.visibility = "visible";
                //localStorage
                localStorage.setItem("names",names.value);
                  
                var name_angemeldet = localStorage.getItem("names");
                document.getElementById("angemeldet").innerText = "Du bist erfolgreich angemeldet " + name_angemeldet;
                check_anmeldung = true;

                if(window.location.href.includes('hathayoga')){
                localStorage.setItem("check_hatha",true);
                document.getElementById("b_1").style.display = "none";
                document.getElementById("b_2").style.display = "block";
                document.getElementById("b_2").style.visibility = "visible";
                }
                if(window.location.href.includes('yinyangyoga')){
                localStorage.setItem("check_yinyang",true);
                document.getElementById("b_1yin").style.display = "none";
                document.getElementById("b_2yin").style.display = "block";
                document.getElementById("b_2yin").style.visibility = "visible";
                }
                if(window.location.href.includes('vinyasayoga')){
                localStorage.setItem("check_vinyasayoga",true);
                document.getElementById("b_1vinyasa").style.display = "none";
                document.getElementById("b_2vinyasa").style.display = "block";
                document.getElementById("b_2vinyasa").style.visibility = "visible";
                }
                if(window.location.href.includes('jivamuktiyoga')){
                localStorage.setItem("check_jivamukti",true);
                document.getElementById("b_1jivamukti").style.display = "none";
                document.getElementById("b_2jivamukti").style.display = "block";
                document.getElementById("b_2jivamukti").style.visibility = "visible";
                }
                if(window.location.href.includes('kundalini')){
                localStorage.setItem("check_kundalini",true);
                document.getElementById("b_1kundalini").style.display = "none";
                document.getElementById("b_2kundalini").style.display = "block";
                document.getElementById("b_2kundalini").style.visibility = "visible";
                }
                if(window.location.href.includes('bikramyoga')){
                localStorage.setItem("check_bikram",true);
                document.getElementById("b_1bikram").style.display = "none";
                document.getElementById("b_2bikram").style.display = "block";
                document.getElementById("b_2bikram").style.visibility = "visible";
                }
                if(window.location.href.includes('ashtangayoga')){
                localStorage.setItem("check_ashtanga",true);
                document.getElementById("b_1ashtanga").style.display = "none";
                document.getElementById("b_2ashtanga").style.display = "block";
                document.getElementById("b_2ashtanga").style.visibility = "visible";
                }
                if(window.location.href.includes('acroyoga')){
                localStorage.setItem("check_acro",true);
                document.getElementById("b_1acro").style.display = "none";
                document.getElementById("b_2acro").style.display = "block";
                document.getElementById("b_2acro").style.visibility = "visible";
                }
                if(window.location.href.includes('gutenmorgenyoga')){
                localStorage.setItem("check_gutenmorgen",true);
                document.getElementById("b_1gutenmorgen").style.display = "none";
                document.getElementById("b_2gutenmorgen").style.display = "block";
                document.getElementById("b_2gutenmorgen").style.visibility = "visible";
                }                
                if(window.location.href.includes('yoganidra')){
                localStorage.setItem("check_nidra",true);
                document.getElementById("b_1nidra").style.display = "none";
                document.getElementById("b_2nidra").style.display = "block";
                document.getElementById("b_2nidra").style.visibility = "visible";
                } 
            
                
                
            }
            
            
        }
        //Falls man auf abmelden klickt, wenn man sich zuvor angemeldet hat
        function anmelden_abbrechen(){

            if(window.location.href.includes('hathayoga')){ 
            localStorage.removeItem("check_hatha");
            document.getElementById("b_2").style.visibility = "hidden";
            document.getElementById("b_2").style.display = "none";
            document.getElementById("b_1").style.display = "block";
            }
            if(window.location.href.includes('yinyangyoga')){
            localStorage.removeItem("check_yinyang");
            document.getElementById("b_2yin").style.visibility = "hidden";
            document.getElementById("b_2yin").style.display = "none";
            document.getElementById("b_1yin").style.display = "block";
                
                }
            if(window.location.href.includes('vinyasayoga')){   
            localStorage.removeItem("check_vinyasayoga");
            document.getElementById("b_2vinyasa").style.visibility = "hidden";
            document.getElementById("b_2vinyasa").style.display = "none";
            document.getElementById("b_1vinyasa").style.display = "block";
                    }
            if(window.location.href.includes('jivamukti')){    
            localStorage.removeItem("check_jivamukti");
            document.getElementById("b_2jivamukti").style.visibility = "hidden";
            document.getElementById("b_2jivamukti").style.display = "none";
            document.getElementById("b_1jivamukti").style.display = "block";
                        }
            if(window.location.href.includes('kundalini')){   
            localStorage.removeItem("check_kundalini");
            document.getElementById("b_2kundalini").style.visibility = "hidden";
            document.getElementById("b_2kundalini").style.display = "none";
            document.getElementById("b_1kundalini").style.display = "block";
            }
            if(window.location.href.includes('bikramyoga')){
            localStorage.removeItem("check_bikram");
            document.getElementById("b_2bikram").style.visibility = "hidden";
            document.getElementById("b_2bikram").style.display = "none";
            document.getElementById("b_1bikram").style.display = "block";
            }
            if(window.location.href.includes('ashtangayoga')){
            localStorage.removeItem("check_ashtanga");
            document.getElementById("b_2ashtanga").style.visibility = "hidden";
            document.getElementById("b_2ashtanga").style.display = "none";
            document.getElementById("b_1ashtanga").style.display = "block";
            }
            if(window.location.href.includes('acroyoga')){
            localStorage.removeItem("check_acro");
            document.getElementById("b_2acro").style.visibility = "hidden";
            document.getElementById("b_2acro").style.display = "none";
            document.getElementById("b_1acro").style.display = "block";
            } if(window.location.href.includes('gutenmorgenyoga')){
            localStorage.removeItem("check_gutenmorgen");
            document.getElementById("b_2gutenmorgen").style.visibility = "hidden";
            document.getElementById("b_2gutenmorgen").style.display = "none";
            document.getElementById("b_1gutenmorgen").style.display = "block";
            }
            if(window.location.href.includes('yoganidra')){
            localStorage.removeItem("check_nidra");
            document.getElementById("b_2nidra").style.visibility = "hidden";
            document.getElementById("b_2nidra").style.display = "none";
            document.getElementById("b_1nidra").style.display = "block";
            }
            window.location.reload();
            check_anmeldung = false;
        }
//Startseite: Button-Funktion für Hatha-Yoga 
function showButtonLeft() {
    
    document.getElementById('flex_startscreen1').style.flexDirection = "column";
    var x = document.getElementById('button_hatha');
    x.style.transform = "translateY(0px)";
    x.style.transform = "translateX(-50%)";
    x.style.left = "50%";
        x.style.opacity = 0;
        x.style.display = "flex";
        document.getElementById('button_vinyasa').style.display = "none";
        document.getElementById('button_gutenmorgenyoga').style.display = "none";
        var opCount = 0.1;
        var transformCount = -0.1;
        var timer = setInterval(function(){
            if (x.style.opacity >= 1){
                
                clearInterval(timer);
            }
            x.style.opacity = opCount;
            transformCount--;
            x.style.transform = "translate(-50%," + transformCount + "px)";
            x.style.left = "50%";
            x.style.filter = 'alpha(opacity=' + opCount * 100 + ")";
            opCount += opCount * 0.1;  
        },10)
        
        
  }
//Startseite: Button-Funktion für Vinyasa-Yoga 
  function showButtonMid() {
    document.getElementById('flex_startscreen2').style.flexDirection = "column";
    var x = document.getElementById('button_vinyasa');
    x.style.transform = "translateY(0px)";
    x.style.transform = "translateX(-50%)";
    x.style.left = "50%";
        x.style.opacity = 0;
        x.style.display = "flex";
    document.getElementById('button_hatha').style.display = "none";
    document.getElementById('button_gutenmorgenyoga').style.display = "none";
    var opCount = 0.1;
    var transformCount = -0.1;
        var timer = setInterval(function(){
            if (x.style.opacity >= 1){
                
                clearInterval(timer);
            }
            x.style.opacity = opCount;
            transformCount--;
            x.style.transform = "translate(-50%," + transformCount + "px)";
            x.style.left = "50%";
            x.style.opacity = opCount;
            x.style.filter = 'alpha(opacity=' + opCount * 100 + ")";
            opCount += opCount * 0.1;  
        },10)
  }
  //Startseite: Button-Funktion für GutenMorgenYoga 
  function showButtonRight() {
    document.getElementById('flex_startscreen3').style.flexDirection = "column";
    var x = document.getElementById('button_gutenmorgenyoga');
    x.style.opacity = 0;
    x.style.display = "flex";
    x.style.transform = "translateY(0px)";
    x.style.transform = "translateX(-50%)";
    x.style.left = "50%";
    document.getElementById('button_hatha').style.display = "none";
    document.getElementById('button_vinyasa').style.display = "none";
    var opCount = 0.1;
    var transformCount = -0.1;
        var timer = setInterval(function(){
            if (x.style.opacity >= 1){
                
                clearInterval(timer);
            }
            x.style.opacity = opCount;
            transformCount--;
            x.style.transform = "translate(-50%," + transformCount + "px)";
            x.style.left = "50%";
            x.style.filter = 'alpha(opacity=' + opCount * 100 + ")";
            opCount += opCount * 0.1;  
        },10)
  }

  //Darkmode & Lightmode Schalter mit Cookies
  
  function modeSwitch() {
      
    var mode = document.getElementsByTagName("body")[0];
    
    var icon_social = document.getElementsByClassName("i_darkmode_icon_social");
    var icon_mode = document.getElementsByClassName("i_darkmode_icon");
    var icon_arrow = document.getElementsByClassName("i_arrow_icon");
    var color_link = document.getElementsByClassName("color_light");
    var button_responsive = document.getElementsByClassName("bkursStart_responsive");
    var moon = document.getElementsByClassName("fa-moon");
    var sun = document.getElementsByClassName("fa-sun");
    var darkmode = getCookie("darkmode");
    var lightmode = getCookie("lightmode");
    var button_kurse = document.getElementsByClassName("bkurse");
    var button_abmelden = document.getElementsByClassName("bkurse_abmelden");
    var button_anfänger = document.getElementsByClassName("button-anfänger");
    var button_fortgeschritten = document.getElementsByClassName("button-fortgeschritten");
    var button_experte = document.getElementsByClassName("button-experte");
    var button_zuhause = document.getElementsByClassName("button-zuhause");
    //Setze auf Darkmode
      if(lightmode != "" && darkmode == ""){
        deleteCookie("lightmode");
        setCookie("darkmode");
        mode.classList.remove("body-bg-lightmode");
        mode.classList.add("body-bg-darkmode");

        //for schleifen, falls mehrere Klassen hinzugefügt werden
        for(var k = 0;k<icon_social.length;k++){
            icon_social[k].style.color = "white";
            if(k<2&&icon_arrow.length==2){
                icon_arrow[k].style.color = "white";
            }
        }
        for(var i =0;i<icon_mode.length;i++){
            icon_mode[i].style.color = "white";
        }
        for(var i = 0;i<moon.length;i++){
            moon[i].style.display = "block";
        }
        for(var i = 0;i<sun.length;i++){
            sun[i].style.display = "none";
        }
        for(var k = 0;k<color_link.length;k++){
            color_link[k].style.color = "white";
        }
        for(var i = 0;i<button_responsive.length;i++){
            button_responsive[i].style.color = "black";
            button_responsive[i].style.background = "white";
        }
        for(var i = 0;i<button_kurse.length;i++){
            button_kurse[i].style.color = "black";
            button_kurse[i].style.background = "white";
        }
        for(var i = 0;i<button_abmelden.length;i++){   
            button_abmelden[i].style.background = "white";
        }
        for(var i = 0;i<button_anfänger.length;i++){   
            button_anfänger[i].style.background = "white";
            button_anfänger[i].style.color = "black";
        }
        for(var i = 0;i<button_fortgeschritten.length;i++){  
            button_fortgeschritten[i].style.background = "white";
            button_fortgeschritten[i].style.color = "black"; 
        }
        for(var i = 0;i<button_experte.length;i++){  
            button_experte[i].style.background = "white";
            button_experte[i].style.color = "black";
        }
        for(var i = 0;i<button_zuhause.length;i++){  
            button_zuhause[i].style.background = "white";
            button_zuhause[i].style.color = "black";
        }
        
               
      }//Setze auf Lightmode
      else{
        deleteCookie("darkmode");
        setCookie("lightmode"); 
        mode.classList.remove("body-bg-darkmode");
        mode.classList.add("body-bg-lightmode");
       
        for(var k = 0;k<icon_social.length;k++){
            icon_social[k].style.color = "black";
            if(k<2 &&icon_arrow.length==2){  
                icon_arrow[k].style.color = "black";
            }
        }
        for(var i =0;i<icon_mode.length;i++){
            icon_mode[i].style.color = "black";
        }
        for(var i = 0;i<moon.length;i++){
            moon[i].style.display = "none";
        }
        for(var i = 0;i<sun.length;i++){
            sun[i].style.display = "block";
        }
        for(var k = 0;k<color_link.length;k++){
            color_link[k].style.color = "black";
        }
        for(var i = 0;i<button_responsive.length;i++){
            button_responsive[i].style.color = "white";
            button_responsive[i].style.background = "black";
        }
        for(var i = 0;i<button_kurse.length;i++){
            button_kurse[i].style.color = "white";
            button_kurse[i].style.background = "#181818";
        }
        for(var i = 0;i<button_abmelden.length;i++){
            button_abmelden[i].style.background = "black";
        }
        for(var i = 0;i<button_anfänger.length;i++){   
            button_anfänger[i].style.background = "black";
            button_anfänger[i].style.color = "white";
        }
        for(var i = 0;i<button_fortgeschritten.length;i++){  
            button_fortgeschritten[i].style.background = "black";
            button_fortgeschritten[i].style.color = "white"; 
        }
        for(var i = 0;i<button_experte.length;i++){  
            button_experte[i].style.background = "black";
            button_experte[i].style.color = "white";
        }
        for(var i = 0;i<button_zuhause.length;i++){  
            button_zuhause[i].style.background = "black";
            button_zuhause[i].style.color = "white";
        } 
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
  }





  
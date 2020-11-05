function jugarahora(){
document.getElementById("pparaacoltar").style.display = 'none';  
document.getElementById("textloquevaapostar").style.display = 'block';
document.getElementById("botonoculto").style.display = 'block'; 

document.getElementById("boton").style.display="none";  
document.getElementById("boton1").style.display="none";  

}
function getRndIntegernumberone() {
    return Math.floor(Math.random() * 7)+1;
  }
  function getRndIntegernumbertwo() {
    return Math.floor(Math.random() * 7)+1;
  }
function retirarse(){
    document.getElementById("textApostar").innerHTML=" ";
    document.getElementById("textloquevaapostar").innerHTML=" ";
}
function lanzardados(){
    
let dineroDisponible = document.getElementById("textApostar").value;
let DineroApostado = document.getElementById("textloquevaapostar").value;
let valor1ramdom = getRndIntegernumberone();
let valor2ramdom = getRndIntegernumbertwo();
let dadototal = valor1ramdom+valor2ramdom;
let ganado = dineroDisponible+DineroApostado;

if((dadototal ==7)||(dadototal==11)){


document.getElementById("boton").style.display="block";  
document.getElementById("boton1").style.display="block";
document.getElementById("botonoculto").style.display = 'none'; 
document.getElementById("pparaacoltar").style.display = 'block';  
document.getElementById("textloquevaapostar").style.display = 'none';

document.getElementById("p1").innerHTML="Ganaste";
document.getElementById("p2").innerHTML="AJUAAAAA";
document.getElementById("p3").innerHTML=`Saldo total: ${ganado}` 

}else{
    if((dadototal==2)||(dadototal==3)||(dadototal==12)){
    let perdido = dineroDisponible-DineroApostado;

    document.getElementById("boton").style.display="block";  
    document.getElementById("boton1").style.display="block";
    document.getElementById("botonoculto").style.display = 'none'; 
    document.getElementById("pparaacoltar").style.display = 'block';  
    document.getElementById("textloquevaapostar").style.display = 'none';
    let dineroDisponible = document.getElementById("textApostar").value;
    let DineroApostado = document.getElementById("textloquevaapostar").value;
    document.getElementById("p1").innerHTML=`Saldo ${perdido} de ${dineroDisponible}. Perdiste ${DineroApostado}`;

}else{
    document.getElementById("boton1").style.display="none";  
    document.getElementById("p1").innerHTML=`El punto es: ${dadototal}`;
    for(let i=1;i<6;i++){
        if(i==1){
            let newvalor1ramdom = getRndIntegernumberone();
            let newvalor2ramdom = getRndIntegernumbertwo();
            let Punto = newvalor1ramdom+newvalor1ramdom;
            if(dadototal == Punto){
                document.getElementById("p3").innerHTML=`Ganaste`;
            }else{
                if(dadototal==7){
                    document.getElementById("p3").innerHTML=`Perdiste`;
                    break;
                }
            }
        }
        if(i==2){
            let newvalor1ramdom = getRndIntegernumberone();
            let newvalor2ramdom = getRndIntegernumbertwo();
            let Punto = newvalor1ramdom+newvalor1ramdom;
            if(dadototal == Punto){
                document.getElementById("p3").innerHTML=`Ganaste`;
            }else{
                if(dadototal==7){
                    document.getElementById("p3").innerHTML=`Perdiste`;
                    break;
                }
            }
        }
        if(i==3){
            let newvalor1ramdom = getRndIntegernumberone();
            let newvalor2ramdom = getRndIntegernumbertwo();
            let Punto = newvalor1ramdom+newvalor1ramdom;
            if(dadototal == Punto){
                document.getElementById("p3").innerHTML=`Ganaste`;
            }else{
                if(dadototal==7){
                    document.getElementById("p3").innerHTML=`Perdiste`;
                    break;
                }
            }
        }
        if(i==4){
            let newvalor1ramdom = getRndIntegernumberone();
            let newvalor2ramdom = getRndIntegernumbertwo();
            let Punto = newvalor1ramdom+newvalor1ramdom;
            if(dadototal == Punto){
                document.getElementById("p3").innerHTML=`Ganaste`;
            }else{
                if(dadototal==7){
                    document.getElementById("p3").innerHTML=`Perdiste`;
                    break;
                }
            }
        }
        if(i==5){
            let newvalor1ramdom = getRndIntegernumberone();
            let newvalor2ramdom = getRndIntegernumbertwo();
            let Punto = newvalor1ramdom+newvalor1ramdom;
            if(dadototal == Punto){
                document.getElementById("p3").innerHTML=`Ganaste`;
            }else{
                if(dadototal==7){
                    document.getElementById("p3").innerHTML=`Perdiste`;
                    break;
                }
            }
        }else{
            document.getElementById("p3").innerHTML=`Perdiste`;
        }
    }

}
}

}

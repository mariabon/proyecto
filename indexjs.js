var semana = 
[
 // ["7:00","Actividad Lunes ","Actividad MArtes","Actividad miercoles","Actividad Jueves","Actividad Viernes","7:Actividad Sabado","Actividad ddomingo"]
];



var normal = 
[
  //["7:00","Actividad ddia Lunes ","Actividad MArtes","Actividad miercoles","Actividad Jueves","Actividad Viernes","7:Actividad Sabado","Actividad ddomingo"]
];

actualiza();
actualizaDia();

function fsemana()
{
    var txt;

    var correcto = false; 
    
    do 
    {
      var uhora = prompt("Ingrese la hora ej (7:00 o 15:00)", "7:00");
      var ures = parseInt(uhora.replace(":", ""));
      //alert(validateHhMm(uhora));
      correcto = validateHhMm(uhora);
    }
    while (correcto == false);

    var diaCorrecto = false; 
    do 
    {
      var udia = prompt("Ingrese la dia ej (Lunes, Martes)", "Lunes");
      var numDia = numeroDeDia(udia);
      diaCorrecto = numDia;
    } while (diaCorrecto == false);
    

    var udescripcion = prompt("Ingrese la descripcion del evento");
    var maxSemana = semana.length;

    
    var existe  = false; 

    for (i = 0 ; i < maxSemana ; i++)
    {
      if(semana[i][0]==uhora)
      {
        semana[i][numDia]= udescripcion;
        existe = true; 
       // alert("existe"+semana[i][numDia]+"-"+i+"-"+numDia);
      }
    }
    if(existe==false)
    {
      switch (numDia) 
      {
        case 1:
            semana[maxSemana] = [uhora,udescripcion,"","","","","","",ures];
            break;
        case 2:
            semana[maxSemana] = [uhora,"",udescripcion,"","","","","",ures];
            break;
        case 3:
            semana[maxSemana] = [uhora,"","",udescripcion,"","","","",ures];
            break;
        case 4:
            semana[maxSemana] = [uhora,"","","",udescripcion,"","","",ures];
            break;
        case 5:
            semana[maxSemana] = [uhora,"","","","",udescripcion,"","",ures];
            break;
        case 6:
            semana[maxSemana] = [uhora,"","","","","",udescripcion,"",ures];
            break;
        case 7:
            semana[maxSemana] = [uhora,"","","","","","",udescripcion,ures];
        break;
      }

    }
    
    actualiza();
  actualizaDia();

}
function fdia()
{
    var txt;
    var correcto = false; 
    
    do 
    {
      var uhora = prompt("Ingrese la hora ej (7:00 o 15:00)", "7:00");
      var ures = parseInt(uhora.replace(":", ""));
      correcto = validateHhMm(uhora);
    }
    while (correcto == false);

    var diaCorrecto = false; 
    do 
    {
      var udia = prompt("Ingrese la dia ej (Lunes, Martes)", "Lunes");
      var numDia = numeroDeDia(udia);
      diaCorrecto = numDia;
    } while (diaCorrecto == false);

    var udescripcion = prompt("Ingrese la descripcion del evento");
    var maxDia = normal.length;

    var numDia = numeroDeDia(udia);
    var existe  = false; 

    for (i = 0 ; i < maxDia ; i++)
    {
      //alert(i+""+normal[i][0]);
      if(normal[i][0]==uhora)
      {
        normal[i][numDia]= udescripcion;
        existe = true; 
        
      }
    }
    if(existe==false)
    {
      //alert("No existe");
      switch (numDia) 
      {
        case 1:
            normal[maxDia] = [uhora,udescripcion,"","","","","","",ures];
            break;
        case 2:
            normal[maxDia] = [uhora,"",udescripcion,"","","","","",ures];
            break;
        case 3:
            normal[maxDia] = [uhora,"","",udescripcion,"","","","",ures];
            break;
        case 4:
            normal[maxDia] = [uhora,"","","",udescripcion,"","","",ures];
            break;
        case 5:
            normal[maxDia] = [uhora,"","","","",udescripcion,"","",ures];
            break;
        case 6:
            normal[maxDia] = [uhora,"","","","","",udescripcion,"",ures];
            break;
        case 7:
            normal[maxDia] = [uhora,"","","","","","",udescripcion,ures];
        break;
      }

    }
    
    actualiza();
  actualizaDia();
}

function nuevaSemana()
{
  normal = [];
  actualiza();
  actualizaDia();
}

function actualiza()
{
// HORARIO DE LA SEMANA HABITUAL
    ordenar(); 
    var myTableDiv = document.getElementById("myDynamicWeek"); 
    var table = document.createElement('TABLE');
    table.border = '1';
    var maxSemana = semana.length;
    semana.sort(sortFunction);
    

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);



    for (var i = 0; i < maxSemana; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 8; j++) {
            var td = document.createElement('TD');
            td.width = '200';
            td.appendChild(document.createTextNode(semana[i][j]));
            //alert(semana[i][j]);
            tr.appendChild(td);
        }
    }

    
    myTableDiv.innerHTML = "";
   myTableDiv.appendChild(table);
  table.setAttribute("class", "table table-dark table-hover");


}

function actualizaDia()
   {
    ordenar();
    
// HORARIO EXTRA DIA
    var maxDia = normal.length;
    //alert(maxDia);
    var myTableDiv2 = document.getElementById("myDynamicDay"); 
    var table2 = document.createElement('TABLE');
    table2.border = '3';

    var maxDia = normal.length;
    normal.sort(sortFunction);
    var tableBody2 = document.createElement('TBODY');
    table2.appendChild(tableBody2);

    for (var i = 0; i < maxDia; i++) {
        var tr = document.createElement('TR');
        tableBody2.appendChild(tr);

        for (var j = 0; j < 8; j++) {
            var td = document.createElement('TD');
            td.width = '200';
            td.appendChild(document.createTextNode(normal[i][j]));
            tr.appendChild(td);
        }
    }
    myTableDiv2.innerHTML = "";
    myTableDiv2.appendChild(table2);

    myTableDiv2.setAttribute("class", "table table-dark table-hover");
   }
function numeroDeDia(diaUpper)
{

  dia = diaUpper.toLowerCase();
  if(dia == "lunes")
  {
    return 1;
  }
  if(dia == "martes")
  {
    return 2;
  }
  if(dia == "miercoles")
  {
    return 3;
  }
  if(dia == "jueves")
  {
    return 4;
  }
  if(dia == "viernes")
  {
    return 5;
  }
  if(dia == "sabado")
  {
    return 6;
  }
  if(dia == "domingo")
  {
    return 7;
  }
  return false ;
}
function ordenar()
{

}
function validateHhMm(inputStr) 
{
  if (!inputStr || inputStr.length<1) {return false;}
    var time = inputStr.split(':');
    return time.length === 2 
           && parseInt(time[0],10)>=0 
           && parseInt(time[0],10)<=23 
           && parseInt(time[1],10)>=0 
           && parseInt(time[1],10)<=59;
}

function sortFunction(a, b) {

    if (a[8] === b[8]) {
        return 0;
    }
    else {
        return (a[8] < b[8]) ? -1 : 1;
    }
}
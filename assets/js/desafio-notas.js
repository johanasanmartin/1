/*HTML*/

var n1_html=document.getElementById("nota1-html");
var n2_html=document.getElementById("nota2-html");
var n3_html=document.getElementById("nota3-html");
var avg_html=document.getElementById("avg-html");  

var nota1HTML= parseInt (prompt("Ingrese la Nota 1 del html"));
var nota2HTML= parseInt (prompt("Ingrese la Nota 2 del html"));
var nota3HTML= parseInt (prompt("Ingrese la Nota 3 del html"));


n1_html.innerHTML = nota1HTML;
n2_html.innerHTML = nota2HTML;
n3_html.innerHTML = nota3HTML;
avg_html.innerHTML=((nota1HTML+nota2HTML+nota3HTML)/3).toFixed (2);

/*CSS*/
var n1_css=document.getElementById("nota1-css");
var n2_css=document.getElementById("nota2-css");
var n3_css=document.getElementById("nota3-css");
var avg_css=document.getElementById("avg-css");  

var nota1CSS= parseInt (prompt("Ingrese la Nota 1 del CSS"));
var nota2CSS= parseInt (prompt("Ingrese la Nota 2 del CSS"));
var nota3CSS= parseInt (prompt("Ingrese la Nota 3 del CSS"));

n1_css.innerHTML = nota1CSS;
n2_css.innerHTML = nota2CSS;
n3_css.innerHTML = nota3CSS;
avg_css.innerHTML=((nota1CSS+nota2CSS+nota3CSS)/3).toFixed (2);

/*JS*/
var n1_js=document.getElementById("nota1-js");
var n2_js=document.getElementById("nota2-js");
var n3_js=document.getElementById("nota3-js");
var avg_js=document.getElementById("avg-js");  

var nota1JS= parseInt (prompt("Ingrese la Nota 1 del JS"));
var nota2JS= parseInt (prompt("Ingrese la Nota 2 del JS"));
var nota3JS= parseInt (prompt("Ingrese la Nota 3 del JS"));

n1_js.innerHTML = nota1JS;
n2_js.innerHTML = nota2JS;
n3_js.innerHTML = nota3JS;
avg_js.innerHTML=((nota1JS+nota2JS+nota3JS)/3).toFixed (2);

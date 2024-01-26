var text=window.prompt("Как вас зовут?"); 

function time()
{	var d=new Date();/*Создание объекта d с текущим датой и временем*/
	var h=d.getHours();/*выделяет текущий час*/
	var m=d.getMinutes();/*тек. минута*/
	var s=d.getSeconds();/*тек. секунда*/
	if (h<10) document.getElementById('h').innerHTML='0'+h
	else document.getElementById('h').innerHTML=h;
	if (m<10) document.getElementById('m').innerHTML='0'+m
	else document.getElementById('m').innerHTML=m;
	if (s<10) document.getElementById('s').innerHTML='0'+s
	else document.getElementById('s').innerHTML=s;
	setTimeout('time()',1000)	
}


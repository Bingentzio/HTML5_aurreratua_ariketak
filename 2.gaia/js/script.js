function kudeatzaileakHasieratu()
{
	var irudia = document.getElementById("irudia");
	irudia.onclick = function()
	{
		alert("Irudian sakatu duzu");
	}

	var erabiltzaile = document.getElementById("erabiltzaile");
	erabiltzaile.value = 'zure@emaila';

	erabiltzaile.onblur = function(){
		if (erabiltzaile.value == ''){
			erabiltzaile.value = "zure@emaila";
		}
	}

	erabiltzaile.onfocus = function(){
		if (erabiltzaile.value == 'zure@emaila'){
			erabiltzaile.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change", zerrendaKud);

	function zerrendaKud(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	}

	var inprimaki = document.getElementById('inprimaki');
	inprimaki.onsubmit = function(){
		console.log("Submit botoia sakatu da");
		return false;
	}
	function clickKudeatzaile() {
alert('Kaixo');
}
var guraso = document.getElementById("main");
guraso.addEventListener("click", clickKudeatzaile);
guraso.removeEventListener(clickKudeatzaile);

}

window.onload = kudeatzaileakHasieratu;

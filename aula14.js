var btn = document.getElementById('cont');
btn.addEventListener('click', contar);

function contar(){
	var res = document.getElementById('res');
	var ini = document.getElementById('ini');
	var fim = window.document.getElementById('fim');
	var pas = window.document.getElementById('pas');
	
	if(ini.value == '' || fim.value == "" || pas.value == ''){
		alert ("Favor digitar todos valores");
	}
	else{
		ini = Number.parseInt(ini.value);
		fim = Number.parseInt(fim.value);
		pas = Number.parseInt(pas.value);
		res.innerHTML = ``;
		
		if (pas == 0){
			pas = 1;
			confirm ('Passo igual a 0, impossivel contar. Consideraremos passo como 1');
		}
		
		
		if (ini <= fim)
		{
			for(ini;ini<=fim;ini=ini+pas)
			{
				res.innerHTML +=  `${ini}  `;
				res.innerText += String.fromCodePoint(0x1F449);
			}
			res.innerText += String.fromCodePoint(0x26F3);	
		}
		else if (ini>=fim)
		{
			for (ini; ini >= fim; ini = ini - pas)
			{
				res.innerHTML +=  `${ini}  \u{1F449}`;
			}
			res.innerText += `\u{26F3}`;	
		}
	}
	
	/*
	while(ini < fim)
	{
		res.innerHTML += `${ini}`;
		ini = ini + pas;
	}
	*/
}
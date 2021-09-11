function combine() {
	txtList = document.querySelector('#txtList');
	txtOut1 = document.querySelector('#txtOut1').value.split('\n');
	txtOut2 = document.querySelector('#txtOut2').value.split('\n');
	splitter = document.querySelector('#txtSepC').value;
	txtList.value = '';
	i = 0
	len = txtOut2.length;
	console.log(1);
	txtOut1.forEach(element => {
		if (i >= len) { i = 0; }
		//if (element === '') { i++; continue; }
		str = element + splitter + txtOut2[i] + '\n'
		txtList.value += str;
	}
	);
};
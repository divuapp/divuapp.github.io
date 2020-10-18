document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('select');
	var instances = M.FormSelect.init(elems, {});
});

// Or with jQuery

$(document).ready(function () {
	$('select').formSelect();
});

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel carousel-slider');
//   var instances = M.Carousel.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
});


var inputs = {}
const HOST = `https://divu-back.herokuapp.com`
function trackChange(element) {
	id = element.id
	if (element.type == 'checkbox') {
		value = element.checked
	}
	else {
		value = element.value
	}
	inputs[id] = value
}

async function sendInfo() {
	let response = await fetch(HOST + '/info', {
        method: 'POST',
		body: JSON.stringify(inputs),
		mode: "cors",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': "*"
		  }

      });
	let result = await response.json()
	if(result['msg'] == 'OK'){
		location.href = 'https://divuapp.github.io/'
		alert('Cadastro realizado com sucesso!')
	}

}

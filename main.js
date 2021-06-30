let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

// Выпадающий ответ
let questions = document.getElementsByClassName('questions__click');

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		}
	})
}

let food__price = 0;
let cafe__price = 0;
let health__price = 0;
let animals__price = 0;
let clothes__price = 0;
let car__price = 0;
let home__price = 0;
let connection__price = 0;
let hygiene__price = 0;
let relax__price = 0;
let transport__price = 0;
let presents__price = 0;

let obj = {
	Еда: 0,
	Кафе: 0,
	Здоровье: 0,
	Питомцы: 0,
	Одежда: 0,
	Машина: 0,
	Дом: 0,
	Связь: 0,
	Гигиена: 0,
	Отдых: 0,
	Транспорт: 0,
	Подарки: 0,
}

let input  = document.querySelector('#input');

let add__food  = document.querySelector('#add__food');
let add__cafe  = document.querySelector('#add__cafe');
let add__health  = document.querySelector('#add__health');
let add__animals  = document.querySelector('#add__animals');
let add__clothes  = document.querySelector('#add__clothes');
let add__car  = document.querySelector('#add__car');
let add__home  = document.querySelector('#add__home');
let add__connection  = document.querySelector('#add__connection');
let add__hygiene  = document.querySelector('#add__hygiene');
let add__relax  = document.querySelector('#add__relax');
let add__transport  = document.querySelector('#add__transport');
let add__presents  = document.querySelector('#add__presents');

let flag__food = false;
let flag__cafe = false;
let flag__health = false;
let flag__animals = false;
let flag__clothes = false;
let flag__car = false;
let flag__home = false;
let flag__connection = false;
let flag__hygiene = false;
let flag__relax = false;
let flag__transport = false;
let flag__presents = false;

add__food.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__food.dataset.key;

		if(flag__food == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__food');

			createCell(tr, key, 'food');
			createCell(tr, +input.value, 'cost__food');
			createCell(tr, '', 'remove');

			// Очистка массива data
			clearData();

			food__price = +input.value;
			obj.Еда = food__price;

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();

			flag__food = true;
			input.value = '';
		} else {
			let cost__food = document.querySelector('.cost__food');
			food__price += +input.value;
			cost__food.innerHTML = food__price;
			obj.Еда = food__price;

			// Очистка массива data
			clearData();

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);

			// Отрисовка диаграммы
			drawGraph();

			// Перерасчёт итоговой стоимости
			recountTotal();

			input.value = '';
		}
	}
})

add__cafe.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__cafe.dataset.key;

		if(flag__cafe == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__cafe');
	
			createCell(tr, key, 'cafe');
			createCell(tr, +input.value, 'cost__cafe');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			cafe__price = +input.value;
			obj.Кафе = cafe__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__cafe = true;
			input.value = '';
		} else {
			let cost__cafe = document.querySelector('.cost__cafe');
			cafe__price += +input.value;
			cost__cafe.innerHTML = cafe__price;
			obj.Кафе = cafe__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__health.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__health.dataset.key;

		if(flag__health == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__health');
	
			createCell(tr, key, 'health');
			createCell(tr, +input.value, 'cost__health');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			health__price = +input.value;
			obj.Здоровье = health__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__health = true;
			input.value = '';
		} else {
			let cost__health = document.querySelector('.cost__health');
			health__price += +input.value;
			cost__health.innerHTML = health__price;
			obj.Здоровье = health__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__animals.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__animals.dataset.key;

		if(flag__animals == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__animals');
	
			createCell(tr, key, 'animals');
			createCell(tr, +input.value, 'cost__animals');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			animals__price = +input.value;
			obj.Питомцы = animals__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__animals = true;
			input.value = '';
		} else {
			let cost__animals = document.querySelector('.cost__animals');
			animals__price += +input.value;
			cost__animals.innerHTML = animals__price;
			obj.Питомцы = animals__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__clothes.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__clothes.dataset.key;

		if(flag__clothes == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__clothes');
	
			createCell(tr, key, 'clothes');
			createCell(tr, +input.value, 'cost__clothes');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			clothes__price = +input.value;
			obj.Одежда = clothes__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__clothes = true;
			input.value = '';
		} else {
			let cost__clothes = document.querySelector('.cost__clothes');
			clothes__price += +input.value;
			cost__clothes.innerHTML = clothes__price;
			obj.Одежда = clothes__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__car.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__car.dataset.key;

		if(flag__car == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__car');
	
			createCell(tr, key, 'car');
			createCell(tr, +input.value, 'cost__car');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			car__price = +input.value;
			obj.Машина = car__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__car = true;
			input.value = '';
		} else {
			let cost__car = document.querySelector('.cost__car');
			car__price += +input.value;
			cost__car.innerHTML = car__price;
			obj.Машина = car__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__home.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__home.dataset.key;

		if(flag__home == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__home');
	
			createCell(tr, key, 'home');
			createCell(tr, +input.value, 'cost__home');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			home__price = +input.value;
			obj.Дом = home__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__home = true;
			input.value = '';
		} else {
			let cost__home = document.querySelector('.cost__home');
			home__price += +input.value;
			cost__home.innerHTML = home__price;
			obj.Дом = home__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__connection.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__connection.dataset.key;

		if(flag__connection == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__connection');
	
			createCell(tr, key, 'connection');
			createCell(tr, +input.value, 'cost__connection');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			connection__price = +input.value;
			obj.Связь = connection__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__connection = true;
			input.value = '';
		} else {
			let cost__connection = document.querySelector('.cost__connection');
			connection__price += +input.value;
			cost__connection.innerHTML = connection__price;
			obj.Связь = connection__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__hygiene.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__hygiene.dataset.key;

		if(flag__hygiene == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__hygiene');

			createCell(tr, key, 'hygiene');
			createCell(tr, +input.value, 'cost__hygiene');
			createCell(tr, '', 'remove');

			// Очистка массива data
			clearData();

			hygiene__price = +input.value;
			obj.Гигиена = hygiene__price;

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();

			flag__hygiene = true;
			input.value = '';
		} else {
			let cost__hygiene = document.querySelector('.cost__hygiene');
			hygiene__price += +input.value;
			cost__hygiene.innerHTML = hygiene__price;
			obj.Гигиена = hygiene__price;

			// Очистка массива data
			clearData();

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);

			// Отрисовка диаграммы
			drawGraph();

			// Перерасчёт итоговой стоимости
			recountTotal();

			input.value = '';
		}
	}
})

add__relax.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__relax.dataset.key;

		if(flag__relax == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__relax');
	
			createCell(tr, key, 'relax');
			createCell(tr, +input.value, 'cost__relax');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			relax__price = +input.value;
			obj.Отдых = relax__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__relax = true;
			input.value = '';
		} else {
			let cost__relax = document.querySelector('.cost__relax');
			relax__price += +input.value;
			cost__relax.innerHTML = relax__price;
			obj.Отдых = relax__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__transport.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__transport.dataset.key;

		if(flag__transport == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__transport');
	
			createCell(tr, key, 'transport');
			createCell(tr, +input.value, 'cost__transport');
			createCell(tr, '', 'remove');
	
			// Очистка массива data
			clearData();
	
			transport__price = +input.value;
			obj.Транспорт = transport__price;
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			flag__transport = true;
			input.value = '';
		} else {
			let cost__transport = document.querySelector('.cost__transport');
			transport__price += +input.value;
			cost__transport.innerHTML = transport__price;
			obj.Транспорт = transport__price;
	
			// Очистка массива data
			clearData();
	
			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
	
			// Отрисовка диаграммы
			drawGraph();
	
			// Перерасчёт итоговой стоимости
			recountTotal();
	
			input.value = '';
		}
	}
})

add__presents.addEventListener('click', function(event) {
	if(input.value != '') {
		let key = add__presents.dataset.key;

		if(flag__presents == false) {
			let tr = document.createElement('tr');
			tr.classList.add('row__presents');

			createCell(tr, key, 'present');
			createCell(tr, +input.value, 'cost__presents');
			createCell(tr, '', 'remove');

			// Очистка массива data
			clearData();

			presents__price = +input.value;
			obj.Подарки = presents__price;

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);
		
			// Отрисовка диаграммы
			drawGraph();
		
			// Добавление строки
			table.appendChild(tr);
		
			// Перерасчёт итоговой стоимости
			recountTotal();

			flag__presents = true;
			input.value = '';
		} else {
			let cost__presents = document.querySelector('.cost__presents');
			presents__price += +input.value;
			cost__presents.innerHTML = presents__price;
			obj.Подарки = presents__price;

			// Очистка массива data
			clearData();

			// Добавление объекта в data
			addData(data.labels, data.datasets[0].data, obj);

			// Отрисовка диаграммы
			drawGraph();

			// Перерасчёт итоговой стоимости
			recountTotal();

			input.value = '';
		}
	}
})

var ctx = document.getElementById('myChart').getContext('2d');

const data = {
labels: [],
datasets: [{
	label: 'Dataset 1',
	data: [],
	backgroundColor: [
		'rgb(255, 235, 59)',
		'rgb(193, 115, 76)',
		'rgb(255, 53, 0)',
		'rgb(240, 180, 0)',
		'rgb(97, 175, 246)',
		'rgb(255, 87, 87)',
		'rgb(0, 150, 136)',
		'rgb(33, 150, 243)',
		'rgb(82, 111, 170)',
		'rgb(76, 175, 80)',
		'rgb(156, 39, 176)',
		'rgb(103, 58, 183)',
		'rgb(96, 125, 139)',
	],
	hoverOffset: 10
	}],
};

function createCell(tr, value, name) {
	let td = document.createElement('td');
	td.innerHTML = value;
	td.classList.add(name);
	tr.appendChild(td);
}

function clearData() {
	data.labels.length = 0;
	data.datasets[0].data.length = 0;
}

function addData(name, price, object) {
	for(let key in object) {
		name.push(key);
		price.push(object[key]);
	}
} 

var chart = null;

function drawGraph() {
	if(chart != null){
        chart.destroy();
    }
	var ctx = document.getElementById('myChart').getContext('2d');
	chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'doughnut',
	
		// The data for our dataset
		data: data,
	
		// Configuration options go here
		options: {
			plugins: {
				legend: {
					display: false
				 }
			}
		},
	});
}

function recountTotal() {
	let cost__food = document.querySelector('.cost__food');
	let cost__cafe = document.querySelector('.cost__cafe');
	let cost__health = document.querySelector('.cost__health');
	let cost__animals = document.querySelector('.cost__animals');
	let cost__clothes = document.querySelector('.cost__clothes');
	let cost__car = document.querySelector('.cost__car');
	let cost__home = document.querySelector('.cost__home');
	let cost__connection = document.querySelector('.cost__connection');
	let cost__hygiene = document.querySelector('.cost__hygiene');
	let cost__relax = document.querySelector('.cost__relax');
	let cost__transport = document.querySelector('.cost__transport');
	let cost__presents = document.querySelector('.cost__presents');
	let sum = 0;


	if(cost__food) {
		sum -= +cost__food.innerHTML;
	}
	if(cost__cafe) {
		sum -= +cost__cafe.innerHTML;
	}
	if(cost__health) {
		sum -= +cost__health.innerHTML;
	}
	if(cost__animals) {
		sum -= +cost__animals.innerHTML;
	}
	if(cost__clothes) {
		sum -= +cost__clothes.innerHTML;
	}
	if(cost__car) {
		sum -= +cost__car.innerHTML;
	}
	if(cost__home) {
		sum -= +cost__home.innerHTML;
	}
	if(cost__connection) {
		sum -= +cost__connection.innerHTML;
	}
	if(cost__hygiene) {
		sum -= +cost__hygiene.innerHTML;
	}
	if(cost__relax) {
		sum -= +cost__relax.innerHTML;
	}
	if(cost__transport) {
		sum -= +cost__transport.innerHTML;
	}
	if(cost__presents) {
		sum -= +cost__presents.innerHTML;
	}

	if(sum == 0) {
		addData(data.labels, data.datasets[0].data, obj);

		data.labels.push('');
		data.datasets[0].data.push(1);

		// Отрисовка диаграммы
		drawGraph();
	}

	total.innerHTML = sum;
}

table.onclick = function(event) {
	
	let target = event.target;
	switch(target.parentElement.classList.value) {
		case 'row__food':
			obj.Еда = 0;
			flag__food = false;
			break;
		case 'row__cafe':
			obj.Кафе = 0;
			flag__cafe = false;
			break;
		case 'row__health':
			obj.Здоровье = 0;
			flag__health = false;
			break;
		case 'row__animals':
			obj.Питомцы = 0;
			flag__animals = false;
			break;
		case 'row__clothes':
			obj.Одежда = 0;
			flag__clothes = false;
			break;
		case 'row__car':
			obj.Машина = 0;
			flag__car = false;
			break;
		case 'row__home':
			obj.Дом = 0;
			flag__home = false;
			break;
		case 'row__connection':
			obj.Связь = 0;
			flag__connection = false;
			break;
		case 'row__hygiene':
			obj.Гигиена = 0;
			flag__hygiene = false;
			break;
		case 'row__relax':
			obj.Отдых = 0;
			flag__relax = false;
			break;
		case 'row__transport':
			obj.Транспорт = 0;
			flag__transport = false;
			break;
		case 'row__presents':
			obj.Подарки = 0;
			flag__presents = false;
			break;
	}
	if(target.className == 'remove') {
		target.parentElement.remove();

		// Очистка массива data
		clearData();

		// Добавление объекта в data
		addData(data.labels, data.datasets[0].data, obj);

		// Отрисовка диаграммы
		drawGraph();
	}
	
	// Перерасчёт итоговой стоимости
	recountTotal();
};

function start() {
	addData(data.labels, data.datasets[0].data, obj);

	data.labels.push('');
	data.datasets[0].data.push(1);

	// Отрисовка диаграммы
	drawGraph();
}

window.onload = start;
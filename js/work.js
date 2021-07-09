let buttonInfo = document.querySelector('.button__add-drinks');
let buttonDelete = document.querySelector('.button__delete-drinks');
let buttonWriteDrinks = document.querySelector('.button__show-drinks');
let getOnPage = document.querySelector('.out__drinks');
let drinkStorage = {};

let alcohol = prompt('Название напитка', 'вино');
let info = prompt('Информация о напитке', 'Вино́ — алкогольный напиток (крепость: натуральных — 9—16 % об., креплёных — 16—22 % об.), получаемый полным или частичным спиртовым брожением виноградного сока');


class HashStorageClass {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
	writeAllInfoAboutDrinks(key, value) {
		drinkStorage[key] = value;
		return drinkStorage;
	}
	getInfoAboutDriks(key) {
		if (key in drinkStorage) {
			return `Название напитка ${key}. О напитке: ${drinkStorage[key]}`
		}
		return 'Такого напитка нету в хранилище'
	}

	deleteElementsFromObj(key) {
		if (key in drinkStorage) {
			delete drinkStorage[key];
			return 'Напиток был удалён из хранилища'
		}
		return 'Напитка не было в хранилище'
	}

	callAllDrinks() {
		for (let elements in drinkStorage) {
			return elements;
		}
		return 'Ничего не обнаруженно в объекте'
	}
}

buttonInfo.addEventListener('click', getAllInfo);

buttonDelete.addEventListener('click', deleteInfo);

buttonWriteDrinks.addEventListener('click', writeInfo);

function getAllInfo(whatIsDrinks) {
	whatIsDrinks = prompt('Напишите название напитка')
	//alert(dring1.getInfoAboutDriks(whatIsDrinks)); // вариант с выводом с помощью alert
	getOnPage.innerHTML = drinkOne.getInfoAboutDriks(whatIsDrinks) // вариант с выводом на страницу
}


function deleteInfo(whatIsDrinks) {
	whatIsDrinks = prompt('Напишите название напитка')
	alert(drinkOne.deleteElementsFromObj(whatIsDrinks)); // вариант с выводом с помощью alert
	//getOnPage.innerHTML = dring1.deleteElementsFromObj(alcohol); // вариант с выводом на страницу
}

function writeInfo() {
	alert(drinkOne.callAllDrinks()); // вариант с выводом с помощью alert
	//getOnPage.innerHTML = dring1.callAllDrinks(); // вариант с выводом на страницу
}


let drinkOne = new HashStorageClass();

console.log(drinkOne.writeAllInfoAboutDrinks(alcohol, info));
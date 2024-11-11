let headMenu = document.querySelector('.head-menu > h1');
let getproduct = document.getElementById('getproduct');
let price = document.getElementById('price');
let nameproduct = document.getElementById('nameproduct');
let quantityDisplay = document.getElementById('quantity');
let add = document.getElementById('add');
let drop = document.getElementById('drop');
let buy = document.getElementById('buy');
let addBasket = document.getElementById('add_to_basket');
let popup = document.getElementById('boxbuy');
let detaileboxbuy = document.getElementById('detaileboxbuy');
let boxbuyok = document.getElementById('boxbuyok');
let boxbuycancel = document.getElementById('buycancel');

let getkeywordtea = sessionStorage.getItem('keyproducttea');
let getkeywordsoda = sessionStorage.getItem('keyproductsoda');
let getkeywordsmoothie = sessionStorage.getItem('keyproductsmoothie');

let arrteaimg = ['img/teathai.png', 'img/lemontea.png', 'img/greentea.png'];
let arrsodaimg = ['img/Cocacola.png', 'img/fanta.png', 'img/sprite.png'];
let arrsmoothieimg = ['img/strawberry.png', 'img/bluebarry.png', 'img/orange.png'];

let arrteaname = ['Thai Tea', 'Lemon Tea', 'Grean Tea'];
let arrsodaname = ['Coca Cola', 'Fanta Orange', 'Sprite'];
let arrsmoothiename = ['Strawberry Smoothie', 'Bluebarry Smoothie', 'Orange Smoothie'];

let Quantity1 = 0;
let Quantity2 = 0;
let Quantity3 = 0;
let Quantity4 = 0;
let Quantity5 = 0;
let Quantity6 = 0;
let Quantity7 = 0;
let Quantity8 = 0;
let Quantity9 = 0;

if (getkeywordtea == 'product1') {
	getproduct.src = arrteaimg[0];
	price.innerHTML = '50 Baht';
	headMenu.innerHTML = arrteaname[0];
	Quantity1 = 1;
	quantityDisplay.innerHTML = Quantity1;
	drop.addEventListener('click', () => {
		Quantity1 -= 1;
		if (Quantity1 < 1) {
			Quantity1 = 1;
		}
		quantityDisplay.innerHTML = Quantity1
	})
	add.addEventListener('click', () => {
		Quantity1 += 1;
		quantityDisplay.innerHTML = Quantity1;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrteaname[0],
			price: 50,            
			image: arrteaimg[0],
			quantity: Quantity1
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity1;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity1} ${arrteaname[0]}(s) to basket.`;
	});
	
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity1} ${arrteaname[0]}(s) for a total of ${Quantity1 * 50}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity1;
}

else if (getkeywordtea == 'product2') {
	getproduct.src = arrteaimg[1];
	price.innerHTML = '45 Baht';
	headMenu.innerHTML = arrteaname[1];
	Quantity2 = 1;
	quantityDisplay.innerHTML = Quantity2;
	drop.addEventListener('click', () => {
		Quantity2 -= 1;
		if (Quantity2 < 1) {
			Quantity2 = 1;
		}
		quantityDisplay.innerHTML = Quantity2
	})
	add.addEventListener('click', () => {
		Quantity2 += 1;
		quantityDisplay.innerHTML = Quantity2;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrteaname[1],  
			price: 45,             
			image: arrteaimg[1],   
			quantity: Quantity2
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity2;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity2} ${arrteaname[1]}(s) to basket.`;
	});

	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity2} ${arrteaname[1]}(s) for a total of ${Quantity2 * 45}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity2;
}

else if (getkeywordtea == 'product3') {
	getproduct.src = arrteaimg[2];
	price.innerHTML = '55 Baht';
	headMenu.innerHTML = arrteaname[2];
	Quantity3 = 1;
	quantityDisplay.innerHTML = Quantity3;
	drop.addEventListener('click', () => {
		Quantity3 -= 1;
		if (Quantity3 < 1) {
			Quantity3 = 1;
		}
		quantityDisplay.innerHTML = Quantity3
	})
	add.addEventListener('click', () => {
		Quantity3 += 1;
		quantityDisplay.innerHTML = Quantity3;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrteaname[2],   
			price: 55,             
			image: arrteaimg[2],   
			quantity: Quantity3
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity3;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity3} ${arrteaname[2]}(s) to basket.`;
	});
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity3} ${arrteaname[2]}(s) for a total of ${Quantity3 * 55}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity3;
}

else if (getkeywordsoda == 'product4') {
	getproduct.src = arrsodaimg[0];
	price.innerHTML = '16 Baht';
	headMenu.innerHTML = arrsodaname[0];
	Quantity4 = 1;
	quantityDisplay.innerHTML = Quantity4;
	drop.addEventListener('click', () => {
		Quantity4 -= 1;
		if (Quantity4 < 1) {
			Quantity4 = 1;
		}
		quantityDisplay.innerHTML = Quantity4
	})
	add.addEventListener('click', () => {
		Quantity4 += 1;
		quantityDisplay.innerHTML = Quantity4;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsodaname[0],  
			price: 16,             
			image: arrsodaimg[0],  
			quantity: Quantity4
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity4;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity4} ${arrsodaname[0]}(s) to basket.`;
	});
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity4} ${arrsodaname[0]}(s) for a total of ${Quantity4 * 16}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity4;
}

else if (getkeywordsoda == 'product5') {
	getproduct.src = arrsodaimg[1];
	price.innerHTML = '20 Baht';
	headMenu.innerHTML = arrsodaname[1];
	Quantity5 = 1;
	quantityDisplay.innerHTML = Quantity5;
	drop.addEventListener('click', () => {
		Quantity5 -= 1;
		if (Quantity5 < 1) {
			Quantity5 = 1;
		}
		quantityDisplay.innerHTML = Quantity5
	})
	add.addEventListener('click', () => {
		Quantity5 += 1;
		quantityDisplay.innerHTML = Quantity5;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsodaname[1],   
			price: 20,            
			image: arrsodaimg[1],  
			quantity: Quantity5
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity5;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity5} ${arrsodaname[1]}(s) to basket.`;
	});
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity5} ${arrsodaname[1]}(s) for a total of ${Quantity5 * 20}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity5;
}

else if (getkeywordsoda == 'product6') {
	getproduct.src = arrsodaimg[2];
	price.innerHTML = '15 Baht';
	headMenu.innerHTML = arrsodaname[2];
	Quantity6 = 1;
	quantityDisplay.innerHTML = Quantity6;
	drop.addEventListener('click', () => {
		Quantity6 -= 1;
		if (Quantity6 < 1) {
			Quantity6 = 1;
		}
		quantityDisplay.innerHTML = Quantity6;
	})
	add.addEventListener('click', () => {
		Quantity6 += 1;
		quantityDisplay.innerHTML = Quantity6;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsodaname[2],   
			price: 15,             
			image: arrsodaimg[2],   
			quantity: Quantity6
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity6;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity6} ${arrsodaname[2]}(s) to basket.`;
	});
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity6} ${arrsodaname[2]}(s) for a total of ${Quantity6 * 15}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity6;
}

else if (getkeywordsmoothie == 'product7') {
	getproduct.src = arrsmoothieimg[0];
	price.innerHTML = '99 Baht';
	headMenu.innerHTML = arrsmoothiename[0];
	Quantity7 = 1;
	quantityDisplay.innerHTML = Quantity7;
	drop.addEventListener('click', () => {
		Quantity7 -= 1;
		if (Quantity7 < 1) {
			Quantity7 = 1;
		}
		quantityDisplay.innerHTML = Quantity7;
	})
	add.addEventListener('click', () => {
		Quantity7 += 1;
		quantityDisplay.innerHTML = Quantity7;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsmoothiename[0],   
			price: 99,            
			image: arrsmoothieimg[0],  
			quantity: Quantity7
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity7;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity7} ${arrsmoothiename[0]}(s) to basket.`;
	});

	buy.addEventListener('click', () => {
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `You ordered ${Quantity7} ${arrsmoothiename[0]}(s) for a total of ${Quantity7 * 99}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity7;
}

else if (getkeywordsmoothie == 'product8') {
	getproduct.src = arrsmoothieimg[1];
	price.innerHTML = '65 Baht';
	headMenu.innerHTML = arrsmoothiename[1];
	Quantity8 = 1;
	quantityDisplay.innerHTML = Quantity8;
	drop.addEventListener('click', () => {
		Quantity8 -= 1;
		if (quaQuantity8ntity < 1) {
			Quantity8 = 1;
		}
		quantityDisplay.innerHTML = Quantity8;
	})
	add.addEventListener('click', () => {
		Quantity8 += 1;
		quantityDisplay.innerHTML = Quantity8;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsmoothiename[1],   
			price: 65,             
			image: arrsmoothieimg[1],   
			quantity: Quantity8
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity8;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity8} ${arrsmoothiename[1]}(s) to basket.`;
	});

	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity8} ${arrsmoothiename[1]}(s) for a total of ${Quantity8 * 65}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity8;
}

else if (getkeywordsmoothie == 'product9') {
	getproduct.src = arrsmoothieimg[2];
	price.innerHTML = '30 Baht';
	headMenu.innerHTML = arrsmoothiename[2];
	Quantity9 = 1;
	quantityDisplay.innerHTML = Quantity9;
	drop.addEventListener('click', () => {
		Quantity9 -= 1;
		if (Quantity9 < 1) {
			Quantity9 = 1;
		}
		quantityDisplay.innerHTML = Quantity9;
	})
	add.addEventListener('click', () => {
		Quantity9 += 1;
		quantityDisplay.innerHTML = Quantity9;
	})
	addBasket.addEventListener('click', () => {
		const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
		const item = {
			name: arrsmoothiename[2],  
			price: 30,            
			image: arrsmoothieimg[2],  
			quantity: Quantity9
		};
	
		const existingItemIndex = cartItems.findIndex(i => i.name === item.name);
		if (existingItemIndex !== -1) {
			cartItems[existingItemIndex].quantity += Quantity9;
		} else {
			cartItems.push(item);
		}
	
		sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
		popup.classList.remove('hidden');
		detaileboxbuy.textContent = `Added ${Quantity9} ${arrsmoothiename[2]}(s) to basket.`;
	});
	buy.addEventListener('click', () => {
		popup.classList.remove('hidden')
		detaileboxbuy.textContent = `You ordered ${Quantity9} ${arrsmoothiename[2]}(s) for a total of ${Quantity9 * 30}`;
	})
	boxbuyok.addEventListener('click', () => {
		popup.classList.add("hidden");
		alert("Order confirmed!");
	})
	boxbuycancel.addEventListener("click", () => {
		popup.classList.add("hidden");
		});
	quantityDisplay.textContent = Quantity9;
}
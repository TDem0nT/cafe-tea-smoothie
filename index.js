let teaMenu = document.getElementById('TeaMenu')
let sodaMenu = document.getElementById('SodaMenu')
let smoothieMenu = document.getElementById('SmoothieMenu')



teaMenu.addEventListener("click", () => {
	sessionStorage.setItem('key', 1)
});

sodaMenu.addEventListener("click", () => {
	sessionStorage.setItem('key', 2)
})

smoothieMenu.addEventListener("click", () => {
	sessionStorage.setItem('key', 3)
})
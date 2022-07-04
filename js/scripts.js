// Ajustar a altura da página quando for menor que a sidebar

// $(document).ready( function () {

(function () {
	let sidebarHeight = document.getElementsByClassName('sidebar');
	let contentHeight = document.getElementsByClassName('content');
	let headerHeight = document.getElementsByTagName('header');
	let footerHeight = document.getElementsByTagName('footer');
	let sectionsToDiscount = headerHeight[0].offsetHeight + footerHeight[0].offsetHeight;
	// const sidebarHeight = $(".sidebar").height()
	// const contentHeight = $(".content").height()
	// const sectionsToDiscount = ($(".header").height() + 2 * $("footer").height())

	// console.log(sidebarHeight[0].offsetHeight)
	// console.log(contentHeight[0].offsetHeight)
	// console.log(sectionsToDiscount)

	if (sidebarHeight[0].offsetHeight > contentHeight[0].offsetHeight) {
		//

		let pageContent = document.getElementById('page-content');
		pageContent.style.minHeight = sidebarHeight[0].offsetHeight - sectionsToDiscount + 'px';
		//($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
	}
})();

// Módulo 1 / Aula 1 / Topico 5
// Mapa do Brasil 1

function toggleLegenda(item) {
	var texto = document.getElementById(item);

	if (texto.style.opacity == 0) {
		texto.style.opacity = '1';
	} else {
		texto.style.opacity = '0';
	}
}

function mapHover(item) {
	var mapa = document.getElementById(item);
	mapa.style.fill = '#b5ff61';
}

// Mapa do Brasil 1

function mapHoverOut(item) {
	var mapa = document.getElementById(item);

	if (item === 'ba-mapa') {
		mapa.style.fill = '#9cd15e';
	}
	if (item === 'pe-mapa') {
		mapa.style.fill = '#71a94a';
	}
}

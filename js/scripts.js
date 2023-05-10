(function () {
	// Popover
	$(function () {
		$('[data-toggle="popover"]').popover(options);
	});

	// Tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip(options);
	});
})();

// Botão de copiar podcast
var btnCopyLink = document.querySelectorAll('.copy-to-clip');

btnCopyLink.forEach(element => {
	element.addEventListener('click', () => {
		let messageCopy = element.getAttribute('data-link');

		navigator.clipboard.writeText(messageCopy);

		tooltipFeedback();
	});

	function tooltipFeedback() {
		let feedback = $('[data-toggle="tooltip"]');

		feedback.tooltip('show');

		element.addEventListener('mouseout', () => {
			feedback.tooltip('hide');
		});
	}
});

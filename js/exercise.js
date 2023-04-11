let mcqCard = document.querySelectorAll('.mcq-card');

(function () {
	mcqCard.forEach(mcq => {
		let answerOption = mcq.querySelectorAll('.mcq__answers li');
		let submitButton = mcq.querySelector('.mcq__submit button');
		let submitFeedback = mcq.querySelector('.mcq__submit--feedback');
		let submitAnswerFeedback = mcq.querySelector('.mcq__answer--feedback');
		// let feedbackText = answerOption.getAttribute('data-feedback');
		let score = 0;

		// Select option, clear the others and enable submit
		answerOption.forEach(option => {
			option.addEventListener('click', function () {
				answerSelect(option);
			});
		});

		//Submit button to check only selected class option.
		submitButton.addEventListener('click', function () {
			if (submitButton.getAttribute('type') === 'submit' && submitButton.getAttribute('aria-disabled') === 'false') {
				butttonCheck();
			} else {
				buttonReset();
			}
		});

		function answerSelect(e) {
			if (submitButton.getAttribute('type') === 'submit') {
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];
					element.classList.remove('mcq__answers--selected');
				}
				e.classList.add('mcq__answers--selected');
				submitButton.setAttribute('aria-disabled', 'false');
			}
		}

		function incorrectAnswer(event) {
			feedbackText = event.getAttribute('data-feedback');

			event.classList.remove('mcq__answers--selected');
			event.classList.add('mcq__answers--incorrect');

			submitFeedback.innerHTML = `<span class="material-symbols-rounded">cancel</span> <strong>Resposta errada!</strong><br><span class="feedback__content">` + feedbackText + `</span>`;
			submitFeedback.classList.remove('d-none', 'mcq__submit__feedback--correct');
			submitFeedback.classList.add('mcq__submit__feedback--incorrect');
		}

		function correctAnswer(event) {
			feedbackText = event.getAttribute('data-feedback');

			event.classList.remove('mcq__answers--selected');
			event.classList.add('mcq__answers--correct');

			submitFeedback.innerHTML = `<span class="material-symbols-rounded">check_circle</span> <strong>Resposta correta!</strong><br><span class="feedback__content">` + feedbackText + `</span>`;
			submitFeedback.classList.remove('d-none', 'mcq__submit__feedback--incorrect');
			submitFeedback.classList.add('mcq__submit__feedback--correct');

			if (submitAnswerFeedback) {
				submitAnswerFeedback.classList.remove('d-none');
			}
		}

		function blockAnswerOption() {
			for (let i = 0; i < answerOption.length; i++) {
				const element = answerOption[i];

				element.classList.add('mcq__answers--blocked');
			}
		}

		function butttonCheck() {
			if (submitButton.getAttribute('type') === 'submit') {
				score++;

				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					if (element.classList.contains('mcq__answers--selected')) {
						if (!element.hasAttribute('correct')) {
							console.log('errou');
							incorrectAnswer(element);
							blockAnswerOption();
						} else {
							console.log('acertou');
							correctAnswer(element);
							blockAnswerOption();
						}
					}
				}
				submitButton.setAttribute('type', 'reset');
				submitButton.innerHTML = 'Recomeçar';
			}
		}

		function buttonReset() {
			if (submitButton.getAttribute('type') === 'reset') {
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					element.classList.remove('mcq__answers--correct', 'mcq__answers--incorrect', 'mcq__answers--blocked', 'mcq__answers--selected');
					submitButton.setAttribute('type', 'submit');
					submitButton.innerHTML = 'Conferir';
					submitButton.setAttribute('aria-disabled', 'true');
				}

				if (submitFeedback.classList.contains('mcq__submit__feedback--correct')) {
					score = 0;
				}
				submitFeedback.classList.remove('mcq__submit__feedback--correct', 'mcq__submit__feedback--incorrect');
				submitFeedback.classList.add('d-none');

				if (submitAnswerFeedback) {
					submitAnswerFeedback.classList.add('d-none');
				}
			}
		}
	});
})();

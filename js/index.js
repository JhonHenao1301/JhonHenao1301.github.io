	//modales
	const modalEducacion = document.querySelector('#modal-educacion');
	const modalSkills = document.querySelector('#modal-skills');
	const modalExperience = document.querySelector('#modal-experience');

	//botones
	const modalBtnEducacion = document.querySelector('#modal-educacion-btn');
	const modalBtnSkills = document.querySelector('#modal-skills-btn');
	const modalBtnExperience = document.querySelector('#modal-experience-btn');

	const closeBtn = document.querySelector('.close');

	// Events
	modalBtnEducacion.addEventListener('click', openModal);
	modalBtnSkills.addEventListener('click', openModal);
	modalBtnExperience.addEventListener('click', openModal);
	closeBtn.addEventListener('click', closeModal);
	window.addEventListener('click', outsideClick);

	// Open
	function openModal() {
	  if(this.id === 'modal-educacion-btn'){
		modalEducacion.style.display = 'block';
	  }
	  
	  if(this.id === 'modal-experience-btn'){
		modalExperience.style.display = 'block';
	  }

	  if(this.id === 'modal-skills-btn'){
		modalSkills.style.display = 'block';
	  }
	}

	// Close
	function closeModal() {
	  modalEducacion.style.display = 'none';
	}

	// Close If Outside Click
	function outsideClick(e) {
	  if (e.target == modalEducacion) {
		modalEducacion.style.display = 'none';
	  }

	  if (e.target == modalSkills) {
		modalSkills.style.display = 'none';
	  }
	  if (e.target == modalExperience) {
		modalExperience.style.display = 'none';
	  }
	}

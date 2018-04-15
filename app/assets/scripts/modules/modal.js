import $ from 'jquery';

class modal {
	constructor() {
		this.openModalButton=$(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton=$(".modal__close");
		this.events();
	}

	events(){
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		// clicking the x close modal
		this.closeModalButton.click(this.closeModal.bind(this));
		//esc key on the board
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if(e.keyCode==27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default modal;
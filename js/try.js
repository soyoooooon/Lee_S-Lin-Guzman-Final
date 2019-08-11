(() => {
	console.log('Fired!');


let buttonLoad = document.querySelector(".loadmore");
let loadMore = document.querySelector(".hidden");
let butLoad = document.querySelector(".loadmore1");
let looadMore = document.querySelector(".hidden1");
let butLod = document.querySelector(".loadmore2");
let loooadMore = document.querySelector(".hidden2");


function hideButton() {

		loadMore.classList.remove("hidden");
		looadMore.classList.remove("hidden1");
		loooadMore.classList.remove("hidden2");

		

	//debugger;

	}


	buttonLoad.addEventListener("click", hideButton);
	butLoad.addEventListener("click", hideButton);
	butLod.addEventListener("click", hideButton)
	//buttonLoad.forEach(button => button.addEventListener("click", hideButton,false));

})();
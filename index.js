// Example Books
const theHobbit = new Book(
	"The Hobbit",
	"J.R.R. Tolkien",
	"295",
	"not read yet"
);

const harryPotter = new Book("Harry Potter", "J.K. Rowling", "362", "read");

const swallowsAndAmazons = new Book(
	"Swallows and Amazons",
	"Arthur Ransome",
	"527",
	"not read yet"
);

const alexRider = new Book("Alex Rider", "Anthony Horowitz", "120", "read");

const toSleepInASeaOfStars = new Book(
	"To Sleep in a Sea of Stars",
	"Christopher Paolini",
	"880",
	"read"
);

// Actual Code

// GLOBAL Code
let newBook = document.getElementById("newBook");
newBook.addEventListener("click", newBookInput);


Book.prototype.toggleReadStatus = function () {
	if (this.read == "read") {
		this.read = "not ready yet";
		displayBook();
	} else {
		this.read = "read";
		displayBook();
	}
};

// Normal Code

let myLibrary = [
	toSleepInASeaOfStars,
	alexRider,
	harryPotter,
	swallowsAndAmazons,
	theHobbit,
];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return title + " by " + author + ", " + pages + " pages, " + read;
	};
}


function displayBook() {
	let bookGrid = document.getElementById("bookGrid");
	bookGrid.innerHTML = "";

	myLibrary.forEach((element, index) => {
		let bookCard = document.createElement("div");
		bookCard.classList.add("book");

		let bookTitle = document.createElement("div");
		bookTitle.textContent = element.title;
		bookTitle.classList.add("bookTitle");
		bookCard.appendChild(bookTitle);

		let bookAuthor = document.createElement("div");
		bookAuthor.textContent = element.author;
		bookAuthor.classList.add("bookAuthor");
		bookCard.appendChild(bookAuthor);

		let bookPages = document.createElement("div");
		bookPages.textContent = element.pages;
		bookPages.classList.add("bookPages");
		bookCard.appendChild(bookPages);

		let bookRead = document.createElement("div");
		bookRead.textContent = element.read;
		bookRead.classList.add("bookRead");
		bookCard.appendChild(bookRead);

		let bookRemove = document.createElement("button");
		bookRemove.textContent = "Remove Book";
		bookCard.appendChild(bookRemove);
		bookCard.dataset.bookIndex = `${index}`;
		bookRemove.addEventListener("click", function () {
			let bookIndex = bookCard.dataset.bookIndex;
			myLibrary.splice(bookIndex, 1);
			displayBook();
		});

		let bookReadBtn = document.createElement("button");
		bookReadBtn.textContent = "Change Read Status";
		bookCard.appendChild(bookReadBtn);
		bookReadBtn.addEventListener("click", function () {
			console.log("change read status");
			let bookIndex = bookCard.dataset.bookIndex;
			myLibrary[bookIndex].toggleReadStatus();
		});

		bookGrid.appendChild(bookCard);
	});
}

function newBookInput() {
	let newBookForm = document.getElementById("newBookForm");
	newBookForm.innerHTML = `
		<div>	
			<label for="title">Title</label>
			<input type = "text" id = "bookTitle">
		</div>
		<div>
			<label for="author">Author</label>
			<input type="text" id="author">
		</div>
		<div>
			<label for="pages">Number of Pages</label>
			<input type="text" id="pages">
		</div>
			
		<div>
			<p>Have you read this book yet?</p>
				<input type = "radio" id = "read"  value="read" name = "readStatus" checked><label for="read">Read</label>

				<input type = "radio" id = "notRead" value = "notRead" name = "readStatus"><label for="notRead">Not Read</label>
				
				<button type = "submit" onclick = "addBookToLibrary();" >Add Book</button>
		</div>
		`;
}


function addBookToLibrary() {
	document.getElementById("bookTitle").value = title;
	document.getElementById("author").value = author;
	document.getElementById("pages").value = pages;
	// checkReadInput();
	console.log(title, author, pages)
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
}


function checkReadInput() {
	if ((document.getElementById("read").checked = true)) {
		console.log("read check read input");
		return "read";
	} else if ((document.getElementById("notRead").checked = true)) {
		console.log("not read chekc read input");
		return "not read yet";
	}
}

window.onload = function () {
	displayBook();
};

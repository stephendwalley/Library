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

function addBookToLibrary(newbook) {
	myLibrary.push(newbook);
}

function collectBook() {
	myLibrary.forEach((element) => {
		console.log(element.info());
		displayBook(element);
	});
}

function displayBook() {
	myLibrary.forEach((element, index) => {
		let bookCard = document.createElement("div");
		bookCard.classList.add("book");
		bookCard.dataset.bookIndex = `${index}`
		
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
		bookCard.appendChild(bookRemove)

		let bookGrid = document.getElementById("bookGrid");
		bookGrid.appendChild(bookCard);
	});
}

let newBook = document.getElementById("newBook");
newBook.addEventListener("click", newBookInput);

function newBookInput() {
	console.log("newBookPressed")
	let newBookForm = document.getElementById("newBookForm");
	newBookForm.innerHTML = (`
		<div>	
			<label for="title">Title</label>
			<input type = "text" id = "title">
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
				
				<button type = "submit">Add Book</button>
		</div>
		`)
}

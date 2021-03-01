let myLibrary = ["The Hobbit", "Potato"];

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

function displayBook() {
	myLibrary.forEach((element) => {
		console.log("There is a book!");
		return;
	});
}


const theHobbit = new Book(
	"The Hobbit",
	"J.R.R. Tolkien",
	"295",
	"not read yet"
);

const harryPotter = new Book(
	"Harry Potter",
	"J.K. Rowling",
	"362",
	"read"
);

const swallowsAndAmazons = new Book(
	"Swallows and Amazons",
	"Arthur Ransome",
	"527",
	"not read yet"
);

const alexRider = new Book(
	"Alex Rider",
	"Anthony Horowitz",
	"120",
	"read"
);

const theHobbit = new Book(
	"The Hobbit",
	"J.R.R. Tolkien",
	"295",
	"not read yet"
);

// console.log(theHobbit.info());

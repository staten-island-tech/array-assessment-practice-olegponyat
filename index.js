const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((fart)=>{
  console.log(`${fart.authorFirst} ${fart.authorLast} wrote ${fart.name} in ${fart.publishDate}`)
})

//Sort books from oldest to most recent

console.log(books.sort((a,b)=> a.publishDate - b.publishDate))

//sort books alphabetically
console.log(titles.sort())

//Find who wrote War and Peace
books.forEach((farts)=>{
  if (farts.name === "War and Peace")
    console.log(farts.authorFirst, farts.authorLast)
})

//how many books were written before 1900?
const poop= books.filter((fart)=> fart.publishDate < 1900)
console.log(poop.length)
//was there at least one book published within the last 100 years?
const year = 2023

const farted = books.filter((poop)=> poop.publishDate > year-100)
if (farted.length > 0){
  console.log(true);
}
else{
  console.log(false)
}
//was every book published within the last 100 years?


const farteds = books.filter((poop)=> poop.publishDate > year-100)
if(farted.length > books.length){
  console.log(true)
}
else{
  console.log(false)
}
//print a list of books that "includes" the genre historical
const fartedss = books.filter((fart)=> 
  fart.genre.includes('historical')
)
console.log(fartedss)
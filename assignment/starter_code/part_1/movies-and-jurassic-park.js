console.log('movies-and-jurassic-park.js is connected! woohoo!');

// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};


// Do the tasks down here!

var transformers = {
  title: 'Transformers',
  director: 'Michael Bay',
  actors: ['Shia Labeouf', 'Megan Fox'],
  releaseYear: 2007,
  duration: 143,
}

//1
console.log(transformers.title)
//2
console.log(transformers.director)
console.log(transformers.actors)
//3
console.log(transformers.releaseYear)
//4
transformers.duration = transformers.duration + 25
console.log(transformers.duration)

//1
var guestOfHonor = snakewaterMontana.paleontologist
//2
var cleverGirl = snakewaterMontana.specimen


// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!

//1
var nicaraguanSpecimens = nicaragua.specimens
//2
var favoriteSpecimen = nicaragua.specimens[3]
//3
nicaragua.annual_budget = nicaragua.annual_budget + 250000

console.log(favoriteSpecimen)
console.log(nicaraguanSpecimens)
console.log(nicaragua.annual_budget)

// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
};

// Do the tasks down here!

//1
var hammondsMexicoDepth = hammondsMines.mexico
console.log(hammondsMexicoDepth)
//2
var annualhammondbuenos = hammondsMines.buenos_aires.annual_budget
console.log(annualhammondbuenos)
//3
var buenoSpecimen = hammondsMines.buenos_aires.specimens
console.log(buenoSpecimen)
//4
hammondsMines.nicaragua = "property"
console.log(hammondsMines)
//5

//6

//7
hammondsMines.mexico.specimens[1]
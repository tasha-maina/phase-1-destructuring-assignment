const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ----------- STRINGS ------------

// 1. Assign variables based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt (the horse) wandered off, assign four animals
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Chicken goes back to the coop – use color nicknames for remaining
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// ----------- ARRAYS ------------

// 4. Destructure color names into individual variables
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure, skip indigo, use first letter variable names
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo
const [, , , , , indg] = colors;

// ----------- OBJECTS ------------

// 7. Destructure all values from muppet object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure song2 and song4 from nested album, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

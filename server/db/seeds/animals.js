exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { id: 1, animal: 'Lion', emoji: '🦁', description: 'Hear me roar!', continent: 'Africa', image: 'lion.jpg', cuteness_rating: 5, danger_rating: 5, can_jump_over_car: true },
        { id: 2, animal: 'Elephant', emoji: '🐘', description: 'Elephants can use their trunks to pick things up!', continent: 'Africa', image: 'elephantafrica.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: true },
        { id: 3, animal: 'Giraffe', emoji: '🦒', description: 'The giraffe is the tallest land animal in the world!', continent: 'Africa', image: 'giraffe.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 4, animal: 'Hippo', emoji: '🦛', description: 'They may look cute, but they can be very vicious!', continent: 'Africa', image: 'hippo.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: false },
        { id: 5, animal: 'Zebra', emoji: '🦓', description: 'Zebras\' dazzling stripes make them one of the most recognisable animals in the world!', continent: 'Africa', image: 'zebra.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 6, animal: 'Orangutan', emoji: '🦧', description: 'Orangutans love to swing from the trees!', continent: 'Africa', image: 'orangutan.jpg', cuteness_rating: 4, danger_rating: 3, can_jump_over_car: true },
        { id: 7, animal: 'Tiger', emoji: '🐯', description: 'The tiger is the largest cat in the world! Bigger than your average house cat, eh?!', continent: 'Africa', image: 'tiger.jpg', cuteness_rating: 5, danger_rating: 5, can_jump_over_car: true },
        { id: 8, animal: 'Cow', emoji: '🐄', description: 'What is a cow’s favourite type of maths? Cow-culus!', continent: 'Europe', image: 'cow.jpg', cuteness_rating: 5, danger_rating: 5, can_jump_over_car: true },
        { id: 9, animal: 'Horse', emoji: '🐎', description: 'Where do horses live? In NEIGH-bourhoods!', continent: 'Europe', image: 'horse.jpg', cuteness_rating: 5, danger_rating: 3, can_jump_over_car: true },
        { id: 10, animal: 'Duck', emoji: '🦆', description: 'Quack quack!', continent: 'Europe', image: 'duck.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: false },
        { id: 11, animal: 'Dodo', emoji: '🦤', description: 'Sadly, the Dodo is extinct. It was a flightless bird, similar to the Kiwi!', continent: 'Europe', image: 'dodo.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: false },
        { id: 12, animal: 'Pig', emoji: '🐖', description: 'Oink oink! Pigs are said to be even more intelligent than dogs!', continent: 'Europe', image: 'pig.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: false },
        { id: 13, animal: 'Kiwi', emoji: '🥝', description: 'New Zealand’s very own flightless bird!', continent: 'Oceania', image: 'kiwi.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: false },
        { id: 14, animal: 'Kangaroo', emoji: '🦘', description: 'Hop hop!', continent: 'Oceania', image: 'kangaroo.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: true },
        { id: 15, animal: 'Koala', emoji: '🐨', description: 'Koala bears eat eucalyptus leaves!', continent: 'Oceania', image: 'koala.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: false },
        { id: 16, animal: 'Spider', emoji: '🕷️', description: 'Eeeek! Creepy crawlies!', continent: 'Oceania', image: 'spider.jpg', cuteness_rating: 1, danger_rating: 5, can_jump_over_car: true },
        { id: 17, animal: 'Sheep', emoji: '🐑', description: 'Baaaa! Drive an hour out of Auckland, and you\’ll see hundreds of sheep!', continent: 'Oceania', image: 'sheep.jpg', cuteness_rating: 3, danger_rating: 5, can_jump_over_car: false },
        { id: 18, animal: 'Snake', emoji: '🐍', description: 'Ssssssslithery sssssssnakes!', continent: 'Oceania', image: 'snake.jpg', cuteness_rating: 1, danger_rating: 4, can_jump_over_car: false },
        { id: 19, animal: 'Tuatara', emoji: '🦎', description: 'Tuataras are so old, they come from the Triassic period - PRIOR to the jurassic period, when dinosaurs roamed the earth!', continent: 'Oceania', image: 'tuatara.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 20, animal: 'Quokka', emoji: '🐭', description: 'Quokkas are SO CUTE! That’s all.', continent: 'Oceania', image: 'quokka.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 21, animal: 'Crocodile', emoji: '🐊', description: 'Oi watch out for that croc!', continent: 'Oceania', image: 'crocodile.jpg', cuteness_rating: 2, danger_rating: 5, can_jump_over_car: false },
        { id: 22, animal: 'Otter', emoji: '🦦', description: 'When they sleep, otters hold hands with each other, so they don’t float away from their family! Awww.', continent: 'North America', image: 'otter.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: false },
        { id: 23, animal: 'Alligator', emoji: '🐊', description: 'Watch out for the \'gators!', continent: 'North America', image: 'alligator.jpg', cuteness_rating: 2, danger_rating: 4, can_jump_over_car: false },
        { id: 24, animal: 'Squirrel', emoji: '🐿️', description: 'Squirrels are super fast!', continent: 'North America', image: 'squirrel.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: true },
        { id: 25, animal: 'Raccoon', emoji: '🦝', description: 'Raccoons are so cute!', continent: 'North America', image: 'raccoon.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: true },
        { id: 26, animal: 'Buffalo', emoji: '🦬', description: 'You don\’t wanna mess with a buffalo!', continent: 'North America', image: 'buffalo.jpg', cuteness_rating: 2, danger_rating: 3, can_jump_over_car: false },
        { id: 27, animal: 'Eagle', emoji: '🦅', description: 'A majestic bird!', continent: 'North America', image: 'eagle.jpg', cuteness_rating: 3, danger_rating: 2, can_jump_over_car: true },
        { id: 28, animal: 'Beaver', emoji: '🦫', description: 'Does anyone remember the Angry Beavers cartoon?!', continent: 'North America', image: 'beaver.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 29, animal: 'Panda', emoji: '🐼', description: 'Panda bears are cute and cuddly', continent: 'Asia', image: 'panda.jpg', cuteness_rating: 5, danger_rating: 3, can_jump_over_car: false },
        { id: 30, animal: 'Black Bear', emoji: '🐻', description: 'They have cute little round ears', continent: 'Asia', image: 'bear.jpg', cuteness_rating: 4, danger_rating: 5, can_jump_over_car: true },
        { id: 31, animal: 'Leopard', emoji: '🐆', description: 'Leopards can run up to 58km per hour!', continent: 'Asia', image: 'leopard.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: true },
        { id: 32, animal: 'Elephant', emoji: '🐘', description: 'These gentle giants are super sweet', continent: 'Asia', image: 'elephantasia.jpg', cuteness_rating: 5, danger_rating: 4, can_jump_over_car: false },
        { id: 33, animal: 'Red Panda', emoji: '🐾', description: 'These little pandas are absolutely adorable!', continent: 'Asia', image: 'redpanda.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 34, animal: 'Penguin', emoji: '🐧', description: 'NOOT NOOT!', continent: 'Antarctica', image: 'penguin.jpg', cuteness_rating: 5, danger_rating: 1, can_jump_over_car: true },
        { id: 35, animal: 'Polar Bear', emoji: '🐻‍❄️', description: 'Polar bears like to go fishing!', continent: 'Antarctica', image: 'polarbear.jpg', cuteness_rating: 5, danger_rating: 5, can_jump_over_car: true },
        { id: 36, animal: 'Seal', emoji: '🦭', description: 'Flip flop!', continent: 'Antarctica', image: 'seal.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: false },
        { id: 37, animal: 'Sloth', emoji: '🦥', description: 'Slow down and stop to smell the flowers, like a sloth', continent: 'South America', image: 'sloth.jpg', cuteness_rating: 5, danger_rating: 5, can_jump_over_car: false },
        { id: 38, animal: 'Llama', emoji: '🦙', description: 'The scientific name for llama is Lama glama!', continent: 'South America', image: 'llama.jpg', cuteness_rating: 2, danger_rating: 5, can_jump_over_car: false },
        { id: 39, animal: 'Parrot', emoji: '🦜', description: 'Chirp chirp!', continent: 'South America', image: 'parrot.jpg', cuteness_rating: 1, danger_rating: 2, can_jump_over_car: true },
        { id: 40, animal: 'Frog', emoji: '🐸', description: 'Ribbet ribbet!', continent: 'South America', image: 'frog.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: true },
        { id: 41, animal: 'Rhino', emoji: '🦏', description: 'Charge!', continent: 'Africa', image: 'rhino.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: true },
        { id: 42, animal: 'Camel', emoji: '🐫', description: 'A good friend in the desert', continent: 'Asia', image: 'camel.jpg', cuteness_rating: 5, danger_rating: 2, can_jump_over_car: true }
      ])
    })
}

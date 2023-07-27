const survive = (request, response) => {
  try {
    const scenarios = [
      "You made it to the saloon. Congrats",
      "You died of dystentery",
      "A snake got you",
      "Your horse made it - you didn't",
      "You found gold!",
      "You found oil!",
      "You made it - your horse didn't",
      "You didn't even attempt to cross the Oregon Trail",
    ];
    const randomNum = Math.floor(Math.random() * scenarios.length);
    const outcome = scenarios[randomNum];

    response.status(200).json(outcome);
  } catch (error) {
    response.status(404).json(error);
  }
};

module.exports = survive;

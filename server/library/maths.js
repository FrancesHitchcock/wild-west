const maths = (request, response) => {
  try {
    const { num1, num2 } = request.query;

    const product = num1 * num2;

    response.status(200).json(product);
  } catch (error) {
    response.status(404).json(error);
  }
};

module.exports = maths;

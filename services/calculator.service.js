const sumOperation = (param1, param2) => (+param1) + (+param2);
const substractOperation = (param1, param2) => (+param1) - (+param2);
const multiplicationOperation = (param1, param2) => (+param1) * (+param2);
const divisionOperation = (param1, param2) => (+param1) / (+param2);

module.exports.sum = sumOperation;
module.exports.substract = substractOperation;
module.exports.multiply = multiplicationOperation;
module.exports.divide = divisionOperation;
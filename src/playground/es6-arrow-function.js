const square = function(x) {
    return x * x;
};

const squareArrow = x => x * x;

const squareArrowTwo = x => { return x * x};

console.log(squareArrow(4));

const fullName = 'Mike Smith';

const getFirstName = name => name.split(' ')[0];

console.log(getFirstName(fullName));
const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, currentPerson) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
        return oldestAge > currentAge ? oldest : currentPerson;
    });



};

const people = [
  { name: "Carly", yearOfBirth: 1066 },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },
  { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941 },
];


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(list) {

    return list.reduce((oldest, person) => {
        let personAge = (person.yearOfDeath)?(person.yearOfDeath - person.yearOfBirth):((new Date().getFullYear()) - person.yearOfBirth);
        let oldestAge = (oldest.yearOfDeath)?(oldest.yearOfDeath - oldest.yearOfBirth):((new Date().getFullYear()) - oldest.yearOfBirth);

        return oldestAge < personAge? person: oldest;
    })



    // let oldest = list[0];
//     for(person of list){

//       let personAge = (person.yearOfDeath)?(person.yearOfDeath - person.yearOfBirth):((new Date().getFullYear()) - person.yearOfBirth);
//       let oldestAge = (oldest.yearOfDeath)?(oldest.yearOfDeath - oldest.yearOfBirth):((new Date().getFullYear()) - oldest.yearOfBirth);
      
//       if(oldestAge <= personAge){
//         oldest = person;
//       }      
//     }

//     return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

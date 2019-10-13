
class Park{
    constructor(name, year, numberOfTrees, area){
        this.name = name;
        this.year = year;
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    calculateTreeDensity(){
        return this.numberOfTrees/area;
    }

    calculateAge(){
        const age = new Date().getFullYear() - this.year;
        console.log(`The calculated age for the park ${this.name} is ${age}`)
        return age;
    }
}

class Street{
    constructor(name, year, length, size = 'normal'){
            this.name = name;
            this.year = year;
            this.length = length;
            this.size = size;
    }
}

class Town{
    constructor(parks, streets){
        this.parks = parks;
        this.streets = streets;
    }

    calculateAverageAgeOfAllParks(){
        let sumOfAges = 0;

        for(const park of this.parks){
            sumOfAges += park.calculateAge();
        }
        return sumOfAges/this.parks.length;
    }
}

const parks = [new Park('Gandhi Park', 1950, 15, 1500),
               new Park('Carshalton Park', 1970, 25, 1000),
               new Park('Campbell Park', 1850, 25, 2500)];

const streets = [new Street('Jail road', 1950, 5000),
                 new Street('High Street', 1970, 5000, 'big'),
                 new Street('MK Street', 1850, 9000, 'huge')];

const town = new Town(parks, streets);
console.log(town.calculateAverageAgeOfAllParks());
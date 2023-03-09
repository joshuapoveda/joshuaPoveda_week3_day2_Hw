class Cat{
    //The constructor function within the class Cat creates a blueprint for future objects
    //that will be created based on its design
    constructor(name, color, lives, outdoor, character) {
        //Each instance of this.parameter will be a token for a property we decide to give 
        //our new object
    this.name = name
    this.color = color
    this.lives = lives
    this.outdoor = true
    this.character = []
    }
    
    //the following functions will belong to the class Cat and can be invoked by
    //objects created using the bluepring set by the constructor
    
        //This function checks to see if the value of outdoor is false. If so, it adds one
        //to the value of the lives property (which has a data type of number)
        //Else, if the value of outdoor is true, the value of the lives propery is reduced by 1
        //a string is returned in both cases
    curious(outdoor) {
        if (outdoor === false) {
            myCat.lives = myCat.lives + 1
            return 'Indoor cats gain an extra life.'
        } else {
            myNeighborsCat.lives = myNeighborsCat.lives - 1
            return 'Outdoor cats lose a life. It\'s rough out there'
        }
    }

        //This function simply returns a string statement and uses a tempalate literal
        //to include the name property given to a particular instantiation of our class Cat
    needy() {
        return `No choice here pal, It looks like ${this.name} is needy.`
    }

        //This function has a parameter which is checked for equality with 
        //two values: 'Black & White' and 'Black'. If the argument given is equal to first
        //value, the property of character, which is an empty array is filled with 3 strings.
        //If the argument is equal to the second value, the same property is filled with another
        //set of strings. this.character.push() method is used to fill the empty array...
    personality(color) {
        if (color === 'Black & White') {
            this.character.push('Hilarious','Talkative','Lap cat')
        } else if (color === 'Black') {
            this.character.push('Independent','Strong-willed','Hunters')
        }
    }

    
    
}

const myCat = new Cat('BZ', 'Black & White', 9, false)
console.log(myCat.curious(false))
console.log(myCat.needy())
console.log(myCat.personality('Black & White'))
console.log(myCat)

const myNeighborsCat = new Cat('Fulano', 'Orange', 8, true)
console.log(myNeighborsCat.curious(true));
console.log(myNeighborsCat.needy());
console.log(myNeighborsCat.personality("Black"))
console.log(myNeighborsCat)

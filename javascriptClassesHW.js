class Cat{
    //The constructor method within the class Cat creates a blueprint for future objects
    //that will be created based on its design
    constructor(name, color, lives = 9, outdoor, character) {
        //Each instance of this.parameter will be a token for a property we decide to give 
        //our new object
    this.name = name
    this.color = color
    this.lives = lives
    this.outdoor = true
    this.character = []
    }
    
    //the following methods will belong to the class Cat and can be invoked by
    //objects created using the bluepring set by the constructor
    
        //This method checks to see if the value of outdoor is false. If so, it adds one
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

        //This method simply returns a string statement and uses a tempalate literal
        //to include the name property given to a particular instantiation of our class Cat
    needy() {
        return `No choice here pal, It looks like ${this.name} is needy.`
    }

        //This method has a parameter which is checked for equality with 
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

/////////////////////////////////////////////////////////

class Pirate{
    constructor(eyepatch,limbs,parrotColor) {
        this.eyepatch = eyepatch
        this.limbs = limbs
        this.parrotColor = parrotColor
    }
        //This method simply returns a string
    arggg() {
        return 'This pirate\s favorite word is...Arggg!'
    }
        //This method replaces all property values from a given object
    seaSick() {
        this.eyepatch = 'eaipjfoi'
        this.limbs = 'aliijfoei'
        this.parrotColor = 'aoijiebno'
    }
        //this method removes the parrotColor property from a given object
    parrotEscapes() {
        delete this.parrotColor
    }

    makeArray(pirate1, pirate2) {
        return [pirate1,pirate2]
    }

}

//The following are three instantiations of the Pirate class
const oneEyedJack = new Pirate(true, 4, "red");
const TwoEyedJack = new Pirate(false, 3, "green");
const ThreeEyedJack = new Pirate(true, 3, "yellow");

console.log(TwoEyedJack.arggg())

oneEyedJack.seaSick()
console.log(oneEyedJack)

//The following code creates an array of three objects instantiated by the Pirate class and
//saves it to a variable using the push method
const jollyRoger = []
jollyRoger.push(oneEyedJack,TwoEyedJack,ThreeEyedJack)
console.log(jollyRoger)


//The following code insantiates two objects and places them directly into an array and
//saves it to a variable
const blackPearl = [new Pirate(false,2,'blue'),new Pirate(true,1,'purple')]
console.log(blackPearl)

//The following two snippets of code iterates over our arrays of objects and returns properties of each object
for (let i = 0; i < jollyRoger.length; i++) {
  console.log(Object.keys(jollyRoger[i]));
}
for (let i = 0; i < jollyRoger.length; i++) {
  console.log(Object.values(jollyRoger[i]));
}

ThreeEyedJack.parrotEscapes()
console.log(ThreeEyedJack)

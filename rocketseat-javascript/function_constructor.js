/* Function () constructor

//* expressao new
//* criar um novo objeto
//* this keyword
*/

// let name = new String("Gael")
// console.log(name)

function Person (name) {
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const gugu = new Person("Gugu")
const bibi = new Person ("bibi")
console.log(gugu.walk())
console.log(bibi.walk())
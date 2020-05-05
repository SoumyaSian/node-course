// const square = function(x){
//     return x*x;
// }

// const square = (x) =>{
//     return x*x;
// }

// const square = (x) => x*x;
// console.log(square(3));

//arrow functions don't bind their own this value
const event = {
    name : 'Birthday Party',
    guestList : ['Sian','carino'],
    printGuestList(){ //shorthad of arrow function
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending ' + this.name)
        });

    }
}

event.printGuestList();
// db.collection("people")
//     .where("age", "<=", 40)
//     .where('name', '==', 'mary')
//     .get()
//     .then((data) =>{
//         let docs = data.docs
//         docs.forEach((doc)=>
//             console.log(doc.data()))
//     });


// //update a document
// db.collection('people').doc('tPSAa6iBk0NClv8WTSRw').update({

//     "favorites.food": 'burgers'



// })

// let real = {
//     name: 'Real Madrid',
//     city: "Madrid",
//     country: "Spain",
//     "top scorers": ['Ronaldo', "Benzema", "Hazard"],
//     "worldwide fans (in millions)": 798



// }




// db.collection('teams').add(real) 


let manu = {
    name: "Manchester United",
    city: "Manchester",
    country: "England",
    'top scorers': ["Cantona", 'Rooney', 'Ronaldo'],
    'worldwide fans (in millions)': 755
}

let mancity = {
    name: 'Manchester City',
    city: 'Manchester',
    country: 'England',
    'top scorers': ['Sterling', 'Aguero', 'Haaland'],
    'worldwide fans (in millions)': 537
}

let argentina = {
    name: 'Argentina national team',
    city: 'Not applicable',
    country: 'Argentina',
    "top scorers": ['Messi', 'Batistuta', 'Maradona'],
    "worldwide fans (in millions)": 888

}

// db.collection('teams').add(manu) 
// db.collection('teams').add(mancity) 
// db.collection('teams').add(argentina)


// db.collection('teams')
// .where('country','==','Spain')
// .get()
// .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//         console.log(doc.data());
//     });
// });


// db.collection('teams')
// .where('country','==','Spain')
// .where('city', '==', 'Madrid')
// .get()
// .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//         console.log(doc.data());
//     });
// });


// db.collection('teams')
// .get()
// .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//         code.innerHTML += (doc.data().name);
//         code.innerHTML += `<br>`
//     });
// });


// db.collection('teams')
// .where('country', '!=', 'Spain')
// .get()
// .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//         code.innerHTML += (doc.data().name);
//         code.innerHTML += `<br>`
//     });
// });

// db.collection('teams')
// .where('country', 'not-in', ['England', 'Spain'])
// .get()
// .then((data) => {
//     let docs = data.docs;
//     docs.forEach((doc) => {
//         code.innerHTML += (doc.data().name);
//         code.innerHTML += `<br>`
//     });
// });


db.collection('teams')
.where('country', '==', 'Spain')
.where('worldwide fans (in millions)', '>', 700)
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        code.innerHTML += (doc.data().name);
        code.innerHTML += `<br>`
    });
});








// task 1
let real = {
    name: 'Real Madrid',
    city: "Madrid",
    country: "Spain",
    "top scorers": ['Ronaldo', "Benzema", "Hazard"],
    "worldwide fans (in millions)": 798



}


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
let barca = {
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    "top scorers": ["Messi", "Suarez", "Puyol"],
    "worldwide fans (in millions)": 738,
  };
   
  let brazil = {
    name: "Brazil National Team",
    city: "Not applicable",
    country: "Brazil",
    "top scorers": ["Ronaldinho", "Cafu", "Bebeto"],
    "worldwide fans (in millions)": 950,
  };
  let atletico = {
    name: "Atletico Madrid",
    city: "Madrid",
    country: "Spain",
    "top scorers": ["Aragonés", "Griezmann", "Torez"],
    "worldwide fans (in millions)": 400,
  };
   
  

// db.collection('teams').add(manu) 
// db.collection('teams').add(mancity) 
// db.collection('teams').add(argentina)
// db.collection('teams').add(real) 
// db.collection('teams').add(barca) 
// db.collection('teams').add(brazil) 
// db.collection('teams').add(atletico) 



// task 2
//q1
db.collection('teams')
.where('country','==','Spain')
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q1.innerHTML+= (doc.data().name) + `<br>`;
    });
});

//q2
db.collection('teams')
.where('country','==','Spain')
.where('city', '==', 'Madrid')
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q2.innerHTML+= (doc.data().name) + `<br>`;
    });
});

//q3
db.collection('teams')
.where('city', '==', 'Not applicable')
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q3.innerHTML += (doc.data().name)+`<br>`;
    });
});

//q4
db.collection('teams')
.where('country', '!=', 'Spain')
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q4.innerHTML += (doc.data().name) + `<br>`;
    });
});

//q5
db.collection('teams')
.where('country', 'not-in', ['England', 'Spain'])
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q5.innerHTML += (doc.data().name)+`<br>`;
    });
});

//q6
db.collection('teams')
.where('country', '==', 'Spain')
.where('worldwide fans (in millions)', '>', 700)
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q6.innerHTML += (doc.data().name) + `<br>`;
        
    });
});

//q7
db.collection('teams')
.where('worldwide fans (in millions)', '>=', 500)
.where('worldwide fans (in millions)', '<=', 600)
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q7.innerHTML += (doc.data().name) + `<br>`;
        
    });
});

//q8
db.collection('teams')
.where('top scorers', "array-contains", 'Ronaldo')
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q8.innerHTML += (doc.data().name) + `<br>`;
        
    });
});

//q9
db.collection('teams')
.where('top scorers', "array-contains-any", ['Ronaldo', 'Messi', 'Maradona'])
.get()
.then((data) => {
    let docs = data.docs;
    docs.forEach((doc) => {
        q9.innerHTML += (doc.data().name) + `<br>`;
        
    });
});


//task 3
//update Real Madrid
// db.collection('teams').doc('Q8cHc7Doq7urgBySibL9').update({
//     name: 'Real Madrid FC',
//     'worldwide fans (in millions)': 811


// })

// update Barcelona
// db.collection('teams').doc('QERZLj7oJnWgjywQmUPt').update({
//     name: 'FC Barcelona',
//     'worldwide fans (in millions)': 747


// })

//updating top scorers
//real madrid
// db.collection('teams').doc('Q8cHc7Doq7urgBySibL9').update({
//     'top scorers': firebase.firestore.FieldValue.arrayRemove('Hazard')

// })
// db.collection('teams').doc('Q8cHc7Doq7urgBySibL9').update({
//     'top scorers': firebase.firestore.FieldValue.arrayUnion('Crispo')

// })



//Barcelona
// db.collection('teams').doc('QERZLj7oJnWgjywQmUPt').update({
//     'top scorers': firebase.firestore.FieldValue.arrayRemove('Puyol')

// })
// db.collection('teams').doc('QERZLj7oJnWgjywQmUPt').update({
//     'top scorers': firebase.firestore.FieldValue.arrayUnion('Deco')

// })

//adding jersey colors
// db.collection('teams').doc('Q8cHc7Doq7urgBySibL9').update({
//     color: {
//         home: "White",
//         away: "Black"

//     }

// })
// db.collection('teams').doc('QERZLj7oJnWgjywQmUPt').update({
//     color: {
//         home: "Red",
//         away: "Gold"
//     }

// })

// updating jersey colors
db.collection('teams').doc('Q8cHc7Doq7urgBySibL9').update({
    'color.away': "Purple"


})
db.collection('teams').doc('QERZLj7oJnWgjywQmUPt').update({
    'color.away': "Pink"

})





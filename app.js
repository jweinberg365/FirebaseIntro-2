
let person = {
    name: "Jackie",
    married: false,
    age: 41,
    friends: ["neil", "sally", "peter", "mike"]

}
//db.collection("people").add(person)


// db.collection('people')
//     .where('name', '==', 'john')
//     .get()
//     .then((data)=>{
//     let docs = data.docs;
//     docs.forEach((doc)=>{
//         console.log(doc.data())
//     });
// })

//show all people who have bob sarah or neil as one of their friends

























//show all people whose age is greater than 30
db.collection("people").where("john",">", 30)
    .get()
    .then((data) => {
        let docs = data.docs;
        docs.forEach((doc)=>{
            console.log(doc.data());
        });
    });











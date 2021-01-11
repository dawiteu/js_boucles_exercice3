let multiplicateur = 5; 


//exo 1
for(i=0; i<=9; i++){
    console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`); 
}
console.log('------'); 
//exo 2

for(i=0; i<=9; i=i+2){
    console.log(`${multiplicateur} x ${i} = ${multiplicateur*i}`); 
}
console.log('------'); 

//exo 3 

let nombres = []; 
for(i=20; i > 0; i--){
    //console.log(`${i} -- `);
    if(i%2==0){
        nombres.push(i);
    }
}
console.log(nombres.join('-'));

console.log('------'); 

//exo 4 
let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]; 

let longPrenoms = []; 

/*
for(i=0; i<coding16.length; i++){
    if(coding16[i].length > 5){
        longPrenoms.push(coding16[i]); 
    }
}

console.log(longPrenoms); 
*/

/*
coding16.forEach(element => {

    if(coding16[coding16.indexOf(element)].length > 5){
        longPrenoms.push(coding16[coding16.indexOf(element)]);
    }

});

console.log(longPrenoms); 
*/

coding16.forEach((element, i) => {
    if(coding16[i].length > 5){
        longPrenoms.push(coding16[i]); 
    }

});


console.log(longPrenoms); 


console.log('---EXO5---'); 

//exo 5 

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

let grossesSommes = []; 
let petitesSomes = []; 


console.log(sommes); 
console.log(grossesSommes);


for(i=0; i<sommes.length; i++){ 
    if(sommes[i] > 60){
        grossesSommes.push(sommes[i]);
        //sommes.splice(sommes.indexOf(sommes[i]), 1);
        //i++;
    }else{
        petitesSomes.push(sommes[i]);
    }
}

sommes = petitesSomes; 

console.log(sommes); 
console.log(grossesSommes);



console.log('--======================-EXO 6 -===============================--'); 


let donnees = [14, 7, 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
console.log(donnees);
let unsorted = 0; 


/*
const re2 = Array.from(donnees).filter((e,i,arr) =>{
    let type = typeof e; 
    if(type){
        type.push(e);
    }
    return type; 
});
console.log(re2); 
*/




/*
let result = Array.from(donnees).reduce((prev,curr ) => {
    let type = typeof curr; 
    //console.log(prev[type]);
    if( prev[type] ){
        prev[type].push(curr);
        donnees.splice(unsorted, 1);
    }else{
        unsorted++;
    }
    return prev;
}, {object: [], string: [], number: [], boolean: [] });

console.log(result); 

console.log(donnees); 
*/



/* // while depuis le debut (ne pas oublier d'ajt type boolean.. sinon autres;;


let typeString = []; 
let typeNumber = []; 
let typeObject = []; 
let typeAutres = []; 

let max = 0; 

while(max < donnees.length){
    //console.log(donnees, max);
    current = donnees[max];
    type = typeof donnees[max];

    switch(type){
        case "string":
            typeString.push(current);
        break;

        case "number":
            typeNumber.push(current);
        break; 

        case "object":
            typeObject.push(current);
        break;


        default:
            typeAutres.push(current);
        break;
    }   
    delete donnees[max]; 
    max++; 
}


console.log("String's: ", typeString); 
console.log("nombre's: ", typeNumber); 
console.log("object's: ", typeObject);
console.log("autre's: ",  typeAutres);


console.log(donnees);

*/

//while de la fin // 


/*
console.log(donnees);

let typeString = []; 
let typeNumber = []; 
let typeObject = []; 
let typeAutres = []; 

max = donnees.length-1; 

while(max >= 0){
    max--;
    current = donnees[max];
    type = typeof donnees[max];

    switch(type){
        case "string":
            typeString.push(current);
        break;

        case "number":
            typeNumber.push(current);
        break; 

        case "object":
            typeObject.push(current);
        break;


        default:
            typeAutres.push(current);
        break;
    }  
    donnees.pop();
}


console.log("String's: ", typeString); 
console.log("nombre's: ", typeNumber); 
console.log("object's: ", typeObject);
console.log("autre's: ",  typeAutres);


console.log(donnees);
// end while de la fin; 



*/
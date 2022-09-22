let xhr= new XMLHttpRequest(); //creating reequest
console.log("new object created"+xhr)
xhr.open('GET',"https://restcountries.com/v3.1/all") //open request

xhr.onload = function() //onloading function
{
    
        if ( xhr.status>=200&& xhr.status<300)
        {
            const data=JSON.parse(this.response);
 //console.log(data)
        //    let fdata=data.filter((data1)=>{
        //     if(data1.region=="Asia"){
        //            return data1 }
                    
        //    })
        // fdata.forEach(obj => { 
        //      console.log(obj.name.common) //Show all the name so fo the countries from Asia
            
        // });
//         let popdata= data.filter((obj1)=>{

//         if( obj1.population<200000){
//             return obj1
//         }
        

//         })
//         popdata.forEach(obj => {
//             console.log(obj.name.common)
            
//         });
    
    
//         }
//        data.forEach(obj => { console.log(`Name:${obj.name.common}
//        Capital:${obj.capital}
//        Flag:${obj.flag}`)
    
//     });
//     let popi=[]
//     data.forEach(obj => {
        
//         return popi.push(obj.population)
//     });

// let populationdata= popi.reduce((p1,p2)=>{
// return p1+p2

// })
// console.log(populationdata) //To show total of population



//Couldnot get an output//raised query
data.forEach(obj => {
 obj.forEach(obj1 => {
    if(
        obj1.currencies=="USD"
    ){
        console.log(obj)
    }
    
 });


})
}
}
xhr.send()

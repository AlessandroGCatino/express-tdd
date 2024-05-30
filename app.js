
const createSlug = (title, list) => {
 
    if(!title || typeof title !== "string"){
        throw new Error("Il titolo non può essere vuoto")
    }
    if(!Array.isArray(list)){
        throw new Error("Il secondo argomento deve essere un array")
    }
    let slug = title.split('').map(char => {
        return char === ' ' ? '-' : char;
    }).join('').toLowerCase();
    let counter = 1;
    
    let newSlug = [...slug].join("")
        
    while (list.includes(newSlug)){
        newSlug=`${slug}-${counter}`
        counter++
    }
    
    console.log(newSlug)
    return newSlug
}

module.exports = {createSlug};
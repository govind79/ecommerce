export const ADD = (item)=>{
    console.log(item,"  kj")

    
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const REMOVE = (_id)=>{
    console.log(_id,"action remove")
    return{
        type:"REMOVE_CART",
        payload:_id
        
    }
   
}

// ==new====

// export const DLT = (_id)=>{
//     console.log(_id,"action remove")
//     return{
//         type:"RMV_CART",
//         payload:_id
        
//     }
   
// }
// =====new======//
// =========remove individual item ===============//


export const REMOVE_ITEM = (item)=>{
    console.log(item,"action remove")
    return{
        type:"REMOVE_ONE",
        payload:item
        
    }
   
}

// export const REMOVEE= (item)=>{
//     console.log(item,"action remove")
//     return{
//         type:"RMV_ONE",
//         payload:item
        
//     }
   
// }
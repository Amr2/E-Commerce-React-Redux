import { v4 } from "uuid";

const InitState = {
    Id: v4,
    GustUser : true,
    userId:  0,
    products:[],
    date : new Date().toJSON()
}

const CartReducer =(state = InitState , action)=>{
    switch (action.type) {
        case "Add_Product":
            const temp_products = 
            state.products.filter(
                p => p.productId === action.payload.product.id).length > 0 
                ? state.products.map(p=>p.productId === action.payload.product.id ? {...p , quantity: p.quantity + action.payload.product.quantity }:{...p} ) 
                : [ ...state.products , action.payload.product ]
            
            return{ ...state , products:temp_products , date:new Date().toJSON() };
    
        default:
            return { ...state };
    }
}

export default CartReducer
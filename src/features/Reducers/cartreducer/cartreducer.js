import { v4 } from "uuid";

const InitState = {
    Id: v4,
    GustUser : true,
    userId:  0,
    products:[],
    date : new Date().toJSON(),
    total:0.00,
}

const CartReducer =(state = InitState , action)=>{
    switch (action.type) {
        case "Add_Product":
            const temp_products = 
            state.products.filter(
                p => p.productId === action.payload.productId).length > 0 
                ? state.products.map(p => p.productId === action.payload.productId ? {...p , quantity: p.quantity + action.payload.quantity }:{...p} ) 
                : [ ...state.products , action.payload ]
            

                return{ ...state , products:temp_products , date:new Date().toJSON() , total:state.total+(action.payload.price*action.payload.quantity) };
    
        default:
            return { ...state };
    }
}

export default CartReducer
// import { ADD_TO_CART, REMOVE_FROM_CART  } from "../Actions/CartAction";

// const initialState = {
//     cart:[],
//     products: [
//         // {
//         //     "id": 1,
//         //     "name": "Perfume",
//         //     "price": 200,
//         //     "quantity": 1,
//         //     "selected": false
//         //   },
//         // {
//         //     "id": 2,
//         //     "name": "Body-spray",
//         //     "price": 400,
//         //     "quantity": 2,
//         //     "selected": false
//         //   },
//         //   {
//         //     "id": 3,
//         //     "name": "Lipstick",
//         //     "price": 300,
//         //     "quantity": 2,
//         //     "selected": false
//         //   },
//         //   {
//         //     "id": 4,
//         //     "name": "Body-Lotion",
//         //     "price": 500,
//         //     "quantity": 3,
//         //     "selected": false
//         //   },
//         //   {
//         //     "id": 5,
//         //     "name": "Setting-spray",
//         //     "price": 250,
//         //     "quantity": 1,
//         //     "selected": false
//         //   }
//     ],
//   };
//    const ShoppinReducer = (state = initialState, action) => {
//     switch (action.type) {
//     case ADD_TO_CART:
//         const newItem = {
//             productId: action.id, 
//             title: action.title,
//             cartId: state.cart.length + 1
//         }
//         const newCart = [...state.cart, newItem];
//         return {...state, cart: newCart};
    
    
//     case REMOVE_FROM_CART:
//         const cartId = action.cartId;
//         const remainingCart = state.cart.filter(item => item.cartId !== cartId);
//         return {...state, cart: remainingCart}
     
//       default:
//         return state;
//     }
//   };
//   export {ShoppinReducer};
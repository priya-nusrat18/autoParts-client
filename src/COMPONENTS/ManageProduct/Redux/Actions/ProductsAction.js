
import fakeApiStore from '../APIs/fakeApiStore';
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";

export const  products_request = 'products_request';
export const  get_products_success = 'get_products_success';
export const  get_products_error = 'get_products_error';


export const ProductsAction = ()=>{
    return async(dispatch)=>{
            try{
                dispatch({
                    type: products_request
                })
                const res = await  fakeApiStore.get('/products')
                console.log(res.data);
                dispatch({
                    type: get_products_success,
                    payload:  res.data
                })
            }catch (error){
                    dispatch({
                        type: get_products_error,
                        payload:  error.message
                    })
            }
    }

}
export const fetchProductsById = (id) => 
   async  (dispatch)=> {
    const response = await fakeApiStore.get(`/products/${id} `);
    console.log(response);
    dispatch({ type: SELECTED_PRODUCT, payload: response.data });
};
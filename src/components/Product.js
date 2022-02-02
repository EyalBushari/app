import { Products } from "../data/products"
export function Product(props) {
    return <div>
        {props.productId}
        <div className='flex-row'>
            {Products[props.productId].description}
        </div>



    </div>




}
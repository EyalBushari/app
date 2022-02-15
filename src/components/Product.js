import { Products } from "../data/products"
export function Product(props) {
    const product = Products.find(function (product) {
        return product.id == props.productId
    });
    if (product == null) {
        return null
    }

    return <div>
        {props.productId}
        <div className='flex-row'>
            {product.description}
        </div>



    </div>




}
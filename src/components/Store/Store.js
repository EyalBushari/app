import { useState } from "react"
import { Products } from "../../data/products";
import './Store.css'

export function Store(props) {
    const [category, setCategory] = useState(null);

    function inputChanged(evt){
        if(evt.target.checked){
            setCategory(evt.target.name);
        }
        else{
            setCategory(null);
        }
    
    }
    return <div className='store-details'>
        <div className='store'>
            <h1>לילה טוב</h1>
            {Products.map(function (product) {
                if (category == product.category || category == null) {
                    return <img onClick={function () { props.updatePage("product", product.id) }} src={product.image} height="300px" width="200px" className='image' />
                }
                else {
                    return null;
                }
            })}
        </div>
        <div className='filters'>
            {/* <button onClick={function () { setCategory("ברזים") }}>חיפוש</button> */} 
        </div>
        <div>
            
  <input onChange={inputChanged} type="checkbox"name="taps"/>
  <label >ברזים</label>
</div>

    </div>
    // return <div>
    //     <div className='store-details'>
    //         <h1>המוצרים שלנו</h1>
    //         <button onClick={function () { setCategory("dd") }}>ברזים</button>
    //     </div>
    //    <div>
    //    {Products.map (function(product){
    //        if(category == product.category || category == null){
    //            return <img onClick={function(){props.updatePage("product",product.id)}} src={product.image} height="300px" width="200px" className='image' />
    //        }
    //        else{
    //            return null;
    //        }
    //     })}
    //    </div>
    // </div>
}
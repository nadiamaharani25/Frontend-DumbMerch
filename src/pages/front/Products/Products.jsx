import React from 'react'
import './Products.css';

const Products = ({ productItem }) => {
    return (
        <div className='products'>
            {productItem.map((productItem) => (
                <div className='card'>
                    <div>
                        <img
                            className='product-image'
                            src={productItem.image}
                            alt={productItem.name}
                        />
                    </div>

                    <div>
                        <h3 className='product-name'>{productItem.name}</h3>
                    </div>
                    <div className='product-price'>{productItem.price}</div>
                    <div className='product-price'>{productItem.stock}</div>

                    <div>
                        <button className='product-add-button'>Add to cart</button>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default Products
import React, { Component } from 'react'
import ListCategory from './ListCategory'

class Category extends Component {

    state = {
        product: [
            { no: '1', categoryName: 'Mouse' },
            { no: '2', categoryName: 'Keyboard' },
            { no: '3', categoryName: 'Bag' },
            { no: '4', categoryName: 'Stationary' },
            { no: '5', categoryName: 'Doll' },
            { no: '6', categoryName: 'Pillow' },
        ]
    }

    render() {
        return (
            <div>
                <ListCategory productListCategory={this.props.product} />
            </div>
        )
    }
}

export default Category
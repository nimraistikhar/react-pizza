import React from 'react'
import {
    ProductsContainer,
    ProductWrapper, 
    ProductsHeading, 
    ProductCart, 
    ProductImg, 
    ProductInfo, 
    ProductTitle, 
    ProductDesc, 
    ProductPrice, 
    ProductButton, 
} from './ProductElements';

const Product = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCart key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCart>
                    )
                } )}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Product

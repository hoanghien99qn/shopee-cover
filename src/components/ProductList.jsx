import React from 'react'
import { useGetListsQuery } from '../features/api/apiSlice'
import ProductCard from './ProductCard'
import Loading from './Loading'

function ProductList(props) {

    const { data: list,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetListsQuery()

    let content

    if (isLoading) {
        content = <Loading />
    } else if (isSuccess) {
        content = list.map(product => <ProductCard key={product.id} item={product} />)
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }


    return (
        <div className="product row sm-gutter">
            {
                content
            }
        </div>
    );
}

export default ProductList;
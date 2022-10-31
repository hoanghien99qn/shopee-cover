import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://618d265aedab980017fd522c.mockapi.io/api' }),
    tagTypes: ['Product', 'Collection'],
    endpoints: builder => ({
        getLists: builder.query({
            query: ({collectionId, params}) => {
                return {
                    url: `/collections/${collectionId}/products/?${params}`
                }
            },
            providesTags: (result = [], error, arg) => [
                'Product',
                ...result.map(({ id }) => ({ type: 'Product', id }))
            ]
        }),
        getCollections: builder.query({
            query: () => '/collections',
            providesTags: (result = [], error, arg) => [
                'Collection',
                ...result.map(({ id }) => ({ type: 'Collection', id }))
            ]
        }),
        getProduct: builder.query({
            query: ({idProduct, collectionId}) => `/collections/${collectionId}/products/${idProduct}`,
            providesTags: (result = [], error, arg) => [{ type: 'Product', id: arg }]
        }),
        addProduct: builder.mutation({
            query: ({product, collectionId}) => ({
                url: `/collections/${collectionId}/products`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: ({idProduct, collectionId}) => ({
                url: `/collections/${collectionId}/products/${idProduct}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }]
        }),
        editProduct: builder.mutation({
            query: ({product, collectionId}) => ({
                url: `/collections/${collectionId}/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }]
        })
    })
})

export const { useGetListsQuery,
    useGetCollectionsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useEditProductMutation
} = apiSlice
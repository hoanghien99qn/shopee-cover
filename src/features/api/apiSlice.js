import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://618d265aedab980017fd522c.mockapi.io/api' }),
    tagTypes: ['Product'],
    endpoints: builder => ({
        getLists: builder.query({
            query: () => '/products',
            providesTags: (result = [], error, arg) => [
                'Product',
                ...result.map(({ id }) => ({ type: 'Product', id }))
            ]
        }),
        getProduct: builder.query({
            query: (idProduct) => `/products/${idProduct}`,
            providesTags: (result = [], error, arg) => [{ type: 'Product', id: arg }]
        }),
        addProduct: builder.mutation({
            query: product => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: idProduct => ({
                url: `/products/${idProduct}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }]
        }),
        editProduct: builder.mutation({
            query: product => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }]
        })
    })
})

export const { useGetListsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useEditProductMutation
} = apiSlice
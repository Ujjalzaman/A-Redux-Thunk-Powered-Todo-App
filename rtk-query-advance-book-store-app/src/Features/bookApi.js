import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const bookApi  = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9000'}),
    keepUnusedDataFor: 600,
    tagTypes : ['Books'],
    endpoints: (builder) =>({
        getBooks : builder.query({
            query: () => '/books',
            providesTags: ['Books']
        }),
        getBook : builder.query({
            query: (id) => `/books/${id}`,
            providesTags: (id) => [{type:'Book', id: arg.id}]
        }),
        addBook : builder.mutation({
            query: (book) => ({
                url: '/books',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['Books']
        }),
        editBook : builder.mutation({
            query: ({id, book}) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: book,
            }),
            invalidatesTags: () => [
                'Books',{type:'Book', id: arg.id}
            ],
        }),
        deleteBook : builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books']
        })
    })
})
export const {useGetBookQuery, useGetBooksQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation} = bookApi
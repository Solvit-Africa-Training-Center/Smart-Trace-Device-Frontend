import { apiSlice } from "../apiEntry";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        method: "POST",
        body: data,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletepRODUCT: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeletepRODUCTMutation,
} = productApi;

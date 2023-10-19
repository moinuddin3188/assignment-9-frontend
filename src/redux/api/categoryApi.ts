import { ICategory, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORY_URL = "/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (data) => ({
        url: CATEGORY_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.category],
    }),

    categories: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: CATEGORY_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICategory[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
      providesTags: [tagTypes.category],
    }),

    category: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),

    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useCategoriesQuery,
  useCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;

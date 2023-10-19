import { IMeta, IReview } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/reviews";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation({
      query: (data) => ({
        url: REVIEW_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    reviews: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: REVIEW_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IReview[], meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),

    review: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

    updateReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useDeleteReviewMutation,
  useReviewQuery,
  useReviewsQuery,
  useUpdateReviewMutation,
} = reviewApi;

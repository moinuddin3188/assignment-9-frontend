import { IFAQs, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FAQS_URL = "/faqs";

export const faqsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFAQ: build.mutation({
      query: (data) => ({
        url: FAQS_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faqs],
    }),

    FAQs: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: FAQS_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFAQs[], meta: IMeta) => {
        return {
          FAQs: response,
          meta,
        };
      },
      providesTags: [tagTypes.faqs],
    }),

    FAQ: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${FAQS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faqs],
    }),

    updateFAQ: build.mutation({
      query: (data) => ({
        url: `${FAQS_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faqs],
    }),

    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `${FAQS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faqs],
    }),
  }),
});

export const {
  useAddFAQMutation,
  useDeleteFAQMutation,
  useFAQQuery,
  useFAQsQuery,
  useUpdateFAQMutation,
} = faqsApi;

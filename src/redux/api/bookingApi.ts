import { IBooking, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (data) => ({
        url: BOOKING_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    bookings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BOOKING_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),

    booking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    myBookings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${BOOKING_URL}/my-bookings`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),

    cancelBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data.id}/cancel-booking`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useBookingsQuery,
  useBookingQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
  useCancelBookingMutation,
  useMyBookingsQuery,
} = bookingApi;

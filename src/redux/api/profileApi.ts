import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROFILE_URL = "/profiles";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: `${PROFILE_URL}/my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/update-user-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateAdminProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/update-admin-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateSuperAdminProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/update-super-admin-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateEmployeeProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/update-employee-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useProfileQuery,
  useUpdateAdminProfileMutation,
  useUpdateEmployeeProfileMutation,
  useUpdateSuperAdminProfileMutation,
  useUpdateUserProfileMutation,
} = profileApi;

"use client";

import Payment from "@/components/bookingSteps/Payment";
import ProblemInfo from "@/components/bookingSteps/ProblemInfo";
import ReviewInformation from "@/components/bookingSteps/ReviewInformation";
import ServiceInfo from "@/components/bookingSteps/ServiceInfo";
import UserInfo from "@/components/bookingSteps/UserInfo";
import StepperForm from "@/components/stepperForm/StepperForm";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { message } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId");
  const { userId } = getUserInfo() as any;

  const [addBooking] = useAddBookingMutation();
  const { data } = useServiceQuery(serviceId as string);

  const steps = [
    {
      title: "Service Information",
      content: <ServiceInfo service={data} />,
    },
    {
      title: "Problem Information",
      content: <ProblemInfo />,
    },
    {
      title: "User Information",
      content: <UserInfo />,
    },
    {
      title: "Review Booking Info",
      content: <ReviewInformation service={data} />,
    },
    {
      title: "Payment And Confirm",
      content: <Payment price={data?.price} />,
    },
  ];

  const handleBookingSubmit = async (values: any) => {
    values["userId"] = userId;
    values["serviceId"] = serviceId;
    if (values["payment"]) values["paymentStatus"] = "Done";

    try {
      const res = await addBooking(values).unwrap();

      if (res?.id) {
        message.success("Student created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <section style={{ padding: "0 200px" }}>
        <h1
          style={{ textAlign: "center", fontStyle: "italic", fontSize: "3rem" }}
        >
          Book a Service
        </h1>

        <StepperForm
          persistKey="booking-form"
          submitHandler={(value) => {
            handleBookingSubmit(value);
          }}
          steps={steps}
        />
      </section>

      <Footer />
    </>
  );
};

export default BookingPage;

"use client";

import { Button, Rate, message } from "antd";
import React, { useState } from "react";
import Form from "../form/Form";
import FormTextArea from "../form/FormTextArea";
import { getUserInfo } from "@/services/auth.service";
import { useAddReviewMutation } from "@/redux/api/reviewApi";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const ReviewForm = ({serviceId}: {serviceId: string}) => {
  const [value, setValue] = useState<number>(3);
  const user = getUserInfo()

  const [addReview] = useAddReviewMutation()

  const onSubmit = async (values: any) => {
    values["rating"] = value
    //@ts-ignore
    values["userId"] = user?.userId
    values["serviceId"] = serviceId

    try {
      const res = await addReview({...values}).unwrap()

      if(res?.id){
        message.success("Review added successfully")
      }
    } catch (error) {
      error && message.error("Failed")
    }
  };

  return (
    <div>
      <h2 style={{ fontStyle: "italic" }}>Add a Review</h2>
      <p style={{ marginBottom: "5px" }}>Your Rating:</p>
      <Rate
        tooltips={desc}
        onChange={setValue}
        value={value}
        style={{ fontSize: "15px", color: "#dd4026" }}
      />

      <div style={{marginTop: "20px"}}>
        <Form submitHandler={onSubmit}>
          <FormTextArea name="review" label="Review" rows={4} />
        </Form>
        <Button type="primary" style={{backgroundColor: "#dd4026", marginTop: "20px"}} >Submit</Button>
      </div>
    </div>
  );
};

export default ReviewForm;

"use client";

import React from "react";
import JRCollapse, { ItemProps } from "./JRCollapse";
import { useFAQsQuery } from "@/redux/api/faqsApi";

const FAQSection = () => {
  const { data } = useFAQsQuery({ page: 1, limit: 5 });
  const faqs = data?.FAQs;

  const questions: ItemProps[] = faqs?.map((faq, index) => {
    return {
      key: faq.id,
      label: faq.question,
      children: (
        <div>
          <p>{faq.answer}</p>
        </div>
      ),
    };
  }) as ItemProps[];

  return (
    <section style={{ padding: "0 200px", marginTop: "100px" }}>
      <h1
        style={{ textAlign: "center", fontStyle: "italic", fontSize: "3rem" }}
      >
        FAQs
      </h1>
      <JRCollapse defaultActiveKey={['1']} items={questions} />
    </section>
  );
};

export default FAQSection;

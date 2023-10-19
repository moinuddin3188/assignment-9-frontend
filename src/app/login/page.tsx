import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMS | Login",
};

const page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default page;

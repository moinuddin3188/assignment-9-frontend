import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import AboutUs from "@/components/ui/AboutUs";
import AvailableService from "@/components/ui/AvailableService";
import CategoryEvent from "@/components/ui/CategoryEvent";
import FAQSection from "@/components/ui/FAQSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import LatestNews from "@/components/ui/LatestNews";
import Navbar from "@/components/ui/Navbar";
import Statistics from "@/components/ui/Statistics";
import Testimonials from "@/components/ui/Testimonials";
import UpComingServices from "@/components/ui/UpComingServices";
import UploadImage from "@/components/ui/UploadImage";
import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import { Button } from "antd";
import axios from "axios";

export default function Home() {
  // const cloudinaryUrl = getCloudinaryUrl();
  // const presetKey = getPresetKey();

  // const onSubmit = (values: any) => {
  //   const obj = { ...values };
  //   console.log(obj);
  //   const file = obj["file"];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", presetKey);
  //   axios
  //     .post(cloudinaryUrl, formData)
  //     .then((res) => console.log(res.data.secure_url))
  //     .catch((err) => {
  //       console.error("Error uploading file:", err.message);
  //       // You can also check err.response for more details
  //     });
  // };

  return (
    <>
      <Navbar />
      <Header />
      <AvailableService />
      <CategoryEvent />
      <Statistics />
      <Testimonials />
      <UpComingServices />
      <AboutUs />
      <LatestNews />
      <FAQSection />
      <Footer />
    </>
  );
}

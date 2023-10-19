import { getCloudinaryUrl, getPresetKey } from "@/helpers/config/envConfig";
import axios from "axios";

export const uploadImage = (values: any): void => {
  const cloudinaryUrl = getCloudinaryUrl();
  const presetKey = getPresetKey();

  const obj = { ...values };
  console.log(obj);
  const file = obj["file"];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", presetKey);

  axios
    .post(cloudinaryUrl, formData)
    .then((res) => {
      return res.data?.secure_url;
    })
    .catch((err) => {
      console.error("Error uploading file:", err.message);
      // You can also check err.response for more details
    });
};

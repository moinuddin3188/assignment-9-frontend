export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://jewelery.onrender.com/api/v1";
};

export const getCloudinaryUrl = (): string => {

  return (
    process.env.CLOUDINARY_API_URL ||
    "https://api.cloudinary.com/v1_1/dezrk5czt/image/upload"
  );
};

export const getPresetKey = (): string => {
  return process.env.PRESET_KEY || "uzc6w3jc";
};

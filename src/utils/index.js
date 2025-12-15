import axios from "axios";

export const imageUpload = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

     const res = await axios.post(
       `https://api.imgbb.com/1/upload?key=${
         import.meta.env.VITE_IMGBB_API_KEY
       }`,
       formData
  );
  console.log(res?.data?.data?.url);
     return res?.data?.data?.url;
}
import { BASE_URL } from "./base-url";

export const deleteImageFromUploadthingByKey = async (key: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/uploadthing`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key }),
    });

    const resData = await response.json();

    return resData;
  } catch (error) {
    console.error("Error deleting image from Uploadthing:", error);
    return error;
  }
};

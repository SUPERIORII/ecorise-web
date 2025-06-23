import customUrl from "./basedUrl";
const getUserUrl = "api/getusers";

export const fetchContent = async (content) => {
  if (content === "user") {
    const response = await customUrl.get(getUserUrl);
    console.log(response);
  } else {
    // console.log(content);
  }
};

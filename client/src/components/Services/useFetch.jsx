import customUrl from "../../basedUrl";

const useFetch = async (url) => {
  const response = await customUrl.get(url);

  return response.data;
};

export default useFetch;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import customUrl from "../../basedUrl";
import { Wrapper } from "./profileStyle";

const Profile = () => {
  // const { psudoname } = useParams();
  const psudoname = useLocation().pathname.split("/")[2];

  const { isError, isLoading, data } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await customUrl.get("/api/user/find/" + psudoname);
      return response.data;
    },
  });

  if (isError) return <h1>Something went wrong</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Wrapper>
      <h1> userId: {data.id}</h1>
      <h1>username: {data.username}</h1>
      <h1>profilepic:{data.user_profile}</h1>

      <h1>email:{data.email}</h1>
    </Wrapper>
  );
};

export default Profile;

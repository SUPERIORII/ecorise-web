"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import baseUrl from "@/lib/baseUrl";
import { TeamGrid } from "../customUi";

const Team = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["fetureMember"],
    queryFn: async () => {
      const response = await baseUrl.get("api/members/featured");
      return response.data;
    },
  });

  console.log(data, isError, isLoading);
  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isError?"Error Occurs": isLoading?"loading Team members" :
      data.map((member)=>{
        return <TeamGrid key={member.sociallink_id} {...member} />;
      }) 
      }
   
    </section>
  );
};

export default Team;

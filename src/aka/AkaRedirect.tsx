import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { akaGetV1 } from "sistem-shared";
import { z } from "zod";
import fetcher from "../fetcher.js";

type TGetResponse = z.infer<typeof akaGetV1["response"]["200"]>;

function AkaRedirect() {
  const { short } = useParams();

  const { isLoading, isError } = useQuery<TGetResponse>(
    "/v1/aka/get/:short",
    () => fetcher.get(`/v1/aka/get/${short}`).then((req) => req.data),
    {
      enabled: !!short,
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data) => {
        location.href = data.target;
      },
    }
  );

  return (
    <div className="flex h-screen items-center justify-center">
      {(isLoading || !isError) && <p className="text-6xl">Redirecting...</p>}
      {isError && <p className="text-6xl">Not Found 😔</p>}
    </div>
  );
}

export default AkaRedirect;

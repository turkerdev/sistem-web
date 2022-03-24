import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { akaCreateV1 } from "sistem-shared";
import { z, ZodFormattedError } from "zod";
import fetcher from "../fetcher";
import AkaCreate from "./AkaCreate";
import AkaInput from "./AkaInput";

type TCreateBody = z.infer<typeof akaCreateV1["body"]>;
type TCreateResponse = z.infer<typeof akaCreateV1["response"]["200"]>;
type TCreateError = ZodFormattedError<TCreateBody>;

type Props = {
  setShort: (short: string) => void;
};

function AkaCreator(props: Props) {
  const [createBody, setCreateBody] = useState<TCreateBody>();
  const [createError, setCreateError] = useState<TCreateError>();

  useEffect(() => {
    const result = akaCreateV1.body.safeParse(createBody);
    const data = result.success ? undefined : result.error.format();
    setCreateError(data);
  }, [createBody]);

  const urlChange = (url: string) => {
    const startsWithProtocol = ["http://", "https://"].some((protocol) =>
      url.startsWith(protocol)
    );
    setCreateBody({ target: startsWithProtocol ? url : `https://${url}` });
  };

  const { mutate, isLoading } = useMutation<TCreateResponse, AxiosError>(
    () => fetcher.post("/v1/aka/create", createBody).then((req) => req.data),
    {
      onSuccess: (data) => {
        const redirectURL = import.meta.env.DEV
          ? `http://localhost:3000/aka`
          : `https://aka.turker.dev`;
        props.setShort(`${redirectURL}/${data.short}`);
      },
      onError: (error) => {
        toast(error.message, {
          position: "bottom-center",
          duration: 4000,
          style: { background: "#0F0F0F", color: "#FF0000" },
        });
      },
    }
  );

  return (
    <div className="p-4 rounded bg-[#313131]">
      <AkaInput
        urlChange={urlChange}
        urlError={createError?.target?._errors}
        hasError={createError !== undefined}
        mutate={mutate}
      />
      <AkaCreate
        hasError={createError !== undefined}
        mutate={mutate}
        isLoading={isLoading}
      />
    </div>
  );
}

export default AkaCreator;

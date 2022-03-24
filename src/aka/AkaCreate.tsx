import React from "react";
import { UseMutateFunction } from "react-query";

type Props = {
  hasError: boolean;
  mutate: UseMutateFunction;
  isLoading: boolean;
};

function AkaCreate(props: Props) {
  return (
    <button
      disabled={props.hasError || props.isLoading}
      onClick={() => props.mutate()}
      className={`bg-[#6153CC] mt-4 w-full p-2 rounded text-2xl 
      ${!props.hasError && !props.isLoading && "hover:brightness-125"}
      ${props.isLoading && "animate-pulse"}
      ${props.hasError && "brightness-50"}`}
    >
      tiny it!
    </button>
  );
}

export default AkaCreate;

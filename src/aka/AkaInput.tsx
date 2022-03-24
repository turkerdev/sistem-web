import React from "react";
import { UseMutateFunction } from "react-query";

type Props = {
  urlChange: (url: string) => void;
  urlError?: string[];
  hasError: boolean;
  mutate: UseMutateFunction;
};

function AkaInput(props: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="https://turker.dev"
        onChange={(e) => props.urlChange(e.target.value)}
        className="w-full p-2 text-3xl bg-transparent rounded border border-[#6153CC] outline-none"
        onKeyPress={(e) =>
          e.code === "Enter" && !props.hasError && props.mutate()
        }
      />
      {props.urlError?.map((error) => (
        <p key={error} className="text-red-500 ml-4">
          - {error}
        </p>
      ))}
    </div>
  );
}

export default AkaInput;

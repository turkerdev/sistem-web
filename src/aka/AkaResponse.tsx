import React from "react";

type Props = {
  short: string;
};

function AkaResponse(props: Props) {
  const copyToClipboard = () => navigator.clipboard.writeText(props.short);

  return (
    <div className="p-4 mt-8 rounded bg-[#313131]">
      <p className="text-xl inline-block sm:text-2xl md:text-2xl">
        {props.short}
      </p>
      <button
        className="float-right rounded p-1 hover:bg-black hover:bg-opacity-25"
        onClick={copyToClipboard}
      >
        <span className="font-icon">content_copy</span>
      </button>
    </div>
  );
}

export default AkaResponse;

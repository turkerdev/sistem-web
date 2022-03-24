import React, { useState } from "react";
import AkaCreator from "./AkaCreator";
import AkaResponse from "./AkaResponse";

function Aka() {
  const [short, setShort] = useState("");

  return (
    <div className="mt-32 mx-8 2xl:mx-[380px] xl:mx-60 lg:mx-48 md:mx-36 sm:mx-24">
      <AkaCreator setShort={setShort} />
      {short && <AkaResponse short={short} />}
    </div>
  );
}

export default Aka;

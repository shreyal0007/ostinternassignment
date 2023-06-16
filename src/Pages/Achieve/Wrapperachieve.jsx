import React from "react";
import Commoncard from "../../Components/Commoncard/Commoncard";
import { data3 } from "../../Constants/dummydata3";
import "../../Components/Commoncard/Commoncard.css";

const Wrapperachieve = () => {
  return (
    <div>
      <div className="div4">
        {data3.map((item, id) => (
          <Commoncard data={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Wrapperachieve;

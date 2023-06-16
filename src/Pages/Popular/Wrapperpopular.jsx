import React from "react";
import Commoncard from "../../Components/Commoncard/Commoncard";
import { data2 } from "../../Constants/dummydata2";
import "../../Components/Commoncard/Commoncard.css";

const Wrapperpopular = () => {
  return (
    <div>
      <div className="div4">
        {data2.map((item, id) => (
          <Commoncard data={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Wrapperpopular;

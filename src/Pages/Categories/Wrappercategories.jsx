import React from "react";
import Commoncard from "../../Components/Commoncard/Commoncard";
import { data1 } from "../../Constants/dummydata1";
import "../../Components/Commoncard/Commoncard.css";

const Wrappercategories = () => {
  return (
    <div>
      <div className="div4">
        {data1.map((item, id) => (
          <Commoncard data={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Wrappercategories;

import React from "react";
import Chip from "@mui/material/Chip";

const Amenities = (props) => {
  return (
    <div>
      {props.amenities.map((item, index) => (
        <Chip key={index} className="mr-1 mb-2" label={item} />
      ))}
    </div>
  );
};

export default Amenities;

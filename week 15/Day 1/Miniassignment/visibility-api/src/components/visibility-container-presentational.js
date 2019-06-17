import React from "react";
import ListEvents from "../events-list";

function Visibility({ title, listEvents }) {
  return <ListEvents title={title} listEvents={listEvents} />;
}

export default Visibility;

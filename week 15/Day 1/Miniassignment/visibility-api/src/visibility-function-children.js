import React from "react";
import useVisibility from "./use-visibility";

function Visibility({ children }) {
  const listEvents = useVisibility();

  return children(listEvents);
}

export default Visibility;

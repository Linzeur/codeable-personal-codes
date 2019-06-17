import React from "react";
import useVisibility from "./use-visibility";

function Visibility({ children, render = children }) {
  const listEvents = useVisibility();

  return render(listEvents);
}

export default Visibility;

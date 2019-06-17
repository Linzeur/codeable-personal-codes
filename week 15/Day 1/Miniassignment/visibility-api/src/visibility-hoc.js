import React from "react";
import useVisibility from "./use-visibility";

function withVisibility(Component) {
  function Visibility() {
    const listEvents = useVisibility();
    return <Component listEventsHOC={listEvents} />;
  }

  return Visibility;
}

export default withVisibility;

import React from "react";
import useVisibility from "../use-visibility";

import VisibilityPresentational from "../components/visibility-container-presentational";

function VisibilityContainer({ title }) {
  const listEvents = useVisibility();

  return <VisibilityPresentational title={title} listEvents={listEvents} />;
}

export default VisibilityContainer;

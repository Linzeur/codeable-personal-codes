import React from "react";
import ListEvents from "./events-list";
import useVisibility from "./use-visibility";
import VisibilityChildren from "./visibility-function-children";
import VisibilityRender from "./visibility-render";
import withVisibility from "./visibility-hoc";
import VisibilityContainerPresentational from "./containers/visibility-container-presentational";

function App({ pattern }) {
  const title = <h1>List of execution of Page visibility API </h1>;
  const listEventsHooks = useVisibility();
  switch (pattern) {
    case "custom-hooks":
      return <ListEvents title={title} listEvents={listEventsHooks} />;
    case "function-children":
      return (
        <VisibilityChildren>
          {listEvents => {
            return <ListEvents title={title} listEvents={listEvents} />;
          }}
        </VisibilityChildren>
      );
    case "render-props":
      return (
        <VisibilityRender
          render={listEvents => {
            return <ListEvents title={title} listEvents={listEvents} />;
          }}
        />
      );
    case "high-order-component":
      function HOC({ listEventsHOC }) {
        return <ListEvents title={title} listEvents={listEventsHOC} />;
      }
      const VisibilityHOC = withVisibility(HOC);
      return <VisibilityHOC />;
    case "container-presentational":
      return <VisibilityContainerPresentational title={title} />;
    default:
      return <ListEvents title={title} listEvents={listEventsHooks} />;
  }
}

export default App;

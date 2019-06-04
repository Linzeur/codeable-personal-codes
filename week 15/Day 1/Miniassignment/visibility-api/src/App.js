import React from "react";
import useVisibility from "./use-visibility";
import Visibility from "./visibility";

function App({ pattern }) {
  const title = <h1>List of execution of Page visibility API </h1>;
  const listEventsHooks = useVisibility();
  if (pattern === "custom-hooks") {
    return (
      <>
        {title}
        <ul>
          {listEventsHooks.map(event => (
            <li key={event.date.getTime()}>{`${event.date}, value of event: ${
              event.value
            }`}</li>
          ))}
        </ul>
      </>
    );
  } else if (pattern === "function-children") {
    return (
      <Visibility>
        {listEvents => {
          return (
            <>
              {title}
              <ul>
                {listEvents.map(event => (
                  <li key={event.date.getTime()}>{`${
                    event.date
                  }, value of event: ${event.value}`}</li>
                ))}
              </ul>
            </>
          );
        }}
      </Visibility>
    );
  }
}

export default App;

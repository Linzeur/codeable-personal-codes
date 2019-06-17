import React from "react";

function ListEvents({ title, listEvents }) {
  return (
    <>
      {title}
      <ul>
        {listEvents.map(event => (
          <li key={event.date.getTime()}>{`${event.date}, value of event: ${
            event.value
          }`}</li>
        ))}
      </ul>
    </>
  );
}

export default ListEvents;

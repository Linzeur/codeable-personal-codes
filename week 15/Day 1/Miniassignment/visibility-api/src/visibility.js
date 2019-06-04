import React from "react";

function Visibility({ children }) {
  const [listEvents, setListEvents] = React.useState([]);

  React.useEffect(() => {
    function handleVisibility(event) {
      if (document.hidden) {
        console.log("Page is not visible");
        setListEvents(listEvents.concat({ date: new Date(), value: false }));
      } else {
        console.log("Page is visible");
        setListEvents(listEvents.concat({ date: new Date(), value: true }));
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [listEvents]);

  return children(listEvents);
}

export default Visibility;

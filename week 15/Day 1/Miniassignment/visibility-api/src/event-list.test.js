import React from "react";
import { render } from "@testing-library/react";

import ListEvent from "./events-list";

const listEvents = [
  { date: new Date("06/15/2019"), value: false },
  { date: new Date("06/18/2019"), value: false },
  { date: new Date("06/19/2019"), value: true }
];
test("Test event list component", () => {
  const { asFragment } = render(
    <ListEvent title={"Titulo 1"} listEvents={listEvents} />
  );

  expect(asFragment()).toMatchSnapshot();
});

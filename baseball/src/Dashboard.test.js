import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should reset strikes", () => {
    const strikes = 3;

    const comp = render(<Dashboard strikes={strikes} />);

    const players = comp.getAllByTestId("player");
    expect(players).toHaveLength(playersData.length);
  });
});
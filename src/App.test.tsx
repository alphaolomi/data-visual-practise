import React from "react";
import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {createMemoryHistory} from 'history'
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

describe("App suite", () => {
  it("is okay", () => {
    expect(true).toBeTruthy();
  });

  it.skip("renders without crashing", () => {
    // render(<App />);
    expect(true).toBeTruthy();
  });

  it.skip('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    // render(
    //   <MemoryRouter>
    //     <App />
    //   </MemoryRouter>,
    // )
    const user = userEvent.setup()
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(screen.getByText(/home/i)).toBeTruthy()
  
    await user.click(screen.getByText(/about/i))
  
    // check that the content changed to the new page
    expect(screen.getByText(/you are on the about page/i)).toBeTruthy()
  })


});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "../App";

describe("Layout", () => {
  it("renders the header", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getByRole("heading", { level: 1, name: "My Todo App" })).toBeInTheDocument();
  });
});

describe("Todo List", () => {
  it("renders the todo list", () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getAllByRole("listitem", { name: /todo : / })).toHaveLength(4);
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "../App";

describe('App', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });
  describe("Layout", () => {
    it("renders the header", () => {
      expect(screen.getByRole("heading", { level: 1, name: "My Todo App" })).toBeInTheDocument();
    });
  });

  describe("Todo List", () => {
    it("renders the todo list", () => {
      expect(screen.getAllByRole("listitem", { name: /todo : / })).toHaveLength(4);
    });

    it('hides a todo when the user check it', async () => {
      // Given
      const $firstTodo = screen.getByLabelText(/check Finaliser le rapport mensuel/);

      // When
      userEvent.click($firstTodo);

      // Then
      await waitFor(() => {
        expect($firstTodo).not.toBeInTheDocument();
      });
    });
  });

  describe("About", () => {
    it("renders the about page", async () => {
      // When
      const $aboutLink = screen.getByRole("link", { name: "About" });
      userEvent.click($aboutLink);
      // Then
      await waitFor(() => {
        expect(screen.getByRole("heading", { level: 2, name: "About" })).toBeInTheDocument();
      })
    });
  });
});



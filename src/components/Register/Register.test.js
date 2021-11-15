import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";

beforeEach(() => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>
  );
});
describe("Given the Register component", () => {
  describe("When the user fill the fields and click the button", () => {
    test("Then the mock function should be called", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "Registrarse",
      });
      const nameForm = await screen.findByPlaceholderText("Nombre");
      const usernameForm = await screen.findByPlaceholderText(
        "Nombre de usuario"
      );
      const ageForm = await screen.findByPlaceholderText("Edad");
      const passwordForm = await screen.findByPlaceholderText("Contraseña");
      const mock = jest.fn();

      userEvent.type(nameForm, "Dante");
      userEvent.type(usernameForm, "Dante");
      userEvent.type(ageForm, "25");
      userEvent.type(passwordForm, "Dante");
      registerButton.addEventListener("click", mock);
      userEvent.click(registerButton);

      expect(mock).toHaveBeenCalled();
    });
  });
  describe("When the fields are empty", () => {
    test("Then the button should be disabled", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "Registrarse",
      });

      expect(registerButton).toBeDisabled();
    });
  });
});

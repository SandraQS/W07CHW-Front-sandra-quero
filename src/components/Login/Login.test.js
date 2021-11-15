import Login from "./Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
});

describe("Given Login component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button Login and Registrarme", async () => {
      const buttonLogin = await screen.findByRole("button", { name: "Login" });
      const usernameForm = await screen.findByPlaceholderText(
        "Nombre de usuario"
      );
      const passwordForm = await screen.findByPlaceholderText("Contraseña");
      const mock = jest.fn();
      buttonLogin.addEventListener("click", mock);

      userEvent.type(usernameForm, "sandrita");
      userEvent.type(passwordForm, "sandrita");
      userEvent.click(buttonLogin);

      expect(buttonLogin).toBeInTheDocument();
      expect(mock).toHaveBeenCalled();
    });
  });

  describe("When the user clicks the register button", () => {
    test("Then it should navigate to the render component", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "Registrarme",
      });
      const mock = jest.fn();

      registerButton.addEventListener("click", mock);
      userEvent.click(registerButton);

      expect(mock).toHaveBeenCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import configureStore from "./redux/store/index";
import { server } from "./mocks/server";
import App from "./App";

jest.mock("jwt-decode");

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given the App component", () => {
  beforeEach(() => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  describe("When the user fill the fields login form and click the Login button", () => {
    test("Then it should go to homePage", async () => {
      const buttonLogin = await screen.findByRole("button", { name: "Login" });
      const usernameForm = await screen.findByPlaceholderText(
        "Nombre de usuario"
      );
      const passwordForm = await screen.findByPlaceholderText("Contraseña");

      userEvent.type(usernameForm, "sandrita");
      userEvent.type(passwordForm, "sandrita");
      userEvent.click(buttonLogin);
      const homePageTitle = await screen.findByRole("heading", {
        name: /homepage/i,
      });

      expect(homePageTitle).toBeInTheDocument();
    });
  });

  describe("When the user fill the fields register form and click the button", () => {
    test("Then it should go to LoginPage", async () => {
      const registerButton = await screen.findByRole("button", {
        name: "Registrarse",
      });
      const nameForm = await screen.findByPlaceholderText("Nombre");
      const usernameForm = await screen.findByPlaceholderText(
        "Nombre de usuario"
      );
      const ageForm = await screen.findByPlaceholderText("Edad");
      const passwordForm = await screen.findByPlaceholderText("Contraseña");

      userEvent.type(nameForm, "Dante");
      userEvent.type(usernameForm, "Dante");
      userEvent.type(ageForm, "25");
      userEvent.type(passwordForm, "Dante");
      userEvent.click(registerButton);
      screen.debug();

      const loginTitle = await screen.findByRole("heading", {
        name: /login/i,
      });

      expect(loginTitle).toBeInTheDocument();
    });
  });
});

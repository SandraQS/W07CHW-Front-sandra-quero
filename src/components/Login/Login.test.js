import Login from "./Login";
import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

describe("Given Login component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a form to login", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </Router>
        </Provider>
      );
      const buttonLogin = await screen.findByRole("label", {
        name: "Nombre de usuario:",
      });
    });
  });

  test("Then it should render a button Login and Registrarme", async () => {
    const store = configureStore();
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    );
    const buttonLogin = await screen.findByRole("button", { name: "Login" });
    const buttonRegister = await screen.findByRole("button", {
      name: "Registrarme",
    });

    expect(buttonLogin).toBeInTheDocument();
    expect(buttonRegister).toBeInTheDocument();
  });
});

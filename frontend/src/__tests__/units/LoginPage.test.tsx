import React from "react";
import { render } from "@testing-library/react";
import Login from "../../pages/Login";

test("Login page should have email and password inputs", () => {
    const { getByText, getByTitle } = render(<Login />);
    const loginTitle = getByText(/Dados do Usuário/i);
    const emailInput = getByTitle("E-mail");
    const passwordInput = getByTitle("Senha");

    expect(loginTitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

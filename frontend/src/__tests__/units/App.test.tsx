import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";

test("Render login page on the first run", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const loginTitle = getByText(/Dados do Usuário/i);
    const emailInput = getByPlaceholderText("seuemail@exemplo.com");
    const passwordInput = getByPlaceholderText("Insira sua senha");

    expect(loginTitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

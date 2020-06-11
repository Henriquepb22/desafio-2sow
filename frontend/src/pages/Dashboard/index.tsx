import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teste</td>
                        <td>123.123.123-12</td>
                        <td>email@exemplo.com</td>
                    </tr>
                    <tr>
                        <td>Teste</td>
                        <td>123.123.123-12</td>
                        <td>email@exemplo.com</td>
                    </tr>
                    <tr>
                        <td>Teste</td>
                        <td>123.123.123-12</td>
                        <td>email@exemplo.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;

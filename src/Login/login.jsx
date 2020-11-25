import React from "react";

export class Login extends React.Component
{
    constructor(compo)
    {
        super(compo);
    }

    render ()
    {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content"> 
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Nome do usuario"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" minLength="8"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha2">Confirmação de Senha</label>
                        <input type="password" name="senha2" id="senha2" placeholder="Senha" minLength="8"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Login</button>
                </div>
            </div>
        </div>
    }
    
    
}
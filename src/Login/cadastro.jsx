import React from "react";

export class Cadastro extends React.Component
{
    constructor(compo)
    {
        super(compo);
    }

    render ()
    {
        return <div className="base-container">
            <div className="header">Cadastrar</div>
            <div className="content"> 
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" name="usuario" placeholder="Nome do usuario"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" minLength="6"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Registrar</button>
                </div>
            </div>
        </div>
    }
}
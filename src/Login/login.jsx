import React from "react";

export class Login extends React.Component
{
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
         
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
         
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["senha"] = "";
            input["senha2"] = "";
            this.setState({input:input});
            
            alert('Demo Form is submited');
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;      
              
          if (!input["senha"]) {
            isValid = false;
            errors["senha"] = "Please enter your password.";
          }
      
          if (!input["senha2"]) {
            isValid = false;
            errors["senha2"] = "Please enter your confirm password.";
          }
      
          if (typeof input["senha"] !== "undefined" && typeof input["senha2"] !== "undefined") {
              
            if (input["senha"] != input["senha2"]) {
              isValid = false;
              errors["senha"] = "Passwords don't match.";
            }
          } 
      
          this.setState({
            errors: errors
          });
      
          return isValid;
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
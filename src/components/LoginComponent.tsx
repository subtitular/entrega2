import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

interface Props {}

const LoginComponent: React.FC<Props> = () => {
  return (
    <div className="container mt-10">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Iniciar Sesión</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario</label>
                  <div className="input-group">
                  <span className="input-group-text">
                  <FaUser size={30} />
                      </span>
                  
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Introduce tu nombre de usuario"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-group">
                  <span className="input-group-text">
                        <FaLock  size={30}/>
                      </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Introduce tu contraseña"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Iniciar Sesión
                </button>
              </form>
              <div className="mt-3">
                <Link to="/restaurar-contrasena">
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
              <div className="mt-3">
                ¿No tienes una cuenta?{" "}
                <Link to="/registrarse">Regístrate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

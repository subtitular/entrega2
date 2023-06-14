import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

interface Props {}

const ChangePasswordComponent: React.FC<Props> = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "oldPassword") {
      setOldPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para cambiar la contraseña
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Cambiar Contraseña</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="oldPassword">Contraseña actual</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock size={30} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      name="oldPassword"
                      placeholder="Introduce tu contraseña actual"
                      value={oldPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">Nueva Contraseña</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock size={30} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      placeholder="Introduce tu nueva contraseña"
                      value={newPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    Confirmar Nueva Contraseña
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock size={30} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirma tu nueva contraseña"
                      value={confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  Cambiar Contraseña
                </button>
              </form>
              <div className="mt-3">
                <Link to="/perfil">Volver al perfil</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordComponent;

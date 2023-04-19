import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

interface Props {
  id: number;
}

interface BlogEntry {
  id: number;
  title: string;
  content: string;
}

const EditBlogEntryComponent: React.FC<Props> = ({ id }) => {
  const [blogEntry, setBlogEntry] = useState<BlogEntry>({
    id: 0,
    title: "",
    content: "",
  });

  //const history = useHistory();

  useEffect(() => {
    // Aquí puedes agregar la lógica para obtener la entrada del blog con el ID proporcionado
    // y actualizar el estado de blogEntry
    setBlogEntry({
      id: 1,
      title: "Ejemplo de entrada de blog",
      content: "Este es un ejemplo de entrada de blog.",
    });
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBlogEntry({ ...blogEntry, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para actualizar la entrada del blog
    //history.push(`/blog/${blogEntry.id}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaEdit className="mr-2" />
                Editar Entrada de Blog
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Introduce el título de la entrada"
                    value={blogEntry.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Contenido</label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    placeholder="Introduce el contenido de la entrada"
                    rows={8}
                    value={blogEntry.content}
                    //onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlogEntryComponent;

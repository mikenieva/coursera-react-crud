import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Main() {
  // 1. HOOKS
  const [newComment, setNewComment] = useState({
    title: "",
    description: "",
  });
  const [comments, setComments] = useState([]);
  const [edition, setEdition] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  // 2. FORMULARIO

  const handleChange = (event) => {
    event.preventDefault();

    setNewComment({
      ...newComment,
      id: nanoid(),
      [event.target.name]: event.target.value,
    });
  };

  // 3. CRUD

  const addComment = (event) => {
    event.preventDefault();

    if (!newComment.title.trim() || !newComment.description.trim()) {
      setError("Escriba algo por favor...");
      return;
    }

    setComments([newComment, ...comments]);
    setNewComment({
      title: "",
      description: "",
    });
    setError(null);
  };

  const deleteComment = (id) => {
    const arrayFiltrado = comments.filter((item) => item.id !== id);
    setComments(arrayFiltrado);
  };

  const editComment = (e) => {
    e.preventDefault();

    if (!newComment.title.trim() || !newComment.description.trim()) {
      setError("Debes rellenar los cuadros");
      return;
    }

    const modifiedArray = comments.map((element) => {
      return element.id === id
        ? {
            id: id,
            title: newComment.title,
            description: newComment.description,
          }
        : element;
    });

    setComments(modifiedArray);
    setEdition(false);
    setNewComment({
      title: "",
      description: "",
    });
    setError(null);
  };

  const edit = (element) => {
    setEdition(true);
    setNewComment({
      id: element.id,
      title: element.title,
      description: element.description,
    });
    setId(element.id);
  };

  // 4. RETORNO

  return (
    <>
      {/* TÍTULO */}
      <h2>Caja de Comentarios</h2>
      {/* FORMULARIO */}
      <div>
        <form onSubmit={edition ? editComment : addComment}>
          <h3>Asunto</h3>
          <input
            name="title"
            onChange={(e) => handleChange(e)}
            value={newComment.title}
          />
          <h3>Descripción</h3>
          <textarea
            name="description"
            rows="3"
            onChange={(e) => handleChange(e)}
            value={newComment.description}
          />
          {edition ? ( <button>Editar</button> ) : ( <button>Agregar</button> ) }  
        </form>
      </div>
      {/* LISTADO DE COMENTARIOS */}
      <div>
        {comments.map((element, i) => (
          <article key={i}>
            <div>
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </div>
            <div>
              <button onClick={() => deleteComment(element.id)}>Eliminar</button>
              <button onClick={() => edit(element)}>Editar</button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

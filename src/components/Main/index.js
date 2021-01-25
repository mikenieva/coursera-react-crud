import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Main () {
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

      const handleChange = () => {}


      // 3. CRUD

      const addComment = () => {}
      const deleteComment = () => {}
      const editComment = () => {}
      const edit = () => {}


      // 4. RETORNO

      return(
          <>
            {/* TÍTULO */}
            <h2>Caja de Comentarios</h2> 
            {/* FORMULARIO */}
            <div> 
                <form>
                    <h3>Asunto</h3>
                    <input></input>
                    <h3>Descripción</h3>
                    <input></input>
                    <button>Agregar</button>
                </form>
            </div>
            {/* LISTADO DE COMENTARIOS */}
            <div>
                <article>
                    <div>
                        <h3>Título del comentario</h3>
                        <p>Descripción del comentario</p>
                    </div>
                </article>
            </div>
          </>
      )

}
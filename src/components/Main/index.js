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
                <form onSubmit={addComment}>
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
                    <button>Agregar</button>
                </form>
            </div>
            {/* LISTADO DE COMENTARIOS */}
            <div>
            {comments.map((element, i) => 
                (
                    <article key={i}>
                        <div>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                    </article>
                    )
                )
            }
            </div>
          </>
      )

}
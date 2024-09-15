import React from "react";

function Note(props) {
  function handleClick() {
    // Triggers the onDelete function passed as a prop, sending the note's id
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

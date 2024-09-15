import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // Dynamically updating state based on input field name (title or content)
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, // Update the specific field being changed (either title or content)
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); // Passing the note to the parent (app)
    setNote({
      title: "",
      content: "", // Resets the note input fields after submission
    });
    event.preventDefault(); // Prevents the form from refreshing the page
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>{" "}
        {/* Trigger form submission */}
      </form>
    </div>
  );
}

export default CreateArea;

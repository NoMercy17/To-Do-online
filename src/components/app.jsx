import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // Adding new note to notes array without mutating the original
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    // Filtering out the note by id (index) to delete
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id; // Keep the notes that don't match
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        // Passing note's index as a unique id and rendering each Note
        return (
          <Note
            key={index}
            id={index} // The index used for deletion
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

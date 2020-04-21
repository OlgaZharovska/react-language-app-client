import React from "react";

function Phrase({ phrase, translation, onEdit, onDelete }) {
  return (
    <>
      <h1>{phrase}</h1>
      <h1>{translation}</h1>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}

export default Phrase;

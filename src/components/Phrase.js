import React from "react";

function Phrase({ phrase, translation }) {
  return (
    <>
      <h1>{phrase}</h1>
      <h1>{translation}</h1>
    </>
  );
}

export default Phrase;

/* <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button> */

import React from "react";

export const Prase = ({ phrase, translation, onEdit, onDelete }) => {
  <>
    <h1>{phrase}</h1>
    <h1>{translation}</h1>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </>;
};

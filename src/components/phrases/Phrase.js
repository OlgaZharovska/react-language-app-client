import React from "react";
import { Icon } from "../common/Icon";

function Phrase({ phrase, translation, onDelete }) {
  return (
    <div className="phrasebox">
      <div class="phrase heading-tertiary">{phrase}</div>
      <div class="translation heading-tertiary">{translation}</div>
      <Icon name="remove" onClick={onDelete(phrase)} />
    </div>
  );
}

export default Phrase;

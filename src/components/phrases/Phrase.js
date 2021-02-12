import React from "react";
import { Icon } from "../common/Icon";

function Phrase({ phrase, translation, onDelete }) {
  return (
    <div className="phrasebox">
          <Icon name="remove" className="delete-btn" onClick={onDelete(phrase)} />

      <div class="phrase heading-tertiary">{phrase}</div>
      <div class="translation heading-tertiary">{translation}</div>
    </div>
  );
}

export default Phrase;

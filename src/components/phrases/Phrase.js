import React from "react";
import { Icon } from "./Icon";

function Phrase({ phrase, translation }) {
  return (
    <div className="phrasebox">
      <div class="phrase heading-tertiary">{phrase}</div>
      <div class="translation heading-tertiary">{translation}</div>
      <Icon name="remove" />
    </div>
  );
}

export default Phrase;

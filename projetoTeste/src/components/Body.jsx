import { useState } from "react";
import "./Body.css";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

function Body() {

  const [emojis, setEmojis] = useState(["🤦‍♂️", "🫥", "😶‍🌫️", "🤬", "🦄", "🥷"]);
  const [emoji, setEmoji] = useState("👌");

  return (
    <div className="containerBody">
      Body
      <Demo1 />
      <Demo2 />
      {emoji}
    </div>
  );
}

export default Body;

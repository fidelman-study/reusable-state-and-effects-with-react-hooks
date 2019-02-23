import React, { useState } from "react";

export default function Playground1() {
  const [text, setText] = useState("");

  if(true) {
    const [special, setSpecial] = useState('');
  }

  return (
    <section>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <ul>
        <li>{text}</li>
      </ul>
    </section>
  );
}

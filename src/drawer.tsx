import React from "react";
import {RsdInput, SpaceReact, useState} from "./api";

export default function Drawer() {

  const [title, setTitle] = useState('')

  return <div>
    <RsdInput value={title} onChange={setTitle}/>
  </div>
}

import React from "react";
import {RsdInput, SpaceReact, useState} from "../api";
import styles from './drawer.module.sass'

export default function Drawer() {
  console.log(styles)

  const [title, setTitle] = useState('')

  return <div className={styles.drawer}>
    <RsdInput value={title} onChange={setTitle}/>
  </div>
}

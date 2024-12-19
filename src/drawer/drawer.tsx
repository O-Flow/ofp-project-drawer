import React from "react";
import {RsdInput, useState} from "../api";
import styles from './drawer.module.sass'

export default function Drawer() {

  const [title, setTitle] = useState('')

  return <div className={styles.drawer}>
    <RsdInput value={title} onChange={setTitle}/>
  </div>
}

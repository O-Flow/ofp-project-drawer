import React from "react";
import {Babylon, RsdInput, useEffect, useState} from "../api";
import styles from './drawer.module.sass'

export default function Drawer() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(new Babylon.Vector3(10, 20, 10))
  })

  return <div className={styles.drawer}>
    <RsdInput value={title} onChange={setTitle}/>
  </div>
}

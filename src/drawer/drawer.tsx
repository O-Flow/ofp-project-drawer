import React from "react";
import {Babylon, RsdInput, useEffect, useState} from "../api";
import styles from './drawer.module.sass'

const {Vector3} = Babylon

export default function Drawer() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(new Vector3(10, 20, 10))
  })

  return <div className={styles.drawer}>
    <RsdInput value={title} onChange={setTitle}/>
  </div>
}

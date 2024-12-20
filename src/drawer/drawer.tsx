import React from "react";
import {Babylon, RsdInput, RsdTitle, useEffect, useState} from "../api";
import styles from './drawer.module.sass'

export default function Drawer() {
  const {Vector3} = Babylon

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(new Vector3(10, 20, 10))
  })

  return <div className={styles.drawer}>
    <RsdTitle
      title={'Base Information'}
    />
  </div>
}

import React from 'react'
import styles from "../component/Background.module.css"
import Counter from './Counter.jsx'

const Background = () => {
  return (
    <div className={styles.background}>
        <Counter />
    </div>
  )
}

export default Background


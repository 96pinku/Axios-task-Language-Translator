import React from 'react'
import styles from './output.module.css'
function Output({translatedText}) {
  return (
    <>
        <div className={styles.output}>
            <h1>{translatedText}</h1>
        </div>
    </>
  )
}

export default Output
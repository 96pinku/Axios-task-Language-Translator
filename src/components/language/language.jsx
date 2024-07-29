import React from 'react'
import styles from './language.module.css'
function language({title, data,lang}) {
    
  return (
    <>
    <label className={styles.Language} htmlFor="">{title}
    <select onChange={(e)=>{lang(e.target.value)}}>
        {data && data.map((item, index) => {
            return (
                <option key={index} value={item.name}>{item.name}</option>
            )
        })}
    </select>
    </label>
    
    </>
  )
}

export default language
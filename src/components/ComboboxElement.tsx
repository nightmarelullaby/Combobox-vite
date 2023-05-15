import styles from "./ComboboxElement.module.css"

export default function ComboboxElement({children}){
  return(
    <div className={styles.main}style={{display:"flex",gap:8,alignItems:"center"}}>
      {children}
    </div>)
}
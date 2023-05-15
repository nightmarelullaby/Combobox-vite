import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from "./index.module.css"
import ComboboxElement from "./components/ComboboxElement.tsx"
import {useEffect,useRef} from "react"

export const useClickOutside = (callback)=>{
  const buttonRef = useRef()


  const handleOutside = (e) => {
      if(!buttonRef.current.contains(e.target)){ 
        return callback()}
  }
  useEffect(()=>{
      document.addEventListener("click",handleOutside,false)
      return () => document.removeEventListener("click",handleOutside,false)
  },[]) 
  return {buttonRef}
}

export const useDebounce = (value,delay) => {
  const [debouncedValue,setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timer = setTimeout(()=>setDebouncedValue(value),delay)

    return () => clearTimeout(timer)
  },[value,delay])
  return debouncedValue
}

const data = ["pepito","juan","jose","sebastian","carlos","j","sebastian"]

function App() {
  const [actualStyle,setStyle] = useState(styles.form)
  const {buttonRef} = useClickOutside(()=>changeClass(dropdownRef.current,styles.dropdown,styles.dropdownOff))
  const dropdownRef= useRef()

  const [result,setResult] = useState([])

  const setFormFocused = useCallback((e)=> {
    e.preventDefault()
    return setStyle(styles.formFocused)
    },[])
  const changeClass = useCallback((element,previusClass,newClass) => {
    return element.classList.replace(previusClass,newClass)

  },[])
  const initialList = 
      <ul style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <ul style={{margin:12,display:"flex",flexDirection:"column",gap:8,}}>
             <lh style={{marginRight:"auto"}}><small style={{fontWeight:500,color:"gray",fontSize:12}}>Recent searches</small></lh>
             <li >
                <ComboboxElement>
                  <svg fill="none" width={18} height={18}stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                  </svg>
                  <small >Personal Folder</small>
                </ComboboxElement>
              </li>
              <li >
                <ComboboxElement>
                  <svg fill="none" width={18} height={18}stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                  </svg>
                  <small >Random Folder</small>
                </ComboboxElement>
              </li>
            </ul>
            <hr style={{height:1,border:"none",width:"100%",backgroundColor:"#e3e3e3"}}/>
            <ul style={{margin:12}}>
            <li >
                <ComboboxElement>
             {/*     <svg fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                  </svg>*/}
                  <svg fill="none"  width={18} height={18} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                  </svg>
                  <small >Create new folder...</small>
                </ComboboxElement>
            </li>
            </ul>
          </ul>
  const resultsList = <ul style={{margin:12,display:"flex",flexDirection:"column",alignItems:"stretch",gap:8,}}>{result.map(e=> <li><ComboboxElement>{e}</ComboboxElement></li>)}</ul>
  const noResults = <div style={{display:"flex",gap:4}}>
    <svg fill="none" stroke-width={1.5}width={18} height={18}stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
    </svg>  
    <small>Nothing fdounadasd</small> 
  </div>

  const changeSearch = (e) =>{
    if(e.target.value === "") return setResult([])
    const resultData = data.filter(i => i.includes(e.target.value))
    if(resultData.length <= 0) return setResult([noResults])
    return setResult(resultData)
  }

  return (
      <div>
      <h2>Autocomplete</h2>

      <div  ref={buttonRef} className={actualStyle} style={{position:"absolute",width:350,boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
      <form>
        <div style={{display:"flex"}}>
        <label style={{padding:"0 8px 0 16px",display:"flex",alignItems:"center"}} htmlFor="">
          <svg fill="none" width={20} height={20}
            stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ariaHidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
        </label>
        <input onChange={changeSearch} onClick={()=>changeClass(dropdownRef.current,styles.dropdownOff,styles.dropdown)} class={styles.inputText} placeholder="Search for something" 
        style={{flexGrow:1,border:"transparent",borderRadius:"inherit"}} type="text" />
        </div>
          
          <div ref={dropdownRef} className={styles.dropdown} >
          {result === null ? noResults : null}
          {result.length > 0 ? resultsList : null}
          {result.length <= 0 ? initialList : null}
         
            
          </div>
      </form>
      </div>
      
      </div>
  )
}

export default App

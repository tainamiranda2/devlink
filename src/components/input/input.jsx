import './input.css'
export function Input({type,placeholder,value, onChange}){
    return(
        
         <input 
         value={value}
         type={type}
         onChange={onChange}
         placeholder={placeholder}
         />
      
     
    )
}
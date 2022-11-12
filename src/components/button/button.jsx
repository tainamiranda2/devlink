import './button.css'
export function Button({type,text, onClick}){
    return(
        
         <button
         type={type}
         onClick={ onClick}
        >{text}</button>
      
     
    )
}
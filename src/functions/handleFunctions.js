
export const handleCountryCode = (e) => {
    setCountryCode(e.target.value)
 }

 export const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
       setNameError(true)
    }
 }

export const getCountries = () => {
    axios.get("https://amazon-api.sellead.com/country")
       .then(res => {
          setCountry(res.data)
       }).catch(err => {
          alert(err)
       })

    axios.get("https://amazon-api.sellead.com/city")
       .then(res => {
          let newArray = []
          for(let item of res.data){
             if(countryCode == item.country_code){
                newArray.push(item)
             }
          }
          setCities(newArray)
       }).catch(err => {
          alert(err)
       })
 }

 export const getCities = () => {
    axios.get("https://amazon-api.sellead.com/city")
       .then(res => {
          let newArray = []
          for(let item of res.data){
             if(countryCode == item.country_code){
                newArray.push(item)
             }
          }
          setCities(newArray)
       }).catch(err => {
          alert(err)
       })
 }
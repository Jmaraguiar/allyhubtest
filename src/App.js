import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Container, DataForm, DestinyForm, Window } from './AppStyle';


function App() {
   const [cities, setCities] = useState()
   const [countries, setCountries] = useState()
   const [countryCode, setCountryCode] = useState()
   const [name, setName] = useState()
   const [nameError, setNameError] = useState(false)
   const [email, setEmail] = useState()
   const [emailError, setEmailError] = useState(false)
   const [tel, setTel] = useState()
   const [telError, setTelError] = useState(false)
   const [cpf, setCpf] = useState()
   const [cpfError, setCpfError] = useState(false)
   const [country, setCountry] = useState()
   const [countryError, setCountryError] = useState(false)
   const [city, setCity] = useState()
   const [cityError, setCityError] = useState(false)

   const getCountries = () => {
      axios.get("https://amazon-api.sellead.com/country")
         .then(res => {
            setCountries(res.data)
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
  
   const getCities = () => {
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

   const onChangeName = (e) => {
      setName(e.target.value)
      setNameError(false)
   }
  
   const onChangeEmail = (e) => {
      setEmail(e.target.value)
      setEmailError(false)
   }
  
   const onChangeTel = (e) => {
      setTel(e.target.value)
      setTelError(false)
   }
  
   const onChangeCPF = (e) => {
      setCpf(e.target.value)
      setCpfError(false)
   }

   const onChangeCity = (e) => {
      setCity(e.target.value)
      setCityError(false)
   }

   const onChangeCountry = (e) => {
      setCountry(e.target.value)
      setCountryError(false)
      setCountryCode(e.target.value)
      setCity(null)
   }
  
   const handleSubmit = (e) => {
      e.preventDefault()
      if(!name){
         setNameError(true)
      }
      else if(!email){
         setEmailError(true)
      }
      else if(!tel){
         setTelError(true)
      }
      else if(!cpf){
         setCpfError(true)
      }
      else if(!country){
         setCountryError(true)
      }
      else if(!city){
         setCityError(true)
      }
      else{
         const form = {
            name,
            email,
            tel,
            cpf,
            country,
            city
         }

         console.log(form)
      }

   }

   useEffect(() => {
      getCountries()
      getCities()
   }, [])

   useEffect(() => {
      getCities()
   }, [countryCode])


   const countriesList = countries && countries.map((item, index) => {
      return <MenuItem key={index} value={item.code}>{`${item.name_ptbr} (${item.code})`}</MenuItem>
   })

   const citiesList = countryCode && cities && cities.map((item, index) => {
      return <MenuItem key={index} value={item.name}>{`${item.name} (${item.country_code})`}</MenuItem>
   })


   return (
      <Container>
            <form noValidate onSubmit={handleSubmit}>
               <Window>
                  <h4>Dados Pessoais</h4>
                  <DataForm> 
                     <TextField error={nameError} onChange={onChangeName} required size='small' id="outlined-basic" label="Nome" variant="outlined"/>
                     <TextField error={emailError} onChange={onChangeEmail} required size='small' id="outlined-basic" label="Email" variant="outlined"/>
                     <TextField error={telError} onChange={onChangeTel} required size='small' id="outlined-basic" label="Telefone" variant="outlined"/>
                     <TextField error={cpfError} onChange={onChangeCPF} required size='small' id="outlined-basic" label="CPF" variant="outlined"/>
                  </DataForm>
                  <h4>Destinos de Interesse</h4>
                  <DestinyForm>
                     <FormControl>
                        <InputLabel size='small' id="demo-simple-select-label">País</InputLabel>
                        <Select
                           error={countryError}
                           required
                           size='small'
                           onChange={onChangeCountry}
                           label={'País'}
                        >
                           {countriesList}
                        </Select>
                     </FormControl>
                     {countryCode ?
                        <FormControl>
                           <InputLabel size='small' id="demo-simple-select-label">Cidade</InputLabel>
                           <Select
                              onChange={onChangeCity}
                              error={cityError}
                              required
                              size='small'
                              label={'Cidade'}
                           >
                              {citiesList[0]? citiesList : <MenuItem>Nenhuma cidade cadastrada</MenuItem>}
                           </Select>
                        </FormControl>
                        : 
                        <FormControl>
                           <InputLabel size='small' id="demo-simple-select-label">Cidade</InputLabel>
                           <Select
                              required
                              size='small'
                              label={'Cidade'}
                           >
                              <MenuItem>Selecione um País</MenuItem>
                           </Select>
                        </FormControl>
                     }
                  </DestinyForm>
               </Window>
               <Button type='submit' variant="contained">Enviar</Button>
            </form>
      </Container>
   );
}

export default App;

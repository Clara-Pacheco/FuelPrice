
import { useEffect, useState } from "react"
import { getFuel, updateFuel } from "./services"
import { Container, Panel, SettingIcon, Title, Box, Row, FuelText, FuelPrice, InfoText, SaveButton, SaveIcon, FuelInput } from "./styles"
import { FuelComponentsProps, IFuelState } from "./types"
import {FiEdit2} from 'react-icons/fi'


export const FuelComponent = ({ editMode, toggleEditMode }:FuelComponentsProps) => {
  const[fuels,setFuel] = useState<IFuelState[]>()

  async function fetchAndUpdateData () {
    const data = await getFuel()
    setFuel(data)
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, [])

  function onUpdateFuel(fuelId: number, price: string){
    const updatedFuels = fuels?.map((fuel) => {

      if(fuel.id === fuelId) {
        fuel.price = Number(price)
        fuel.updated = true;
      }
      return fuel
    })

    setFuel(updatedFuels)
  }

  async function onSave () {
    const changed = fuels?.filter((fuel) => fuel.updated)

    if(!changed){
      toggleEditMode()
      return
    }

    for( const changedFuel of changed ) {
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const { updated, ...rest } = changedFuel
       await updateFuel(rest)
    }

    fetchAndUpdateData()
    toggleEditMode()
  }




  
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingIcon onClick = { toggleEditMode } />


      <Panel>
      {editMode && 
        <h1>
          <Row>
          <InfoText>
            <FiEdit2 />
              Altere o preço do item e salve
          </InfoText>
          </Row>
        </h1>}
       {fuels?.map((fuel)=>{
         return (
          <>
          <Row key={fuel.id}>
            <Box>
              <FuelText>{fuel.name}</FuelText>
            </Box>
            <Box>
              { editMode ? <FuelInput
               type="number"
               value={fuel.price}
               onChange={(event) => onUpdateFuel(fuel.id, event.target.value)}
               /> : <FuelPrice>{fuel.price}</FuelPrice> } 
            </Box>
          </Row>  
          </>
         )
       })}
       {editMode && 
       <Row>
        <SaveButton onClick={onSave}>
          <SaveIcon/>
              Save
          </SaveButton>
        </Row>
        }
    </Panel>
    </Container>
  )
}
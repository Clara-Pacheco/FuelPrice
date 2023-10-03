
import { useEffect, useState } from "react"
import { getFuel } from "./services"
import { Container, Panel, SettingIcon, Title, Box, Row, FuelText, FuelPrice } from "./styles"
import { IFuel } from "./types"

export const FuelComponent = () => {
  const[fuels,setFuel] = useState<IFuel[]>()

  async function fetchAndUpdateData () {
    const data = await getFuel()
    setFuel(data)
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, [])
  
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingIcon />
      <Panel>
       {fuels?.map((fuel)=>{
         return (
          <>
          <Row key={fuel.id}>
            <Box>
              <FuelText>{fuel.name}</FuelText>
            </Box>
            <Box>7
              <FuelPrice>{fuel.price}</FuelPrice>
            </Box>
          </Row>  
          </>
         )
       })}
       
      </Panel>
    </Container>
  )
}
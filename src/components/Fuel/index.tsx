
import { getFuel } from "./services"
import { Container, Panel, SettingIcon, Title, Box, Row, FuelText, FuelPrice } from "./styles"

export const FuelComponent = () => {
  getFuel()
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingIcon />
      <Panel>
        <Row>
          <Box>
            <FuelText>Gasolina Comum</FuelText>
          </Box>
          <Box>7
            <FuelPrice>7,19</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Etanol</FuelText>
          </Box>
          <Box>7
            <FuelPrice>5,89</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Diesel</FuelText>
          </Box>
          <Box>7
            <FuelPrice>4,99</FuelPrice>
          </Box>
        </Row>
        <Row>
          <Box>
            <FuelText>Diesel S10</FuelText>
          </Box>
          <Box>7
            <FuelPrice>5,19</FuelPrice>
          </Box>
        </Row>
      </Panel>
    </Container>
  )
}
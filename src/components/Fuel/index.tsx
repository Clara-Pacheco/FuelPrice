
import { Container, Panel, SettingIcon, Title, Box, Row } from "./styles"

export const FuelComponent = () => {
  return (
    <Container>
      <Title>Posto ReactJS</Title>
      <SettingIcon />
      <Panel>
        <Row>
          <Box>Gasolina Comum</Box>
          <Box>7,69</Box>
        </Row>
        <Row>
          <Box>Etanol</Box>
          <Box>5,89</Box>
        </Row>
        <Row>
          <Box>Diesel</Box>
          <Box>4,99</Box>
        </Row>
        <Row>
          <Box>Diesel S10</Box>
          <Box>5,19</Box>
        </Row>   
      </Panel>
    </Container>
  )
}
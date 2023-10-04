import styled from "styled-components";

import imageGasStation from '../../assets/gas-station.jpg'

import { FiSettings, FiSave } from 'react-icons/fi'

export const Container = styled.div`
  background: url(${imageGasStation});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;

  text-align: center;
`

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;

  font-size: 48px;

  color: ${(props) => props.theme.colorGray200};

  padding-top: 10px;

`

export const SettingIcon = styled(FiSettings) `
  color: ${({ theme }) => theme.colorGray200};
  font-size: 32px;
  cursor: pointer;

  position: absolute;
  right: 20px;
  top: 20px;

`

export const Panel = styled.section`
  width: 300px;
  height: 600px;
  background-color: ${({ theme }) => theme.colorGray100};

  border-radius: 5px;

  position: relative;
  left: calc(100vw - 350px);
  margin-top: 60px;

`

export const Box = styled.div`
  width: 135px;
  height: 65px;

  background: ${({ theme }) => theme.colorBlue200};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 35px;

`

export const FuelText = styled.span`
   color:${({ theme }) => theme.colorWhite};
   font-size: 1.5rem;
   font-weight: bold;
`
export const FuelPrice = styled.span`
   font-family: 'Digital-7 Mono', sans-serif;
   color:${({ theme }) => theme.colorYellow600};
   font-size: 3.5rem;
   
   text-align: left;
`

export const InfoText = styled.span`
   color:${({ theme }) => theme.colorWhite};
   font-size: 1.2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;

`

export const SaveButton = styled.button`
  width: 150px;
  background-color: ${({ theme }) => theme.colorBlue200};
  border: none;
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px;

  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    filter: brightness(.8)
  }

`

export const SaveIcon = styled(FiSave) `
  color: ${({ theme }) => theme.colorWhite};
  font-size: 30px;



`
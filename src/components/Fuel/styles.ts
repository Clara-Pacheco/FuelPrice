import styled from "styled-components";

import imageGasStation from '../../assets/gas-station.jpg'

import { FiSettings } from 'react-icons/fi'

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
import React from "react";
import Sidebar from "./Components/Sidebar"
import styled from 'styled-components'

export default function App() {
  return (
    <AppStyled>
     <Sidebar />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  // background-color:red;
  

`;

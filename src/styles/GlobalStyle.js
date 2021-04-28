  import {createGlobalStyle} from 'styled-components'


  const GlobalStyled = createGlobalStyle`
      :root{
         --background-color:#000;
         --primary-color:#6c757d;
         --secondary-color:#000;
         --background-dark-color:#10121A;
         --border-color:#2e344e;
         --background-light-color:#F1F1F1;
         --white-color:#FFF;
         --font-light-color:#a4acc4;
         --font-dark-color:#313131;
         --font-dark-color-2:#151515;
         

      }

      *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-size:1.2rem;
        list-style:none;
        text-decoration:none;
      }

      body{
        background-color: var(--background-dark-color);

      }
  `;

  export default GlobalStyled;
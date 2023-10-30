import React, { useState } from 'react';
import './App.css';
import { Myroutes } from "./routers/routes";
import { styled, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light"? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <ThemeContext.Provider value = {{setTheme, theme}}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
                <Sidebar sidebarOpen = {sidebarOpen} setSidebarOpen = {setSidebarOpen}/>
                <Myroutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme})=>theme.bgtotal};
  transition: all 0.3s;
  &.active{
    grid-template-columns: 300px auto;
  }
  color: ${({theme})=>theme.text}
`

export default App
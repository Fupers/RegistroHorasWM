import styled from "styled-components";
import logo from "../assets/logowm.png";
import { v } from "../styles/Variables";
import { 
  AiOutlineLeft,
  AiFillSetting,
  AiFillDollarCircle,
  AiFillProject
 } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiSolidDashboard, BiSolidBriefcase, BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { HiUsers } from "react-icons/hi";
import { Component } from "./Buttons/StateButton/StateButton";

export function Sidebar({sidebarOpen, setSidebarOpen}) {
  const ModSidebaropen=()=>{
    setSidebarOpen(!sidebarOpen);
  };
  const {setTheme, theme} = useContext(ThemeContext)
  const CambiarTheme = () => {
    setTheme((theme)=>(theme==="light"?"dark":"light"))
  };

  return (
    <Container isOpen ={sidebarOpen} themeUse={theme}>
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineLeft/>
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
      </div>
      {linksArray.map(({icon, label, to})=>(
        <div className="LinkContainer" key={label}>
          <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider/>
      {secondarylinksArray.map(({icon, label, to})=>(
        <div className="LinkContainer" key={label}>
          <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider/>
      <div className="positionbutton">
        <Component className="component-26" property1="frame-23" onClick={CambiarTheme}/>
      </div>
      </Container>
  )
}

//#region Data links
const linksArray=[
  {
    label: "Centro de costos",
    icon: <AiFillDollarCircle/>,
    to: "/centrocostos"
  },
  {
    label: "Area",
    icon: <BiSolidDashboard/>,
    to: "/area"
  },
  {
    label: "Tareas",
    icon: <BiSolidBriefcase/>,
    to: "/tareas"
  },
  {
    label: "Clientes",
    icon: <FaHandshake/>,
    to: "/clientes"
  },
  {
    label: "Proyectos",
    icon: <AiFillProject/>,
    to: "/proyectos"
  },
  {
    label: "Usuarios",
    icon: <HiUsers/>,
    to: "/usuarios"
  },

];
const secondarylinksArray=[
  {
    label: "Configuracion",
    icon: <AiFillSetting/>,
    to: "/null"
  },
  {
    label: "Salir",
    icon: <BiLogOut/>,
    to: "/null"
  },
]
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props)=>props.theme.text};
  background: ${(props)=>props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .Sidebarbutton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props)=>props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props)=>props.theme.bg3}, 0 0 7px ${(props)=>props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({isOpen})=>(isOpen?'initial':'rotate(180deg)')};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    outline: none;
  }
  .Logocontent{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    padding-top: 10px;
    .imgcontent{
      display: flex;
      img{
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.1s;
      transform: ${({isOpen})=>(isOpen?'scale(1)':'scale(0.5)')}
    }
    h2{
      display: ${({isOpen})=>(isOpen?'block':'none')};
    }

  }
  .LinkContainer{
    margin: 8px 0;
    transition: 0.3s;
    padding: 0 ${({isOpen})=>(isOpen?'20px':'15%')};
    :hover{
      background: ${(props) => props.theme.bg3};
    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-3px) 0;
      color: ${(props) => props.theme.text};
      height: 50px;
      font-size: 16px;
      font-weight: 600;
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg {
          font-size: 32px;
        }
      }
      &.active {
        span{
          color: ${(props) => props.theme.bg4};
          font-size: 18px;
        }
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent{
    display: flex;
    align-items: center;
    span{
      display: block;
      padding: 10px;
      font-weight: 700;
    }
    .Togglecontent{
      margin: ${({isOpen})=>(isOpen?'auto 40px':'auto 15px')};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container{
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid{
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Roboto", sans-serif;
        }
        .demo{
          font-size: 32px;
          .switch{
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither{
              opacity: 0;
              width: 0;
              height: 0;
              &:checked +.slider:before{
                left: 4px;
                content: "🌙";
                transform: translate(26px);
              }
            }
            .slider{
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({themeUse})=>(themeUse==="light"? v.lightcheckbox: v.checkbox)};
              transition: 0.4s;
              &::before{
                position: absolute;
                content: "🔆";
                height: 0;
                width: 0;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round{
                border-radius: 34px;
                &::before{
                  border-radius: 50%;
                }
              }
            }
            
          }
        }
      }
    }
  }
  .positionbutton{
    padding-left: 40px;
  }
`
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props)=>props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`
//#endregion

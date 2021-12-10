import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

// La barra de navegación transparente
export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

// Los links del nav
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
       position: absolute;
       top: 10px;
       left: 25px;
    }
`

// Los iconos del nav
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
        &:hover{
            color: #e9ba23;
            box-shadow: 0 3px #e9ba23;
        }
    }
`


export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
    &:hover{
        color: #e9ba23;
        box-shadow: 0 3px #e9ba23;
    }
`
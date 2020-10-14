import styled from 'styled-components'
import Link from 'next/link'

interface Props {
    
}

const Nav = styled.nav`
width: 100%;
height: 80px;
display: flex;
align-items: center;
background-color: black;
`

const Logo = styled.div`
color: #e3c29d;
font-size: 24px;
font-weight: bold;
margin: 30px;
cursor: pointer;
`

export default function Navbar({}: Props) {
    return (
        <Nav>
           <Logo><Link href='/'>Journey.</Link></Logo> 
        </Nav>
    )
}

import Link from "next/link"
import Image from 'next/image'
import NavbarBackground from "./NavbarBackground"
import logo from "@/assets/logo.png"
import classes from './Navbar.module.css'
import Navlink from "./Navlink"
function Navbar() {
    return (
        <>
            <NavbarBackground/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                <Image src={logo} alt="a food plate" priority/>
                Next Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Navlink href="/meals">Browse Meals</Navlink>
                        </li>
                        <li>
                            <Navlink href="/community">Food Community</Navlink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar

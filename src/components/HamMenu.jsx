import {Sling as Hamburger} from "hamburger-react"
import { useState } from "react"
import DropDown from "./Menu"

export default function HamMenu() {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)
    return (
        <div>
           <Hamburger color="white" className="text-2xl xl:text-5xl" toggled={isOpen} toggle={setOpen}/>
           {isOpen ? <DropDown/> : null}
        </div>
    )
}
import HamMenu from "./HamMenu"
import Search from "./Search"


export default function NavBar(){

    return (
        <div className="bg-ctred z-50 h-16 flex justify-between items-center px-2 fixed w-screen top-0 sm:p-8 xl:h-20">
                <HamMenu/> 
            <img className="w-60 lg:w-3/12" src="https://static.compliancetrainingonline.com/images/logo.svg" alt="Compliance Training Online Logo" />
            <Search/>
            
        </div>
    )
}
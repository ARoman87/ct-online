import Follow from "./Follow"
import ContactUs from "./ContactUs"
import Copyright from "./Copyright"

function Footer() {
    return (
        <div className="bg-ctred">
            <div className="md:flex justify-around md:px-20 2xl:px-80">
                <Follow/>
                <ContactUs />
            </div>
            <Copyright />
        </div>
    )
}

export default Footer
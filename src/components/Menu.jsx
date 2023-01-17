

function DropDown() {
    return (
        <div className="fixed bg-gray-900/75 text-white w-full left-0 top-16 xl:top-20  h-full xl:text-2xl 2xl:text-3xl">
            <div className="pl-5 pb-36 flex flex-col justify-evenly h-full lg:w-1/5 ">
                <p className="hover:underline cursor-pointer">COURSE CATALOG <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
                <p className="hover:underline cursor-pointer">LOGIN</p>
                <p className="hover:underline cursor-pointer">MY COURSES</p>
                <p className="hover:underline cursor-pointer">MY ADMIN</p>
                <p className="hover:underline cursor-pointer">SHOPPING CART</p>
                <p className="hover:underline cursor-pointer">RESOURCES</p>
                <p className="hover:underline cursor-pointer">BLOGS</p>
                <p className="hover:underline cursor-pointer">ABOUT US <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
                <p className="hover:underline cursor-pointer">CONTACT US</p>
                <p className="hover:underline cursor-pointer">FAQ</p>
                <p className="hover:underline cursor-pointer">HELP</p>
                <p className="hover:underline cursor-pointer">SITE MAP</p>
                <p className="hover:underline cursor-pointer">GET EMAIL UPDATES</p>
            </div>
        </div>
    )
}

export default DropDown
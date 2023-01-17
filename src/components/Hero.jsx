/* eslint-disable jsx-a11y/img-redundant-alt */


export default function Hero() {
    return (
        <div className="pt-14 2xl:h-screen 2xl:flex 2xl:flex-col">
            <img className="background-img" src="https://static.compliancetrainingonline.com/images/hero-home.jpg" alt="background image"  />

            <div className="bg-gray-100/75 m-4 rounded-lg 2xl:h-3/5 2xl:w-2/4 2xl:ml-4 2xl:ml-0 2xl:mb-10 xl:px-10 xl:mx-60 md:mx-20 lg:mx-60">
                
                <p className="font-semibold text-blue-800 text-4xl mx-5 py-5 text-center 2xl:text-7xl xl:text-7xl">Compliance Training Online®</p>
                <p className="text-blue-700 font-semibold text-2xl mx-5 text-center 2xl:px-10 2xl:mb-6">Helping keep your employees safe and your company compliant.</p>


                <p className="course-links p-2 text-center text-blue-800 2xl:text-lg 2xl:leading-loose 2xl:py-0 2xl:px-5 ">Easy to use, high quality, low cost online training courses for compliance with <a href="https://www.compliancetrainingonline.com/cal-osha-training-courses.cfm" target="_blank" rel="noreferrer"><strong>Cal/OSHA</strong></a>, <a href="https://www.compliancetrainingonline.com/canada-ohs-training-courses.cfm" target="_blank" rel="noreferrer"><strong>Canada OHS</strong></a>, <a href="https://www.compliancetrainingonline.com/dot-hazmat-training-courses.cfm" target="_blank" rel="noreferrer"><strong>DOT HAZMAT</strong></a>, <a href="https://www.compliancetrainingonline.com/eeoc-training-courses.cfm" target="_blank" rel="noreferrer"><strong>EEOC</strong></a>, <a href="https://www.compliancetrainingonline.com/epa-training-courses.cfm" target="_blank" rel="noreferrer"><strong>EPA</strong></a>, <a href="https://www.compliancetrainingonline.com/hazwoper-training-courses.cfm" target="_blank" rel="noreferrer"><strong>HAZWOPER</strong></a>, <a href="https://www.compliancetrainingonline.com/hipaa-security.cfm" target="_blank" rel="noreferrer"><strong>HIPAA</strong></a>, <a href="https://www.compliancetrainingonline.com/iata-training-courses.cfm" target="_blank" rel="noreferrer"><strong>IATA</strong></a>, <a href="https://www.compliancetrainingonline.com/imo-training-courses.cfm" target="_blank" rel="noreferrer"><strong>IMO</strong></a>, <a href="https://www.compliancetrainingonline.com/msha-training-courses.cfm"><strong>MSHA</strong></a>, and <a href="https://www.compliancetrainingonline.com/osha-training-courses.cfm" target="_blank" rel="noreferrer"><strong>OSHA</strong></a> safety standards and regulations, complete with a management system to track your company's compliance, and a printable certificate and wallet card for each student upon successful course completion. Over 31,600 Companies, Government Agencies and Universities have trained using our online courses. Our experience in online compliance training is second to none.</p>
            </div>

            <div className="bg-gray-100/75 pb-4 mx-4 rounded-lg 2xl:flex 2xl:w-4/6 2xl:justify-around 2xl:bg-transparent 2xl:pt-4 md:flex md:justify-around">
                <p className="font-bold text-4xl text-center text-blue-900 2xl:text-6xl">HIGHEST RATED</p>
                <p className="font-bold text-4xl text-center text-blue-900 2xl:text-6xl">MOST TRUSTED</p>
            </div>

            <div className="bg-ctred flex justify-around px-10 py-2 2xl:w-3/5 2xl:h-40 2xl:rounded 2xl:items-center 2xl:ml-20 md:h-40">
                <a href="https://www.bbb.org/us/tx/dripping-springs/profile/training-program/compliancetrainingonlinecom-0825-90078824#sealclick" target="_blank" rel="noreferrer"><img className="w-28 2xl:w-full 2xl:mr-10 md:w-full" src="https://static.compliancetrainingonline.com/images/bbb-rating-white.svg" alt="" /></a>
                <a href="https://www.trustpilot.com/review/www.compliancetrainingonline.com" target="_blank" rel="noreferrer"><img className="w-24 2xl:w-9/12 2xl:ml-20 2xl:mb-3 md:w-8/12 md:ml-24" src="https://static.compliancetrainingonline.com/images/trustpilot-4.5star.svg"  alt="Trust Pilot" /></a>
                
            </div>

        </div>
    )
}
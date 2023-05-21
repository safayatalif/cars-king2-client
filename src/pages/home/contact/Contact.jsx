import React from 'react';
import contact1 from "../../../assets/image/delivery.png"
import contact2 from "../../../assets/image/mail-inbox.png"
import contact3 from "../../../assets/image/quality.png"
import contact4 from "../../../assets/image/phone-call.png"

const Contact = () => {
    return (
        <div className='bg-hero to-slate-200 backdrop-opacity-10 rounded-lg my-12 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center space-y-4'>
                <div className="text-center" data-aos="zoom-in" data-aos-duration="3000">

                    <img className='w-16 mx-auto' src={contact1} alt="" />
                    <h1 className='mt-4 font-bold'>Free Shipping</h1>
                    <p>On everything</p>
                </div>
                <div className="text-center " data-aos="zoom-in" data-aos-duration="3000">

                    <img className='w-16 mx-auto' src={contact4} alt="" />
                    <h1 className='mt-4 font-bold'>Give Us A Call on</h1>
                    <p>9824508178</p>
                </div>
                <div className="text-center " data-aos="zoom-in" data-aos-duration="3000">

                    <img className='w-16 mx-auto' src={contact2} alt="" />
                    <h1 className='mt-4 font-bold'>Bulk Inquiry</h1>
                    <p>info@dactoys.in</p>
                </div>
                <div className="text-center " data-aos="zoom-in" data-aos-duration="3000">

                    <img className='w-16 mx-auto' src={contact3} alt="" />
                    <h1 className='mt-4 font-bold'>Detsky&apos;s Quality Assurance</h1>
                    <p>Every product is original, fresh and of high quality</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
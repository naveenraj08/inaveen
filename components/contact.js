import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";


export const Contact = () => {

    const form = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6m8ujdb', 'template_op03rv5', form.current, '4dBxOofL1_NlzCf_n')
            .then((result) => {
                console.log(result);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });

    }


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //    
    // };

    return (
        <div className='w-full'>
            <div className='flex flex-col justify-start items-center gap-[100px] container px-6 py-[80px]'>
                <div className="content text-sm text-slate-500 max-w-[50%]">
                    <h2 className='uppercase text-4xl mb-5 text-center text-slate-900 font-semibold'>Contact</h2>
                    <p className='mb-5 text-center'>
                        Each contact with a human being is so rare, so precious, one should presver it
                    </p>
                    <form ref={form} onSubmit={handleFormSubmit} action='#' className="space-y-8 mt-10 w-full">
                        <div className="field">
                            <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-slate-900">Your name</label>
                            <input type="text" name="from_name" id="from_name" className="w-full px-5 py-3 border border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary" placeholder="Name" />
                        </div>
                        {/* <div className="field">
                            <label htmlFor="to_name">to_name</label>
                            <input type="text" name="to_name" id="to_name" />
                        </div> */}
                        <div className="field">
                            <label htmlFor="reply_to" className="block mb-2 text-sm font-medium text-slate-900">Your email</label>
                            <input type="email" name="reply_to" id="reply_to" className="w-full px-5 py-3 border border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary" placeholder="Email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-900">Your message</label>
                            <textarea name="message" id="message" className="w-full px-5 py-3 border min-h-[170px] border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary" placeholder="Your comment..."></textarea>
                        </div>

                        <input type="submit" id="button" value="Connect with me" className="cursor-pointer block mt-10 mx-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary transition-all duration-300 hover:bg-primary focus:outline-none clay" />
                    </form>
                </div>
            </div>
        </div>
    )
}

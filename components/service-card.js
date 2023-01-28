import Image from 'next/image'
import React from 'react'

export const ServiceCard = () => {
    return (
        <>
            <div className="service_card p-5 py-10 bg-slate-700 text-white col-span-3 rounded dev service-clay shadow-lg transition-all duration-300 hover:-translate-y-3">
                <div className='flex flex-col justify-center items-center mx-auto'>
                    <div>
                        <svg version="1.1" width="60" height="60" x="0" y="0" viewBox="0 0 24 24"><g><path d="m1.293 12.707 4 4a1 1 0 1 0 1.414-1.414L3.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414zM18.707 7.293a1 1 0 1 0-1.414 1.414L20.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM13.039 4.726l-4 14a1 1 0 0 0 .686 1.236A1.053 1.053 0 0 0 10 20a1 1 0 0 0 .961-.726l4-14a1 1 0 1 0-1.922-.548z" fill="currentColor"></path></g></svg>
                    </div>
                    <h4 className='font-semibold uppercase my-5'>Developing</h4>
                    <p className='text-center text-sm text-gray-300'>The function of Good Software is to make the complex appear to be Simple.</p>
                </div>
            </div>
            <div className="service_card p-5 py-10 bg-slate-700 text-white col-span-3 rounded seo service-clay shadow-lg transition-all duration-300 hover:-translate-y-3">
                <div className='flex flex-col justify-center items-center mx-auto'>
                    <div>
                        <svg width="60" height="60" x="0" y="0" viewBox="0 0 512 512" ><g><path d="M32 168H16v-32a40.045 40.045 0 0 1 40-40h272V80h-16a8 8 0 0 1-5.657-13.657l48-48a8 8 0 0 1 11.314 0l48 48A8 8 0 0 1 408 80h-16v16h32a40.045 40.045 0 0 1 40 40v160h-16V136a24.028 24.028 0 0 0-24-24h-32v144h-16V72a8 8 0 0 1 8-8h4.687L360 35.313 331.313 64H336a8 8 0 0 1 8 8v192h-16V112H56a24.028 24.028 0 0 0-24 24Zm24 248h133.247l-19.2 64H152v16h176v-16h-18.047l-10.29-34.3-15.326 4.6 8.911 29.7h-106.5l19.2-64H264v-16H56a24.028 24.028 0 0 1-24-24v-8h224v-16H32V184H16v192a40.045 40.045 0 0 0 40 40Zm240-136V152h-32v184H56v-16h32v-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v64h16V200a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v120h16V144a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v136Zm-160-16h-32v56h32Zm80-56h-32v112h32ZM56 128v16h16v-16Zm48 0H88v16h16Zm16 0v16h16v-16Zm368.967 327.033A24.167 24.167 0 0 1 496 472a23.978 23.978 0 0 1-24 24 24.5 24.5 0 0 1-16.967-7.033l-38.293-38.292a96.074 96.074 0 1 1 33.935-33.935ZM448 368a80 80 0 1 0-80 80 80.091 80.091 0 0 0 80-80Zm29.652 98.348-36.387-36.389a96.887 96.887 0 0 1-11.306 11.306l36.389 36.387a7.993 7.993 0 1 0 11.3-11.3ZM432 368a64 64 0 1 1-64-64 64.072 64.072 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.053 48.053 0 0 0 48-48Zm-80 0h16a16.019 16.019 0 0 1 16-16v-16a32.036 32.036 0 0 0-32 32ZM440 64h16a48.053 48.053 0 0 0-48-48v16a32.036 32.036 0 0 1 32 32Z" fill="currentColor"></path></g></svg>
                    </div>
                    <h4 className='font-semibold uppercase my-5'>Optimization</h4>
                    <p className='text-center text-sm text-gray-300'>It's important to look beyond rankings and rather ensure a website is usable for everyone.</p>
                </div>
            </div>
            <div className="service_card p-5 py-10 bg-slate-700 text-white col-span-3 rounded rwd service-clay shadow-lg transition-all duration-300 hover:-translate-y-3">
                <div className='flex flex-col justify-center items-center mx-auto'>
                    <div>
                        <svg width="60" height="60" x="0" y="0" viewBox="0 0 16.933 16.933"><g><path d="M1.323 3.175a.798.798 0 0 0-.794.793v7.409c0 .435.359.793.794.793h3.709a1.31 1.31 0 0 1-.034.175c-.062.237-.213.554-.598.883h-.432c-.353 0-.353.53 0 .53h3.176c.353 0 .353-.53 0-.53H5.132c.206-.267.32-.528.378-.749.03-.116.042-.217.048-.309h1.586c.358.005.358-.534 0-.529H1.323a.258.258 0 0 1-.265-.264v-1.323h6.086c.358.005.358-.534 0-.53H1.058V3.969c0-.15.114-.264.265-.264h10.054c.151 0 .265.113.265.264-.005.358.534.358.529 0a.798.798 0 0 0-.794-.793zM8.73 4.76a.8.8 0 0 0-.795.795v7.409c0 .435.36.792.795.792h3.174c.353 0 .353-.529 0-.529H8.731a.258.258 0 0 1-.265-.263v-1.323h3.44c.352 0 .352-.529 0-.529h-3.44V6.35h5.293v.795c0 .353.529.353.529 0V5.556a.8.8 0 0 0-.795-.795zm-6.883.526a.265.265 0 0 0-.261.27v.529c0 .352.53.352.53 0v-.53a.265.265 0 0 0-.269-.27zm6.883.004h4.762a.26.26 0 0 1 .266.265v.264H8.466v-.264a.26.26 0 0 1 .265-.265zM1.848 6.875a.265.265 0 0 0-.261.27V8.73c0 .353.53.353.53 0V7.144a.265.265 0 0 0-.269-.27zm7.409 0a.265.265 0 0 0-.262.27v.528c0 .353.53.353.53 0v-.529a.265.265 0 0 0-.268-.27zm4.236 1.062a.797.797 0 0 0-.793.793v4.235c0 .435.358.792.793.792h2.117a.796.796 0 0 0 .793-.792V8.73a.796.796 0 0 0-.793-.793zm-4.236.526a.264.264 0 0 0-.262.267v1.588c0 .353.53.353.53 0V8.73a.264.264 0 0 0-.268-.267zm4.236.004h2.117c.152 0 .264.112.264.263v.266H13.23V8.73c0-.151.112-.264.263-.264zm-.263 1.058h2.644v2.645H13.23zm-7.145 1.588h.53c.352 0 .352-.53 0-.53h-.543c-.365.018-.34.547.013.53zm4.764 1.057c-.353 0-.353.529 0 .529h.53c.352 0 .352-.53 0-.53zm2.38.529h2.645v.266a.257.257 0 0 1-.264.264h-2.117a.257.257 0 0 1-.263-.264z" fill="currentColor"></path></g></svg>
                    </div>
                    <h4 className='font-semibold uppercase my-5'>RWD</h4>
                    <p className='text-center text-sm text-gray-300'>
                        Responsive Web Design always plays important role whenever going to promote your website.
                    </p>
                </div>
            </div>
            <div className="service_card p-5 py-10 bg-slate-700 text-white col-span-3 rounded design service-clay shadow-lg transition-all duration-300 hover:-translate-y-3">
                <div className='flex flex-col justify-center items-center mx-auto'>
                    <div>
                        <svg width="60" height="60" x="0" y="0" viewBox="0 0 60 60"><g><path d="M43 0H17a5.006 5.006 0 0 0-5 5v50a5.006 5.006 0 0 0 5 5h26a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM24 2h12v1a1 1 0 0 1-1 1H25a1 1 0 0 1-1-1zm22 53a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h5v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V2h5a3 3 0 0 1 3 3z" fill="currentColor"></path><path d="M37 54H23a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM38 39a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2h2v8h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-8zM22 37a1 1 0 0 0-1 1v7a4 4 0 0 0 8 0v-7a1 1 0 0 0-2 0v7a2 2 0 0 1-4 0v-7a1 1 0 0 0-1-1zM25 22a4 4 0 0 0 4-4v-7a1 1 0 0 0-2 0v7a2 2 0 0 1-4 0v-7a1 1 0 0 0-2 0v7a4 4 0 0 0 4 4zM31.485 21.857a1 1 0 0 0 1.372-.342L35 17.944l2.143 3.571a1 1 0 0 0 1.714-1.03L36.166 16l2.691-4.485a1 1 0 0 0-1.714-1.03L35 14.056l-2.143-3.571a1 1 0 0 0-1.714 1.03L33.834 16l-2.691 4.485a1 1 0 0 0 .342 1.372zM41.72 25.04l-24 7a1 1 0 1 0 .56 1.92l24-7a1 1 0 1 0-.56-1.92z" fill="currentColor" ></path></g></svg>
                    </div>
                    <h4 className='font-semibold uppercase my-5'>Web Design</h4>
                    <p className='text-center text-sm text-gray-300'>
                        Creativity involves breaking out of expected patterns in order to look at things in a different way.
                    </p>
                </div>
            </div>
        </>
    )
}

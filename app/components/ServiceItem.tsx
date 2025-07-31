import { MotionEffect } from '@/components/animate-ui/effects/motion-effect'
import Link from 'next/link'
import React from 'react'

type ServiceItemData = {
    id: number,
    serviceName?: string,
    serviceDescription?: string,
    link?: string
};

type ServiceItemProp = {
    data: ServiceItemData
};

export const ServiceItem = ({ data }: ServiceItemProp) => {

    const { id, serviceName, serviceDescription, link } = data;

    return (
        <li>
            <MotionEffect key={id} slide={{ direction: 'down', }} fade zoom inView delay={0.5 + id * 0.1}>
                <div className="bg-neutral-100 p-5 lg:p-10 border-gray-200 rounded-xl">
                    <h3 className="text-black text-lg lg:text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
                        <span>{id}</span>
                        <span>{serviceName}</span>
                    </h3>
                    <p className="text-gray-600 mb-10">
                        {serviceDescription}
                    </p>
                    <Link
                        href={"/"}
                        target="_blank" rel="noopener noreferrer"
                        className="lg:mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
                    >
                        {link}
                    </Link>
                </div>
            </MotionEffect>
        </li>
    )
}

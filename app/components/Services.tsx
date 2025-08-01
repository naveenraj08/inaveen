import React from "react";
import { ServiceItem } from "./ServiceItem";

type ServiceItem = {
  id: number;
  serviceName?: string;
  serviceDescription?: string;
  link?: string;
};

type ServiceContent = {
  title: string;
  serviceListCollection: {
    items: ServiceItem[];
  };
};

type ServiceContentProps = {
  data: ServiceContent;
};

export const Services = ({ data }: ServiceContentProps) => {

  const {
    title,
    serviceListCollection,
  } = data;

  return (
    <section className="py-10 lg:py-20 pt-0 bg-white section">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto">
        <div className="block">
          <h2 className="text-black text-xl font-medium relative title inline-flex items-center gap-x-2 uppercase">
            {title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
          {
            serviceListCollection?.items.map((item: ServiceItem, index) => (
              <ServiceItem key={index} data={item} />
            ))
          }
        </ul>
      </div>
    </section>
  );
};

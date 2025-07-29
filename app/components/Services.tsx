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
    <section className="py-20 pt-0 px-20 bg-white section">
      <div className="block">
        <h2 className="text-black text-lg font-medium relative title inline-flex items-center gap-x-2 uppercase">
          {title}
        </h2>
      </div>

      <ul className="grid grid-cols-3 gap-5 pt-10">
        {
          serviceListCollection?.items.map((item: ServiceItem, index) => (
            <ServiceItem key={index} data={item} />
          ))
        }
      </ul>
    </section>
  );
};

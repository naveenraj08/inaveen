import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import React from "react";


type RichTextNode = {
  nodeType: string,
  value?: string,
  content?: RichTextNode[],
  data?: {
    uri?: string;
  };
}


type AboutContentType = {
  title: string,
  action: string,
  link: string,
  content: {
    json: {
      content: RichTextNode[];
    };
  }
}



export const About = (data: AboutContentType) => {

  const {
    title,
    action,
    link,
    content
  } = data?.data;


  const aboutContent = content?.json?.content[0]?.content;


  return (
    <section className="p-20 py-[100px] bg-white section">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1 flex flex-col h-[180px] justify-between items-start">
          <h2 className="text-black text-lg font-medium relative title inline-flex items-center gap-x-2 uppercase">
            {title}
          </h2>

          <RippleButton
            rippleClassName="bg-white/80"
            className={
              "inline-flex h-12 text-sm font-medium items-center gap-x-8 mt-10 px-3 pl-5 py-4 bg-black text-white rounded-full hover:bg-black"
            }
          >
            {action}
            <span className="p-2 rounded-full text-black bg-[#00FF66]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </RippleButton>
        </div>
        <div className="col-span-2">
          {
            aboutContent?.map((node, index) => {
              if (node?.nodeType === "text") {
                return (<p className="text-xl text-black font-medium" key={index}>
                  {node?.value}
                </p>)
              }

              if (node?.nodeType === "hyperlink") {
                const url = node.data?.uri ?? "#";
                const linkText = node.content?.map((child) => child?.value).join("");

                return (
                  <LinkPreview
                    key={index}
                    url={url}
                    imageSrc="/asset/certified.png"
                    isStatic
                    className="font-bold bg-clip-text text-white"
                  >
                    {linkText}
                  </LinkPreview>
                );
              }

              return null;
            })
          }

          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-x-2 mt-8 py-2 border-b border-gray-400"
          >
            About me
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

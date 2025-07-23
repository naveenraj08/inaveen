import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";


type RichTextNode = {
    nodeType: string,
    value?: string,
    content?: RichTextNode[],
    data?: {
        uri?: string;
    };
}

type HeroDescriptionType = {
    description: {
        json: {
            content: RichTextNode[];
        };
    }
    action: string;
};

export const HeroDescription = ({
    description,
    action,
}: HeroDescriptionType) => {

    const desc = description?.json?.content[0]?.content;

    return (
        <div className="text-white max-w-lg">
            <div className="text-base">
                {
                    desc?.map((node, index) => {
                        if (node?.nodeType === "text") {
                            return <span key={index}>{node?.value}</span>;
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
            </div>

            <RippleButton
                rippleClassName="bg-black/80"
                className={
                    "inline-flex h-12 text-sm font-medium items-center gap-x-8 mt-10 px-3 pl-5 py-4 bg-white text-black rounded-full hover:bg-white"
                }
            >
                {action}
                <span className="p-2 rounded-full bg-[#00FF66]">
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
    );
};

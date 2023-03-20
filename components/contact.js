import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [showContactSubmitLoad, setshowContactSubmitLoad] = useState(false);

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setshowContactSubmitLoad(true);
    emailjs
      .sendForm(
        "service_6m8ujdb",
        "template_op03rv5",
        form.current,
        "4dBxOofL1_NlzCf_n"
      )
      .then(
        (result) => {
          form.current.reset();
          setshowContactSubmitLoad(false);
        },
        (error) => {
          setshowContactSubmitLoad(false);
          form.current.reset();
        }
      );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center gap-[100px] container px-6 py-[80px]">
        <div className="content text-sm text-slate-500 xl:max-w-[50%]">
          <h2 className="uppercase text-4xl mb-5 text-center text-slate-900 font-semibold">
            Contact
          </h2>
          <p className="mb-5 text-center">
            Each contact with a human being is so rare, so precious, one should
            preserve it
          </p>
          <form
            ref={form}
            onSubmit={handleFormSubmit}
            action="#"
            className="space-y-8 mt-10 w-full"
          >
            <div className="field">
              <label
                htmlFor="from_name"
                className="block mb-2 text-sm font-medium text-slate-900"
              >
                Your name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                className="w-full px-5 py-3 border border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Name"
              />
            </div>
            {/* <div className="field">
                            <label htmlFor="to_name">to_name</label>
                            <input type="text" name="to_name" id="to_name" />
                        </div> */}
            <div className="field">
              <label
                htmlFor="reply_to"
                className="block mb-2 text-sm font-medium text-slate-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                className="w-full px-5 py-3 border border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-slate-900"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full px-5 py-3 border min-h-[170px] border-gray-300 text-black text-sm shadow-sm rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="Your comment..."
              ></textarea>
            </div>

            <div className="relative flex justify-center items-center w-max mx-auto">
              <input
                type="submit"
                id="button"
                value="Connect with me"
                className={
                  showContactSubmitLoad === true
                    ? "cursor-pointer block mx-auto py-3 px-5 pl-14 text-sm font-medium text-center text-white rounded-lg bg-primary transition-all duration-300 hover:bg-primary focus:outline-none clay"
                    : "cursor-pointer block mx-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary transition-all duration-300 hover:bg-primary focus:outline-none clay"
                }
              />
              {showContactSubmitLoad === true ? (
                <div
                  role="status"
                  className="loader absolute top-3 left-6 z-40"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 text-gray-400 animate-spin fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

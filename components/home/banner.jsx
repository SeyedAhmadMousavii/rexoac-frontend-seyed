import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function MainBanner() {
    return (
        <div className="container mx-auto pt-10 px-4">
            <div className="flex flex-col-reverse md:flex-row gap-4 justify-around">
                <div className="flex-col justify-around align-middle mt-9">
                    <p className="text-3xl font-bold mb-4 text-center md:text-start">
                        برنامه نویسی رو آسون یاد بگیر!
                    </p>
                    <p className="text-slate-500 m-auto text-center md:text-start">
                        ما کنارتون هستیم تا زمانی که به رویاهاتون برسید
                    </p>
                    <p className="mb-3 text-slate-500 m-auto text-center md:text-start">
                        با ما همراه باشید
                    </p>
                    <div className="flex justify-between items-center align-middle px-2 gap-4">
                        <button type="button" className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
                            بزن بریم!
                        </button>
                        <button type="button" className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border border-indigo-600 font-semibold bg-white text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
                            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
                            مشاوره!
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/assets/main_section_banner.png" className="w-[400px] m-auto" alt="main-banner" />
                </div>
            </div>
        </div>
    );
};
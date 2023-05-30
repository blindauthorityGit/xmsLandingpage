import { useState, useEffect } from "react";

function QuestionClicker({ data }) {
    const [active, setActive] = useState(0);

    return (
        <div className="second col-span-12 grid grid-cols-12 mt-36" id="who">
            <div className="col-span-12">
                <h2 className="font-work text-6xl mb-8 text-center font-bold text-accentColor leading-tight ">
                    Who is it for
                </h2>
            </div>
            <div className="col-span-12 px-8 md:px-0 md:col-span-4 relative">
                {data.questions.map((e, i) => {
                    return (
                        <div>
                            <p
                                onClick={() => {
                                    console.log("nii");
                                    setActive(i);
                                }}
                                className={`${
                                    i == active ? "opacity-100 font-bold" : "opacity-50"
                                } mt-2 md:mt-8 font-work text-regular md:text-3xl text-white cursor-pointer hover:opacity-80`}
                            >
                                {e}
                                {i == active ? <hr className="mt-4"></hr> : ""}
                            </p>
                        </div>
                    );
                })}
                <p className="mt-2 md:mt-8 font-work text-regular md:text-3xl  text-white">and many more...</p>
            </div>
            <div className="md:col-span-8 col-span-12 px-8 md:px-12">
                {data.answers.map((e, i) => {
                    return (
                        <div>
                            <p className={`${i == active ? "block" : "hidden"} mt-8 font-work text-lg text-white`}>
                                {e}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionClicker;

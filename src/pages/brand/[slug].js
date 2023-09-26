import React from 'react';
import Link from "next/link";
import data from "../../const/data";
import { useRouter } from "next/router";

const Mobile = () => {
    const router = useRouter();
    const { slug } = router.query;
    const mobileData = slug && data[slug];

    return (
        <>
            <div className={"h-screen w-full"}>
                <div className={"w-full flex justify-center"}>
                    <h1 className={"text-6xl font-bold text-blue-500 my-10"}>Mobiles</h1>
                </div>
                <div className={"container flex justify-center "}>
                    <div className={"grid grid-cols-1 gap-10 md:grid-cols-3"}>
                        {mobileData &&
                            mobileData.map((item) => (
                                <Link key={item.name} href={`/brand/specification/${item.name}`}>
                                    <div
                                        className={
                                            "flex justify-center w-60 h-80 items-center space-y-4 flex-col cursor-pointer hover:shadow-blue-400 hover:shadow-xl hover:scale-105 duration-500 w-60 rounded-lg my-2 mx-2 shadow-2xl"
                                        }
                                        style={{
                                            boxShadow:
                                                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                        }}
                                    >
                                        <div className={"flex justify-center items-center my-2 rounded-md"}>
                                            <img width={100} height={50} src={`https://www.whatmobile.com.pk/${item.image}`} alt="img" />
                                        </div>
                                        <div className={"text-lg text-center"}>
                                            <b>Name</b>
                                            <div>{item.name}</div>
                                        </div>
                                        <div className={"text-center text-lg"}>
                                            <b>Price</b>
                                            <div className={"mb-2"}>{item.price}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mobile;

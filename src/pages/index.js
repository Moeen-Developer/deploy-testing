import React from 'react';
import Link from "next/link";

const nav = [
    {
        "name": "Oppo",
    },
    {
        "name": "Samsung"
    }
]
const Brand = () => {
        return (
            <>
                <div className={"flex w-full h-52 justify-center item-center mt-10"}>
                    <ul className={"cursor-pointer space-y-10"}>
                        {
                            nav.map((itm) => {
                                return (
                                    <>
                                        <Link href={`/brand/${itm.name}`}>
                                            <li>{itm.name}</li>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
;

export default Brand;
import React from "react";

function Footer(){
    let year = new Date().getFullYear()
    return(
        <div className="bg-gray-500 text-center h-screen">
            <span className="block text-2xl italic font-light p-5 selection:bg-red-600">
            Copyright Yoseph Kedir {1890}
            </span>
        </div>
    )
}


export default Footer
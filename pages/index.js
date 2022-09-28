import React, { useState, useEffect, useRef } from "react";

const fetchQuote = async () => {
  const response = await fetch("https://zenquotes.io/api/random");
  var data = await response.json();
  console.log(data);
  return data['0'];
}

export default function Home() {
  const [quote_data, setQuote_Data] = useState({});
  useEffect(() => {
    const fetchData = async () => {
    const dat = await fetchQuote();
    console.log(dat);
    setQuote_Data(dat);
    console.log(quote_data);
    }
    fetchData();
  },[]);

  return (
    <div className="justify-center flex h-screen items-center flex-row">
      <div className="bg-white h-screen w-screen text-center items-center justify-center flex">
        <div className="w-auto rounded-sm self-center">
          <div className="font-semibold text-3xl">
            Welcome
          </div>
          <div className="font-light text-md text-gray-400 mb-2">
            Please login into your account.
          </div>
          <div className="flex items-center justify-center flex-col">
            <input 
              type="text"
              className="mt-2 py-2 px-6 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 "
              placeholder="Enter your email address."
              name="email"
            />
            <input 
              type="password"
              className="mt-2 py-2 px-6 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 "
              placeholder="Enter your password."
              name="password"
            />
          </div>
          <div className="mt-8">
            <button
              type="button" 
              onClick={() => {}} 
              className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-700 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 h-screen w-screen hidden md:flex">
        <div className="flex flex-col justify-center w-full items-center text-center">
          <div className="flex justify-center items-center text-center text-white text-3xl font-monospace italic">
            {quote_data['q']}
          </div>
          <div className="flex justify-center items-center text-center text-white text-xl mt-2">
            - {quote_data['a']}
          </div>
        </div>
      </div>
    </div>
  )
}

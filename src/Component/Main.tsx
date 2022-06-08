import React, { useState } from "react";
import QRCode from "qrcode";
const Main = () => {
  const [url, seturl] = useState<string>("");
  const [Qrcode, setQrcode] = useState<string | undefined>(undefined);
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
    })
      .then((url) => {
        setQrcode(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className=" flex justify-center items-center">
        <form
          action=""
          onSubmit={handleClick}
          className="flex flex-column m-3 "
        >
          <input
            type="text"
            name=""
            id=""
            className="border-2 rounded-md border-gray-400 p-1 w-[65vw] "
            placeholder="https://aritraghorai.vercel.app/"
            onChange={(e) => {
              seturl(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="ml-5 border-2 border-gray-300 rounded-md p-2 font-bold bg-[#1ea80c] text-white hover:bg-transparent hover:border-green-500 hover:text-black hover:border-1 "
          >
            Generate
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center m-3">
        {Qrcode && (
          <>
            <img src={Qrcode} alt="" className="" />
            <a
              href={Qrcode}
              download="qrcode.png "
              className="ml-5 border-2 border-gray-300 rounded-md p-2 font-bold bg-red-500 text-white hover:bg-transparent hover:border-green-500 hover:text-black hover:border-1 mt-2"
            >
              Download
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default Main;

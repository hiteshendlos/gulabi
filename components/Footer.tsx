import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <>
      {/* <div className="fixed  bottom-0 mx-auto  w-[100vw] bg-white"> */}
      <div className="mx-auto w-[100vw] bg-white">
        <div className="shadow-lg py-5 container mx-auto">
          <hr className="" />
          <p className="text-center my-5 text-sm">
            © 2023 Gulabi Labs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

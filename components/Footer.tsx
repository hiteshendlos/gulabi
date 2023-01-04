import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <>
      <div className="fixed  bottom-0 mx-auto  w-[100vw] bg-white">
        <div className=" py-5 container mx-auto">
          <hr />
          <p className="text-center my-5">
            © 2022 Gulabi Labs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

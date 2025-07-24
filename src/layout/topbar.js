// components/Topbar.js
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
;

export default function Topbar() {
  return (
    <div className="bg-green-700 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="mb-2 sm:mb-0 font-semibold italic">
          You are one call away from saving the environment and your bills! →
        </p>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <IoIosCall className="text-lg" />
            <span>1300785436</span>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            <span>support@greenenergypowerco.com</span>
          </div>
          <div className="flex gap-2 ml-2">
            <FaFacebookF className="cursor-pointer hover:opacity-80" />
            <FaInstagram className="cursor-pointer hover:opacity-80" />
            <FaLinkedinIn className="cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

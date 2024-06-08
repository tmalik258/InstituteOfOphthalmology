import logo from "../assets/IOM logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-5 md:gap-0 px-5 md:px-0 justify-evenly items-center py-20">
      <div className="basis-1/3">
        <img src={logo} width={100} className="relative right-4" alt="Logo" />
        <h2 className="text-2xl font-semibold uppercase mb-2">
          Institute of Ophthalmology <br /> Mombasa{" "}
        </h2>
        <p className="text-justify">
          The establishment of an Institute of Ophthalmology in Mombasa, Kenya,
          in association with the University of Lahore, offers a ground-breaking
          chance to tackle the urgent problem of preventable blindness and
          visual impairment in the area.
        </p>
      </div>

      <div className="flex flex-row md:flex-col gap-2 text-xl">
        <ul className="flex flex-row md:flex-col items-center gap-2">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>
        <ul className="flex flex-row md:flex-col items-center gap-2">
          <li>
            <a href="">Doctors</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row md:flex-col gap-2 text-xl items-center">
          <li>Follow us</li>
          <li>
            <a href="">
              <FaFacebook size={28} />
            </a>
          </li>
          <li>
            <a href="">
              <RiInstagramFill size={28} />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter size={28} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

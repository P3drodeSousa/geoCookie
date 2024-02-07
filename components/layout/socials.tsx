import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import Pinterest from "../icons/Pinterest";
import Vimeo from "../icons/Vimeo";
// simple svg logos for social network to avoid licensing issues

export default function Socials() {
  const classes = "hover:text-primary transition-colors";
  return (
    <div className="text-white">
      <ul className="flex w-full justify-center gap-8 mb-6">
        <li>
          <Link
            href="https://www.linkedin.com/company/elite-sa/"
            className={classes}
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/elitebeds/"
            className={classes}
            target="_blank"
          >
            <Instagram />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.pinterest.com/elitebeds/"
            className={classes}
            target="_blank"
          >
            <Pinterest />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/elitebeds.ch/"
            className={classes}
            target="_blank"
          >
            <Facebook />
          </Link>
        </li>
        <li>
          <Link
            href="https://vimeo.com/elitebeds"
            className={classes}
            target="_blank"
          >
            <Vimeo />
          </Link>
        </li>
      </ul>
      <p className="font-light text-sm">
        En Roveray 198, 1170 Aubonne, Switzerland |{" "}
        <a href="tel:+41218211720">+41 21 821 17 20</a> | Elite SA
      </p>
    </div>
  );
}

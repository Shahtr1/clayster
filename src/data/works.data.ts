import { WorkDetails } from "./model";
import rc_cover from "../assets/images/desktop/works/rc.png";
import t360pay_cover from "../assets/images/desktop/works/t360.png";

export class WorkData {
  static get works(): WorkDetails[] {
    return [
      {
        heading: "T360pay",
        titleIcon: "t360pay",
        description:
          "A company that helps grow your business with the right solutions. It gives customers fast, secure checkout experience.",
        link: "www.t360pay.com",
        skills: ["angular", "laravel"],
        cover: t360pay_cover,
      },
      {
        heading: "RCOImpex",
        titleIcon: "rc",
        description:
          "An e-commerce website for buying fishing rods, reels, tackle, line, check-in and check-out system",
        link: "www.rcoimpex.com",
        skills: ["jquery", "laravel"],
        cover: rc_cover,
        titleIconBgColor: "#fffdfdc4",
      },
    ];
  }
}
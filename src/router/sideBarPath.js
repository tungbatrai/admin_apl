/** @format */
import Admin from "../pages/admin/Admin";
import SubmittedTicket from "../pages/adminssionCheck/SubmittedTicket";
import VerificationCode from "../pages/adminssionCheck/VerificationCode";
import AdmissionTicket from "../pages/admissionTicket/AdmissionTicket";
import Point from "../pages/point/Point";
import ProductRegistration from "../pages/product/ProductRegistration";
import ProductOrder from "../pages/product/ProductOrder";
import Tournament from "../pages/tournament/Tournament";
import Result from "../pages/result/Result";
import Inquiry from "../pages/member/Inquiry";
import SignedUpMember from "../pages/member/SignedUpMember";
import Withdrawn from "../pages/member/Withdrawn";
import New from "../pages/content/New";
import Video from "../pages/content/Video";
import HotelTravel from "../pages/content/HotelTravel";
import MemberStatistics from "../pages/statistics/MemberStatistics";
import TournamentStatic from "../pages/statistics/TournamentStatic";
import Promotion from "../pages/promotionBanner/Promotion";
import Banner from "../pages/promotionBanner/Banner";
export const sideBar = [
  {
    type: 1,
    name: "Admin management",
    chil: false,
    url: "admin",
    element: <Admin />,
  },
  {
    type: 1,
    name: "Admission ticket management",
    chil: false,
    url: "admissionTicket",
    element: <AdmissionTicket />,
  },
  {
    type: 2,
    name: "Admission check management ",
    chil: [
      {
        name: "Submitted ticket management",
        url: "submitted-ticket",
        element: <SubmittedTicket />,
      },
      {
        name: "Admission check verification code management item",
        url: "verification-code",
        element: <VerificationCode />,
      },
    ],
    url: "admission",
  },
  {
    type: 1,
    name: "Point management",
    chil: false,
    url: "point",
    element: <Point />,
  },
  {
    type: 2,
    name: "Product management",
    chil: [
      {
        name: "Product registration",
        url: "registration",
        element: <ProductRegistration />,
      },
      {
        name: "Product order",
        url: "order",
        element: <ProductOrder />,
      },
    ],
    url: "product",
  },
  {
    type: 1,
    name: "Tournament management",
    chil: false,
    url: "tourment",
    element: <Tournament />,
  },
  {
    type: 1,
    name: "Result detail management",
    chil: false,
    url: "result",
    element: <Result />,
  },
  {
    type: 2,
    name: "Member management",
    chil: [
      {
        name: "inquiry",
        url: "inquiry",
        element: <Inquiry />,
      },
      {
        name: "SignedUpMember",
        url: "signed-up",
        element: <SignedUpMember />,
      },
      {
        name: "Withdrawn",
        url: "Withdrawn",
        element: <Withdrawn />,
      },
    ],
    url: "member",
  },
  {
    type: 2,
    name: "Content management",
    chil: [
      {
        name: "New",
        url: "new",
        element: <New />,
      },
      {
        name: "Video",
        url: "video",
        element: <Video />,
      },
      {
        name: "Hotel Travel",
        url: "hotel-travel",
        element: <HotelTravel />,
      },
    ],
    url: "/content",
  },
  {
    type: 2,
    name: "Statistics management",
    chil: [
      {
        name: "Tournament statistics",
        url: "tourment",
        element: <TournamentStatic />,
      },
      {
        name: "Member statistics",
        url: "Member statistics",
        element: <MemberStatistics />,
      },
    ],
    url: "/statistics",
  },
  {
    type: 2,
    name: "Promotion/ banner management ",
    chil: [
      {
        name: "Promotion management",
        url: "promotion",
        element: <Promotion />,
      },
      {
        name: "Banner management",
        url: "banner",
        element: <Banner />,
      },
    ],
    url: "promotion-banner",
  },
];

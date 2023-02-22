import { Icons } from "./IconsList";
import { ImageList } from "./ImageList";

export const NavOptions = [
  {
    title: "Home",
    icon: Icons.HomeIcon,
    linkTo: "/",
    folderName: "Home",
  },
  {
    title: "About",
    icon: Icons.About,
    linkTo: "/about",
    folderName: "About",
  },
  {
    title: "Contact",
    icon: Icons.ContactUs,
    linkTo: "/contact",
    folderName: "Contact",
  },
  {
    title: "Influencers",
    icon: Icons.InfluencerIcon,
    linkTo: "/influencer",
    folderName: "Influencer",
  },
  {
    title: "FAQ",
    icon: Icons.FAQIcon,
    linkTo: "/faq",
    folderName: "FAQ",
  },
];

export const ServicesOptions = [
  {
    title: "Email Marketing",
    linkTo: "/email/marketing",
  },
  {
    title: "Campaigns",
    linkTo: "/campaigns",
  },
  {
    title: "Branding",
    linkTo: "/branding",
  },
];

export const HelpOptions = [
  {
    title: "FAQs",
    linkTo: "/faq",
  },
  {
    title: "Contact Us",
    linkTo: "/contact",
  },
];

export const LegalOptions = [
  {
    title: "Terms & Conditions",
    linkTo: "/terms",
  },
  {
    title: "Privacy Policy",
    linkTo: "/privacy",
  },
];

export const SocialOptions = [
  {
    title: "Facebook",
    linkTo: "https://www.facebook.com/",
    icon: ImageList.FB_Icon,
  },
  {
    title: "Twitter",
    linkTo: "http://www.twitter.com/",
    icon: ImageList.Twitter_Icon,
  },
  {
    title: "Instagram",
    linkTo: "http://www.instagram.com/ingenkart/",
    icon: ImageList.Instagram_Icon,
  },
];

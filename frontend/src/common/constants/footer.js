import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
  Lock as LockIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

export const RECOGNITIONS = [
  {
    id: 1,
    name: 'Certificate of Excellence awarded by TripAdvisor',
  },
  {
    id: 2,
    name: "Michelin Guide's Most Innovative Restaurant of the Year award",
  },
  {
    id: 3,
    name: 'Recognition as one of the best vegetarian restaurants in the country by Bon Appétit magazine',
  },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    name: 'Facebook',
    tooltip:
      'Follow our Facebook page to stay up to date on our latest culinary creations, events, and special promotions.',
    icon: <FacebookIcon />,
    link: 'https://www.facebook.com/',
  },
  {
    id: 2,
    name: 'Instagram',
    tooltip:
      "Follow us on Instagram to see stunning photos of our dishes and the restaurant's atmosphere.",
    icon: <InstagramIcon />,
    link: 'https://www.instagram.com/',
  },
  {
    id: 3,
    name: 'Twitter',
    tooltip: 'Stay tuned for our latest news and announcements on Twitter.',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/',
  },
  {
    id: 4,
    name: 'YouTube',
    tooltip:
      'Visit our YouTube channel to watch behind-the-scenes videos of our kitchen team in action.',
    icon: <YouTubeIcon />,
    link: 'https://www.youtube.com/',
  },
];

export const LEGAL = [
  {
    id: 1,
    name: 'Privacy policy',
    link: 'https://www.theimaginarykitchen.com/privacy-policy',
    icon: <LockIcon />,
    tooltip:
      "At The Imaginary Kitchen, we take our customers' privacy seriously. You can read our full privacy policy on our website.",
  },
  {
    id: 2,
    name: 'Terms and conditions of website use',
    link: 'https://www.theimaginarykitchen.com/terms-and-conditions',
    icon: <DescriptionIcon />,
    tooltip:
      'The terms and conditions of using our website are available on our site. By using our site, you agree to these terms and conditions.',
  },
];

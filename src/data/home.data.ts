import { Post } from "@/types/post";

/* =========================
   LEFT SIDEBAR
========================= */

export const latestPosts: Post[] = [
  {
    id: "l1",
    title: "Unconventional Workouts That Torch Fat And Sculpt Muscle",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "l2",
    title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "l3",
    title: "Crismonita Dwi Putri, RI’s Track Cycling Athlete for Asian Games",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "l4",
    title: "President Joko “Jokowi” Widodo Refuses to Sign MD3 Law",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1520975958225-5f5c3a61e5f2?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "l5",
    title: "Garuda operates larger planes for Jakarta–Palembang route",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=60",
  },
];

export const opinionPosts = [
  {
    id: "o1",
    title: "Tour showcases shared art history of Indonesia and Singapore",
    href: "#",
  },
  {
    id: "o2",
    title:
      "Finland Has An Education System The Other Country Should Learn From",
    href: "#",
  },
  {
    id: "o3",
    title:
      "Women in Politics: Urgency of a Quota System For Women in Regional Elections",
    href: "#",
  },
  {
    id: "o4",
    title: "China’s Peng banned and fined for Wimbledon corruption attempt",
    href: "#",
  },
  {
    id: "o5",
    title: "Democratic Party politician calls Prabowo “cardboard general”",
    href: "#",
  },
];

/* =========================
   CENTER COLUMN
========================= */

export const carouselPosts: Post[] = [
  {
    id: "c1",
    title: "The Chinese smartphone upstarts taking on Apple and Samsung",
    href: "#",
    category: "Business",
    image:
      "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-14-1-75x75.jpg",
  },
  {
    id: "c2",
    title: "Presidential Train Now Available For Jakarta Traveling to Bandung",
    href: "#",
    category: "National",
    image:
      "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-21-75x75.jpg",
  },
  {
    id: "c3",
    title: "A Digital Media Startup Growing Up With Millennial Women",
    href: "#",
    category: "Lifestyle",
    image:
      "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-15-75x75.jpg",
  },
  {
    id: "c4",
    title:
      "Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting",
    href: "#",
    category: "Lifestyle",
    image:
      "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/07/demo-19-75x75.jpg",
  },
];

export const leadPost: Post = {
  id: "lead",
  category: "Politics",
  title: "“Election was rigged” says opposition, police confirm three dead",
  href: "#",
  author: "John Doe",
  date: "February 17, 2020",
  excerpt:
    "When we get out of the glass bottle of our ego and when we escape like the squirrels in the...",
  image:
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=70",
};

/* Bottom cards under lead story */
export const centerBottomCards: Post[] = [
  {
    id: "cb1",
    title: "Travelers gather for a golden hour meetup by the sea",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "cb2",
    title: "Inside the modern desk setup: tools, habits, and workflow",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=70",
  },
];

/* =========================
   RIGHT SIDEBAR
========================= */

export const rightTopPost: Post = {
  id: "rt",
  title: "Democratic Party politician calls Prabowo “cardboard general”",
  href: "#",
  author: "John Doe",
  date: "August 10, 2018",
  excerpt:
    "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
  image:
    "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-24-350x250.jpg",
};

export const rightBottomPost: Post = {
  id: "rb",
  title: "Google tracks location data even when users turn service off",
  href: "#",
  author: "John Doe",
  date: "August 14, 2018",
  excerpt:
    "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
  image:
    "https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-49-350x250.jpg",
};

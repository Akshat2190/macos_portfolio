const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 2025",
    title:
      "How I Built My First Full-Stack AI Chat App (And Survived My First Deployment Ever)",
    image: "/images/blog1.webp",
    link: "https://dev.to/akshat_sharma_01719d9a025/how-i-built-my-first-full-stack-ai-chat-application-and-survived-my-first-real-deployment-en9",
  },
  {
    id: 2,
    date: "Mar 2025",
    title:
      "10 Mistakes I Made As a Beginner Full-Stack Developer (That You Can Avoid)",
    image: "/images/blog2.png",
    link: "https://dev.to/akshat_sharma_01719d9a025/10-mistakes-i-made-as-a-beginner-full-stack-developer-that-you-can-avoid-357l",
  },
  {
    id: 3,
    date: "Apr 2025",
    title:
      "Why MERN Is Still One of the Best Stacks for Ambitious Side Projects",
    image: "/images/blog3.png",
    link: "https://dev.to/akshat_sharma_01719d9a025/why-mern-is-still-one-of-the-best-stacks-for-ambitious-side-projects-f01",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Akshat2190",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/akshatsharma0108/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AkshatShar6294/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/akshat2190/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/casual.jpg",
  },
  {
    id: 2,
    img: "/images/chill.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI Chatbox",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "AI Chatbox Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The AI Chatbox Application is a full-stack platform designed for seamless conversations and creative image generation.",
            "Users can chat naturally with the AI, create images from text prompts, and explore a modern, interactive interface with smooth UI and animations.",
            "Built with an integrated credits system, the app allows users to manage usage, purchase credits, and unlock premium features with ease.",
            "A dedicated community hub lets users share prompts, showcase generated images, and discover what others are creating.",
            "The platform is fully full-stack, combining a responsive frontend with secure backend APIs, user authentication, and real-time interactions.",
          ],
        },
        {
          id: 2,
          name: "ai-chatbox.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://whitechapel-works.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ai-chatbox.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ai-chatbox.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Akshat2190/Whitechapel-Works",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Collaborative Project Builder",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Project Builder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The AI Collaborative Project Builder is a full-stack platform where you can create projects, invite teammates, and build together in real time.",
            "Inside each project, you get an integrated chat system to communicate, share ideas, and coordinate work effortlessly.",
            "You can even bring an AI assistant into the chat—it can write code, generate files, create folder structures, or help solve problems on the spot.",
            "With real-time updates, shared editing, and a smooth UI, it feels like a modern workspace built for teams who want to build faster and smarter.",
            "The platform is fully full-stack, combining a responsive frontend, secure backend APIs, user authentication, collaborative syncing, and AI-driven tooling.",
          ],
        },
        {
          id: 2,
          name: "project-builder.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Akshat2190/SOEN",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "collab-builder.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/soen.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Akshat2190/SOEN",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Snake Game",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Snake Game Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Snake Game is a classic grid-based game where the player controls a growing snake that must eat food while avoiding walls and itself.",
            "This version features clean UI, smooth controls, and real-time score, high-score tracking, and a built-in timer.",
            "Each time the snake eats food, it grows longer and speeds up the challenge, making every move count.",
            "The game is built with HTML, CSS, and JavaScript, using a dynamic grid system and modular logic for rendering, collision detection, and state updates.",
          ],
        },
        {
          id: 2,
          name: "snake-game.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://akshat2190.github.io/snake-game/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "snake-game.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/snake-game-img.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Akshat2190/snake-game",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/chill.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual.jpg",
    },
    {
      id: 3,
      name: ".png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/ak.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/p.jpg",
      description: [
        "Hey! I’m Akshat 👋—a web developer obsessed with building smooth, snappy, and delightfully interactive web experiences.",
        "I specialize in JavaScript, React, and Next.js, and I love bringing UI/UX to life with clean design, subtle animations, and those tiny micro-interactions that make people go 'ooh nice.'",
        "I’m big on clean UI, intuitive UX, and writing code that won’t require archaeological tools to debug later.",
        "When I’m not coding, you’ll find me fine-tuning animations at 2AM, sipping overpriced coffee, or impulse-buying gadgets I 100% promise I needed 😅.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  archive: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

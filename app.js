const { useEffect, useState } = React;
const consoleMessages = [
  "Searching for something? Contact me!",
  "And go and say hi to me. You should mention this, probably a good conversation starter",
  "Is this thing on?",
  "Oh, that was so real",
  "Oh, that was so reeeeeal",
  "Oh, that was so reeeeeeeeeeeeal",
  "I love you",
  "But I'm afraid to love you",
  "I love you",
  "But I'm afraid to love you",
  "I'm afraid, oh",
  "- Jeff Buckley",
  "[ OK ] betterinthedark() is awake",
  ":: searching for a signal... found one",
  "[ NOTE ] the night train is running late",
  "<> hello, fellow source viewer",
  "// made with spite and free time",
];
const photos = [
  ["Images/R0001705.JPEG", "Bahnhof Luzern", "Concourse / 2026"],
  ["Images/R0001728.JPEG", "Die Zentralbahn", "Night service / 2026"],
  ["Images/R0001706.JPEG", "130 008-6", "Platform / 2026"],
  ["Images/R0001798.JPEG", "Käthe", "Portrait / 2026"],
  ["Images/DSCF9739.JPEG", "Swan", "Quiet afternoon / 2025"],
  ["Images/Pfp.JPEG", "Self portrait", "Unfiled / 2026"],
];
const marqueeItems = [
  "Better in the Dark",
  "Photography",
  "Pilatus Aircraft",
  "IT & Systems",
  "Film Photography",
  "Flight Simulation",
  "Radiohead",
  "Nine Inch Nails",
  "DCS",
  "TV Girl",
  "Slowdive",
  "Title Fight",
  "My Bloody Valentine",
  "Have A Nice Life",
  "My Chemical Romance",
  "La Dispute",
  "Car Seat Headrest",
  "The Strokes",
  "Kino",
  "Jeff Buckley",
  "Julie",
  "Deftones",
  "Arctic Monkeys",
  "Made with Spite",
];
const rainbowPatterns = [
  "ROMEO_ARISONA",
  "_ROMEO ARISONA",
  "BETTER/INTHEDARK",
  "BETTERIN/THEDARK",
  "BETTERINTHE/DARK",
  "BETTERINTHEDARK/",
  "ROMEO/",
  "/ROMEO_ARISONA",
  "BETTER_INTHEDARK",
  "BETTERIN_THEDARK",
  "BETTERINTHE_DARK",
  "BETTERINTHEDARK_",
];
const rainbowColors = [
  "#f7ee49",
  "#4686c6",
  "#f36525",
  "#45b64a",
  "#edb41f",
  "#ec2427",
  "#a4dde6",
];
const thiefTileColors = [
  "#d0001d",
  "#0d5436",
  "#093588",
  "#fda223",
  "#f8551a",
  "#101624",
  "#eaeff0",
];
const bioWallWords = [
  "Fear",
  "Control",
  "Truth",
  "Lies",
  "Power",
  "Money",
  "War",
  "Peace",
  "Freedom",
  "Security",
  "Future",
  "Chaos",
  "Order",
  "Justice",
  "Crime",
  "Safety",
  "Violence",
  "Market",
  "Profit",
  "Growth",
  "Success",
  "Failure",
  "Dream",
  "Nightmare",
  "Hope",
  "Despair",
  "Signal",
  "Noise",
  "System",
  "Machine",
  "Network",
  "Data",
  "Information",
  "Media",
  "News",
  "Opinion",
  "Influence",
  "Authority",
  "Government",
  "Policy",
  "Election",
  "Citizen",
  "Consumer",
  "Worker",
  "Leader",
  "Follower",
  "Identity",
  "Nation",
  "Border",
  "Private",
  "Public",
  "Capital",
  "Industry",
  "Economy",
  "Trust",
  "Doubt",
  "Reality",
  "Fantasy",
  "Warning",
  "Danger",
  "Emergency",
  "Alert",
  "Monitor",
  "Observe",
  "Predict",
  "Analyze",
  "Optimize",
  "Automate",
  "Target",
  "Track",
  "Measure",
  "Record",
  "Archive",
  "Broadcast",
  "Consume",
  "Produce",
  "Exchange",
  "Collaborate",
  "Connect",
  "Disconnect",
  "Upgrade",
  "Download",
  "Upload",
  "Access",
  "Restricted",
  "Approved",
  "Denied",
  "Verified",
  "Unknown",
  "Visible",
  "Hidden",
  "Transparent",
  "Opaque",
  "Redacted",
  "Official",
  "Confidential",
  "Classified",
  "Priority",
  "Mandatory",
  "Optional",
  "Critical",
  "Urgent",
  "Digital",
  "Analog",
  "Virtual",
  "Physical",
  "Human",
  "Artificial",
  "Intelligence",
  "Algorithm",
  "Platform",
  "Protocol",
  "Surveillance",
  "Censorship",
  "Resistance",
  "Compliance",
  "Trending",
  "Viral",
  "Subscribe",
  "Follow",
  "Share",
  "Delete",
  "Update",
  "Restart",
  "Reboot",
  "Shutdown",
  "Loading",
  "Processing",
  "Complete",
  "Pending",
  "Accepted",
  "Rejected",
  "Error",
  "Warning",
  "Success",
  "Failure",
];
function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || "home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    consoleMessages.forEach((message) => console.log(message));
    console.log("[ BOOT ] Romeo Arisona / Better in the Dark");
    const onHashChange = () => setPage(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);
  const navigate = (next) => {
    console.log(`[ NAV ] ${page.toUpperCase()} -> ${next.toUpperCase()}`);
    window.location.hash = next;
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleTheme = () => {
    const nextMode = dark ? "light" : "dark";
    console.log(
      `[ MODE ] switching to ${nextMode} :: ${nextMode === "dark" ? "night" : "day"} mode`,
    );
    setDark(!dark);
  };
  const pageTitle =
    page === "home"
      ? "BETTERINTHEDARK()"
      : `BETTERINTHEDARK(${page.toUpperCase()})`;
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: dark ? "app dark" : "app" },
    loading && /* @__PURE__ */ React.createElement(LoadingScreen, null),
    /* @__PURE__ */ React.createElement(
      "header",
      { className: "topbar" },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "wordmark",
          onClick: () => navigate("home"),
          "aria-label": "Go to home",
        },
        pageTitle,
      ),
      /* @__PURE__ */ React.createElement(
        "nav",
        {
          className: menuOpen ? "main-nav is-open" : "main-nav",
          "aria-label": "Main navigation",
        },
        ["home", "bio", "gallery", "art", "contact"].map((item) =>
          /* @__PURE__ */ React.createElement(
            "button",
            {
              className: page === item ? "active" : "",
              key: item,
              onClick: () => navigate(item),
            },
            item,
          ),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "top-actions" },
        /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "mode-button",
            onClick: toggleTheme,
            "aria-label": "Toggle color mode",
            title: "Toggle color mode",
          },
          dark ? "\u25D0" : "\u25D0",
        ),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "menu-button",
            onClick: () => setMenuOpen(!menuOpen),
            "aria-label": "Toggle menu",
          },
          menuOpen ? "Close" : "Menu",
        ),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "main",
      null,
      page === "home" &&
        /* @__PURE__ */ React.createElement(Home, { navigate }),
      page === "bio" && /* @__PURE__ */ React.createElement(Bio, null),
      page === "gallery" && /* @__PURE__ */ React.createElement(Gallery, null),
      page === "art" && /* @__PURE__ */ React.createElement(Art, null),
      page === "contact" && /* @__PURE__ */ React.createElement(Contact, null),
    ),
    /* @__PURE__ */ React.createElement(
      "footer",
      null,
      /* @__PURE__ */ React.createElement(
        "span",
        null,
        "Romeo Arisona / Better in the Dark",
      ),
      /* @__PURE__ */ React.createElement("span", null, "CH \xB7 2026"),
    ),
  );
}
function RainbowBackground() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(
      () => setFrame((current) => current + 1),
      200,
    );
    return () => window.clearInterval(interval);
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "rainbows-bg", "aria-hidden": "true" },
    Array.from({ length: 20 }, (_, index) => {
      const pattern = rainbowPatterns[(frame + index) % rainbowPatterns.length];
      const color = rainbowColors[(index * 2) % rainbowColors.length];
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "rainbow-line",
          style: { color },
          key: index,
        },
        pattern.repeat(7),
      );
    }),
  );
}
function LoadingScreen() {
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: "loading-screen" },
    /* @__PURE__ */ React.createElement(RainbowBackground, null),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "loading-copy" },
      /* @__PURE__ */ React.createElement("span", null, "BETTERINTHEDARK()"),
      /* @__PURE__ */ React.createElement("b", null, "Loading"),
      /* @__PURE__ */ React.createElement(
        "small",
        null,
        "Romeo Arisona / 2026",
      ),
    ),
  );
}
function BioWordWall() {
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "svg",
      { className: "wall-filter-def", "aria-hidden": "true" },
      /* @__PURE__ */ React.createElement(
        "filter",
        {
          id: "squiggly-wall",
          x: "-20%",
          y: "-20%",
          width: "140%",
          height: "140%",
          filterUnits: "objectBoundingBox",
        },
        /* @__PURE__ */ React.createElement("feTurbulence", {
          type: "fractalNoise",
          baseFrequency: "0.02",
          numOctaves: "3",
          seed: "7",
          result: "noise",
        }),
        /* @__PURE__ */ React.createElement("feDisplacementMap", {
          in: "SourceGraphic",
          in2: "noise",
          scale: "7",
        }),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "ul",
      { className: "bio-word-wall", "aria-hidden": "true" },
      Array.from({ length: 180 }, (_, index) => {
        const background =
          thiefTileColors[(index * 5 + 2) % thiefTileColors.length];
        const text = thiefTileColors[(index * 3 + 4) % thiefTileColors.length];
        return /* @__PURE__ */ React.createElement(
          "li",
          {
            style: { "--tile-bg": background, "--tile-text": text },
            key: index,
          },
          bioWallWords[index % bioWallWords.length],
        );
      }),
    ),
  );
}
function Eyebrow({ children }) {
  return /* @__PURE__ */ React.createElement(
    "p",
    { className: "eyebrow" },
    children,
  );
}
function ArrowLink({ children, onClick }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    { className: "arrow-link", onClick },
    children,
    " ",
    /* @__PURE__ */ React.createElement("span", null, "\u2197"),
  );
}
function Home({ navigate }) {
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "section",
      { className: "home-hero page-pad" },
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "hero-copy" },
        /* @__PURE__ */ React.createElement(
          Eyebrow,
          null,
          "Information technologist / photographer",
        ),
        /* @__PURE__ */ React.createElement(
          "h1",
          null,
          "Romeo",
          /* @__PURE__ */ React.createElement("br", null),
          /* @__PURE__ */ React.createElement("i", null, "Arisona."),
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          { className: "hero-intro" },
          "Based between Z\xFCrich and Stans, Switzerland. Information Technologist, Photographer, and Music Enjoyer.",
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { className: "hero-links" },
          /* @__PURE__ */ React.createElement(
            ArrowLink,
            { onClick: () => navigate("gallery") },
            "View the frames",
          ),
          /* @__PURE__ */ React.createElement(
            ArrowLink,
            { onClick: () => navigate("contact") },
            "Say hello",
          ),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "figure",
        { className: "hero-image" },
        /* @__PURE__ */ React.createElement("img", {
          src: "Images/R0001728.JPEG",
          alt: "A train at night in Switzerland",
        }),
        /* @__PURE__ */ React.createElement(
          "figcaption",
          null,
          /* @__PURE__ */ React.createElement("span", null, "01 \u2014 06"),
          /* @__PURE__ */ React.createElement(
            "span",
            null,
            "Die Zentralbahn, 2026",
          ),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "hero-stamp" },
        "BETTER",
        /* @__PURE__ */ React.createElement("br", null),
        "IN THE",
        /* @__PURE__ */ React.createElement("br", null),
        /* @__PURE__ */ React.createElement("b", null, "DARK"),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "marquee", "aria-label": "Interests and influences" },
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "marquee-track" },
        [0, 1].map((segment) =>
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "marquee-content",
              "aria-hidden": segment === 1,
              key: segment,
            },
            marqueeItems.map((item) =>
              /* @__PURE__ */ React.createElement(
                "span",
                { key: item },
                item,
                /* @__PURE__ */ React.createElement(
                  "b",
                  { className: "marquee-separator" },
                  "\u26E4",
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "section",
      { className: "intro-band page-pad" },
      /* @__PURE__ */ React.createElement(
        "div",
        null,
        /* @__PURE__ */ React.createElement(Eyebrow, null, "Who is this?"),
        /* @__PURE__ */ React.createElement(
          "h2",
          null,
          "Information Technologist.",
          /* @__PURE__ */ React.createElement("br", null),
          /* @__PURE__ */ React.createElement("i", null, "Cameraman."),
          /* @__PURE__ */ React.createElement("br", null),
          "Music Enjoyer.",
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "intro-note" },
        /* @__PURE__ */ React.createElement(
          "p",
          null,
          "Based between Z\xFCrich and Stans, I work as an apprentice Information Technologist at Pilatus Aircraft: mostly developing apps and updating outdated stuff. //Actually doing nothing",
          /* @__PURE__ */ React.createElement("br", null),
          /* @__PURE__ */ React.createElement("br", null),
          "The rest of the time: out with friends, being stressed, commuting on trains, and listening to music.",
        ),
        /* @__PURE__ */ React.createElement(
          ArrowLink,
          { onClick: () => navigate("bio") },
          "More about me",
        ),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "section",
      { className: "home-gallery page-pad" },
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "section-heading" },
        /* @__PURE__ */ React.createElement(
          "div",
          null,
          /* @__PURE__ */ React.createElement(
            Eyebrow,
            null,
            "Gallery / Selected Frames",
          ),
          /* @__PURE__ */ React.createElement(
            "h2",
            null,
            "Don't know what I'm doing",
          ),
        ),
        /* @__PURE__ */ React.createElement(
          ArrowLink,
          { onClick: () => navigate("gallery") },
          "All photographs",
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "home-grid" },
        /* @__PURE__ */ React.createElement("img", {
          src: "Images/R0001705.JPEG",
          alt: "Luzern train station",
        }),
        /* @__PURE__ */ React.createElement("img", {
          src: "Images/R0001722.JPEG",
          alt: "Portrait",
        }),
        /* @__PURE__ */ React.createElement("img", {
          src: "Images/R0001706.JPEG",
          alt: "Train platform",
        }),
      ),
    ),
  );
}
function Bio() {
  return /* @__PURE__ */ React.createElement(
    "section",
    { className: "subpage page-pad" },
    /* @__PURE__ */ React.createElement(BioWordWall, null),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "subpage-head" },
      /* @__PURE__ */ React.createElement(Eyebrow, null, "01 / Biography"),
      /* @__PURE__ */ React.createElement(
        "h1",
        null,
        "Romeo",
        /* @__PURE__ */ React.createElement("br", null),
        /* @__PURE__ */ React.createElement("i", null, "Arisona."),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "bio-layout" },
      /* @__PURE__ */ React.createElement("img", {
        src: "Images/R0001722.JPEG",
        alt: "Romeo Arisona",
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "reading-column" },
        /* @__PURE__ */ React.createElement(
          "p",
          { className: "lead" },
          "I am an Information Technologist and photographer based between Z\xFCrich and Stans, Switzerland.",
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          null,
          "At Pilatus Aircraft, I work with the IED team on the infrastructure and applications that keep a very large machine moving. Outside of work, I document the world in digital and analogue frames.",
        ),
        /* @__PURE__ */ React.createElement(
          "p",
          null,
          "My interests tend to orbit around systems, identity, music, and the particular atmosphere of places after dark.",
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { className: "fact-list" },
          /* @__PURE__ */ React.createElement(
            "div",
            null,
            /* @__PURE__ */ React.createElement("b", null, "Location"),
            /* @__PURE__ */ React.createElement(
              "span",
              null,
              "Z\xFCrich / Stans, CH",
            ),
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            null,
            /* @__PURE__ */ React.createElement("b", null, "Camera"),
            /* @__PURE__ */ React.createElement("span", null, "35mm + digital"),
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            null,
            /* @__PURE__ */ React.createElement("b", null, "Currently"),
            /* @__PURE__ */ React.createElement("span", null, "Apprentice IT"),
          ),
        ),
      ),
    ),
  );
}
function Gallery() {
  return /* @__PURE__ */ React.createElement(
    "section",
    { className: "subpage page-pad" },
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "subpage-head gallery-head" },
      /* @__PURE__ */ React.createElement(
        "div",
        null,
        /* @__PURE__ */ React.createElement(Eyebrow, null, "02 / Photography"),
        /* @__PURE__ */ React.createElement(
          "h1",
          null,
          "Photo",
          /* @__PURE__ */ React.createElement("br", null),
          /* @__PURE__ */ React.createElement("i", null, "graphy."),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        "p",
        null,
        "Digital and analogue fragments, mostly in transit.",
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "gallery-grid" },
      photos.map(([src, title, caption], index) =>
        /* @__PURE__ */ React.createElement(
          "figure",
          { className: index === 0 ? "feature-photo" : "", key: src },
          /* @__PURE__ */ React.createElement("img", { src, alt: title }),
          /* @__PURE__ */ React.createElement(
            "figcaption",
            null,
            /* @__PURE__ */ React.createElement("b", null, title),
            /* @__PURE__ */ React.createElement("span", null, caption),
          ),
        ),
      ),
    ),
  );
}
function Art() {
  return /* @__PURE__ */ React.createElement(
    "section",
    { className: "subpage page-pad" },
    /* @__PURE__ */ React.createElement(RainbowBackground, null),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "subpage-head" },
      /* @__PURE__ */ React.createElement(
        Eyebrow,
        null,
        "03 / Art & Philosophy",
      ),
      /* @__PURE__ */ React.createElement(
        "h1",
        null,
        /* @__PURE__ */ React.createElement("i", null, "Content."),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "writing-list" },
      [
        [
          "Nihil",
          "A note on nothingness and the comfort of an empty answer.",
          "Nihil/",
        ],
        [
          "quis sum ego",
          "A piece about the self, identity, and the stories we repeat.",
          "Sum/",
        ],
        [
          "Paradoxum",
          "Contradictions are usually where the interesting parts begin.",
          "Paradoxum/",
        ],
        [
          "Vanitas",
          "On loneliness, impermanence, and the objects we keep.",
          "Vanitas/",
        ],
      ].map(([title, desc, href], index) =>
        /* @__PURE__ */ React.createElement(
          "a",
          { href, key: title },
          /* @__PURE__ */ React.createElement("span", null, "0", index + 1),
          /* @__PURE__ */ React.createElement(
            "div",
            null,
            /* @__PURE__ */ React.createElement("h2", null, title),
            /* @__PURE__ */ React.createElement("p", null, desc),
          ),
          /* @__PURE__ */ React.createElement("b", null, "\u2197"),
        ),
      ),
    ),
  );
}
function Contact() {
  return /* @__PURE__ */ React.createElement(
    "section",
    { className: "contact-page page-pad" },
    /* @__PURE__ */ React.createElement(
      "div",
      null,
      /* @__PURE__ */ React.createElement(Eyebrow, null, "04 / Contact"),
      /* @__PURE__ */ React.createElement(
        "h1",
        null,
        "Let's",
        /* @__PURE__ */ React.createElement("br", null),
        /* @__PURE__ */ React.createElement("i", null, "Connect."),
      ),
      /* @__PURE__ */ React.createElement(
        "p",
        null,
        "Send cool music. Offer me a drink. Share an interesting project. Or just say hello.",
      ),
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "contact-links" },
      /* @__PURE__ */ React.createElement(
        "a",
        { href: "mailto:kodama@betterinthedark.ch" },
        /* @__PURE__ */ React.createElement("span", null, "Email"),
        /* @__PURE__ */ React.createElement(
          "b",
          null,
          "kodama@betterinthedark.ch",
        ),
        "\u2197",
      ),
      /* @__PURE__ */ React.createElement(
        "a",
        { href: "https://www.instagram.com/rrarisona/", target: "_blank" },
        /* @__PURE__ */ React.createElement("span", null, "Instagram"),
        /* @__PURE__ */ React.createElement("b", null, "@rrarisona"),
        "\u2197",
      ),
      /* @__PURE__ */ React.createElement(
        "a",
        { href: "https://github.com/Robotmech", target: "_blank" },
        /* @__PURE__ */ React.createElement("span", null, "GitHub"),
        /* @__PURE__ */ React.createElement("b", null, "Robotmech"),
        "\u2197",
      ),
    ),
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ React.createElement(App, null),
);

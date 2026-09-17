const {
  useEffect,
  useState
} = React;

// Looking for something? You already found it.
// This site is held together with curiosity, coffee, and a suspicious amount of CSS.
const consoleMessages = ["Searching for something? Contact me!", "And go and say hi to me. You should mention this, probably a good conversation starter", "Is this thing on?", "Oh, that was so real", "Oh, that was so reeeeeal", "Oh, that was so reeeeeeeeeeeeal", "I love you", "But I'm afraid to love you", "I love you", "But I'm afraid to love you", "I'm afraid, oh", "- Jeff Buckley", "[ OK ] betterinthedark() is awake", ":: searching for a signal... found one", "<> hello, fellow source viewer", "// made with spite and free time", "everything is probably fine :-)"];
const photos = [["Images/R0001705.JPEG", "Bahnhof Luzern", "Concourse / 2026"], ["Images/R0001728.JPEG", "Die Zentralbahn", "Night service / 2026"], ["Images/R0001706.JPEG", "130 008-6", "Platform / 2026"], ["Images/R0001798.JPEG", "Käthe", "Portrait / 2026"], ["Images/DSCF9739.JPEG", "Swan", "Quiet afternoon / 2025"], ["Images/Pfp.JPEG", "Self portrait", "Unfiled / 2026"]];
const marqueeItems = ["Better in the Dark", "Radiohead", "Nine Inch Nails", "La Dispute", "My Chemical Romance", "Alice in Chains", "Car Seat Headrest", "Eliott Smith", "DCS", "TV Girl", "Slowdive", "Title Fight", "My Bloody Valentine", "Have A Nice Life", "The Strokes", "Kino", "Jeff Buckley", "Julie", "Deftones", "Photography", "Pilatus Aircraft", "IT & Systems", "Film Photography", "Flight Simulation", "Made with Spite"];
const rainbowPatterns = ["ROMEO_ARISONA", "_ROMEO ARISONA", "BETTER/INTHEDARK", "BETTERIN/THEDARK", "BETTERINTHE/DARK", "BETTERINTHEDARK/", "ROMEO/", "/ROMEO_ARISONA", "BETTER_INTHEDARK", "BETTERIN_THEDARK", "BETTERINTHE_DARK", "BETTERINTHEDARK_"];
const rainbowColors = ["#f7ee49", "#4686c6", "#f36525", "#45b64a", "#edb41f", "#ec2427", "#a4dde6"];
const thiefTileColors = ["#d0001d", "#0d5436", "#093588", "#fda223", "#f8551a", "#101624", "#eaeff0"];
const bioWallWords = ["Fear", "Control", "Truth", "Lies", "Power", "Money", "War", "Peace", "Freedom", "Security", "Future", "Chaos", "Order", "Justice", "Crime", "Safety", "Violence", "Market", "Profit", "Growth", "Success", "Failure", "Dream", "Nightmare", "Hope", "Despair", "Signal", "Noise", "System", "Machine", "Network", "Data", "Information", "Media", "News", "Opinion", "Influence", "Authority", "Government", "Policy", "Election", "Citizen", "Consumer", "Worker", "Leader", "Follower", "Identity", "Nation", "Border", "Private", "Public", "Capital", "Industry", "Economy", "Trust", "Doubt", "Reality", "Fantasy", "Warning", "Danger", "Emergency", "Alert", "Monitor", "Observe", "Predict", "Analyze", "Optimize", "Automate", "Target", "Track", "Measure", "Record", "Archive", "Broadcast", "Consume", "Produce", "Exchange", "Collaborate", "Connect", "Disconnect", "Upgrade", "Download", "Upload", "Access", "Restricted", "Approved", "Denied", "Verified", "Unknown", "Visible", "Hidden", "Transparent", "Opaque", "Redacted", "Official", "Confidential", "Classified", "Priority", "Mandatory", "Optional", "Critical", "Urgent", "Digital", "Analog", "Virtual", "Physical", "Human", "Artificial", "Intelligence", "Algorithm", "Platform", "Protocol", "Surveillance", "Censorship", "Resistance", "Compliance", "Trending", "Viral", "Subscribe", "Follow", "Share", "Delete", "Update", "Restart", "Reboot", "Shutdown", "Loading", "Processing", "Complete", "Pending", "Accepted", "Rejected", "Error", "Warning", "Success", "Failure"];
const playlist = [{
  title: "The most beautiful bitter fruit",
  file: "Music/la-dispute-wildlife_202605/La Dispute - Wildlife - 07 The Most Beautiful Bitter Fruit.mp3"
}, {
  title: "To Withstand the Force of Storms",
  file: "Music/la-dispute-vancouver/La Dispute - Vancouver - 04 To Withstand the Force of Storms.mp3"
}, {
  title: "Woman (reading)",
  file: "Music/la-dispute-rooms-of-the-house_202605/La Dispute - Rooms of the House - 09 Woman (reading).mp3"
}, {
  title: "Woman (in mirror)",
  file: "Music/la-dispute-rooms-of-the-house_202605/La Dispute - Rooms of the House - 03 Woman (in mirror).mp3"
}, {
  title: "HUDSONVILLE, MI 1956",
  file: "Music/la-dispute-rooms-of-the-house_202605/La Dispute - Rooms of the House - 01 HUDSONVILLE, MI 1956.mp3"
}];
function MusicPlayer() {
  const [current, setCurrent] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  React.useEffect(() => {
    audioRef.current = new Audio(playlist[current].file);
    audioRef.current.loop = false;
    audioRef.current.onended = () => {
      nextSong();
    };
    return () => {
      audioRef.current.pause();
    };
  }, [current]);
  const playPause = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };
  const nextSong = () => {
    setCurrent((current + 1) % playlist.length);
    setPlaying(false);
  };
  const prevSong = () => {
    setCurrent((current - 1 + playlist.length) % playlist.length);
    setPlaying(false);
  };
  React.useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [current]);
  return /*#__PURE__*/React.createElement("div", {
    className: "music-bar"
  }, /*#__PURE__*/React.createElement("span", null, playlist[current].title), "\xA0", /*#__PURE__*/React.createElement("button", {
    onClick: prevSong
  }, "⏮"), /*#__PURE__*/React.createElement("button", {
    onClick: playPause
  }, playing ? "⏸" : "▶"), /*#__PURE__*/React.createElement("button", {
    onClick: nextSong
  }, "⏭"));
}
function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || "home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // A little noise for anyone opening the console. It is part of the atmosphere.
    consoleMessages.forEach(message => console.log(message));
    console.log("[ BOOT ] Romeo Arisona / Better in the Dark");
    const onHashChange = () => setPage(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);
  const navigate = next => {
    console.log(`[ NAV ] ${page.toUpperCase()} -> ${next.toUpperCase()}`);
    window.location.hash = next;
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const toggleTheme = () => {
    const nextMode = dark ? "light" : "dark";
    console.log(`[ MODE ] switching to ${nextMode} :: ${nextMode === "dark" ? "night" : "day"} mode`);
    setDark(!dark);
  };
  const pageTitle = page === "home" ? "BETTERINTHEDARK()" : `BETTERINTHEDARK(${page.toUpperCase()})`;
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? "app dark" : "app"
  }, loading && /*#__PURE__*/React.createElement(LoadingScreen, null), /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "wordmark",
    onClick: () => navigate("home"),
    "aria-label": "Go to home"
  }, pageTitle), /*#__PURE__*/React.createElement("nav", {
    className: menuOpen ? "main-nav is-open" : "main-nav",
    "aria-label": "Main navigation"
  }, ["home", "bio", "gallery", "art", "contact"].map(item => /*#__PURE__*/React.createElement("button", {
    className: page === item ? "active" : "",
    key: item,
    onClick: () => navigate(item)
  }, item))), /*#__PURE__*/React.createElement("div", {
    className: "top-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mode-button",
    onClick: toggleTheme,
    "aria-label": "Toggle color mode",
    title: "Toggle color mode"
  }, dark ? "◐" : "◐"), /*#__PURE__*/React.createElement("button", {
    className: "menu-button",
    onClick: () => setMenuOpen(!menuOpen),
    "aria-label": "Toggle menu"
  }, menuOpen ? "Close" : "Menu"))), /*#__PURE__*/React.createElement(MusicPlayer, null), /*#__PURE__*/React.createElement("main", null, page === "home" && /*#__PURE__*/React.createElement(Home, {
    navigate: navigate
  }), page === "bio" && /*#__PURE__*/React.createElement(Bio, null), page === "gallery" && /*#__PURE__*/React.createElement(Gallery, null), page === "art" && /*#__PURE__*/React.createElement(Art, null), page === "contact" && /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", null, "Romeo Arisona / Better in the Dark"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Robotmech",
    target: "_blank"
  }, "Github")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/romeo-arisona",
    target: "_blank"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/rrarisona",
    target: "_blank"
  }, "Instagram")), /*#__PURE__*/React.createElement("span", null, "CH · 2026")));
}
function RainbowBackground() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => setFrame(current => current + 1), 200);
    return () => window.clearInterval(interval);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "rainbows-bg",
    "aria-hidden": "true"
  }, Array.from({
    length: 20
  }, (_, index) => {
    const pattern = rainbowPatterns[(frame + index) % rainbowPatterns.length];
    const color = rainbowColors[index * 2 % rainbowColors.length];
    return /*#__PURE__*/React.createElement("div", {
      className: "rainbow-line",
      style: {
        color
      },
      key: index
    }, pattern.repeat(7));
  }));
}
function LoadingScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading-screen"
  }, /*#__PURE__*/React.createElement(RainbowBackground, null), /*#__PURE__*/React.createElement("div", {
    className: "loading-copy"
  }, /*#__PURE__*/React.createElement("span", null, "BETTERINTHEDARK()"), /*#__PURE__*/React.createElement("b", null, "Loading"), /*#__PURE__*/React.createElement("small", null, "Romeo Arisona / 2026")));
}
function BioWordWall() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    className: "wall-filter-def",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "squiggly-wall",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%",
    filterUnits: "objectBoundingBox"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.02",
    numOctaves: "3",
    seed: "7",
    result: "noise"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "noise",
    scale: "7"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "bio-word-wall",
    "aria-hidden": "true"
  }, Array.from({
    length: 180
  }, (_, index) => {
    const background = thiefTileColors[(index * 5 + 2) % thiefTileColors.length];
    const text = thiefTileColors[(index * 3 + 4) % thiefTileColors.length];
    return /*#__PURE__*/React.createElement("li", {
      style: {
        "--tile-bg": background,
        "--tile-text": text
      },
      key: index
    }, bioWallWords[index % bioWallWords.length]);
  })));
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, children);
}
function ArrowLink({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "arrow-link",
    onClick: onClick
  }, children, " ", /*#__PURE__*/React.createElement("span", null, "↗"));
}

// ===== HOME =====
function Home({
  navigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "home-hero page-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Information technologist / Pathfinder"), /*#__PURE__*/React.createElement("h1", null, "Romeo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Ari", /*#__PURE__*/React.createElement("a", {
    href: "Images/Romeo AriSONa.png"
  }, "son"), "a.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-intro"
  }, "Based between Zürich and Stans, Switzerland. Information Technologist and Music Enjoyer."), /*#__PURE__*/React.createElement("div", {
    className: "hero-links"
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => navigate("gallery")
  }, "View the frames"), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => navigate("contact")
  }, "Say hello"))), /*#__PURE__*/React.createElement("figure", {
    className: "hero-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "Images/R0001728.JPEG",
    alt: "A train at night in Switzerland"
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", null, "01 — 06"), /*#__PURE__*/React.createElement("span", null, "Die Zentralbahn, 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stamp"
  }, "BETTER", /*#__PURE__*/React.createElement("br", null), "IN THE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "DARK"))), /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-label": "Interests and influences"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [0, 1].map(segment => /*#__PURE__*/React.createElement("div", {
    className: "marquee-content",
    "aria-hidden": segment === 1,
    key: segment
  }, marqueeItems.map(item => /*#__PURE__*/React.createElement("span", {
    key: item
  }, item, /*#__PURE__*/React.createElement("b", {
    className: "marquee-separator"
  }, "⛤"))))))), /*#__PURE__*/React.createElement("section", {
    className: "intro-band page-pad"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("a", {
    href: "Images/WhoIsThis.webp"
  }, "Who is this?")), /*#__PURE__*/React.createElement("h2", null, "Information Technologist.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Cameraman."), /*#__PURE__*/React.createElement("br", null), "Music Enjoyer.")), /*#__PURE__*/React.createElement("div", {
    className: "intro-note"
  }, /*#__PURE__*/React.createElement("p", null, "Based between Zürich and Stans, I work as an apprentice Information Technologist at Pilatus Aircraft: mostly developing apps and updating outdated stuff. //Actually doing nothing", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "The rest of the time: out with friends, being stressed, commuting on trains, and listening to music."), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => navigate("bio")
  }, "More about me"))), /*#__PURE__*/React.createElement("section", {
    className: "home-gallery page-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Gallery / Selected Frames"), /*#__PURE__*/React.createElement("h2", null, "Don't know what I'm doing")), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: () => navigate("gallery")
  }, "All photographs")), /*#__PURE__*/React.createElement("div", {
    className: "home-grid"
  }, /*#__PURE__*/React.createElement("img", {
    src: "Images/R0001705.JPEG",
    alt: "Luzern train station"
  }), /*#__PURE__*/React.createElement("img", {
    src: "Images/R0001722.JPEG",
    alt: "Portrait"
  }), /*#__PURE__*/React.createElement("img", {
    src: "Images/R0001706.JPEG",
    alt: "Train platform"
  }))));
}

// ===== BIOGRAPHY =====
function Bio() {
  return /*#__PURE__*/React.createElement("section", {
    className: "subpage page-pad"
  }, /*#__PURE__*/React.createElement(BioWordWall, null), /*#__PURE__*/React.createElement("div", {
    className: "subpage-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "01 / Biography"), /*#__PURE__*/React.createElement("h1", null, "Romeo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Arisona."))), /*#__PURE__*/React.createElement("div", {
    className: "bio-layout"
  }, /*#__PURE__*/React.createElement("img", {
    src: "Images/R0001722.JPEG",
    alt: "Romeo Arisona"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reading-column"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "I am an Information Technologist and Freelancer based between Zürich and Stans, Switzerland."), /*#__PURE__*/React.createElement("p", null, "Apprentice Information Technologist at Pilatus Aircraft as part of the IED team. Building and maintaining IT infrastructure at one of Switzerland's premier aerospace manufacturers. //Actually doing nothing", /*#__PURE__*/React.createElement("br", null), "Outside of work I'm quite crafty with my hands, often engaging in DIY projects and photography. I also enjoy exploring new technologies and experimenting with creative coding projects. I am constantly seeking new ways to merge my technical skills with my creative pursuits. It's a continuous journey of learning and self-expression."), /*#__PURE__*/React.createElement("p", null, "Don't know what I'm doing most of the time. Sometimes I just go with the flow and see where my curiosity takes me. I'm just trying to fill out the emptiness within myself."), /*#__PURE__*/React.createElement("div", {
    className: "fact-list"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Location"), /*#__PURE__*/React.createElement("span", null, "Zürich / Stans, CH")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Camera"), /*#__PURE__*/React.createElement("span", null, "FUJIFILM X-E2, CONTAX 139")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Occupation"), /*#__PURE__*/React.createElement("span", null, "ApprenticeInformation Technologist"))))));
}

// ===== GALLERY =====
function Gallery() {
  return /*#__PURE__*/React.createElement("section", {
    className: "subpage page-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subpage-head gallery-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "02 / Photography"), /*#__PURE__*/React.createElement("h1", null, "Photo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "graphy."))), /*#__PURE__*/React.createElement("p", null, "Digital and analogue fragments, mostly in transit.")), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, photos.map(([src, title, caption], index) => /*#__PURE__*/React.createElement("figure", {
    className: index === 0 ? "feature-photo" : "",
    key: src
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("span", null, caption))))));
}

// ===== ART & PHILOSOPHY =====
function Art() {
  return /*#__PURE__*/React.createElement("section", {
    className: "subpage page-pad"
  }, /*#__PURE__*/React.createElement(RainbowBackground, null), /*#__PURE__*/React.createElement("div", {
    className: "subpage-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "03 / Art & Philosophy"), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("i", null, "Content."))), /*#__PURE__*/React.createElement("div", {
    className: "writing-list"
  }, [["Nihil", "A note on nothingness and the comfort of an empty answer.", "Nihil/"], ["quis sum ego", "A piece about the self, identity, and the stories we repeat.", "Sum/"], ["Paradoxum", "Contradictions are usually where the interesting parts begin.", "Paradoxum/"], ["Vanitas", "On loneliness, impermanence, and the objects we keep.", "Vanitas/"]].map(([title, desc, href], index) => /*#__PURE__*/React.createElement("a", {
    href: href,
    key: title
  }, /*#__PURE__*/React.createElement("span", null, "0", index + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, desc)), /*#__PURE__*/React.createElement("b", null, "↗")))));
}

// ===== CONTACT =====
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    className: "contact-page page-pad"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "04 / Contact"), /*#__PURE__*/React.createElement("h1", null, "Let's", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, "Connect.")), /*#__PURE__*/React.createElement("p", null, "Send cool music. Offer me a drink. Share an interesting project. Or just say hello.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:kodama@betterinthedark.ch"
  }, /*#__PURE__*/React.createElement("span", null, "Email"), /*#__PURE__*/React.createElement("b", null, "kodama@betterinthedark.ch"), "↗"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/rrarisona/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("b", null, "@rrarisona"), "↗"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Robotmech",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("span", null, "GitHub"), /*#__PURE__*/React.createElement("b", null, "Robotmech"), "↗")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

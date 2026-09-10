const { useEffect, useState } = React;

// Looking for something? You already found it.
// This site is held together with curiosity, coffee, and a suspicious amount of CSS.
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
  "<> hello, fellow source viewer",
  "[ 404 ] motivation not found",
  "// made with spite and free time",
  "everything is probably fine :-)",
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
    // A little noise for anyone opening the console. It is part of the atmosphere.
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
    console.log(`[ MODE ] switching to ${nextMode} :: ${nextMode === "dark" ? "night" : "day"} mode`);
    setDark(!dark);
  };

  const pageTitle =
    page === "home"
      ? "BETTERINTHEDARK()"
      : `BETTERINTHEDARK(${page.toUpperCase()})`;

  return (
    <div className={dark ? "app dark" : "app"}>
      {loading && <LoadingScreen />}
      <header className="topbar">
        <button
          className="wordmark"
          onClick={() => navigate("home")}
          aria-label="Go to home"
        >
          {pageTitle}
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {["home", "bio", "gallery", "art", "contact"].map((item) => (
            <button
              className={page === item ? "active" : ""}
              key={item}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button
            className="mode-button"
            onClick={toggleTheme}
            aria-label="Toggle color mode"
            title="Toggle color mode"
          >
            {dark ? "☼" : "◐"}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <main>
        {page === "home" && <Home navigate={navigate} />}
        {page === "bio" && <Bio />}
        {page === "gallery" && <Gallery />}
        {page === "art" && <Art />}
        {page === "contact" && <Contact />}
      </main>
      <footer>
        <span>Romeo Arisona / Better in the Dark</span>
        <span>CH · 2026</span>
      </footer>
    </div>
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

  return (
    <div className="rainbows-bg" aria-hidden="true">
      {Array.from({ length: 20 }, (_, index) => {
        const pattern =
          rainbowPatterns[(frame + index) % rainbowPatterns.length];
        const color = rainbowColors[(frame + index * 2) % rainbowColors.length];
        return (
          <div
            className="rainbow-line"
            style={{
              color,
              transform: `translateX(${((frame + index * 13) % 9) - 4}%)`,
            }}
            key={index}
          >
            {pattern.repeat(7)}
          </div>
        );
      })}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <RainbowBackground />
      <div className="loading-copy">
        <span>BETTERINTHEDARK()</span>
        <b>Loading</b>
        <small>Romeo Arisona / 2026</small>
      </div>
    </div>
  );
}

function BioWordWall() {
  return (
    <>
      <svg className="wall-filter-def" aria-hidden="true">
        <filter
          id="squiggly-wall"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
        </filter>
      </svg>
      <ul className="bio-word-wall" aria-hidden="true">
        {Array.from({ length: 180 }, (_, index) => {
          const background =
            thiefTileColors[(index * 5 + 2) % thiefTileColors.length];
          const text =
            thiefTileColors[(index * 3 + 4) % thiefTileColors.length];
          return (
            <li
              style={{ "--tile-bg": background, "--tile-text": text }}
              key={index}
            >
              {bioWallWords[index % bioWallWords.length]}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
function ArrowLink({ children, onClick }) {
  return (
    <button className="arrow-link" onClick={onClick}>
      {children} <span>↗</span>
    </button>
  );
}

// ===== HOME =====
function Home({ navigate }) {
  return (
    <>
      <section className="home-hero page-pad">
        <div className="hero-copy">
          <Eyebrow>Information technologist / photographer</Eyebrow>
          <h1>
            Romeo
            <br />
            <i>Arisona.</i>
          </h1>
          <p className="hero-intro">
            Based between Zürich and Stans, Switzerland. Information
            Technologist, Photographer, and Music Enjoyer.
          </p>
          <div className="hero-links">
            <ArrowLink onClick={() => navigate("gallery")}>
              View the frames
            </ArrowLink>
            <ArrowLink onClick={() => navigate("contact")}>Say hello</ArrowLink>
          </div>
        </div>
        <figure className="hero-image">
          <img
            src="Images/R0001728.JPEG"
            alt="A train at night in Switzerland"
          />
          <figcaption>
            <span>01 — 06</span>
            <span>Die Zentralbahn, 2026</span>
          </figcaption>
        </figure>
        <div className="hero-stamp">
          BETTER
          <br />
          IN THE
          <br />
          <b>DARK</b>
        </div>
      </section>
      <div className="marquee" aria-label="Interests and influences">
        <div className="marquee-track">
          {[0, 1].map((segment) => (
            <div
              className="marquee-content"
              aria-hidden={segment === 1}
              key={segment}
            >
              {marqueeItems.map((item) => (
                <span key={item}>
                  {item}
                  <b className="marquee-separator">⛤</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <section className="intro-band page-pad">
        <div>
          <Eyebrow>Who is this?</Eyebrow>
          <h2>
            Information Technologist.
            <br />
            <i>Cameraman.</i>
            <br />
            Music Enjoyer.
          </h2>
        </div>
        <div className="intro-note">
          <p>
            Based between Zürich and Stans, I work as an apprentice Information
            Technologist at Pilatus Aircraft: mostly developing apps and
            updating outdated stuff. //Actually doing nothing
            <br />
            <br />
            The rest of the time: out with friends, shooting film, taking late
            trains, and listening to music that makes more sense at night.
          </p>
          <ArrowLink onClick={() => navigate("bio")}>More about me</ArrowLink>
        </div>
      </section>
      <section className="home-gallery page-pad">
        <div className="section-heading">
          <div>
            <Eyebrow>Gallery / Selected Frames</Eyebrow>
            <h2>
              Out of focus,
              <br />
              <i>on purpose.</i>
            </h2>
          </div>
          <ArrowLink onClick={() => navigate("gallery")}>
            All photographs
          </ArrowLink>
        </div>
        <div className="home-grid">
          <img src="Images/R0001705.JPEG" alt="Luzern train station" />
          <img src="Images/R0001722.JPEG" alt="Portrait" />
          <img src="Images/R0001706.JPEG" alt="Train platform" />
        </div>
      </section>
    </>
  );
}

// ===== BIOGRAPHY =====
function Bio() {
  return (
    <section className="subpage page-pad">
      <BioWordWall />
      <div className="subpage-head">
        <Eyebrow>01 / Biography</Eyebrow>
        <h1>
          Romeo
          <br />
          <i>Arisona.</i>
        </h1>
      </div>
      <div className="bio-layout">
        <img src="Images/R0001722.JPEG" alt="Romeo Arisona" />
        <div className="reading-column">
          <p className="lead">
            I am an Information Technologist and photographer based between
            Zürich and Stans, Switzerland.
          </p>
          <p>
            At Pilatus Aircraft, I work with the IED team on the infrastructure
            and applications that keep a very large machine moving. Outside of
            work, I document the world in digital and analogue frames.
          </p>
          <p>
            My interests tend to orbit around systems, identity, music, and the
            particular atmosphere of places after dark.
          </p>
          <div className="fact-list">
            <div>
              <b>Location</b>
              <span>Zürich / Stans, CH</span>
            </div>
            <div>
              <b>Camera</b>
              <span>35mm + digital</span>
            </div>
            <div>
              <b>Currently</b>
              <span>Apprentice IT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== GALLERY =====
function Gallery() {
  return (
    <section className="subpage page-pad">
      <div className="subpage-head gallery-head">
        <div>
          <Eyebrow>02 / Photography</Eyebrow>
          <h1>
            Photo
            <br />
            <i>graphy.</i>
          </h1>
        </div>
        <p>Digital and analogue fragments, mostly in transit.</p>
      </div>
      <div className="gallery-grid">
        {photos.map(([src, title, caption], index) => (
          <figure className={index === 0 ? "feature-photo" : ""} key={src}>
            <img src={src} alt={title} />
            <figcaption>
              <b>{title}</b>
              <span>{caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

// ===== ART & PHILOSOPHY =====
function Art() {
  return (
    <section className="subpage page-pad">
      <RainbowBackground />
      <div className="subpage-head">
        <Eyebrow>03 / Art & Philosophy</Eyebrow>
        <h1>
          <i>Content.</i>
        </h1>
      </div>
      <div className="writing-list">
        {[
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
        ].map(([title, desc, href], index) => (
          <a href={href} key={title}>
            <span>0{index + 1}</span>
            <div>
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
            <b>↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}

// ===== CONTACT =====
function Contact() {
  return (
    <section className="contact-page page-pad">
      <div>
        <Eyebrow>04 / Contact</Eyebrow>
        <h1>
          Let's
          <br />
          <i>Connect.</i>
        </h1>
        <p>
          Send cool music. Offer me a drink. Share an interesting project. Or
          just say hello.
        </p>
      </div>
      <div className="contact-links">
        <a href="mailto:kodama@betterinthedark.ch">
          <span>Email</span>
          <b>kodama@betterinthedark.ch</b>↗
        </a>
        <a href="https://www.instagram.com/rrarisona/" target="_blank">
          <span>Instagram</span>
          <b>@rrarisona</b>↗
        </a>
        <a href="https://github.com/Robotmech" target="_blank">
          <span>GitHub</span>
          <b>Robotmech</b>↗
        </a>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React, {useState} from "react";

function BrowserFrame({children, variant = ""}) {
  return (
    <div className={`mockup mockup--${variant}`}>
      <div className="mockup__bar">
        <span className="mockup__dot" style={{background: "#f87171"}} />
        <span className="mockup__dot" style={{background: "#fbbf24"}} />
        <span className="mockup__dot" style={{background: "#34d399"}} />
      </div>
      <div className="mockup__screen">{children}</div>
    </div>
  );
}

function ChatMockup() {
  return (
    <BrowserFrame variant="chat">
      <div className="mockup__main" style={{justifyContent: "flex-start"}}>
        <div className="mockup__line" style={{width: "32%", marginBottom: 8}} />
        <div className="mockup__chat-bubble mockup__chat-bubble--user">
          Do you have this in size L?
        </div>
        <div className="mockup__chat-bubble mockup__chat-bubble--bot">
          Yes — Size L is in stock. Add it to your order?
        </div>
        <div className="mockup__chat-bubble mockup__chat-bubble--user">
          Sure, checkout please.
        </div>
        <div className="mockup__chat-bubble mockup__chat-bubble--bot">
          Order #4821 confirmed. Delivering in 2 days.
        </div>
        <div className="mockup__row" style={{marginTop: 4}}>
          <div
            className="mockup__line mockup__line--soft"
            style={{width: "45%"}}
          />
        </div>
        <div className="mockup__chat-input">
          <span />
          <span className="mockup__chat-send" />
        </div>
      </div>
    </BrowserFrame>
  );
}

function DashboardMockup() {
  return (
    <BrowserFrame variant="dashboard">
      <div className="mockup__sidebar">
        <span
          className="mockup__sidebar-item mockup__sidebar-item--active"
          style={{width: "80%"}}
        />
        <span className="mockup__sidebar-item" style={{width: "90%"}} />
        <span className="mockup__sidebar-item" style={{width: "70%"}} />
        <span className="mockup__sidebar-item" style={{width: "85%"}} />
        <span className="mockup__sidebar-item" style={{width: "60%"}} />
      </div>
      <div className="mockup__main">
        <div className="mockup__row">
          <div className="mockup__line" style={{width: "40%"}} />
        </div>
        <div className="mockup__row">
          <div className="mockup__card">
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "55%"}}
            />
            <div
              className="mockup__line mockup__line--accent"
              style={{width: "75%"}}
            />
          </div>
          <div className="mockup__card">
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "55%"}}
            />
            <div
              className="mockup__line mockup__line--accent"
              style={{width: "75%"}}
            />
          </div>
        </div>
        <div className="mockup__card" style={{height: 120}}>
          <div className="mockup__chart">
            <span
              className="mockup__bar-chart mockup__bar-chart--hi"
              style={{height: "70%"}}
            />
            <span className="mockup__bar-chart" style={{height: "45%"}} />
            <span
              className="mockup__bar-chart mockup__bar-chart--hi"
              style={{height: "85%"}}
            />
            <span className="mockup__bar-chart" style={{height: "55%"}} />
            <span
              className="mockup__bar-chart mockup__bar-chart--hi"
              style={{height: "95%"}}
            />
            <span className="mockup__bar-chart" style={{height: "65%"}} />
            <span
              className="mockup__bar-chart mockup__bar-chart--hi"
              style={{height: "78%"}}
            />
          </div>
        </div>
        <div className="mockup__row">
          <div
            className="mockup__line mockup__line--soft"
            style={{width: "25%"}}
          />
          <div
            className="mockup__line mockup__line--soft"
            style={{width: "18%"}}
          />
        </div>
      </div>
    </BrowserFrame>
  );
}

function TermMockup() {
  return (
    <BrowserFrame variant="term">
      <div className="mockup__main" style={{padding: "14px 16px"}}>
        <div className="mockup__term-line">
          $ <span className="t-kw">curl</span> -X POST /api/v1/orders
        </div>
        <div className="mockup__term-line">
          {"{ "}
          <span className="t-st">"status"</span>:{" "}
          <span className="t-st">"201"</span>,{" "}
          <span className="t-st">"order_id"</span>:{" "}
          <span className="t-st">"8f2c"</span> {"}"}
        </div>
        <div className="mockup__term-line">
          $ <span className="t-kw">docker</span> compose up -d --scale api=3
        </div>
        <div className="mockup__term-line">
          <span className="t-st">√</span> api-1&nbsp; healthy
        </div>
        <div className="mockup__term-line">
          <span className="t-st">√</span> api-2&nbsp; healthy
        </div>
        <div className="mockup__term-line">
          <span className="t-st">√</span> redis&nbsp; healthy
        </div>
        <div className="mockup__term-line">
          $ <span className="t-kw">curl</span> /health →{" "}
          <span className="t-st">200 OK</span> (32ms)
        </div>
      </div>
    </BrowserFrame>
  );
}

function BankMockup() {
  const stages = [
    {name: "Identity Verification", status: "approved"},
    {name: "AML Compliance Screening", status: "approved"},
    {name: "Sanctions List Screening", status: "review"},
    {name: "Board-Level Authorization", status: "pending"},
    {name: "Final Release Authorization", status: "pending"}
  ];

  return (
    <BrowserFrame variant="bank">
      <div className="mockup__sidebar">
        <span
          className="mockup__sidebar-item mockup__sidebar-item--active"
          style={{width: "80%"}}
        />
        <span className="mockup__sidebar-item" style={{width: "90%"}} />
        <span className="mockup__sidebar-item" style={{width: "70%"}} />
        <span className="mockup__sidebar-item" style={{width: "85%"}} />
        <span className="mockup__sidebar-item" style={{width: "60%"}} />
      </div>
      <div className="mockup__main">
        <div className="mockup__row">
          <div className="mockup__line" style={{width: "38%"}} />
        </div>
        <div className="mockup__bank-balance">
          <div
            className="mockup__line mockup__line--soft"
            style={{width: "28%"}}
          />
          <div
            className="mockup__line mockup__line--accent"
            style={{width: "58%"}}
          />
          <div className="mockup__row" style={{marginTop: 2}}>
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "22%"}}
            />
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "30%"}}
            />
          </div>
        </div>
        <div className="mockup__row">
          <div
            className="mockup__line mockup__line--soft"
            style={{width: "45%"}}
          />
        </div>
        <div className="mockup__stages">
          {stages.map(stage => (
            <div className="mockup__stage" key={stage.name}>
              <span
                className={`mockup__stage-dot mockup__stage-dot--${stage.status}`}
              />
              <span className="mockup__stage-name">{stage.name}</span>
              <span
                className={`mockup__stage-chip mockup__stage-chip--${stage.status}`}
              >
                {stage.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function MapMockup() {
  return (
    <BrowserFrame variant="map">
      <div className="mockup__main" style={{gap: 10}}>
        <div className="mockup__map-toolbar">
          <span className="mockup__line" style={{width: "34%"}} />
          <span
            className="mockup__line mockup__line--soft"
            style={{width: "18%"}}
          />
        </div>
        <div className="mockup__map">
          <div className="mockup__map-grid" />
          <div className="mockup__map-route" />
          <span className="mockup__map-stop mockup__map-stop--origin" />
          <span className="mockup__map-stop mockup__map-stop--mid" />
          <span className="mockup__map-stop mockup__map-stop--dest" />
          <div className="mockup__map-pin mockup__map-pin--approved">
            <span className="mockup__map-pin-dot" />
            <span className="mockup__map-pin-chip">Approved</span>
          </div>
          <div className="mockup__map-pin mockup__map-pin--pending">
            <span className="mockup__map-pin-dot" />
            <span className="mockup__map-pin-chip">Pending review</span>
          </div>
        </div>
        <div className="mockup__row">
          <div className="mockup__card">
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "55%"}}
            />
            <div
              className="mockup__line mockup__line--accent"
              style={{width: "75%"}}
            />
          </div>
          <div className="mockup__card">
            <div
              className="mockup__line mockup__line--soft"
              style={{width: "55%"}}
            />
            <div
              className="mockup__line mockup__line--accent"
              style={{width: "75%"}}
            />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function StorefrontMockup() {
  return (
    <BrowserFrame variant="storefront">
      <div className="mockup__shop">
        <div className="mockup__shop-header">
          <span className="mockup__shop-logo">SHOP</span>
          <span className="mockup__shop-search">Search 24 products…</span>
          <span className="mockup__shop-cart">Cart · 2</span>
        </div>
        <div className="mockup__shop-body">
          <div className="mockup__shop-side">
            <span className="mockup__line" style={{width: "78%"}} />
            <span
              className="mockup__line mockup__line--soft"
              style={{width: "62%"}}
            />
            <span
              className="mockup__line mockup__line--soft"
              style={{width: "70%"}}
            />
            <span
              className="mockup__line mockup__line--soft"
              style={{width: "54%"}}
            />
            <span
              className="mockup__line mockup__line--soft"
              style={{width: "66%"}}
            />
          </div>
          <div className="mockup__shop-grid">
            {[0, 1, 2, 3].map(i => (
              <div className="mockup__shop-product" key={i}>
                <div className="mockup__shop-photo" />
                <span
                  className="mockup__line mockup__line--soft"
                  style={{width: "82%"}}
                />
                <span
                  className="mockup__line mockup__line--accent"
                  style={{width: "46%"}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const variants = {
  chat: ChatMockup,
  dashboard: DashboardMockup,
  terminal: TermMockup,
  bank: BankMockup,
  map: MapMockup,
  flash: FlashMockup,
  storefront: StorefrontMockup
};

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.5-6.86a1.05 1.05 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14z" />
    </svg>
  );
}

function FlashMockup() {
  const stages = [
    {name: "Call webhook", detail: "ACK 8ms", status: "approved"},
    {name: "Redis phone lock", detail: "15s TTL", status: "approved"},
    {name: "Wallet / backup charge", detail: "₦500", status: "approved"},
    {name: "VTU router · failover", detail: "VTUPass", status: "review"},
    {name: "Delivered", detail: "SMS → WhatsApp", status: "pending"}
  ];

  return (
    <BrowserFrame variant="flash">
      <div className="mockup__main" style={{justifyContent: "flex-start"}}>
        <div className="mockup__flash-incoming">
          <span className="mockup__flash-phone">
            Missed call · +234 803 555 0123
          </span>
          <span className="mockup__flash-ok">FLASH OK</span>
        </div>
        <div className="mockup__flash-progress">
          <span />
        </div>
        <div className="mockup__flash-amount">
          ₦500 · MTN airtime · credited in 12s
        </div>
        <div className="mockup__stages">
          {stages.map(stage => (
            <div className="mockup__stage" key={stage.name}>
              <span
                className={`mockup__stage-dot mockup__stage-dot--${stage.status}`}
              />
              <span className="mockup__stage-name">{stage.name}</span>
              <span
                className={`mockup__stage-chip mockup__stage-chip--${stage.status}`}
              >
                {stage.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function MediaGallery({media, href}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = media[activeIndex];
  const isVideo = active.type === "video";

  return (
    <div className="gallery">
      <div className="gallery__frame">
        {isVideo ? (
          <video
            className="gallery__video"
            src={active.src}
            poster={active.poster}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <a
            className="gallery__main-link"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${active.label}`}
          >
            <img
              className="gallery__img"
              src={active.src}
              alt={active.alt}
              loading="lazy"
            />
          </a>
        )}
        <span className="gallery__badge">{active.label}</span>
      </div>
      <div className="gallery__thumbs">
        {media.map((item, i) => (
          <button
            type="button"
            key={item.src}
            className={`gallery__thumb${
              i === activeIndex ? " gallery__thumb--active" : ""
            }`}
            onClick={() => setActiveIndex(i)}
            aria-label={item.label}
            aria-pressed={i === activeIndex}
          >
            {item.type === "video" ? (
              <>
                <img src={item.poster || item.src} alt="" loading="lazy" />
                <span className="gallery__thumb-play">
                  <PlayIcon />
                </span>
              </>
            ) : (
              <img src={item.src} alt="" loading="lazy" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectVisual({variant, gallery, href}) {
  if (gallery && gallery.length) {
    return <MediaGallery media={gallery} href={href} />;
  }
  const Variant = variants[variant] || DashboardMockup;
  return <Variant />;
}

import React from "react";

function BrowserFrame({ children, variant = "" }) {
  return (
    <div className={`mockup mockup--${variant}`}>
      <div className="mockup__bar">
        <span className="mockup__dot" style={{ background: "#f87171" }} />
        <span className="mockup__dot" style={{ background: "#fbbf24" }} />
        <span className="mockup__dot" style={{ background: "#34d399" }} />
      </div>
      <div className="mockup__screen">{children}</div>
    </div>
  );
}

function ChatMockup() {
  return (
    <BrowserFrame variant="chat">
      <div className="mockup__main" style={{ justifyContent: "flex-start" }}>
        <div className="mockup__line" style={{ width: "32%", marginBottom: 8 }} />
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
        <div className="mockup__row" style={{ marginTop: 4 }}>
          <div className="mockup__line mockup__line--soft" style={{ width: "45%" }} />
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
        <span className="mockup__sidebar-item mockup__sidebar-item--active" style={{ width: "80%" }} />
        <span className="mockup__sidebar-item" style={{ width: "90%" }} />
        <span className="mockup__sidebar-item" style={{ width: "70%" }} />
        <span className="mockup__sidebar-item" style={{ width: "85%" }} />
        <span className="mockup__sidebar-item" style={{ width: "60%" }} />
      </div>
      <div className="mockup__main">
        <div className="mockup__row">
          <div className="mockup__line" style={{ width: "40%" }} />
        </div>
        <div className="mockup__row">
          <div className="mockup__card">
            <div className="mockup__line mockup__line--soft" style={{ width: "55%" }} />
            <div className="mockup__line mockup__line--accent" style={{ width: "75%" }} />
          </div>
          <div className="mockup__card">
            <div className="mockup__line mockup__line--soft" style={{ width: "55%" }} />
            <div className="mockup__line mockup__line--accent" style={{ width: "75%" }} />
          </div>
        </div>
        <div className="mockup__card" style={{ height: 120 }}>
          <div className="mockup__chart">
            <span className="mockup__bar-chart mockup__bar-chart--hi" style={{ height: "70%" }} />
            <span className="mockup__bar-chart" style={{ height: "45%" }} />
            <span className="mockup__bar-chart mockup__bar-chart--hi" style={{ height: "85%" }} />
            <span className="mockup__bar-chart" style={{ height: "55%" }} />
            <span className="mockup__bar-chart mockup__bar-chart--hi" style={{ height: "95%" }} />
            <span className="mockup__bar-chart" style={{ height: "65%" }} />
            <span className="mockup__bar-chart mockup__bar-chart--hi" style={{ height: "78%" }} />
          </div>
        </div>
        <div className="mockup__row">
          <div className="mockup__line mockup__line--soft" style={{ width: "25%" }} />
          <div className="mockup__line mockup__line--soft" style={{ width: "18%" }} />
        </div>
      </div>
    </BrowserFrame>
  );
}

function TermMockup() {
  return (
    <BrowserFrame variant="term">
      <div className="mockup__main" style={{ padding: "14px 16px" }}>
        <div className="mockup__term-line">
          $ <span className="t-kw">curl</span> -X POST /api/v1/orders
        </div>
        <div className="mockup__term-line">
          {"{ "}
          <span className="t-st">"status"</span>: <span className="t-st">"201"</span>,{" "}
          <span className="t-st">"order_id"</span>: <span className="t-st">"8f2c"</span>{" "}
          {"}"}
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
          $ <span className="t-kw">curl</span> /health → <span className="t-st">200 OK</span> (32ms)
        </div>
      </div>
    </BrowserFrame>
  );
}

const variants = {
  chat: ChatMockup,
  dashboard: DashboardMockup,
  terminal: TermMockup,
};

export default function ProjectVisual({ variant }) {
  const Variant = variants[variant] || DashboardMockup;
  return <Variant />;
}

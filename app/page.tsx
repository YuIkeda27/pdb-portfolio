export default function Page() {
  const services = [
    {
      title: "Crowdfunding Product Discovery",
      text: "We identify promising products gaining traction in overseas crowdfunding markets and assess their fit for the Japanese market.",
    },
    {
      title: "Manufacturer Outreach",
      text: "We approach overseas manufacturers and introduce a clear market-entry path into Japan through crowdfunding and distribution.",
    },
    {
      title: "Exclusive Distribution Support",
      text: "We support negotiations toward exclusive distribution rights for the Japanese market with a practical and business-focused approach.",
    },
    {
      title: "Japan Market Launch",
      text: "We prepare the foundation for a successful launch in Japan through crowdfunding-based validation and brand positioning.",
    },
  ];

  const process = [
    "Research overseas crowdfunding trends",
    "Select products with Japan market potential",
    "Contact manufacturers and present portfolio",
    "Discuss partnership and exclusive rights",
    "Prepare launch strategy for Japan",
  ];

  return (
    <main
      style={{
        background:
          "linear-gradient(180deg, #fff7fa 0%, #ffeef4 45%, #fff8fb 100%)",
        color: "#3d2d33",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "72px 24px 56px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: 999,
            background: "#ffdce8",
            color: "#9b4f6a",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          PDB TRADING JAPAN Co., Ltd.
        </div>

        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            lineHeight: 1.02,
            margin: "0 0 18px",
            letterSpacing: "-0.03em",
            color: "#2e2025",
            maxWidth: 900,
          }}
        >
          Bringing overseas crowdfunding products into Japan.
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.8,
            color: "#6d5660",
            maxWidth: 820,
            margin: 0,
          }}
        >
          We support overseas brands and manufacturers seeking to enter the
          Japanese market through crowdfunding, distribution discussions, and
          long-term brand development opportunities.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 34,
          }}
        >
          <a
            href="mailto:info@pdb-tradingjapan.com"
            style={{
              background: "#ef7ea6",
              color: "#ffffff",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: 999,
              fontWeight: 700,
              boxShadow: "0 10px 30px rgba(239,126,166,0.25)",
            }}
          >
            Contact Us
          </a>

          <a
            href="https://www.linkedin.com/in/yu-ikeda-192b05403?trk=contact-info"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#ffffff",
              color: "#7a4d60",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: 999,
              fontWeight: 700,
              border: "1px solid #f3c4d5",
            }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px 36px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid #f6d4e0",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 14px 30px rgba(157, 89, 117, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#a1647b",
                marginBottom: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Company
            </div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              PDB TRADING JAPAN Co., Ltd.
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid #f6d4e0",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 14px 30px rgba(157, 89, 117, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#a1647b",
                marginBottom: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Representative
            </div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>Yu Ikeda (CEO)</div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid #f6d4e0",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 14px 30px rgba(157, 89, 117, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#a1647b",
                marginBottom: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Focus
            </div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              Japan Entry via Crowdfunding
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "20px 24px 32px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.86)",
            border: "1px solid #f4cedc",
            borderRadius: 32,
            padding: "34px 28px",
            boxShadow: "0 18px 40px rgba(157, 89, 117, 0.08)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#a1647b",
              marginBottom: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            About Us
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.95,
              color: "#5f4952",
            }}
          >
            PDB TRADING JAPAN Co., Ltd. works with overseas manufacturers and
            brands that are interested in expanding into Japan. Our approach is
            centered on identifying products with strong crowdfunding potential,
            presenting a clear market opportunity, and building a practical path
            toward launch and distribution in Japan.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px 24px",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#a1647b",
            marginBottom: 14,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          What We Do
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {services.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #f2cfdb",
                borderRadius: 26,
                padding: 24,
                boxShadow: "0 12px 30px rgba(157, 89, 117, 0.08)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: 21,
                  lineHeight: 1.35,
                  color: "#35252b",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#6a535d",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 20,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.88)",
              border: "1px solid #f2cfdb",
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 12px 30px rgba(157, 89, 117, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#a1647b",
                marginBottom: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Process
            </div>

            <ol
              style={{
                margin: 0,
                paddingLeft: 22,
                color: "#5d4750",
                fontSize: 17,
                lineHeight: 2,
              }}
            >
              {process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div
            style={{
              background: "#fff9fb",
              border: "1px solid #f2cfdb",
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 12px 30px rgba(157, 89, 117, 0.08)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#a1647b",
                marginBottom: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Contact
            </div>

            <p
              style={{
                margin: "0 0 16px",
                color: "#5d4750",
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              We welcome discussions with overseas manufacturers interested in
              exploring the Japanese market.
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#a1647b",
                    marginBottom: 4,
                    fontWeight: 700,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:info@pdb-tradingjapan.com"
                  style={{
                    color: "#7d4a60",
                    textDecoration: "none",
                    fontWeight: 700,
                    wordBreak: "break-all",
                  }}
                >
                  info@pdb-tradingjapan.com
                </a>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#a1647b",
                    marginBottom: 4,
                    fontWeight: 700,
                  }}
                >
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/in/yu-ikeda-192b05403?trk=contact-info"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#7d4a60",
                    textDecoration: "none",
                    fontWeight: 700,
                    wordBreak: "break-all",
                  }}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "10px 24px 56px",
          color: "#8d6b79",
          fontSize: 14,
        }}
      >
        © PDB TRADING JAPAN Co., Ltd.
      </footer>
    </main>
  );
}
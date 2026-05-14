import styles from "@/app/page.module.css";

const teamMembers = [
  {
    name: "Hye Soo Shim",
    role: "UX Designer",
    contribution:
      "Designed and tested the budgeting flow to make expense tracking easier to use.",
  },
  {
    name: "Alice Chang",
    role: "UI Designer",
    contribution:
      "Created visual layouts, buttons, cards, and interface components for a clear user experience.",
  },
  {
    name: "Jennie Yu",
    role: "Brand Designer",
    contribution:
      "Created Canopy mood, colors, visual identity, and growth-inspired brand language.",
  },
  {
    name: "Gurjot Hundal",
    role: "Product Designer",
    contribution:
      "Explored user needs, budgeting pain points, and helped shape problem direction.",
  },
  {
    name: "David Yoo",
    role: "Project Manager",
    contribution:
      "Organized the team workflow while testing key interactions and helping refine Canopy’s user flow.",
  },
];

export default function TeamSection() {
  return (
    <section className={styles.teamPanelSection} id="section-about-us">
      <div className={styles.teamPanelInner}>
        <div className={styles.teamPanelLeft}>
          <p className={styles.teamEyebrow}>About us</p>

          <h2 className={styles.teamPanelTitle}>
            The Roots
            <br />
            Behind
            <br />
            Canopy.
          </h2>

          <p className={styles.teamPanelIntro}>
            Canopy began here. <br />A shared idea to make budgeting feel
            lighter.
          </p>
        </div>

        <div className={styles.teamPanelRight}>
          {teamMembers.map((member) => (
            <article className={styles.teamPanelCard} key={member.name}>
              <h3 className={styles.teamPanelRole}>{member.role}</h3>

              <div className={styles.teamPanelHoverContent}>
                <p className={styles.teamPanelName}>{member.name}</p>
                <p className={styles.teamPanelContribution}>
                  {member.contribution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

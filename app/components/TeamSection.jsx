import styles from "@/app/page.module.css";

const teamMembers = [
  {
    name: "Hye Soo",
    role: "UX/UI Designer",
    contribution:
      "Designed the feature flow, visual direction, and interactive landing page experience for Canopy.",
  },
  {
    name: "Member 2",
    role: "Frontend Developer",
    contribution:
      "Built interactive app previews and helped translate the design system into React components.",
  },
  {
    name: "Member 3",
    role: "Research Lead",
    contribution:
      "Explored user needs, budgeting pain points, and helped shape the problem direction.",
  },
  {
    name: "Member 4",
    role: "Brand Designer",
    contribution:
      "Created the Canopy mood, colors, visual identity, and growth-inspired brand language.",
  },
  {
    name: "Member 5",
    role: "Usability Tester",
    contribution:
      "Tested key interactions and helped refine the app preview, feedback, and user flow.",
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

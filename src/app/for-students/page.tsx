"use client";

import Banner from "@/components/Banner/Banner";
import Process from "@/for-students-process/Process";
import WhyJoin from "@/for-students-whyjoin/WhyJoin";
import FaqCard from "@/for-students-FAQ/FaqCard";
import { Container, Divider } from "@mantine/core";
import Alumni from "@/for-students-alumni/Alumni";
import Roles from "@/for-students-roles/Roles";
import Link from "next/link";

// TODO: ACTUALLY ADD FAQ DATA
const faqData = [
  {
    key: 1,
    question: "When does Blueprint conduct our hiring?",
    answer:
      "We have a few hiring phases. Executives are hired in the late spring and early summer, Project Leads, Project Managers, and Designers are hired in August, and Developers are hired in the September.",
  },
  {
    key: 2,
    question: "What roles does Blueprint hire for?",
    answer: (
      <>
        We hire for a variety of roles, including developers, product managers,
        designers, and project leads. This means that there are opportunities
        for students of all backgrounds to get involved. You can learn more
        about the each role{" "}
        <Link
          href="https://uoftblueprint.notion.site/UofT-Blueprint-Role-Descriptions-22e65250760843c0a8686990a69e6a0a?pvs=4"
          style={{ color: "#2D7FF9" }}
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    key: 3,
    question: "What is the time commitment for Blueprint?",
    answer:
      "The time commitment varies depending on the role. As a general guideline, we recommend that students allocate anywhere from 6 to 12 hours per week for Blueprint.",
  },
  {
    key: 4,
    question: "What is the technology stack used by Blueprint?",
    answer: (
      <>
        It really depends on the use case of the project. We have built both
        mobile and web applications. We frequently find teams using React and
        Node.js. You can check out our past projects on{" "}
        <Link
          href="https://uoftblueprint.notion.site/UofT-Blueprint-Role-Descriptions-22e65250760843c0a8686990a69e6a0a?pvs=4"
          style={{ color: "#2D7FF9" }}
        >
          GitHub
        </Link>{" "}
        where we have them all open-sourced.
      </>
    ),
  },
];

export default function forstudentsPage() {
  return (
    <div>
      <div style={{ backgroundColor: "#e7f3ff" }}>
        <Banner
          title="For Students"
          text="Interested in making a change in the community around you? Want to gain experience working in a software development team? Join us!"
        />
      </div>
      <Alumni />
      <Container
        size="80%"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Roles />
        <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
        <WhyJoin img={"/for-students/teaching_moment.jpeg"} />
        <Divider w="73%" color="#e7f3ff" size={"1px"} mx="auto" />
        <Process
          applicationImg={"/for-students/blu-working.png"}
          applicationLink={undefined}
          interviewImg={"/for-students/blu-question.png"}
          interviewLink={undefined}
          acceptancesImg={"/for-students/blu-surprise.png"}
          acceptancesLink={undefined}
        />
      </Container>
      <FaqCard faq_info={faqData} />
    </div>
  );
}

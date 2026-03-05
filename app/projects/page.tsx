"use client";
import ProjectsCardWModal from "@/components/projects-card/ProjectsCardWModal";
import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import Banner from "@/components/Banner/Banner";
import "@mantine/core/styles.css";
import "@/app/projects/projects.css";

export default function ProjectsPage() {
  return (
    <div>
      <Banner
        title="Projects"
        text="Since our founding in 2020, we’ve had the pleasure to work with 14 non-profits!"
        button={{ text: "Contact us", link: "/for-nonprofits" }}
      />
      <Container size="xl">
        <Stack className="projects-page-main" gap="lg">
          {/* ************** */}
          {/* YEAR 2025-2026 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2025-2026
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="The Inga Foundation"
              description="A data management and visualization platform tracking environmental impact."
              image={"projects/inga.jpg"}
              hasOverlay={true}
              years={["2025-2026"]}
              projectDescription="This project develops a platform to input, organise, and visualize agricultural and environmental impact data from field activities. The system allows staff to manage data more efficiently and generate shareable dashboards that highlight measurable outcomes for donors."
              nonprofitDescription="The Inga Foundation is working to replace slash-and-burn agriculture with sustainable farming practices using Inga trees. By restoring soil fertility and supporting smallholder farmers, the organization promotes long-term food security while protecting tropical forests."
              team={[
                {
                  name: "Pranav Rao",
                  role: "Project Lead",
                  imageSrc: "",
                },
                {
                  name: "Yianni Culmone",
                  role: "Project Lead",
                  imageSrc: "members/yianni_culmore.jpg",
                },
                {
                  name: "Ali Elbadrawy",
                  role: "Product Manager",
                  imageSrc: "members/ali_elbadrawy.jpeg",
                },
                {
                  name: "June Vo",
                  role: "Product Manager",
                  imageSrc: "members/june_vo.jpeg",
                },
                {
                  name: "Amish Mamtani",
                  role: "Designer",
                  imageSrc: "members/amish_mamtani.jpg",
                },
                {
                  name: "Janice Li",
                  role: "Designer",
                  imageSrc: "",
                },
                {
                  name: "John Fitzgerald",
                  role: "Developer",
                  imageSrc: "members/john_fitzgerald.jpg",
                },
                {
                  name: "Ali Khan",
                  role: "Developer",
                  imageSrc: "members/ali_khan.jpg",
                },
                {
                  name: "Yan Luk",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Steven Lin",
                  role: "Developer",
                  imageSrc: "members/steven_lin.png",
                },
                {
                  name: "Harry Xu",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Praneeth Suryadevara",
                  role: "Developer",
                  imageSrc: "members/praneeth_suryadevara.jpeg",
                },
                {
                  name: "Alec Jiang",
                  role: "Developer",
                  imageSrc: "members/alex_jiang.jpg",
                },
                {
                  name: "Rashu Sharda",
                  role: "Developer",
                  imageSrc: "members/rashu_sharda.png",
                },
              ]}
              webLink="https://www.ingafoundation.org/"
              githubLink="https://github.com/uoftblueprint/inga"
            />
            <ProjectsCardWModal
              name="Toronto Rape Crisis Centre"
              description="A centralized volunteer management system designed to streamline data and internal operations."
              image={"projects/trcc.jpg"}
              hasOverlay={true}
              years={["2025-2026"]}
              projectDescription="We are building a custom membership system to help TRCC efficiently organize, track, and support their volunteer network. This digital infrastructure ensures that those coordinating vital support have the resources they need at their fingertips."
              nonprofitDescription="Toronto Rape Crisis Centre (TRCC) aims to provide anti-oppressive, feminist peer support to survivors of sexual violence, of all genders and identities, through counselling, group support, education, advocacy, and activism."
              team={[
                {
                  name: "Jack Le",
                  role: "Project Lead",
                  imageSrc: "members/jack_le.jpeg",
                },
                {
                  name: "Leandro Hamaguchi Brasil",
                  role: "Project Lead",
                  imageSrc: "members/leandro_brasil.jpg",
                },
                {
                  name: "Helen Zhao",
                  role: "Product Manager",
                  imageSrc: "members/helen_zhao.png",
                },
                {
                  name: "Lala Leung",
                  role: "Designer",
                  imageSrc: "members/lala_leung.jpg",
                },
                {
                  name: "Rosha Abooali",
                  role: "Designer",
                  imageSrc: "",
                },
                {
                  name: "Patricia Wong",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Alan Su",
                  role: "Developer",
                  imageSrc: "members/alan_su.jpg",
                },
                {
                  name: "Michelle Huang",
                  role: "Developer",
                  imageSrc: "members/michelle_huang.jpg",
                },
                {
                  name: "Jonathan Qiao",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Dimural Murat",
                  role: "Developer",
                  imageSrc: "members/dimural_murat.jpeg",
                },
                {
                  name: "Janice Lam",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Brandon Tai",
                  role: "Developer",
                  imageSrc: "members/brandon_tai.jpg",
                },
                {
                  name: "Fred He",
                  role: "Developer",
                  imageSrc: "members/fred_he.jpg",
                },
              ]}
              webLink="https://trccmwar.ca/"
              githubLink="https://github.com/uoftblueprint/trcc"
            />
            <ProjectsCardWModal
              name="The Museum of Art and Digital Entertainment (MADE)"
              description="A digital cataloguing and inventory management system to manage thousands of artifacts."
              image={"projects/made.jpg"}
              hasOverlay={true}
              years={["2025-2026"]}
              projectDescription="Our team is building a web-based collection management system that allows staff and volunteers to catalogue artifacts, manage storage containers, and review new item submissions. It improves accessibility for volunteers by making it easier to view and update records across devices."
              nonprofitDescription="The Museum of Art and Digital Entertainment (MADE) is museum dedicated to preserving and celebrating the history of video games and digital creativity. Through exhibitions, education programs, and community events, MADE works to document the cultural impact of games and interactive media."
              team={[
                {
                  name: "Vivian Deng",
                  role: "Project Lead",
                  imageSrc: "",
                },
                {
                  name: "Ethan Qiu",
                  role: "Project Lead",
                  imageSrc: "",
                },
                {
                  name: "Sofia Carrillo",
                  role: "Product Manager",
                  imageSrc: "members/sofia_carrillo.jpg",
                },
                {
                  name: "Efan Song",
                  role: "Designer",
                  imageSrc: "members/efan_song.jpeg",
                },
                {
                  name: "Alex Lewis",
                  role: "Developer",
                  imageSrc: "members/alex_lewis.jpg",
                },
                {
                  name: "Lily Phan",
                  role: "Developer",
                  imageSrc: "members/lily_phan.jpg",
                },
                {
                  name: "Dhruv Patel",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Raymond Chan",
                  role: "Developer",
                  imageSrc: "members/raymond_chan.jpeg",
                },
                {
                  name: "Anthony Zhao",
                  role: "Developer",
                  imageSrc: "members/anthony_zhao.JPG",
                },
                {
                  name: "Caellum Yip Hoi - Lee",
                  role: "Developer",
                  imageSrc: "members/caellum_yip_hoi-lee.png",
                },
                {
                  name: "Edwin Zeng",
                  role: "Developer",
                  imageSrc: "members/edwin_zeng.png",
                },
                {
                  name: "Tharjiha Suthekara",
                  role: "Developer",
                  imageSrc: "members/tharjiha_suthekara.png",
                },
                {
                  name: "Victor Li",
                  role: "Developer",
                  imageSrc: "",
                },
              ]}
              webLink="https://www.themade.org/"
              githubLink="https://github.com/uoftblueprint/made"
            />
          </SimpleGrid>
          {/* ************** */}
          {/* YEAR 2024-2025 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2024-2025
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="The Centre for Dreams"
              description="A centralized mobile application to send announcements, track absences, schedule events, and have discussions."
              image={"projects/centre-for-dreams.jpg"}
              hasOverlay={true}
              years={["2023-2025"]}
              projectDescription="We are building a centralized mobile application to send announcements, track absences, schedule events, and have discussions."
              nonprofitDescription="The Centre for Dreams works to integrate those with disabilities back into the society so that they are productive, independent, and respected members of the society. They provide services for adults with developmental disability through educational programs and social skills training (day care programs)."
              team={[
                {
                  name: "Sarina Li",
                  role: "Project Lead",
                  imageSrc: "members/sarina_li.png",
                },
                {
                  name: "Emily Zhou",
                  role: "Product Manager",
                  imageSrc: "members/emily_zhou.jpeg",
                },
                {
                  name: "Amish Mamtani",
                  role: "Designer",
                  imageSrc: "members/amish_mamtani.png",
                },
                {
                  name: "Elsie Zhou",
                  role: "Developer",
                  imageSrc: "members/elsie_zhou.jpg",
                },
                {
                  name: "Jeff Huang",
                  role: "Developer",
                  imageSrc: "members/jeff_huang.jpg",
                },
                {
                  name: "Carlos Solares",
                  role: "Developer",
                  imageSrc: "members/carlos_solares.jpg",
                },
                {
                  name: "Eric Lu",
                  role: "Developer",
                  imageSrc: "members/eric_lu.png",
                },
                {
                  name: "Nolawi Teklehaimanot",
                  role: "Developer",
                  imageSrc: "members/nolawi_teklehaimanot.jpg",
                },
                {
                  name: "Daniel Xu",
                  role: "Developer",
                  imageSrc: "",
                },
                {
                  name: "Girik Setya",
                  role: "Developer",
                  imageSrc: "members/girik_setya.jpeg",
                },
              ]}
              webLink="https://www.centrefordreams.ca/"
              githubLink="https://github.com/uoftblueprint/centre-for-dreams"
            />
            <ProjectsCardWModal
              name="The Period Purse"
              description="A Menstrual Tracking application for iOS and Android, built by youth for youth."
              image={"projects/the-period-purse.jpeg"}
              hasOverlay={true}
              years={["2021-2023", "2024-2025"]}
              projectDescription="We are maintaining a cross-platform menstrual tracking application for iOS and Android."
              nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
              team={[
                {
                  name: "Merrick Liu",
                  role: "Project Lead",
                  imageSrc: "members/merrick_liu.jpg",
                },
                {
                  name: "Paridhi Goel",
                  role: "Product Manager",
                  imageSrc: "members/paridhi_goel.jpg",
                },
                { name: "Patricia Santos", role: "Designer", imageSrc: "" },
                {
                  name: "Helen Zhao",
                  role: "Developer",
                  imageSrc: "members/helen_zhao.jpg",
                },
                {
                  name: "Jack Fan",
                  role: "Developer",
                  imageSrc: "members/jack_fan.jpg",
                },
                {
                  name: "Taewoong Oh",
                  role: "Developer",
                  imageSrc: "members/taewoong_oh.jpg",
                },
                { name: "Joel Lawrence", role: "Developer", imageSrc: "" },
                {
                  name: "Muhtasim Khan",
                  role: "Developer",
                  imageSrc: "members/muhtasim_khan.jpg",
                },
                {
                  name: "Harpuneet Singh",
                  role: "Developer",
                  imageSrc: "members/harpuneet_singh.jpg",
                },
                {
                  name: "Brandon Tai",
                  role: "Developer",
                  imageSrc: "members/brandon_tai.jpg",
                },
                {
                  name: "Fred He",
                  role: "Developer",
                  imageSrc: "members/fred_he.jpg",
                },
                {
                  name: "Sataphon Obra",
                  role: "Developer",
                  imageSrc: "members/sataphon_obra.png",
                },
              ]}
              webLink="https://www.theperiodpurse.com/"
              githubLink="https://github.com/uoftblueprint/the-period-purse-ios"
            />
            <ProjectsCardWModal
              name="Toronto Community Employment Services"
              description="A public-facing job board where applicants can find jobs to apply for."
              image={"projects/tces2.jpg"}
              hasOverlay={true}
              years={["2022-2025"]}
              projectDescription="We are making a public-facing job board where applicants can find jobs to apply for. TCES can create job postings as well as filter through job applications and update the status of job applications."
              nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
              team={[
                {
                  name: "Kashish Mittal",
                  role: "Project Lead",
                  imageSrc: "members/kashish_mittal.jpg",
                },
                {
                  name: "Mieko Yao",
                  role: "Product Manager",
                  imageSrc: "members/mieko_yao.jpg",
                },
                {
                  name: "Olya Jaworsky",
                  role: "Designer",
                  imageSrc: "members/olya_jaworsky.jpeg",
                },
                {
                  name: "William Lam",
                  role: "Developer",
                  imageSrc: "members/william_lam.jpg",
                },
                {
                  name: "Harshith Latchupatula",
                  role: "Developer",
                  imageSrc: "members/harshith_latchupatula.jpeg",
                },
                {
                  name: "Jamie Yi",
                  role: "Developer",
                  imageSrc: "members/jamie_yi.jpg",
                },
                {
                  name: "Shahmeer Khan",
                  role: "Developer",
                  imageSrc: "members/shahmeer_khan.jpg",
                },
                {
                  name: "Dhairya Thakkar",
                  role: "Developer",
                  imageSrc: "members/dhairya_thakkar.jpg",
                },
                {
                  name: "Lana Wehbeh",
                  role: "Developer",
                  imageSrc: "members/lana_wehbeh.png",
                },
                {
                  name: "Michelle Huang",
                  role: "Developer",
                  imageSrc: "members/michelle_huang.jpg",
                },
                { name: "Houman Ebrahimi", role: "Developer", imageSrc: "" },
                {
                  name: "Alex Lewis",
                  role: "Developer",
                  imageSrc: "members/alex_lewis.jpg",
                },
              ]}
              webLink="https://toronto-jobs.org/"
              githubLink="https://github.com/uoftblueprint/tces"
            />
            <ProjectsCardWModal
              name="City of Brampton"
              description="A digital queue system for the public sport courts."
              image={"projects/btq.jpg"}
              hasOverlay={true}
              years={["2024-2025"]}
              projectDescription="We are building a digital queue system for the City of Brampton to help manage the demand for public sport courts."
              nonprofitDescription="The City of Brampton is a municipality in the Greater Toronto Area that is home to over 600,000 residents. They are committed to providing a high quality of life for their residents by providing services."
              team={[
                {
                  name: "Raunak Madan",
                  role: "Project Lead",
                  imageSrc: "members/raunak_madan.jpeg",
                },
                {
                  name: "Christie Ko",
                  role: "Product Manager",
                  imageSrc: "members/christie_ko.png",
                },
                {
                  name: "Steven Lin",
                  role: "Designer",
                  imageSrc: "members/steven_lin.png",
                },
                {
                  name: "Ron Varshavsky",
                  role: "Developer",
                  imageSrc: "members/ron_varshavsky.jpg",
                },
                {
                  name: "Aina Merchant",
                  role: "Developer",
                  imageSrc: "members/aina_merchant.jpeg",
                },
                {
                  name: "Divyansh Kachchhava",
                  role: "Developer",
                  imageSrc: "members/divyansh_kachchhava.jpg",
                },
                {
                  name: "Alan Su",
                  role: "Developer",
                  imageSrc: "members/alan_su.jpg",
                },
                {
                  name: "Riyad Valiyev",
                  role: "Developer",
                  imageSrc: "members/riyad_valiyev.png",
                },
                {
                  name: "Stephanie Lu",
                  role: "Developer",
                  imageSrc: "members/stephanie_lu.jpg",
                },
                {
                  name: "James Han",
                  role: "Developer",
                  imageSrc: "members/james_han.png",
                },
                {
                  name: "Leandro Brasil",
                  role: "Developer",
                  imageSrc: "members/leandro_brasil.jpg",
                },
              ]}
              webLink="https://www.brampton.ca/EN/pages/Welcome.aspx"
              githubLink="https://github.com/uoftblueprint/brampton-tennis-queue"
            />
            <ProjectsCardWModal
              name="Open-Source Contributors x Mozilla"
              description="Enabling Live Activities downloads for Firefox iOS."
              image={"projects/osc.jpeg"}
              hasOverlay={true}
              years={["2024-2025"]}
              projectDescription="We are adding Live Activities/Dynamic Islands to Firefox-iOS to better inform users of file download progress."
              nonprofitDescription="Mozilla is company working to put control of the internet back in the hands of the people using it. They achieve this through Advocacy initiatives, Building products that collect minimal data — e.g. Firefox — and funding people in efforts that align with their mission"
              team={[
                {
                  name: "Daniel Dervishi",
                  role: "Project Lead",
                  imageSrc: "members/daniel_dervishi.jpg",
                },
                {
                  name: "Ryan Li",
                  role: "Developer",
                  imageSrc: "members/ryan_li.jpeg",
                },
                {
                  name: "Scott Angelides",
                  role: "Developer",
                  imageSrc: "members/scott_angelides.jpg",
                },
                {
                  name: "Enaya Amir",
                  role: "Developer",
                  imageSrc: "members/enaya_amir.jpg",
                },
                {
                  name: "Lily Phan",
                  role: "Developer",
                  imageSrc: "members/lily_phan.jpg",
                },
                {
                  name: "Max Nguyen",
                  role: "Developer",
                  imageSrc: "members/max_nguyen.png",
                },
                {
                  name: "Raine Yang",
                  role: "Developer",
                  imageSrc: "members/raine_yang.jpg",
                },
              ]}
              webLink="https://www.mozilla.org/en-US/"
              githubLink="https://github.com/mozilla-mobile/firefox-ios"
            />
          </SimpleGrid>
          {/* ************** */}
          {/* YEAR 2023-2024 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2023-2024
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="The Centre for Dreams"
              description="A centralized mobile application to send announcements, track absences, schedule events, and have discussions."
              image={"projects/centre-for-dreams.jpg"}
              hasOverlay={true}
              years={["2023-2024"]}
              projectDescription="We are building a centralized mobile application to send announcements, track absences, schedule events, and have discussions."
              nonprofitDescription="The Centre for Dreams works to integrate those with disabilities back into the society so that they are productive, independent, and respected members of the society. They provide services for adults with developmental disability through educational programs and social skills training (day care programs)."
              team={[
                {
                  name: "Baker Jackson",
                  role: "Project Lead",
                  imageSrc: "members/baker_jackson.jpg",
                },
                {
                  name: "Ganesh Asapu",
                  role: "Project Lead",
                  imageSrc: "members/ganesh_asapu.jpg",
                },
                {
                  name: "Julie Nguyen",
                  role: "Designer",
                  imageSrc: "team/alumni/julie.jpg",
                },
                {
                  name: "Yuet Ming Wong",
                  role: "Designer",
                  imageSrc: "members/yuet_ming_wong.png",
                },
                {
                  name: "Ryan Li",
                  role: "Developer",
                  imageSrc: "members/ryan_li.jpeg",
                },
                {
                  name: "Sarina Li",
                  role: "Developer",
                  imageSrc: "members/sarina_li.png",
                },
                {
                  name: "Jason Wang",
                  role: "Developer",
                  imageSrc: "members/jason_wang.jpg",
                },
                {
                  name: "Helen Zhao",
                  role: "Developer",
                  imageSrc: "members/helen_zhao.jpg",
                },
                {
                  name: "Helena Glowacki",
                  role: "Developer",
                  imageSrc: "members/helena_glowacki.jpeg",
                },
                {
                  name: "Levent Ozay",
                  role: "Developer",
                  imageSrc: "team/alumni/levent.jpg",
                },
                {
                  name: "Minh Le",
                  role: "Developer",
                  imageSrc: "members/minh_le.png",
                },
                {
                  name: "Ram Raghav Sharma",
                  role: "Developer",
                  imageSrc: "members/ram_ragahv_sharma.jpg",
                },
              ]}
              webLink="https://www.centrefordreams.ca/"
              githubLink="https://github.com/uoftblueprint/centre-for-dreams"
            />
            <ProjectsCardWModal
              name="Toronto Community Employment Services"
              description="A CRM to help manage clients and employers"
              image={"projects/tces.jpg"}
              hasOverlay={true}
              years={["2022-2024"]}
              projectDescription="We built a CRM to help manage clients and provide a platform to track job opportunities. TCES is also able to manage the contacts of the employers they work with to better connect their clients."
              nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
              team={[
                {
                  name: "Daniel Dervishi",
                  role: "Project Lead",
                  imageSrc: "members/daniel_dervishi.jpg",
                },
                {
                  name: "Jordan Janakievski",
                  role: "Project Lead",
                  imageSrc: "members/jordan_janakievski.png",
                },
                {
                  name: "Jake Gu",
                  role: "Designer",
                  imageSrc: "members/jake_gu.jpeg",
                },
                {
                  name: "Kevin Le",
                  role: "Developer",
                  imageSrc: "members/kevin_le.png",
                },
                {
                  name: "Ron Varshavsky",
                  role: "Developer",
                  imageSrc: "members/ron_varshavsky.jpg",
                },
                {
                  name: "Emily Zhou",
                  role: "Developer",
                  imageSrc: "members/emily_zhou.jpeg",
                },
                {
                  name: "Selen Tasman",
                  role: "Developer",
                  imageSrc: "team/alumni/selin.jpg",
                },
                {
                  name: "Grant Hamblin",
                  role: "Developer",
                  imageSrc: "team/alumni/grant.jpg",
                },
              ]}
              webLink="https://toronto-jobs.org/"
              githubLink="https://github.com/uoftblueprint/tces"
            />
            <ProjectsCardWModal
              name="FoodShare Toronto"
              description="Improving the UI/UX of the FoodShare website."
              image={"projects/foodshare.jpg"}
              hasOverlay={true}
              years={["2023-2024"]}
              projectDescription="We are working to improve the UI/UX of the FoodShare website."
              nonprofitDescription="FoodShare is a food justice organization, advocating for the right to food, and working to challenge the systemic barriers that keep people from accessing the food they need to thrive."
              team={[
                {
                  name: "Youssef Soliman",
                  role: "Project Lead",
                  imageSrc: "members/youssef_soliman.jpg",
                },
                {
                  name: "Marco Mai",
                  role: "Product Manager",
                  imageSrc: "members/marco_mai.jpg",
                },
                {
                  name: "Rebecca Hsiung",
                  role: "Designer",
                  imageSrc: "team/alumni/rebecca.jpg",
                },
                {
                  name: "Jeff Huang",
                  role: "Developer",
                  imageSrc: "members/jeff_huang.jpg",
                },
                {
                  name: "Sarah Xu",
                  role: "Developer",
                  imageSrc: "members/sarah_xu.jpg",
                },
                {
                  name: "Valerie Yip",
                  role: "Developer",
                  imageSrc: "members/valerie_yip.png",
                },
                {
                  name: "Caesar Saleh",
                  role: "Developer",
                  imageSrc: "team/alumni/caesar.jpg",
                },
                {
                  name: "Sataphon Obra",
                  role: "Developer",
                  imageSrc: "members/sataphon_obra.png",
                },
                {
                  name: "York Hay Ng",
                  role: "Developer",
                  imageSrc: "team/alumni/yorkhay.jpg",
                },
                {
                  name: "Min Gi Kwon",
                  role: "Developer",
                  imageSrc: "members/min_gi_kwon.jpg",
                },
              ]}
              webLink="https://foodshare.net/"
              githubLink="https://github.com/uoftblueprint/foodshare-inventory"
            />
            <ProjectsCardWModal
              name="Toronto Foundation for Student Success"
              description="A software workflow to streamline the food supply and management process."
              image={"projects/tfss.jpg"}
              hasOverlay={true}
              years={["2023-2024"]}
              projectDescription="We built a software workflow to streamline the food supply and management process for TFSS."
              nonprofitDescription="Toronto Foundation for Student Success (TFSS) provides food, medical care, emergency funds and after school programs for children in need. Their mission is to remove the barriers for children so every child is nourished and able to learn."
              team={[
                {
                  name: "Youssef Soliman",
                  role: "Project Lead",
                  imageSrc: "members/youssef_soliman.jpg",
                },
                {
                  name: "Pierre-William Lessard",
                  role: "Project Lead",
                  imageSrc: "members/pierrewilliam_lessard.jpg",
                },
                {
                  name: "Rebecca Hsiung",
                  role: "Designer",
                  imageSrc: "team/alumni/rebecca.jpg",
                },
                {
                  name: "Jeff Huang",
                  role: "Developer",
                  imageSrc: "members/jeff_huang.jpg",
                },
                {
                  name: "Sarah Xu",
                  role: "Developer",
                  imageSrc: "members/sarah_xu.jpg",
                },
                {
                  name: "Valerie Yip",
                  role: "Developer",
                  imageSrc: "members/valerie_yip.png",
                },
                {
                  name: "Caesar Saleh",
                  role: "Developer",
                  imageSrc: "team/alumni/caesar.jpg",
                },
                {
                  name: "Sataphon Obra",
                  role: "Developer",
                  imageSrc: "members/sataphon_obra.png",
                },
                {
                  name: "York Hay Ng",
                  role: "Developer",
                  imageSrc: "team/alumni/yorkhay.jpg",
                },
                {
                  name: "Min Gi Kwon",
                  role: "Developer",
                  imageSrc: "members/min_gi_kwon.jpg",
                },
              ]}
              webLink="https://tfss.ca/"
              githubLink="https://github.com/uoftblueprint/tfss"
            />
          </SimpleGrid>
          {/* ************** */}
          {/* YEAR 2022-2023 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2022-2023
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="The Period Purse"
              description="A menstrual tracking application for Android, built by youth for youth."
              image={"projects/the-period-purse.jpeg"}
              hasOverlay={true}
              years={["2021-2023"]}
              projectDescription="We are building a menstrual tracking application for Android."
              nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
              team={[
                {
                  name: "Elena Wang",
                  role: "Project Lead",
                  imageSrc: "members/elena_wang.jpg",
                },
                {
                  name: "Leo Liu",
                  role: "Project Lead",
                  imageSrc: "members/leo_liu.jpeg",
                },
                {
                  name: "Yuwei Jiang",
                  role: "Designer",
                  imageSrc: "members/yuwei_jiang.jpg",
                },
                {
                  name: "Kevin Le",
                  role: "Developer",
                  imageSrc: "members/kevin_le.png",
                },
                {
                  name: "Madeline Ahn",
                  role: "Developer",
                  imageSrc: "members/madeline_ahn.jpg",
                },
                {
                  name: "Manpreet Bhatti",
                  role: "Developer",
                  imageSrc: "members/manpreet_bhatti.jpg",
                },
                {
                  name: "Manya Mittal",
                  role: "Developer",
                  imageSrc: "members/manya_mittal.jpg",
                },
                {
                  name: "Michael Ng",
                  role: "Developer",
                  imageSrc: "members/michael_ng.jpg",
                },
                {
                  name: "Pierre-William Lessard",
                  role: "Developer",
                  imageSrc: "members/pierrewilliam_lessard.jpg",
                },
              ]}
              webLink="https://www.theperiodpurse.com/"
              githubLink="https://github.com/uoftblueprint/the-period-purse-android"
            />
            <ProjectsCardWModal
              name="Sistema Toronto"
              description="A classroom platform to engage with students and manage programs."
              image={"projects/sistema.jpg"}
              hasOverlay={true}
              years={["2022-2023"]}
              projectDescription="We are building a platform to help Sistem Torontoo engage with their students and manage their programs."
              nonprofitDescription="Sistema Toronto provides musical and intellectual opportunities to children in vulnerable communities, with the goal of transformative social change."
              team={[
                {
                  name: "Emily Yu",
                  role: "Project Lead",
                  imageSrc: "members/emily_yu.jpg",
                },
                {
                  name: "Ramy Zhang",
                  role: "Project Lead",
                  imageSrc: "members/ramy_zhang.jpg",
                },
                {
                  name: "Anita Xu",
                  role: "Designer",
                  imageSrc: "members/anita_xu.jpg",
                },
                {
                  name: "Serena Tran",
                  role: "Designer",
                  imageSrc: "members/serena_tran.jpg",
                },
                {
                  name: "Harmit Goswami",
                  role: "Developer",
                  imageSrc: "members/harmit_goswami.jpg",
                },
                {
                  name: "Sarah Xu",
                  role: "Developer",
                  imageSrc: "members/sarah_xu.jpg",
                },
                {
                  name: "Baker Jackson",
                  role: "Developer",
                  imageSrc: "members/baker_jackson.jpg",
                },
                {
                  name: "Min Gi Kwon",
                  role: "Developer",
                  imageSrc: "members/min_gi_kwon.jpg",
                },
                {
                  name: "Kurtis Law",
                  role: "Developer",
                  imageSrc: "members/kurtis_law.jpg",
                },
                {
                  name: "Helena Glowacki",
                  role: "Developer",
                  imageSrc: "members/helena_glowacki.jpeg",
                },
                {
                  name: "Azamat Khamidov",
                  role: "Developer",
                  imageSrc: "members/azamat_khamidov.jpg",
                },
              ]}
              webLink=""
              githubLink="https://github.com/uoftblueprint/sistema"
            />
            <ProjectsCardWModal
              name="Toronto Community Employment Services"
              description="A CRM to help manage clients and employers"
              image={"projects/tces.jpg"}
              hasOverlay={true}
              years={["2022-2023"]}
              projectDescription="We built a CRM to help manage clients and provide a platform to track job opportunities. TCES is also able to manage the contacts of the employers they work with to better connect their clients."
              nonprofitDescription="Toronto Community Employment Services (TCES) is a non-profit charitable organization offering no cost employment services, such as skill assessments, resume building, career counseling, workshops and more."
              team={[
                {
                  name: "Kenneth Miura",
                  role: "Project Lead",
                  imageSrc: "members/kenneth_miura.jpg",
                },
                {
                  name: "Edward Han",
                  role: "Project Lead",
                  imageSrc: "members/edward_han.jpg",
                },
                {
                  name: "Emily Gazo",
                  role: "Designer",
                  imageSrc: "members/emily_gazo.jpg",
                },
                {
                  name: "Ananmay Sharan",
                  role: "Designer",
                  imageSrc: "members/ananmay_sharan.jpg",
                },
                {
                  name: "Siddarth Dagar",
                  role: "Developer",
                  imageSrc: "members/siddarth_dagar.jpg",
                },
                {
                  name: "Annie Liu",
                  role: "Developer",
                  imageSrc: "members/annie_liu.jpg",
                },
                {
                  name: "Ganesh Asapu",
                  role: "Developer",
                  imageSrc: "members/ganesh_asapu.jpg",
                },
                {
                  name: "Jordan Janakievski",
                  role: "Developer",
                  imageSrc: "members/jordan_janakievski.png",
                },
                {
                  name: "Helen Li",
                  role: "Developer",
                  imageSrc: "members/helen_li.jpg",
                },
                {
                  name: "MJ Munkhbayar",
                  role: "Developer",
                  imageSrc: "members/mj_munkhbayar.jpg",
                },
                {
                  name: "Thardchi Ganesalingam",
                  role: "Developer",
                  imageSrc: "members/thardchi_ganesalingam.jpg",
                },
              ]}
              webLink="https://toronto-jobs.org/"
              githubLink="https://github.com/uoftblueprint/tces"
            />
          </SimpleGrid>
          {/* ************** */}
          {/* YEAR 2021-2022 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2021-2022
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="Homes for Heroes"
              description="A CRM application used to help organize homes for Canadian veterans."
              image={"projects/homes-for-heroes.jpeg"}
              hasOverlay={true}
              years={["2021-2022"]}
              projectDescription="We built a CRM and survey tool to help manage and track homes for veterans in the program."
              nonprofitDescription="Homes for Heroes looks to provide a caring and comprehensive solution to homelessness for Canadian veterans. They provide transitional housing and support services to veterans in need."
              team={[
                {
                  name: "Raymond Chen",
                  role: "Project Lead",
                  imageSrc: "members/raymond_chen.jpg",
                },
                {
                  name: "Mesbah Rafin",
                  role: "Project Lead",
                  imageSrc: "members/mesbah_rafin.jpg",
                },
                {
                  name: "Anita Xu",
                  role: "Designer",
                  imageSrc: "members/anita_xu.jpg",
                },
                {
                  name: "Yvonne Rao",
                  role: "Developer",
                  imageSrc: "members/yvonne_rao.jpg",
                },
                {
                  name: "Jeffery Zhan",
                  role: "Developer",
                  imageSrc: "members/jeffery_zhan.jpg",
                },
                {
                  name: "Siddarth Dagar",
                  role: "Developer",
                  imageSrc: "members/siddarth_dagar.jpg",
                },
                {
                  name: "Sunghyoun Kim",
                  role: "Developer",
                  imageSrc: "members/sunghyoun_kim.jpg",
                },
                {
                  name: "Youssef Soliman",
                  role: "Developer",
                  imageSrc: "members/youssef_soliman.jpg",
                },
              ]}
              webLink=""
              githubLink="https://github.com/uoftblueprint/HomesForHeroes"
            />
            <ProjectsCardWModal
              name="The Period Purse"
              description="A menstrual tracking application for iOS, built by youth for youth."
              image={"projects/the-period-purse.jpeg"}
              hasOverlay={true}
              years={["2021-2022"]}
              projectDescription="We are building a menstrual tracking application for iOS."
              nonprofitDescription="The Period Purse strives to achieve menstrual equity by providing people who menstruate with access to free menstrual products, and to reduce the stigma surrounding periods through public education and advocacy."
              team={[
                {
                  name: "Chloe Zhao",
                  role: "Project Lead",
                  imageSrc: "members/chloe_zhao.jpg",
                },
                {
                  name: "Faye Tan",
                  role: "Project Lead",
                  imageSrc: "members/faye_tan.jpg",
                },
                {
                  name: "Jing Tey",
                  role: "Designer",
                  imageSrc: "members/jing_tey.jpg",
                },
                {
                  name: "Annie Liu",
                  role: "Developer",
                  imageSrc: "members/annie_liu.jpg",
                },
                {
                  name: "Emily Yu",
                  role: "Developer",
                  imageSrc: "members/emily_yu.jpg",
                },
                {
                  name: "Roy Lin",
                  role: "Developer",
                  imageSrc: "members/roy_lin.jpg",
                },
                {
                  name: "Helen Li",
                  role: "Developer",
                  imageSrc: "members/helen_li.jpg",
                },
                {
                  name: "Edward Han",
                  role: "Developer",
                  imageSrc: "members/edward_han.jpg",
                },
                {
                  name: "Kenneth Miura",
                  role: "Developer",
                  imageSrc: "members/kenneth_miura.jpg",
                },
              ]}
              webLink="https://www.theperiodpurse.com/"
              githubLink="https://github.com/uoftblueprint/the-period-purse-ios"
            />
          </SimpleGrid>
          {/* ************** */}
          {/* YEAR 2020-2021 */}
          {/* ************** */}
          <Title order={1} className="project-years-header">
            2020-2021
          </Title>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={"xl"}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <ProjectsCardWModal
              name="Merit Award"
              description="A scholarship application system to handle multiple rounds of interviews."
              image={"projects/merit-award.jpg"}
              hasOverlay={true}
              years={["2020-2021"]}
              projectDescription="We built a scholarship application system that can handle multiple rounds of interviews."
              nonprofitDescription="Merit Award works to support and inspire low income students to pursue higher education. They have provided over $150,000 in awards each year helping around 200 students. Since their inception in 1996, they have awarded over $1.7 million to over 2,500 students."
              team={[
                {
                  name: "Rishab Luthra",
                  role: "Project Lead",
                  imageSrc: "members/rishab_luthra.jpg",
                },
                {
                  name: "Trudie Cheung",
                  role: "Product Manager",
                  imageSrc: "members/trudie_cheung.jpg",
                },
                {
                  name: "Fiza Mehta",
                  role: "Designer",
                  imageSrc: "members/fiza_mehta.jpg",
                },
                {
                  name: "Baker Jackson",
                  role: "Developer",
                  imageSrc: "members/baker_jackson.jpg",
                },
                {
                  name: "Song You",
                  role: "Developer",
                  imageSrc: "members/song_you.jpg",
                },
                {
                  name: "Alexander Shih",
                  role: "Developer",
                  imageSrc: "members/alexander_shih.jpg",
                },
                {
                  name: "Stella Cai",
                  role: "Developer",
                  imageSrc: "members/stella_cai.jpg",
                },
                {
                  name: "Sheree Zhang",
                  role: "Developer",
                  imageSrc: "members/sheree_zhang.jpg",
                },
              ]}
              webLink="https://www.meritaward.ca/"
              githubLink="https://github.com/uoftblueprint/merit-award"
            />
            <ProjectsCardWModal
              name="Shelter Movers"
              description="A system to assist in moving and tracking moves."
              image={"projects/shelter-movers.jpg"}
              hasOverlay={true}
              years={["2020-2021"]}
              projectDescription="We built a system to assist in helping track and manage moving locations and individuals."
              nonprofitDescription="Shelter Movers is a national, volunteer-powered charitable organization providing moving and storage services at no cost to women and children fleeing abuse. With guidance from local shelters and community agencies, they developed a survivor-centred, free moving service to fill a critical gap."
              team={[
                {
                  name: "Dakota McInnis",
                  role: "Project Lead",
                  imageSrc: "members/dakota_mcinnis.jpg",
                },
                {
                  name: "Michael Jia",
                  role: "Product Manager",
                  imageSrc: "members/michael_jia.jpg",
                },
                {
                  name: "Anita Xu",
                  role: "Designer",
                  imageSrc: "members/anita_xu.jpg",
                },
                {
                  name: "Tammy Taabassum",
                  role: "Designer",
                  imageSrc: "members/tammy_taabassum.jpg",
                },
                {
                  name: "Amy Peng",
                  role: "Developer",
                  imageSrc: "members/amy_peng.jpg",
                },
                {
                  name: "Chi-Hong Cheung",
                  role: "Developer",
                  imageSrc: "members/chihong_cheung.jpg",
                },
                {
                  name: "Dane Gledhill",
                  role: "Developer",
                  imageSrc: "members/dane_gledhill.jpg",
                },
                {
                  name: "Rayyana Kambris",
                  role: "Developer",
                  imageSrc: "members/rayyana_kambris.jpg",
                },
                {
                  name: "Sakina Gadriwala",
                  role: "Developer",
                  imageSrc: "members/sakina_gadriwala.jpg",
                },
                {
                  name: "Samuel Moor-Smith",
                  role: "Developer",
                  imageSrc: "members/samuel_moorsmith.jpg",
                },
              ]}
              webLink="https://www.sheltermovers.com/"
              githubLink="https://github.com/uoftblueprint/shelter-movers"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  );
}

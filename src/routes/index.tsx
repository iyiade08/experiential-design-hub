import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Skills } from "@/components/site/Skills";
import { Testimonials } from "@/components/site/Testimonials";
import { BehindTheScenes } from "@/components/site/BehindTheScenes";
import { Contact } from "@/components/site/Contact";

const title = "EXTACYOFCRYPTO — Motion Designer, Video Editor & Graphic Designer";
const description =
  "Cinematic motion design, video editing and graphic design portfolio. Visuals that capture attention and tell unforgettable stories.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Process />
        <Skills />
        <Testimonials />
        <BehindTheScenes />
        <Contact />
      </main>
    </>
  );
}

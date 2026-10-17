import { useState } from "react";
import Navbar from "../../vite-project/src/components/Navbar";
import Books from "../../vite-project/src/components/Books";
import LikedBooks from "../../vite-project/src/components/LikedBooks";
import InReadingList from "../../vite-project/src/components/inReadingList";

export default function App() {
  const [section, setSection] = useState("all"); // all | liked | reading

  return (
    <>
      <Navbar section={section} setSection={setSection} />
      <main className="container pb-5">
        {section === "all" && <Books />}
        {section === "liked" && <LikedBooks />}
        {section === "reading" && <InReadingList />}
      </main>
    </>
  );
}

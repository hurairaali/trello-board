import { FC } from "react";
import Navbar from "@/components/Navbar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const BoardPage: FC = () => {
  const navbarIcon = <EllipsisHorizontalIcon className="h-6 w-6" />;
  const navbarText = "My Trello Board";

  return (
    <main className="min-h-screen w-full">
      <Navbar icon={navbarIcon} text={navbarText} />
    </main>
  );
};

export default BoardPage;

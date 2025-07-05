"use client";
import { FC } from "react";
import Navbar from "@/components/Navbar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AddListButton from "@/components/AddListButton";
import Column from "@/components/Column";
import AddListForm from "@/components/Modal";

type List = {
  id: string;
  title: string;
};

const BoardPage: FC = () => {
  const navbarIcon = <EllipsisHorizontalIcon className="h-6 w-6" />;
  const navbarText = "My Trello Board";
  const [isAdding, setIsAdding] = useState(false);
  const [lists, setLists] = useState<List[]>([]);
  const handleAddList = (name: string) => {
    const newList = {
      id: crypto.randomUUID(),
      title: name,
    };
    setLists((prev) => [...prev, newList]);
    setIsAdding(false);
  };
  return (
    <main className="h-screen w-full flex flex-col">
      <Navbar icon={navbarIcon} text={navbarText} />

      <div className="p-3 overflow-x-auto flex gap-3 flex-grow ">
        <ol className="flex gap-3 item-start h-full">
          {lists.map((list) => (
            <>
              <li className="h-full flex-shrink-0">
                <Column key={list.id} title={list.title} />
              </li>
            </>
          ))}
        </ol>

        {isAdding ? (
          <AddListForm
            onAdd={handleAddList}
            onCancel={() => setIsAdding(false)}
          />
        ) : (
          <AddListButton onClick={() => setIsAdding(true)} />
        )}
      </div>
    </main>
  );
};

export default BoardPage;

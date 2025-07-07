"use client";
import { FC } from "react";
import Navbar from "@/components/Navbar";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AddListButton from "@/components/AddListButton";
import Column from "@/components/Column";
import AddListForm from "@/components/Modal";
import { useListStore } from "@/store/store-list";

const Board: FC = () => {
  const navbarIcon = <EllipsisHorizontalIcon className="h-6 w-6" />;
  const navbarText = "My Trello Board";
  const [isAdding, setIsAdding] = useState(false);
  const lists = useListStore((state) => state.list);
  return (
    <main className="h-screen w-full flex flex-col">
      <Navbar icon={navbarIcon} text={navbarText} />

      <div className="p-3 overflow-x-auto flex gap-3 flex-grow ">
        <ol className="flex gap-3 item-start h-full">
          {lists.map((list) => (
            <>
              <li className="h-full flex-shrink-0">
                <Column id={list.id} title={list.listName} />
              </li>
            </>
          ))}
        </ol>

        {isAdding ? (
          <AddListForm onCancel={() => setIsAdding(false)} />
        ) : (
          <AddListButton onClick={() => setIsAdding(true)} />
        )}
      </div>
    </main>
  );
};

export default Board;

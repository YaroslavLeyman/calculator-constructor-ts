import {FC} from "react";
import {nanoid} from "@reduxjs/toolkit";

import {Display} from "../components/Sidebar/Display/Display";
import {Operations} from "../components/Sidebar/Operations/Operations";
import {Keyboard} from "../components/Sidebar/Keyboard/Keyboard";
import {EqualBtn} from "../components/Sidebar/EqualBtn/EqualBtn";


export const items: ItemType[] = [
  {
    id: nanoid(),
    name: 'display',
    Component: Display
  },
  {
    id: nanoid(),
    name: 'operations',
    Component: Operations
  },
  {
    id: nanoid(),
    name: 'digital',
    Component: Keyboard
  },
  {
    id: nanoid(),
    name: 'equals',
    Component: EqualBtn
  },
]

export type ItemType = {
  id: string
  name: ItemNameType
  Component: FC<{
    inactive?: boolean,
    inputValue?: string,
    setValue?: (title: string) => void,
    setResult?: (title: string) => void,
    saveOperation?: (title: string) => void
  }>
}

export type ItemNameType = 'display' | 'operations' | 'digital' | 'equals'
import React from 'react'
import { IconFolderCode } from "@tabler/icons-react"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function Courses() {

  const courses = [
    { id: 1, name: "React Fundamentals" },
    { id: 2, name: "Advanced JavaScript" },
    { id: 3, name: "UI/UX Design" },
    { id: 4, name: "Node.js for Beginners" },
  ]

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode  />
        </EmptyMedia>
        <EmptyTitle>No Active Courses</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t started  any courses yet. Get started by enrolling in a course to enhance your skills!
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
          <Popover>
          <PopoverTrigger asChild><Button variant={"outline"} className={"text-indigo-600 hover:bg-indigo-200"}>Start course</Button></PopoverTrigger>
          <PopoverContent >
            <Command>
              <CommandInput placeholder="Search for courses..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Courses">
                  {courses.map((course) => (
                    <CommandItem
                      key={course.id}
                      onSelect={() => alert(`Selected: ${course.name}`)}
                    >
                      {course.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </EmptyContent>
    </Empty>
    
  )
}

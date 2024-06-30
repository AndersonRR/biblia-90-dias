import { TableDays, Waves } from "@/components/tableDays";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dayCustom } from "./utils/day";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  CheckCircle,
  FolderSync,
  FolderSyncIcon,
  RefreshCcw,
} from "lucide-react";

export default function Home() {
  const startDate = new Date("2024-07-01");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 mt-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-background from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A Bíblia toda em&nbsp;
          <code className="font-mono font-bold">90 dias</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/andersonrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <strong>@andersonrr</strong>
          </a>
        </div>
      </div>
      <Badge variant="outline" className="mb-5">{`Data de início: ${dayCustom
        .utc(startDate)
        .format("DD [de] MMMM [de] YYYY")}`}</Badge>
      <Link
        href="https://calendar.google.com/calendar/ical/b044b9d3ccb611971e6e20245e482cf371e893c98a3d5916d7e18f8b03d79608%40group.calendar.google.com/public/basic.ics"
        className={buttonVariants({ variant: "outline" }) + " mb-3"}
      >
        <RefreshCcw size={14} />
        &nbsp;Sincronizar com sua agenda
      </Link>
      <div className="w-full">
        <Tabs defaultValue="wave-1">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="wave-1">1-30</TabsTrigger>
            <TabsTrigger value="wave-2">31-60</TabsTrigger>
            <TabsTrigger value="wave-3">61-90</TabsTrigger>
          </TabsList>
          <TabsContent value="wave-1">
            <TableDays wave={Waves.FIRST} startDate={startDate} />
          </TabsContent>
          <TabsContent value="wave-2">
            <TableDays wave={Waves.SECOND} startDate={startDate} />
          </TabsContent>
          <TabsContent value="wave-3">
            <TableDays wave={Waves.THIRD} startDate={startDate} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}

import { promises as fs } from "fs";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableDaysRow } from "./tableDaysRow";

export enum Waves {
  "FIRST" = "First",
  "SECOND" = "Second",
  "THIRD" = "Third",
}

type DataProps = {
  dia: number;
  leitura: string;
};

type Props = {
  wave: Waves;
  startDate: Date;
};

export async function TableDays({ wave, startDate }: Props) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/cronograma.json",
    "utf8"
  );
  const data = JSON.parse(file) as DataProps[];

  const getStartAndEnd = (wave: Waves) => {
    let startAndEnd = {
      start: 0,
      end: 30,
    };

    switch (wave) {
      case Waves.SECOND:
        startAndEnd.start = 31;
        startAndEnd.end = 60;
        break;

      case Waves.THIRD:
        startAndEnd.start = 61;
        startAndEnd.end = 90;
        break;
    }

    return startAndEnd;
  };

  const startAndEnd = getStartAndEnd(wave);

  return (
    <Table>
      <TableCaption>Não desista! Vá até o fim!</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Dia</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Texto Bíblico</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data
          .filter(
            (item: DataProps) =>
              item.dia >= startAndEnd.start && item.dia <= startAndEnd.end
          )
          .map((value: DataProps, index) => (
            <TableDaysRow
              key={index}
              dia={value.dia}
              leitura={value.leitura}
              startDate={startDate}
            />
          ))}
      </TableBody>
    </Table>
  );
}

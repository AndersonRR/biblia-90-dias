"use client";

import { TableCell, TableRow } from "./ui/table";
import { dayCustom } from "@/app/utils/day";
import { Circle, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

enum StatusDay {
  "SAME" = "same",
  "AFTER" = "after",
  "BEFORE" = "before",
}

type Props = {
  dia: number;
  leitura: string;
  startDate: Date;
};

export function TableDaysRow({ dia, leitura, startDate }: Props) {
  const [status, setStatus] = useState<StatusDay>(StatusDay.AFTER);
  const startDateJs = dayCustom(startDate);
  const nowDatej = dayCustom().subtract(3, "hours");
  const nowDate = nowDatej.toDate();
  const beforeColor = "#F1F1F1";
  const currentColor = "#f6fff9";
  nowDate.setUTCHours(0);
  nowDate.setUTCMinutes(0);
  nowDate.setUTCSeconds(0);
  nowDate.setUTCMilliseconds(0);

  const currentDate = startDateJs.add(dia - 1, "day");

  const setCurrentStatus = () => {
    if (currentDate.isSame(nowDate, "day")) setStatus(StatusDay.SAME);

    if (currentDate.isBefore(nowDate, "day")) setStatus(StatusDay.BEFORE);

    if (currentDate.isAfter(nowDate, "day")) setStatus(StatusDay.AFTER);
  };

  const getStatusIcon = () => {
    const iconSize = 14;
    const icons = {
      [StatusDay.BEFORE]: <CheckCircle size={iconSize} />,
      [StatusDay.AFTER]: <Circle size={iconSize} />,
      [StatusDay.SAME]: <ArrowRight size={iconSize} />,
    };

    return icons[status];
  };

  const getStatusColor = () => {
    const colors = {
      [StatusDay.BEFORE]: beforeColor,
      [StatusDay.AFTER]: "#FFF",
      [StatusDay.SAME]: currentColor,
    };

    return colors[status];
  };

  useEffect(() => {
    setCurrentStatus();
  }, []);

  return (
    <TableRow style={{ backgroundColor: getStatusColor() }}>
      <TableCell className="font-medium text-center">
        <div className="flex gap-2 items-center">
          {getStatusIcon()}
          {dia}
        </div>
      </TableCell>
      <TableCell>{currentDate.utc().format("ddd, D [de] MMM")}</TableCell>
      <TableCell>{leitura}</TableCell>
    </TableRow>
  );
}

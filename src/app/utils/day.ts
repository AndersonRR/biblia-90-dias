import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);
dayjs.extend(updateLocale);

dayjs.updateLocale("pt-br", {
  calendar: {
    sameDay: "[Hoje às] H:mm",
    nextDay: "[Amanhã às] H:mm",
    nextWeek: "dddd [às] H:mm",
    lastDay: "[Ontem às] H:mm",
    lastWeek: "dddd [às] H:mm",
    sameElse: "DD [de] MMMM",
  },
  weekdays: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
});

dayjs.locale("pt-br");

export { dayjs as dayCustom };

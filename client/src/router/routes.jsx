import CreateNewPassConteiner from "../components/Auth/ResetPassword/CreateNewPassConteiner";

import CalendarDayConteiner from "../components/CalendarDay/CalendarDayConteiner";
import CalendarWeekConteiner from "../components/CalendarWeek/CalendarWeekConteiner";
import CalendarMonthConteiner from "../components/CalendarMonth/CalendarMonthConteiner";
import CalendarYearConteiner from "../components/CalendarYear/CalendarYearConteiner";

export const routes = [
   { path: '/', component: CalendarMonthConteiner, exect: true },
   { path: '/day', component: CalendarDayConteiner, exect: true },
   { path: '/week', component: CalendarWeekConteiner, exect: true },
   { path: '/month', component: CalendarMonthConteiner, exect: true },
   { path: '/year', component: CalendarYearConteiner, exect: true },
   { path: '/createNewPassword', component: CreateNewPassConteiner, exact: false }

]
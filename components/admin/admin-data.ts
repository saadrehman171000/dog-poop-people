import {
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  LayoutDashboard,
  LogOut,
  LucideIcon,
  Plus,
  Repeat2,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  UserCheck,
  UsersRound,
} from "lucide-react";

export type LeadStatus =
  | "New Lead"
  | "Contacted"
  | "Scheduled"
  | "Completed"
  | "Closed"
  | "Not Qualified";

export type StatCard = {
  label: string;
  value: number;
  suffix?: string;
  trend: string;
  icon: LucideIcon;
  gradient: string;
};

export type Lead = {
  customer: string;
  email: string;
  service: string;
  dogs: string;
  address: string;
  status: LeadStatus;
  submitted: string;
};

export type ActionCard = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Leads", icon: ClipboardList, active: false },
  { label: "Customers", icon: UsersRound, active: false },
  { label: "Reports", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
  { label: "Logout", icon: LogOut, active: false },
];

export const stats: StatCard[] = [
  {
    label: "Total Leads",
    value: 148,
    trend: "+18% this month",
    icon: UsersRound,
    gradient: "from-[#0F5A24]/10 via-white to-[#65C22E]/14",
  },
  {
    label: "New Leads",
    value: 24,
    trend: "+7 this week",
    icon: Sparkles,
    gradient: "from-blue-50 via-white to-[#65C22E]/12",
  },
  {
    label: "Scheduled Jobs",
    value: 36,
    trend: "+12% today",
    icon: CalendarCheck,
    gradient: "from-purple-50 via-white to-[#0F5A24]/8",
  },
  {
    label: "Completed Jobs",
    value: 91,
    trend: "+22 this week",
    icon: CheckCircle2,
    gradient: "from-emerald-50 via-white to-[#65C22E]/16",
  },
  {
    label: "Weekly Customers",
    value: 62,
    trend: "+9 active routes",
    icon: Repeat2,
    gradient: "from-[#FFF8E6] via-white to-[#65C22E]/12",
  },
  {
    label: "Conversion Rate",
    value: 68,
    suffix: "%",
    trend: "+4.8% improved",
    icon: TrendingUp,
    gradient: "from-orange-50 via-white to-[#0F5A24]/8",
  },
];

export const leads: Lead[] = [
  {
    customer: "Amanda Lewis",
    email: "amanda.lewis@example.com",
    service: "Weekly Service",
    dogs: "2",
    address: "Ashburn, VA",
    status: "New Lead",
    submitted: "9:18 AM",
  },
  {
    customer: "Brian Carter",
    email: "brian.carter@example.com",
    service: "One Time Service",
    dogs: "1",
    address: "Leesburg, VA",
    status: "Contacted",
    submitted: "Yesterday",
  },
  {
    customer: "Priya Shah",
    email: "priya.shah@example.com",
    service: "Weekly Service",
    dogs: "3",
    address: "Sterling, VA",
    status: "Scheduled",
    submitted: "Jun 27",
  },
  {
    customer: "Marcus Hill",
    email: "marcus.hill@example.com",
    service: "Weekly Service",
    dogs: "1",
    address: "Purcellville, VA",
    status: "Completed",
    submitted: "Jun 26",
  },
  {
    customer: "Elaine Foster",
    email: "elaine.foster@example.com",
    service: "One Time Service",
    dogs: "5+",
    address: "Round Hill, VA",
    status: "Not Qualified",
    submitted: "Jun 25",
  },
  {
    customer: "Nick Anderson",
    email: "nick.anderson@example.com",
    service: "Weekly Service",
    dogs: "2",
    address: "Hamilton, VA",
    status: "Closed",
    submitted: "Jun 24",
  },
];

export const quickActions: ActionCard[] = [
  {
    title: "Add Lead",
    detail: "Create a new service request",
    icon: Plus,
  },
  {
    title: "Review New Requests",
    detail: "24 requests awaiting review",
    icon: Search,
  },
  {
    title: "View Weekly Customers",
    detail: "Manage recurring service",
    icon: UserCheck,
  },
  {
    title: "Export Leads",
    detail: "Download this month's list",
    icon: Download,
  },
];

export const tasks = [
  { label: "Review new requests", done: false },
  { label: "Call scheduled customers", done: true },
  { label: "Send invoices", done: false },
  { label: "Weekly route planning", done: false },
];

export const activity = [
  {
    title: "New customer submitted service request",
    detail: "Amanda Lewis requested weekly cleanup in Ashburn.",
    time: "12 minutes ago",
    icon: FileText,
  },
  {
    title: "Lead status updated",
    detail: "Priya Shah moved from Contacted to Scheduled.",
    time: "1 hour ago",
    icon: Gauge,
  },
  {
    title: "Weekly customer added",
    detail: "Marcus Hill was added to the Thursday route.",
    time: "3 hours ago",
    icon: Repeat2,
  },
  {
    title: "Contact form received",
    detail: "A Leesburg homeowner asked about gate access.",
    time: "Yesterday",
    icon: Bell,
  },
];

import {
  Banknote,
  Bot,
  Boxes,
  Building2,
  Cloud,
  CreditCard,
  Cpu,
  GraduationCap,
  Hotel,
  LayoutDashboard,
  LineChart,
  type LucideIcon,
  Mic,
  Network,
  QrCode,
  ScanFace,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Store,
  Users,
  UtensilsCrossed,
  Warehouse,
  Workflow,
} from "lucide-react";

/**
 * Every value in this file is taken from the Bytherix "One For All Management
 * System" source document. Nothing here is invented: planned or conceptual
 * capabilities are phrased as designed / can / potential, matching the source.
 */

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ModuleGroup {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface RoleLevel {
  role: string;
  who: string;
  responsibilities: string[];
}

export interface PackageTier {
  name: string;
  audience: string;
  features: string[];
}

export interface ArchitectureLayer {
  name: string;
  detail: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const productName = "One For All Management System";
export const productTagline = "One Account. Multiple Businesses. One Management Platform.";
export const heroHeadline = "One platform for every business you run";
export const heroSummary =
  "A cloud-based, multi-business management platform being developed by Bytherix Technology to bring sales, inventory, employees, customers, finance, operations and reporting for several businesses into a single secure dashboard.";
export const developmentNote =
  "One For All is under active development. The capabilities described here reflect the platform's design and roadmap, and exact features and limits can evolve as the platform develops.";

export const problems: { title: string; description: string }[] = [
  {
    title: "Higher costs",
    description:
      "Purchasing and maintaining multiple software solutions can become expensive, especially for small and medium-sized businesses.",
  },
  {
    title: "Data silos",
    description:
      "Information becomes distributed across different platforms, making it difficult to get a complete picture of the business.",
  },
  {
    title: "Complex management",
    description: "Business owners may need to log into several applications every day.",
  },
  {
    title: "Difficult reporting",
    description:
      "Combining information from multiple systems can make business analysis slower and more complicated.",
  },
  {
    title: "Limited scalability",
    description:
      "Opening a new branch or starting another business may require purchasing and configuring additional software.",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Multi-business management",
    description:
      "An owner of a supermarket, restaurant, hotel and training institute can reach them all through one account, switching between businesses while data separation and access control are maintained.",
    icon: Building2,
  },
  {
    title: "Multi-branch operations",
    description:
      "Designed to support head offices, branch offices, retail outlets, warehouses and regional locations, monitored from a centralized dashboard.",
    icon: Network,
  },
  {
    title: "Role-based access control",
    description:
      "A hierarchical permission model separates responsibilities, so employees only access the information and functions their role requires.",
    icon: ShieldCheck,
  },
  {
    title: "Unified operations",
    description:
      "Business, inventory, sales and billing, customers, employees, finance, HR, reporting, notifications and automation in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Industry-specific modules",
    description:
      "A common management foundation with specialised modules added on top where an industry needs them.",
    icon: Boxes,
  },
  {
    title: "Cloud-based architecture",
    description:
      "Access from different locations, centralized data, easier updates, automated backups and scalability with reduced infrastructure requirements.",
    icon: Cloud,
  },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    name: "Experience layer",
    detail: "Supported web and mobile applications for owners, managers and staff.",
  },
  {
    name: "Business & industry modules",
    detail:
      "Hotel, hospital, school and restaurant modules layered on the shared management foundation.",
  },
  {
    name: "Core management layer",
    detail: "Business, inventory, finance, HR and CRM modules shared by every supported industry.",
  },
  {
    name: "Access & security layer",
    detail:
      "Authentication, role-based authorization, access control, monitoring and auditability.",
  },
  {
    name: "Cloud data & infrastructure",
    detail: "Secure data storage, backup, disaster recovery and scalable cloud deployment.",
  },
];

export const ecosystemNodes = [
  "Business",
  "Inventory",
  "Finance",
  "Human resources",
  "Customers",
  "Reports",
];

export const coreModules: ModuleGroup[] = [
  {
    title: "Business management",
    icon: Building2,
    items: [
      "Business profiles",
      "Multiple businesses",
      "Branch management",
      "Organization settings",
      "Business configuration",
      "User permissions",
    ],
  },
  {
    title: "Inventory management",
    icon: Warehouse,
    items: [
      "Product management",
      "Categories",
      "Suppliers",
      "Barcode support",
      "Purchase orders",
      "Stock tracking",
      "Inventory reports",
    ],
  },
  {
    title: "Finance management",
    icon: Banknote,
    items: [
      "Income tracking",
      "Expense management",
      "Profit and loss",
      "Cash flow",
      "Financial reports",
      "Accounting information",
    ],
  },
  {
    title: "Human resources",
    icon: Users,
    items: [
      "Employee profiles",
      "Attendance",
      "Leave",
      "Payroll",
      "Performance",
      "Employee records",
    ],
  },
  {
    title: "Customer relationships",
    icon: LineChart,
    items: [
      "Customer profiles",
      "Purchase history",
      "Customer feedback",
      "Loyalty programs",
      "Marketing activities",
      "Customer communication",
    ],
  },
];

export const industryModules: ModuleGroup[] = [
  {
    title: "Hotel management",
    icon: Hotel,
    items: [
      "Room management",
      "Reservation",
      "Guest management",
      "Booking",
      "Housekeeping",
      "Restaurant integration",
      "Billing",
    ],
  },
  {
    title: "Hospital management",
    icon: Stethoscope,
    items: [
      "Patient records",
      "Doctor management",
      "Appointments",
      "Laboratory",
      "Pharmacy",
      "Billing",
    ],
  },
  {
    title: "School management",
    icon: GraduationCap,
    items: [
      "Students",
      "Teachers",
      "Attendance",
      "Examinations",
      "Results",
      "Fees",
      "Academic records",
    ],
  },
  {
    title: "Restaurant management",
    icon: UtensilsCrossed,
    items: ["POS", "Menu", "Kitchen orders", "Tables", "Billing", "Online orders", "Inventory"],
  },
];

export const roles: RoleLevel[] = [
  {
    role: "God Admin",
    who: "Bytherix",
    responsibilities: [
      "Platform management",
      "User verification",
      "Security monitoring",
      "Subscription and package management",
      "System updates and configuration",
      "Technical support",
    ],
  },
  {
    role: "Super Admin",
    who: "Business owner",
    responsibilities: [
      "Creating businesses",
      "Managing branches and employees",
      "Viewing financial information",
      "Monitoring inventory",
      "Managing customers and subscriptions",
      "Accessing business reports",
    ],
  },
  {
    role: "Admin",
    who: "Manager",
    responsibilities: [
      "Staff",
      "Attendance",
      "Inventory",
      "Billing",
      "Daily operations",
      "Operational reports",
    ],
  },
  {
    role: "Staff",
    who: "Role-based permissions",
    responsibilities: [
      "Cashier, receptionist, teacher",
      "Doctor, nurse",
      "Waiter, chef",
      "Accountant, storekeeper",
      "Security staff",
    ],
  },
];

export const packages: PackageTier[] = [
  {
    name: "Normal",
    audience: "Businesses managing a single organization",
    features: [
      "One business",
      "Inventory management",
      "Billing",
      "Customer management",
      "Employee management",
      "Reports and dashboard",
      "Cloud backup",
    ],
  },
  {
    name: "Super",
    audience: "Owners managing approximately 2–3 businesses",
    features: [
      "Multi-business dashboard",
      "Branch management",
      "Shared employee management",
      "Advanced reporting",
      "Business switching",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    audience: "Larger organizations and enterprise users",
    features: [
      "Multiple businesses and branches",
      "AI-powered reports",
      "Workflow automation",
      "CRM, HR and payroll",
      "API integration",
      "Advanced analytics",
      "Dedicated support",
    ],
  },
];

export const businessCategories = [
  { label: "Retail stores & supermarkets", icon: Store },
  { label: "Hotels, resorts & cafes", icon: Hotel },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Hospitals, clinics & pharmacies", icon: Stethoscope },
  { label: "Schools, colleges & training institutes", icon: GraduationCap },
  { label: "Gyms & salons", icon: Users },
  { label: "Warehouses & logistics", icon: Warehouse },
  { label: "Manufacturing, cooperatives & NGOs", icon: Cpu },
];

export const roadmap: RoadmapItem[] = [
  {
    title: "AI business assistant",
    description:
      "An AI assistant could help owners understand operations in natural language, answering questions such as “How much did my restaurant sell this month?”.",
    icon: Bot,
  },
  {
    title: "AI sales prediction",
    description:
      "Machine learning models could analyse historical sales data and help predict future demand.",
    icon: LineChart,
  },
  {
    title: "Smart inventory forecasting",
    description:
      "The system could identify products that may need to be reordered based on sales patterns.",
    icon: Boxes,
  },
  {
    title: "Face recognition attendance",
    description:
      "Biometric attendance could be adopted where it is legally and operationally appropriate.",
    icon: ScanFace,
  },
  {
    title: "QR ordering",
    description: "Restaurants could offer QR-based ordering experiences for customers.",
    icon: QrCode,
  },
  {
    title: "E-commerce integration",
    description: "Businesses could connect physical operations with online stores.",
    icon: ShoppingCart,
  },
  {
    title: "IoT integration",
    description:
      "Connected devices could provide real-time operational data for supported industries.",
    icon: Workflow,
  },
  {
    title: "Voice dashboard",
    description: "Owners could interact with their management dashboard using voice commands.",
    icon: Mic,
  },
];

export const securityPrinciples = [
  "Authentication",
  "Role-based authorization",
  "Secure data storage",
  "Access control",
  "Backup",
  "Monitoring",
  "Auditability",
  "Disaster recovery",
];

export const packageIcon = CreditCard;
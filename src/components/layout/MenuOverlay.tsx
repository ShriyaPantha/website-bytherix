// import { useState } from "react";
// import { motion, AnimatePresence, type Variants } from "framer-motion";
// import { ChevronDown, ArrowRight, X, Search, Heart, Bell, UserRound } from "lucide-react";

// import logo from "../../assets/logo.png";
// // import demonHunterLogo from "../../../public/demon hunter.png";

// interface MenuOverlayProps {
//   open: boolean;
//   onClose: () => void;
// }

// const MOBILE_MENU = [
//   { label: "Company", hasChildren: true, children: ["About Us", "Our Team", "Our Story", "Why Bytherix"] },
//   { label: "Services", hasChildren: true, children: ["Web Development", "App Development", "Software Solutions", "AI & Machine Learning", "UI/UX Design"] },
//   { label: "Products", hasChildren: true, children: ["Digital Products", "Business Solutions", "Custom Software", "Enterprise Solutions"] },
//   { label: "Portfolios", hasChildren: false, children: [] },
//   { label: "Shop", hasChildren: true, children: ["All Products", "Digital Products", "Courses", "Featured Courses"] },
//   { label: "Contact", hasChildren: false, children: [] },
// ];

// const panelVariants: Variants = {
//   hidden: { x: "-100%", opacity: 0.9 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
//   exit: { x: "-100%", opacity: 0.9, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
// };

// const backdropVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.28 } },
//   exit: { opacity: 0, transition: { duration: 0.22 } },
// };

// const actionVariants: Variants = {
//   hidden: { opacity: 0, y: -12 },
//   visible: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.16 + index * 0.07, duration: 0.32, ease: [0.22, 1, 0.36, 1] } }),
// };

// const linkVariants: Variants = {
//   hidden: { opacity: 0, x: -16 },
//   visible: (index: number) => ({ opacity: 1, x: 0, transition: { delay: 0.28 + index * 0.055, duration: 0.3, ease: [0.22, 1, 0.36, 1] } }),
// };

// const childVariants: Variants = {
//   hidden: { height: 0, opacity: 0 },
//   visible: { height: "auto", opacity: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
//   exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
// };

// type ActionType = "wishlist" | "demon" | "notifications" | "profile";

// const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
//   const [expandedItem, setExpandedItem] = useState<string | null>(null);
//   const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);

//   const handleClose = () => {
//     setExpandedItem(null);
//     setSelectedAction(null);
//     onClose();
//   };

//   const handleActionClick = (action: ActionType) => {
//     setSelectedAction((previous) => previous === action ? null : action);
//   };

//   const actionClass = (action: ActionType) => {
//     const selected = selectedAction === action;
//     return `flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white/[0.03] transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/40 ${selected ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]" : "border-white/20 text-white/85"} hover:border-[#00AEEF] hover:text-[#00AEEF]`;
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={handleClose} className="fixed inset-0 z-[190] bg-black/65 backdrop-blur-[2px] lg:hidden" />

//           <motion.aside variants={panelVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-y-0 left-0 z-[200] flex w-[88%] max-w-[410px] flex-col overflow-hidden border-r border-white/10 bg-[#080F29] shadow-[18px_0_50px_rgba(0,0,0,0.5)] lg:hidden">
//             <div className="flex h-[78px] shrink-0 items-center justify-between border-b border-white/10 px-5">
//               <a href="/" onClick={handleClose} className="flex items-center gap-2.5">
//                 <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_8px_rgba(255,255,255,0.04)]">
//                   <img src={logo} alt="Bytherix Technology" className="h-full w-full scale-125 object-cover" />
//                 </div>

//                 <div className="flex flex-col leading-none">
//                   <span className="font-['Inter'] text-base font-bold tracking-wide">
//                     <span className="text-[#00AEEF]">BY</span>
//                     <span className="text-[#20C997]">THE</span>
//                     <span className="text-[#FF3B30]">RIX</span>
//                   </span>
//                   <span className="mt-1 font-['Inter'] text-[7px] font-medium uppercase tracking-[0.18em] text-white/70">Technology</span>
//                 </div>
//               </a>

//               <button type="button" onClick={handleClose} aria-label="Close menu" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] active:scale-95">
//                 <X size={17} strokeWidth={1.8} />
//               </button>
//             </div>

//             <div className="shrink-0 border-b border-white/10 px-5 py-4">
//               <motion.div custom={0} variants={actionVariants} initial="hidden" animate="visible" className="mb-4">
//                 <div className="flex h-11 w-full items-center rounded-full border border-white/25 bg-white/[0.04] pl-4 pr-1 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.055] focus-within:border-[#00AEEF] focus-within:bg-[#00AEEF]/[0.04]">
//                   <Search size={16} strokeWidth={1.8} className="shrink-0 text-white/55" />
//                   <input type="text" placeholder="Search anything..." aria-label="Search" className="min-w-0 flex-1 bg-transparent px-2 font-['Inter'] text-xs text-white outline-none placeholder:text-white/40" />
//                   <button type="button" aria-label="Search" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29] transition-transform duration-200 hover:scale-105 active:scale-95">
//                     <Search size={14} strokeWidth={2.5} />
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div custom={1} variants={actionVariants} initial="hidden" animate="visible" className="flex items-center justify-between gap-2">
//                 <button type="button" aria-label="Wishlist" aria-pressed={selectedAction === "wishlist"} onClick={() => handleActionClick("wishlist")} className={actionClass("wishlist")}>
//                   <Heart size={20} strokeWidth={1.7} />
//                 </button>

//                 <button type="button" aria-label="Demon Hunter" aria-pressed={selectedAction === "demon"} onClick={() => handleActionClick("demon")} className={`group flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-black transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/40 ${selectedAction === "demon" ? "border-[#00AEEF] shadow-[0_0_14px_rgba(0,174,239,0.18)]" : "border-white/20"} hover:border-[#00AEEF]`}>
//                   <img src="/demon hunter.png" alt="Demon Hunter" className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" />
//                 </button>

//                 <button type="button" aria-label="Notifications" aria-pressed={selectedAction === "notifications"} onClick={() => handleActionClick("notifications")} className={`relative ${actionClass("notifications")}`}>
//                   <Bell size={20} strokeWidth={1.7} />
//                   <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF6575] ring-2 ring-[#080F29]" />
//                 </button>

//                 <button type="button" aria-label="Profile" aria-pressed={selectedAction === "profile"} onClick={() => handleActionClick("profile")} className={actionClass("profile")}>
//                   <UserRound size={19} strokeWidth={1.7} />
//                 </button>
//               </motion.div>
//             </div>

//             <nav className="flex-1 overflow-y-auto px-5 py-4 scrollbar-none">
//               {MOBILE_MENU.map((item, index) => {
//                 const isExpanded = expandedItem === item.label;

//                 return (
//                   <motion.div key={item.label} custom={index} variants={linkVariants} initial="hidden" animate="visible" className="border-b border-white/[0.07]">
//                     {item.hasChildren ? (
//                       <button type="button" onClick={() => setExpandedItem(isExpanded ? null : item.label)} className={`group flex w-full items-center justify-between py-4 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.08em] transition-all duration-200 ${isExpanded ? "text-[#00AEEF]" : "text-white/85"} hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none`}>
//                         <span>{item.label}</span>
//                         <ChevronDown size={14} strokeWidth={1.8} className={`transition-all duration-200 ${isExpanded ? "rotate-180 text-[#00AEEF]" : "text-white/45"} group-hover:text-[#00AEEF]`} />
//                       </button>
//                     ) : (
//                       <a href={`#${item.label.toLowerCase()}`} onClick={handleClose} className="group flex w-full items-center justify-between py-4 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.08em] text-white/85 transition-all duration-200 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none">
//                         {item.label}
//                         <ArrowRight size={14} strokeWidth={1.7} className="translate-x-[-6px] text-[#00AEEF] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
//                       </a>
//                     )}

//                     <AnimatePresence initial={false}>
//                       {item.hasChildren && isExpanded && (
//                         <motion.div variants={childVariants} initial="hidden" animate="visible" exit="exit" className="overflow-hidden">
//                           <div className="mb-3 ml-2 border-l border-[#00AEEF]/30 pl-4">
//                             {item.children.map((child) => (
//                               <a key={child} href="#" onClick={handleClose} className="group flex items-center justify-between py-2.5 font-['Inter'] text-[10px] font-medium text-white/55 transition-all duration-200 hover:pl-1 hover:text-[#20C997]">
//                                 {child}
//                                 <ArrowRight size={12} strokeWidth={1.7} className="translate-x-[-4px] text-[#20C997] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 );
//               })}
//             </nav>

//             <div className="shrink-0 border-t border-white/10 px-5 py-5">
//               <div className="flex items-center gap-2">
//                 <a href="#contact" onClick={handleClose} className="flex-1 rounded-full bg-[#3154C4] px-5 py-3 text-center font-['Inter'] text-xs font-bold text-white transition-all duration-200 hover:bg-[#3B5FD0] hover:shadow-[0_6px_16px_rgba(49,84,196,0.22)] active:scale-[0.98]">
//                   Get a Quote
//                 </a>

//                 <a href="#contact" onClick={handleClose} aria-label="Contact" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/75 transition-all duration-200 hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] active:scale-95">
//                   <ArrowRight size={16} strokeWidth={1.8} />
//                 </a>
//               </div>
//             </div>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MenuOverlay;
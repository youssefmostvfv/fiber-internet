// Global Dynamic Layout Component (Navbar & Floating Stack)

window.toggleTheme = function toggleTheme() {
  const htmlTag = document.documentElement;
  if (htmlTag.classList.contains("dark")) {
    htmlTag.classList.remove("dark");
    localStorage.setItem("theme", "light");
    console.log("Switched to Light Mode");
  } else {
    htmlTag.classList.add("dark");
    localStorage.setItem("theme", "dark");
    console.log("Switched to Dark Mode");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  let basePath = "";
  if (
    window.location.pathname.includes("/packages/") ||
    window.location.pathname.includes("/companies/stc") ||
    window.location.pathname.includes("/companies/salam") ||
    window.location.pathname.includes("/companies/mobily") ||
    window.location.pathname.includes("/companies/zain")
  ) {
    basePath = "../../";
  } else if (
    window.location.pathname.includes("/blog/") ||
    window.location.pathname.includes("/companies/") ||
    window.location.pathname.includes("/contact/") ||
    window.location.pathname.includes("/order/") ||
    window.location.pathname.includes("/reviews/") ||
    window.location.pathname.includes("/speedtest/")
  ) {
    basePath = "../";
  }

  // Render Navbar Header
  const headerContainer = document.getElementById("global-header");
  if (headerContainer) {
    headerContainer.innerHTML = `
        <header class="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200/80 dark:border-slate-800/80 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    
                    <!-- Logo -->
                    <a href="${basePath}index.html" class="flex items-center gap-3 group cursor-pointer">
                        <img src="${basePath}assets/images/fiber.webp" alt="Fiber 5G" class="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300">
                        <div class="flex flex-col">
                            <span class="text-xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-300 bg-clip-text text-transparent">
                                Fiber 5G
                            </span>
                            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-wider -mt-1 uppercase">
                                موزع معتمد بالمملكة العربية السعودية
                            </span>
                        </div>
                    </a>

                    <!-- Desktop Navigation Menu -->
                    <nav class="hidden md:flex items-center gap-1 lg:gap-2">
                        
                        <!-- الرئيسية -->
                        <a href="${basePath}index.html" class="px-3.5 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center gap-2">
                            <i class="fa-solid fa-house text-xs"></i>
                            الرئيسية
                        </a>

                        <!-- الشركات (Dropdown) -->
                        <div class="relative group">
                            <button type="button" class="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors flex items-center gap-1.5 cursor-pointer">
                                <i class="fa-solid fa-building-shield text-gray-400 text-xs"></i>
                                الشركات
                                <i class="fa-solid fa-chevron-down text-[10px] text-gray-400 group-hover:rotate-180 transition-transform duration-300"></i>
                            </button>
                            
                            <!-- Dropdown Menu -->
                            <div class="absolute right-0 mt-1 w-56 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 p-2">
                                <a href="${basePath}companies/stc/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/40 text-gray-700 dark:text-slate-200 hover:text-stc-primary dark:hover:text-purple-400 transition-colors cursor-pointer group/item">
                                    <span class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-stc-primary dark:text-purple-300 font-extrabold text-xs">STC</span>
                                    <div>
                                        <div class="text-xs font-bold">إس تي سي (STC)</div>
                                        <div class="text-[10px] text-gray-400 dark:text-slate-400">فايبر & 5G بيتي</div>
                                    </div>
                                </a>
                                <a href="${basePath}companies/salam/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-gray-700 dark:text-slate-200 hover:text-salam-primary dark:hover:text-emerald-400 transition-colors cursor-pointer group/item">
                                    <span class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-salam-primary dark:text-emerald-300 font-extrabold text-xs">Salam</span>
                                    <div>
                                        <div class="text-xs font-bold">سلام (Salam)</div>
                                        <div class="text-[10px] text-gray-400 dark:text-slate-400">ألياف سلام الفائقة</div>
                                    </div>
                                </a>
                                <a href="${basePath}companies/mobily/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/40 text-gray-700 dark:text-slate-200 hover:text-mobily-primary dark:hover:text-sky-400 transition-colors cursor-pointer group/item">
                                    <span class="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-mobily-primary dark:text-sky-300 font-extrabold text-xs">Mobily</span>
                                    <div>
                                        <div class="text-xs font-bold">موبايلي (Mobily)</div>
                                        <div class="text-[10px] text-gray-400 dark:text-slate-400">فايبر وإير فايبر</div>
                                    </div>
                                </a>
                                <a href="${basePath}companies/zain/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/40 text-gray-700 dark:text-slate-200 hover:text-zain-primary dark:hover:text-fuchsia-400 transition-colors cursor-pointer group/item">
                                    <span class="w-8 h-8 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center text-zain-primary dark:text-fuchsia-300 font-extrabold text-xs">Zain</span>
                                    <div>
                                        <div class="text-xs font-bold">زين (Zain)</div>
                                        <div class="text-[10px] text-gray-400 dark:text-slate-400">فايبر و 5G منزلي</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!-- الباقات -->
                        <a href="${basePath}index.html#packages" class="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center gap-1.5">
                            <i class="fa-solid fa-cubes text-gray-400 text-xs"></i>
                            الباقات
                        </a>

                        <!-- آراء العملاء -->
                        <a href="${basePath}reviews/index.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center gap-1.5">
                            <i class="fa-solid fa-comments text-amber-500 text-xs"></i>
                            آراء العملاء
                        </a>

                        <!-- المدونة -->
                        <a href="${basePath}blog/index.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center gap-1.5">
                            <i class="fa-solid fa-blog text-gray-400 text-xs"></i>
                            المدونة
                        </a>

                        <!-- قياس السرعة -->
                        <a href="${basePath}speedtest/index.html" class="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer flex items-center gap-1.5">
                            <i class="fa-solid fa-gauge-high text-sky-400 text-xs"></i>
                            فحص السرعة
                        </a>
                    </nav>

                    <!-- Actions: Theme Toggle & Order CTA -->
                    <div class="flex items-center gap-3">
                        
                        <!-- Dark/Light Theme Toggle Button -->
                        <button id="theme-toggle" onclick="window.toggleTheme()" type="button" aria-label="تبديل الثيم" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-gray-200/50 dark:border-slate-700/50">
                            <i class="fa-solid fa-sun text-sky-400 hidden dark:block text-sm pointer-events-none"></i>
                            <i class="fa-solid fa-moon text-blue-600 block dark:hidden text-sm pointer-events-none"></i>
                        </button>

                        <!-- تقديم طلب CTA Button -->
                        <a href="${basePath}order/index.html" class="hidden sm:flex relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 items-center gap-2 cursor-pointer">
                            <i class="fa-solid fa-paper-plane text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
                            <span>تقديم طلب</span>
                        </a>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-toggle" type="button" class="md:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 flex items-center justify-center cursor-pointer">
                            <i class="fa-solid fa-bars text-lg"></i>
                        </button>
                    </div>

                </div>
            </div>

            <!-- Mobile Drawer Navigation (Luxury Responsive Menu) -->
            <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl transition-all duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div class="px-5 py-6 space-y-6 max-w-lg mx-auto text-right">
                    
                    <!-- Main Quick Links Section -->
                    <div class="space-y-2">
                        <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 px-1">القائمة الرئيسية</div>
                        
                        <a href="${basePath}index.html" class="flex items-center justify-between p-3 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-sky-300 font-bold transition-all">
                            <div class="flex items-center gap-3">
                                <div class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-md">
                                    <i class="fa-solid fa-house"></i>
                                </div>
                                <span class="text-sm">الرئيسية</span>
                            </div>
                            <i class="fa-solid fa-chevron-left text-xs opacity-60"></i>
                        </a>

                        <div class="grid grid-cols-2 gap-2.5 pt-1">
                            <a href="${basePath}index.html#packages" class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-bold hover:border-blue-500/40 transition-all">
                                <div class="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 dark:text-sky-400 flex items-center justify-center text-xs">
                                    <i class="fa-solid fa-network-wired"></i>
                                </div>
                                <span class="text-xs">باقات الفايبر</span>
                            </a>

                            <a href="${basePath}index.html#packages" class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-bold hover:border-emerald-500/40 transition-all">
                                <div class="w-8 h-8 rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">
                                    <i class="fa-solid fa-tower-cell"></i>
                                </div>
                                <span class="text-xs">باقات الـ 5G</span>
                            </a>
                        </div>
                    </div>

                    <!-- Companies Grid -->
                    <div class="space-y-2">
                        <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 px-1">المشغلين المعتمدين بالسعودية</div>
                        <div class="grid grid-cols-2 gap-2.5">
                            <a href="${basePath}companies/stc/index.html" class="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 hover:scale-[1.02] transition-all">
                                <div class="w-8 h-8 rounded-xl bg-purple-700 text-white font-extrabold text-[10px] flex items-center justify-center shadow-sm">STC</div>
                                <div>
                                    <div class="text-xs font-black text-slate-900 dark:text-white">إس تي سي</div>
                                    <div class="text-[10px] text-purple-700 dark:text-purple-300 font-semibold">فايبر & 5G</div>
                                </div>
                            </a>

                            <a href="${basePath}companies/salam/index.html" class="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 hover:scale-[1.02] transition-all">
                                <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-sm">سلام</div>
                                <div>
                                    <div class="text-xs font-black text-slate-900 dark:text-white">Salam</div>
                                    <div class="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold">ألياف فائقة</div>
                                </div>
                            </a>

                            <a href="${basePath}companies/mobily/index.html" class="flex items-center gap-3 p-3 rounded-2xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-900/40 hover:scale-[1.02] transition-all">
                                <div class="w-8 h-8 rounded-xl bg-sky-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-sm">موبايلي</div>
                                <div>
                                    <div class="text-xs font-black text-slate-900 dark:text-white">Mobily</div>
                                    <div class="text-[10px] text-sky-700 dark:text-sky-300 font-semibold">ألياف & إير</div>
                                </div>
                            </a>

                            <a href="${basePath}companies/zain/index.html" class="flex items-center gap-3 p-3 rounded-2xl bg-fuchsia-50/80 dark:bg-fuchsia-950/30 border border-fuchsia-200/60 dark:border-fuchsia-900/40 hover:scale-[1.02] transition-all">
                                <div class="w-8 h-8 rounded-xl bg-fuchsia-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-sm">زين</div>
                                <div>
                                    <div class="text-xs font-black text-slate-900 dark:text-white">Zain</div>
                                    <div class="text-[10px] text-fuchsia-700 dark:text-fuchsia-300 font-semibold">فايبر & 5G</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Services & Tools Links -->
                    <div class="space-y-2 pt-1">
                        <div class="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 px-1">الخدمات والأدوات</div>
                        
                        <a href="${basePath}reviews/index.html" class="flex items-center justify-between p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/30 text-slate-800 dark:text-slate-200 font-bold transition-all">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs">
                                    <i class="fa-solid fa-comments"></i>
                                </div>
                                <span class="text-xs">آراء وتقييمات العملاء</span>
                            </div>
                            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-black">جديد</span>
                        </a>

                        <a href="${basePath}speedtest/index.html" class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-bold transition-all">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xs">
                                    <i class="fa-solid fa-gauge-high"></i>
                                </div>
                                <span class="text-xs">فحص سرعة الإنترنت</span>
                            </div>
                            <i class="fa-solid fa-chevron-left text-xs opacity-40"></i>
                        </a>

                        <a href="${basePath}blog/index.html" class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-bold transition-all">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs">
                                    <i class="fa-solid fa-blog"></i>
                                </div>
                                <span class="text-xs">مدونة الاتصالات</span>
                            </div>
                            <i class="fa-solid fa-chevron-left text-xs opacity-40"></i>
                        </a>
                    </div>

                    <!-- Quick CTAs & WhatsApp Bar -->
                    <div class="pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5">
                        <a href="${basePath}order/index.html" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 text-white font-black text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 cursor-pointer">
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                            <span>تقديم طلب تأسيس جديد</span>
                        </a>

                        <div class="grid grid-cols-2 gap-2">
                            <a href="https://wa.me/966530810532" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                                <span>واتساب المندوب</span>
                            </a>
                            <a href="tel:0530810532" class="py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 shadow-sm">
                                <i class="fa-solid fa-phone text-xs text-sky-400"></i>
                                <span>0530810532</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>`;
  }

  // Render Floating Action Stack
  const floatingContainer = document.getElementById("global-floating-stack");
  if (floatingContainer) {
    floatingContainer.innerHTML = `
        <div class="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
            <!-- زر اتصال مباشر -->
            <a href="tel:0530810532" aria-label="اتصال هاتفي" class="relative group w-12 h-12 rounded-full bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 text-blue-400 hover:bg-blue-600 hover:text-white shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer">
                <i class="fa-solid fa-phone-volume text-sm group-hover:scale-110 transition-transform"></i>
                <span class="absolute left-full ml-3 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl border border-slate-700 pointer-events-none">
                    اتصال هاتفي
                </span>
            </a>

            <!-- زر المحادثة الفورية عبر الواتساب -->
            <a href="https://wa.me/966530810532?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3%20%D8%A7%D9%84%D9%81%D8%A7%D9%8A%D8%A8%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85" target="_blank" rel="noopener noreferrer" aria-label="واتساب" class="relative group w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer">
                <i class="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                <span class="absolute left-full ml-3 whitespace-nowrap bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl border border-slate-700 pointer-events-none">
                    واتساب الفني
                </span>
            </a>

            <!-- زر تقديم طلب سريع عائم -->
            <a href="${basePath}order/index.html" aria-label="تقديم طلب" class="relative group flex items-center justify-center cursor-pointer">
                <span id="floating-order-badge" class="absolute left-full ml-3 whitespace-nowrap bg-blue-600 dark:bg-sky-500 text-white text-[12px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30 opacity-0 transform -translate-x-2 transition-all duration-500 pointer-events-none flex items-center gap-1.5">
                    <span>تقديم طلب</span>
                    <i class="fa-solid fa-arrow-left text-[10px]"></i>
                </span>

                <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 text-white shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 border border-blue-400/30">
                    <i class="fa-solid fa-paper-plane text-sm"></i>
                </div>
            </a>
        </div>`;
  }

  // Render Dynamic Global Footer Component
  let footerContainer = document.getElementById("global-footer");
  if (!footerContainer) {
    footerContainer = document.createElement("footer");
    footerContainer.id = "global-footer";
    document.body.appendChild(footerContainer);
  }

  if (footerContainer) {
    footerContainer.innerHTML = `
<!-- Standalone CTA Banner (قبل الفوتر) -->

<!-- Footer Main Links Section -->
<footer class="bg-slate-950 text-slate-400 pt-16 pb-12 relative overflow-hidden transition-colors duration-300 border-t border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <!-- Footer Main Links Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            <!-- Col 1: Brand Info (Spans 2 cols on lg) -->
            <div class="lg:col-span-2 space-y-6">
                <a href="${basePath}index.html" class="flex items-center gap-3 group">
                    <img src="${basePath}assets/images/fiber.webp" alt="Fiber 5G Logo" class="w-12 h-12 object-contain group-hover:scale-105 transition-transform">
                    <div class="flex flex-col">
                        <span class="text-2xl font-black bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                            Fiber 5G
                        </span>
                        <span class="text-[11px] text-slate-400 font-bold tracking-wider -mt-1 uppercase">
                            موزع معتمد لألياف الفايبر و 5G بالسعودية
                        </span>
                    </div>
                </a>

                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    منصتك المتكاملة لاختيار وتفعيل أسرع باقات الألياف الضوئية والانترنت المنزلي الـ 5G من أفضل المشغلين المعتمدين بالمملكة العربية السعودية (STC، سلام، موبايلي، زين). تغطية شاملة وفورية لجميع مدن ومناطق المملكة العربية السعودية.
                </p>

                <!-- Contact Pills -->
                <div class="space-y-2.5 text-xs font-bold">
                    <div class="flex items-center gap-3 text-slate-300">
                        <i class="fa-solid fa-phone text-blue-400"></i>
                        <span>الهاتف المباشر: 0530810532</span>
                    </div>
                    <div class="flex items-center gap-3 text-slate-300">
                        <i class="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
                        <span>الواتساب: 0530810532</span>
                    </div>
                    <div class="flex items-center gap-3 text-slate-300">
                        <i class="fa-solid fa-location-dot text-sky-400"></i>
                        <span>التغطية: كافة مدن ومناطق المملكة العربية السعودية</span>
                    </div>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="space-y-4">
                <h4 class="text-sm font-black text-white tracking-wide border-r-4 border-blue-500 pr-3">
                    روابط سريعة
                </h4>
                <ul class="space-y-2.5 text-xs font-bold">
                    <li><a href="${basePath}index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-blue-500"></i>الرئيسية</a></li>
                    <li><a href="${basePath}index.html#packages" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-blue-500"></i>باقات الفايبر المنزلي</a></li>
                    <li><a href="${basePath}index.html#packages" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-blue-500"></i>باقات الـ 5G والراوترات</a></li>
                    <li><a href="${basePath}reviews/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-amber-500"></i>آراء وتجارب العملاء</a></li>
                    <li><a href="${basePath}speedtest/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-sky-400"></i>قياس سرعة النت</a></li>
                    <li><a href="${basePath}blog/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-blue-500"></i>مدونة الاتصالات</a></li>
                    <li><a href="${basePath}order/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-left text-[10px] text-emerald-400"></i>طلب تأسيس جديد</a></li>
                </ul>
            </div>

            <!-- Col 3: Companies & Providers -->
            <div class="space-y-4">
                <h4 class="text-sm font-black text-white tracking-wide border-r-4 border-emerald-500 pr-3">
                    المشغلين المعتمدين
                </h4>
                <ul class="space-y-2.5 text-xs font-bold">
                    <li><a href="${basePath}companies/stc/index.html" class="hover:text-purple-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-purple-400"></i>إس تي سي STC فايبر</a></li>
                    <li><a href="${basePath}companies/salam/index.html" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-emerald-400"></i>سلام Salam فايبر</a></li>
                    <li><a href="${basePath}companies/mobily/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-sky-400"></i>موبايلي Mobily فايبر</a></li>
                    <li><a href="${basePath}companies/zain/index.html" class="hover:text-fuchsia-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-fuchsia-400"></i>زين Zain 5G وفايبر</a></li>
                    <li><a href="${basePath}packages/stc-fiber/" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-blue-400"></i>عروض STC بيتي فايبر</a></li>
                    <li><a href="${basePath}packages/salam-fiber/" class="hover:text-emerald-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-check text-[10px] text-emerald-400"></i>عروض سلام ألياف 300M</a></li>
                </ul>
            </div>

            <!-- Col 4: Coverage & Cities -->
            <div class="space-y-4">
                <h4 class="text-sm font-black text-white tracking-wide border-r-4 border-cyan-500 pr-3">
                    تغطية المناطق والخدمات
                </h4>
                <ul class="space-y-2.5 text-xs font-bold">
                    <li><a href="${basePath}index.html#representatives" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-location-dot text-[10px] text-emerald-400"></i>الموزع المعتمد بالسعودية</a></li>
                    <li><a href="${basePath}index.html#representatives" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-location-dot text-[10px] text-blue-400"></i>مندوب الرياض</a></li>
                    <li><a href="${basePath}index.html#representatives" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-location-dot text-[10px] text-sky-400"></i>مندوب جدة والمكّة</a></li>
                    <li><a href="${basePath}index.html#dammam-coverage" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-box text-[10px] text-amber-400"></i>فحص البوكسية والكبائن</a></li>
                    <li><a href="${basePath}index.html#saudi-coverage" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-globe text-[10px] text-teal-400"></i>التغطية الوطنية للمملكة</a></li>
                    <li><a href="${basePath}contact/index.html" class="hover:text-sky-400 transition-colors flex items-center gap-2"><i class="fa-solid fa-headset text-[10px] text-emerald-400"></i>الدعم الفني والاستفسار</a></li>
                </ul>
            </div>

        </div>

        <!-- Trust Badges Bar -->
        <div class="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2.5 text-xs font-bold text-slate-300">
                <i class="fa-solid fa-shield-halved text-emerald-400 text-base"></i>
                <span>موزع ومعتمد 100%</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2.5 text-xs font-bold text-slate-300">
                <i class="fa-solid fa-truck-fast text-blue-400 text-base"></i>
                <span>تأسيس وتوصيل مجاني</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2.5 text-xs font-bold text-slate-300">
                <i class="fa-solid fa-headset text-sky-400 text-base"></i>
                <span>دعم فني وتواصل 24/7</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2.5 text-xs font-bold text-slate-300">
                <i class="fa-solid fa-receipt text-amber-400 text-base"></i>
                <span>الدفع الآمن بعد التشغيل</span>
            </div>
        </div>

        <!-- Copyright & Bottom Bar -->
        <div class="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <div>
                جميع الحقوق محفوظة © 2026 لـ <span class="text-slate-300 font-bold">Fiber 5G</span> - موزع معتمد لألياف الفايبر والانترنت بالمملكة العربية السعودية.
            </div>
            <div class="flex items-center gap-4 text-slate-400 font-bold">
                <a href="${basePath}index.html" class="hover:text-white transition-colors">الرئيسية</a>
                <span>•</span>
                <a href="${basePath}order/index.html" class="hover:text-white transition-colors">تقديم طلب</a>
                <span>•</span>
                <a href="https://wa.me/966530810532" target="_blank" class="hover:text-emerald-400 transition-colors">تواصل معنا</a>
            </div>
        </div>

    </div>
</footer>`;
  }

  // Attach Active Link States
  const currentHref = window.location.pathname;
  const navLinks = document.querySelectorAll(
    "#global-header nav a, #mobile-menu a",
  );

  // Determine active route name
  let activeRoute = "home";
  if (currentHref.includes("/blog/")) activeRoute = "blog";
  else if (currentHref.includes("/companies/")) activeRoute = "companies";
  else if (currentHref.includes("/order/")) activeRoute = "order";
  else if (currentHref.includes("/speedtest/")) activeRoute = "speedtest";
  else if (currentHref.includes("/reviews/")) activeRoute = "reviews";
  else if (currentHref.includes("/contact/")) activeRoute = "contact";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (!linkHref || linkHref.startsWith("#")) return;

    let isMatch = false;
    if (
      activeRoute === "home" &&
      link.textContent.trim().includes("الرئيسية")
    ) {
      isMatch = true;
    } else if (activeRoute === "blog" && linkHref.includes("/blog/")) {
      isMatch = true;
    } else if (
      activeRoute === "companies" &&
      linkHref.includes("/companies/")
    ) {
      isMatch = true;
    } else if (activeRoute === "order" && linkHref.includes("/order/")) {
      isMatch = true;
    } else if (
      activeRoute === "speedtest" &&
      linkHref.includes("/speedtest/")
    ) {
      isMatch = true;
    } else if (activeRoute === "reviews" && linkHref.includes("/reviews/")) {
      isMatch = true;
    } else if (activeRoute === "contact" && linkHref.includes("/contact/")) {
      isMatch = true;
    }

    if (isMatch) {
      link.classList.add(
        "text-blue-600",
        "dark:text-sky-400",
        "bg-blue-50/80",
        "dark:bg-blue-950/60",
        "font-bold",
      );
      link.classList.remove(
        "text-gray-700",
        "dark:text-slate-200",
        "font-semibold",
      );
    } else {
      if (!link.classList.contains("bg-gradient-to-r")) {
        link.classList.remove(
          "text-blue-600",
          "dark:text-sky-400",
          "bg-blue-50/80",
          "dark:bg-blue-950/60",
          "font-bold",
        );
        link.classList.add(
          "text-gray-700",
          "dark:text-slate-200",
          "font-semibold",
        );
      }
    }
  });

  // Attach Mobile Menu Toggle Logic
  const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    const icon = mobileMenuBtn.querySelector("i");

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.toggle("hidden");
      if (icon) {
        if (!isHidden) {
          icon.className =
            "fa-solid fa-xmark text-xl text-blue-600 dark:text-sky-400";
        } else {
          icon.className = "fa-solid fa-bars text-lg";
        }
      }
    });

    // Close menu when clicking any link inside mobile menu
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        if (icon) icon.className = "fa-solid fa-bars text-lg";
      });
    });

    // Close menu when clicking outside header
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          if (icon) icon.className = "fa-solid fa-bars text-lg";
        }
      }
    });
  }

  // 5-Second Interval Animation for Floating Order Badge
  const orderBadge = document.getElementById("floating-order-badge");
  if (orderBadge) {
    function triggerBadgePulse() {
      orderBadge.classList.remove("opacity-0", "-translate-x-2");
      orderBadge.classList.add("opacity-100", "translate-x-0");

      setTimeout(() => {
        orderBadge.classList.remove("opacity-100", "translate-x-0");
        orderBadge.classList.add("opacity-0", "-translate-x-2");
      }, 2500);
    }

    setTimeout(triggerBadgePulse, 1500);
    setInterval(triggerBadgePulse, 5000);
  }
});

// Theme Initialization
document.addEventListener("DOMContentLoaded", () => {
  const htmlTag = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    htmlTag.classList.add("dark");
  } else {
    htmlTag.classList.remove("dark");
  }


  // 5-Second Interval Animation for Floating Order Badge
  const orderBadge = document.getElementById("floating-order-badge");
  if (orderBadge) {
    function triggerBadgePulse() {
      // Show Badge
      orderBadge.classList.remove("opacity-0", "-translate-x-2");
      orderBadge.classList.add("opacity-100", "translate-x-0");

      // Hide Badge after 2.5 seconds
      setTimeout(() => {
        orderBadge.classList.remove("opacity-100", "translate-x-0");
        orderBadge.classList.add("opacity-0", "-translate-x-2");
      }, 2500);
    }

    // Initial trigger after 1.5 seconds
    setTimeout(triggerBadgePulse, 1500);

    // Repeat every 5 seconds
    setInterval(triggerBadgePulse, 5000);
  }

  // Package Category Tab Filtering Logic
  const packageTabs = document.querySelectorAll(".package-tab-btn");
  const packageCards = document.querySelectorAll(".package-card");

  if (packageTabs.length > 0 && packageCards.length > 0) {
    packageTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const filter = tab.getAttribute("data-filter");

        // Update active tab styles
        packageTabs.forEach((t) => {
          t.classList.remove(
            "active-tab",
            "bg-blue-600",
            "text-white",
            "shadow-blue-600/30",
          );
          t.classList.add(
            "bg-slate-100",
            "dark:bg-slate-800",
            "text-slate-700",
            "dark:text-slate-300",
          );
        });

        tab.classList.add(
          "active-tab",
          "bg-blue-600",
          "text-white",
          "shadow-blue-600/30",
        );
        tab.classList.remove(
          "bg-slate-100",
          "dark:bg-slate-800",
          "text-slate-700",
          "dark:text-slate-300",
        );

        // Filter cards
        packageCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.classList.remove("hidden");
            card.classList.add("flex");
          } else {
            card.classList.add("hidden");
            card.classList.remove("flex");
          }
        });
      });
    });
  }

  // =====================================================
  // Customer Reviews & Interactive Form Handler
  // =====================================================
  const starIcons = document.querySelectorAll("#star-rating-selector .star-icon");
  const reviewRatingInput = document.getElementById("review-rating");
  const ratingNumber = document.getElementById("rating-number");
  const reviewForm = document.getElementById("add-review-form");
  const reviewsContainer = document.getElementById("reviews-container");
  const reviewAlert = document.getElementById("review-alert");

  // Star Rating Selector Interactive Behavior
  if (starIcons.length > 0) {
    starIcons.forEach((star) => {
      star.addEventListener("click", () => {
        const val = parseInt(star.getAttribute("data-value"));
        if (reviewRatingInput) reviewRatingInput.value = val;
        if (ratingNumber) ratingNumber.textContent = `${val} من 5`;

        starIcons.forEach((s) => {
          const sVal = parseInt(s.getAttribute("data-value"));
          if (sVal <= val) {
            s.classList.add("text-amber-400");
            s.classList.remove("text-slate-300");
          } else {
            s.classList.remove("text-amber-400");
            s.classList.add("text-slate-300");
          }
        });
      });
    });
  }

  // Function to Create HTML Card for a Review
  function createReviewCardHtml(item) {
    const starsHtml = Array.from({ length: 5 }, (_, i) => 
      `<i class="fa-solid fa-star ${i < item.rating ? "text-amber-400" : "text-slate-300"}"></i>`
    ).join("");

    const nameInitials = item.name ? item.name.split(" ").slice(0, 2).map(n => n[0]).join("") : "عميل";

    return `
      <div class="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group animate-fade-in">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-2xl bg-blue-600/10 dark:bg-blue-950 text-blue-600 dark:text-sky-400 flex items-center justify-center font-black text-base border border-blue-200 dark:border-blue-800">
                ${nameInitials}
              </div>
              <div class="text-right">
                <h4 class="text-base font-black text-slate-900 dark:text-white">${item.name}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">${item.city || "الدمام"}</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 text-[11px] font-bold border border-blue-200/60 dark:border-blue-800/60">
              ${item.provider || "STC فايبر"}
            </span>
          </div>

          <div class="flex items-center gap-1 text-sm">
            ${starsHtml}
          </div>

          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            "${item.comment}"
          </p>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
            <i class="fa-solid fa-circle-check"></i> عميل جديد
          </span>
          <span>الآن</span>
        </div>
      </div>
    `;
  }

  // Dynamic API URL depending on page folder location
  const isSubFolderPage = window.location.pathname.includes("/reviews/") ||
    window.location.pathname.includes("/blog/") ||
    window.location.pathname.includes("/companies/") ||
    window.location.pathname.includes("/contact/") ||
    window.location.pathname.includes("/order/") ||
    window.location.pathname.includes("/speedtest/");

  const reviewsApiUrl = isSubFolderPage ? "../api/reviews.php" : "api/reviews.php";

  // Fetch Reviews from Database (PHP Backend)
  async function loadDatabaseReviews() {
    if (!reviewsContainer) return;
    try {
      const response = await fetch(reviewsApiUrl);
      if (!response.ok) return;
      const json = await response.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        reviewsContainer.innerHTML = json.data.map(createReviewCardHtml).join("");
      }
    } catch (err) {
      // Keep static fallbacks if DB endpoint isn't connected yet
      console.log("Local mode: Database reviews fallback initialized");
    }
  }

  loadDatabaseReviews();

  // Review Form Submit Handler
  if (reviewForm) {
    reviewForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("review-name")?.value.trim();
      const city = document.getElementById("review-city")?.value.trim();
      const provider = document.getElementById("review-provider")?.value;
      const rating = parseInt(reviewRatingInput?.value || "5");
      const comment = document.getElementById("review-comment")?.value.trim();

      if (!name || !comment) {
        if (reviewAlert) {
          reviewAlert.className = "p-3 rounded-xl text-xs font-bold text-center bg-red-50 text-red-600 border border-red-200 block";
          reviewAlert.textContent = "يرجى تعبئة جميع الحقول المطلوبة";
        }
        return;
      }

      const reviewData = { name, city, provider, rating, comment };

      try {
        const response = await fetch(reviewsApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData)
        });

        const json = await response.json();

        if (json.success) {
          if (reviewAlert) {
            reviewAlert.className = "p-3 rounded-xl text-xs font-bold text-center bg-emerald-50 text-emerald-700 border border-emerald-200 block";
            reviewAlert.textContent = "شكراً لك! تم تسجيل تقييمك ونشره بنجاح ✨";
          }
        } else {
          // Fallback UI insertion if DB write fails or missing connection
          if (reviewAlert) {
            reviewAlert.className = "p-3 rounded-xl text-xs font-bold text-center bg-blue-50 text-blue-700 border border-blue-200 block";
            reviewAlert.textContent = "تم إضافة تقييمك مؤقتاً في الصفحة! (تأكد من إعداد بيانات قاعدة البيانات في api/reviews.php)";
          }
        }
      } catch (err) {
        if (reviewAlert) {
          reviewAlert.className = "p-3 rounded-xl text-xs font-bold text-center bg-blue-50 text-blue-700 border border-blue-200 block";
          reviewAlert.textContent = "تم إضافة تقييمك بنجاح للمعاينة ✨";
        }
      }

      // Prepend review to container immediately for instant UI feedback
      if (reviewsContainer) {
        const tempCardWrapper = document.createElement("div");
        tempCardWrapper.innerHTML = createReviewCardHtml(reviewData);
        reviewsContainer.prepend(tempCardWrapper.firstElementChild);
      }

      // Reset form
      reviewForm.reset();
      if (reviewRatingInput) reviewRatingInput.value = "5";
      if (ratingNumber) ratingNumber.textContent = "5 من 5";
      starIcons.forEach(s => s.classList.add("text-amber-400"));

      setTimeout(() => {
        if (reviewAlert) reviewAlert.classList.add("hidden");
      }, 6000);
    });
  }

  // Interactive District / Area Search for Representatives
  const repDistrictInput = document.getElementById("rep-district-input");
  const repSuggestionsList = document.getElementById("rep-suggestions-list");
  const repWhatsappLink = document.getElementById("rep-whatsapp-action-link");
  const repBtnText = document.getElementById("rep-btn-text");
  const repChips = document.querySelectorAll(".rep-chip-btn");

  if (repDistrictInput) {
    const districtsData = [
      "الرياض", "جدة", "الدمام", "مكة المكرمة", "الطائف", "تبوك", "الخبر", "الظهران",
      "الاحساء", "الجبيل", "القطيف", "المدينة المنورة", "القصيم", "حائل", "أبها", "جازان",
      "حي الشاطئ", "حي الفيصلية", "حي الفاخرية", "حي النزهة", "حي الروضة", "حي الحمراء",
      "حي المنار", "حي المزروعية", "حي الجلوية", "حي عبدالله فؤاد", "حي طيبة", "حي النورس",
      "حي الشعلة", "حي بدر", "حي أحد", "حي الفردوس", "حي الريان", "حي الياسمين", "حي النرجس",
      "حي الملقا", "حي الصحافة", "حي حطين", "حي الزهراء", "حي السلامة", "حي الصفا"
    ];

    function normalizeArabic(text) {
      if (!text) return "";
      return text
        .replace(/[\u064B-\u0652]/g, "") // remove tashkeel
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .toLowerCase()
        .trim();
    }

    function updateRepCTA(areaName) {
      const trimmed = areaName.trim();
      if (!trimmed) {
        if (repBtnText) repBtnText.textContent = "تواصل مع مندوب الخدمة عبر الواتساب";
        if (repWhatsappLink) {
          repWhatsappLink.href = "https://wa.me/966530810532?text=" + encodeURIComponent("مرحباً، حاب أتواصل مع مندوب فايبر");
        }
        return;
      }

      let areaLabel = trimmed;
      if (!areaLabel.startsWith("حي") && !areaLabel.startsWith("مندوب")) {
        areaLabel = "حي " + areaLabel;
      }

      if (repBtnText) {
        repBtnText.textContent = `تواصل مع مندوب ${areaLabel}`;
      }

      if (repWhatsappLink) {
        const msg = `مرحباً، حاب أتواصل مع مندوب فايبر في ${areaLabel}`;
        repWhatsappLink.href = `https://wa.me/966530810532?text=${encodeURIComponent(msg)}`;
      }
    }

    function showSuggestions(val) {
      if (!repSuggestionsList) return;
      const normalizedQuery = normalizeArabic(val);

      if (!normalizedQuery) {
        repSuggestionsList.classList.add("hidden");
        repSuggestionsList.innerHTML = "";
        return;
      }

      const matches = districtsData.filter(d => {
        const normD = normalizeArabic(d);
        return normD.includes(normalizedQuery) || normalizedQuery.includes(normD);
      });

      if (matches.length === 0) {
        repSuggestionsList.innerHTML = `
          <div class="p-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold text-center">
            سيتم ربطك بمندوب الخدمة المباشر لـ "<span class="text-emerald-600 dark:text-emerald-400">${val}</span>"
          </div>
        `;
      } else {
        repSuggestionsList.innerHTML = matches.map(match => `
          <div class="rep-suggestion-item p-3.5 px-5 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold cursor-pointer transition-colors flex items-center justify-between group" data-value="${match}">
            <span class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400"><i class="fa-solid fa-location-dot text-emerald-500 ml-2"></i> ${match}</span>
            <span class="text-[11px] text-slate-400 font-normal">اختيار هذا الحي</span>
          </div>
        `).join("");
      }

      repSuggestionsList.classList.remove("hidden");
    }

    repDistrictInput.addEventListener("input", (e) => {
      const val = e.target.value;
      updateRepCTA(val);
      showSuggestions(val);
    });

    repDistrictInput.addEventListener("focus", (e) => {
      if (e.target.value.trim()) {
        showSuggestions(e.target.value);
      }
    });

    if (repSuggestionsList) {
      repSuggestionsList.addEventListener("click", (e) => {
        const item = e.target.closest(".rep-suggestion-item");
        if (item) {
          const val = item.getAttribute("data-value");
          repDistrictInput.value = val;
          updateRepCTA(val);
          repSuggestionsList.classList.add("hidden");
        }
      });
    }

    document.addEventListener("click", (e) => {
      if (!repDistrictInput.contains(e.target) && !repSuggestionsList?.contains(e.target)) {
        repSuggestionsList?.classList.add("hidden");
      }
    });

    repChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const val = chip.getAttribute("data-value");
        repDistrictInput.value = val;
        updateRepCTA(val);
        repSuggestionsList?.classList.add("hidden");
      });
    });
  }

  // FAQ Accordion Handler (Global Event Delegation)
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest(".faq-toggle");
    if (!toggleBtn) return;

    const faqItem = toggleBtn.closest(".faq-item");
    if (!faqItem) return;

    const content = faqItem.querySelector(".faq-content");
    const isActive = faqItem.classList.contains("active");

    // Close all other FAQ items
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      otherItem.classList.remove("active");
      const otherContent = otherItem.querySelector(".faq-content");
      if (otherContent) otherContent.classList.add("hidden");
    });

    // Toggle current FAQ item
    if (!isActive && content) {
      faqItem.classList.add("active");
      content.classList.remove("hidden");
    }
  });
});

// Hero Quick Check Form Handler
window.handleQuickCheck = function (event) {
  event.preventDefault();
  const district = document.getElementById("quick-district").value;
  const box = document.getElementById("quick-box").value || "غير محدد";

  if (!district) return;

  const message = `مرحباً، حاب أتحقق من تغطية الفايبر في الدمام:\n- الحي: ${district}\n- رقم البوكسية: ${box}`;
  const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
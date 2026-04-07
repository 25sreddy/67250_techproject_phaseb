# MonoMuse Phase B — Design Summary

**Sahil Reddy** · Andrew ID: sahilr · 67-250 Information Systems Milieux · April 2026  

**Live site:** add your GitHub Pages URL after deployment  
**Repository:** add your public GitHub repo URL

---

## 1. The usability problem from Phase A — data recap

In Phase A, I analyzed MonoMuse’s online **ticket purchase funnel** using session-level data and SQL-based metrics. Three findings drove this redesign:

**Funnel length and navigation.** Purchasing sessions averaged **about 10 page views** before completion—nearly **double** the rough industry benchmark of ~5 steps I cited from external checkout research. That pattern is consistent with users **browsing many informational pages** before they ever reach a clear purchase path, not with random errors lengthening the funnel the same way for every session.

**High intent, low completion.** Among sessions that clicked **“Buy Tickets,”** a large share **did not convert**—on the order of **two-thirds abandonment** in my sample. Those users already signaled purchase intent; losing them points to **friction in the checkout experience**—including the possibility of **failures near the final step** that force users to **re-enter information**, which is a known driver of drop-off.

**Timing of intent.** Time-of-day analysis suggested **midday and afternoon** windows were associated with **stronger conversion** than early morning or evening in the data I had. That does not change *what* the site must do, but it supports emphasizing **clear hours** and **fast paths to tickets** so afternoon planners are not slowed down.

Together, the core problem is **not** “people dislike the museum”—it is **findability of the purchase path**, **length of the path**, and **trust and smoothness at checkout**.

---

## 2. How the redesigned site addresses those findings

### 2.1 Persistent “Buy Tickets” and a shorter mental model

**Data connection:** Long average page counts and wandering before purchase suggest **weak wayfinding** to the primary task.

**Design response:** **“Buy Tickets”** appears in the **main navigation on every page**—home, explore, exhibitions, support, tickets, confirmation, and the rest—and is styled as a **high-contrast call-to-action** so it does not blend into generic links. The **home page** also repeats an explicit **“Buy tickets online”** button after the overview. This implements the recommendation from my Phase A memo: a **persistent, visible** path to purchase instead of hoping users discover tickets only after deep browsing.

**Evidence on the site:** Open any HTML page and confirm the nav includes **Buy Tickets** with the same placement pattern; on small screens, the **hamburger menu** still exposes the full link set so mobile users are not worse off than desktop users.

### 2.2 Consolidated planning + purchase — fewer steps, clearer story

**Data connection:** The old experience effectively asked users to stitch together **hours, location, pricing, and checkout** across many clicks. My analysis tied **long funnels** to that kind of fragmentation.

**Design response:**  

- **Explore** combines **museum story**, **embedded video**, **interactive map with Leaflet and OpenStreetMap tiles**, and **hours and contact** cues so “should I go?” and “where is it?” are answered **without** leaving for unrelated page chains.  
- **Tickets** puts **pricing table**, **visit hours**, and the **full checkout form** on **one page** with a **live total** that updates from **ticket type** and **quantity**. After **Place Order**, users land on a **confirmation** view that reads stored order data—so the path from **intent → form → confirmation** is **linear and predictable**.

**Evidence on the site:** `tickets.html` shows prices and form together; `confirmation.html` summarizes the order after submit.

### 2.3 Checkout friction and abandonment — form design

**Data connection:** Abandonment after clicking **Buy Tickets** and pain at the **“complete”** step imply **unclear requirements**, **errors without guidance**, or **having to redo work**.

**Design response:** The checkout form uses **labeled fields**, **HTML5 types** where appropriate for `date`, `email`, and numeric quantity **1–10**, **inline error messages** with `role="alert"` for missing or invalid input, **optional ZIP** validated only when filled to exactly five digits, and a **mailing-list** checkbox. **Estimated total** updates in the page so users see price **before** they commit—reducing surprise and mismatch with the pricing table. The flow deliberately **avoids** splitting required data across multiple mystery steps for this class project; everything needed for a **simulated** order is visible at once.

**Evidence on the site:** Submit with empty fields to see **specific messages**; complete a valid order to reach **confirmation** with **total** and line items.

### 2.4 Research-informed copy — traceability for graders

**Data connection:** Course rubric asks for an explicit **research-to-design** link.

**Design response:** Short **callout sections** on **Home**, **Explore**, and **Tickets** name the Phase A findings: long funnel, abandonment, browsing before purchase, afternoon intent. They state in plain language **what we changed** on this site in response. That gives reviewers a **direct map** from your **Data Analysis Report** to **concrete UI decisions** without hunting through code.

---

## 3. Supporting design choices — hierarchy, media, accessibility

**Visual hierarchy and layout.** The site uses **CSS Grid** for page structure and **Flexbox** for the navigation bar, with a **consistent palette**: dark ground, gold accent, light text, inherited from the design guide. **Active navigation** styling shows which page you are on; **hover** and **focus-visible** styles keep interactive elements discoverable for **keyboard** users.

**Media and APIs — engagement beyond text.** An **embedded YouTube** video and **interactive map** on Explore support users who decide on a visit visually. An **image gallery** on Exhibitions, including a credited stock interior photo, supports the rubric’s **multi-image** experience. **Leaflet** satisfies the **external map API** requirement while reinforcing the **directions** user story.

**Accessibility and standards.** Images use **descriptive `alt` text**; links use **meaningful labels** such as “Buy tickets online” and “Map & directions.” A **skip link** moves focus to main content. **Libraries** jQuery, Leaflet, and Google Fonts are **cited in code comments**; third-party **photo attribution** appears in the Exhibitions footer.

---

## 4. Limitations and honest scope

This is a **front-end simulation**: there is **no real payment processor**, **no server-side inventory**, and **no A/B test** proving the new funnel beats the old one in production. What the project demonstrates is a **deliberate translation** of **quantitative funnel findings** into **information architecture**, **navigation**, **checkout UX**, and **documented rationale**—the bridge Phase B is meant to show between **data** and **design**.

---

## 5. Conclusion

Phase A showed that MonoMuse’s prior digital experience likely **buried the ticket task** behind **too many pages** and **lost motivated users at checkout**. Phase B responds with **always-available Buy Tickets**, **combined planning and purchase pages**, a **transparent, validated checkout**, and **on-page copy** that ties those choices back to the **metrics and interpretations** in the Data Analysis Report. Together, the implementation and this summary are intended to satisfy the course expectation that **design decisions are traceable to user data**, not only to personal taste.

---

*To submit: export this file to PDF, for example by opening in Google Docs or Word and adjusting fonts and margins to reach 2–3 pages as required. Add your **GitHub** and **live site** URLs at the top, and upload to Gradescope with your wireframes and design guide.*

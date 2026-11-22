# Methum Constructions — Official Enterprise Web Portal

ශ්‍රී ලංකාවේ **CIDA CS2 / Tier-1 Enterprise (Nawaloka Construction Standard)** ප්‍රමිතියට අනුකූලව නිර්මාණය කරන ලද **Methum Constructions** ආයතනික වෙබ් අඩවිය.

---

## 🚀 How to Run the Website (වෙබ් අඩවිය Run කරන ආකාරය)

### ක්‍රමය 1: සරලම ක්‍රමය (Double Click)
Workspace එකේ ඇති **`start-website.bat`** ගොනුව double click කරන්න. එවිට browser එකේ `http://localhost:3000` ඔස්සේ වෙබ් අඩවිය ස්වයංක්‍රීයව විවෘත වේ.

### ක්‍රමය 2: Terminal / PowerShell හරහා
```bash
npm run dev
```
ඉන්පසු බ්‍රවුසරයෙන් `http://localhost:3000` වෙත පිවිසෙන්න.

---

## ⚙️ How to Change Details (තොරතුරු වෙනස් කරන්නේ කෙසේද?)

වෙබ් අඩවියේ ඇති සියලුම දුරකථන අංක, ලිපිනයන්, මැෂින් වර්ග, ව්‍යාපෘති සහ මිල ගණන් වෙනස් කිරීමට ඇත්තේ **එකම එක් File එකක්** පමණි:

👉 **[`src/data/siteData.ts`](./src/data/siteData.ts)**

එම ගොනුවේ පහත කොටස් ඉතා පැහැදිලිව සකස් කර ඇත:
- **`company`**: ආයතනයේ නම, CIDA ශ්‍රේණිය, ISO සහතික
- **`contacts`**: Head Office, Plant Yard ලිපින, Hotlines, WhatsApp අංකය සහ Email
- **`machinery`**: කුලියට (Rent) හෝ විකිණීමට (Sale) ඇති මැෂින් වර්ග, Specs, පින්තූර, මිල ගණන්
- **`projects`**: කර ඇති හෝ දැනට කෙරෙන මාර්ග සහ ගොඩනැගිලි ව්‍යාපෘති
- **`leadership`**: කළමනාකාර අධ්‍යක්ෂකතුමාගේ පණිවිඩය (Message from MD)
- **`faqs`**: නිතර අසන ප්‍රශ්න

---

## 🌐 Deploy to Production (පිටතට ලබාදීමට Deploy කරන ආකාරය)

මෙම වෙබ් අඩවිය **Production Ready** ලෙස Build කර ඇත:
1. **Vercel / Cloudflare Pages (නොමිලේ):** GitHub Repo එකකට Push කර Vercel හෝ Cloudflare Pages වෙත සම්බන්ධ කිරීමෙන් තත්පර 30කින් Live කළ හැක.
2. **Standard Hosting / cPanel:** මෙහි ඇති **`out/`** folder එකේ ඇති සියලුම files ඔබේ Hosting Server එකේ `public_html` වෙත Upload කරන්න.

---

© 2026 Methum Constructions (Pvt) Ltd. All Rights Reserved.

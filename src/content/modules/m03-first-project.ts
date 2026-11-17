import type { Module } from '../../types/content'

const MASTER_PROMPT = `Act as an expert frontend developer and UI/UX designer.

Build a modern, lightweight, responsive B2C e-commerce website for [YOUR BUSINESS IDEA].

BUSINESS CONCEPT:
[Describe your product, target audience, and business purpose.]

APPLICATION STRUCTURE:

1. Public Landing Page:
- Hero section
- About Us
- Product showcase
- Microblog / Latest Updates
- Footer

2. Admin Dashboard:
- Admin login page
- Product CRUD (Create, Read, Update, Delete)
- Microblog CRUD

VISUAL STYLE:

Aesthetic:
[Describe your desired aesthetic, e.g. clean, modern bento-grid layout with generous whitespace.]

Graphic Motion:
Create lightweight, scroll-responsive graphic motion from the hero section to the footer.

Use Three.js and WebGPU where supported, with WebGL fallback.

Motion should be smooth, purposeful, and optimized for performance.

Color Palette:

- Background / Base (60%):
  Cream / Soft Beige (#D3BBA3 or off-white).

- Secondary / Surface (30%):
  Olive Green (#8B865C).

- Accent / Call-to-Action (10%):
  Terracotta (#D87355).

- Text / Dark Neutral:
  Deep Navy / Charcoal (#0F1B36).

Typography:
[Choose your typography, e.g. Inter for body text and Playfair Display for headings.]

PUBLIC PAGE SECTIONS:

1. Header:
- Logo on the left.
- Three navigation links.
- One primary CTA button: "[YOUR CTA]".

2. Hero:
- Clear headline explaining the value proposition within five seconds.
- Two-sentence subheadline.
- Primary CTA.
- Product mockup on the right.

3. Features:
- Three-column grid.
- Highlight core benefits.
- Use concise descriptions.

4. Social Proof:
- Three realistic sample customer testimonials.
- Include customer names and roles.
- Clearly treat these as demonstration content, not verified reviews.

5. Footer:
- Simple navigation links.
- Contact information.
- Copyright information.

ADMIN DASHBOARD:

- Provide a login interface.
- Provide product management.
- Provide microblog management.
- Support create, read, update, and delete operations.
- Make the interface usable without a database connection.
- Save demonstration data in browser localStorage.

IMPORTANT:
The login is for demonstration purposes only.
Do not present browser-based authentication as production-secure authentication.
Clearly communicate that limitation.

CONSTRAINTS:

- Keep paragraphs under three lines where practical.
- Ensure mobile responsiveness.
- Maintain accessible color contrast.
- Use semantic HTML.
- Include loading, empty, and error states.
- Use reusable components.
- Avoid unnecessary dependencies.
- Optimize images and animations.
- Respect reduced-motion preferences.
- Ensure the website remains functional if WebGPU is unavailable.

TECHNOLOGY:

React.js / Next.js.
TypeScript where appropriate.
Three.js.
WebGPU with WebGL fallback.

PACKAGE MANAGER:
Use [Bun / npm].

DELIVERABLE:

Generate a complete, functional project with all necessary source files.

Include:
- Project structure.
- Installation instructions.
- Development instructions.
- Build instructions.
- Deployment instructions.

Do not generate only a visual mockup.
The website must be functional.`

const GITIGNORE = `# Dependencies
node_modules/

# Build outputs
dist/
build/
.next/
out/

# Environment variables and secrets
.env
.env.*
!.env.example

# Debug logs
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
bun-debug.log*

# Operating system files
.DS_Store
Thumbs.db
Desktop.ini

# Editor files
.vscode/*
!.vscode/extensions.json
.idea/

# Testing and coverage
coverage/

# Temporary files
*.tmp
*.temp`

const TREE = `my-first-project/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── assets/
├── package.json
├── index.html
├── .gitignore
└── README.md`

const m03: Module = {
  id: 'm03',
  number: '03',
  title: { id: 'Proyek Vibecoding Pertamamu', en: 'Your First Vibecoding Project' },
  objective: {
    id: 'Membangun website lengkap dengan bantuan AI coding assistant, lalu menjalankannya di komputermu sendiri.',
    en: 'Build a complete website with an AI coding assistant, then run it on your own computer.',
  },
  lessons: [
    // ─────────────────────────────────────────────── Lesson 0
    {
      id: 'm03-prompt-anatomy',
      title: { id: 'Anatomi Prompt yang Baik', en: 'Anatomy of a Good Prompt' },
      objective: {
        id: 'Memahami 8 bagian prompt yang baik dan cara mengganti placeholder [ ] dengan idemu sendiri.',
        en: 'Understand the 8 parts of a good prompt and how to replace [ ] placeholders with your own ideas.',
      },
      minutes: 12,
      mascot: {
        id: 'AI itu pintar, tapi bukan peramal. Makin jelas kamu bercerita, makin bagus hasilnya. Meow!',
        en: "AI is smart, but it can't read minds. The clearer you are, the better it builds. Meow!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Dalam vibecoding, **prompt** adalah "spesifikasi" aplikasimu. AI hanya bisa membangun apa yang kamu jelaskan. Prompt yang samar menghasilkan aplikasi yang generik dan sering tidak lengkap; prompt yang terstruktur menghasilkan aplikasi yang mendekati bayanganmu.',
            en: 'In vibecoding, the **prompt** is your app\'s "specification". The AI can only build what you describe. A vague prompt produces a generic, often incomplete app; a structured prompt produces something close to what you imagined.',
          },
        },
        { type: 'illustration', name: 'prompt-anatomy', caption: { id: '8 bagian prompt yang baik', en: 'The 8 parts of a good prompt' } },
        {
          type: 'table',
          head: [{ id: 'Bagian', en: 'Part' }, { id: 'Fungsinya', en: 'What it does' }, { id: 'Contoh', en: 'Example' }],
          rows: [
            [{ id: '1. Role', en: '1. Role' }, { id: 'Memberi AI "peran" agar jawabannya sesuai keahlian itu.', en: 'Gives the AI a persona so it answers with that expertise.' }, 'Act as an expert frontend developer.'],
            [{ id: '2. Context', en: '2. Context' }, { id: 'Latar belakang: bisnis apa, untuk siapa.', en: 'Background: what business, for whom.' }, 'A small plant shop for urban apartment owners.'],
            [{ id: '3. Objective', en: '3. Objective' }, { id: 'Apa yang harus dibangun.', en: 'What must be built.' }, 'Build a responsive e-commerce website.'],
            [{ id: '4. Design', en: '4. Design' }, { id: 'Gaya visual, warna, font, animasi.', en: 'Visual style, colors, fonts, motion.' }, 'Clean bento-grid layout, terracotta accent.'],
            [{ id: '5. Requirements', en: '5. Requirements' }, { id: 'Fitur dan halaman yang wajib ada.', en: 'Features and pages that must exist.' }, 'Product CRUD in an admin dashboard.'],
            [{ id: '6. Constraints', en: '6. Constraints' }, { id: 'Batasan dan aturan kualitas.', en: 'Limits and quality rules.' }, 'Mobile responsive, accessible contrast.'],
            [{ id: '7. Technology', en: '7. Technology' }, { id: 'Framework, bahasa, dan tools.', en: 'Framework, language, and tools.' }, 'React, TypeScript, Bun.'],
            [{ id: '8. Expected output', en: '8. Expected output' }, { id: 'Bentuk hasil yang kamu mau.', en: 'The shape of the result you want.' }, 'Complete project with install instructions.'],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Apa itu [ ] ?', en: 'What are the [ ] brackets?' },
          text: {
            id: 'Semua teks di dalam kurung siku `[ ]` adalah **placeholder** yang boleh (dan harus) kamu ganti dengan idemu sendiri. Contoh: `[YOUR BUSINESS IDEA]` menjadi `a handmade ceramic mug shop`. Hapus kurung sikunya setelah diganti.',
            en: 'Everything inside square brackets `[ ]` is a **placeholder** you can (and should) replace with your own ideas. Example: `[YOUR BUSINESS IDEA]` becomes `a handmade ceramic mug shop`. Remove the brackets once replaced.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Make me an online store website.',
            why: { id: 'Tidak ada konteks, desain, fitur, atau teknologi. AI akan menebak semuanya.', en: 'No context, design, features, or technology. The AI has to guess everything.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Act as an expert frontend developer. Build a responsive React + TypeScript website for a small plant shop targeting apartment owners. Use a clean, earthy design with olive green and terracotta. Include a product showcase and an admin page to add, edit, and delete products saved in localStorage. Deliver all source files plus install and run instructions.',
            why: { id: 'Ada role, context, objective, design, requirements, technology, dan expected output.', en: 'It has a role, context, objective, design, requirements, technology, and expected output.' },
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Baca tabel 8 bagian prompt di atas dan perhatikan contohnya.', en: 'Read the 8-part table above and look at each example.' },
            { id: 'Bandingkan prompt samar dan prompt spesifik. Tandai bagian mana saja yang hilang dari prompt samar.', en: 'Compare the vague and specific prompts. Note which parts are missing from the vague one.' },
            { id: 'Coba latihan di bawah: ganti setiap `[ ]` dengan idemu sendiri, lalu simpan.', en: 'Try the exercise below: replace every `[ ]` with your own idea, then save.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm03-prompt-anatomy-practice',
          title: { id: 'Latihan: prompt 8 bagian', en: 'Practice: an 8-part prompt' },
          description: { id: 'Isi placeholder untuk melatih struktur prompt. Belum perlu dikirim ke AI.', en: 'Fill in the placeholders to practice the structure. No need to send it to an AI yet.' },
          prompt: `Act as [ROLE, e.g. an expert frontend developer].

Context: [WHO THE BUSINESS IS AND WHO IT SERVES].

Objective: Build [WHAT YOU WANT TO BUILD].

Design: [AESTHETIC, COLORS, FONTS].

Requirements: [PAGES AND FEATURES].

Constraints: [RULES, e.g. mobile responsive, accessible contrast].

Technology: [FRAMEWORK, LANGUAGE, PACKAGE MANAGER].

Expected output: [WHAT YOU WANT TO RECEIVE, e.g. a complete project with run instructions].`,
        },
      ],
      result: {
        id: 'Kamu paham 8 bagian prompt dan tahu bahwa semua `[ ]` harus diganti dengan idemu sendiri.',
        en: 'You understand the 8 prompt parts and know every `[ ]` must be replaced with your own ideas.',
      },
      troubleshooting: [
        {
          problem: { id: 'AI menulis ulang kurung siku apa adanya, misalnya "[YOUR CTA]" muncul di website.', en: 'The AI copies the brackets literally, e.g. "[YOUR CTA]" appears on the website.' },
          solution: [
            { type: 'p', text: { id: 'Kamu lupa mengganti placeholder. Cari semua `[` di prompt sebelum dikirim, ganti isinya, dan hapus kurung sikunya.', en: 'You forgot to replace a placeholder. Search for every `[` before sending, replace the content, and remove the brackets.' } },
          ],
        },
        {
          problem: { id: 'Hasil AI terlalu generik.', en: 'The AI output is too generic.' },
          solution: [
            { type: 'p', text: { id: 'Tambahkan detail di bagian Context dan Design: siapa pelanggannya, suasana apa yang ingin dirasakan, contoh warna atau website referensi.', en: 'Add detail to Context and Design: who the customers are, what feeling you want, example colors or reference sites.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Aku bisa menyebutkan 8 bagian prompt.', en: 'I can name the 8 prompt parts.' },
        { id: 'Aku tahu bedanya prompt samar dan spesifik.', en: 'I know the difference between a vague and a specific prompt.' },
        { id: 'Aku paham bahwa `[ ]` adalah placeholder yang harus diganti.', en: 'I understand `[ ]` are placeholders to replace.' },
        { id: 'Aku sudah mengisi prompt latihan.', en: 'I filled in the practice prompt.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 1
    {
      id: 'm03-choose-idea',
      title: { id: 'Pilih Ide Aplikasimu', en: 'Choose Your Application Idea' },
      objective: {
        id: 'Menentukan ide bisnis B2C sederhana yang akan kamu jadikan website.',
        en: 'Pick a simple B2C business idea to turn into a website.',
      },
      minutes: 10,
      mascot: {
        id: 'Toko kopi? Toko tanaman? Toko aksesori kucing? (Aku pilih yang terakhir, hehe.)',
        en: 'A coffee shop? A plant shop? A cat accessory store? (I vote for the last one, hehe.)',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**B2C** (Business-to-Consumer) artinya bisnis yang menjual langsung ke konsumen. Website seperti ini punya pola yang jelas: halaman depan untuk memamerkan produk, dan dashboard admin untuk mengelola produk. Pola sederhana ini cocok untuk proyek pertama.',
            en: '**B2C** (Business-to-Consumer) means a business that sells directly to customers. These websites follow a clear pattern: a public page to showcase products and an admin dashboard to manage them. That simple pattern is perfect for a first project.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: 'Toko buku', en: 'Bookstore' },
            { id: 'Kedai kopi', en: 'Coffee shop' },
            { id: 'Toko fashion', en: 'Fashion store' },
            { id: 'Toko furnitur', en: 'Furniture store' },
            { id: 'Toko tanaman', en: 'Plant shop' },
            { id: 'Produk handmade', en: 'Handmade products' },
            { id: 'Produk digital (template, e-book, preset)', en: 'Digital products (templates, e-books, presets)' },
            { id: 'Aksesori hewan peliharaan', en: 'Pet accessories' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Bebaskan kreativitasmu', en: 'Be creative' },
          text: {
            id: 'Daftar di atas hanya contoh. Pilih sesuatu yang kamu sukai atau bisnis nyata milik keluarga atau temanmu. Proyek yang kamu pedulikan lebih seru dikerjakan.',
            en: "The list above is just a starting point. Pick something you love, or a real business owned by family or friends. A project you care about is more fun to build.",
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Tulis nama bisnis dan produk utamanya dalam satu kalimat.', en: 'Write the business name and its main product in one sentence.' },
            { id: 'Tentukan target pelanggan: siapa mereka dan apa yang mereka butuhkan?', en: 'Define your target customers: who are they and what do they need?' },
            { id: 'Tulis tujuan bisnis: kenapa website ini dibuat (misalnya menarik pembeli baru)?', en: 'Write the business purpose: why does this website exist (e.g. attract new buyers)?' },
            { id: 'Pilih teks tombol CTA utama, misalnya "Shop Now" atau "Order Today".', en: 'Choose the main CTA button text, e.g. "Shop Now" or "Order Today".' },
            { id: 'Simpan catatan ini di file teks. Kamu akan memakainya di master prompt.', en: 'Save these notes in a text file. You will use them in the master prompt.' },
          ],
        },
        {
          type: 'code',
          lang: 'text',
          caption: { id: 'Contoh catatan ide', en: 'Example idea notes' },
          code: `Business: Leaf & Loft - an online plant shop
Products: low-maintenance indoor plants and ceramic pots
Audience: busy young professionals living in apartments
Purpose: sell plants online and share plant-care tips
CTA: Shop Plants`,
        },
      ],
      result: {
        id: 'Kamu punya catatan singkat berisi ide bisnis, produk, target pelanggan, tujuan, dan teks CTA.',
        en: 'You have short notes covering your business idea, products, audience, purpose, and CTA text.',
      },
      troubleshooting: [
        {
          problem: { id: 'Aku tidak bisa memutuskan ide.', en: "I can't decide on an idea." },
          solution: [
            { type: 'p', text: { id: 'Pilih saja satu dari daftar contoh. Kamu bisa membuat proyek lain nanti; yang penting sekarang adalah belajar alurnya.', en: 'Just pick one from the example list. You can build another project later; right now the goal is learning the workflow.' } },
          ],
        },
        {
          problem: { id: 'Ideku terlalu besar (marketplace, pembayaran, banyak penjual).', en: 'My idea is too big (marketplace, payments, many sellers).' },
          solution: [
            { type: 'p', text: { id: 'Persempit menjadi satu toko dengan satu jenis produk. Fitur pembayaran dan multi-penjual butuh backend dan keamanan serius, jadi simpan untuk nanti.', en: 'Narrow it down to one shop with one product category. Payments and multi-seller features need a backend and serious security, so save them for later.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Aku sudah memilih ide bisnis B2C.', en: 'I chose a B2C business idea.' },
        { id: 'Aku sudah menentukan target pelanggan.', en: 'I defined my target customers.' },
        { id: 'Aku sudah menulis tujuan bisnis dan teks CTA.', en: 'I wrote the business purpose and CTA text.' },
        { id: 'Catatan ideku tersimpan.', en: 'My idea notes are saved.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 2
    {
      id: 'm03-open-ai-assistant',
      title: { id: 'Buka AI Coding Assistant', en: 'Open Your AI Coding Assistant' },
      objective: {
        id: 'Memulai percakapan baru di AI coding assistant dan menyiapkannya untuk proyekmu.',
        en: 'Start a new conversation in your AI coding assistant and prepare it for your project.',
      },
      minutes: 8,
      mascot: {
        id: 'Percakapan baru = meja kerja bersih. Ayo mulai dari awal!',
        en: "A new conversation is a clean desk. Let's start fresh!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'AI coding assistant (misalnya yang kamu siapkan di modul sebelumnya) mengingat isi percakapan. Kalau kamu memakai percakapan lama, topik sebelumnya bisa "bocor" ke proyek barumu. Karena itu, selalu mulai **percakapan baru** untuk proyek baru.',
            en: 'An AI coding assistant (like the one you set up in an earlier module) remembers the conversation. If you reuse an old chat, earlier topics can leak into your new project. So always start a **new conversation** for a new project.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Jaga privasi', en: 'Protect your privacy' },
          text: {
            id: 'Jangan pernah menempelkan password, API key, token, atau data pribadi pelanggan ke dalam prompt.',
            en: 'Never paste passwords, API keys, tokens, or real customer data into a prompt.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka AI coding assistant pilihanmu dan login.', en: 'Open your AI coding assistant of choice and sign in.' },
            { id: 'Klik tombol **New chat** / **New conversation** / **New project** (namanya berbeda di tiap tool).', en: 'Click **New chat** / **New conversation** / **New project** (the name differs per tool).' },
            { id: 'Kalau tool-nya bisa memilih model, pilih model yang direkomendasikan untuk coding.', en: 'If the tool lets you choose a model, pick one recommended for coding.' },
            { id: 'Kirim pesan pembuka di bawah agar AI tahu apa yang akan datang.', en: 'Send the opening message below so the AI knows what is coming.' },
            { id: 'Siapkan catatan ide dari pelajaran sebelumnya di jendela lain.', en: 'Keep your idea notes from the previous lesson open in another window.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm03-open-ai-assistant-warmup',
          title: { id: 'Pesan pembuka', en: 'Opening message' },
          description: { id: 'Opsional, tapi membantu AI fokus.', en: 'Optional, but it helps the AI focus.' },
          prompt: `I am a beginner learning to build web applications with AI. In my next message I will send a detailed specification for a B2C e-commerce website for [YOUR BUSINESS IDEA]. Please wait for it, then generate a complete, working project and explain the steps in simple language.`,
        },
      ],
      result: {
        id: 'Percakapan baru sudah terbuka dan AI siap menerima master prompt-mu.',
        en: 'A new conversation is open and the AI is ready for your master prompt.',
      },
      troubleshooting: [
        {
          problem: { id: 'AI langsung membuat kode sebelum aku mengirim spesifikasi.', en: 'The AI starts writing code before I send the specification.' },
          solution: [
            { type: 'p', text: { id: 'Tidak masalah. Abaikan saja, lalu kirim master prompt. AI akan mengikuti spesifikasi terbaru.', en: 'No problem. Ignore it and send the master prompt. The AI will follow the latest specification.' } },
          ],
        },
        {
          problem: { id: 'Aku mencapai batas penggunaan (usage limit).', en: 'I hit a usage limit.' },
          solution: [
            { type: 'p', text: { id: 'Paket gratis biasanya punya batas harian. Tunggu sampai kuota pulih, atau coba lagi nanti. Jangan membuat banyak akun untuk mengakali batas.', en: 'Free plans usually have daily limits. Wait for the quota to reset or try again later. Do not create extra accounts to get around limits.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Aku membuka AI coding assistant.', en: 'I opened my AI coding assistant.' },
        { id: 'Aku memulai percakapan baru.', en: 'I started a new conversation.' },
        { id: 'Aku tidak menempelkan data rahasia apa pun.', en: 'I did not paste any secrets.' },
        { id: 'Catatan ideku siap dipakai.', en: 'My idea notes are ready.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 3
    {
      id: 'm03-master-prompt',
      title: { id: 'Master Prompt Pertamamu', en: 'Your First Master Prompt' },
      objective: {
        id: 'Menyesuaikan dan mengirim master prompt untuk menghasilkan website lengkap.',
        en: 'Customize and send the master prompt to generate a complete website.',
      },
      minutes: 20,
      mascot: {
        id: 'Ini momen besarnya! Isi semua [ ] dengan idemu, lalu kirim. Aku ikut deg-degan!',
        en: "This is the big moment! Fill every [ ] with your idea, then send it. I'm excited too!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Master prompt ini memakai 8 bagian yang sudah kamu pelajari: role, konsep bisnis, struktur aplikasi, gaya visual, bagian halaman, dashboard admin, constraints, teknologi, dan deliverable. Kamu cukup mengganti placeholder `[ ]`.',
            en: 'This master prompt uses the 8 parts you learned: role, business concept, app structure, visual style, page sections, admin dashboard, constraints, technology, and deliverable. You only need to replace the `[ ]` placeholders.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Login demo, bukan login aman', en: 'Demo login, not secure login' },
          text: {
            id: 'Dashboard admin menyimpan data di `localStorage` browser. Ini hanya untuk demo: siapa pun yang membuka DevTools bisa melihat dan mengubahnya. Login sungguhan butuh backend dan autentikasi di server.',
            en: 'The admin dashboard stores data in browser `localStorage`. This is for demonstration only: anyone with DevTools can view and change it. Real login needs a backend and server-side authentication.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Prompt ini juga meminta animasi **Three.js** dengan **WebGPU** dan fallback ke **WebGL**, sehingga website tetap jalan di browser yang belum mendukung WebGPU. Palet warna mengikuti aturan 60-30-10: 60% warna dasar, 30% warna sekunder, 10% aksen.',
            en: 'The prompt also asks for **Three.js** motion using **WebGPU** with a **WebGL** fallback, so the site still works in browsers without WebGPU. The palette follows the 60-30-10 rule: 60% base, 30% secondary, 10% accent.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Salin master prompt di bawah ke editor teks.', en: 'Copy the master prompt below into a text editor.' },
            { id: 'Ganti `[YOUR BUSINESS IDEA]` dan bagian `BUSINESS CONCEPT` dengan catatan idemu.', en: 'Replace `[YOUR BUSINESS IDEA]` and the `BUSINESS CONCEPT` section with your idea notes.' },
            { id: 'Isi `Aesthetic`, `Typography`, dan `[YOUR CTA]`. Kamu juga boleh mengganti kode warna.', en: 'Fill in `Aesthetic`, `Typography`, and `[YOUR CTA]`. You may also change the color codes.' },
            { id: 'Pada `PACKAGE MANAGER`, pilih salah satu: `Bun` atau `npm` (sesuai yang sudah kamu install).', en: 'Under `PACKAGE MANAGER`, choose one: `Bun` or `npm` (whichever you installed).' },
            { id: 'Pastikan tidak ada `[` yang tersisa, lalu kirim ke AI.', en: 'Make sure no `[` remains, then send it to the AI.' },
            { id: 'Tunggu sampai AI selesai. Kalau jawabannya terpotong, ketik `continue`.', en: 'Wait for the AI to finish. If the answer is cut off, type `continue`.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm03-master-prompt-main',
          title: { id: 'Master prompt: website B2C', en: 'Master prompt: B2C website' },
          description: {
            id: 'Ganti semua bagian dalam [ ] sebelum dikirim.',
            en: 'Replace every part inside [ ] before sending.',
          },
          prompt: MASTER_PROMPT,
          note: {
            id: 'Testimoni yang dihasilkan adalah contoh, bukan ulasan asli. Jangan tampilkan sebagai ulasan nyata di bisnis sungguhan.',
            en: 'Generated testimonials are samples, not real reviews. Do not present them as genuine reviews for a real business.',
          },
        },
      ],
      result: {
        id: 'AI menghasilkan proyek lengkap: struktur folder, file sumber, serta instruksi install, development, build, dan deploy.',
        en: 'The AI produces a complete project: folder structure, source files, and install, development, build, and deploy instructions.',
      },
      troubleshooting: [
        {
          problem: { id: 'Jawaban AI berhenti di tengah.', en: 'The AI response stops halfway.' },
          solution: [
            { type: 'p', text: { id: 'Ketik `continue` atau `Please continue from where you stopped`. Untuk proyek besar, minta AI membuat file satu per satu.', en: 'Type `continue` or `Please continue from where you stopped`. For large projects, ask the AI to output one file at a time.' } },
          ],
        },
        {
          problem: { id: 'AI hanya membuat satu file HTML atau mockup visual.', en: 'The AI only produced one HTML file or a visual mockup.' },
          solution: [
            { type: 'prompt', id: 'm03-master-prompt-fix-mockup', title: { id: 'Minta proyek lengkap', en: 'Ask for a full project' }, description: { id: 'Kirim sebagai pesan lanjutan.', en: 'Send as a follow-up.' }, prompt: 'This is only a mockup. Please generate the complete, functional project as specified, with every source file, package.json, and working admin CRUD saved in localStorage.' },
          ],
        },
      ],
      checklist: [
        { id: 'Aku mengganti semua placeholder `[ ]`.', en: 'I replaced every `[ ]` placeholder.' },
        { id: 'Aku memilih Bun atau npm.', en: 'I chose Bun or npm.' },
        { id: 'Aku mengirim master prompt.', en: 'I sent the master prompt.' },
        { id: 'AI memberikan proyek lengkap beserta instruksi.', en: 'The AI returned a complete project with instructions.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 4
    {
      id: 'm03-review-output',
      title: { id: 'Pahami dan Review Hasil AI', en: 'Understand and Review AI Output' },
      objective: {
        id: 'Memeriksa hasil AI secara kritis dan meminta perbaikan untuk bagian yang kurang.',
        en: 'Review the AI output critically and ask for fixes where something is missing.',
      },
      minutes: 20,
      mascot: {
        id: 'Jangan langsung percaya! Endus dulu kodenya seperti kucing mengendus makanan baru.',
        en: "Don't trust it blindly! Sniff the code first, like a cat checking new food.",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'AI bisa membuat kesalahan: fitur terlewat, tombol tidak berfungsi, atau tampilan rusak di HP. Kamu adalah **reviewer**-nya. Tugasmu bukan memahami setiap baris, tapi memastikan aplikasinya sesuai spesifikasi.',
            en: 'AI makes mistakes: missing features, broken buttons, or layouts that break on phones. You are the **reviewer**. Your job is not to understand every line, but to make sure the app matches the specification.',
          },
        },
        {
          type: 'callout',
          tone: 'danger',
          title: { id: 'Jangan terima kode begitu saja', en: "Don't blindly accept generated code" },
          text: {
            id: 'Selalu uji dulu. Kode yang terlihat rapi belum tentu berjalan dengan benar.',
            en: 'Always test first. Code that looks neat is not necessarily correct.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Banyak AI assistant punya **preview** langsung. Kalau tool-mu tidak punya, kamu bisa menguji setelah menjalankan proyek di komputermu (pelajaran Install Dependencies), lalu kembali ke sini.',
            en: "Many AI assistants have a live **preview**. If yours doesn't, you can test after running the project locally (Install Dependencies lesson), then come back here.",
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: '**Review proyek**: apakah ada `package.json`, folder `src`, dan instruksi menjalankan?', en: '**Review the project**: is there a `package.json`, a `src` folder, and run instructions?' },
            { id: '**Periksa desain**: warna, font, dan teks CTA sesuai prompt?', en: '**Inspect the design**: do colors, fonts, and CTA text match the prompt?' },
            { id: '**Uji navigasi**: klik semua link di header dan footer.', en: '**Test navigation**: click every link in the header and footer.' },
            { id: '**Uji responsif**: kecilkan jendela browser atau gunakan mode perangkat di DevTools (`F12`).', en: '**Test responsive layouts**: shrink the browser window or use device mode in DevTools (`F12`).' },
            { id: '**Uji CRUD produk**: tambah, lihat, ubah, hapus produk. Refresh halaman: apakah data masih ada?', en: '**Test product CRUD**: create, read, update, delete a product. Refresh: is the data still there?' },
            { id: '**Uji CRUD microblog** dengan cara yang sama.', en: '**Test microblog CRUD** the same way.' },
            { id: '**Catat fitur yang hilang** atau rusak, lalu minta AI memperbaikinya dengan prompt yang spesifik.', en: '**List missing or broken features**, then ask the AI to fix them with a specific prompt.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm03-review-output-fix',
          title: { id: 'Minta perbaikan', en: 'Request a fix' },
          description: { id: 'Jelaskan masalah, langkah reproduksi, dan hasil yang diharapkan.', en: 'Describe the problem, how to reproduce it, and the expected result.' },
          prompt: `I tested the project and found these problems:

1. [PROBLEM, e.g. the Delete button in Product CRUD does nothing]
   Steps: [WHAT YOU DID]
   Expected: [WHAT SHOULD HAPPEN]

2. [PROBLEM, e.g. the hero section overflows on mobile]

Please fix only these issues, keep everything else unchanged, and show me the full updated files.`,
        },
      ],
      result: {
        id: 'Kamu sudah menguji fitur utama dan meminta AI memperbaiki masalah yang ditemukan.',
        en: 'You tested the main features and asked the AI to fix the problems you found.',
      },
      troubleshooting: [
        {
          problem: { id: 'Perbaikan AI malah merusak bagian lain.', en: "The AI's fix broke something else." },
          solution: [
            { type: 'p', text: { id: 'Minta AI "fix only X, keep everything else unchanged". Perbaiki satu masalah per pesan, lalu uji ulang.', en: 'Ask the AI to "fix only X, keep everything else unchanged". Fix one problem per message, then retest.' } },
          ],
        },
        {
          problem: { id: 'Data produk hilang setelah refresh.', en: 'Product data disappears after refresh.' },
          solution: [
            { type: 'p', text: { id: 'Data belum disimpan ke `localStorage`. Minta AI: `Persist products and posts to localStorage and load them on page start.`', en: 'Data is not being saved to `localStorage`. Ask the AI: `Persist products and posts to localStorage and load them on page start.`' } },
          ],
        },
        {
          problem: { id: 'Animasi 3D kosong atau browser jadi lambat.', en: 'The 3D animation is blank or the browser becomes slow.' },
          solution: [
            { type: 'p', text: { id: 'Minta AI memastikan fallback WebGL bekerja, mengurangi jumlah objek, dan mematikan animasi saat `prefers-reduced-motion` aktif.', en: 'Ask the AI to make sure the WebGL fallback works, reduce object count, and disable motion when `prefers-reduced-motion` is set.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Aku memeriksa desain dan navigasi.', en: 'I checked design and navigation.' },
        { id: 'Aku menguji tampilan di ukuran HP.', en: 'I tested the layout at phone size.' },
        { id: 'Aku menguji CRUD produk dan microblog.', en: 'I tested product and microblog CRUD.' },
        { id: 'Aku meminta AI memperbaiki masalah yang ditemukan.', en: 'I asked the AI to fix the problems I found.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 5
    {
      id: 'm03-download-project',
      title: { id: 'Download Proyekmu', en: 'Download Your Project' },
      objective: {
        id: 'Mengunduh proyek sebagai arsip ZIP atau TAR dan mengekstraknya ke folder yang rapi.',
        en: 'Download the project as a ZIP or TAR archive and extract it into a tidy folder.',
      },
      minutes: 8,
      mascot: {
        id: 'Saatnya membawa proyekmu pulang ke komputermu sendiri!',
        en: "Time to bring your project home to your own computer!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Agar bisa menjalankan, mengedit, dan nanti meng-upload proyek ke GitHub, kamu perlu salinannya di komputer. Kebanyakan AI tool menyediakan tombol **Download** atau **Export** dalam bentuk arsip `.zip` atau `.tar`/`.tar.gz`.',
            en: 'To run, edit, and later upload the project to GitHub, you need a copy on your computer. Most AI tools offer a **Download** or **Export** button that gives you a `.zip` or `.tar`/`.tar.gz` archive.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            id: 'Ekstrak **seluruh folder proyek**, bukan file satu per satu. Struktur folder harus tetap utuh agar proyek bisa berjalan.',
            en: 'Extract the **complete project folder**, not individual files. The folder structure must stay intact for the project to run.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Cari opsi **Download** / **Export** di AI environment-mu (biasanya di menu atau ikon titik tiga).', en: 'Find the **Download** / **Export** option in your AI environment (often in a menu or three-dot icon).' },
            { id: 'Unduh arsip ZIP atau TAR.', en: 'Download the ZIP or TAR archive.' },
            { id: 'Ekstrak arsip ke folder proyek, lalu ganti nama foldernya menjadi `my-first-vibecoding-project`.', en: 'Extract the archive into a projects folder and rename the folder to `my-first-vibecoding-project`.' },
          ],
        },
        {
          type: 'os',
          tabs: [
            {
              os: 'windows',
              blocks: [
                { type: 'p', text: { id: 'Klik kanan file `.zip` → **Extract All...** → pilih lokasi. Contoh folder:', en: 'Right-click the `.zip` → **Extract All...** → choose a location. Example folder:' } },
                { type: 'code', lang: 'text', code: 'C:\\Documents\\project\\my-first-vibecoding-project' },
                { type: 'p', text: { id: 'Untuk `.tar.gz`, Windows 10/11 punya perintah `tar` bawaan:', en: 'For `.tar.gz`, Windows 10/11 includes a built-in `tar` command:' } },
                { type: 'code', lang: 'powershell', code: 'tar -xzf my-project.tar.gz -C C:\\Documents\\project' },
              ],
            },
            {
              os: 'macos',
              blocks: [
                { type: 'p', text: { id: 'Klik dua kali file `.zip` atau `.tar.gz` di Finder, lalu pindahkan foldernya. Contoh folder:', en: 'Double-click the `.zip` or `.tar.gz` in Finder, then move the folder. Example folder:' } },
                { type: 'code', lang: 'text', code: '~/Documents/projects/my-first-vibecoding-project' },
                { type: 'code', lang: 'bash', code: 'mkdir -p ~/Documents/projects\nunzip ~/Downloads/my-project.zip -d ~/Documents/projects', caption: { id: 'Atau lewat Terminal', en: 'Or via Terminal' } },
              ],
            },
            {
              os: 'linux',
              blocks: [
                { type: 'code', lang: 'bash', code: 'mkdir -p ~/Documents/projects\nunzip ~/Downloads/my-project.zip -d ~/Documents/projects\n# or for a TAR archive:\ntar -xzf ~/Downloads/my-project.tar.gz -C ~/Documents/projects' },
              ],
            },
          ],
        },
      ],
      result: {
        id: 'Folder `my-first-vibecoding-project` berisi seluruh file proyek, termasuk `package.json`.',
        en: 'The `my-first-vibecoding-project` folder holds every project file, including `package.json`.',
      },
      troubleshooting: [
        {
          problem: { id: 'Aku tidak menemukan tombol download.', en: "I can't find a download button." },
          solution: [
            { type: 'p', text: { id: 'Cek dokumentasi tool-mu, atau tanya AI: `How do I download or export this project as a ZIP?` Sebagai cara terakhir, buat folder dan file secara manual lalu salin isinya satu per satu.', en: 'Check your tool\'s docs, or ask the AI: `How do I download or export this project as a ZIP?` As a last resort, create the folders and files manually and copy each file\'s contents.' } },
          ],
        },
        {
          problem: { id: 'Ada folder ganda, misalnya `my-project/my-project/package.json`.', en: 'There is a nested folder, e.g. `my-project/my-project/package.json`.' },
          solution: [
            { type: 'p', text: { id: 'Pakai folder dalam yang berisi `package.json` sebagai folder proyek.', en: 'Use the inner folder that contains `package.json` as your project folder.' } },
          ],
        },
        {
          problem: { id: 'Perintah unzip tidak ditemukan di Linux.', en: 'The unzip command is not found on Linux.' },
          error: 'unzip: command not found',
          solution: [
            { type: 'code', lang: 'bash', code: 'sudo apt install unzip   # Debian/Ubuntu\nsudo dnf install unzip   # Fedora' },
          ],
        },
      ],
      checklist: [
        { id: 'Aku mengunduh arsip proyek.', en: 'I downloaded the project archive.' },
        { id: 'Aku mengekstrak seluruh folder, bukan file satuan.', en: 'I extracted the whole folder, not single files.' },
        { id: 'Folder proyekku berisi `package.json`.', en: 'My project folder contains `package.json`.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 6
    {
      id: 'm03-open-in-vscode',
      title: { id: 'Buka Proyek di VS Code', en: 'Open the Project in VS Code' },
      objective: {
        id: 'Membuka folder proyek di VS Code, membuka terminal terintegrasi, dan mengenali struktur proyek.',
        en: 'Open the project folder in VS Code, open the integrated terminal, and recognize the project structure.',
      },
      minutes: 10,
      mascot: {
        id: 'Selamat datang di rumah barumu. Ayo lihat-lihat isi folder!',
        en: "Welcome to your new home. Let's explore the folders!",
      },
      explanation: [
        { type: 'illustration', name: 'vscode-layout', caption: { id: 'Explorer, Editor, dan Terminal di VS Code', en: 'Explorer, Editor, and Terminal in VS Code' } },
        {
          type: 'p',
          text: {
            id: 'Membuka **folder** (bukan satu file) membuat VS Code memahami seluruh proyek, dan terminalnya otomatis berada di folder tersebut.',
            en: 'Opening the **folder** (not a single file) lets VS Code understand the whole project, and its terminal starts inside that folder.',
          },
        },
        { type: 'code', lang: 'text', code: TREE, caption: { id: 'Struktur umum', en: 'Typical structure' } },
        {
          type: 'table',
          head: [{ id: 'Item', en: 'Item' }, { id: 'Isi', en: 'Contents' }],
          rows: [
            ['public/', { id: 'File statis (ikon, gambar) yang disajikan apa adanya.', en: 'Static files (icons, images) served as-is.' }],
            ['src/', { id: 'Kode sumber: komponen, halaman, style, aset.', en: 'Source code: components, pages, styles, assets.' }],
            ['package.json', { id: 'Nama proyek, script (`dev`, `build`), dan daftar dependencies.', en: 'Project name, scripts (`dev`, `build`), and dependency list.' }],
            ['index.html', { id: 'Halaman awal (khas proyek Vite).', en: 'Entry page (typical for Vite projects).' }],
            ['.gitignore', { id: 'Daftar file yang tidak boleh masuk Git.', en: 'Files Git should ignore.' }],
            ['README.md', { id: 'Dokumentasi proyek.', en: 'Project documentation.' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            id: 'Struktur aslinya tergantung framework. Proyek **React + Vite** biasanya punya `index.html` dan `src/`. Proyek **Next.js** biasanya punya folder `app/` atau `pages/` dan `next.config.js`, tanpa `index.html`.',
            en: 'The actual structure depends on the framework. A **React + Vite** project usually has `index.html` and `src/`. A **Next.js** project usually has an `app/` or `pages/` folder and `next.config.js`, with no `index.html`.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka VS Code.', en: 'Launch VS Code.' },
            { id: 'Pilih **File → Open Folder...** (macOS: **File → Open...**).', en: 'Choose **File → Open Folder...** (macOS: **File → Open...**).' },
            { id: 'Pilih folder `my-first-vibecoding-project` yang sudah diekstrak. Jika ditanya, klik **Yes, I trust the authors** hanya karena ini proyekmu sendiri.', en: 'Select the extracted `my-first-vibecoding-project` folder. If asked, click **Yes, I trust the authors** only because this is your own project.' },
            { id: 'Buka terminal terintegrasi: **Terminal → New Terminal** atau tekan ``Ctrl+` `` (macOS juga ``Ctrl+` ``).', en: 'Open the integrated terminal: **Terminal → New Terminal** or press ``Ctrl+` `` (also ``Ctrl+` `` on macOS).' },
            { id: 'Periksa struktur folder di panel Explorer dan buka `package.json`.', en: 'Inspect the folder structure in the Explorer panel and open `package.json`.' },
          ],
        },
        {
          type: 'os',
          tabs: [
            { os: 'windows', blocks: [{ type: 'code', lang: 'powershell', code: 'pwd\nls', caption: { id: 'Pastikan terminal ada di folder proyek', en: 'Confirm the terminal is in the project folder' } }] },
            { os: 'macos', blocks: [{ type: 'code', lang: 'bash', code: 'pwd\nls -a', caption: { id: 'Pastikan terminal ada di folder proyek', en: 'Confirm the terminal is in the project folder' } }] },
            { os: 'linux', blocks: [{ type: 'code', lang: 'bash', code: 'pwd\nls -a', caption: { id: 'Pastikan terminal ada di folder proyek', en: 'Confirm the terminal is in the project folder' } }] },
          ],
        },
      ],
      result: {
        id: 'Proyekmu terbuka di VS Code, terminal berada di folder proyek, dan kamu melihat `package.json` di daftar file.',
        en: 'Your project is open in VS Code, the terminal is in the project folder, and you can see `package.json` in the file list.',
      },
      troubleshooting: [
        {
          problem: { id: 'Explorer kosong atau hanya ada satu file.', en: 'The Explorer is empty or shows only one file.' },
          solution: [
            { type: 'p', text: { id: 'Kamu membuka file, bukan folder. Gunakan **File → Open Folder** dan pilih folder yang berisi `package.json`.', en: 'You opened a file, not a folder. Use **File → Open Folder** and pick the folder containing `package.json`.' } },
          ],
        },
        {
          problem: { id: 'Terminal berada di folder yang salah.', en: 'The terminal is in the wrong folder.' },
          solution: [
            { type: 'p', text: { id: 'Pindah dengan `cd`, contoh:', en: 'Move there with `cd`, for example:' } },
            { type: 'code', lang: 'bash', code: 'cd ~/Documents/projects/my-first-vibecoding-project' },
          ],
        },
      ],
      checklist: [
        { id: 'Aku membuka folder proyek di VS Code.', en: 'I opened the project folder in VS Code.' },
        { id: 'Aku membuka terminal terintegrasi.', en: 'I opened the integrated terminal.' },
        { id: 'Aku menemukan `package.json`, `src/`, dan `.gitignore`.', en: 'I found `package.json`, `src/`, and `.gitignore`.' },
        { id: 'Aku tahu apakah proyekku memakai Vite atau Next.js.', en: 'I know whether my project uses Vite or Next.js.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 7
    {
      id: 'm03-install-and-run',
      title: { id: 'Install Dependencies dan Jalankan Proyek', en: 'Install Dependencies and Run the Project' },
      objective: {
        id: 'Menginstall dependencies proyek dan menjalankan development server untuk melihat website di localhost.',
        en: 'Install project dependencies and start the development server to see the website on localhost.',
      },
      minutes: 15,
      mascot: {
        id: 'Satu perintah, lalu website-mu hidup di browser. Ajaib, kan?',
        en: 'One command, and your website comes alive in the browser. Magic, right?',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Dependencies** adalah paket kode buatan orang lain yang dipakai proyekmu, misalnya React dan Three.js. Daftarnya ada di `package.json`. Perintah install mengunduh semuanya ke folder `node_modules/` dan membuat lockfile (`bun.lock` atau `package-lock.json`) agar versinya konsisten.',
            en: '**Dependencies** are packages of code written by others that your project uses, like React and Three.js. They are listed in `package.json`. The install command downloads them into `node_modules/` and creates a lockfile (`bun.lock` or `package-lock.json`) to keep versions consistent.',
          },
        },
        {
          type: 'p',
          text: {
            id: '**Development server** menjalankan website di komputermu dengan alamat seperti `http://localhost:5173` (Vite) atau `http://localhost:3000` (Next.js). Setiap kali kamu menyimpan file, halaman otomatis diperbarui.',
            en: 'The **development server** runs the website on your computer at an address like `http://localhost:5173` (Vite) or `http://localhost:3000` (Next.js). Every time you save a file, the page updates automatically.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Pakai satu package manager saja per proyek. Kalau memilih Bun, jangan campur dengan `npm install`.',
            en: 'Stick to one package manager per project. If you chose Bun, don\'t mix it with `npm install`.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Di terminal VS Code, pastikan kamu berada di folder yang berisi `package.json`.', en: 'In the VS Code terminal, make sure you are in the folder containing `package.json`.' },
            { id: 'Jalankan perintah install sesuai package manager-mu.', en: 'Run the install command for your package manager.' },
            { id: 'Jalankan development server.', en: 'Start the development server.' },
            { id: 'Buka URL `localhost` yang muncul di terminal (Ctrl/Cmd + klik).', en: 'Open the `localhost` URL shown in the terminal (Ctrl/Cmd + click).' },
            { id: 'Untuk menghentikan server, tekan `Ctrl+C` di terminal.', en: 'To stop the server, press `Ctrl+C` in the terminal.' },
          ],
        },
        { type: 'heading', text: { id: 'Dengan Bun', en: 'With Bun' } },
        { type: 'code', lang: 'bash', code: 'bun install\nbun run dev' },
        { type: 'heading', text: { id: 'Dengan npm', en: 'With npm' } },
        {
          type: 'code',
          lang: 'bash',
          code: 'npm install\nnpm run dev',
          output: '  VITE v6.0.0  ready in 420 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose',
        },
      ],
      result: {
        id: 'Website-mu tampil di browser lewat alamat `localhost`, dan dashboard admin bisa dibuka.',
        en: 'Your website appears in the browser at a `localhost` address, and the admin dashboard opens.',
      },
      troubleshooting: [
        {
          problem: { id: 'Perintah bun atau npm tidak dikenali.', en: 'The bun or npm command is not recognized.' },
          error: 'bun: command not found',
          solution: [
            { type: 'p', text: { id: 'Install ulang sesuai modul persiapan, lalu tutup dan buka kembali VS Code agar terminal membaca PATH baru.', en: 'Reinstall it as in the setup module, then close and reopen VS Code so the terminal picks up the new PATH.' } },
          ],
        },
        {
          problem: { id: 'package.json tidak ditemukan.', en: 'package.json not found.' },
          error: "npm error enoent Could not read package.json",
          solution: [
            { type: 'p', text: { id: 'Terminal ada di folder yang salah. Gunakan `cd` ke folder yang berisi `package.json`.', en: 'The terminal is in the wrong folder. `cd` into the folder that contains `package.json`.' } },
          ],
        },
        {
          problem: { id: 'Script dev tidak ada.', en: 'There is no dev script.' },
          error: 'npm error Missing script: "dev"',
          solution: [
            { type: 'p', text: { id: 'Buka `package.json` dan lihat bagian `scripts`. Mungkin namanya `start`. Jika tidak ada sama sekali, minta AI menambahkan script `dev`.', en: 'Open `package.json` and check `scripts`. It may be called `start`. If none exists, ask the AI to add a `dev` script.' } },
          ],
        },
        {
          problem: { id: 'Port sudah dipakai.', en: 'The port is already in use.' },
          error: 'Error: listen EADDRINUSE: address already in use :::3000',
          solution: [
            { type: 'p', text: { id: 'Hentikan server lain dengan `Ctrl+C` di terminalnya, atau gunakan port lain yang ditawarkan.', en: 'Stop the other server with `Ctrl+C` in its terminal, or use the alternate port offered.' } },
          ],
        },
        {
          problem: { id: 'Halaman kosong atau error merah di browser.', en: 'Blank page or a red error in the browser.' },
          solution: [
            { type: 'p', text: { id: 'Buka DevTools (`F12`) → tab **Console**, salin pesan error, lalu kirim ke AI: `I get this error when running the project: [ERROR]. Please fix it.`', en: 'Open DevTools (`F12`) → **Console** tab, copy the error, and send it to the AI: `I get this error when running the project: [ERROR]. Please fix it.`' } },
          ],
        },
      ],
      checklist: [
        { id: 'Aku menjalankan `bun install` atau `npm install` tanpa error.', en: 'I ran `bun install` or `npm install` without errors.' },
        { id: 'Folder `node_modules/` muncul.', en: 'A `node_modules/` folder appeared.' },
        { id: 'Development server berjalan.', en: 'The development server is running.' },
        { id: 'Aku melihat website di `localhost`.', en: 'I can see the website on `localhost`.' },
        { id: 'Aku tahu cara menghentikan server dengan `Ctrl+C`.', en: 'I know how to stop the server with `Ctrl+C`.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 8
    {
      id: 'm03-safe-gitignore',
      title: { id: 'Buat .gitignore yang Aman', en: 'Create a Safe .gitignore' },
      objective: {
        id: 'Memastikan file rahasia dan file yang tidak perlu tidak ikut ter-upload ke GitHub.',
        en: 'Make sure secrets and unnecessary files never get uploaded to GitHub.',
      },
      minutes: 10,
      mascot: {
        id: 'Rahasia itu seperti camilan pribadiku: jangan dibagi ke internet!',
        en: 'Secrets are like my private snacks: never share them with the internet!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'File `.gitignore` memberi tahu Git file dan folder mana yang **tidak** boleh dilacak. Ini penting sebelum kamu push ke GitHub di modul berikutnya.',
            en: 'The `.gitignore` file tells Git which files and folders it must **not** track. This matters before you push to GitHub in the next module.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: '`node_modules/` sangat besar dan bisa dibuat ulang dengan `bun install` / `npm install`.', en: '`node_modules/` is huge and can be recreated with `bun install` / `npm install`.' },
            { id: 'Folder build (`dist/`, `.next/`) dibuat otomatis saat build.', en: 'Build folders (`dist/`, `.next/`) are generated automatically.' },
            { id: 'File `.env` sering berisi API key dan password.', en: '`.env` files often contain API keys and passwords.' },
            { id: 'File sistem dan editor (`.DS_Store`, `Thumbs.db`) tidak relevan bagi orang lain.', en: 'OS and editor files (`.DS_Store`, `Thumbs.db`) are irrelevant to others.' },
          ],
        },
        {
          type: 'callout',
          tone: 'danger',
          title: { id: 'Jangan pernah upload rahasia', en: 'Never upload secrets' },
          text: {
            id: 'Jangan pernah meng-upload API key, password, token pribadi, atau kredensial produksi. Repository publik bisa dipindai bot dalam hitungan menit. Jika rahasia terlanjur ter-upload, segera cabut (revoke) dan buat ulang key tersebut.',
            en: 'Never upload API keys, passwords, private tokens, or production credentials. Public repositories can be scanned by bots within minutes. If a secret is ever uploaded, revoke and regenerate it immediately.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Di Explorer VS Code, cari file `.gitignore` di root proyek. Baca isinya dulu sebelum mengubah apa pun.', en: 'In the VS Code Explorer, find `.gitignore` at the project root. Read it before changing anything.' },
            { id: 'Bandingkan dengan contoh di bawah. Tambahkan baris yang belum ada; jangan hapus aturan khusus dari framework-mu.', en: 'Compare it with the example below. Add missing lines; don\'t remove framework-specific rules.' },
            { id: 'Jika file belum ada, buat file baru bernama persis `.gitignore` (diawali titik, tanpa ekstensi) dan tempel contoh di bawah.', en: 'If the file doesn\'t exist, create a new file named exactly `.gitignore` (leading dot, no extension) and paste the example below.' },
            { id: 'Simpan file (`Ctrl+S` / `Cmd+S`).', en: 'Save the file (`Ctrl+S` / `Cmd+S`).' },
            { id: 'Jika proyek butuh variabel lingkungan, buat `.env.example` berisi nama variabel saja tanpa nilai asli.', en: 'If the project needs environment variables, create `.env.example` with variable names only, no real values.' },
          ],
        },
        { type: 'code', lang: 'gitignore', code: GITIGNORE, caption: { id: 'Contoh .gitignore yang aman', en: 'Example safe .gitignore' } },
        { type: 'code', lang: 'text', code: 'VITE_SITE_NAME=\nVITE_CONTACT_EMAIL=', caption: { id: 'Contoh .env.example (tanpa nilai rahasia)', en: 'Example .env.example (no secret values)' } },
      ],
      result: {
        id: 'Proyekmu punya `.gitignore` yang melindungi `node_modules/`, folder build, dan file `.env` dari upload.',
        en: 'Your project has a `.gitignore` that keeps `node_modules/`, build folders, and `.env` files from being uploaded.',
      },
      troubleshooting: [
        {
          problem: { id: 'File .gitignore tidak terlihat.', en: "I can't see the .gitignore file." },
          solution: [
            { type: 'p', text: { id: 'File berawalan titik tersembunyi di Finder/File Explorer. Di VS Code biasanya tetap terlihat. Di macOS Finder tekan `Cmd+Shift+.`; di Windows aktifkan **View → Show → Hidden items**.', en: 'Dot-files are hidden in Finder/File Explorer but usually visible in VS Code. In macOS Finder press `Cmd+Shift+.`; on Windows enable **View → Show → Hidden items**.' } },
          ],
        },
        {
          problem: { id: 'Windows menyimpannya sebagai .gitignore.txt.', en: 'Windows saved it as .gitignore.txt.' },
          solution: [
            { type: 'p', text: { id: 'Buat file langsung dari VS Code (ikon **New File** di Explorer) agar tidak ada ekstensi tambahan.', en: 'Create the file directly in VS Code (the **New File** icon in Explorer) so no extra extension is added.' } },
          ],
        },
        {
          problem: { id: 'File .env sudah terlanjur di-commit.', en: 'A .env file was already committed.' },
          solution: [
            { type: 'p', text: { id: 'Menambahkan ke `.gitignore` tidak menghapusnya dari riwayat. Hapus dari tracking, lalu cabut dan ganti semua key di dalamnya:', en: 'Adding it to `.gitignore` does not remove it from history. Stop tracking it, then revoke and rotate every key it contained:' } },
            { type: 'code', lang: 'bash', code: 'git rm --cached .env' },
          ],
        },
      ],
      checklist: [
        { id: 'Aku membaca `.gitignore` bawaan sebelum mengubahnya.', en: 'I read the generated `.gitignore` before changing it.' },
        { id: '`node_modules/` dan `.env` sudah ada di `.gitignore`.', en: '`node_modules/` and `.env` are in `.gitignore`.' },
        { id: 'Tidak ada API key atau password di dalam kode proyekku.', en: 'There are no API keys or passwords in my project code.' },
        { id: 'File `.gitignore` sudah disimpan.', en: 'The `.gitignore` file is saved.' },
      ],
    },
  ],
  quiz: [
    {
      question: { id: 'Apa arti teks di dalam kurung siku [ ] pada prompt?', en: 'What does text inside square brackets [ ] in a prompt mean?' },
      options: [
        { id: 'Perintah khusus yang harus dikirim apa adanya', en: 'A special command to send as-is' },
        { id: 'Placeholder yang harus diganti dengan idemu sendiri', en: 'A placeholder to replace with your own idea' },
        { id: 'Komentar yang diabaikan AI', en: 'A comment the AI ignores' },
        { id: 'Kode JavaScript', en: 'JavaScript code' },
      ],
      answer: 1,
      explanation: { id: 'Semua yang ada di [ ] bisa dikustomisasi dan harus diganti sebelum prompt dikirim.', en: 'Everything in [ ] is customizable and should be replaced before sending the prompt.' },
    },
    {
      question: { id: 'Mengapa login admin di proyek ini tidak boleh dianggap aman untuk produksi?', en: 'Why must the admin login in this project not be treated as production-secure?' },
      options: [
        { id: 'Karena memakai TypeScript', en: 'Because it uses TypeScript' },
        { id: 'Karena datanya disimpan di localStorage browser dan bisa diubah siapa saja', en: 'Because data lives in browser localStorage and anyone can change it' },
        { id: 'Karena tidak memakai Three.js', en: "Because it doesn't use Three.js" },
        { id: 'Karena website-nya responsif', en: 'Because the site is responsive' },
      ],
      answer: 1,
      explanation: { id: 'Autentikasi di browser bisa dilihat dan dimanipulasi lewat DevTools. Login sungguhan butuh verifikasi di server.', en: 'Browser-side auth can be inspected and manipulated via DevTools. Real login needs server-side verification.' },
    },
    {
      question: { id: 'Apa yang dilakukan `bun install` atau `npm install`?', en: 'What does `bun install` or `npm install` do?' },
      options: [
        { id: 'Meng-upload proyek ke GitHub', en: 'Uploads the project to GitHub' },
        { id: 'Mengunduh dependencies dari package.json ke node_modules', en: 'Downloads dependencies from package.json into node_modules' },
        { id: 'Men-deploy website ke internet', en: 'Deploys the website to the internet' },
        { id: 'Menghapus file .env', en: 'Deletes the .env file' },
      ],
      answer: 1,
      explanation: { id: 'Perintah install membaca package.json dan mengunduh paket yang dibutuhkan ke node_modules.', en: 'The install command reads package.json and downloads the required packages into node_modules.' },
    },
    {
      question: { id: 'File mana yang TIDAK boleh di-upload ke GitHub?', en: 'Which file must NOT be uploaded to GitHub?' },
      options: [
        { id: '`README.md`', en: '`README.md`' },
        { id: '`package.json`', en: '`package.json`' },
        { id: '`.env` berisi API key', en: '`.env` containing API keys' },
        { id: '`.env.example` tanpa nilai rahasia', en: '`.env.example` with no secret values' },
      ],
      answer: 2,
      explanation: { id: 'File .env menyimpan rahasia. .env.example aman karena hanya berisi nama variabel.', en: '.env holds secrets. .env.example is safe because it only lists variable names.' },
    },
    {
      question: { id: 'AI memberikan kode yang terlihat rapi. Apa langkah terbaik berikutnya?', en: 'The AI gives you neat-looking code. What is the best next step?' },
      options: [
        { id: 'Langsung deploy', en: 'Deploy immediately' },
        { id: 'Uji navigasi, tampilan responsif, dan fitur CRUD, lalu minta perbaikan jika perlu', en: 'Test navigation, responsive layout, and CRUD features, then request fixes if needed' },
        { id: 'Hapus .gitignore', en: 'Delete .gitignore' },
        { id: 'Mulai percakapan baru dan ulangi dari awal', en: 'Start a new chat and redo everything' },
      ],
      answer: 1,
      explanation: { id: 'Jangan menerima kode AI begitu saja. Selalu review dan uji sebelum melanjutkan.', en: "Don't blindly accept AI code. Always review and test before moving on." },
    },
  ],
}

export default m03

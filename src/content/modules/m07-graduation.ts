import type { Module } from '../../types/content'

const m07: Module = {
  id: 'm07',
  number: '07',
  title: {
    id: 'Final Project dan Kelulusan',
    en: 'Final Project and Graduation',
  },
  objective: {
    id: 'Menunjukkan semua yang sudah kamu pelajari lewat satu aplikasi yang benar-benar milikmu.',
    en: 'Demonstrate everything you have learned through one application that is truly yours.',
  },
  lessons: [
    // ─────────────────────────────────────────────────────────────── L1
    {
      id: 'm07-final-project',
      title: { id: 'Checklist Final Project & Showcase', en: 'Final Project Checklist & Showcase' },
      objective: {
        id: 'Memastikan final project kamu lengkap dan siap dipresentasikan ke orang lain.',
        en: 'Make sure your final project is complete and ready to present to others.',
      },
      minutes: 30,
      mascot: {
        id: 'Lihat sejauh mana kamu sudah melangkah! Yuk, cek satu per satu lalu pamerkan karyamu. 🎓',
        en: "Look how far you've come! Let's check everything off, then show off your work. 🎓",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Final project kamu adalah website B2C yang kamu bangun sejak Modul 03: dibuat bersama AI, dijalankan di VS Code, disimpan di GitHub, di-deploy ke Vercel, lalu disempurnakan dengan advanced prompting.',
            en: 'Your final project is the B2C website you have been building since Module 03: created with AI, run in VS Code, saved on GitHub, deployed to Vercel, then refined with advanced prompting.',
          },
        },
        {
          type: 'illustration',
          name: 'dev-workflow',
          caption: {
            id: 'Seluruh alur yang sudah kamu kuasai: ide → prompt AI → review → lokal → GitHub → Vercel.',
            en: 'The whole workflow you now own: idea → AI prompt → review → local → GitHub → Vercel.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Project yang "selesai" bukan hanya yang berjalan, tapi yang bisa kamu **jelaskan**: apa yang dibuat, bagaimana kamu memandu AI, dan masalah apa yang berhasil kamu atasi.',
            en: 'A "finished" project is not just one that runs, but one you can **explain**: what it does, how you guided the AI, and which problems you solved.',
          },
        },
      ],
      instructions: [
        { type: 'heading', text: { id: '1. Cek kelengkapan project', en: '1. Check your project is complete' } },
        {
          type: 'list',
          items: [
            { id: 'Buka URL Vercel kamu dan cek semua fitur di desktop dan HP.', en: 'Open your Vercel URL and check every feature on desktop and phone.' },
            { id: 'Jalankan project di VS Code dengan `npm run dev` (atau `bun run dev`).', en: 'Run the project in VS Code with `npm run dev` (or `bun run dev`).' },
            { id: 'Pastikan repository GitHub sudah berisi commit terbaru.', en: 'Make sure the GitHub repository contains your latest commits.' },
            { id: 'Centang checklist di bawah lesson ini satu per satu.', en: 'Tick off the checklist below this lesson one by one.' },
          ],
        },
        { type: 'heading', text: { id: '2. Rapikan README', en: '2. Polish the README' } },
        {
          type: 'p',
          text: {
            id: 'README adalah halaman depan repository kamu. Minta AI membantu menulisnya, lalu periksa dan sesuaikan isinya:',
            en: 'The README is the front page of your repository. Ask the AI to help write it, then review and adjust it:',
          },
        },
        {
          type: 'prompt',
          id: 'm07-final-project-readme',
          title: { id: 'Buat README project', en: 'Write a project README' },
          description: {
            id: 'Isi bagian dalam kurung siku dengan detail project kamu.',
            en: 'Fill in the bracketed parts with your project details.',
          },
          prompt:
            'Act as a technical writer.\n\nWrite a clear README.md for my project.\n\nProject name: [PROJECT NAME]\nBusiness idea: [YOUR BUSINESS IDEA]\nLive URL: [YOUR VERCEL URL]\nTech stack: [e.g. React, Vite, TypeScript, Three.js]\nPackage manager: [Bun / npm]\nImprovements I made with advanced prompting: [LIST YOUR IMPROVEMENTS]\n\nInclude:\n- Short description.\n- Live demo link.\n- Features list.\n- How to install and run locally.\n- How to build.\n- A note that the admin login is a demonstration only and not production-secure.\n\nKeep it concise and beginner-friendly.',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'git add README.md\ngit commit -m "Add project README"\ngit push',
          caption: { id: 'Push README — Vercel ikut deploy ulang otomatis.', en: 'Push the README — Vercel redeploys automatically.' },
        },
        { type: 'heading', text: { id: '3. Presentasikan project kamu', en: '3. Present your project' } },
        {
          type: 'list',
          items: [
            {
              id: '**Mulai dari masalah**: jelaskan ide bisnis dan siapa target pelanggannya (±30 detik).',
              en: '**Start with the problem**: explain the business idea and who the customers are (~30 seconds).',
            },
            {
              id: '**Demo langsung** di URL Vercel: hero, produk, microblog, lalu admin CRUD. Tunjukkan juga tampilan mobile.',
              en: '**Live demo** at the Vercel URL: hero, products, microblog, then admin CRUD. Show the mobile view too.',
            },
            {
              id: '**Ceritakan proses**: tunjukkan satu prompt yang kamu tulis dan bagaimana kamu memperbaikinya dari vague menjadi spesifik.',
              en: '**Tell the process**: show one prompt you wrote and how you refined it from vague to specific.',
            },
            {
              id: '**Tunjukkan perbaikan**: sebutkan minimal tiga improvement dari Modul 06 (screenshot sebelum/sesudah sangat membantu).',
              en: '**Show improvements**: mention at least three improvements from Module 06 (before/after screenshots help a lot).',
            },
            {
              id: '**Satu bug yang kamu atasi**: apa errornya, bagaimana kamu menemukan penyebabnya, dan cara memperbaikinya.',
              en: '**One bug you fixed**: what the error was, how you found the cause, and how you fixed it.',
            },
            {
              id: '**Jujur soal batasan**: login admin hanya demo dan data tersimpan di `localStorage`, bukan database.',
              en: '**Be honest about limits**: the admin login is a demo and data lives in `localStorage`, not a database.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Bagikan karyamu', en: 'Share your work' },
          text: {
            id: 'Taruh link Vercel di bagian **About** repository GitHub, pin repository di profilmu, dan bagikan ke teman atau di LinkedIn. Ini jadi portofolio pertamamu!',
            en: 'Add the Vercel link to the repository **About** section, pin the repository on your profile, and share it with friends or on LinkedIn. This is your first portfolio piece!',
          },
        },
      ],
      result: {
        id: 'Final project kamu lengkap, terdokumentasi di README, online di Vercel, dan siap kamu presentasikan dengan percaya diri.',
        en: 'Your final project is complete, documented in a README, live on Vercel, and ready to present with confidence.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Ada item checklist yang belum berfungsi menjelang presentasi.',
            en: 'Some checklist items still do not work right before the presentation.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Jangan minta AI membangun ulang semuanya. Kerjakan satu masalah saja: jelaskan konteks, komponen yang bermasalah, perilaku yang diharapkan, dan error yang muncul. Review hasilnya, test, lalu commit dan push sebelum lanjut ke masalah berikutnya.',
                en: "Don't ask the AI to rebuild everything. Tackle one issue at a time: describe the context, the affected component, the expected behavior, and the error. Review the result, test, then commit and push before moving to the next issue.",
              },
            },
          ],
        },
        {
          problem: {
            id: 'Website online berbeda dengan versi di komputer.',
            en: 'The live website differs from the local version.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Kemungkinan ada perubahan yang belum di-push. Jalankan `git status`; kalau ada file berubah, lakukan `git add .`, `git commit`, dan `git push`, lalu cek tab Deployments di Vercel.',
                en: 'You probably have unpushed changes. Run `git status`; if files changed, run `git add .`, `git commit`, and `git push`, then check the Deployments tab in Vercel.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Website hasil AI yang berfungsi', en: 'Working AI-generated website' },
        { id: 'Identitas visual yang sudah dikustomisasi', en: 'Customized visual identity' },
        { id: 'Layout responsif', en: 'Responsive layouts' },
        { id: 'CRUD produk berfungsi', en: 'Functional product CRUD' },
        { id: 'CRUD microblog berfungsi', en: 'Functional microblog CRUD' },
        { id: 'Project lokal berjalan di VS Code', en: 'Local project running in VS Code' },
        { id: 'Repository GitHub', en: 'GitHub repository' },
        { id: 'Deployment Vercel berhasil', en: 'Successful Vercel deployment' },
        { id: 'Minimal tiga improvement lewat advanced prompting', en: 'At least three improvements via advanced prompting' },
        { id: 'Memahami dasar-dasar debugging', en: 'Understanding of basic debugging' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L2
    {
      id: 'm07-keep-learning',
      title: { id: 'Terus Belajar: Langkah Selanjutnya', en: 'Keep Learning: Next Steps' },
      objective: {
        id: 'Merencanakan langkah belajar berikutnya dan tahu ke mana harus mencari bantuan.',
        en: 'Plan your next learning steps and know where to find help.',
      },
      minutes: 10,
      mascot: {
        id: 'Ini bukan akhir, ini awal petualanganmu. Aku bangga banget sama kamu! 💛',
        en: "This isn't the end — it's the start of your adventure. I'm so proud of you! 💛",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Kamu sudah berangkat dari nol sampai punya aplikasi sendiri yang online. Skill terpenting yang kamu bawa bukan sekadar perintah Git atau tombol Deploy, melainkan cara **berkomunikasi dengan AI**: memberi konteks, membatasi scope, me-review hasil, dan memperbaiki secara bertahap.',
            en: 'You went from zero to owning a live application. The most important skill you carry is not just Git commands or the Deploy button, but how to **communicate with AI**: give context, limit scope, review results, and improve step by step.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Ide langkah berikutnya:',
            en: 'Ideas for what to do next:',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            {
              id: 'Minta AI menjelaskan komponen di project kamu (pakai prompt "patient programming instructor" dari Modul 06) sampai kamu paham cara kerjanya.',
              en: 'Ask the AI to explain components in your project (use the "patient programming instructor" prompt from Module 06) until you understand how they work.',
            },
            {
              id: 'Pelajari dasar HTML, CSS, JavaScript, dan React supaya review kode AI makin tajam.',
              en: 'Learn the basics of HTML, CSS, JavaScript, and React so your review of AI code gets sharper.',
            },
            {
              id: 'Coba pakai branch dan Preview Deployment di Vercel untuk eksperimen tanpa mengganggu website utama.',
              en: 'Try branches and Vercel Preview Deployments to experiment without touching your main site.',
            },
            {
              id: 'Selanjutnya, pelajari backend dan database sungguhan beserta autentikasi yang aman, supaya aplikasi bisa dipakai pelanggan nyata.',
              en: 'Next, learn about a real backend and database with secure authentication, so the app can serve real customers.',
            },
            {
              id: 'Bangun project kedua dengan ide berbeda — pengulangan adalah cara tercepat untuk mahir.',
              en: 'Build a second project with a different idea — repetition is the fastest way to mastery.',
            },
          ],
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Bookmark sumber belajar dan tools di bawah ini.', en: 'Bookmark the learning resources and tools below.' },
            { id: 'Pilih satu ide dari daftar "langkah berikutnya" dan jadwalkan kapan kamu mulai.', en: 'Pick one idea from the "next steps" list and schedule when you will start.' },
            { id: 'Minta AI membuat rencana belajar yang sesuai dengan waktumu.', en: 'Ask the AI to make a study plan that fits your schedule.' },
          ],
        },
        { type: 'heading', text: { id: 'Tools yang sudah kamu pakai', en: 'Tools you have used' } },
        {
          type: 'resources',
          items: [
            {
              name: 'GitHub',
              url: 'https://github.com/',
              description: { id: 'Simpan, kelola, dan pamerkan semua project kamu.', en: 'Store, manage, and showcase all your projects.' },
            },
            {
              name: 'Vercel',
              url: 'https://vercel.com/',
              description: { id: 'Deploy project berikutnya dalam hitungan menit.', en: 'Deploy your next project in minutes.' },
            },
            {
              name: 'Visual Studio Code',
              url: 'https://code.visualstudio.com/',
              description: { id: 'Editor kode tempat kamu bekerja setiap hari.', en: 'The code editor where you work every day.' },
            },
            {
              name: 'Bun',
              url: 'https://bun.com/',
              description: { id: 'Runtime dan package manager JavaScript yang cepat (opsional).', en: 'A fast JavaScript runtime and package manager (optional).' },
            },
          ],
        },
        { type: 'heading', text: { id: 'AI coding assistant', en: 'AI coding assistants' } },
        {
          type: 'resources',
          items: [
            {
              name: 'ChatGPT',
              url: 'https://chatgpt.com/',
              description: { id: 'Asisten AI dari OpenAI.', en: 'AI assistant by OpenAI.' },
            },
            {
              name: 'Claude',
              url: 'https://claude.ai/',
              description: { id: 'Asisten AI dari Anthropic.', en: 'AI assistant by Anthropic.' },
            },
            {
              name: 'Gemini',
              url: 'https://gemini.google.com/',
              description: { id: 'Asisten AI dari Google.', en: 'AI assistant by Google.' },
            },
            {
              name: 'Z.ai',
              url: 'https://chat.z.ai/',
              description: { id: 'Asisten AI dari Z.ai (Zhipu AI).', en: 'AI assistant by Z.ai (Zhipu AI).' },
            },
            {
              name: 'DeepSeek',
              url: 'https://chat.deepseek.com/',
              description: { id: 'Asisten AI dari DeepSeek.', en: 'AI assistant by DeepSeek.' },
            },
          ],
        },
        {
          type: 'prompt',
          id: 'm07-keep-learning-plan',
          title: { id: 'Buat rencana belajar', en: 'Create a study plan' },
          description: {
            id: 'Minta AI menyusun rencana belajar yang realistis untukmu.',
            en: 'Ask the AI to build a realistic learning plan for you.',
          },
          prompt:
            'Act as a supportive programming mentor.\n\nI just finished a beginner vibecoding course. I built and deployed a React website with an AI assistant, Git, GitHub, and Vercel.\n\nMy goal: [YOUR GOAL, e.g. turn my demo shop into a real online store]\nTime available: [HOURS PER WEEK]\nWhat I find difficult: [YOUR WEAK POINTS]\n\nCreate a 4-week learning plan with:\n- Weekly goals.\n- One small hands-on project per week.\n- Concepts I should understand, not just copy.\n\nKeep it realistic and beginner-friendly.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            id: 'Fitur dan batas paket gratis setiap layanan bisa berubah. Selalu cek situs resminya untuk informasi terbaru.',
            en: "Each service's features and free-tier limits can change. Always check the official site for current information.",
          },
        },
      ],
      result: {
        id: 'Kamu punya daftar tools, sumber bantuan, dan rencana belajar berikutnya. Selamat — kamu sudah berangkat dari nol sampai punya aplikasi sendiri!',
        en: "You have your tools, places to get help, and a next-step learning plan. Congratulations — you've gone from zero to owning your own application!",
      },
      troubleshooting: [
        {
          problem: { id: 'Bingung harus mulai dari mana setelah course ini.', en: 'Not sure where to start after this course.' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Mulai dari yang kecil: tambah satu fitur kecil ke project kamu minggu ini (misalnya halaman kontak atau filter produk). Ulangi siklus prompt → review → test → commit → push. Konsistensi lebih penting daripada kecepatan.',
                en: 'Start small: add one small feature to your project this week (e.g. a contact page or product filter). Repeat the cycle prompt → review → test → commit → push. Consistency matters more than speed.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Bookmark GitHub, Vercel, VS Code, dan Bun', en: 'Bookmarked GitHub, Vercel, VS Code, and Bun' },
        { id: 'Memilih AI assistant favorit untuk dipakai terus', en: 'Chose a favorite AI assistant to keep using' },
        { id: 'Membuat rencana belajar dengan AI', en: 'Created a study plan with AI' },
        { id: 'Memilih langkah berikutnya dan jadwal memulainya', en: 'Picked a next step and when to start it' },
      ],
    },
  ],
}

export default m07

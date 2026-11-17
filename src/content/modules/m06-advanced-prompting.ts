import type { Module } from '../../types/content'

const m06: Module = {
  id: 'm06',
  number: '06',
  title: {
    id: 'Advanced Prompting: Dari Dasar ke Kreatif',
    en: 'Advanced Prompting: From Basic to Creative',
  },
  objective: {
    id: 'Tingkatkan project pertamamu lewat prompting yang iteratif: pahami alasan di balik setiap prompt, bandingkan prompt yang samar dengan yang spesifik, dan lakukan perubahan kecil yang terkontrol satu per satu.',
    en: 'Improve your first project through iterative prompting: understand the reasoning behind every prompt, compare vague and specific prompts, and make small, controlled changes one at a time.',
  },
  lessons: [
    // ─────────────────────────────────────────────── L1
    {
      id: 'm06-hero-section',
      title: { id: 'Memperbaiki Hero Section', en: 'Improve the Hero Section' },
      objective: {
        id: 'Belajar prinsip prompting lanjutan dan memakainya untuk mendesain ulang hero section tanpa merusak bagian lain website.',
        en: 'Learn the advanced prompting principles and use them to redesign the hero section without breaking the rest of the website.',
      },
      minutes: 25,
      mascot: {
        id: 'Prompt yang jelas = hasil yang jelas. Yuk, mulai dari bagian paling atas website-mu!',
        en: 'Clear prompt, clear result. Let’s start at the very top of your website!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Di modul ini kamu tidak lagi membuat website dari nol. Kamu akan **memperbaiki** project yang sudah ada, sedikit demi sedikit. Agar AI membantu (bukan malah merusak), ikuti prinsip-prinsip ini di setiap prompt:',
            en: 'In this module you are no longer building a website from scratch. You will **improve** the project you already have, step by step. To make the AI help you (instead of breaking things), follow these principles in every prompt:',
          },
        },
        {
          type: 'list',
          items: [
            { id: '**Berikan konteks sebelum instruksi.** Ceritakan dulu project-mu dan perannya AI, baru minta sesuatu.', en: '**Give context before instructions.** Describe your project and the AI’s role first, then ask for something.' },
            { id: '**Tentukan hasil yang diharapkan.** Jelaskan seperti apa “berhasil” itu.', en: '**Define the expected outcome.** Explain what “done” looks like.' },
            { id: '**Sebutkan komponen yang mau diubah.** Misalnya “hanya hero section”, bukan “website-nya”.', en: '**Specify the component to modify.** For example “only the hero section”, not “the website”.' },
            { id: '**Jelaskan interaksi yang diinginkan.** Apa yang terjadi saat pengguna hover, klik, scroll, atau menyentuh layar?', en: '**Explain the desired interaction.** What happens when the user hovers, clicks, scrolls, or taps?' },
            { id: '**Sebutkan batasan teknis.** Library, performa, mobile, aksesibilitas.', en: '**Mention technical constraints.** Libraries, performance, mobile, accessibility.' },
            { id: '**Minta perubahan yang fokus.** Satu perbaikan per prompt.', en: '**Request focused changes.** One improvement per prompt.' },
            { id: '**Review hasilnya sebelum lanjut.** Cek di browser, baru minta perubahan berikutnya.', en: '**Review results before proceeding.** Check it in the browser before asking for the next change.' },
            { id: '**Jangan minta AI membangun ulang semuanya.** Itu cara tercepat kehilangan fitur yang sudah jalan.', en: '**Avoid asking the AI to rebuild everything.** It is the fastest way to lose features that already work.' },
          ],
        },
        { type: 'illustration', name: 'prompt-anatomy', caption: { id: 'Bagian-bagian prompt yang baik: peran, konteks, tujuan, desain, kebutuhan, batasan, teknologi, dan output.', en: 'Parts of a good prompt: role, context, objective, design, requirements, constraints, technology, and output.' } },
        {
          type: 'p',
          text: {
            id: 'Contoh pertama: hero section, yaitu bagian besar paling atas yang pertama kali dilihat pengunjung. Bandingkan dua prompt berikut.',
            en: 'First example: the hero section, the large area at the very top that visitors see first. Compare these two prompts.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Make the hero section more attractive.',
            why: {
              id: '“Menarik” itu subjektif. AI tidak tahu apa yang harus dipertahankan (warna, font, brand), apa yang perlu diperbaiki, atau bagian mana yang tidak boleh disentuh. Hasilnya bisa berupa warna baru yang tidak cocok, atau AI ikut mengubah navbar dan section lain.',
              en: '“Attractive” is subjective. The AI doesn’t know what to keep (colors, fonts, brand), what to improve, or what not to touch. You may get new colors that don’t match, or the AI may also change the navbar and other sections.',
            },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Act as a senior UI/UX designer and frontend developer.\n\nRedesign only the hero section of my existing website.\n\nKeep the current brand identity, color palette, and typography.\n\nImprove:\n- Visual hierarchy.\n- Headline readability.\n- CTA placement.\n- Product presentation.\n- Spacing and alignment.\n\nMake the hero feel premium and visually engaging.\n\nEnsure mobile responsiveness.\n\nDo not modify other sections or unrelated components.',
            why: {
              id: 'Ada peran, cakupan yang jelas (hanya hero), apa yang dipertahankan, daftar perbaikan yang terukur, kebutuhan mobile, dan larangan menyentuh bagian lain.',
              en: 'It has a role, a clear scope (hero only), what to keep, a measurable list of improvements, a mobile requirement, and an explicit ban on touching other parts.',
            },
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Kenapa membatasi cakupan itu penting?', en: 'Why limiting scope matters' },
          text: {
            id: 'Semakin kecil area yang diubah, semakin mudah kamu me-review hasilnya, menemukan bug, dan membatalkannya kalau tidak cocok. Kalimat seperti `Do not modify other sections` melindungi pekerjaan yang sudah berjalan.',
            en: 'The smaller the area that changes, the easier it is to review the result, spot bugs, and undo it if you don’t like it. A line like `Do not modify other sections` protects the work that already runs.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Pastikan semua perubahan sebelumnya sudah di-commit, supaya kamu punya titik aman untuk kembali.', en: 'Make sure all previous changes are committed so you have a safe point to return to.' },
            { id: 'Jalankan website di lokal dan buka URL localhost-nya di browser.', en: 'Run the website locally and open its localhost URL in the browser.' },
            { id: 'Salin prompt di bawah ke AI assistant kamu. Kalau AI tidak bisa membaca project-mu langsung, lampirkan atau tempel file komponen hero-nya.', en: 'Copy the prompt below into your AI assistant. If the AI can’t read your project directly, attach or paste the hero component file.' },
            { id: 'Terapkan perubahan, lalu cek hero di layar desktop dan mobile (gunakan DevTools → device toolbar).', en: 'Apply the changes, then check the hero on desktop and mobile (use DevTools → device toolbar).' },
            { id: 'Pastikan section lain tidak ikut berubah. Kalau ada yang rusak, minta AI memperbaikinya secara spesifik.', en: 'Make sure other sections did not change. If something broke, ask the AI to fix that specifically.' },
            { id: 'Kalau sudah puas, commit dan push.', en: 'When you’re happy, commit and push.' },
          ],
        },
        { type: 'code', lang: 'bash', code: 'git status\ngit add .\ngit commit -m "Save progress before hero redesign"', caption: { id: 'Titik aman sebelum mulai (lewati jika tidak ada perubahan).', en: 'Safe point before you start (skip if there are no changes).' } },
        { type: 'code', lang: 'bash', code: 'bun run dev', caption: { id: 'Atau `npm run dev`, sesuai package manager project-mu.', en: 'Or `npm run dev`, depending on your project’s package manager.' } },
        {
          type: 'prompt',
          id: 'm06-hero-section-redesign',
          title: { id: 'Redesign hero section', en: 'Hero section redesign' },
          description: { id: 'Mendesain ulang hanya hero section dengan tetap mempertahankan identitas brand.', en: 'Redesigns only the hero section while keeping your brand identity.' },
          prompt: 'Act as a senior UI/UX designer and frontend developer.\n\nRedesign only the hero section of my existing website.\n\nKeep the current brand identity, color palette, and typography.\n\nImprove:\n- Visual hierarchy.\n- Headline readability.\n- CTA placement.\n- Product presentation.\n- Spacing and alignment.\n\nMake the hero feel premium and visually engaging.\n\nEnsure mobile responsiveness.\n\nDo not modify other sections or unrelated components.',
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Redesign hero section"\ngit push' },
      ],
      result: {
        id: 'Hero section kamu terlihat lebih rapi dan premium, headline mudah dibaca, tombol CTA jelas, tampil baik di mobile, dan section lain tetap sama seperti sebelumnya.',
        en: 'Your hero section looks cleaner and more premium, the headline is easy to read, the CTA is clear, it works on mobile, and every other section is unchanged.',
      },
      troubleshooting: [
        {
          problem: { id: 'AI ikut mengubah navbar, footer, atau section lain.', en: 'The AI also changed the navbar, footer, or other sections.' },
          solution: [
            { type: 'p', text: { id: 'Batalkan perubahan pada file yang tidak seharusnya disentuh, lalu ulangi dengan menyebut nama file hero secara eksplisit.', en: 'Discard changes to files that should not have been touched, then retry naming the hero file explicitly.' } },
            { type: 'code', lang: 'bash', code: 'git diff --stat\ngit restore [PATH/TO/FILE]', caption: { id: '`git restore` membuang perubahan yang belum di-commit pada file tersebut.', en: '`git restore` discards uncommitted changes in that file.' } },
          ],
        },
        {
          problem: { id: 'Warna atau font berubah jadi tidak sesuai brand.', en: 'Colors or fonts changed and no longer match the brand.' },
          solution: [
            { type: 'p', text: { id: 'Sebutkan nilai yang harus dipakai, misalnya: “Use only these colors: [PRIMARY COLOR], [ACCENT COLOR]. Keep the font [FONT NAME].”', en: 'Name the exact values to use, e.g. “Use only these colors: [PRIMARY COLOR], [ACCENT COLOR]. Keep the font [FONT NAME].”' } },
          ],
        },
        {
          problem: { id: 'Hero rapi di desktop tapi berantakan di HP.', en: 'The hero looks good on desktop but breaks on phones.' },
          solution: [
            { type: 'p', text: { id: 'Minta perbaikan yang fokus: “On screens under 640px wide, the headline overflows and the image overlaps the button. Fix only the hero layout on mobile.”', en: 'Ask for a focused fix: “On screens under 640px wide, the headline overflows and the image overlaps the button. Fix only the hero layout on mobile.”' } },
          ],
        },
      ],
      checklist: [
        { id: 'Saya bisa menyebutkan prinsip-prinsip prompting lanjutan.', en: 'I can name the advanced prompting principles.' },
        { id: 'Saya paham kenapa prompt “Make the hero section more attractive.” terlalu samar.', en: 'I understand why “Make the hero section more attractive.” is too vague.' },
        { id: 'Hero section sudah didesain ulang dan dicek di desktop & mobile.', en: 'The hero section is redesigned and checked on desktop & mobile.' },
        { id: 'Section lain tidak ikut berubah.', en: 'Other sections did not change.' },
        { id: 'Perubahan sudah di-commit dan di-push.', en: 'The change is committed and pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L2
    {
      id: 'm06-cursor-motion',
      title: { id: 'Gerakan 3D Mengikuti Kursor', en: 'Cursor-Responsive Motion' },
      objective: {
        id: 'Menambahkan objek 3D ringan di hero yang bereaksi halus terhadap gerakan kursor dan sentuhan, serta memahami konsep di baliknya.',
        en: 'Add a lightweight 3D object to the hero that reacts smoothly to cursor and touch, and understand the concepts behind it.',
      },
      minutes: 35,
      mascot: {
        id: 'Aku suka mengejar kursor! Sekarang giliran objek 3D-mu yang melakukannya.',
        en: 'I love chasing cursors! Now it’s your 3D object’s turn.',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Efek “mengikuti kursor” membuat website terasa hidup. Prompt di lesson ini memakai **Three.js**, library JavaScript populer untuk grafis 3D di browser. Three.js bisa menggambar dengan **WebGPU** (teknologi grafis browser yang lebih baru) dan memakai **WebGL** sebagai cadangan (fallback) di browser yang belum mendukung WebGPU.',
            en: 'A “follow the cursor” effect makes a website feel alive. The prompt in this lesson uses **Three.js**, a popular JavaScript library for 3D graphics in the browser. Three.js can render with **WebGPU** (a newer browser graphics technology) and use **WebGL** as a fallback in browsers that don’t support WebGPU yet.',
          },
        },
        {
          type: 'table',
          head: [{ id: 'Konsep', en: 'Concept' }, { id: 'Artinya', en: 'What it means' }],
          rows: [
            [{ id: 'Cursor tracking', en: 'Cursor tracking' }, { id: 'Website “mendengarkan” event `pointermove` untuk tahu kapan dan ke mana kursor (atau jari) bergerak.', en: 'The website “listens” to `pointermove` events to know when and where the cursor (or finger) moves.' }],
            [{ id: 'Posisi mouse', en: 'Mouse position' }, { id: 'Koordinat kursor diubah jadi angka antara -1 dan 1 (kiri ke kanan, atas ke bawah), supaya mudah dipakai untuk menggerakkan objek.', en: 'The cursor’s coordinates are converted to numbers between -1 and 1 (left to right, top to bottom) so they’re easy to use for moving the object.' }],
            [{ id: 'Rotasi', en: 'Rotation' }, { id: 'Objek diputar sedikit ke arah kursor, seolah-olah “melihat” ke sana.', en: 'The object turns slightly toward the cursor, as if it’s “looking” at it.' }],
            [{ id: 'Parallax', en: 'Parallax' }, { id: 'Lapisan yang berbeda bergerak dengan kecepatan berbeda (yang dekat lebih cepat, yang jauh lebih lambat), sehingga muncul kesan kedalaman.', en: 'Different layers move at different speeds (near ones faster, far ones slower), creating a sense of depth.' }],
            [{ id: 'Interpolasi halus', en: 'Smooth interpolation' }, { id: 'Objek tidak langsung loncat ke target, tapi bergerak sebagian jarak setiap frame (sering disebut “lerp”). Hasilnya gerakan yang lembut.', en: 'The object doesn’t jump to the target; it moves part of the way each frame (often called “lerp”). The result is soft, gliding motion.' }],
            [{ id: 'Animation loop', en: 'Animation loop' }, { id: 'Fungsi yang dijalankan berulang-ulang sekitar 60 kali per detik (biasanya lewat `requestAnimationFrame`) untuk memperbarui dan menggambar ulang scene.', en: 'A function that runs over and over, about 60 times per second (usually via `requestAnimationFrame`), to update and redraw the scene.' }],
            [{ id: 'Performa', en: 'Performance' }, { id: 'Objek sederhana, sedikit lampu, ukuran canvas yang wajar, dan menghentikan animasi saat hero tidak terlihat menjaga website tetap ringan dan baterai HP awet.', en: 'Simple geometry, few lights, a reasonable canvas size, and pausing when the hero is off-screen keep the site light and save phone battery.' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Apa itu prefers-reduced-motion?', en: 'What is prefers-reduced-motion?' },
          text: {
            id: 'Sebagian orang mengaktifkan pengaturan “kurangi gerakan” di sistem operasinya karena animasi bisa membuat pusing. `prefers-reduced-motion` adalah cara website membaca pengaturan itu dan mematikan atau mengurangi animasi.',
            en: 'Some people turn on a “reduce motion” setting in their operating system because animation can make them dizzy. `prefers-reduced-motion` is how a website reads that setting and turns animation off or down.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Add a cool 3D animation to my website.',
            why: { id: 'Tidak jelas di mana, objek apa, bereaksi terhadap apa, dan AI bebas mengganti seluruh halaman.', en: 'No location, no object, no interaction, and the AI is free to replace the whole page.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: { id: 'Prompt lesson ini: menyebut teknologi, perilaku kursor, kehalusan gerak, batas area (hero), performa, sentuhan mobile, aksesibilitas, dan larangan mengganti website.', en: 'This lesson’s prompt: it names the technology, cursor behavior, smoothness, area limit (hero), performance, mobile touch, accessibility, and a ban on replacing the website.' },
            why: { id: 'Setiap baris menutup satu celah yang biasanya membuat AI menebak-nebak.', en: 'Each line closes a gap where the AI would otherwise have to guess.' },
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Commit pekerjaanmu dulu, supaya mudah kembali kalau eksperimen 3D gagal.', en: 'Commit your work first so it’s easy to go back if the 3D experiment fails.' },
            { id: 'Kirim prompt di bawah. Kalau perlu, tambahkan satu kalimat konteks, misalnya “My business sells [PRODUCT TYPE].” supaya objek 3D-nya relevan.', en: 'Send the prompt below. If needed, add one line of context like “My business sells [PRODUCT TYPE].” so the 3D object is relevant.' },
            { id: 'Kalau AI meminta menginstal `three`, jalankan perintah instalasinya.', en: 'If the AI asks to install `three`, run the install command.' },
            { id: 'Gerakkan kursor di atas hero. Objek harus berputar pelan dan halus, bukan tersentak-sentak.', en: 'Move the cursor over the hero. The object should rotate gently and smoothly, not jerk around.' },
            { id: 'Tes di mode mobile DevTools dan, kalau bisa, di HP sungguhan.', en: 'Test in DevTools mobile mode and, if you can, on a real phone.' },
            { id: 'Aktifkan “reduce motion” di sistem operasimu dan pastikan animasinya berkurang atau berhenti.', en: 'Turn on “reduce motion” in your OS and confirm the animation is reduced or stops.' },
          ],
        },
        { type: 'code', lang: 'bash', code: 'bun add three', caption: { id: 'Atau `npm install three`. Jika project memakai TypeScript dan AI menyarankannya, tambahkan juga `@types/three` sebagai dev dependency.', en: 'Or `npm install three`. If the project uses TypeScript and the AI suggests it, also add `@types/three` as a dev dependency.' } },
        {
          type: 'prompt',
          id: 'm06-cursor-motion-hero-3d',
          title: { id: 'Gerakan 3D responsif kursor', en: 'Cursor-responsive 3D motion' },
          description: { id: 'Menambahkan objek 3D interaktif di hero tanpa mengganti website.', en: 'Adds an interactive 3D object to the hero without replacing the website.' },
          prompt: 'Enhance the existing hero section with interactive 3D motion.\n\nUse Three.js and WebGPU where supported, with WebGL fallback.\n\nRequirements:\n\n- Create a lightweight 3D object related to my business.\n- Make the object respond smoothly to cursor movement.\n- Add subtle rotation and parallax.\n- Use smooth interpolation rather than abrupt movement.\n- Keep the animation within the hero section.\n- Optimize rendering performance.\n- Support mobile touch interactions.\n- Respect prefers-reduced-motion.\n\nDo not replace the entire website.\nModify only the necessary components.',
        },
        {
          type: 'os',
          tabs: [
            { os: 'windows', blocks: [{ type: 'p', text: { id: 'Settings → Accessibility → Visual effects → matikan **Animation effects**.', en: 'Settings → Accessibility → Visual effects → turn off **Animation effects**.' } }] },
            { os: 'macos', blocks: [{ type: 'p', text: { id: 'System Settings → Accessibility → Display → aktifkan **Reduce motion**.', en: 'System Settings → Accessibility → Display → turn on **Reduce motion**.' } }] },
            { os: 'linux', blocks: [{ type: 'p', text: { id: 'Di GNOME: Settings → Accessibility → matikan **Animations** (nama menu bisa sedikit berbeda di desktop lain).', en: 'On GNOME: Settings → Accessibility → turn off **Animations** (menu names may differ on other desktops).' } }] },
          ],
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Add cursor-responsive 3D motion to hero"\ngit push' },
      ],
      result: {
        id: 'Hero kamu punya objek 3D ringan yang berputar halus mengikuti kursor atau sentuhan, tetap berada di dalam hero, dan menghormati pengaturan reduce motion.',
        en: 'Your hero has a lightweight 3D object that turns smoothly with the cursor or touch, stays inside the hero, and respects the reduce-motion setting.',
      },
      troubleshooting: [
        {
          problem: { id: 'Modul `three` tidak ditemukan.', en: 'The `three` module can’t be found.' },
          error: 'Failed to resolve import "three"',
          solution: [
            { type: 'p', text: { id: 'Package belum terinstal. Instal lalu jalankan ulang dev server.', en: 'The package isn’t installed. Install it and restart the dev server.' } },
            { type: 'code', lang: 'bash', code: 'bun add three' },
          ],
        },
        {
          problem: { id: 'Canvas kosong/hitam, objek tidak terlihat.', en: 'The canvas is blank/black and the object is invisible.' },
          solution: [
            { type: 'p', text: { id: 'Buka DevTools → Console, salin error-nya, dan pakai prompt debugging di lesson 7. Penyebab umum: kamera terlalu dekat/jauh, tidak ada lampu, atau ukuran canvas 0.', en: 'Open DevTools → Console, copy the error, and use the debugging prompt from lesson 7. Common causes: camera too close/far, no lights, or a 0-size canvas.' } },
          ],
        },
        {
          problem: { id: 'Website jadi berat atau HP panas.', en: 'The site feels heavy or the phone gets hot.' },
          solution: [
            { type: 'p', text: { id: 'Minta: “Reduce the 3D cost: cap device pixel ratio at 2, simplify geometry, and pause the animation loop when the hero is not visible.”', en: 'Ask: “Reduce the 3D cost: cap device pixel ratio at 2, simplify geometry, and pause the animation loop when the hero is not visible.”' } },
          ],
        },
      ],
      checklist: [
        { id: 'Objek 3D muncul di hero dan bereaksi halus terhadap kursor.', en: 'A 3D object appears in the hero and reacts smoothly to the cursor.' },
        { id: 'Sentuhan di mobile juga berfungsi.', en: 'Touch works on mobile.' },
        { id: 'Animasi berkurang saat reduce motion aktif.', en: 'Animation is reduced when reduce motion is on.' },
        { id: 'Saya bisa menjelaskan cursor tracking, parallax, interpolasi, dan animation loop.', en: 'I can explain cursor tracking, parallax, interpolation, and the animation loop.' },
        { id: 'Perubahan sudah di-commit dan di-push.', en: 'The change is committed and pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L3
    {
      id: 'm06-scroll-3d',
      title: { id: 'Animasi 3D Berbasis Scroll', en: 'Scroll-Based 3D Animation' },
      objective: {
        id: 'Membuat objek 3D yang bergerak dan berputar mengikuti progres scroll, dengan tetap ringan dan aman untuk mobile.',
        en: 'Make a 3D object move and rotate with scroll progress while staying lightweight and mobile-friendly.',
      },
      minutes: 35,
      mascot: {
        id: 'Scroll pelan-pelan… lihat objekmu ikut menari dari satu section ke section lain!',
        en: 'Scroll slowly… watch your object dance from one section to the next!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Animasi berbasis scroll membuat pengunjung merasa sedang “bercerita” sambil menggulir halaman. Kuncinya: animasi dikendalikan oleh posisi scroll, bukan oleh waktu.',
            en: 'Scroll-based animation makes visitors feel like they’re moving through a story as they scroll. The key: the animation is driven by scroll position, not by time.',
          },
        },
        {
          type: 'table',
          head: [{ id: 'Konsep', en: 'Concept' }, { id: 'Artinya', en: 'What it means' }],
          rows: [
            [{ id: 'Scroll progress', en: 'Scroll progress' }, { id: 'Angka dari 0 sampai 1 yang menunjukkan seberapa jauh halaman sudah di-scroll (0 = paling atas, 1 = paling bawah atau akhir area tertentu).', en: 'A number from 0 to 1 showing how far the page has scrolled (0 = top, 1 = bottom or the end of a given area).' }],
            [{ id: 'Posisi objek', en: 'Object position' }, { id: 'Letak objek di scene 3D (x, y, z). Progres scroll dipetakan ke posisi, misalnya bergeser dari kanan hero ke tengah section berikutnya.', en: 'Where the object sits in the 3D scene (x, y, z). Scroll progress is mapped to position, e.g. sliding from the right of the hero to the middle of the next section.' }],
            [{ id: 'Rotasi', en: 'Rotation' }, { id: 'Sudut objek ikut berubah sesuai progres, misalnya berputar setengah lingkaran selama scroll.', en: 'The object’s angle changes with progress, e.g. turning half a circle over the scroll.' }],
            [{ id: 'Transisi scene', en: 'Scene transitions' }, { id: 'Perpindahan visual antar section: objek bisa mengecil, berpindah, atau berganti warna saat section baru masuk layar.', en: 'Visual handoff between sections: the object can shrink, move, or change color as a new section enters the screen.' }],
            [{ id: 'Optimasi frame rate', en: 'Frame-rate optimization' }, { id: 'Frame rate adalah berapa kali layar digambar ulang per detik (idealnya ~60). Jangan melakukan kerja berat di setiap event scroll; cukup simpan angka progres, lalu perbarui scene di animation loop.', en: 'Frame rate is how many times the screen redraws per second (ideally ~60). Don’t do heavy work on every scroll event; just store the progress number and update the scene in the animation loop.' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: '“Smooth scroll progress interpolation” berarti objek mengejar progres scroll secara bertahap, sama seperti lerp di lesson sebelumnya. Hasilnya tidak tersentak saat pengguna scroll cepat dengan mouse wheel.',
            en: '“Smooth scroll progress interpolation” means the object catches up to the scroll progress gradually, just like the lerp in the previous lesson. It stays smooth even when the user scrolls quickly with a mouse wheel.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Make the 3D object move when I scroll.',
            why: { id: 'Bergerak ke mana? Seberapa banyak? Di section mana? Bagaimana di mobile? AI bisa membuat animasi berlebihan yang membuat halaman lambat.', en: 'Move where? How much? In which section? What about mobile? The AI may produce excessive animation that slows the page down.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Gradually animate its position and rotation as the user scrolls.\nLet the object transition visually between the hero and the next sections.\nUse smooth scroll progress interpolation.\nAvoid excessive animation.',
            why: { id: 'Menyebut properti yang dianimasikan, area transisi, cara menghaluskan, dan batasan “jangan berlebihan”.', en: 'It names the animated properties, the transition area, the smoothing method, and a “don’t overdo it” limit.' },
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Commit dulu hasil lesson sebelumnya.', en: 'Commit the result of the previous lesson first.' },
            { id: 'Kirim prompt di bawah. Jika kamu sudah punya objek 3D dari lesson 2, tambahkan: “Reuse the existing 3D object and scene instead of creating a second canvas.”', en: 'Send the prompt below. If you already have the 3D object from lesson 2, add: “Reuse the existing 3D object and scene instead of creating a second canvas.”' },
            { id: 'Scroll pelan dari atas ke bawah, lalu scroll cepat. Gerakan harus tetap halus.', en: 'Scroll slowly from top to bottom, then quickly. Motion should stay smooth.' },
            { id: 'Pastikan semua teks dan tombol di section lain masih bisa dibaca dan diklik (objek tidak menutupi konten).', en: 'Make sure all text and buttons in other sections are still readable and clickable (the object doesn’t cover content).' },
            { id: 'Cek performa di DevTools → Performance, atau cukup rasakan apakah scroll terasa patah-patah.', en: 'Check performance in DevTools → Performance, or simply feel whether scrolling stutters.' },
            { id: 'Commit dan push.', en: 'Commit and push.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-scroll-3d-animation',
          title: { id: 'Animasi 3D responsif scroll', en: 'Scroll-responsive 3D animation' },
          description: { id: 'Objek 3D yang bergerak dan berputar sesuai progres scroll.', en: 'A 3D object that moves and rotates with scroll progress.' },
          prompt: 'Add a scroll-responsive 3D animation to my existing website.\n\nUse Three.js with WebGPU where supported and WebGL fallback.\n\nRequirements:\n\n- Create a 3D object relevant to my business.\n- Position it within the hero section.\n- Gradually animate its position and rotation as the user scrolls.\n- Let the object transition visually between the hero and the next sections.\n- Use smooth scroll progress interpolation.\n- Avoid excessive animation.\n- Keep the animation lightweight.\n- Support mobile devices.\n- Respect reduced-motion preferences.\n\nKeep all existing website content and functionality intact.',
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Add scroll-responsive 3D animation"\ngit push' },
      ],
      result: {
        id: 'Saat di-scroll, objek 3D bergerak dan berputar halus dari hero ke section berikutnya, tanpa menutupi konten dan tanpa membuat halaman terasa berat.',
        en: 'As you scroll, the 3D object glides and rotates from the hero into the next section without covering content or making the page feel heavy.',
      },
      troubleshooting: [
        {
          problem: { id: 'Tombol atau link di bawah objek 3D tidak bisa diklik.', en: 'Buttons or links under the 3D object can’t be clicked.' },
          solution: [
            { type: 'p', text: { id: 'Canvas menutupi konten. Minta: “The 3D canvas blocks clicks on page content. Make it non-interactive for clicks (pointer-events: none) and keep it behind the text.”', en: 'The canvas is covering the content. Ask: “The 3D canvas blocks clicks on page content. Make it non-interactive for clicks (pointer-events: none) and keep it behind the text.”' } },
          ],
        },
        {
          problem: { id: 'Scroll terasa patah-patah.', en: 'Scrolling stutters.' },
          solution: [
            { type: 'p', text: { id: 'Minta AI hanya menyimpan nilai progres di event scroll (dengan listener `passive`) dan melakukan update scene di dalam `requestAnimationFrame`. Kurangi juga kompleksitas objek.', en: 'Ask the AI to only store the progress value in the scroll event (with a `passive` listener) and do the scene update inside `requestAnimationFrame`. Also reduce object complexity.' } },
          ],
        },
        {
          problem: { id: 'Ada dua canvas 3D di hero.', en: 'There are two 3D canvases in the hero.' },
          solution: [
            { type: 'p', text: { id: 'AI membuat scene baru alih-alih memakai yang lama. Minta: “Merge the scroll animation into the existing hero 3D scene. Keep a single canvas.”', en: 'The AI created a new scene instead of reusing the existing one. Ask: “Merge the scroll animation into the existing hero 3D scene. Keep a single canvas.”' } },
          ],
        },
      ],
      checklist: [
        { id: 'Objek 3D bergerak dan berputar mengikuti scroll.', en: 'The 3D object moves and rotates with scroll.' },
        { id: 'Konten lain tetap terbaca dan bisa diklik.', en: 'Other content stays readable and clickable.' },
        { id: 'Scroll tetap halus di desktop dan mobile.', en: 'Scrolling stays smooth on desktop and mobile.' },
        { id: 'Saya bisa menjelaskan scroll progress dan frame rate.', en: 'I can explain scroll progress and frame rate.' },
        { id: 'Perubahan sudah di-commit dan di-push.', en: 'The change is committed and pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L4
    {
      id: 'm06-product-showcase',
      title: { id: 'Showcase Produk Premium', en: 'Premium Product Showcase' },
      objective: {
        id: 'Memakai website referensi sebagai inspirasi visual (bukan untuk ditiru) untuk mendesain ulang section showcase produk.',
        en: 'Use a reference website as visual inspiration (not something to copy) to redesign the product showcase section.',
      },
      minutes: 30,
      mascot: {
        id: 'Boleh terinspirasi, tapi jangan menjiplak ya. Gaya kamu sendiri yang paling keren!',
        en: 'Get inspired, but don’t copy. Your own style is the coolest!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Desainer profesional sering mengumpulkan referensi. Kamu bisa meminta AI menganalisis **arah visual** sebuah website, misalnya cara produk ditampilkan, komposisi layout, dan transisinya, lalu menerapkan idenya ke identitas bisnismu sendiri. Di sini kita memakai [scrolltide.co](https://scrolltide.co/) sebagai inspirasi.',
            en: 'Professional designers collect references. You can ask the AI to analyze a website’s **visual direction**, such as how products are presented, the layout composition, and the transitions, then apply those ideas to your own business identity. Here we use [scrolltide.co](https://scrolltide.co/) as inspiration.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Inspirasi, bukan menyalin', en: 'Inspiration, not copying' },
          text: {
            id: 'Jangan menyalin kode, logo, nama brand, foto, ilustrasi, atau teks dari website lain. Itu milik pemiliknya. Yang boleh kamu ambil adalah ide umum: hierarki tipografi, ritme layout, gaya transisi. Karena itu prompt-nya secara eksplisit berkata `Do not copy the original website.`',
            en: 'Don’t copy code, logos, brand names, photos, illustrations, or text from another website. They belong to their owners. What you can take are general ideas: typography hierarchy, layout rhythm, transition style. That’s why the prompt explicitly says `Do not copy the original website.`',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'AI tidak bisa membuka URL?', en: 'AI can’t open URLs?' },
          text: {
            id: 'Sebagian AI chat tidak bisa menjelajah internet. Kalau begitu, buka website referensinya sendiri, lalu lampirkan beberapa screenshot atau deskripsikan apa yang kamu lihat (layout, ukuran judul, cara produk muncul saat scroll).',
            en: 'Some AI chats can’t browse the web. If so, open the reference site yourself, then attach a few screenshots or describe what you see (layout, heading sizes, how products appear on scroll).',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Make my product section look like scrolltide.co.',
            why: { id: '“Seperti” bisa diartikan menyalin, termasuk aset dan brand. Juga tidak menyebut apa yang dipertahankan dan section mana yang boleh diubah.', en: '“Like” can be read as copying, including assets and branding. It also doesn’t say what to keep or which section to change.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Use it as inspiration for the product showcase section of my existing website.\n...\nAdapt these ideas to my existing business identity.\n\nDo not copy the original website.\nDo not reuse its proprietary assets or branding.',
            why: { id: 'Memisahkan “ide yang dianalisis” dari “hasil yang diadaptasi”, dan menjaga legalitas serta identitasmu sendiri.', en: 'It separates “ideas to analyze” from “results to adapt”, and protects both legality and your own identity.' },
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka [scrolltide.co](https://scrolltide.co/) dan perhatikan cara produk ditampilkan saat kamu scroll.', en: 'Open [scrolltide.co](https://scrolltide.co/) and notice how products are presented as you scroll.' },
            { id: 'Kirim prompt di bawah. Jika AI tidak bisa membuka link, lampirkan screenshot atau deskripsimu.', en: 'Send the prompt below. If the AI can’t open the link, attach screenshots or your description.' },
            { id: 'Review hasilnya: produkmu, warnamu, teksmu. Tidak boleh ada logo atau nama brand referensi.', en: 'Review the result: your products, your colors, your copy. No logos or brand names from the reference.' },
            { id: 'Cek di mobile, lalu commit dan push.', en: 'Check on mobile, then commit and push.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-product-showcase-reference',
          title: { id: 'Showcase produk dari referensi', en: 'Product showcase from a reference' },
          description: { id: 'Menganalisis arah visual referensi dan menerapkannya ke section produk.', en: 'Analyzes a reference’s visual direction and applies it to the product section.' },
          prompt: 'Analyze the visual direction of this reference website:\n\nhttps://scrolltide.co/\n\nUse it as inspiration for the product showcase section of my existing website.\n\nFocus on:\n- Product presentation.\n- Layout composition.\n- Typography hierarchy.\n- Scroll interaction.\n- Visual storytelling.\n- Motion and transitions.\n\nAdapt these ideas to my existing business identity.\n\nDo not copy the original website.\nDo not reuse its proprietary assets or branding.\n\nMaintain my current color palette and responsive layout.\n\nModify only the product showcase section.',
          note: { id: 'Kamu bisa mengganti URL dengan referensi lain yang kamu suka, aturannya tetap sama.', en: 'You can swap the URL for another reference you like; the same rules apply.' },
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Redesign product showcase section"\ngit push' },
      ],
      result: {
        id: 'Section showcase produkmu terasa lebih premium dan bercerita, tetap memakai warna, produk, dan identitas bisnismu sendiri.',
        en: 'Your product showcase feels more premium and story-driven while keeping your own colors, products, and business identity.',
      },
      troubleshooting: [
        {
          problem: { id: 'AI bilang tidak bisa mengakses URL.', en: 'The AI says it can’t access the URL.' },
          solution: [
            { type: 'p', text: { id: 'Lampirkan 2–4 screenshot referensi atau tulis deskripsi singkat, lalu kirim ulang prompt tanpa mengubah aturan “do not copy”.', en: 'Attach 2–4 screenshots of the reference or write a short description, then resend the prompt keeping the “do not copy” rules.' } },
          ],
        },
        {
          problem: { id: 'Hasilnya memuat teks, gambar, atau nama brand dari referensi.', en: 'The result contains text, images, or brand names from the reference.' },
          solution: [
            { type: 'p', text: { id: 'Hapus semuanya dan minta: “Replace all copy and images with my own products: [PRODUCT LIST]. Remove any reference to the inspiration site.”', en: 'Remove them all and ask: “Replace all copy and images with my own products: [PRODUCT LIST]. Remove any reference to the inspiration site.”' } },
          ],
        },
      ],
      checklist: [
        { id: 'Saya paham beda antara terinspirasi dan menyalin.', en: 'I understand the difference between inspiration and copying.' },
        { id: 'Section showcase produk sudah didesain ulang.', en: 'The product showcase section is redesigned.' },
        { id: 'Tidak ada aset atau branding dari website referensi.', en: 'No assets or branding from the reference website.' },
        { id: 'Tampilan dicek di mobile dan sudah di-commit & push.', en: 'Checked on mobile, committed and pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L5
    {
      id: 'm06-microblog-design',
      title: { id: 'Memperbaiki Desain Microblog', en: 'Improve the Microblog Design' },
      objective: {
        id: 'Menulis prompt yang mengubah microblog menjadi tampilan editorial modern lengkap dengan artikel unggulan dan halaman detail.',
        en: 'Write a prompt that turns your microblog into a modern editorial layout with a featured article and a detail view.',
      },
      minutes: 30,
      mascot: {
        id: 'Saatnya microblog-mu tampil seperti majalah online. Aku siap membaca!',
        en: 'Time for your microblog to look like an online magazine. I’m ready to read!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Microblog (bagian “Latest Updates”) adalah tempat bisnismu berbagi kabar. Desain **editorial** membuat konten mudah dipindai: satu artikel unggulan yang besar, lalu kartu-kartu artikel lain dengan informasi singkat.',
            en: 'The microblog (the “Latest Updates” area) is where your business shares news. An **editorial** design makes content easy to scan: one large featured article, then cards for the rest with short info.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: '**Featured article**: artikel terbaru atau terpilih, tampil paling besar.', en: '**Featured article**: the newest or chosen post, shown largest.' },
            { id: '**Article cards**: kartu berisi gambar, judul, dan ringkasan.', en: '**Article cards**: cards with image, title, and excerpt.' },
            { id: '**Category labels**: label kecil seperti “Tips” atau “Promo”.', en: '**Category labels**: small tags such as “Tips” or “Promo”.' },
            { id: '**Publication date** dan **reading time**: misalnya “12 Nov 2026 · 3 min read”. Reading time bisa dihitung dari jumlah kata (±200 kata per menit).', en: '**Publication date** and **reading time**: e.g. “12 Nov 2026 · 3 min read”. Reading time can be calculated from word count (~200 words per minute).' },
            { id: '**Responsive grid**: 1 kolom di HP, 2 di tablet, 3 di desktop.', en: '**Responsive grid**: 1 column on phones, 2 on tablets, 3 on desktop.' },
            { id: '**Article detail view**: halaman untuk membaca satu artikel penuh.', en: '**Article detail view**: a page to read a full article.' },
          ],
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Make the blog look better.',
            why: { id: 'Tidak menyebut elemen apa yang dibutuhkan, dan AI bisa saja mengubah struktur data artikel sehingga fitur CRUD di admin rusak.', en: 'It names no elements, and the AI might change the article data structure and break the admin CRUD.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Redesign only the microblog section ... featured article, article cards, category labels, publication dates, reading time, responsive grid, article detail view ... Keep the existing data source and admin functionality working.',
            why: { id: 'Daftar elemen jelas, cakupan dibatasi, dan data yang sudah ada dilindungi.', en: 'Clear element list, limited scope, and existing data is protected.' },
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Perhatikan bagian `[PLACEHOLDER]` di prompt. Ganti dengan informasi bisnismu sebelum mengirim. Semakin konkret, semakin cocok hasilnya.',
            en: 'Notice the `[PLACEHOLDER]` parts in the prompt. Replace them with your business details before sending. The more concrete, the better the fit.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Isi placeholder: nama bisnis, kategori artikel, dan gaya yang kamu inginkan.', en: 'Fill in the placeholders: business name, article categories, and the style you want.' },
            { id: 'Kirim prompt dan terapkan perubahannya.', en: 'Send the prompt and apply the changes.' },
            { id: 'Tambahkan artikel baru dari admin dashboard, lalu pastikan artikel itu muncul di microblog dengan tanggal, kategori, dan reading time yang benar.', en: 'Add a new post from the admin dashboard, then confirm it shows in the microblog with the right date, category, and reading time.' },
            { id: 'Klik sebuah kartu artikel dan pastikan halaman detail terbuka, lalu kembali ke daftar.', en: 'Click an article card and make sure the detail view opens, then go back to the list.' },
            { id: 'Cek grid di HP, tablet, dan desktop. Commit dan push.', en: 'Check the grid on phone, tablet, and desktop. Commit and push.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-microblog-design-editorial',
          title: { id: 'Microblog editorial modern', en: 'Modern editorial microblog' },
          description: { id: 'Mendesain ulang microblog tanpa merusak data dan fitur admin.', en: 'Redesigns the microblog without breaking data or admin features.' },
          prompt: 'Act as a senior UI/UX designer and frontend developer.\n\nRedesign only the microblog section of my existing website for [BUSINESS NAME], a [BUSINESS TYPE].\n\nKeep the current brand identity, color palette, and typography.\n\nCreate a modern editorial layout with:\n- A featured article at the top with a large image, title, excerpt, and "Read more" link.\n- Article cards with image, title, short excerpt, and category label.\n- Category labels such as [CATEGORY 1], [CATEGORY 2], [CATEGORY 3].\n- Publication dates in a readable format (for example: 12 Nov 2026).\n- Estimated reading time calculated from the article word count.\n- A responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop.\n- An article detail view that shows the full article with a clear way back to the list.\n\nMake it feel [DESIRED STYLE, e.g. clean, calm, and premium].\n\nKeep the existing article data source and admin dashboard functionality working.\nHandle articles without an image gracefully.\n\nDo not modify other sections or unrelated components.',
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Redesign microblog with editorial layout"\ngit push' },
      ],
      result: {
        id: 'Microblog kamu tampil seperti majalah online: ada artikel unggulan, kartu dengan kategori, tanggal, dan reading time, grid yang responsif, serta halaman detail artikel.',
        en: 'Your microblog looks like an online magazine: a featured article, cards with category, date, and reading time, a responsive grid, and an article detail view.',
      },
      troubleshooting: [
        {
          problem: { id: 'Artikel yang dibuat di admin tidak muncul lagi.', en: 'Posts created in admin no longer show up.' },
          solution: [
            { type: 'p', text: { id: 'Kemungkinan AI mengganti key localStorage atau bentuk datanya. Minta: “Posts saved from the admin dashboard no longer appear in the microblog. Use the same localStorage key and data shape as before.”', en: 'The AI probably changed the localStorage key or data shape. Ask: “Posts saved from the admin dashboard no longer appear in the microblog. Use the same localStorage key and data shape as before.”' } },
          ],
        },
        {
          problem: { id: 'Tanggal tampil sebagai `Invalid Date`.', en: 'Dates show as `Invalid Date`.' },
          error: 'Invalid Date',
          solution: [
            { type: 'p', text: { id: 'Format tanggal yang tersimpan tidak bisa dibaca. Minta AI menyimpan tanggal dalam format ISO (`2026-11-12`) dan menampilkan fallback jika tanggal kosong.', en: 'The stored date format can’t be parsed. Ask the AI to store dates as ISO (`2026-11-12`) and show a fallback when the date is missing.' } },
          ],
        },
        {
          problem: { id: 'Klik kartu tidak membuka detail, atau refresh di halaman detail menampilkan 404.', en: 'Clicking a card doesn’t open the detail, or refreshing the detail page shows 404.' },
          solution: [
            { type: 'p', text: { id: 'Salin perilakunya ke prompt debugging di lesson 7, sertakan router yang dipakai project-mu.', en: 'Describe the behavior in the lesson 7 debugging prompt, including which router your project uses.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Ada artikel unggulan dan kartu artikel.', en: 'There is a featured article and article cards.' },
        { id: 'Kartu menampilkan kategori, tanggal, dan reading time.', en: 'Cards show category, date, and reading time.' },
        { id: 'Grid responsif di HP, tablet, dan desktop.', en: 'The grid is responsive on phone, tablet, and desktop.' },
        { id: 'Halaman detail artikel berfungsi.', en: 'The article detail view works.' },
        { id: 'Artikel dari admin tetap muncul; perubahan sudah di-commit & push.', en: 'Posts from admin still appear; changes committed & pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L6
    {
      id: 'm06-admin-dashboard',
      title: { id: 'Memperbaiki Admin Dashboard', en: 'Improve the Admin Dashboard' },
      objective: {
        id: 'Membuat admin dashboard yang lebih rapi dan nyaman: ringkasan, CRUD produk & microblog, pencarian, validasi, dialog konfirmasi, dan empty state.',
        en: 'Make the admin dashboard cleaner and friendlier: overview, product & microblog CRUD, search, validation, confirmation dialogs, and empty states.',
      },
      minutes: 40,
      mascot: {
        id: 'Dashboard yang rapi bikin kerja jadi santai, kayak aku tidur siang di sofa favorit.',
        en: 'A tidy dashboard makes work relaxing, like my nap on my favorite couch.',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Admin dashboard adalah “ruang kerja” pemilik website. Selain tampilan, yang penting di sini adalah **pengalaman pengguna**: data mudah dicari, kesalahan input dicegah, dan aksi berbahaya seperti menghapus selalu dikonfirmasi.',
            en: 'The admin dashboard is the site owner’s “workspace”. Beyond looks, what matters here is **user experience**: data is easy to find, input mistakes are prevented, and dangerous actions like deleting are always confirmed.',
          },
        },
        {
          type: 'table',
          head: [{ id: 'Fitur', en: 'Feature' }, { id: 'Gunanya', en: 'Why it helps' }],
          rows: [
            [{ id: 'Dashboard overview', en: 'Dashboard overview' }, { id: 'Ringkasan cepat: jumlah produk, jumlah artikel, item terbaru.', en: 'Quick summary: product count, post count, latest items.' }],
            [{ id: 'CRUD', en: 'CRUD' }, { id: 'Create, Read, Update, Delete: membuat, melihat, mengubah, dan menghapus data produk maupun artikel.', en: 'Create, Read, Update, Delete for both products and posts.' }],
            [{ id: 'Search & filtering', en: 'Search & filtering' }, { id: 'Cari berdasarkan nama/judul dan saring berdasarkan kategori atau status.', en: 'Search by name/title and filter by category or status.' }],
            [{ id: 'Form validation', en: 'Form validation' }, { id: 'Mencegah data kosong atau salah (misalnya harga negatif) dengan pesan error yang jelas.', en: 'Prevents empty or wrong data (e.g. a negative price) with clear error messages.' }],
            [{ id: 'Confirmation dialog', en: 'Confirmation dialog' }, { id: '“Yakin ingin menghapus?” sebelum data hilang.', en: '“Are you sure you want to delete?” before data is gone.' }],
            [{ id: 'Empty state', en: 'Empty state' }, { id: 'Pesan ramah dan tombol aksi ketika belum ada data, bukan halaman kosong.', en: 'A friendly message and action button when there’s no data yet, instead of a blank page.' }],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Ingat: ini masih demo', en: 'Remember: this is still a demo' },
          text: {
            id: 'Data admin disimpan di **localStorage** browser. Artinya data hanya ada di browser dan perangkat itu, bisa hilang saat cache dibersihkan, tidak terlihat oleh pengunjung lain, dan login demo-nya **bukan** keamanan sungguhan. Untuk website produksi kamu butuh backend, database, dan autentikasi yang nyata. Jangan simpan data sensitif atau password asli di sini.',
            en: 'Admin data is stored in the browser’s **localStorage**. That means it only exists in that browser on that device, can disappear when the cache is cleared, isn’t visible to other visitors, and the demo login is **not** real security. A production site needs a real backend, database, and authentication. Don’t store sensitive data or real passwords here.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Improve the admin page and add a database.',
            why: { id: 'Terlalu luas dan mengubah arsitektur sekaligus. AI bisa mengganti seluruh penyimpanan data dan merusak website publik.', en: 'Too broad and changes the architecture at once. The AI might replace all data storage and break the public site.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Improve only the admin dashboard ... Keep using browser localStorage for demonstration data ... Do not modify the public website pages.',
            why: { id: 'Fitur dirinci, penyimpanan tetap sama, dan halaman publik dilindungi.', en: 'Features are listed, storage stays the same, and public pages are protected.' },
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Isi placeholder di prompt (nama bisnis, kolom produk, kategori).', en: 'Fill in the prompt placeholders (business name, product fields, categories).' },
            { id: 'Kirim prompt dan terapkan perubahannya.', en: 'Send the prompt and apply the changes.' },
            { id: 'Tes CRUD produk: tambah, edit, hapus (pastikan dialog konfirmasi muncul).', en: 'Test product CRUD: add, edit, delete (make sure the confirmation dialog appears).' },
            { id: 'Tes CRUD microblog dengan cara yang sama.', en: 'Test microblog CRUD the same way.' },
            { id: 'Coba kirim form kosong dan harga negatif. Harus muncul pesan error.', en: 'Try submitting an empty form and a negative price. An error message must appear.' },
            { id: 'Hapus semua item untuk melihat empty state, lalu coba pencarian dan filter.', en: 'Delete all items to see the empty state, then try search and filters.' },
            { id: 'Pastikan perubahan dari admin tampil di website publik. Commit dan push.', en: 'Confirm admin changes show up on the public site. Commit and push.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-admin-dashboard-improve',
          title: { id: 'Admin dashboard yang lebih baik', en: 'Improved admin dashboard' },
          description: { id: 'Menyempurnakan admin dashboard dengan tetap memakai localStorage untuk demo.', en: 'Polishes the admin dashboard while keeping localStorage for the demo.' },
          prompt: 'Act as a senior frontend developer and UX designer.\n\nImprove only the admin dashboard of my existing website for [BUSINESS NAME].\n\nKeep the current brand identity, color palette, and typography.\n\nAdd or improve:\n- A dashboard overview with summary cards (total products, total articles, latest updates).\n- Product CRUD: create, view, edit, and delete products with fields [PRODUCT FIELDS, e.g. name, price, category, image URL, description].\n- Microblog CRUD: create, view, edit, and delete articles with title, category, publication date, image, and content.\n- Search by name or title, and filtering by [CATEGORIES OR STATUS].\n- Form validation with clear inline error messages (required fields, valid price, valid URL).\n- Confirmation dialogs before deleting anything.\n- Friendly empty states with a button to add the first item.\n- A responsive admin layout that works on mobile and tablet.\n\nKeep using browser localStorage for demonstration data and keep the same storage keys and data shape so existing data still loads.\nClearly show a small note in the admin that data is stored only in this browser for demo purposes.\n\nDo not modify the public website pages or unrelated components.',
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "Improve admin dashboard UX"\ngit push' },
      ],
      result: {
        id: 'Admin dashboard punya ringkasan, CRUD produk dan microblog yang lengkap, pencarian dan filter, validasi form, dialog konfirmasi, empty state, dan tampil baik di mobile, dengan catatan jelas bahwa datanya hanya demo di localStorage.',
        en: 'The admin dashboard has an overview, full product and microblog CRUD, search and filters, form validation, confirmation dialogs, empty states, and works on mobile, with a clear note that data is a localStorage demo.',
      },
      troubleshooting: [
        {
          problem: { id: 'Data lama hilang setelah update.', en: 'Old data disappeared after the update.' },
          solution: [
            { type: 'p', text: { id: 'Cek DevTools → Application → Local Storage untuk melihat key yang ada. Minta AI memakai key yang sama atau menambahkan migrasi kecil dari key lama.', en: 'Check DevTools → Application → Local Storage to see the existing keys. Ask the AI to use the same key or add a small migration from the old key.' } },
          ],
        },
        {
          problem: { id: 'Error saat membaca data tersimpan.', en: 'Error when reading saved data.' },
          error: 'SyntaxError: Unexpected token u in JSON at position 0',
          solution: [
            { type: 'p', text: { id: 'Kode mencoba `JSON.parse` data yang kosong atau rusak. Minta AI menambahkan fallback ke data awal jika localStorage kosong atau tidak valid.', en: 'The code is calling `JSON.parse` on empty or corrupted data. Ask the AI to fall back to the seed data when localStorage is empty or invalid.' } },
          ],
        },
        {
          problem: { id: 'Data yang saya buat tidak terlihat di HP/laptop lain atau setelah deploy.', en: 'Data I created isn’t visible on another device or after deploying.' },
          solution: [
            { type: 'p', text: { id: 'Ini normal untuk demo localStorage: data hanya ada di browser tempat kamu membuatnya. Untuk berbagi data antar pengguna, dibutuhkan backend dan database sungguhan.', en: 'This is expected for a localStorage demo: data only exists in the browser where you created it. Sharing data across users needs a real backend and database.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Dashboard overview menampilkan ringkasan.', en: 'The dashboard overview shows a summary.' },
        { id: 'CRUD produk dan microblog berfungsi.', en: 'Product and microblog CRUD work.' },
        { id: 'Validasi form dan dialog konfirmasi hapus berfungsi.', en: 'Form validation and delete confirmation work.' },
        { id: 'Empty state, pencarian, dan filter berfungsi.', en: 'Empty states, search, and filters work.' },
        { id: 'Saya paham batasan penyimpanan localStorage.', en: 'I understand the limits of localStorage storage.' },
        { id: 'Perubahan sudah di-commit dan di-push.', en: 'Changes are committed and pushed.' },
      ],
    },
    // ─────────────────────────────────────────────── L7
    {
      id: 'm06-debugging-ai',
      title: { id: 'Debugging dengan AI', en: 'Debugging with AI' },
      objective: {
        id: 'Memakai template prompt debugging untuk menemukan akar masalah, memahami penyebabnya, dan memperbaikinya tanpa merusak bagian lain.',
        en: 'Use a debugging prompt template to find the root cause, understand it, and fix it without breaking anything else.',
      },
      minutes: 25,
      mascot: {
        id: 'Error itu bukan musuh, itu petunjuk. Ayo kita jadi detektif bareng!',
        en: 'Errors aren’t enemies, they’re clues. Let’s be detectives together!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Bug pasti muncul, apalagi setelah banyak perubahan. AI sangat membantu debugging, **asal** kamu memberinya informasi lengkap: pesan error persis, apa yang sedang kamu lakukan, apa yang seharusnya terjadi, dan apa yang benar-benar terjadi.',
            en: 'Bugs will happen, especially after many changes. AI is great at debugging, **as long as** you give it complete information: the exact error message, what you were doing, what should happen, and what actually happened.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'My website is broken, fix it.',
            why: { id: 'AI harus menebak. Seringnya AI menulis ulang banyak file dan menimbulkan bug baru.', en: 'The AI has to guess. Often it rewrites many files and introduces new bugs.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'I encountered the following problem:\nUncaught TypeError: Cannot read properties of undefined (reading \'map\')\n\nContext: I opened the microblog page after adding a new article in admin.\nExpected behavior: the article list shows.\nActual behavior: the page is blank.',
            why: { id: 'Error persis + konteks + harapan vs kenyataan membuat AI bisa langsung menunjuk penyebabnya.', en: 'Exact error + context + expected vs actual lets the AI point straight to the cause.' },
          },
        },
        {
          type: 'p',
          text: {
            id: 'Di mana menemukan pesan error? Di **terminal** tempat dev server berjalan (error build), dan di **DevTools → Console** di browser (error saat website berjalan). Salin teks lengkapnya, jangan diketik ulang.',
            en: 'Where do you find error messages? In the **terminal** running the dev server (build errors), and in the browser’s **DevTools → Console** (runtime errors). Copy the full text; don’t retype it.',
          },
        },
        {
          type: 'callout',
          tone: 'danger',
          text: {
            id: 'Sebelum menempel log atau kode ke AI, hapus API key, password, token, atau isi file `.env`. Jangan pernah membagikan rahasia ke chat.',
            en: 'Before pasting logs or code into an AI, remove API keys, passwords, tokens, or `.env` contents. Never share secrets in a chat.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Salin pesan error lengkap dari terminal atau Console browser.', en: 'Copy the full error message from the terminal or browser Console.' },
            { id: 'Isi semua placeholder di template: error, konteks, perilaku yang diharapkan, perilaku yang terjadi.', en: 'Fill every placeholder in the template: error, context, expected behavior, actual behavior.' },
            { id: 'Baca penjelasan AI tentang akar masalahnya sebelum menerapkan perbaikan.', en: 'Read the AI’s root-cause explanation before applying the fix.' },
            { id: 'Terapkan perbaikan, lalu lakukan langkah verifikasi yang disarankan AI.', en: 'Apply the fix, then run the verification step the AI suggests.' },
            { id: 'Cek `git diff` untuk memastikan hanya file yang relevan yang berubah, lalu commit.', en: 'Check `git diff` to make sure only relevant files changed, then commit.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-debugging-ai-template',
          title: { id: 'Template prompt debugging', en: 'Debugging prompt template' },
          description: { id: 'Template untuk menganalisis dan memperbaiki error dengan aman.', en: 'A template to analyze and fix errors safely.' },
          prompt: 'Act as a senior software engineer and debugging specialist.\n\nI encountered the following problem:\n\n[PASTE ERROR MESSAGE]\n\nContext:\n[EXPLAIN WHAT I WAS DOING]\n\nExpected behavior:\n[WHAT SHOULD HAPPEN]\n\nActual behavior:\n[WHAT HAPPENED INSTEAD]\n\nPlease:\n\n1. Analyze the likely root cause.\n2. Explain the issue in beginner-friendly language.\n3. Identify the affected files.\n4. Provide a clear solution.\n5. Explain exactly what I need to change.\n6. Preserve existing working functionality.\n7. Suggest a way to verify the fix.\n\nDo not rewrite unrelated parts of the project.',
        },
        { type: 'code', lang: 'bash', code: 'git diff --stat\ngit add .\ngit commit -m "Fix [SHORT DESCRIPTION OF BUG]"\ngit push' },
      ],
      result: {
        id: 'Kamu punya template debugging yang bisa dipakai ulang, bug berhasil diperbaiki, dan kamu paham penyebabnya, bukan sekadar menempel kode.',
        en: 'You have a reusable debugging template, the bug is fixed, and you understand its cause instead of just pasting code.',
      },
      troubleshooting: [
        {
          problem: { id: 'Perbaikan AI malah memunculkan error baru.', en: 'The AI’s fix creates a new error.' },
          solution: [
            { type: 'p', text: { id: 'Kirim error baru di percakapan yang sama sambil menyebut: “Your previous change caused this new error.” Jika makin kacau, kembalikan file ke commit terakhir.', en: 'Send the new error in the same conversation and say: “Your previous change caused this new error.” If it gets messier, restore the file to the last commit.' } },
            { type: 'code', lang: 'bash', code: 'git restore [PATH/TO/FILE]' },
          ],
        },
        {
          problem: { id: 'Tidak ada pesan error, tapi fitur tidak berjalan.', en: 'There’s no error message, but the feature doesn’t work.' },
          solution: [
            { type: 'p', text: { id: 'Tulis `No error message is shown.` di bagian error, lalu jelaskan langkah persis untuk mereproduksi masalah di bagian Context.', en: 'Write `No error message is shown.` in the error part, then describe exact steps to reproduce the issue in Context.' } },
          ],
        },
        {
          problem: { id: 'AI terus menebak file yang salah.', en: 'The AI keeps guessing the wrong file.' },
          solution: [
            { type: 'p', text: { id: 'Tempelkan isi file yang disebut di stack trace (baris dengan nama file dan nomor baris) agar AI melihat kode yang sebenarnya.', en: 'Paste the contents of the file named in the stack trace (the line with file name and line number) so the AI sees the actual code.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Saya tahu cara menemukan error di terminal dan di Console browser.', en: 'I know how to find errors in the terminal and browser Console.' },
        { id: 'Saya mengisi semua bagian template debugging.', en: 'I fill in every part of the debugging template.' },
        { id: 'Saya membaca penjelasan akar masalah sebelum menerapkan perbaikan.', en: 'I read the root-cause explanation before applying the fix.' },
        { id: 'Saya tidak pernah menempel rahasia ke chat AI.', en: 'I never paste secrets into an AI chat.' },
      ],
    },
    // ─────────────────────────────────────────────── L8
    {
      id: 'm06-explain-code',
      title: { id: 'Minta AI Menjelaskan Kodenya', en: 'Ask AI to Explain Its Own Code' },
      objective: {
        id: 'Memahami kode yang dibuat AI dengan meminta penjelasan terstruktur, supaya kamu benar-benar “memiliki” aplikasimu.',
        en: 'Understand AI-generated code by asking for a structured explanation, so you truly “own” your application.',
      },
      minutes: 20,
      mascot: {
        id: 'Kode yang kamu pahami adalah kode yang kamu kuasai. Tanya saja, tidak ada pertanyaan bodoh!',
        en: 'Code you understand is code you own. Ask away, there are no silly questions!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Vibecoding bukan berarti menerima kode tanpa tahu isinya. Kalau kamu paham cara kerja sebuah komponen, kamu bisa mengubahnya dengan aman, menulis prompt yang lebih tepat, dan memperbaiki bug lebih cepat.',
            en: 'Vibecoding doesn’t mean accepting code you don’t understand. When you know how a component works, you can change it safely, write sharper prompts, and fix bugs faster.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'What does this code do?',
            why: { id: 'Jawabannya biasanya terlalu singkat atau terlalu teknis, dan tidak memberi tahu bagian mana yang aman untuk diubah.', en: 'The answer is usually too short or too technical, and doesn’t tell you which parts are safe to change.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Act as a patient programming instructor.\n\nExplain the following component to a beginner.\n...\n5. Which parts I can safely customize.\n6. Common mistakes I should avoid.',
            why: { id: 'Ada peran “guru yang sabar”, level pembaca (pemula), dan daftar hal yang harus dijelaskan, termasuk yang paling praktis.', en: 'It sets a “patient instructor” role, the reader level (beginner), and a list of what to explain, including the most practical parts.' },
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Mulailah dari komponen yang paling sering kamu ubah, misalnya hero atau kartu produk. Tanyakan lanjutan seperti “Kenapa pakai `useEffect` di sini?” sampai kamu paham.',
            en: 'Start with the components you change most, like the hero or product card. Ask follow-ups such as “Why is `useEffect` used here?” until it clicks.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka sebuah file komponen di VS Code (misalnya komponen hero).', en: 'Open a component file in VS Code (for example the hero component).' },
            { id: 'Salin isinya dan tempelkan di bagian `[PASTE CODE]`.', en: 'Copy its contents and paste them into `[PASTE CODE]`.' },
            { id: 'Baca penjelasannya, lalu coba ubah satu bagian yang disebut “aman untuk dikustomisasi”, misalnya teks atau warna.', en: 'Read the explanation, then try changing one part marked “safe to customize”, such as text or a color.' },
            { id: 'Tulis catatan singkat dengan kata-katamu sendiri tentang cara kerja komponen itu.', en: 'Write a short note in your own words about how the component works.' },
          ],
        },
        {
          type: 'prompt',
          id: 'm06-explain-code-component',
          title: { id: 'Jelaskan komponen untuk pemula', en: 'Explain a component to a beginner' },
          description: { id: 'Penjelasan terstruktur tentang satu komponen.', en: 'A structured explanation of one component.' },
          prompt: 'Act as a patient programming instructor.\n\nExplain the following component to a beginner.\n\n[PASTE CODE]\n\nExplain:\n\n1. What this component does.\n2. What each important section means.\n3. How the component works.\n4. How it connects to other components.\n5. Which parts I can safely customize.\n6. Common mistakes I should avoid.\n\nUse simple language and practical examples.',
          note: { id: 'Ingin penjelasan dalam Bahasa Indonesia? Tambahkan baris `Answer in Bahasa Indonesia.` di akhir.', en: 'Want the answer in another language? Add a line like `Answer in Bahasa Indonesia.` at the end.' },
        },
      ],
      result: {
        id: 'Kamu memahami cara kerja satu komponen, tahu bagian mana yang aman diubah, dan berhasil mengubahnya sendiri.',
        en: 'You understand how one component works, know which parts are safe to change, and changed one yourself.',
      },
      troubleshooting: [
        {
          problem: { id: 'Penjelasannya masih terlalu teknis.', en: 'The explanation is still too technical.' },
          solution: [
            { type: 'p', text: { id: 'Balas dengan: “Explain it again using an everyday analogy, and avoid jargon.”', en: 'Reply with: “Explain it again using an everyday analogy, and avoid jargon.”' } },
          ],
        },
        {
          problem: { id: 'File terlalu panjang untuk ditempel.', en: 'The file is too long to paste.' },
          solution: [
            { type: 'p', text: { id: 'Tempel per bagian (misalnya per fungsi), atau gunakan AI assistant yang bisa membaca file project langsung di editor.', en: 'Paste it in parts (e.g. one function at a time), or use an AI assistant that can read project files directly in the editor.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Saya meminta penjelasan untuk minimal satu komponen.', en: 'I asked for an explanation of at least one component.' },
        { id: 'Saya tahu bagian mana yang aman untuk dikustomisasi.', en: 'I know which parts are safe to customize.' },
        { id: 'Saya berhasil mengubah satu bagian sendiri tanpa merusak website.', en: 'I changed one part myself without breaking the site.' },
      ],
    },
    // ─────────────────────────────────────────────── L9
    {
      id: 'm06-challenge',
      title: { id: 'Tantangan Advanced Prompting', en: 'Advanced Prompting Challenge' },
      objective: {
        id: 'Menerapkan semua yang sudah dipelajari untuk meningkatkan project aslimu secara bertahap, satu perbaikan dalam satu waktu.',
        en: 'Apply everything you learned to improve your original project incrementally, one improvement at a time.',
      },
      minutes: 120,
      mascot: {
        id: 'Pelan-pelan asal selamat! Satu perubahan, cek, commit, lanjut. Kamu pasti bisa!',
        en: 'Slow and steady wins! One change, check, commit, next. You’ve got this!',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Ini tantangan besar modul ini. Kamu akan meningkatkan project asli dengan beberapa fitur. Aturan terpentingnya: **jangan pernah meminta AI membuat ulang seluruh aplikasi.** Kerjakan satu perbaikan, review, tes, commit & push, baru lanjut.',
            en: 'This is the module’s big challenge. You’ll upgrade your original project with several features. The most important rule: **never ask the AI to regenerate the whole app.** Do one improvement, review, test, commit & push, then move on.',
          },
        },
        {
          type: 'flow',
          steps: [
            { id: 'Satu perubahan (prompt fokus)', en: 'One change (focused prompt)' },
            { id: 'Review kode & tampilan', en: 'Review code & UI' },
            { id: 'Tes (desktop + mobile)', en: 'Test (desktop + mobile)' },
            { id: 'Commit & push', en: 'Commit & push' },
            { id: 'Perubahan berikutnya', en: 'Next change' },
          ],
        },
        {
          type: 'p',
          text: {
            id: 'Kenapa bertahap? Setiap commit adalah titik aman. Kalau perubahan ke-4 merusak sesuatu, kamu cukup membatalkan perubahan itu saja, bukan kehilangan semua kerja keras. Setiap push juga memicu deploy otomatis di Vercel, sehingga kamu bisa melihat hasilnya online.',
            en: 'Why incremental? Every commit is a safe point. If change #4 breaks something, you only undo that change instead of losing all your work. Every push also triggers an automatic Vercel deploy, so you can see the result online.',
          },
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Samar', en: 'Vague' },
            text: 'Rebuild my whole website with a 3D hero, scroll animations, a premium showcase, a better blog, and a better admin.',
            why: { id: 'Terlalu banyak sekaligus. Sulit di-review, banyak bug tersembunyi, dan fitur yang sudah jalan bisa hilang.', en: 'Too much at once. Hard to review, full of hidden bugs, and working features can disappear.' },
          },
          good: {
            label: { id: 'Spesifik', en: 'Specific' },
            text: 'Enhance the existing hero section with interactive 3D motion.\n...\nDo not replace the entire website.\nModify only the necessary components.',
            why: { id: 'Satu fitur, satu prompt, cakupan jelas. Setelah selesai dan di-commit, baru kirim prompt untuk fitur berikutnya.', en: 'One feature, one prompt, clear scope. Once it’s done and committed, send the prompt for the next feature.' },
          },
        },
      ],
      instructions: [
        { type: 'heading', text: { id: 'Daftar perbaikan', en: 'Improvement list' } },
        {
          type: 'table',
          head: [{ id: 'Perbaikan', en: 'Improvement' }, { id: 'Lesson / prompt', en: 'Lesson / prompt' }],
          rows: [
            [{ id: 'Hero 3D interaktif', en: 'Interactive 3D hero' }, { id: 'Lesson 1 + 2', en: 'Lessons 1 + 2' }],
            [{ id: 'Animasi responsif scroll', en: 'Scroll-responsive animations' }, { id: 'Lesson 3', en: 'Lesson 3' }],
            [{ id: 'Showcase produk premium', en: 'Premium product showcase' }, { id: 'Lesson 4', en: 'Lesson 4' }],
            [{ id: 'Manajemen produk yang berfungsi', en: 'Functional product management' }, { id: 'Lesson 6', en: 'Lesson 6' }],
            [{ id: 'Microblog yang rapi', en: 'Polished microblog' }, { id: 'Lesson 5', en: 'Lesson 5' }],
            [{ id: 'Responsivitas mobile yang lebih baik', en: 'Improved mobile responsiveness' }, { id: 'Prompt di bawah', en: 'Prompt below' }],
          ],
        },
        { type: 'heading', text: { id: 'Siklus untuk setiap perbaikan', en: 'The loop for each improvement' } },
        {
          type: 'list',
          items: [
            { id: 'Pilih **satu** perbaikan dari tabel.', en: 'Pick **one** improvement from the table.' },
            { id: 'Kirim prompt yang fokus untuk perbaikan itu saja.', en: 'Send a focused prompt for that improvement only.' },
            { id: 'Review: baca ringkasan perubahan dari AI dan jalankan `git diff --stat` untuk melihat file apa saja yang berubah.', en: 'Review: read the AI’s change summary and run `git diff --stat` to see which files changed.' },
            { id: 'Tes di browser: desktop, mobile, navigasi, CRUD produk, CRUD microblog.', en: 'Test in the browser: desktop, mobile, navigation, product CRUD, microblog CRUD.' },
            { id: 'Jika ada error, pakai prompt debugging dari lesson 7. Jangan lanjut sebelum semuanya berjalan.', en: 'If something errors, use the lesson 7 debugging prompt. Don’t continue until everything works.' },
            { id: 'Commit dengan pesan yang jelas, lalu push. Cek deploy Vercel.', en: 'Commit with a clear message, then push. Check the Vercel deploy.' },
            { id: 'Ulangi untuk perbaikan berikutnya.', en: 'Repeat for the next improvement.' },
          ],
        },
        { type: 'code', lang: 'bash', code: 'git diff --stat\nbun run build\ngit add .\ngit commit -m "[DESCRIBE ONE IMPROVEMENT]"\ngit push', caption: { id: 'Ulangi setelah setiap perbaikan. `bun run build` (atau `npm run build`) memastikan project bisa di-build sebelum Vercel melakukannya.', en: 'Repeat after every improvement. `bun run build` (or `npm run build`) confirms the project builds before Vercel tries.' } },
        {
          type: 'prompt',
          id: 'm06-challenge-mobile',
          title: { id: 'Perbaikan responsivitas mobile', en: 'Mobile responsiveness pass' },
          description: { id: 'Merapikan tampilan mobile tanpa mengubah desain desktop.', en: 'Polishes the mobile layout without changing the desktop design.' },
          prompt: 'Act as a senior frontend developer specializing in responsive design.\n\nReview my existing website on mobile screen sizes (360px to 768px wide).\n\nFix only mobile layout issues in [SECTION OR PAGE NAME]:\n- Text that overflows or is too small to read.\n- Buttons and links that are too small to tap.\n- Images or 3D canvases that overflow the screen.\n- Navigation that is hard to use on mobile.\n- Spacing that feels cramped.\n\nKeep the desktop design unchanged.\nKeep all existing content and functionality intact.\n\nList the files you changed and explain each change briefly.',
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Gunakan percakapan AI baru untuk tiap perbaikan besar, dan mulai dengan satu kalimat konteks tentang project-mu. Percakapan yang terlalu panjang membuat AI lebih mudah “lupa” atau bingung.',
            en: 'Use a fresh AI conversation for each major improvement, starting with one line of context about your project. Very long conversations make the AI more likely to “forget” or get confused.',
          },
        },
      ],
      result: {
        id: 'Project aslimu kini punya hero 3D interaktif, animasi scroll, showcase produk premium, manajemen produk yang berfungsi, microblog yang rapi, dan tampilan mobile yang lebih baik, dengan riwayat commit yang bersih, satu commit per perbaikan.',
        en: 'Your original project now has an interactive 3D hero, scroll animations, a premium product showcase, working product management, a polished microblog, and better mobile layouts, with a clean commit history of one commit per improvement.',
      },
      troubleshooting: [
        {
          problem: { id: 'Setelah beberapa perubahan, website rusak dan saya tidak tahu kenapa.', en: 'After several changes the site is broken and I don’t know why.' },
          solution: [
            { type: 'p', text: { id: 'Lihat riwayat commit untuk menemukan titik terakhir yang masih berjalan. Untuk membatalkan perubahan yang belum di-commit di semua file, gunakan `git restore .` (hati-hati: perubahan itu hilang permanen).', en: 'Check the commit history to find the last working point. To discard uncommitted changes in all files, use `git restore .` (careful: those changes are lost for good).' } },
            { type: 'code', lang: 'bash', code: 'git log --oneline\ngit restore .' },
          ],
        },
        {
          problem: { id: 'Deploy Vercel gagal setelah push.', en: 'The Vercel deploy fails after a push.' },
          error: 'Error: Command "bun run build" exited with 1',
          solution: [
            { type: 'p', text: { id: 'Jalankan `bun run build` (atau `npm run build`) di lokal untuk melihat error yang sama, lalu salin ke prompt debugging lesson 7.', en: 'Run `bun run build` (or `npm run build`) locally to see the same error, then paste it into the lesson 7 debugging prompt.' } },
          ],
        },
        {
          problem: { id: 'AI menawarkan untuk “membuat ulang project dari awal”.', en: 'The AI offers to “recreate the project from scratch”.' },
          solution: [
            { type: 'p', text: { id: 'Tolak. Balas: “Do not regenerate the project. Make only the minimal change needed in the existing files.”', en: 'Decline. Reply: “Do not regenerate the project. Make only the minimal change needed in the existing files.”' } },
          ],
        },
      ],
      checklist: [
        { id: 'Hero 3D interaktif dan animasi scroll sudah ditambahkan.', en: 'The interactive 3D hero and scroll animations are added.' },
        { id: 'Showcase produk premium dan microblog yang rapi sudah jadi.', en: 'The premium product showcase and polished microblog are done.' },
        { id: 'Manajemen produk di admin berfungsi.', en: 'Product management in admin works.' },
        { id: 'Tampilan mobile sudah diperbaiki.', en: 'Mobile layouts are improved.' },
        { id: 'Setiap perbaikan punya commit sendiri dan sudah di-push.', en: 'Each improvement has its own commit and is pushed.' },
        { id: 'Website versi terbaru berhasil di-deploy di Vercel.', en: 'The latest version is deployed on Vercel.' },
      ],
    },
  ],
  quiz: [
    {
      question: { id: 'Kenapa prompt “Make the hero section more attractive.” kurang efektif?', en: 'Why is “Make the hero section more attractive.” a weak prompt?' },
      options: [
        { id: 'Karena terlalu pendek untuk dibaca AI.', en: 'It’s too short for the AI to read.' },
        { id: 'Karena tidak menjelaskan apa yang dipertahankan, apa yang diperbaiki, dan batas perubahannya.', en: 'It doesn’t say what to keep, what to improve, or the limits of the change.' },
        { id: 'Karena AI tidak bisa mengubah hero section.', en: 'The AI can’t change hero sections.' },
        { id: 'Karena harus ditulis dalam Bahasa Indonesia.', en: 'It must be written in Indonesian.' },
      ],
      answer: 1,
      explanation: { id: '“Menarik” itu subjektif. Prompt yang baik menyebut cakupan, apa yang dipertahankan, daftar perbaikan, dan larangan menyentuh bagian lain.', en: '“Attractive” is subjective. A good prompt states the scope, what to keep, a list of improvements, and a ban on touching other parts.' },
    },
    {
      question: { id: 'Apa fungsi “smooth interpolation” pada animasi yang mengikuti kursor?', en: 'What does “smooth interpolation” do in cursor-following animation?' },
      options: [
        { id: 'Membuat objek langsung melompat ke posisi kursor.', en: 'Makes the object jump straight to the cursor.' },
        { id: 'Mematikan animasi di HP.', en: 'Turns off animation on phones.' },
        { id: 'Membuat objek bergerak sebagian jarak setiap frame sehingga gerakannya halus.', en: 'Moves the object part of the way each frame so motion is smooth.' },
        { id: 'Menambah jumlah objek 3D.', en: 'Adds more 3D objects.' },
      ],
      answer: 2,
      explanation: { id: 'Interpolasi (lerp) membuat objek “mengejar” target secara bertahap, bukan tersentak.', en: 'Interpolation (lerp) makes the object “chase” its target gradually instead of jerking.' },
    },
    {
      question: { id: 'Bagaimana cara yang benar memakai website referensi seperti scrolltide.co?', en: 'What is the right way to use a reference site like scrolltide.co?' },
      options: [
        { id: 'Menyalin kode dan logonya.', en: 'Copy its code and logo.' },
        { id: 'Mengunduh gambar produknya.', en: 'Download its product images.' },
        { id: 'Menjadikannya inspirasi arah visual, lalu mengadaptasinya ke identitas bisnis sendiri.', en: 'Use it as visual-direction inspiration and adapt it to your own business identity.' },
        { id: 'Mengganti seluruh website dengan desain mereka.', en: 'Replace your whole site with their design.' },
      ],
      answer: 2,
      explanation: { id: 'Kode, aset, dan branding adalah milik pemiliknya. Ambil idenya, bukan materinya.', en: 'Code, assets, and branding belong to their owner. Take the ideas, not the material.' },
    },
    {
      question: { id: 'Apa batasan utama penyimpanan data admin di localStorage?', en: 'What’s the main limitation of storing admin data in localStorage?' },
      options: [
        { id: 'Data hanya ada di browser tersebut dan bukan pengganti backend atau keamanan sungguhan.', en: 'Data lives only in that browser and is no substitute for a real backend or security.' },
        { id: 'Data otomatis tersinkron ke semua pengunjung.', en: 'Data syncs automatically to every visitor.' },
        { id: 'localStorage hanya bisa menyimpan angka.', en: 'localStorage can only store numbers.' },
        { id: 'Data otomatis ter-backup ke GitHub.', en: 'Data is automatically backed up to GitHub.' },
      ],
      answer: 0,
      explanation: { id: 'localStorage cocok untuk demo, tapi data tidak dibagikan antar perangkat dan bisa hilang saat cache dibersihkan.', en: 'localStorage is fine for a demo, but data isn’t shared across devices and can vanish when the cache is cleared.' },
    },
    {
      question: { id: 'Alur kerja mana yang paling tepat untuk tantangan akhir modul ini?', en: 'Which workflow fits this module’s challenge best?' },
      options: [
        { id: 'Minta AI membuat ulang seluruh aplikasi dengan semua fitur sekaligus.', en: 'Ask the AI to regenerate the whole app with every feature at once.' },
        { id: 'Satu perubahan → review → tes → commit & push → perubahan berikutnya.', en: 'One change → review → test → commit & push → next change.' },
        { id: 'Kerjakan semua perubahan, lalu commit sekali di akhir.', en: 'Make all changes, then commit once at the end.' },
        { id: 'Push dulu, tes nanti setelah deploy.', en: 'Push first, test later after deploying.' },
      ],
      answer: 1,
      explanation: { id: 'Perubahan kecil yang di-commit satu per satu mudah di-review dan mudah dibatalkan jika ada masalah.', en: 'Small changes committed one by one are easy to review and easy to undo if something goes wrong.' },
    },
  ],
}

export default m06

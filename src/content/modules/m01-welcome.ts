import type { Module } from '../../types/content'

const m01: Module = {
  id: 'm01',
  number: '01',
  title: { id: 'Selamat Datang di Vibecoding', en: 'Welcome to Vibecoding' },
  objective: {
    id: 'Memahami apa itu vibecoding, bagaimana AI coding assistant bekerja, dan apa yang akan kamu bangun selama kursus ini.',
    en: 'Understand what vibecoding is, how AI coding assistants work, and what you will build during this course.',
  },
  lessons: [
    // ─────────────────────────────────────────────── Lesson 1
    {
      id: 'm01-welcome',
      title: { id: 'Selamat Datang di Vibecoding', en: 'Welcome to Vibecoding' },
      objective: {
        id: 'Mengenal tujuan kursus, cara belajar di platform ini, dan apa yang kamu butuhkan untuk memulai.',
        en: 'Get to know the course goals, how to learn on this platform, and what you need to get started.',
      },
      minutes: 5,
      mascot: {
        id: 'Halo! Aku akan menemanimu dari nol sampai punya aplikasi sendiri. Yuk mulai pelan-pelan!',
        en: "Hi there! I'll keep you company from zero to owning your own app. Let's take it one paw at a time!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Selamat datang di **Vibecoding: From Zero to Own Your Application**! Di kursus ini kamu akan belajar membangun aplikasi web sungguhan dengan bantuan AI coding assistant, lalu menyimpannya di GitHub dan mempublikasikannya ke internet lewat Vercel.',
            en: 'Welcome to **Vibecoding: From Zero to Own Your Application**! In this course you will build a real web application with the help of an AI coding assistant, then save it on GitHub and publish it to the internet with Vercel.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Kamu **tidak perlu** pengalaman coding sebelumnya. Yang kamu butuhkan adalah rasa ingin tahu, kesabaran, dan kemauan untuk mencoba. Setiap modul menghasilkan sesuatu yang nyata, jadi kamu belajar sambil langsung mempraktikkan.',
            en: "You **don't need** any prior coding experience. What you need is curiosity, patience, and a willingness to try. Every module produces something tangible, so you learn by doing.",
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Yang kamu butuhkan', en: 'What you need' },
          text: {
            id: 'Komputer atau laptop (Windows, macOS, atau Linux), koneksi internet yang stabil, alamat email aktif, dan sekitar beberapa jam waktu belajar yang bisa kamu bagi per sesi.',
            en: 'A computer or laptop (Windows, macOS, or Linux), a stable internet connection, an active email address, and a few hours of learning time you can split into sessions.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: 'Baca setiap pelajaran dari atas: tujuan, penjelasan, lalu langkah-langkah.',
              en: 'Read each lesson from the top: objective, explanation, then the steps.',
            },
            {
              id: 'Ikuti langkah-langkahnya di komputermu sendiri. Salin perintah dan prompt dengan tombol copy agar tidak salah ketik.',
              en: 'Follow the steps on your own computer. Copy commands and prompts with the copy button to avoid typos.',
            },
            {
              id: 'Bandingkan hasilmu dengan bagian **Hasil yang diharapkan**.',
              en: 'Compare your outcome with the **Expected result** section.',
            },
            {
              id: 'Kalau ada error, cek bagian **Troubleshooting** sebelum panik.',
              en: 'If something goes wrong, check the **Troubleshooting** section before panicking.',
            },
            {
              id: 'Centang checklist di akhir pelajaran untuk menandai progresmu.',
              en: 'Tick the checklist at the end of each lesson to track your progress.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Tips belajar', en: 'Learning tip' },
          text: {
            id: 'Jangan buru-buru. Lebih baik paham satu langkah dengan benar daripada menyalin sepuluh langkah tanpa tahu fungsinya.',
            en: "Don't rush. Understanding one step properly beats copying ten steps without knowing what they do.",
          },
        },
      ],
      result: {
        id: 'Kamu tahu tujuan kursus, alur belajarnya, dan sudah menyiapkan perlengkapan dasar.',
        en: 'You know the course goals, how the lessons flow, and you have the basic equipment ready.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Saya merasa kewalahan karena belum pernah coding sama sekali.',
            en: "I feel overwhelmed because I've never coded before.",
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Itu wajar! Kursus ini memang dirancang untuk pemula total. Ikuti satu pelajaran per sesi, dan ulangi bagian yang belum jelas. Kamu juga boleh bertanya ke AI assistant untuk menjelaskan istilah yang membingungkan.',
                en: 'That is completely normal! This course is designed for total beginners. Take one lesson per session and revisit anything unclear. You can also ask your AI assistant to explain confusing terms.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya memahami tujuan kursus ini.', en: 'I understand the goal of this course.' },
        { id: 'Saya tahu urutan bagian dalam setiap pelajaran.', en: 'I know the order of sections in each lesson.' },
        { id: 'Saya punya komputer, internet, dan email aktif.', en: 'I have a computer, internet access, and an active email.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 2
    {
      id: 'm01-what-is-vibecoding',
      title: { id: 'Apa Itu Vibecoding?', en: 'What is Vibecoding?' },
      objective: {
        id: 'Memahami arti vibecoding dan perbedaannya dengan coding tradisional.',
        en: 'Understand what vibecoding means and how it differs from traditional coding.',
      },
      minutes: 10,
      mascot: {
        id: 'Vibecoding itu seperti ngobrol dengan teman yang jago coding. Tapi kamu tetap yang pegang kemudi, ya!',
        en: "Vibecoding is like chatting with a friend who's great at code. But you're still the one steering!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Vibecoding** adalah cara membuat software dengan menjelaskan apa yang kamu inginkan dalam bahasa sehari-hari kepada AI, lalu AI membantu menulis kodenya. Istilah ini dipopulerkan oleh peneliti AI Andrej Karpathy pada awal 2025.',
            en: '**Vibecoding** is a way of building software by describing what you want in everyday language to an AI, which then helps write the code. The term was popularized by AI researcher Andrej Karpathy in early 2025.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Peranmu bergeser dari "mengetik setiap baris kode" menjadi **pengarah**: menjelaskan ide dengan jelas, mengecek hasil, menguji, dan meminta perbaikan. AI mempercepat pekerjaan, tapi keputusan dan tanggung jawab tetap ada di kamu.',
            en: 'Your role shifts from "typing every line of code" to being the **director**: explaining ideas clearly, checking the output, testing, and asking for fixes. AI speeds things up, but decisions and responsibility stay with you.',
          },
        },
        {
          type: 'heading',
          text: { id: 'Coding tradisional vs pengembangan dengan bantuan AI', en: 'Traditional coding vs AI-assisted development' },
        },
        {
          type: 'table',
          head: [
            { id: 'Aspek', en: 'Aspect' },
            { id: 'Coding tradisional', en: 'Traditional coding' },
            { id: 'Dengan bantuan AI (vibecoding)', en: 'AI-assisted (vibecoding)' },
          ],
          rows: [
            [
              { id: 'Cara mulai', en: 'How you start' },
              { id: 'Menulis kode dari nol, baris demi baris', en: 'Write code from scratch, line by line' },
              { id: 'Menjelaskan ide lewat prompt, AI membuat draf kode', en: 'Describe the idea in a prompt; AI drafts the code' },
            ],
            [
              { id: 'Keahlian utama', en: 'Main skill' },
              { id: 'Menguasai sintaks dan bahasa pemrograman', en: 'Mastering syntax and programming languages' },
              { id: 'Berkomunikasi jelas, mereview, dan menguji', en: 'Communicating clearly, reviewing, and testing' },
            ],
            [
              { id: 'Kecepatan prototipe', en: 'Prototype speed' },
              { id: 'Biasanya lebih lama', en: 'Usually slower' },
              { id: 'Bisa jauh lebih cepat untuk draf awal', en: 'Can be much faster for a first draft' },
            ],
            [
              { id: 'Risiko', en: 'Risks' },
              { id: 'Bug karena salah ketik atau logika', en: 'Bugs from typos or logic errors' },
              { id: 'Kode yang terlihat benar tapi salah, atau tidak aman, jika tidak direview', en: 'Code that looks right but is wrong or insecure if not reviewed' },
            ],
            [
              { id: 'Peran kamu', en: 'Your role' },
              { id: 'Penulis kode', en: 'Code writer' },
              { id: 'Pengarah, reviewer, dan pengambil keputusan', en: 'Director, reviewer, and decision-maker' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Bukan sulap', en: 'Not magic' },
          text: {
            id: 'AI bisa salah. Kode yang dihasilkan tetap harus kamu jalankan, uji, dan pahami secukupnya. Jangan pernah menerima hasil AI begitu saja tanpa dicek.',
            en: 'AI can be wrong. You still need to run, test, and reasonably understand the generated code. Never accept AI output blindly.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: 'Pikirkan satu aplikasi sederhana yang ingin kamu punya (misalnya toko online kecil).',
              en: 'Think of one simple app you would like to have (for example, a small online shop).',
            },
            {
              id: 'Tulis dalam 2–3 kalimat: untuk siapa aplikasinya, dan apa yang bisa dilakukan pengguna.',
              en: 'Write 2–3 sentences: who the app is for and what users can do with it.',
            },
            {
              id: 'Simpan catatan ini. Nanti kamu akan mengubahnya menjadi prompt untuk AI.',
              en: 'Save this note. Later you will turn it into a prompt for the AI.',
            },
          ],
        },
        {
          type: 'code',
          lang: 'text',
          caption: { id: 'Contoh catatan ide', en: 'Example idea note' },
          code: 'A small online plant shop for busy city workers.\nVisitors can browse plants, read care tips, and contact the shop.\nThe owner can add and edit products from a simple admin page.',
        },
      ],
      result: {
        id: 'Kamu bisa menjelaskan apa itu vibecoding dan punya catatan ide aplikasi pertamamu.',
        en: 'You can explain what vibecoding is and you have a note describing your first app idea.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Kalau AI yang menulis kode, apakah saya masih perlu belajar coding?',
            en: 'If AI writes the code, do I still need to learn coding?',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Ya, secukupnya. Kamu perlu cukup paham untuk membaca struktur proyek, menjalankan perintah, mengenali error, dan menilai apakah hasil AI sesuai. Kursus ini akan membangun pemahaman itu sedikit demi sedikit.',
                en: 'Yes, enough of it. You need to understand enough to read a project structure, run commands, recognize errors, and judge whether the AI output fits. This course builds that understanding step by step.',
              },
            },
          ],
        },
        {
          problem: { id: 'Saya belum punya ide aplikasi.', en: "I don't have an app idea yet." },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Tidak apa-apa. Pilih bisnis yang kamu kenal: toko buku, kedai kopi, toko tanaman, atau produk handmade. Di Modul 03 ada daftar contoh ide yang bisa kamu pakai.',
                en: "That's fine. Pick a business you know: a bookstore, coffee shop, plant shop, or handmade products. Module 03 has a list of example ideas you can use.",
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya bisa menjelaskan vibecoding dengan kata-kata sendiri.', en: 'I can explain vibecoding in my own words.' },
        { id: 'Saya paham perbedaan coding tradisional dan dengan bantuan AI.', en: 'I understand the difference between traditional and AI-assisted coding.' },
        { id: 'Saya tahu bahwa hasil AI harus selalu dicek.', en: 'I know AI output must always be checked.' },
        { id: 'Saya sudah menulis catatan ide aplikasi.', en: 'I have written a note about my app idea.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 3
    {
      id: 'm01-how-ai-assistants-work',
      title: { id: 'Cara Kerja AI Coding Assistant', en: 'How AI Coding Assistants Work' },
      objective: {
        id: 'Memahami secara sederhana bagaimana AI menghasilkan jawaban, serta kelebihan dan keterbatasannya.',
        en: 'Understand, in simple terms, how AI produces answers, plus its strengths and limitations.',
      },
      minutes: 10,
      mascot: {
        id: 'AI itu pintar menebak kata berikutnya, bukan membaca pikiranmu. Makanya prompt yang jelas itu penting!',
        en: "AI is great at predicting the next words, not at reading your mind. That's why clear prompts matter!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'AI coding assistant dibangun di atas **large language model (LLM)**: model yang dilatih dengan sangat banyak teks dan kode. Saat kamu mengirim prompt, model memprediksi teks yang paling mungkin cocok sebagai jawaban, kata demi kata.',
            en: 'AI coding assistants are built on **large language models (LLMs)**: models trained on huge amounts of text and code. When you send a prompt, the model predicts the most likely fitting response, piece by piece.',
          },
        },
        {
          type: 'flow',
          steps: [
            { id: 'Kamu menulis prompt', en: 'You write a prompt' },
            { id: 'Model membaca prompt + riwayat percakapan', en: 'Model reads prompt + conversation history' },
            { id: 'Model menghasilkan jawaban/kode', en: 'Model generates an answer/code' },
            { id: 'Kamu mereview & menguji', en: 'You review & test' },
            { id: 'Kamu meminta perbaikan', en: 'You ask for refinements' },
          ],
        },
        {
          type: 'p',
          text: {
            id: 'AI hanya "tahu" apa yang ada di percakapan dan apa yang dipelajarinya saat pelatihan. AI **tidak** otomatis melihat file di komputermu atau mengetahui isi kepalamu. Semakin jelas konteks yang kamu berikan, semakin relevan hasilnya.',
            en: 'The AI only "knows" what is in the conversation and what it learned during training. It does **not** automatically see the files on your computer or what is in your head. The clearer the context you give, the more relevant the result.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            {
              id: '**Kelebihan:** cepat membuat draf, menjelaskan konsep, memberi contoh kode, membantu membaca pesan error.',
              en: '**Strengths:** quickly drafts code, explains concepts, gives examples, helps read error messages.',
            },
            {
              id: '**Keterbatasan:** bisa "berhalusinasi" (mengarang fakta, fungsi, atau library yang tidak ada), informasinya bisa sudah usang, dan bisa melewatkan detail keamanan.',
              en: '**Limitations:** can "hallucinate" (make up facts, functions, or libraries that do not exist), may have outdated information, and can miss security details.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'danger',
          title: { id: 'Jaga data rahasia', en: 'Protect secrets' },
          text: {
            id: 'Jangan pernah menempelkan password, API key, token, atau data pribadi orang lain ke dalam chat AI.',
            en: "Never paste passwords, API keys, tokens, or other people's personal data into an AI chat.",
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: 'Bandingkan dua prompt di bawah ini. Perhatikan mana yang memberi AI informasi lebih lengkap.',
              en: 'Compare the two prompts below. Notice which one gives the AI more complete information.',
            },
            {
              id: 'Tulis ulang catatan idemu dari pelajaran sebelumnya agar sejelas contoh yang "spesifik".',
              en: 'Rewrite your idea note from the previous lesson to be as clear as the "specific" example.',
            },
          ],
        },
        {
          type: 'compare',
          bad: {
            label: { id: 'Prompt samar', en: 'Vague prompt' },
            text: 'Make me a website.',
            why: {
              id: 'AI harus menebak semuanya: jenis website, untuk siapa, isinya apa, dan teknologi apa yang dipakai.',
              en: 'The AI has to guess everything: what kind of site, for whom, what content, and which technology.',
            },
          },
          good: {
            label: { id: 'Prompt spesifik', en: 'Specific prompt' },
            text: 'Act as a frontend developer. Build a one-page website for a small coffee shop in Bandung. Include a hero section, a menu with 6 drinks and prices, opening hours, and a contact section. Use React and keep the design clean and mobile-friendly.',
            why: {
              id: 'Ada peran, tujuan, isi halaman, dan teknologi. AI tidak perlu banyak menebak.',
              en: 'It has a role, a goal, page content, and technology. The AI does not need to guess much.',
            },
          },
        },
      ],
      result: {
        id: 'Kamu paham bahwa kualitas jawaban AI sangat bergantung pada kejelasan prompt dan bahwa hasilnya harus diverifikasi.',
        en: 'You understand that AI answer quality depends heavily on prompt clarity and that results must be verified.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'AI menyarankan library atau perintah yang ternyata tidak ada.',
            en: 'The AI suggests a library or command that does not exist.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Ini contoh "halusinasi". Cek dokumentasi resmi library tersebut, lalu beri tahu AI: jelaskan error yang muncul dan minta alternatif yang benar-benar ada.',
                en: 'This is a "hallucination". Check the library\'s official documentation, then tell the AI: describe the error you got and ask for an alternative that actually exists.',
              },
            },
          ],
        },
        {
          problem: {
            id: 'AI "lupa" hal yang saya sebutkan di awal percakapan panjang.',
            en: 'The AI "forgets" things I mentioned early in a long conversation.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Model punya batas berapa banyak teks yang bisa diperhatikan sekaligus. Ringkas ulang konteks penting di prompt baru, atau mulai percakapan baru dengan ringkasan proyekmu.',
                en: 'Models have a limit on how much text they can attend to at once. Restate the important context in your new prompt, or start a new conversation with a summary of your project.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya tahu AI menghasilkan jawaban berdasarkan prediksi dari prompt.', en: 'I know AI generates answers by predicting from my prompt.' },
        { id: 'Saya tahu AI bisa berhalusinasi dan informasinya bisa usang.', en: 'I know AI can hallucinate and may be outdated.' },
        { id: 'Saya tidak akan menempelkan data rahasia ke chat AI.', en: 'I will not paste secrets into an AI chat.' },
        { id: 'Saya sudah menulis ulang ide saya menjadi lebih spesifik.', en: 'I have rewritten my idea to be more specific.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 4
    {
      id: 'm01-dev-workflow',
      title: { id: 'Memahami Alur Kerja Pengembangan', en: 'Understanding the Development Workflow' },
      objective: {
        id: 'Mengenal alur lengkap dari ide hingga website online, beserta alat yang dipakai di setiap tahap.',
        en: 'Learn the full path from idea to live website, and the tool used at each stage.',
      },
      minutes: 10,
      mascot: {
        id: 'Ini peta perjalanan kita! Simpan di ingatan, nanti kita lewati satu per satu.',
        en: "Here's our journey map! Keep it in mind, we'll walk through each stop together.",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Membuat aplikasi bukan hanya soal menulis kode. Ada alur kerja yang jelas dari ide sampai aplikasi bisa dibuka siapa saja di internet. Di kursus ini kamu akan menjalani seluruh alur tersebut.',
            en: 'Building an app is more than writing code. There is a clear workflow from idea to an app anyone can open on the internet. In this course you will go through that whole workflow.',
          },
        },
        {
          type: 'illustration',
          name: 'dev-workflow',
          caption: {
            id: 'Ide → prompt AI → review → lokal (VS Code) → GitHub → Vercel',
            en: 'Idea → AI prompt → review → local (VS Code) → GitHub → Vercel',
          },
        },
        {
          type: 'table',
          head: [
            { id: 'Tahap', en: 'Stage' },
            { id: 'Alat', en: 'Tool' },
            { id: 'Apa yang terjadi', en: 'What happens' },
            { id: 'Modul', en: 'Module' },
          ],
          rows: [
            [{ id: 'Ide', en: 'Idea' }, { id: 'Catatan', en: 'Notes' }, { id: 'Kamu menentukan apa yang ingin dibangun', en: 'You decide what to build' }, '01'],
            [{ id: 'Prompt', en: 'Prompt' }, { id: 'AI assistant', en: 'AI assistant' }, { id: 'AI membuat kode proyek', en: 'AI generates the project code' }, '03'],
            [{ id: 'Review', en: 'Review' }, { id: 'AI assistant + browser', en: 'AI assistant + browser' }, { id: 'Kamu mengecek dan meminta perbaikan', en: 'You check and request fixes' }, '03, 06'],
            [{ id: 'Lokal', en: 'Local' }, 'VS Code, Node.js / Bun', { id: 'Proyek dijalankan di komputermu', en: 'The project runs on your computer' }, '02, 03'],
            [{ id: 'Simpan', en: 'Save' }, 'Git + GitHub', { id: 'Riwayat perubahan disimpan dan diunggah online', en: 'Change history is saved and uploaded online' }, '04'],
            [{ id: 'Publikasi', en: 'Publish' }, 'Vercel', { id: 'Website mendapat URL publik', en: 'The website gets a public URL' }, '05'],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Alur ini berulang: setelah online, kamu bisa memperbaiki proyek, push lagi ke GitHub, dan Vercel otomatis memperbarui website-mu.',
            en: 'This workflow loops: once live, you can improve the project, push to GitHub again, and Vercel updates your website automatically.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: 'Perhatikan ilustrasi alur kerja di atas dari kiri ke kanan.',
              en: 'Study the workflow illustration above from left to right.',
            },
            {
              id: 'Cocokkan setiap tahap dengan alat di tabel.',
              en: 'Match each stage with its tool in the table.',
            },
            {
              id: 'Tulis alur ini dengan kata-katamu sendiri dalam satu kalimat.',
              en: 'Write the workflow in your own words in one sentence.',
            },
          ],
        },
        {
          type: 'code',
          lang: 'text',
          caption: { id: 'Contoh ringkasan alur', en: 'Example workflow summary' },
          code: 'I describe my idea to an AI, review the code it generates, run it in VS Code,\nsave it to GitHub with Git, and publish it online with Vercel.',
        },
      ],
      result: {
        id: 'Kamu memahami peta besar kursus: dari ide, prompt, review, lokal, GitHub, hingga Vercel.',
        en: 'You understand the big picture of the course: idea, prompt, review, local, GitHub, and Vercel.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Saya bingung bedanya Git dan GitHub.',
            en: "I'm confused about the difference between Git and GitHub.",
          },
          solution: [
            {
              type: 'p',
              text: {
                id: '**Git** adalah program di komputermu yang mencatat riwayat perubahan file. **GitHub** adalah layanan online untuk menyimpan repository Git agar bisa dibagikan dan dihubungkan ke layanan lain seperti Vercel. Kamu akan mempraktikkan keduanya di Modul 02 dan 04.',
                en: '**Git** is a program on your computer that records the history of file changes. **GitHub** is an online service that hosts Git repositories so they can be shared and connected to services like Vercel. You will practice both in Modules 02 and 04.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya bisa menyebutkan urutan tahap alur kerja.', en: 'I can list the workflow stages in order.' },
        { id: 'Saya tahu alat yang dipakai di setiap tahap.', en: 'I know which tool is used at each stage.' },
        { id: 'Saya paham bedanya Git dan GitHub.', en: 'I understand the difference between Git and GitHub.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 5
    {
      id: 'm01-what-you-will-build',
      title: { id: 'Apa yang Akan Kamu Bangun?', en: 'What Will You Build During This Course?' },
      objective: {
        id: 'Mengetahui gambaran proyek akhir: website e-commerce B2C dengan halaman publik dan dashboard admin demo.',
        en: 'See the final project: a B2C e-commerce website with a public landing page and a demo admin dashboard.',
      },
      minutes: 8,
      mascot: {
        id: 'Bayangkan toko online milikmu sendiri tayang di internet. Keren, kan? Kita bangun bareng!',
        en: "Imagine your own online shop live on the internet. Exciting, right? Let's build it together!",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Proyek utamamu adalah **website e-commerce B2C** (bisnis ke konsumen) yang sederhana untuk ide bisnismu sendiri, misalnya toko buku, kedai kopi, atau toko tanaman.',
            en: 'Your main project is a simple **B2C (business-to-consumer) e-commerce website** for your own business idea, such as a bookstore, coffee shop, or plant shop.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            {
              id: '**Halaman publik:** hero section, About Us, etalase produk, microblog/update terbaru, dan footer.',
              en: '**Public landing page:** hero section, About Us, product showcase, microblog/latest updates, and footer.',
            },
            {
              id: '**Dashboard admin (demo):** halaman login, kelola produk dan microblog (create, read, update, delete) dengan data tersimpan di browser.',
              en: '**Admin dashboard (demo):** login page, manage products and microblog posts (create, read, update, delete) with data stored in the browser.',
            },
            {
              id: '**Motion grafis interaktif** yang ringan dan responsif, yang akan kamu tingkatkan di modul prompting lanjutan.',
              en: '**Interactive graphic motion** that is lightweight and responsive, which you will enhance in the advanced prompting module.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Login hanya untuk demo', en: 'Demo login only' },
          text: {
            id: 'Login admin di proyek ini hanya untuk latihan. Autentikasi yang berjalan di browser **tidak aman** untuk aplikasi produksi sungguhan.',
            en: 'The admin login in this project is for practice only. Browser-based authentication is **not secure** for a real production app.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Di akhir kursus, website-mu akan tersimpan di GitHub dan bisa diakses publik lewat URL dari Vercel, yang bisa kamu bagikan ke teman atau masukkan ke portofolio.',
            en: 'By the end of the course, your website will be stored on GitHub and publicly accessible through a Vercel URL you can share with friends or add to your portfolio.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: 'Pilih satu ide bisnis untuk proyekmu (boleh diubah nanti di Modul 03).',
              en: 'Pick one business idea for your project (you can change it later in Module 03).',
            },
            {
              id: 'Tuliskan 3–5 produk contoh yang akan dijual.',
              en: 'Write down 3–5 sample products you would sell.',
            },
            {
              id: 'Tentukan target pengunjung dan suasana desain yang kamu inginkan (misalnya hangat, minimalis, modern).',
              en: 'Decide on your target visitors and the design mood you want (for example warm, minimalist, modern).',
            },
          ],
        },
        {
          type: 'code',
          lang: 'text',
          caption: { id: 'Contoh rencana proyek', en: 'Example project plan' },
          code: 'Business: Daun Hijau Plant Shop\nProducts: Monstera, Snake Plant, Pothos, Ceramic Pot, Plant Care Kit\nAudience: Young professionals living in apartments\nMood: Warm, natural, clean, lots of whitespace',
        },
      ],
      result: {
        id: 'Kamu punya rencana singkat proyek: ide bisnis, contoh produk, target pengunjung, dan suasana desain.',
        en: 'You have a short project plan: business idea, sample products, target audience, and design mood.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Proyeknya terdengar terlalu besar untuk pemula.',
            en: 'The project sounds too big for a beginner.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Kamu akan membangunnya bertahap, dan AI membantu bagian terberat. Fokus saja pada satu modul dalam satu waktu. Setiap langkah dijelaskan dengan perintah dan prompt yang bisa langsung disalin.',
                en: 'You will build it step by step, with AI handling the heaviest parts. Focus on one module at a time. Every step comes with commands and prompts you can copy.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya tahu bagian-bagian halaman publik proyek.', en: 'I know the sections of the public page.' },
        { id: 'Saya tahu fitur dashboard admin demo.', en: 'I know the features of the demo admin dashboard.' },
        { id: 'Saya paham login demo tidak aman untuk produksi.', en: 'I understand the demo login is not production-secure.' },
        { id: 'Saya sudah menulis rencana singkat proyek.', en: 'I have written a short project plan.' },
      ],
    },

    // ─────────────────────────────────────────────── Lesson 6
    {
      id: 'm01-meet-ai-assistants',
      title: { id: 'Kenalan dengan AI Coding Assistant', en: 'Meet Your AI Coding Assistants' },
      objective: {
        id: 'Memilih AI assistant, membuat akun atau masuk, dan memulai percakapan pertama dengan peran dan tujuan yang jelas.',
        en: 'Choose an AI assistant, sign up or sign in, and start your first conversation with a clear role and objective.',
      },
      minutes: 15,
      mascot: {
        id: 'Waktunya kenalan dengan partner coding barumu! Pilih yang paling nyaman buatmu, ya.',
        en: 'Time to meet your new coding partner! Pick whichever feels most comfortable for you.',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Ada banyak AI assistant yang bisa membantumu menulis kode. Kamu **bebas memilih** yang bisa kamu akses. Langkah di kursus ini berlaku umum untuk semuanya.',
            en: 'There are many AI assistants that can help you write code. You are **free to choose** any you have access to. The steps in this course apply to all of them.',
          },
        },
        {
          type: 'resources',
          items: [
            {
              name: 'ChatGPT',
              url: 'https://chatgpt.com/',
              description: { id: 'AI assistant dari OpenAI.', en: 'AI assistant by OpenAI.' },
            },
            {
              name: 'Claude',
              url: 'https://claude.ai/',
              description: { id: 'AI assistant dari Anthropic.', en: 'AI assistant by Anthropic.' },
            },
            {
              name: 'Gemini',
              url: 'https://gemini.google.com/',
              description: { id: 'AI assistant dari Google.', en: 'AI assistant by Google.' },
            },
            {
              name: 'Z.ai',
              url: 'https://chat.z.ai/',
              description: { id: 'AI assistant dari Z.ai (sebelumnya Zhipu AI).', en: 'AI assistant by Z.ai (formerly Zhipu AI).' },
            },
            {
              name: 'DeepSeek',
              url: 'https://chat.deepseek.com/',
              description: { id: 'AI assistant dari DeepSeek.', en: 'AI assistant by DeepSeek.' },
            },
          ],
        },
        {
          type: 'table',
          head: [
            { id: 'Assistant', en: 'Assistant' },
            { id: 'Pembuat', en: 'Maker' },
            { id: 'Cara masuk', en: 'How to sign in' },
            { id: 'Catatan', en: 'Notes' },
          ],
          rows: [
            [
              'ChatGPT',
              'OpenAI',
              { id: 'Email atau akun pihak ketiga yang didukung', en: 'Email or a supported third-party account' },
              { id: 'Ada paket gratis dan berbayar; batasnya bisa berubah', en: 'Free and paid plans; limits may change' },
            ],
            [
              'Claude',
              'Anthropic',
              { id: 'Email atau akun pihak ketiga yang didukung', en: 'Email or a supported third-party account' },
              { id: 'Ada paket gratis dan berbayar; batasnya bisa berubah', en: 'Free and paid plans; limits may change' },
            ],
            [
              'Gemini',
              'Google',
              { id: 'Akun Google', en: 'Google account' },
              { id: 'Ada paket gratis dan berbayar; batasnya bisa berubah', en: 'Free and paid plans; limits may change' },
            ],
            [
              'Z.ai',
              'Z.ai',
              { id: 'Email atau akun pihak ketiga yang didukung', en: 'Email or a supported third-party account' },
              { id: 'Cek ketersediaan dan batas penggunaan di situsnya', en: 'Check availability and usage limits on the site' },
            ],
            [
              'DeepSeek',
              'DeepSeek',
              { id: 'Email atau akun pihak ketiga yang didukung', en: 'Email or a supported third-party account' },
              { id: 'Cek ketersediaan dan batas penggunaan di situsnya', en: 'Check availability and usage limits on the site' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Fitur dan batas selalu berubah', en: 'Features and limits change' },
          text: {
            id: 'Paket gratis, batas penggunaan, model, dan fitur setiap layanan sering berubah dan bisa berbeda per negara. Selalu cek situs resmi masing-masing untuk info terbaru. Tabel ini sengaja tidak menilai mana yang "terbaik".',
            en: 'Free tiers, usage limits, models, and features change often and may differ by country. Always check each official site for current details. This table intentionally does not rank which one is "best".',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          ordered: true,
          items: [
            {
              id: '**Buka provider** pilihanmu dari daftar link di atas.',
              en: '**Open the provider** of your choice from the links above.',
            },
            {
              id: '**Buat akun atau masuk** (Sign up / Log in). Ikuti verifikasi email jika diminta.',
              en: '**Create an account or sign in** (Sign up / Log in). Complete email verification if asked.',
            },
            {
              id: '**Mulai percakapan baru** (biasanya tombol "New chat").',
              en: '**Start a new conversation** (usually a "New chat" button).',
            },
            {
              id: '**Beri AI peran dan tujuan yang jelas.** Salin prompt di bawah, ganti bagian dalam [KURUNG SIKU], lalu kirim.',
              en: '**Give the AI a clear role and objective.** Copy the prompt below, replace the parts in [SQUARE BRACKETS], then send it.',
            },
            {
              id: '**Review dan perbaiki hasilnya.** Baca jawabannya; jika kurang sesuai, minta AI memperjelas atau menyesuaikan.',
              en: '**Review and refine the results.** Read the answer; if it is not quite right, ask the AI to clarify or adjust.',
            },
          ],
        },
        {
          type: 'prompt',
          id: 'm01-meet-ai-assistants-role-objective',
          title: { id: 'Prompt pembuka: peran + tujuan', en: 'Starter prompt: role + objective' },
          description: {
            id: 'Prompt pertama untuk memperkenalkan dirimu dan proyekmu kepada AI.',
            en: 'A first prompt to introduce yourself and your project to the AI.',
          },
          prompt:
            'Act as a patient senior web developer and mentor for an absolute beginner.\n\nMy objective: I want to build a simple B2C e-commerce website for [YOUR BUSINESS IDEA] and publish it online.\n\nFor now, do not write any code yet.\nPlease:\n1. Explain in simple terms what parts a website like this usually has.\n2. Suggest 3 features that would fit my idea.\n3. Ask me up to 3 questions to better understand my business.\n\nKeep your answer short and easy to read. Reply in [YOUR LANGUAGE, e.g. Bahasa Indonesia].',
          note: {
            id: 'Peran ("Act as...") menentukan gaya jawaban; tujuan menjelaskan hasil yang kamu inginkan.',
            en: 'The role ("Act as...") shapes the style of the answer; the objective explains the outcome you want.',
          },
        },
        {
          type: 'prompt',
          id: 'm01-meet-ai-assistants-refine',
          title: { id: 'Prompt lanjutan: memperbaiki jawaban', en: 'Follow-up prompt: refine the answer' },
          description: {
            id: 'Contoh cara meminta AI menyesuaikan jawabannya.',
            en: 'An example of asking the AI to adjust its answer.',
          },
          prompt:
            'Thanks. Your answer about [PART YOU WANT CHANGED] is not quite what I need.\nMy situation: [EXPLAIN WHAT IS DIFFERENT].\nPlease revise only that part and keep it beginner-friendly.',
        },
      ],
      result: {
        id: 'Kamu punya akun di minimal satu AI assistant dan sudah melakukan percakapan pertama dengan peran dan tujuan yang jelas.',
        en: 'You have an account with at least one AI assistant and have held a first conversation with a clear role and objective.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Layanan tidak bisa dibuka atau tidak tersedia di wilayah saya.',
            en: 'The service will not load or is not available in my region.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Ketersediaan tiap layanan berbeda per negara. Pilih provider lain dari daftar. Jika memakai perangkat atau jaringan kantor/kampus, ikuti kebijakan IT setempat dan jangan mencoba melewati pemblokiran.',
                en: 'Availability differs by country. Choose another provider from the list. On a work or campus device or network, follow local IT policy and do not try to bypass blocks.',
              },
            },
          ],
        },
        {
          problem: {
            id: 'Saya mendapat pesan batas penggunaan tercapai.',
            en: 'I got a message that I reached the usage limit.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Paket gratis biasanya punya batas. Tunggu sampai batasnya direset, atau lanjutkan dengan provider lain. Simpan prompt-mu agar mudah dipakai ulang.',
                en: 'Free plans usually have limits. Wait for the limit to reset, or continue with another provider. Save your prompts so you can reuse them easily.',
              },
            },
          ],
        },
        {
          problem: {
            id: 'Email verifikasi tidak masuk.',
            en: 'The verification email never arrived.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Cek folder Spam/Promosi, pastikan alamat email benar, lalu klik kirim ulang. Atau masuk dengan akun pihak ketiga jika tersedia.',
                en: 'Check the Spam/Promotions folder, make sure the address is correct, then resend. Or sign in with a supported third-party account.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Saya sudah memilih satu AI assistant.', en: 'I have chosen an AI assistant.' },
        { id: 'Saya sudah membuat akun atau masuk.', en: 'I have created an account or signed in.' },
        { id: 'Saya sudah memulai percakapan baru.', en: 'I have started a new conversation.' },
        { id: 'Saya sudah mengirim prompt dengan peran dan tujuan.', en: 'I have sent a prompt with a role and an objective.' },
        { id: 'Saya sudah meminta AI memperbaiki jawabannya minimal sekali.', en: 'I have asked the AI to refine its answer at least once.' },
      ],
    },
  ],
  quiz: [
    {
      question: { id: 'Apa yang paling tepat menggambarkan vibecoding?', en: 'What best describes vibecoding?' },
      options: [
        { id: 'AI membuat aplikasi sendiri tanpa perlu dicek', en: 'AI builds the app by itself with no checking needed' },
        { id: 'Menjelaskan keinginan ke AI, lalu mereview dan menguji kode yang dihasilkan', en: 'Describing what you want to AI, then reviewing and testing the generated code' },
        { id: 'Menulis semua kode secara manual tanpa alat bantu', en: 'Writing all code manually without any tools' },
        { id: 'Menyalin kode acak dari internet', en: 'Copying random code from the internet' },
      ],
      answer: 1,
      explanation: {
        id: 'Dalam vibecoding kamu mengarahkan AI dengan prompt, tetapi tetap bertanggung jawab mereview dan menguji hasilnya.',
        en: 'In vibecoding you direct the AI with prompts, but you remain responsible for reviewing and testing the result.',
      },
    },
    {
      question: { id: 'Apa yang dimaksud "halusinasi" AI?', en: 'What is an AI "hallucination"?' },
      options: [
        { id: 'AI menolak menjawab', en: 'The AI refuses to answer' },
        { id: 'AI berjalan sangat lambat', en: 'The AI runs very slowly' },
        { id: 'AI mengarang informasi yang terdengar meyakinkan tapi salah', en: 'The AI makes up information that sounds convincing but is wrong' },
        { id: 'AI membaca file di komputermu', en: 'The AI reads files on your computer' },
      ],
      answer: 2,
      explanation: {
        id: 'AI bisa menghasilkan fakta, fungsi, atau library palsu. Karena itu hasilnya harus selalu diverifikasi.',
        en: 'AI can produce fake facts, functions, or libraries. That is why output must always be verified.',
      },
    },
    {
      question: { id: 'Urutan alur kerja yang benar di kursus ini adalah…', en: 'The correct workflow order in this course is…' },
      options: [
        { id: 'Vercel → GitHub → VS Code → prompt AI', en: 'Vercel → GitHub → VS Code → AI prompt' },
        { id: 'Ide → prompt AI → review → lokal (VS Code) → GitHub → Vercel', en: 'Idea → AI prompt → review → local (VS Code) → GitHub → Vercel' },
        { id: 'GitHub → ide → Vercel → review', en: 'GitHub → idea → Vercel → review' },
        { id: 'Prompt AI → Vercel → ide → GitHub', en: 'AI prompt → Vercel → idea → GitHub' },
      ],
      answer: 1,
      explanation: {
        id: 'Kamu mulai dari ide, membuat kode dengan AI, mereview, menjalankannya di komputer, menyimpannya di GitHub, lalu mempublikasikannya lewat Vercel.',
        en: 'You start with an idea, generate code with AI, review it, run it locally, save it to GitHub, then publish it with Vercel.',
      },
    },
    {
      question: { id: 'Prompt mana yang paling efektif?', en: 'Which prompt is most effective?' },
      options: [
        { id: '"Buatkan website."', en: '"Make me a website."' },
        { id: '"Website bagus dong."', en: '"A nice website please."' },
        { id: 'Prompt yang berisi peran, tujuan, isi halaman, dan teknologi', en: 'A prompt with a role, objective, page content, and technology' },
        { id: 'Prompt yang berisi password akun agar AI bisa login', en: 'A prompt containing your account password so the AI can log in' },
      ],
      answer: 2,
      explanation: {
        id: 'Prompt yang spesifik mengurangi tebakan AI. Jangan pernah memasukkan password atau data rahasia ke chat AI.',
        en: 'Specific prompts reduce AI guesswork. Never put passwords or secrets into an AI chat.',
      },
    },
    {
      question: { id: 'Bagaimana cara memilih AI assistant untuk kursus ini?', en: 'How should you choose an AI assistant for this course?' },
      options: [
        { id: 'Hanya boleh memakai satu provider tertentu', en: 'Only one specific provider is allowed' },
        { id: 'Pilih yang bisa kamu akses; cek fitur dan batasnya di situs resmi karena bisa berubah', en: 'Pick any you can access; check features and limits on the official site since they change' },
        { id: 'Pilih yang paling mahal', en: 'Pick the most expensive one' },
        { id: 'Lewati pemblokiran jaringan kantor agar bisa memakai provider tertentu', en: 'Bypass your work network blocks to use a specific provider' },
      ],
      answer: 1,
      explanation: {
        id: 'Langkah kursus berlaku untuk semua provider. Fitur dan paket gratis berubah, jadi cek situs resminya, dan selalu ikuti kebijakan IT setempat.',
        en: 'Course steps work with any provider. Features and free tiers change, so check the official sites, and always follow local IT policy.',
      },
    },
  ],
}

export default m01

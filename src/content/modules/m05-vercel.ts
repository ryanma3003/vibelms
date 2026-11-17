import type { Module } from '../../types/content'

const m05: Module = {
  id: 'm05',
  number: '05',
  title: {
    id: 'Deploy Aplikasimu dengan Vercel',
    en: 'Deploy Your Application with Vercel',
  },
  objective: {
    id: 'Membuat project kamu bisa diakses online oleh siapa saja lewat [Vercel](https://vercel.com/).',
    en: 'Make your project accessible online to anyone using [Vercel](https://vercel.com/).',
  },
  lessons: [
    // ─────────────────────────────────────────────────────────────── L1
    {
      id: 'm05-open-vercel',
      title: { id: 'Buka Vercel', en: 'Open Vercel' },
      objective: {
        id: 'Login ke Vercel memakai akun GitHub yang sudah kamu hubungkan di Modul 02.',
        en: 'Log in to Vercel with the GitHub account you connected in Module 02.',
      },
      minutes: 5,
      mascot: {
        id: 'Saatnya websitemu keluar rumah! Yuk, buka Vercel dulu. 🐾',
        en: "Time for your website to go out into the world! Let's open Vercel first. 🐾",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Sampai sekarang website kamu hanya jalan di komputer sendiri (`localhost`) dan kodenya tersimpan di GitHub. Supaya orang lain bisa membukanya, website itu perlu di-**deploy** — di-build lalu ditaruh di server yang punya alamat publik.',
            en: 'So far your website only runs on your own computer (`localhost`) and its code lives on GitHub. For other people to open it, the site needs to be **deployed** — built and placed on a server with a public address.',
          },
        },
        {
          type: 'p',
          text: {
            id: '**Vercel** adalah platform hosting yang bisa mengambil kode langsung dari repository GitHub, menjalankan build, lalu memberi kamu URL publik seperti `nama-project.vercel.app`. Vercel punya paket gratis (Hobby) untuk project pribadi; detail batasan paketnya bisa berubah, jadi cek halaman pricing mereka kalau perlu.',
            en: '**Vercel** is a hosting platform that can pull code straight from a GitHub repository, run the build, and give you a public URL like `project-name.vercel.app`. Vercel offers a free (Hobby) plan for personal projects; plan limits can change, so check their pricing page if needed.',
          },
        },
        {
          type: 'illustration',
          name: 'deploy-pipeline',
          caption: {
            id: 'Alur deploy: push ke GitHub → install → build → deploy → URL publik.',
            en: 'The deploy pipeline: push to GitHub → install → build → deploy → public URL.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka [vercel.com](https://vercel.com/) di browser.', en: 'Open [vercel.com](https://vercel.com/) in your browser.' },
            { id: 'Klik **Log In** di pojok kanan atas.', en: 'Click **Log In** in the top-right corner.' },
            { id: 'Pilih **Continue with GitHub**.', en: 'Choose **Continue with GitHub**.' },
            {
              id: 'Kalau diminta, login ke GitHub dan setujui akses. Pakai akun GitHub yang sama dengan tempat repository project kamu.',
              en: 'If asked, sign in to GitHub and approve access. Use the same GitHub account that owns your project repository.',
            },
            {
              id: 'Kamu akan masuk ke **dashboard** Vercel. Di sini nanti semua project dan deployment kamu muncul.',
              en: 'You will land on the Vercel **dashboard**. This is where all your projects and deployments will appear.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Belum punya akun?', en: "Don't have an account yet?" },
          text: {
            id: 'Kembali ke Modul 02 pelajaran "Buat Akun Vercel" dan daftar dengan **Continue with GitHub**.',
            en: 'Go back to the Module 02 lesson "Create a Vercel Account" and sign up with **Continue with GitHub**.',
          },
        },
      ],
      result: {
        id: 'Kamu sudah login di dashboard Vercel memakai akun GitHub kamu.',
        en: 'You are logged in to the Vercel dashboard with your GitHub account.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Login malah membuat akun Vercel baru yang kosong atau akun yang salah.',
            en: 'Logging in creates a new empty Vercel account or opens the wrong account.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Biasanya karena kamu login dengan metode berbeda (misalnya email) dari yang dipakai saat daftar. Log out, lalu login lagi dengan **Continue with GitHub**. Pastikan di github.com kamu juga sedang login ke akun yang benar.',
                en: 'This usually happens when you log in with a different method (e.g. email) than you signed up with. Log out, then log in again with **Continue with GitHub**. Make sure you are also signed in to the right account on github.com.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Membuka vercel.com', en: 'Opened vercel.com' },
        { id: 'Login dengan Continue with GitHub', en: 'Logged in with Continue with GitHub' },
        { id: 'Melihat dashboard Vercel', en: 'Saw the Vercel dashboard' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L2
    {
      id: 'm05-import-repository',
      title: { id: 'Import Repository GitHub', en: 'Import Your GitHub Repository' },
      objective: {
        id: 'Menghubungkan repository project kamu ke Vercel dengan akses seminimal mungkin.',
        en: 'Connect your project repository to Vercel with the least access necessary.',
      },
      minutes: 8,
      mascot: {
        id: 'Kasih Vercel kunci ke satu kamar saja, bukan ke seluruh rumah ya! 🔑',
        en: 'Give Vercel the key to one room, not the whole house! 🔑',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Agar Vercel bisa membaca kode kamu, ia perlu izin lewat **Vercel GitHub App** (integrasi GitHub). Integrasi ini juga yang membuat Vercel tahu setiap kali kamu push kode baru.',
            en: 'For Vercel to read your code, it needs permission through the **Vercel GitHub App** (GitHub integration). This integration is also how Vercel learns every time you push new code.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Saat memasang integrasi, GitHub menanyakan repository mana yang boleh diakses. Pilih **Only select repositories** dan centang hanya repository yang ingin di-deploy. Ini prinsip *least privilege*: beri akses secukupnya saja.',
            en: 'When installing the integration, GitHub asks which repositories it may access. Choose **Only select repositories** and tick only the repository you want to deploy. This is the *least privilege* principle: grant only the access you need.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Di dashboard Vercel, klik **Add New…** lalu pilih **Project**.', en: 'On the Vercel dashboard, click **Add New…** then choose **Project**.' },
            {
              id: 'Di bagian **Import Git Repository**, kalau repository kamu belum muncul, klik **Install** / **Configure GitHub App** (atau link untuk menyesuaikan izin GitHub).',
              en: 'In the **Import Git Repository** section, if your repository is not listed, click **Install** / **Configure GitHub App** (or the link to adjust GitHub permissions).',
            },
            {
              id: 'Di halaman GitHub yang terbuka, pilih **Only select repositories**, pilih repository project kamu, lalu klik **Install** (atau **Save**).',
              en: 'On the GitHub page that opens, choose **Only select repositories**, pick your project repository, then click **Install** (or **Save**).',
            },
            { id: 'Kembali ke Vercel. Repository kamu sekarang muncul di daftar.', en: 'Return to Vercel. Your repository now appears in the list.' },
            { id: 'Klik **Import** di samping repository tersebut.', en: 'Click **Import** next to that repository.' },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Hindari "All repositories"', en: 'Avoid "All repositories"' },
          text: {
            id: 'Memberi akses ke semua repository tidak perlu untuk course ini. Kamu selalu bisa menambah repository lain nanti lewat pengaturan GitHub App.',
            en: 'Granting access to every repository is unnecessary for this course. You can always add more repositories later in the GitHub App settings.',
          },
        },
      ],
      result: {
        id: 'Repository project kamu ter-import dan kamu berada di halaman konfigurasi project Vercel.',
        en: 'Your project repository is imported and you are on the Vercel project configuration page.',
      },
      troubleshooting: [
        {
          problem: { id: 'Repository tidak muncul di daftar import.', en: 'The repository does not appear in the import list.' },
          solution: [
            {
              type: 'list',
              items: [
                {
                  id: 'Klik link **Adjust GitHub App Permissions** / **Configure GitHub App** dan tambahkan repository tersebut ke daftar yang diizinkan.',
                  en: 'Click the **Adjust GitHub App Permissions** / **Configure GitHub App** link and add the repository to the allowed list.',
                },
                {
                  id: 'Pastikan kamu memilih akun/organisasi GitHub yang benar di dropdown pemilik (owner).',
                  en: 'Make sure the correct GitHub account/organization is selected in the owner dropdown.',
                },
                {
                  id: 'Cek di github.com bahwa repository-nya memang sudah ada dan sudah berisi hasil `git push`.',
                  en: 'Check on github.com that the repository really exists and contains your `git push`.',
                },
              ],
            },
          ],
        },
        {
          problem: {
            id: 'Repository milik organisasi (misalnya kampus/kantor) tidak bisa diakses.',
            en: 'A repository owned by an organization (e.g. school/company) cannot be accessed.',
          },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Organisasi bisa mewajibkan persetujuan admin untuk GitHub App. Minta izin ke admin organisasi sesuai kebijakan mereka, atau push project ke repository di akun pribadimu. Jangan mencoba mengakali kebijakan organisasi.',
                en: "Organizations may require admin approval for GitHub Apps. Ask the organization admin for permission according to their policy, or push the project to a repository on your personal account. Don't try to work around the organization's policies.",
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Klik Add New → Project', en: 'Clicked Add New → Project' },
        { id: 'Memasang Vercel GitHub App dengan "Only select repositories"', en: 'Installed the Vercel GitHub App with "Only select repositories"' },
        { id: 'Repository project muncul di Vercel', en: 'The project repository appears in Vercel' },
        { id: 'Klik Import pada repository yang benar', en: 'Clicked Import on the correct repository' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L3
    {
      id: 'm05-configure-deployment',
      title: { id: 'Konfigurasi Deployment', en: 'Configure Deployment' },
      objective: {
        id: 'Memahami setiap pengaturan deployment dan memastikan nilainya cocok dengan project kamu.',
        en: 'Understand each deployment setting and make sure the values match your project.',
      },
      minutes: 12,
      mascot: {
        id: 'Biasanya Vercel sudah menebak dengan benar. Kita cek bareng ya, biar yakin! 🔍',
        en: "Vercel usually guesses right. Let's double-check together to be sure! 🔍",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Di halaman konfigurasi, Vercel biasanya **mendeteksi otomatis** framework project kamu (misalnya Vite atau Next.js) dan mengisi pengaturan yang sesuai. Tugasmu adalah memahami dan memeriksa nilainya.',
            en: 'On the configuration page, Vercel usually **auto-detects** your project framework (e.g. Vite or Next.js) and fills in matching settings. Your job is to understand and check those values.',
          },
        },
        {
          type: 'table',
          head: [
            { id: 'Pengaturan', en: 'Setting' },
            { id: 'Fungsinya', en: 'What it does' },
            'Vite (React)',
            'Next.js',
          ],
          rows: [
            [
              'Framework Preset',
              { id: 'Template pengaturan untuk framework tertentu', en: 'Settings template for a specific framework' },
              'Vite',
              'Next.js',
            ],
            [
              'Root Directory',
              { id: 'Folder yang berisi `package.json`', en: 'Folder that contains `package.json`' },
              { id: '`./` (kecuali project ada di subfolder)', en: '`./` (unless the project is in a subfolder)' },
              { id: '`./` (kecuali project ada di subfolder)', en: '`./` (unless the project is in a subfolder)' },
            ],
            [
              'Build Command',
              { id: 'Perintah untuk membuat versi produksi', en: 'Command that creates the production build' },
              '`npm run build` / `bun run build` (`vite build`)',
              '`npm run build` / `bun run build` (`next build`)',
            ],
            [
              'Output Directory',
              { id: 'Folder hasil build yang akan dipublikasikan', en: 'Build output folder that gets published' },
              '`dist`',
              { id: '`.next` — ditangani otomatis oleh Vercel', en: '`.next` — handled automatically by Vercel' },
            ],
            [
              'Install Command',
              { id: 'Perintah untuk memasang dependencies', en: 'Command that installs dependencies' },
              { id: 'Otomatis dari lockfile: `npm install` atau `bun install`', en: 'Auto from lockfile: `npm install` or `bun install`' },
              { id: 'Otomatis dari lockfile: `npm install` atau `bun install`', en: 'Auto from lockfile: `npm install` or `bun install`' },
            ],
            [
              'Environment Variables',
              { id: 'Nilai konfigurasi (key=value) yang dibaca saat build/runtime', en: 'Configuration values (key=value) read at build/runtime' },
              { id: 'Kosong untuk project demo ini', en: 'Empty for this demo project' },
              { id: 'Kosong untuk project demo ini', en: 'Empty for this demo project' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            id: 'Vercel memilih package manager berdasarkan **lockfile** di repository: `package-lock.json` → npm, `bun.lock` → Bun. Untuk project Bun, pastikan `bun.lock` ikut ter-commit dan jangan campur dengan `package-lock.json`, supaya versi dependencies di Vercel sama dengan di komputermu.',
            en: 'Vercel picks the package manager from the **lockfile** in your repository: `package-lock.json` → npm, `bun.lock` → Bun. For Bun projects, make sure `bun.lock` is committed and not mixed with a `package-lock.json`, so Vercel installs the same dependency versions as your computer.',
          },
        },
        {
          type: 'callout',
          tone: 'danger',
          title: { id: 'Environment variable bukan tempat aman untuk rahasia di frontend', en: 'Frontend environment variables are not safe for secrets' },
          text: {
            id: 'Variabel berawalan `VITE_` (Vite) atau `NEXT_PUBLIC_` (Next.js) **dimasukkan ke JavaScript yang dikirim ke browser**, jadi siapa pun bisa melihatnya. Jangan pernah menaruh API key rahasia, password, atau token di variabel seperti itu. Rahasia hanya boleh dipakai di kode server.',
            en: 'Variables prefixed with `VITE_` (Vite) or `NEXT_PUBLIC_` (Next.js) are **bundled into the JavaScript sent to the browser**, so anyone can read them. Never put secret API keys, passwords, or tokens in such variables. Secrets belong only in server-side code.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            {
              id: 'Lihat **Framework Preset**. Pastikan tertulis `Vite` atau `Next.js` sesuai project kamu. Cek `package.json` kalau ragu: ada `vite` atau `next` di dependencies?',
              en: 'Look at **Framework Preset**. Make sure it says `Vite` or `Next.js` to match your project. Check `package.json` if unsure: does it list `vite` or `next` in dependencies?',
            },
            {
              id: 'Biarkan **Root Directory** `./`, kecuali `package.json` ada di dalam subfolder — kalau begitu, klik **Edit** dan pilih subfolder tersebut.',
              en: 'Leave **Root Directory** as `./`, unless `package.json` is inside a subfolder — in that case click **Edit** and choose that subfolder.',
            },
            {
              id: 'Buka **Build and Output Settings**. Biasanya cukup biarkan nilai default hasil deteksi. Untuk Vite, Output Directory harus `dist`.',
              en: 'Open **Build and Output Settings**. Usually the detected defaults are fine. For Vite, Output Directory must be `dist`.',
            },
            {
              id: 'Lewati **Environment Variables** untuk project demo ini (data disimpan di `localStorage`, tidak butuh key).',
              en: 'Skip **Environment Variables** for this demo project (data is stored in `localStorage`, no keys needed).',
            },
            { id: 'Jangan klik Deploy dulu — kita lakukan di pelajaran berikutnya.', en: "Don't click Deploy yet — we'll do that in the next lesson." },
          ],
        },
        {
          type: 'p',
          text: {
            id: 'Kamu bisa memastikan build berhasil di komputer sendiri sebelum deploy:',
            en: 'You can confirm the build works on your own computer before deploying:',
          },
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'npm run build',
          caption: { id: 'Atau `bun run build` untuk project Bun. Kalau gagal di sini, pasti gagal juga di Vercel.', en: 'Or `bun run build` for Bun projects. If it fails here, it will fail on Vercel too.' },
        },
        {
          type: 'prompt',
          id: 'm05-configure-deployment-settings',
          title: { id: 'Tanya AI pengaturan Vercel', en: 'Ask AI for Vercel settings' },
          description: {
            id: 'Kalau ragu, minta AI membaca `package.json` kamu dan menyarankan pengaturan.',
            en: 'If unsure, ask the AI to read your `package.json` and suggest settings.',
          },
          prompt:
            'I want to deploy my project to Vercel.\n\nHere is my package.json:\n\n[PASTE package.json]\n\nMy lockfile is: [package-lock.json / bun.lock]\n\nTell me the correct Vercel settings for:\n- Framework Preset\n- Root Directory\n- Build Command\n- Output Directory\n- Install Command\n\nExplain each value briefly. Do not suggest putting any secret keys in frontend environment variables.',
        },
      ],
      result: {
        id: 'Pengaturan deployment sudah kamu periksa dan cocok dengan framework project kamu.',
        en: 'You have reviewed the deployment settings and they match your project framework.',
      },
      troubleshooting: [
        {
          problem: { id: 'Framework Preset terdeteksi sebagai "Other".', en: 'Framework Preset is detected as "Other".' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Biasanya Root Directory salah (package.json ada di subfolder) atau project tidak punya `package.json` sama sekali. Atur Root Directory ke folder yang benar, atau pilih preset secara manual.',
                en: 'Usually the Root Directory is wrong (package.json is in a subfolder) or the project has no `package.json` at all. Set Root Directory to the right folder, or pick the preset manually.',
              },
            },
          ],
        },
        {
          problem: { id: 'Ada `package-lock.json` dan `bun.lock` sekaligus.', en: 'Both `package-lock.json` and `bun.lock` exist.' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Pilih satu package manager saja. Hapus lockfile yang tidak dipakai, jalankan install ulang dengan package manager pilihanmu, lalu commit dan push perubahan.',
                en: 'Pick a single package manager. Delete the lockfile you are not using, reinstall with your chosen package manager, then commit and push the change.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Framework Preset sesuai (Vite atau Next.js)', en: 'Framework Preset is correct (Vite or Next.js)' },
        { id: 'Root Directory menunjuk folder berisi package.json', en: 'Root Directory points to the folder with package.json' },
        { id: 'Output Directory benar (`dist` untuk Vite)', en: 'Output Directory is correct (`dist` for Vite)' },
        { id: 'Hanya ada satu lockfile di repository', en: 'Only one lockfile in the repository' },
        { id: 'Tidak ada rahasia di variabel VITE_ / NEXT_PUBLIC_', en: 'No secrets in VITE_ / NEXT_PUBLIC_ variables' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L4
    {
      id: 'm05-deploy',
      title: { id: 'Deploy!', en: 'Deploy!' },
      objective: {
        id: 'Menjalankan deployment pertama dan mendapatkan URL publik.',
        en: 'Run your first deployment and get a public URL.',
      },
      minutes: 8,
      mascot: {
        id: 'Tekan tombolnya... dan tunggu sebentar. Aku ikut deg-degan! 🚀',
        en: "Press the button... and wait a moment. I'm excited too! 🚀",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Saat kamu klik **Deploy**, Vercel menjalankan langkah yang sama seperti yang kamu lakukan di komputer, tapi di server mereka:',
            en: 'When you click **Deploy**, Vercel runs the same steps you ran on your computer, but on its servers:',
          },
        },
        {
          type: 'flow',
          steps: [
            { id: 'Clone repository dari GitHub', en: 'Clone repository from GitHub' },
            { id: 'Install dependencies', en: 'Install dependencies' },
            { id: 'Build project', en: 'Build project' },
            { id: 'Deploy ke jaringan Vercel', en: 'Deploy to Vercel network' },
            { id: 'URL publik siap', en: 'Public URL ready' },
          ],
        },
        {
          type: 'p',
          text: {
            id: 'Semua proses tercatat di **Build Logs**. Kalau ada error, log inilah tempat pertama yang harus kamu baca.',
            en: 'Everything is recorded in the **Build Logs**. If something fails, these logs are the first place to look.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Di halaman konfigurasi, klik **Deploy**.', en: 'On the configuration page, click **Deploy**.' },
            { id: 'Perhatikan log build yang berjalan. Biasanya selesai dalam satu sampai beberapa menit.', en: 'Watch the build logs scroll by. It usually finishes within one to a few minutes.' },
            {
              id: 'Setelah berhasil, kamu melihat halaman ucapan selamat beserta preview websitemu.',
              en: 'When it succeeds, you see a congratulations screen with a preview of your website.',
            },
            {
              id: 'Klik **Continue to Dashboard**, lalu temukan URL di bagian **Domains** (contoh: `nama-project.vercel.app`).',
              en: 'Click **Continue to Dashboard**, then find the URL under **Domains** (e.g. `project-name.vercel.app`).',
            },
            { id: 'Klik URL itu untuk membuka website kamu yang sudah online.', en: 'Click that URL to open your live website.' },
          ],
        },
      ],
      result: {
        id: 'Website kamu online dengan URL publik `*.vercel.app` yang bisa dibagikan ke siapa saja.',
        en: 'Your website is live at a public `*.vercel.app` URL you can share with anyone.',
      },
      troubleshooting: [
        {
          problem: { id: 'Build gagal (Build Failed).', en: 'The build failed.' },
          error: 'Error: Command "npm run build" exited with 1',
          solution: [
            {
              type: 'list',
              items: [
                {
                  id: 'Buka **Build Logs** dan scroll ke pesan error **pertama** (bukan yang terakhir) — itu biasanya penyebab aslinya.',
                  en: 'Open the **Build Logs** and scroll to the **first** error message (not the last) — that is usually the real cause.',
                },
                {
                  id: 'Jalankan `npm run build` (atau `bun run build`) di komputermu. Perbaiki error sampai build lokal berhasil.',
                  en: 'Run `npm run build` (or `bun run build`) on your computer. Fix errors until the local build succeeds.',
                },
                {
                  id: 'Error TypeScript sering muncul saat build walau `dev` jalan normal. Salin errornya ke AI dan minta perbaikan yang fokus.',
                  en: 'TypeScript errors often appear at build time even if `dev` works. Copy the error to your AI and ask for a focused fix.',
                },
                {
                  id: 'Commit dan push perbaikanmu — Vercel otomatis mencoba deploy lagi.',
                  en: 'Commit and push your fix — Vercel automatically tries deploying again.',
                },
              ],
            },
            {
              type: 'prompt',
              id: 'm05-deploy-fix-build',
              title: { id: 'Minta AI memperbaiki error build', en: 'Ask AI to fix a build error' },
              description: { id: 'Tempel log error dari Vercel.', en: 'Paste the error log from Vercel.' },
              prompt:
                'My project builds fine locally in dev mode, but the Vercel deployment failed.\n\nFramework: [Vite / Next.js]\nPackage manager: [npm / Bun]\n\nHere is the build log error:\n\n[PASTE ERROR LOG]\n\nExplain the cause in simple terms and give me the smallest fix. Modify only the files that are necessary.',
            },
          ],
        },
        {
          problem: { id: 'Modul atau file tidak ditemukan, padahal di komputer ada.', en: 'A module or file is not found, even though it exists on your computer.' },
          error: 'Could not resolve "./components/Hero"',
          solution: [
            {
              type: 'p',
              text: {
                id: 'Server Vercel memakai Linux yang **case-sensitive**: `Hero.tsx` dan `hero.tsx` dianggap berbeda. Samakan huruf besar/kecil antara nama file dan import-nya. Pastikan juga file itu sudah di-commit (tidak terabaikan oleh `.gitignore`).',
                en: 'Vercel builds on Linux, which is **case-sensitive**: `Hero.tsx` and `hero.tsx` are different files. Match the capitalization between the file name and its import. Also make sure the file is committed (not ignored by `.gitignore`).',
              },
            },
          ],
        },
        {
          problem: { id: 'Deploy berhasil tapi halaman kosong / blank.', en: 'Deployment succeeded but the page is blank.' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Buka DevTools browser (F12) → tab **Console** untuk melihat error. Penyebab umum: Output Directory salah, atau `base` di `vite.config` diatur ke path yang tidak sesuai. Untuk Vercel, `base` biasanya cukup `/` (default).',
                en: 'Open browser DevTools (F12) → **Console** tab to see the error. Common causes: wrong Output Directory, or `base` in `vite.config` set to a mismatched path. For Vercel, `base` is usually just `/` (the default).',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Klik Deploy', en: 'Clicked Deploy' },
        { id: 'Membaca Build Logs', en: 'Read the Build Logs' },
        { id: 'Deployment berstatus Ready', en: 'Deployment status is Ready' },
        { id: 'Membuka URL publik `.vercel.app`', en: 'Opened the public `.vercel.app` URL' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L5
    {
      id: 'm05-verify-website',
      title: { id: 'Verifikasi Websitemu', en: 'Verify Your Website' },
      objective: {
        id: 'Menguji website yang sudah online seperti seorang pengunjung sungguhan.',
        en: 'Test your live website the way a real visitor would.',
      },
      minutes: 15,
      mascot: {
        id: 'Klik semuanya, coba di HP juga. Aku suka main-main dengan tombol! 📱',
        en: 'Click everything, try it on your phone too. I love poking buttons! 📱',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '"Build berhasil" belum tentu berarti "website berfungsi". Versi produksi bisa berbeda dari mode dev: path, routing, dan aset bisa berperilaku lain. Karena itu, uji ulang semua fitur di URL publik.',
            en: '"Build succeeded" does not automatically mean "website works". The production version can differ from dev mode: paths, routing, and assets may behave differently. So retest every feature at the public URL.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            id: 'Data admin demo disimpan di `localStorage` browser. Artinya produk yang kamu tambah di laptop tidak akan muncul di HP temanmu — itu wajar untuk demo ini.',
            en: "Admin demo data is stored in the browser's `localStorage`. Products you add on your laptop won't appear on a friend's phone — that's expected for this demo.",
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: '**Homepage**: buka URL, pastikan hero, about, produk, microblog, dan footer tampil.', en: '**Homepage**: open the URL, confirm hero, about, products, microblog, and footer appear.' },
            { id: '**Navigasi**: klik setiap link menu dan tombol CTA.', en: '**Navigation**: click every menu link and CTA button.' },
            {
              id: '**Refresh di sub-halaman**: buka halaman seperti `/admin`, lalu tekan refresh. Halaman harus tetap muncul (bukan 404).',
              en: '**Refresh on a sub-page**: open a page like `/admin`, then hit refresh. It should still load (not a 404).',
            },
            {
              id: '**Responsif**: buka di HP, atau pakai DevTools (F12 → ikon device toolbar) untuk mencoba ukuran mobile dan tablet.',
              en: '**Responsive**: open it on your phone, or use DevTools (F12 → device toolbar icon) to try mobile and tablet sizes.',
            },
            { id: '**Bagian produk**: gambar, harga, dan deskripsi tampil rapi.', en: '**Product sections**: images, prices, and descriptions display correctly.' },
            {
              id: '**Admin demo**: login demo, lalu coba create, edit, dan delete produk dan postingan microblog.',
              en: '**Admin demo**: log in to the demo, then try creating, editing, and deleting products and microblog posts.',
            },
            {
              id: '**Animasi interaktif**: scroll dari hero ke footer, gerakkan kursor; pastikan animasi halus dan website tetap jalan di perangkat yang lebih lemah.',
              en: '**Interactive animations**: scroll from hero to footer and move your cursor; make sure motion is smooth and the site still works on weaker devices.',
            },
          ],
        },
      ],
      result: {
        id: 'Semua fitur utama website kamu sudah terbukti berfungsi di URL publik, di desktop maupun mobile.',
        en: 'All key features of your website are confirmed working at the public URL, on desktop and mobile.',
      },
      troubleshooting: [
        {
          problem: {
            id: 'Refresh atau buka langsung `/admin` (atau sub-halaman lain) menampilkan 404 di project Vite.',
            en: 'Refreshing or directly opening `/admin` (or another sub-page) shows a 404 on a Vite project.',
          },
          error: '404: NOT_FOUND',
          solution: [
            {
              type: 'p',
              text: {
                id: 'Aplikasi Vite + React biasanya adalah **SPA** (Single Page Application): hanya ada satu file `index.html`, dan pindah halaman diatur oleh JavaScript di browser (client-side routing, misalnya React Router). Saat kamu refresh `/admin`, server mencari file `/admin` yang memang tidak ada, sehingga muncul 404.',
                en: 'A Vite + React app is usually a **SPA** (Single Page Application): there is only one `index.html`, and page changes are handled by JavaScript in the browser (client-side routing, e.g. React Router). When you refresh `/admin`, the server looks for an `/admin` file that does not exist, so you get a 404.',
              },
            },
            {
              type: 'p',
              text: {
                id: 'Solusinya: buat file `vercel.json` di root project (sejajar `package.json`) agar semua path diarahkan ke `index.html`:',
                en: 'The fix: create a `vercel.json` file in the project root (next to `package.json`) so every path is served by `index.html`:',
              },
            },
            {
              type: 'code',
              lang: 'json',
              code: '{\n  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]\n}',
              caption: { id: 'vercel.json', en: 'vercel.json' },
            },
            {
              type: 'p',
              text: {
                id: 'Commit dan push file ini; Vercel akan deploy ulang otomatis. File statis seperti gambar dan JS tetap dilayani normal. Project **Next.js tidak butuh** ini karena routing-nya ditangani Vercel secara otomatis.',
                en: "Commit and push this file; Vercel redeploys automatically. Static files like images and JS are still served normally. **Next.js projects don't need** this because Vercel handles their routing automatically.",
              },
            },
          ],
        },
        {
          problem: { id: 'Gambar atau font tidak muncul di versi online.', en: 'Images or fonts are missing on the live site.' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Cek tab **Network** di DevTools untuk file yang 404. Biasanya karena beda huruf besar/kecil di nama file, path absolut dari komputermu (misalnya `C:\\Users\\...`), atau file belum di-commit. Taruh aset statis di folder `public/` dan rujuk dengan path seperti `/images/logo.png`.',
                en: 'Check the DevTools **Network** tab for files returning 404. Usually caused by filename capitalization, an absolute path from your computer (e.g. `C:\\Users\\...`), or an uncommitted file. Put static assets in `public/` and reference them like `/images/logo.png`.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Homepage dan semua navigasi berfungsi', en: 'Homepage and all navigation work' },
        { id: 'Refresh sub-halaman tidak 404', en: 'Refreshing a sub-page does not 404' },
        { id: 'Tampilan rapi di mobile dan desktop', en: 'Layout looks good on mobile and desktop' },
        { id: 'CRUD produk dan microblog demo berjalan', en: 'Demo product and microblog CRUD work' },
        { id: 'Animasi berjalan halus', en: 'Animations run smoothly' },
      ],
    },

    // ─────────────────────────────────────────────────────────────── L6
    {
      id: 'm05-continuous-deployment',
      title: { id: 'Continuous Deployment', en: 'Continuous Deployment' },
      objective: {
        id: 'Memahami bagaimana setiap `git push` otomatis memperbarui website online kamu.',
        en: 'Understand how every `git push` automatically updates your live website.',
      },
      minutes: 10,
      mascot: {
        id: 'Sekali disambung, cukup push — sisanya biar Vercel yang kerja. Santai deh! 😺',
        en: 'Once connected, just push — Vercel does the rest. Time to relax! 😺',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Continuous Deployment (CD)** artinya setiap kali kamu push ke branch yang terhubung (biasanya `main`), Vercel otomatis membuat deployment baru. Tidak perlu upload manual lagi.',
            en: '**Continuous Deployment (CD)** means every time you push to the connected branch (usually `main`), Vercel automatically creates a new deployment. No more manual uploads.',
          },
        },
        {
          type: 'flow',
          steps: [
            { id: 'Edit project di VS Code', en: 'Edit project in VS Code' },
            'git add .',
            'git commit',
            'git push',
            { id: 'Repository GitHub ter-update', en: 'GitHub repository updated' },
            { id: 'Vercel mendeteksi perubahan', en: 'Vercel detects changes' },
            { id: 'Deployment baru', en: 'New deployment' },
            { id: 'Website ter-update', en: 'Website updated' },
          ],
        },
        {
          type: 'p',
          text: {
            id: 'Push ke branch lain (bukan `main`) menghasilkan **Preview Deployment** dengan URL sendiri — berguna untuk mencoba perubahan tanpa mengganggu website utama. Kalau deployment baru gagal build, website lama tetap online.',
            en: 'Pushing to another branch (not `main`) creates a **Preview Deployment** with its own URL — handy for trying changes without touching the main site. If a new deployment fails to build, the previous site stays online.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            {
              id: 'Buat perubahan kecil di VS Code, misalnya ubah teks headline di hero, lalu simpan.',
              en: 'Make a small change in VS Code, e.g. edit the hero headline text, then save.',
            },
            { id: 'Jalankan perintah berikut di terminal VS Code:', en: 'Run these commands in the VS Code terminal:' },
          ],
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'git add .\ngit commit -m "Update hero headline"\ngit push',
        },
        {
          type: 'list',
          items: [
            { id: 'Buka dashboard Vercel → project kamu → tab **Deployments**. Deployment baru muncul dengan status **Building**.', en: 'Open the Vercel dashboard → your project → **Deployments** tab. A new deployment appears with status **Building**.' },
            { id: 'Tunggu sampai status **Ready**.', en: 'Wait until the status is **Ready**.' },
            { id: 'Refresh website publik kamu — headline baru sudah tampil.', en: 'Refresh your public website — the new headline is live.' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Kalau deployment terbaru bermasalah, kamu bisa memakai fitur **Instant Rollback** di Vercel untuk kembali ke deployment sebelumnya, lalu memperbaiki kodenya dengan tenang.',
            en: 'If the latest deployment has problems, you can use Vercel **Instant Rollback** to go back to a previous deployment, then fix the code calmly.',
          },
        },
      ],
      result: {
        id: 'Kamu sudah melihat sendiri bahwa `git push` ke `main` otomatis memperbarui website online.',
        en: 'You have seen for yourself that `git push` to `main` automatically updates your live website.',
      },
      troubleshooting: [
        {
          problem: { id: 'Sudah push, tapi tidak ada deployment baru.', en: 'Pushed, but no new deployment appears.' },
          solution: [
            {
              type: 'list',
              items: [
                { id: 'Cek di github.com apakah commit terbaru benar-benar ada (jalankan `git status` dan `git log --oneline -3`).', en: 'Check on github.com that the latest commit is really there (run `git status` and `git log --oneline -3`).' },
                { id: 'Pastikan kamu push ke branch yang terhubung (Settings → Git → Production Branch, biasanya `main`).', en: 'Make sure you pushed to the connected branch (Settings → Git → Production Branch, usually `main`).' },
                { id: 'Pastikan Vercel GitHub App masih punya akses ke repository tersebut.', en: 'Make sure the Vercel GitHub App still has access to the repository.' },
              ],
            },
          ],
        },
        {
          problem: { id: 'Deployment Ready tapi website masih menampilkan versi lama.', en: 'Deployment is Ready but the site still shows the old version.' },
          solution: [
            {
              type: 'p',
              text: {
                id: 'Browser mungkin menyimpan cache. Lakukan hard refresh (`Ctrl+Shift+R` di Windows/Linux, `Cmd+Shift+R` di macOS) atau buka di jendela incognito.',
                en: 'Your browser may be caching. Do a hard refresh (`Ctrl+Shift+R` on Windows/Linux, `Cmd+Shift+R` on macOS) or open it in a private window.',
              },
            },
          ],
        },
      ],
      checklist: [
        { id: 'Membuat perubahan kecil di VS Code', en: 'Made a small change in VS Code' },
        { id: 'Menjalankan git add, git commit, git push', en: 'Ran git add, git commit, git push' },
        { id: 'Melihat deployment baru otomatis di Vercel', en: 'Saw a new automatic deployment in Vercel' },
        { id: 'Perubahan tampil di website publik', en: 'The change is visible on the public website' },
      ],
    },
  ],
  quiz: [
    {
      question: { id: 'Saat mengizinkan Vercel GitHub App, pilihan mana yang paling aman?', en: 'When authorizing the Vercel GitHub App, which option is safest?' },
      options: [
        { id: 'All repositories', en: 'All repositories' },
        { id: 'Only select repositories', en: 'Only select repositories' },
        { id: 'Memberikan password GitHub ke Vercel', en: 'Giving Vercel your GitHub password' },
        { id: 'Menjadikan semua repository public', en: 'Making every repository public' },
      ],
      answer: 1,
      explanation: {
        id: '"Only select repositories" memberi akses hanya ke repository yang dibutuhkan (least privilege).',
        en: '"Only select repositories" grants access only to what is needed (least privilege).',
      },
    },
    {
      question: { id: 'Apa Output Directory yang umum untuk project Vite?', en: 'What is the typical Output Directory for a Vite project?' },
      options: [
        { id: '`.next`', en: '`.next`' },
        { id: '`node_modules`', en: '`node_modules`' },
        { id: '`dist`', en: '`dist`' },
        { id: '`src`', en: '`src`' },
      ],
      answer: 2,
      explanation: {
        id: 'Vite menaruh hasil build di `dist`. Untuk Next.js, `.next` ditangani otomatis oleh Vercel.',
        en: 'Vite writes its build to `dist`. For Next.js, `.next` is handled automatically by Vercel.',
      },
    },
    {
      question: { id: 'Bolehkah menyimpan API key rahasia di variabel `VITE_SECRET_KEY`?', en: 'Is it OK to store a secret API key in `VITE_SECRET_KEY`?' },
      options: [
        { id: 'Boleh, environment variable selalu aman', en: 'Yes, environment variables are always safe' },
        { id: 'Tidak, variabel `VITE_` ikut dikirim ke browser dan bisa dilihat siapa pun', en: 'No, `VITE_` variables are bundled into the browser code and visible to anyone' },
        { id: 'Boleh, asal repository-nya private', en: 'Yes, as long as the repository is private' },
        { id: 'Boleh, kalau namanya mengandung kata SECRET', en: 'Yes, if the name contains SECRET' },
      ],
      answer: 1,
      explanation: {
        id: 'Variabel `VITE_` dan `NEXT_PUBLIC_` dimasukkan ke JavaScript frontend, jadi publik. Rahasia harus tetap di server.',
        en: '`VITE_` and `NEXT_PUBLIC_` variables are embedded in frontend JavaScript, so they are public. Secrets must stay on the server.',
      },
    },
    {
      question: {
        id: 'Website Vite kamu menampilkan 404 saat refresh di `/admin`. Apa solusinya?',
        en: 'Your Vite site shows a 404 when refreshing `/admin`. What is the fix?',
      },
      options: [
        { id: 'Menghapus React Router', en: 'Remove React Router' },
        { id: 'Menambah rewrites ke `/index.html` di `vercel.json`', en: 'Add rewrites to `/index.html` in `vercel.json`' },
        { id: 'Mengganti Output Directory ke `src`', en: 'Change Output Directory to `src`' },
        { id: 'Membuat akun Vercel baru', en: 'Create a new Vercel account' },
      ],
      answer: 1,
      explanation: {
        id: 'SPA hanya punya satu `index.html`; rewrites membuat semua path dilayani file itu sehingga routing di browser bisa bekerja.',
        en: 'A SPA has a single `index.html`; rewrites serve that file for every path so browser routing can take over.',
      },
    },
    {
      question: { id: 'Apa yang terjadi setelah kamu `git push` ke branch `main` yang terhubung?', en: 'What happens after you `git push` to the connected `main` branch?' },
      options: [
        { id: 'Tidak ada, harus upload manual ke Vercel', en: 'Nothing, you must upload to Vercel manually' },
        { id: 'Vercel otomatis membuat deployment baru', en: 'Vercel automatically creates a new deployment' },
        { id: 'Repository GitHub dihapus', en: 'The GitHub repository is deleted' },
        { id: 'Website offline sampai kamu klik Deploy lagi', en: 'The site goes offline until you click Deploy again' },
      ],
      answer: 1,
      explanation: {
        id: 'Itulah continuous deployment: push → Vercel mendeteksi → build → website ter-update.',
        en: "That's continuous deployment: push → Vercel detects → build → website updated.",
      },
    },
  ],
}

export default m05

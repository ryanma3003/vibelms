import type { Module } from '../../types/content'

const m02: Module = {
  id: 'm02',
  number: '02',
  title: { id: 'Menyiapkan Development Environment', en: 'Development Environment Setup' },
  objective: {
    id: 'Menyiapkan komputer kamu untuk web development: akun GitHub dan Vercel, Git, VS Code, Node.js/npm, dan (opsional) Bun — dengan panduan untuk Windows, macOS, dan Linux.',
    en: 'Prepare your computer for web development: GitHub and Vercel accounts, Git, VS Code, Node.js/npm, and (optionally) Bun — with instructions for Windows, macOS, and Linux.',
  },
  lessons: [
    // ─────────────────────────────── L1
    {
      id: 'm02-github-account',
      title: { id: 'Membuat Akun GitHub', en: 'Create a GitHub Account' },
      objective: {
        id: 'Membuat akun GitHub yang aktif, memverifikasi email, dan memahami apa itu repository dan profile.',
        en: 'Create a working GitHub account, verify your email, and understand what repositories and profiles are.',
      },
      minutes: 10,
      mascot: {
        id: 'Ayo bikin "rumah online" untuk kode kamu dulu! 🐾',
        en: "Let's build an online home for your code first! 🐾",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**GitHub** adalah layanan online untuk menyimpan dan berbagi kode. Anggap saja seperti Google Drive khusus kode, tapi dengan riwayat perubahan lengkap berkat Git.',
            en: '**GitHub** is an online service for storing and sharing code. Think of it as Google Drive for code, but with a complete change history powered by Git.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Setiap project disimpan dalam sebuah **repository** (sering disingkat "repo") — folder project beserta seluruh riwayatnya. **Profile** kamu (`github.com/username`) menampilkan semua repository publik dan aktivitas kamu, jadi bisa sekaligus jadi portofolio.',
            en: 'Each project lives in a **repository** (often "repo") — a project folder plus its full history. Your **profile** (`github.com/username`) shows all your public repositories and activity, so it doubles as a portfolio.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Kenapa butuh GitHub?', en: 'Why do you need GitHub?' },
          text: {
            id: 'Di kursus ini, GitHub jadi jembatan antara komputer kamu dan Vercel. Kamu `push` kode ke GitHub, lalu Vercel otomatis men-deploy aplikasi kamu ke internet.',
            en: 'In this course, GitHub is the bridge between your computer and Vercel. You `push` code to GitHub, and Vercel automatically deploys your app to the internet.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka [github.com](https://github.com/) lalu klik **Sign up**.', en: 'Open [github.com](https://github.com/) and click **Sign up**.' },
            { id: 'Masukkan email yang aktif dan kamu pakai sehari-hari, buat password yang kuat, lalu pilih **username**.', en: 'Enter an active email you use daily, create a strong password, and choose a **username**.' },
            { id: 'Selesaikan verifikasi (puzzle) lalu klik **Create account**.', en: 'Complete the verification puzzle and click **Create account**.' },
            { id: 'Buka inbox email kamu, salin kode verifikasi dari GitHub, dan masukkan di halaman GitHub.', en: 'Open your email inbox, copy the verification code from GitHub, and enter it on the GitHub page.' },
            { id: 'Ikuti setup awal (boleh dilewati), pilih paket **Free**.', en: 'Go through the initial setup (you can skip it) and choose the **Free** plan.' },
            { id: 'Klik avatar di pojok kanan atas → **Your profile** untuk melihat profile kamu. Opsional: tambahkan foto dan bio lewat **Edit profile**.', en: 'Click the avatar in the top-right → **Your profile** to see your profile. Optional: add a photo and bio via **Edit profile**.' },
            { id: 'Sangat disarankan: aktifkan **two-factor authentication (2FA)** di **Settings → Password and authentication**.', en: 'Strongly recommended: enable **two-factor authentication (2FA)** in **Settings → Password and authentication**.' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Tips memilih username', en: 'Choosing a username' },
          text: {
            id: 'Pilih username yang profesional dan mudah diingat (misalnya nama kamu). Username akan muncul di URL repository dan, nantinya, bisa terlihat oleh calon klien atau perusahaan.',
            en: 'Pick a professional, memorable username (e.g. your name). It appears in repository URLs and may later be seen by clients or employers.',
          },
        },
      ],
      result: {
        id: 'Kamu punya akun GitHub aktif dengan email terverifikasi dan bisa membuka halaman profile kamu.',
        en: 'You have a working GitHub account with a verified email and can open your profile page.',
      },
      troubleshooting: [
        {
          problem: { id: 'Email verifikasi tidak masuk', en: 'Verification email never arrives' },
          solution: [
            { type: 'p', text: { id: 'Cek folder **Spam**/**Promotions**, tunggu beberapa menit, lalu minta kirim ulang kode. Pastikan alamat email yang kamu ketik benar.', en: 'Check your **Spam**/**Promotions** folder, wait a few minutes, then request a new code. Make sure you typed the email address correctly.' } },
          ],
        },
        {
          problem: { id: 'Username sudah dipakai orang lain', en: 'Username is already taken' },
          solution: [
            { type: 'p', text: { id: 'Tambahkan variasi seperti tanda hubung, inisial, atau angka (misalnya `budi-santoso-dev`). Username bisa diganti nanti di Settings, tapi sebaiknya jangan sering-sering karena URL lama akan berubah.', en: 'Add a variation such as a hyphen, initials, or numbers (e.g. `budi-santoso-dev`). You can change it later in Settings, but avoid doing so often because old URLs change.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Akun GitHub sudah dibuat', en: 'GitHub account created' },
        { id: 'Email sudah diverifikasi', en: 'Email verified' },
        { id: 'Bisa membuka halaman profile `github.com/username`', en: 'Can open the `github.com/username` profile page' },
        { id: 'Paham bedanya repository dan profile', en: 'Understand the difference between a repository and a profile' },
      ],
    },

    // ─────────────────────────────── L2
    {
      id: 'm02-vercel-account',
      title: { id: 'Membuat Akun Vercel', en: 'Create a Vercel Account' },
      objective: {
        id: 'Membuat akun Vercel yang terhubung dengan GitHub dan mengenal dashboard-nya.',
        en: 'Create a Vercel account connected to GitHub and get familiar with its dashboard.',
      },
      minutes: 8,
      mascot: {
        id: 'Vercel itu panggung tempat aplikasimu tampil ke dunia! ✨',
        en: 'Vercel is the stage where your app meets the world! ✨',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Vercel** adalah platform hosting yang bisa mengambil kode dari repository GitHub, membangunnya (build), lalu mempublikasikannya ke URL publik — biasanya hanya dalam hitungan menit.',
            en: '**Vercel** is a hosting platform that takes code from a GitHub repository, builds it, and publishes it at a public URL — usually within minutes.',
          },
        },
        {
          type: 'p',
          text: {
            id: 'Dengan mendaftar lewat **Continue with GitHub**, Vercel bisa membaca repository kamu (sesuai izin yang kamu berikan) dan otomatis deploy ulang setiap kali kamu `push` perubahan.',
            en: 'By signing up with **Continue with GitHub**, Vercel can read your repositories (within the permissions you grant) and automatically redeploy every time you `push` changes.',
          },
        },
        { type: 'illustration', name: 'deploy-pipeline', caption: { id: 'Alur dari GitHub ke URL publik di Vercel', en: 'The flow from GitHub to a public Vercel URL' } },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka [vercel.com](https://vercel.com/) lalu klik **Sign Up**.', en: 'Open [vercel.com](https://vercel.com/) and click **Sign Up**.' },
            { id: 'Pilih paket **Hobby** (gratis, untuk project pribadi) dan isi nama kamu.', en: 'Choose the **Hobby** plan (free, for personal projects) and enter your name.' },
            { id: 'Klik **Continue with GitHub**.', en: 'Click **Continue with GitHub**.' },
            { id: 'Di halaman GitHub yang muncul, periksa izin yang diminta lalu klik **Authorize Vercel**.', en: 'On the GitHub page that appears, review the requested permissions and click **Authorize Vercel**.' },
            { id: 'Kamu akan diarahkan ke **dashboard** Vercel. Di sinilah semua project yang kamu deploy akan muncul.', en: "You'll land on the Vercel **dashboard**. This is where all your deployed projects will appear." },
          ],
        },
        {
          type: 'heading',
          text: { id: 'Mengenal dashboard', en: 'Getting to know the dashboard' },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: '**Overview/Projects** — daftar project kamu (masih kosong sekarang).', en: '**Overview/Projects** — your project list (empty for now).' },
            { id: '**Add New… → Project** — untuk mengimpor repository dari GitHub (kita pakai di modul deploy).', en: '**Add New… → Project** — import a repository from GitHub (used in the deploy module).' },
            { id: '**Deployments** — riwayat setiap deploy beserta log build-nya.', en: '**Deployments** — history of each deploy with its build logs.' },
            { id: '**Settings** — pengaturan akun, tim, dan integrasi Git.', en: '**Settings** — account, team, and Git integration settings.' },
          ],
        },
      ],
      result: {
        id: 'Akun Vercel kamu aktif dan terhubung ke akun GitHub.',
        en: 'Your Vercel account is active and connected to your GitHub account.',
      },
      troubleshooting: [
        {
          problem: { id: 'Tidak sengaja daftar dengan email, bukan GitHub', en: 'Accidentally signed up with email instead of GitHub' },
          solution: [
            { type: 'p', text: { id: 'Buka **Settings** akun Vercel dan cari bagian koneksi Git/login, lalu hubungkan akun GitHub kamu dari sana.', en: 'Open your Vercel account **Settings**, find the Git connection/login section, and connect your GitHub account there.' } },
          ],
        },
        {
          problem: { id: 'Repository tidak terlihat saat import project', en: "Repositories don't show up when importing a project" },
          solution: [
            { type: 'p', text: { id: 'Kemungkinan Vercel hanya diberi akses ke repository tertentu. Di halaman import, klik opsi untuk mengatur izin GitHub (**Adjust GitHub App Permissions**) lalu beri akses ke repository yang dibutuhkan.', en: 'Vercel may only have access to selected repositories. On the import page, use the option to adjust GitHub permissions (**Adjust GitHub App Permissions**) and grant access to the repositories you need.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Akun Vercel sudah dibuat (paket Hobby)', en: 'Vercel account created (Hobby plan)' },
        { id: 'Login memakai **Continue with GitHub**', en: 'Signed in with **Continue with GitHub**' },
        { id: 'Vercel sudah di-authorize di GitHub', en: 'Vercel authorized on GitHub' },
        { id: 'Bisa membuka dashboard Vercel', en: 'Can open the Vercel dashboard' },
      ],
    },

    // ─────────────────────────────── L3
    {
      id: 'm02-install-git',
      title: { id: 'Install Git', en: 'Install Git' },
      objective: {
        id: 'Menginstal Git di sistem operasi kamu dan memverifikasinya dengan `git --version`.',
        en: 'Install Git on your operating system and verify it with `git --version`.',
      },
      minutes: 15,
      mascot: {
        id: 'Git itu mesin waktu untuk kodemu. Keren, kan? ⏳',
        en: 'Git is a time machine for your code. Pretty cool, right? ⏳',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Git** adalah *version control system*: program yang mencatat setiap perubahan pada file project kamu. Setiap "snapshot" disebut **commit**.',
            en: '**Git** is a *version control system*: a program that records every change to your project files. Each snapshot is called a **commit**.',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: 'Bisa kembali ke versi sebelumnya kalau AI (atau kamu) merusak sesuatu.', en: 'Go back to an earlier version if the AI (or you) breaks something.' },
            { id: 'Melihat apa saja yang berubah sebelum menyimpannya.', en: 'See exactly what changed before saving it.' },
            { id: 'Mengirim kode ke GitHub (`push`) supaya aman dan bisa di-deploy.', en: 'Send code to GitHub (`push`) so it is backed up and deployable.' },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            id: '**Git ≠ GitHub.** Git adalah program di komputer kamu; GitHub adalah layanan online yang menyimpan repository Git.',
            en: '**Git ≠ GitHub.** Git is a program on your computer; GitHub is an online service that hosts Git repositories.',
          },
        },
      ],
      instructions: [
        {
          type: 'os',
          tabs: [
            {
              os: 'windows',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Buka [git-scm.com/downloads](https://git-scm.com/downloads) lalu pilih **Windows**. Unduh installer **Git for Windows** (64-bit).', en: 'Open [git-scm.com/downloads](https://git-scm.com/downloads) and choose **Windows**. Download the **Git for Windows** installer (64-bit).' },
                    { id: 'Jalankan installer. Untuk pemula, opsi default sudah aman — cukup klik **Next** sampai **Install**.', en: 'Run the installer. For beginners, the defaults are fine — keep clicking **Next** until **Install**.' },
                    { id: 'Pada pilihan default editor, kamu boleh memilih **Visual Studio Code** jika sudah terinstal.', en: 'At the default editor step, you may pick **Visual Studio Code** if it is already installed.' },
                    { id: 'Setelah selesai, tutup lalu buka lagi terminal (PowerShell atau Command Prompt) dan jalankan perintah verifikasi.', en: 'When finished, close and reopen your terminal (PowerShell or Command Prompt) and run the verify command.' },
                  ],
                },
                { type: 'code', lang: 'powershell', code: 'git --version', output: 'git version 2.x.x.windows.1' },
                { type: 'callout', tone: 'tip', text: { id: 'Alternatif: jika kamu memakai winget, jalankan `winget install --id Git.Git -e --source winget`.', en: 'Alternative: if you use winget, run `winget install --id Git.Git -e --source winget`.' } },
              ],
            },
            {
              os: 'macos',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Buka aplikasi **Terminal** (Cmd + Space, ketik "Terminal").', en: 'Open the **Terminal** app (Cmd + Space, type "Terminal").' },
                    { id: 'Cara termudah: instal Command Line Tools dari Apple, yang sudah termasuk Git. Klik **Install** pada jendela yang muncul.', en: "Easiest way: install Apple's Command Line Tools, which include Git. Click **Install** in the dialog that appears." },
                  ],
                },
                { type: 'code', lang: 'bash', code: 'xcode-select --install' },
                { type: 'p', text: { id: 'Atau, jika kamu sudah memakai [Homebrew](https://brew.sh/):', en: 'Or, if you already use [Homebrew](https://brew.sh/):' } },
                { type: 'code', lang: 'bash', code: 'brew install git' },
                { type: 'p', text: { id: 'Verifikasi:', en: 'Verify:' } },
                { type: 'code', lang: 'bash', code: 'git --version', output: 'git version 2.x.x' },
              ],
            },
            {
              os: 'linux',
              blocks: [
                { type: 'p', text: { id: 'Gunakan package manager distro kamu.', en: "Use your distro's package manager." } },
                { type: 'code', lang: 'bash', code: 'sudo apt update\nsudo apt install git', caption: { id: 'Ubuntu / Debian', en: 'Ubuntu / Debian' } },
                { type: 'code', lang: 'bash', code: 'sudo dnf install git', caption: { id: 'Fedora', en: 'Fedora' } },
                { type: 'p', text: { id: 'Verifikasi:', en: 'Verify:' } },
                { type: 'code', lang: 'bash', code: 'git --version', output: 'git version 2.x.x' },
              ],
            },
          ],
        },
      ],
      result: {
        id: 'Perintah `git --version` menampilkan nomor versi Git.',
        en: 'Running `git --version` prints a Git version number.',
      },
      troubleshooting: [
        {
          problem: { id: 'Windows: git tidak dikenali', en: 'Windows: git is not recognized' },
          error: "git : The term 'git' is not recognized as the name of a cmdlet, function, script file, or operable program.",
          solution: [
            { type: 'p', text: { id: 'Tutup semua jendela terminal dan VS Code, lalu buka lagi supaya PATH terbaru terbaca. Jika masih gagal, jalankan ulang installer dan pastikan opsi **Git from the command line and also from 3rd-party software** dipilih.', en: 'Close all terminal and VS Code windows, then reopen them so the updated PATH is loaded. If it still fails, rerun the installer and make sure **Git from the command line and also from 3rd-party software** is selected.' } },
          ],
        },
        {
          problem: { id: 'macOS: xcode-select bilang sudah terinstal', en: 'macOS: xcode-select says it is already installed' },
          error: 'xcode-select: error: command line tools are already installed',
          solution: [
            { type: 'p', text: { id: 'Itu artinya Git sudah ada. Langsung jalankan `git --version`.', en: 'That means Git is already there. Just run `git --version`.' } },
          ],
        },
      ],
      checklist: [
        { id: 'Git terinstal', en: 'Git installed' },
        { id: '`git --version` menampilkan versi', en: '`git --version` shows a version' },
        { id: 'Paham bedanya Git dan GitHub', en: 'Understand the difference between Git and GitHub' },
      ],
    },

    // ─────────────────────────────── L4
    {
      id: 'm02-configure-git',
      title: { id: 'Konfigurasi Git Global', en: 'Configure Git Globally' },
      objective: {
        id: 'Mengatur nama dan email global Git supaya setiap commit tercatat atas nama kamu.',
        en: 'Set your global Git name and email so every commit is recorded under your identity.',
      },
      minutes: 5,
      mascot: {
        id: 'Kenalkan dirimu ke Git, biar dia tahu siapa pemilik commit-nya! 😺',
        en: 'Introduce yourself to Git so it knows who made each commit! 😺',
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Setiap commit menyimpan **nama** dan **email** pembuatnya. Kita set sekali secara **global** (berlaku untuk semua project di komputer ini).',
            en: 'Every commit stores the **name** and **email** of its author. We set them once **globally** (applies to every project on this computer).',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            id: 'Sebaiknya gunakan email yang **sama dengan email yang terdaftar di akun GitHub** kamu, supaya commit terhubung ke profile kamu. Jika ingin email tetap privat, kamu bisa memakai alamat `noreply` dari **GitHub Settings → Emails**.',
            en: 'Preferably use an email **associated with your GitHub account**, so commits link to your profile. To keep your email private, you can use the `noreply` address from **GitHub Settings → Emails**.',
          },
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            { id: 'Buka terminal (PowerShell/Command Prompt di Windows, Terminal di macOS/Linux).', en: 'Open a terminal (PowerShell/Command Prompt on Windows, Terminal on macOS/Linux).' },
            { id: 'Jalankan dua perintah ini, ganti nama dan email dengan milikmu (tanda kutip tetap dipakai):', en: 'Run these two commands, replacing the name and email with yours (keep the quotes):' },
          ],
        },
        { type: 'code', lang: 'bash', code: 'git config --global user.name "Your Name"\ngit config --global user.email "your-email@example.com"' },
        { type: 'list', items: [{ id: 'Verifikasi konfigurasinya:', en: 'Verify the configuration:' }] },
        { type: 'code', lang: 'bash', code: 'git config --global --list', output: 'user.name=Your Name\nuser.email=your-email@example.com' },
      ],
      result: {
        id: '`git config --global --list` menampilkan `user.name` dan `user.email` milik kamu.',
        en: '`git config --global --list` shows your `user.name` and `user.email`.',
      },
      troubleshooting: [
        {
          problem: { id: 'Salah ketik nama atau email', en: 'Typo in name or email' },
          solution: [{ type: 'p', text: { id: 'Jalankan lagi perintah yang sama dengan nilai yang benar — nilai lama akan ditimpa.', en: 'Just run the same command again with the correct value — it overwrites the old one.' } }],
        },
        {
          problem: { id: 'Commit tidak muncul di profile GitHub', en: "Commits don't show up on your GitHub profile" },
          solution: [{ type: 'p', text: { id: 'Email di `git config` belum terdaftar di akun GitHub. Tambahkan email itu di **GitHub Settings → Emails**, atau ubah `user.email` ke email yang sudah terdaftar.', en: "The email in `git config` isn't on your GitHub account. Add it in **GitHub Settings → Emails**, or change `user.email` to a registered email." } }],
        },
        {
          problem: { id: 'Git meminta identitas saat commit', en: 'Git asks for your identity on commit' },
          error: 'Author identity unknown\n\n*** Please tell me who you are.',
          solution: [{ type: 'p', text: { id: 'Konfigurasi global belum diatur. Jalankan dua perintah `git config --global` di atas.', en: "Global config isn't set yet. Run the two `git config --global` commands above." } }],
        },
      ],
      checklist: [
        { id: 'Username Git global sudah dikonfigurasi', en: 'Git global username configured' },
        { id: 'Email Git global sudah dikonfigurasi', en: 'Git global email configured' },
        { id: 'Email cocok dengan email di akun GitHub', en: 'Email matches one on your GitHub account' },
        { id: '`git config --global --list` sudah dicek', en: 'Checked with `git config --global --list`' },
      ],
    },

    // ─────────────────────────────── L5
    {
      id: 'm02-install-vscode',
      title: { id: 'Install Visual Studio Code', en: 'Install Visual Studio Code' },
      objective: {
        id: 'Menginstal VS Code, mengenal panel-panel utamanya, membuka folder project, dan membuka terminal terintegrasi.',
        en: 'Install VS Code, learn its main panels, open a project folder, and open the integrated terminal.',
      },
      minutes: 15,
      mascot: {
        id: 'Ini meja kerja barumu. Yuk, kita rapikan! 🧶',
        en: "This is your new workbench. Let's set it up! 🧶",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '**Visual Studio Code** (VS Code) adalah code editor gratis dari Microsoft. Di sinilah kamu membaca, mengedit, dan menjalankan kode hasil AI.',
            en: '**Visual Studio Code** (VS Code) is a free code editor from Microsoft. This is where you read, edit, and run the code the AI produces.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'VS Code ≠ Visual Studio', en: 'VS Code ≠ Visual Studio' },
          text: {
            id: '**Visual Studio** (tanpa "Code") adalah IDE besar yang berbeda, terutama untuk .NET/C++. Yang kita butuhkan adalah **Visual Studio Code**.',
            en: '**Visual Studio** (without "Code") is a different, much larger IDE mainly for .NET/C++. What we need is **Visual Studio Code**.',
          },
        },
        { type: 'illustration', name: 'vscode-layout', caption: { id: 'Panel utama VS Code', en: 'Main VS Code panels' } },
        {
          type: 'list',
          ordered: false,
          items: [
            { id: '**Explorer** — daftar file dan folder project.', en: '**Explorer** — the project file and folder tree.' },
            { id: '**Editor** — tempat membuka dan mengedit file.', en: '**Editor** — where you open and edit files.' },
            { id: '**Terminal** — command line di dalam VS Code untuk menjalankan `git`, `npm`, dll.', en: '**Terminal** — a command line inside VS Code for running `git`, `npm`, etc.' },
            { id: '**Extensions** — menambah fitur, misalnya dukungan bahasa atau asisten AI.', en: '**Extensions** — add features such as language support or AI assistants.' },
          ],
        },
      ],
      instructions: [
        {
          type: 'os',
          tabs: [
            {
              os: 'windows',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Unduh installer dari [code.visualstudio.com](https://code.visualstudio.com/) (**User Installer**).', en: 'Download the installer from [code.visualstudio.com](https://code.visualstudio.com/) (**User Installer**).' },
                    { id: 'Jalankan installer. Centang **Add to PATH** dan **Add "Open with Code" action** agar lebih praktis.', en: 'Run the installer. Tick **Add to PATH** and **Add "Open with Code" action** for convenience.' },
                    { id: 'Selesaikan instalasi lalu buka VS Code.', en: 'Finish the installation and open VS Code.' },
                  ],
                },
              ],
            },
            {
              os: 'macos',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Unduh versi macOS dari [code.visualstudio.com](https://code.visualstudio.com/).', en: 'Download the macOS build from [code.visualstudio.com](https://code.visualstudio.com/).' },
                    { id: 'Ekstrak file `.zip` lalu seret **Visual Studio Code.app** ke folder **Applications**.', en: 'Unzip it and drag **Visual Studio Code.app** into **Applications**.' },
                    { id: 'Buka VS Code, tekan Cmd + Shift + P, ketik **Shell Command: Install \'code\' command in PATH** supaya perintah `code` bisa dipakai di Terminal.', en: "Open VS Code, press Cmd + Shift + P, run **Shell Command: Install 'code' command in PATH** so the `code` command works in Terminal." },
                  ],
                },
              ],
            },
            {
              os: 'linux',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Unduh paket `.deb` (Ubuntu/Debian) atau `.rpm` (Fedora) dari [code.visualstudio.com](https://code.visualstudio.com/).', en: 'Download the `.deb` (Ubuntu/Debian) or `.rpm` (Fedora) package from [code.visualstudio.com](https://code.visualstudio.com/).' },
                    { id: 'Instal paketnya, misalnya:', en: 'Install the package, for example:' },
                  ],
                },
                { type: 'code', lang: 'bash', code: 'sudo apt install ./code_*.deb', caption: { id: 'Ubuntu / Debian, dari folder Downloads', en: 'Ubuntu / Debian, from the Downloads folder' } },
                { type: 'code', lang: 'bash', code: 'sudo dnf install ./code-*.rpm', caption: { id: 'Fedora', en: 'Fedora' } },
              ],
            },
          ],
        },
        { type: 'heading', text: { id: 'Membuka folder project dan terminal', en: 'Opening a project folder and terminal' } },
        {
          type: 'list',
          items: [
            { id: 'Buat folder baru, misalnya `vibecoding` di Documents.', en: 'Create a new folder, e.g. `vibecoding` in Documents.' },
            { id: 'Di VS Code pilih **File → Open Folder…** lalu pilih folder itu (klik **Yes, I trust the authors** untuk folder milikmu sendiri).', en: 'In VS Code choose **File → Open Folder…** and select it (click **Yes, I trust the authors** for your own folder).' },
            { id: 'Buka terminal terintegrasi: menu **Terminal → New Terminal**, atau tekan Ctrl + ` (backtick).', en: 'Open the integrated terminal: **Terminal → New Terminal**, or press Ctrl + ` (backtick).' },
            { id: 'Coba ketik `git --version` di terminal itu.', en: 'Try typing `git --version` in that terminal.' },
          ],
        },
      ],
      result: {
        id: 'VS Code terbuka dengan folder project kamu di Explorer dan terminal aktif di bagian bawah.',
        en: 'VS Code is open with your project folder in the Explorer and an active terminal at the bottom.',
      },
      troubleshooting: [
        {
          problem: { id: 'Perintah tidak dikenali di terminal VS Code padahal sudah diinstal', en: "Commands aren't recognized in the VS Code terminal even though they're installed" },
          solution: [{ type: 'p', text: { id: 'VS Code membaca PATH saat dibuka. Tutup **semua** jendela VS Code lalu buka lagi setelah menginstal Git/Node.js.', en: 'VS Code reads PATH when it starts. Close **all** VS Code windows and reopen after installing Git/Node.js.' } }],
        },
        {
          problem: { id: 'Tidak sengaja mengunduh Visual Studio', en: 'Downloaded Visual Studio by mistake' },
          solution: [{ type: 'p', text: { id: 'Pastikan kamu mengunduh dari [code.visualstudio.com](https://code.visualstudio.com/). Ikon VS Code berwarna biru; Visual Studio berwarna ungu.', en: 'Make sure you download from [code.visualstudio.com](https://code.visualstudio.com/). The VS Code icon is blue; Visual Studio is purple.' } }],
        },
      ],
      checklist: [
        { id: 'VS Code terinstal', en: 'VS Code installed' },
        { id: 'Tahu letak Explorer, Editor, Terminal, dan Extensions', en: 'Know where Explorer, Editor, Terminal, and Extensions are' },
        { id: 'Bisa membuka folder project', en: 'Can open a project folder' },
        { id: 'Bisa membuka terminal terintegrasi', en: 'Can open the integrated terminal' },
      ],
    },

    // ─────────────────────────────── L6
    {
      id: 'm02-install-node',
      title: { id: 'Install Node.js dan npm', en: 'Install Node.js and npm' },
      objective: {
        id: 'Menginstal Node.js versi LTS (sudah termasuk npm) dan memverifikasi keduanya.',
        en: 'Install the Node.js LTS release (which includes npm) and verify both.',
      },
      minutes: 15,
      mascot: {
        id: 'Node.js bikin JavaScript bisa lari di luar browser. Meong cepat! 🐈',
        en: 'Node.js lets JavaScript run outside the browser. Zoom! 🐈',
      },
      explanation: [
        {
          type: 'list',
          ordered: false,
          items: [
            { id: '**JavaScript** — bahasa pemrograman web.', en: '**JavaScript** — the programming language of the web.' },
            { id: '**Node.js** — *runtime* yang menjalankan JavaScript di komputer kamu (bukan hanya di browser). Dibutuhkan untuk menjalankan dev server dan build.', en: '**Node.js** — a *runtime* that runs JavaScript on your computer (not just in the browser). Needed for dev servers and builds.' },
            { id: '**npm** — *package manager* yang ikut terinstal bersama Node.js. Dipakai untuk mengunduh library (`npm install`) dan menjalankan script (`npm run dev`).', en: '**npm** — the *package manager* bundled with Node.js. Used to download libraries (`npm install`) and run scripts (`npm run dev`).' },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Kenapa LTS?', en: 'Why LTS?' },
          text: {
            id: '**LTS** (Long Term Support) adalah versi stabil yang didukung lama. Paling aman untuk pemula dan didukung oleh hampir semua tool.',
            en: '**LTS** (Long Term Support) is the stable, long-supported release. Safest for beginners and supported by nearly every tool.',
          },
        },
      ],
      instructions: [
        {
          type: 'os',
          tabs: [
            {
              os: 'windows',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Buka [nodejs.org](https://nodejs.org/) dan unduh installer Windows (`.msi`) versi **LTS**.', en: 'Open [nodejs.org](https://nodejs.org/) and download the **LTS** Windows installer (`.msi`).' },
                    { id: 'Jalankan installer dengan opsi default (pastikan **Add to PATH** tetap aktif).', en: 'Run the installer with the default options (keep **Add to PATH** enabled).' },
                    { id: 'Tutup dan buka lagi terminal/VS Code, lalu verifikasi.', en: 'Close and reopen your terminal/VS Code, then verify.' },
                  ],
                },
              ],
            },
            {
              os: 'macos',
              blocks: [
                {
                  type: 'list',
                  items: [
                    { id: 'Buka [nodejs.org](https://nodejs.org/) dan unduh installer macOS (`.pkg`) versi **LTS**.', en: 'Open [nodejs.org](https://nodejs.org/) and download the **LTS** macOS installer (`.pkg`).' },
                    { id: 'Jalankan installer sampai selesai, lalu buka Terminal baru.', en: 'Run the installer to completion, then open a new Terminal.' },
                  ],
                },
                { type: 'callout', tone: 'tip', text: { id: 'Pengguna Homebrew juga bisa memakai `brew install node`.', en: 'Homebrew users can also use `brew install node`.' } },
              ],
            },
            {
              os: 'linux',
              blocks: [
                {
                  type: 'p',
                  text: {
                    id: 'Paket bawaan distro sering kali versinya lama. Cara yang disarankan di halaman [nodejs.org/en/download](https://nodejs.org/en/download) adalah memakai **nvm** (Node Version Manager). Salin perintah instal nvm terbaru dari halaman itu, buka terminal baru, lalu jalankan:',
                    en: 'Distro packages are often outdated. The approach recommended on [nodejs.org/en/download](https://nodejs.org/en/download) is **nvm** (Node Version Manager). Copy the latest nvm install command from that page, open a new terminal, then run:',
                  },
                },
                { type: 'code', lang: 'bash', code: 'nvm install --lts' },
              ],
            },
          ],
        },
        { type: 'p', text: { id: 'Verifikasi di semua OS:', en: 'Verify on every OS:' } },
        { type: 'code', lang: 'bash', code: 'node --version\nnpm --version', output: 'v2x.x.x\n1x.x.x' },
      ],
      result: {
        id: '`node --version` dan `npm --version` sama-sama menampilkan nomor versi.',
        en: 'Both `node --version` and `npm --version` print version numbers.',
      },
      troubleshooting: [
        {
          problem: { id: 'node tidak dikenali', en: 'node is not recognized' },
          error: "node : The term 'node' is not recognized as the name of a cmdlet, function, script file, or operable program.",
          solution: [{ type: 'p', text: { id: 'Restart terminal dan VS Code. Jika masih gagal, lihat lesson berikutnya tentang masalah PATH.', en: 'Restart your terminal and VS Code. If it still fails, see the next lesson on PATH problems.' } }],
        },
        {
          problem: { id: 'Windows PowerShell: npm.ps1 tidak bisa dijalankan', en: 'Windows PowerShell: npm.ps1 cannot be loaded' },
          error: 'npm.ps1 cannot be loaded because running scripts is disabled on this system.',
          solution: [{ type: 'p', text: { id: 'Ini masalah execution policy PowerShell, bukan instalasi yang gagal. Lanjut ke lesson berikutnya untuk solusinya.', en: "This is a PowerShell execution policy issue, not a failed install. Continue to the next lesson for the fix." } }],
        },
      ],
      checklist: [
        { id: 'Node.js LTS terinstal', en: 'Node.js LTS installed' },
        { id: '`node --version` menampilkan versi', en: '`node --version` shows a version' },
        { id: '`npm --version` menampilkan versi', en: '`npm --version` shows a version' },
        { id: 'Paham hubungan JavaScript, Node.js, dan npm', en: 'Understand how JavaScript, Node.js, and npm relate' },
      ],
    },

    // ─────────────────────────────── L7
    {
      id: 'm02-npm-execution-policy',
      title: { id: 'Troubleshooting Execution Policy npm di Windows', en: 'Troubleshoot npm Execution Policy on Windows' },
      objective: {
        id: 'Mengatasi error `npm.ps1 cannot be loaded` dengan aman, serta masalah umum PATH dan instalasi Node.js.',
        en: 'Safely fix the `npm.ps1 cannot be loaded` error, plus common PATH and Node.js installation problems.',
      },
      minutes: 10,
      mascot: {
        id: 'Error itu cuma teka-teki. Kita pecahkan pelan-pelan, ya! 🔍',
        en: "Errors are just puzzles. Let's solve this one calmly! 🔍",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: 'Di Windows, perintah `npm` di PowerShell sebenarnya menjalankan script `npm.ps1`. PowerShell punya fitur keamanan bernama **execution policy** yang, secara default di banyak komputer, memblokir script. Hasilnya error berikut:',
            en: 'On Windows, `npm` in PowerShell actually runs a script called `npm.ps1`. PowerShell has a security feature called **execution policy** which, by default on many machines, blocks scripts. The result is this error:',
          },
        },
        { type: 'code', lang: 'text', code: 'npm.ps1 cannot be loaded because running scripts is disabled on this system.' },
        {
          type: 'callout',
          tone: 'info',
          text: {
            id: 'Node.js dan npm kamu **sudah terinstal dengan benar**. Hanya PowerShell yang menolak menjalankan script-nya.',
            en: 'Your Node.js and npm are **installed correctly**. Only PowerShell is refusing to run the script.',
          },
        },
      ],
      instructions: [
        { type: 'heading', text: { id: 'Opsi A — Pakai Command Prompt (paling aman)', en: 'Option A — Use Command Prompt (safest)' } },
        {
          type: 'list',
          items: [
            { id: 'Di terminal VS Code, klik panah ▾ di samping tombol **+** lalu pilih **Command Prompt**. (Atau buka **Command Prompt** dari Start menu.)', en: 'In the VS Code terminal, click the ▾ arrow next to **+** and choose **Command Prompt**. (Or open **Command Prompt** from the Start menu.)' },
            { id: 'Jalankan:', en: 'Run:' },
          ],
        },
        { type: 'code', lang: 'cmd', code: 'npm --version' },
        { type: 'p', text: { id: 'Opsional: jadikan Command Prompt sebagai default lewat Command Palette → **Terminal: Select Default Profile**.', en: 'Optional: make Command Prompt the default via Command Palette → **Terminal: Select Default Profile**.' } },
        { type: 'heading', text: { id: 'Opsi B — Ubah policy PowerShell untuk user kamu saja', en: 'Option B — Change the PowerShell policy for your user only' } },
        { type: 'list', items: [{ id: 'Periksa policy saat ini:', en: 'Inspect the current policies:' }] },
        { type: 'code', lang: 'powershell', code: 'Get-ExecutionPolicy -List' },
        {
          type: 'list',
          items: [
            { id: 'Jika `CurrentUser` bernilai `Undefined` atau `Restricted`, dan ini komputer pribadimu, jalankan (tanpa perlu Administrator):', en: 'If `CurrentUser` is `Undefined` or `Restricted`, and this is your personal computer, run (no Administrator needed):' },
          ],
        },
        { type: 'code', lang: 'powershell', code: 'Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned' },
        { type: 'list', items: [{ id: 'Tutup dan buka lagi terminal, lalu jalankan `npm --version`.', en: 'Close and reopen the terminal, then run `npm --version`.' }] },
        {
          type: 'callout',
          tone: 'warning',
          title: { id: 'Implikasi keamanan', en: 'Security implications' },
          text: {
            id: '`RemoteSigned` mengizinkan script lokal berjalan, tapi script yang diunduh dari internet harus ditandatangani. Perubahan ini hanya berlaku untuk akun kamu (`CurrentUser`). **Jangan** memakai `Unrestricted` atau `Bypass`, karena itu mematikan perlindungan.',
            en: '`RemoteSigned` lets local scripts run but requires scripts downloaded from the internet to be signed. The change only applies to your account (`CurrentUser`). **Do not** use `Unrestricted` or `Bypass`, as they remove the protection.',
          },
        },
        {
          type: 'callout',
          tone: 'danger',
          title: { id: 'Laptop kantor/kampus?', en: 'Work or school laptop?' },
          text: {
            id: 'Di perangkat yang dikelola organisasi, policy bisa diatur oleh IT (terlihat sebagai `MachinePolicy`/`UserPolicy`). Ikuti kebijakan IT — gunakan Opsi A atau minta bantuan tim IT, jangan mencoba mengakalinya.',
            en: "On organization-managed devices, policy may be set by IT (shown as `MachinePolicy`/`UserPolicy`). Follow IT policy — use Option A or ask your IT team; don't try to work around it.",
          },
        },
      ],
      result: {
        id: '`npm --version` berjalan di Command Prompt atau PowerShell tanpa error.',
        en: '`npm --version` runs in Command Prompt or PowerShell without errors.',
      },
      troubleshooting: [
        {
          problem: { id: 'npm.ps1 cannot be loaded', en: 'npm.ps1 cannot be loaded' },
          error: 'npm.ps1 cannot be loaded because running scripts is disabled on this system.',
          solution: [{ type: 'p', text: { id: 'Gunakan Opsi A (Command Prompt) atau Opsi B (`RemoteSigned` untuk `CurrentUser`) di atas.', en: 'Use Option A (Command Prompt) or Option B (`RemoteSigned` for `CurrentUser`) above.' } }],
        },
        {
          problem: { id: 'Node.js tidak dikenali', en: 'Node.js not recognized' },
          error: "'node' is not recognized as an internal or external command,\noperable program or batch file.",
          solution: [{ type: 'p', text: { id: 'Tutup semua terminal dan VS Code lalu buka lagi. Jika masih gagal, restart komputer. Masih gagal? Instal ulang Node.js LTS dari [nodejs.org](https://nodejs.org/).', en: 'Close all terminals and VS Code, then reopen. If that fails, restart the computer. Still failing? Reinstall Node.js LTS from [nodejs.org](https://nodejs.org/).' } }],
        },
        {
          problem: { id: 'npm tidak dikenali', en: 'npm not recognized' },
          error: "'npm' is not recognized as an internal or external command,\noperable program or batch file.",
          solution: [{ type: 'p', text: { id: 'npm ikut dengan Node.js. Cek dulu `node --version`. Jika node jalan tapi npm tidak, instal ulang Node.js dengan opsi default (npm package manager dan Add to PATH tercentang).', en: 'npm ships with Node.js. Check `node --version` first. If node works but npm doesn\'t, reinstall Node.js with default options (npm package manager and Add to PATH checked).' } }],
        },
        {
          problem: { id: 'Masalah PATH', en: 'PATH problems' },
          solution: [
            { type: 'p', text: { id: 'PATH adalah daftar folder tempat sistem mencari program. Di Windows, cek dengan perintah di bawah — harus ada folder seperti `C:\\Program Files\\nodejs\\`.', en: 'PATH is the list of folders where the system looks for programs. On Windows, check with the command below — it should include a folder like `C:\\Program Files\\nodejs\\`.' } },
            { type: 'code', lang: 'powershell', code: '$env:Path -split ";"' },
            { type: 'p', text: { id: 'Jika tidak ada, jalankan ulang installer Node.js (pilih **Repair**) lalu restart terminal.', en: "If it's missing, rerun the Node.js installer (choose **Repair**) and restart the terminal." } },
          ],
        },
        {
          problem: { id: 'Sudah instal tapi VS Code belum mengenali', en: "Installed, but VS Code still doesn't see it" },
          solution: [{ type: 'p', text: { id: 'Terminal VS Code memakai PATH saat VS Code dibuka. Tutup **semua** jendela VS Code dan buka lagi setelah instalasi.', en: 'The VS Code terminal uses the PATH from when VS Code launched. Close **all** VS Code windows and reopen after installing.' } }],
        },
        {
          problem: { id: 'Konflik instalasi (ada beberapa versi Node.js)', en: 'Installation conflicts (multiple Node.js versions)' },
          solution: [
            { type: 'p', text: { id: 'Cek lokasi Node.js yang dipakai. Jika muncul lebih dari satu, hapus instalasi lama lewat **Settings → Apps** (Windows) lalu sisakan satu cara instal saja (installer resmi *atau* version manager seperti nvm, jangan campur).', en: 'Check which Node.js is used. If more than one appears, uninstall old ones via **Settings → Apps** (Windows) and keep a single install method (official installer *or* a version manager like nvm, not both).' } },
            { type: 'code', lang: 'cmd', code: 'where node', caption: { id: 'Windows (Command Prompt)', en: 'Windows (Command Prompt)' } },
            { type: 'code', lang: 'bash', code: 'which -a node', caption: { id: 'macOS / Linux', en: 'macOS / Linux' } },
          ],
        },
      ],
      checklist: [
        { id: 'Paham kenapa error `npm.ps1` muncul', en: 'Understand why the `npm.ps1` error appears' },
        { id: '`npm --version` berhasil di Command Prompt atau PowerShell', en: '`npm --version` works in Command Prompt or PowerShell' },
        { id: 'Tidak memakai `Unrestricted` atau `Bypass`', en: 'Did not use `Unrestricted` or `Bypass`' },
        { id: 'Tahu harus restart VS Code setelah instalasi', en: 'Know to restart VS Code after installing' },
      ],
    },

    // ─────────────────────────────── L8
    {
      id: 'm02-install-bun',
      title: { id: 'Opsional – Install Bun', en: 'Optional – Install Bun' },
      objective: {
        id: 'Mengenal Bun sebagai alternatif runtime dan package manager JavaScript, menginstalnya, dan memahami padanan perintah npm.',
        en: 'Learn about Bun as an alternative JavaScript runtime and package manager, install it, and understand its npm command equivalents.',
      },
      minutes: 10,
      mascot: {
        id: 'Bonus level! Bun itu opsional, tapi asyik dicoba. 🥐',
        en: "Bonus level! Bun is optional, but fun to try. 🥐",
      },
      explanation: [
        {
          type: 'p',
          text: {
            id: '[Bun](https://bun.com/) adalah runtime JavaScript sekaligus package manager, test runner, dan bundler dalam satu program. Banyak developer memilihnya karena `bun install` biasanya jauh lebih cepat dan kompatibel dengan `package.json` milik npm.',
            en: '[Bun](https://bun.com/) is a JavaScript runtime that also acts as a package manager, test runner, and bundler in one program. Many developers prefer it because `bun install` is typically much faster and it works with npm\'s `package.json`.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { id: 'Bun itu opsional', en: 'Bun is optional' },
          text: {
            id: 'Node.js + npm sudah cukup untuk seluruh kursus ini. Gunakan package manager yang didukung oleh project yang di-generate: jika ada `package-lock.json`, pakai npm; jika ada `bun.lock`, pakai Bun. Jangan mencampur keduanya dalam satu project.',
            en: 'Node.js + npm is enough for this whole course. Use the package manager the generated project supports: if there is a `package-lock.json`, use npm; if there is a `bun.lock`, use Bun. Don\'t mix both in one project.',
          },
        },
        {
          type: 'table',
          head: ['npm', 'Bun'],
          rows: [
            ['npm install', 'bun install'],
            ['npm run dev', 'bun run dev'],
            ['npm run build', 'bun run build'],
            ['npm install package-name', 'bun add package-name'],
            ['npm uninstall package-name', 'bun remove package-name'],
          ],
        },
      ],
      instructions: [
        {
          type: 'os',
          tabs: [
            {
              os: 'windows',
              blocks: [
                { type: 'p', text: { id: 'Jalankan di PowerShell:', en: 'Run in PowerShell:' } },
                { type: 'code', lang: 'powershell', code: 'powershell -c "irm bun.sh/install.ps1 | iex"' },
                { type: 'p', text: { id: 'Tutup dan buka lagi terminal setelah instalasi selesai.', en: 'Close and reopen the terminal when installation finishes.' } },
              ],
            },
            {
              os: 'macos',
              blocks: [
                { type: 'code', lang: 'bash', code: 'curl -fsSL https://bun.com/install | bash' },
                { type: 'p', text: { id: 'Buka Terminal baru (atau ikuti instruksi `source` yang ditampilkan installer).', en: 'Open a new Terminal (or follow the `source` instruction the installer prints).' } },
              ],
            },
            {
              os: 'linux',
              blocks: [
                { type: 'p', text: { id: 'Installer membutuhkan `unzip`. Instal dulu jika belum ada (misalnya `sudo apt install unzip`), lalu:', en: 'The installer needs `unzip`. Install it first if missing (e.g. `sudo apt install unzip`), then:' } },
                { type: 'code', lang: 'bash', code: 'curl -fsSL https://bun.com/install | bash' },
                { type: 'p', text: { id: 'Buka terminal baru setelah selesai.', en: 'Open a new terminal when done.' } },
              ],
            },
          ],
        },
        { type: 'p', text: { id: 'Verifikasi:', en: 'Verify:' } },
        { type: 'code', lang: 'bash', code: 'bun --version', output: '1.x.x' },
        {
          type: 'callout',
          tone: 'tip',
          title: { id: 'Ringkasan Modul 02', en: 'Module 02 recap' },
          text: {
            id: 'Ini lesson terakhir modul ini. Checklist di bawah merangkum seluruh setup kamu — centang semuanya sebelum lanjut ke Modul 03!',
            en: 'This is the last lesson of the module. The checklist below sums up your whole setup — tick everything before moving on to Module 03!',
          },
        },
      ],
      result: {
        id: '`bun --version` menampilkan nomor versi (atau kamu memilih tetap memakai npm), dan seluruh environment kamu siap.',
        en: '`bun --version` prints a version number (or you chose to stick with npm), and your whole environment is ready.',
      },
      troubleshooting: [
        {
          problem: { id: 'bun tidak dikenali setelah instalasi', en: 'bun is not recognized after installing' },
          error: 'bun: command not found',
          solution: [{ type: 'p', text: { id: 'Buka terminal baru (dan restart VS Code). Di macOS/Linux, pastikan baris yang ditambahkan installer ke `~/.zshrc` atau `~/.bashrc` sudah terbaca, misalnya dengan `source ~/.zshrc`.', en: 'Open a new terminal (and restart VS Code). On macOS/Linux, make sure the lines the installer added to `~/.zshrc` or `~/.bashrc` are loaded, e.g. with `source ~/.zshrc`.' } }],
        },
        {
          problem: { id: 'Linux: unzip tidak ditemukan', en: 'Linux: unzip not found' },
          error: 'error: unzip is required to install bun',
          solution: [{ type: 'code', lang: 'bash', code: 'sudo apt install unzip' }],
        },
      ],
      checklist: [
        { id: 'Akun GitHub sudah dibuat', en: 'GitHub account created' },
        { id: 'Vercel terhubung ke GitHub', en: 'Vercel connected to GitHub' },
        { id: 'Git terinstal', en: 'Git installed' },
        { id: 'Username Git global sudah dikonfigurasi', en: 'Git global username configured' },
        { id: 'Email Git global sudah dikonfigurasi', en: 'Git global email configured' },
        { id: 'VS Code terinstal', en: 'VS Code installed' },
        { id: 'Node.js terinstal', en: 'Node.js installed' },
        { id: 'npm sudah diverifikasi', en: 'npm verified' },
        { id: 'Bun terinstal (opsional)', en: 'Bun installed (optional)' },
      ],
    },
  ],
  quiz: [
    {
      question: { id: 'Apa perbedaan Git dan GitHub?', en: 'What is the difference between Git and GitHub?' },
      options: [
        { id: 'Sama saja, hanya beda nama', en: "They're the same thing with different names" },
        { id: 'Git adalah program version control di komputer; GitHub adalah layanan online untuk menyimpan repository', en: 'Git is a version control program on your computer; GitHub is an online service that hosts repositories' },
        { id: 'GitHub adalah code editor, Git adalah browser', en: 'GitHub is a code editor, Git is a browser' },
        { id: 'Git hanya untuk Linux', en: 'Git only works on Linux' },
      ],
      answer: 1,
      explanation: { id: 'Git mencatat perubahan secara lokal; GitHub menyimpan repository Git secara online.', en: 'Git tracks changes locally; GitHub hosts Git repositories online.' },
    },
    {
      question: { id: 'Email di `git config --global user.email` sebaiknya...', en: 'The email in `git config --global user.email` should preferably...' },
      options: [
        { id: 'Email apa saja, asal valid', en: 'Be any valid email' },
        { id: 'Cocok dengan email yang terdaftar di akun GitHub', en: 'Match an email associated with your GitHub account' },
        { id: 'Email Vercel', en: 'Be your Vercel email' },
        { id: 'Dikosongkan', en: 'Be left empty' },
      ],
      answer: 1,
      explanation: { id: 'Dengan email yang cocok, commit kamu terhubung ke profile GitHub.', en: 'A matching email links your commits to your GitHub profile.' },
    },
    {
      question: { id: 'Bagaimana hubungan Node.js dan npm?', en: 'How are Node.js and npm related?' },
      options: [
        { id: 'npm ikut terinstal bersama Node.js dan dipakai untuk mengelola package', en: 'npm comes bundled with Node.js and manages packages' },
        { id: 'npm adalah browser untuk Node.js', en: 'npm is a browser for Node.js' },
        { id: 'Keduanya harus diinstal terpisah dari situs berbeda', en: 'Both must be installed separately from different sites' },
        { id: 'Node.js adalah ekstensi VS Code', en: 'Node.js is a VS Code extension' },
      ],
      answer: 0,
      explanation: { id: 'Node.js menjalankan JavaScript; npm (bawaan Node.js) mengunduh library dan menjalankan script.', en: 'Node.js runs JavaScript; npm (bundled with it) downloads libraries and runs scripts.' },
    },
    {
      question: { id: 'Muncul error `npm.ps1 cannot be loaded because running scripts is disabled on this system.` Langkah aman mana yang tepat?', en: 'You see `npm.ps1 cannot be loaded because running scripts is disabled on this system.` Which step is safe?' },
      options: [
        { id: 'Set execution policy ke `Unrestricted` untuk seluruh komputer', en: 'Set the execution policy to `Unrestricted` machine-wide' },
        { id: 'Pakai Command Prompt, atau set `RemoteSigned` hanya untuk `CurrentUser` jika sesuai kebijakan', en: 'Use Command Prompt, or set `RemoteSigned` for `CurrentUser` only if policy allows' },
        { id: 'Uninstall Windows Defender', en: 'Uninstall Windows Defender' },
        { id: 'Pakai `Bypass` di laptop kantor', en: 'Use `Bypass` on a work laptop' },
      ],
      answer: 1,
      explanation: { id: 'Opsi ini memperbaiki masalah tanpa mematikan perlindungan, dan tetap menghormati kebijakan IT.', en: 'These fix the issue without removing protection, while respecting IT policy.' },
    },
    {
      question: { id: 'Project yang di-generate punya file `package-lock.json`. Package manager mana yang sebaiknya dipakai?', en: 'A generated project contains `package-lock.json`. Which package manager should you use?' },
      options: [
        { id: 'Bun, karena lebih cepat', en: "Bun, because it's faster" },
        { id: 'npm, karena itu yang didukung project tersebut', en: "npm, because that's what the project uses" },
        { id: 'Dua-duanya bergantian', en: 'Alternate between both' },
        { id: 'Tidak perlu package manager', en: 'No package manager is needed' },
      ],
      answer: 1,
      explanation: { id: '`package-lock.json` menandakan npm. Ikuti package manager yang didukung project dan jangan dicampur.', en: '`package-lock.json` indicates npm. Use the project\'s package manager and don\'t mix them.' },
    },
  ],
}

export default m02

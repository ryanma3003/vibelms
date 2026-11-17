import type { Block, L, Module, Trouble } from '../../types/content'

const l = (id: string, en: string): L => ({ id, en })

const gitNotRecognized: Trouble = {
  problem: l(
    'Terminal bilang `git` tidak dikenali',
    'The terminal says `git` is not recognized',
  ),
  error: "'git' is not recognized as an internal or external command,\noperable program or batch file.",
  solution: [
    {
      type: 'list',
      items: [
        l(
          'Pastikan Git sudah terinstal (lihat Modul 02). Tutup **semua** jendela VS Code lalu buka lagi, supaya terminal membaca PATH yang baru.',
          'Make sure Git is installed (see Module 02). Close **all** VS Code windows and reopen it so the terminal picks up the updated PATH.',
        ),
        l(
          'Cek lagi dengan `git --version`. Kalau masih gagal di Windows, jalankan ulang installer Git for Windows dan pilih opsi default "Git from the command line and also from 3rd-party software".',
          'Check again with `git --version`. If it still fails on Windows, rerun the Git for Windows installer and keep the default option "Git from the command line and also from 3rd-party software".',
        ),
        l(
          'Di macOS, jalankan `xcode-select --install` atau `brew install git`. Di Linux, instal lewat package manager (`sudo apt install git` atau `sudo dnf install git`).',
          'On macOS, run `xcode-select --install` or `brew install git`. On Linux, install it with your package manager (`sudo apt install git` or `sudo dnf install git`).',
        ),
      ],
    },
    { type: 'code', lang: 'bash', code: 'git --version', output: 'git version 2.x.x' },
  ],
}

const authBlocks: Block[] = [
  {
    type: 'os',
    tabs: [
      {
        os: 'windows',
        blocks: [
          {
            type: 'p',
            text: l(
              'Git for Windows sudah membawa **Git Credential Manager**. Saat pertama kali `git push`, akan muncul jendela login GitHub. Pilih **Sign in with your browser**, login, lalu klik **Authorize**. Setelah itu kredensial disimpan dengan aman di Windows Credential Manager, jadi kamu tidak perlu login lagi tiap push.',
              'Git for Windows ships with **Git Credential Manager**. On your first `git push`, a GitHub sign-in window appears. Choose **Sign in with your browser**, log in, then click **Authorize**. The credential is then stored securely in Windows Credential Manager, so you won\'t need to sign in on every push.',
            ),
          },
        ],
      },
      {
        os: 'macos',
        blocks: [
          {
            type: 'p',
            text: l(
              'Kalau diminta **Username**, isi username GitHub kamu. Kalau diminta **Password**, tempel **personal access token** (bukan password akun). Kredensial biasanya disimpan otomatis di Keychain macOS. Alternatif yang lebih mudah: instal [GitHub CLI](https://cli.github.com/) (`brew install gh`), lalu jalankan `gh auth login` dan pilih login via browser.',
              'If asked for a **Username**, enter your GitHub username. If asked for a **Password**, paste a **personal access token** (not your account password). Credentials are usually saved automatically in the macOS Keychain. An easier alternative: install [GitHub CLI](https://cli.github.com/) (`brew install gh`), then run `gh auth login` and choose browser login.',
            ),
          },
        ],
      },
      {
        os: 'linux',
        blocks: [
          {
            type: 'p',
            text: l(
              'Cara paling mudah: instal [GitHub CLI](https://cli.github.com/), jalankan `gh auth login`, pilih **GitHub.com → HTTPS → Login with a web browser**. GitHub CLI akan mengatur Git supaya memakai login tersebut. Kalau tidak memakai `gh`, isi password dengan **personal access token**.',
              'The easiest way: install [GitHub CLI](https://cli.github.com/), run `gh auth login`, and choose **GitHub.com → HTTPS → Login with a web browser**. GitHub CLI configures Git to use that login. Without `gh`, use a **personal access token** as the password.',
            ),
          },
          { type: 'code', lang: 'bash', code: 'gh auth login' },
        ],
      },
    ],
  },
]

const m04: Module = {
  id: 'm04',
  number: '04',
  title: l('GitHub: Simpan dan Kelola Project Kamu', 'GitHub: Save and Manage Your Project'),
  objective: l(
    'Upload project kamu ke GitHub memakai Git. Git mencatat perubahan di komputer kamu (lokal), sedangkan GitHub menyimpan repository kamu secara online.',
    'Upload your project to GitHub using Git. Git tracks changes locally on your computer, while GitHub hosts your repositories online.',
  ),
  lessons: [
    // ───────────────────────────── L1
    {
      id: 'm04-create-repository',
      title: l('Buat Repository GitHub', 'Create a GitHub Repository'),
      objective: l(
        'Membuat repository kosong di GitHub sebagai "rumah online" untuk project kamu.',
        'Create an empty GitHub repository as the online home for your project.',
      ),
      minutes: 8,
      mascot: l(
        'Yuk, kita siapkan rumah baru untuk project kamu di GitHub! 🏠',
        "Let's build a new home for your project on GitHub!",
      ),
      explanation: [
        {
          type: 'p',
          text: l(
            '**Git** dan **GitHub** itu berbeda. Git adalah tool di komputer kamu yang mencatat setiap perubahan file. **GitHub** adalah website yang menyimpan salinan project (repository) secara online, supaya aman, bisa dibagikan, dan bisa di-deploy ke Vercel nanti.',
            '**Git** and **GitHub** are different things. Git is a tool on your computer that records every change to your files. **GitHub** is a website that hosts a copy of your project (a repository) online so it is safe, shareable, and deployable to Vercel later.',
          ),
        },
        {
          type: 'p',
          text: l(
            '**Repository** (sering disingkat *repo*) adalah folder project plus seluruh riwayat perubahannya.',
            'A **repository** (often shortened to *repo*) is a project folder plus its full history of changes.',
          ),
        },
        { type: 'illustration', name: 'git-areas', caption: l('Alur yang akan kamu pelajari di modul ini.', 'The flow you will learn in this module.') },
        {
          type: 'callout',
          tone: 'warning',
          title: l('Repository harus kosong', 'Keep the repository empty'),
          text: l(
            'Project kamu sudah punya file (termasuk `README.md` dan `.gitignore`). Jangan centang **Add a README file**, **.gitignore**, atau **license** saat membuat repo. Kalau dicentang, push pertama kamu bisa ditolak karena riwayat GitHub dan riwayat lokal berbeda.',
            'Your project already has files (including `README.md` and `.gitignore`). Do not tick **Add a README file**, **.gitignore**, or **license** when creating the repo. If you do, your first push may be rejected because the GitHub history and your local history differ.',
          ),
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            l('Buka [github.com](https://github.com/) dan login.', 'Open [github.com](https://github.com/) and sign in.'),
            l(
              'Klik tombol **+** di kanan atas, lalu pilih **New repository**.',
              'Click the **+** button in the top-right corner, then choose **New repository**.',
            ),
            l(
              'Isi **Repository name**, misalnya `my-first-vibecoding-project`. Pakai huruf kecil dan tanda hubung, tanpa spasi.',
              'Enter a **Repository name**, e.g. `my-first-vibecoding-project`. Use lowercase letters and hyphens, no spaces.',
            ),
            l('(Opsional) Tulis **Description** singkat tentang project kamu.', '(Optional) Add a short **Description** of your project.'),
            l('Pilih **Public**.', 'Choose **Public**.'),
            l(
              'Pastikan **Add a README file**, **Add .gitignore**, dan **Choose a license** dibiarkan kosong / **None**.',
              'Make sure **Add a README file**, **Add .gitignore**, and **Choose a license** stay unticked / **None**.',
            ),
            l('Klik **Create repository**.', 'Click **Create repository**.'),
            l(
              'Kamu akan melihat halaman "Quick setup". Salin URL **HTTPS** yang tampil, contohnya `https://github.com/USERNAME/my-first-vibecoding-project.git`. Kita pakai di pelajaran 6.',
              'You will see a "Quick setup" page. Copy the **HTTPS** URL shown, for example `https://github.com/USERNAME/my-first-vibecoding-project.git`. You will use it in lesson 6.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: l(
            'Repo **Public** bisa dilihat semua orang. Karena itu, jangan pernah menyimpan API key, password, atau token di dalam project.',
            'A **Public** repo is visible to everyone. That is why you must never store API keys, passwords, or tokens in your project.',
          ),
        },
      ],
      result: l(
        'Kamu punya repository kosong di GitHub dan sudah menyalin URL HTTPS-nya.',
        'You have an empty GitHub repository and have copied its HTTPS URL.',
      ),
      troubleshooting: [
        {
          problem: l('Nama repository sudah dipakai', 'The repository name is already taken'),
          error: 'The repository my-first-vibecoding-project already exists on this account.',
          solution: [
            {
              type: 'p',
              text: l(
                'Nama repo harus unik di akun kamu. Pakai nama lain, misalnya `coffee-shop-vibecoding`, atau hapus repo lama yang tidak dipakai lewat **Settings → Danger Zone**.',
                'Repo names must be unique within your account. Pick another name, e.g. `coffee-shop-vibecoding`, or delete an unused old repo via **Settings → Danger Zone**.',
              ),
            },
          ],
        },
        {
          problem: l('Terlanjur mencentang "Add a README file"', 'I already ticked "Add a README file"'),
          solution: [
            {
              type: 'p',
              text: l(
                'Cara paling sederhana untuk pemula: hapus repo itu (**Settings → Danger Zone → Delete this repository**) lalu buat ulang tanpa README. Alternatifnya ada di pelajaran 7 (`git pull --rebase origin main`).',
                'The simplest fix for beginners: delete that repo (**Settings → Danger Zone → Delete this repository**) and recreate it without a README. The alternative is covered in lesson 7 (`git pull --rebase origin main`).',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Login ke GitHub', 'Signed in to GitHub'),
        l('Repository baru dibuat dengan visibilitas Public', 'New repository created as Public'),
        l('README, .gitignore, dan license TIDAK ditambahkan', 'README, .gitignore, and license NOT added'),
        l('URL HTTPS repository sudah disalin', 'Repository HTTPS URL copied'),
      ],
    },

    // ───────────────────────────── L2
    {
      id: 'm04-git-init',
      title: l('Inisialisasi Git di Lokal', 'Initialize Git Locally'),
      objective: l(
        'Mengubah folder project kamu menjadi repository Git dengan `git init`.',
        'Turn your project folder into a Git repository with `git init`.',
      ),
      minutes: 6,
      mascot: l('Waktunya Git mulai mencatat jejak project kamu! 🐾', 'Time for Git to start tracking your project’s paw prints!'),
      explanation: [
        {
          type: 'p',
          text: l(
            '`git init` membuat folder tersembunyi bernama `.git` di dalam project. Di folder inilah Git menyimpan seluruh riwayat: setiap commit, branch, dan pengaturan remote. File project kamu sendiri tidak diubah sama sekali.',
            '`git init` creates a hidden folder named `.git` inside your project. That folder is where Git stores the entire history: every commit, branch, and remote setting. Your own project files are not changed at all.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          text: l(
            'Jalankan `git init` di folder **root** project (yang berisi `package.json`), bukan di folder induk seperti `Documents`. Kalau salah folder, Git akan melacak file yang tidak seharusnya.',
            'Run `git init` in the project **root** folder (the one containing `package.json`), not in a parent folder like `Documents`. In the wrong folder, Git would track files it should not.',
          ),
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            l('Buka folder project di VS Code (**File → Open Folder**).', 'Open the project folder in VS Code (**File → Open Folder**).'),
            l('Buka terminal terintegrasi: **Terminal → New Terminal**.', 'Open the integrated terminal: **Terminal → New Terminal**.'),
            l(
              'Pastikan kamu berada di folder yang benar. File `package.json` harus muncul di daftar.',
              'Make sure you are in the right folder. `package.json` should appear in the listing.',
            ),
          ],
        },
        {
          type: 'os',
          tabs: [
            { os: 'windows', blocks: [{ type: 'code', lang: 'powershell', code: 'pwd\ndir' }] },
            { os: 'macos', blocks: [{ type: 'code', lang: 'bash', code: 'pwd\nls -a' }] },
            { os: 'linux', blocks: [{ type: 'code', lang: 'bash', code: 'pwd\nls -a' }] },
          ],
        },
        { type: 'list', items: [l('Jalankan perintah berikut:', 'Run the following command:')] },
        {
          type: 'code',
          lang: 'bash',
          code: 'git init',
          output: 'Initialized empty Git repository in /Users/you/Documents/projects/my-first-vibecoding-project/.git/',
        },
        { type: 'list', items: [l('Cek statusnya:', 'Check the status:')] },
        {
          type: 'code',
          lang: 'bash',
          code: 'git status',
          output: 'On branch master\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\t.gitignore\n\tindex.html\n\tpackage.json\n\tsrc/',
          caption: l(
            'Nama branch bisa `master` atau `main`, tergantung pengaturan Git kamu. Kita rapikan di pelajaran 5.',
            'The branch may be called `master` or `main` depending on your Git settings. We tidy that up in lesson 5.',
          ),
        },
      ],
      result: l(
        'Folder project kamu sudah menjadi repository Git, dan `git status` menampilkan file-file sebagai "Untracked files".',
        'Your project folder is now a Git repository, and `git status` lists your files as "Untracked files".',
      ),
      troubleshooting: [
        gitNotRecognized,
        {
          problem: l('`git status` menampilkan ribuan file atau folder lain', '`git status` shows thousands of files or unrelated folders'),
          solution: [
            {
              type: 'p',
              text: l(
                'Kemungkinan kamu menjalankan `git init` di folder yang salah (misalnya folder home). Hapus folder `.git` yang salah itu dengan hati-hati, lalu `cd` ke folder project dan jalankan `git init` lagi. Kalau yang muncul adalah `node_modules/`, berarti `.gitignore` belum ada — buat dulu (Modul 03).',
                'You probably ran `git init` in the wrong folder (e.g. your home folder). Carefully delete that misplaced `.git` folder, `cd` into your project folder, and run `git init` again. If you see `node_modules/`, your `.gitignore` is missing — create it first (Module 03).',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Terminal VS Code terbuka di folder root project', 'VS Code terminal opened in the project root'),
        l('`git init` berhasil dijalankan', '`git init` ran successfully'),
        l('`git status` menampilkan file project', '`git status` lists the project files'),
        l('`node_modules/` tidak muncul di daftar', '`node_modules/` does not appear in the list'),
      ],
    },

    // ───────────────────────────── L3
    {
      id: 'm04-stage-files',
      title: l('Stage File Project', 'Stage Project Files'),
      objective: l(
        'Memahami staging area dan menyiapkan file untuk commit dengan `git add .`.',
        'Understand the staging area and prepare files for a commit with `git add .`.',
      ),
      minutes: 8,
      mascot: l('Kumpulkan dulu file-filenya di keranjang, baru kita simpan! 🧺', "Let's gather the files into the basket before we save them!"),
      explanation: [
        {
          type: 'p',
          text: l(
            'Git punya tiga "tempat": **working folder** (file yang kamu edit), **staging area** (file yang sudah dipilih untuk disimpan), dan **repository** (commit yang sudah tersimpan).',
            'Git has three "places": the **working folder** (files you edit), the **staging area** (files chosen to be saved), and the **repository** (saved commits).',
          ),
        },
        { type: 'illustration', name: 'git-areas' },
        {
          type: 'p',
          text: l(
            'Bayangkan staging seperti keranjang belanja: kamu memilih barang dulu, baru membayar (commit). `git add .` artinya "masukkan semua perubahan di folder ini ke keranjang". Tanda titik (`.`) berarti folder saat ini.',
            'Think of staging as a shopping basket: you pick items first, then pay (commit). `git add .` means "put every change in this folder into the basket". The dot (`.`) means the current folder.',
          ),
        },
        {
          type: 'callout',
          tone: 'danger',
          title: l('Cek dulu sebelum add', 'Check before adding'),
          text: l(
            'File yang tercantum di `.gitignore` tidak akan ikut di-stage. Pastikan `.env`, `node_modules/`, dan folder build sudah ada di `.gitignore` **sebelum** menjalankan `git add .`.',
            'Files listed in `.gitignore` are not staged. Make sure `.env`, `node_modules/`, and build folders are in `.gitignore` **before** running `git add .`.',
          ),
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            l('Pastikan file `.gitignore` ada di root project.', 'Make sure a `.gitignore` file exists in the project root.'),
            l('Stage semua file:', 'Stage all files:'),
          ],
        },
        { type: 'code', lang: 'bash', code: 'git add .' },
        {
          type: 'list',
          items: [l('Cek apa saja yang sudah di-stage:', 'Check what has been staged:')],
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'git status',
          output: 'On branch master\n\nNo commits yet\n\nChanges to be committed:\n  (use "git rm --cached <file>..." to unstage)\n\tnew file:   .gitignore\n\tnew file:   index.html\n\tnew file:   package.json\n\tnew file:   src/main.tsx',
        },
        {
          type: 'list',
          items: [
            l(
              'Baca daftar "Changes to be committed". Pastikan **tidak ada** `.env`, `node_modules/`, `dist/`, atau file berukuran besar.',
              'Read the "Changes to be committed" list. Make sure there is **no** `.env`, `node_modules/`, `dist/`, or very large file.',
            ),
            l(
              'Kalau ada file yang salah ikut, keluarkan dari staging (file tetap ada di komputer), lalu tambahkan ke `.gitignore`:',
              'If a wrong file got in, unstage it (the file stays on your computer), then add it to `.gitignore`:',
            ),
          ],
        },
        { type: 'code', lang: 'bash', code: 'git rm --cached .env' },
        {
          type: 'callout',
          tone: 'tip',
          text: l(
            'Di Windows, kamu mungkin melihat peringatan `LF will be replaced by CRLF`. Itu hanya info soal format akhir baris dan aman diabaikan.',
            'On Windows you may see a `LF will be replaced by CRLF` warning. It is just information about line endings and is safe to ignore.',
          ),
        },
      ],
      result: l(
        '`git status` menampilkan file project di bawah "Changes to be committed", tanpa `.env` dan `node_modules/`.',
        '`git status` shows your project files under "Changes to be committed", without `.env` or `node_modules/`.',
      ),
      troubleshooting: [
        {
          problem: l('File `.env` ikut di-stage', 'The `.env` file got staged'),
          solution: [
            { type: 'code', lang: 'bash', code: 'git rm --cached .env' },
            {
              type: 'p',
              text: l(
                'Lalu pastikan baris `.env` dan `.env.*` ada di `.gitignore`. Karena belum di-commit, rahasia kamu belum bocor.',
                'Then make sure `.env` and `.env.*` are listed in `.gitignore`. Since nothing was committed yet, your secret has not leaked.',
              ),
            },
          ],
        },
        {
          problem: l('`node_modules/` ikut di-stage (ribuan file)', '`node_modules/` got staged (thousands of files)'),
          solution: [
            { type: 'code', lang: 'bash', code: 'git rm -r --cached node_modules' },
            {
              type: 'p',
              text: l(
                'Tambahkan `node_modules/` ke `.gitignore`, lalu jalankan `git add .` lagi. Folder ini bisa dibuat ulang kapan saja dengan `bun install` atau `npm install`, jadi tidak perlu disimpan di GitHub.',
                'Add `node_modules/` to `.gitignore`, then run `git add .` again. This folder can be recreated anytime with `bun install` or `npm install`, so it never needs to be on GitHub.',
              ),
            },
          ],
        },
        {
          problem: l('Muncul error "not a git repository"', 'Error "not a git repository"'),
          error: 'fatal: not a git repository (or any of the parent directories): .git',
          solution: [
            {
              type: 'p',
              text: l(
                'Terminal kamu tidak berada di folder project, atau `git init` belum dijalankan. `cd` ke folder project lalu ulangi pelajaran 2.',
                'Your terminal is not inside the project folder, or `git init` has not been run. `cd` into the project folder and repeat lesson 2.',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Paham perbedaan working folder, staging, dan commit', 'Understand working folder vs staging vs commit'),
        l('`git add .` sudah dijalankan', '`git add .` has been run'),
        l('`git status` sudah dicek', '`git status` reviewed'),
        l('Tidak ada `.env` atau `node_modules/` yang di-stage', 'No `.env` or `node_modules/` staged'),
      ],
    },

    // ───────────────────────────── L4
    {
      id: 'm04-first-commit',
      title: l('Commit Pertama', 'Your First Commit'),
      objective: l(
        'Menyimpan checkpoint pertama project kamu dengan `git commit`.',
        'Save the first checkpoint of your project with `git commit`.',
      ),
      minutes: 6,
      mascot: l('Klik! Checkpoint pertama kamu tersimpan. Bangga deh! 😺', 'Click! Your first checkpoint is saved. So proud of you!'),
      explanation: [
        {
          type: 'p',
          text: l(
            'Commit adalah **checkpoint** yang tersimpan, seperti save point di game. Setiap commit berisi snapshot file yang di-stage, nama dan email kamu (dari `git config`), waktu, dan pesan yang menjelaskan perubahannya.',
            'A commit is a saved **checkpoint**, like a save point in a game. Each commit contains a snapshot of the staged files, your name and email (from `git config`), a timestamp, and a message describing the change.',
          ),
        },
        {
          type: 'p',
          text: l(
            'Kalau nanti AI merusak sesuatu, kamu bisa kembali ke commit sebelumnya. Karena itu, biasakan commit setiap kali ada perubahan yang berjalan dengan baik.',
            'If the AI breaks something later, you can go back to an earlier commit. So get into the habit of committing whenever a change works.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: l('Pesan commit yang baik', 'Good commit messages'),
          text: l(
            'Singkat dan jelas, menjelaskan *apa* yang berubah: `add product CRUD`, `fix mobile navbar`. Hindari pesan seperti `update` atau `asdf`.',
            'Short and clear, describing *what* changed: `add product CRUD`, `fix mobile navbar`. Avoid messages like `update` or `asdf`.',
          ),
        },
      ],
      instructions: [
        { type: 'list', items: [l('Buat commit pertama:', 'Create the first commit:')] },
        {
          type: 'code',
          lang: 'bash',
          code: 'git commit -m "first commit"',
          output: '[master (root-commit) 3f2a1c9] first commit\n 24 files changed, 1830 insertions(+)\n create mode 100644 .gitignore\n create mode 100644 index.html\n ...',
        },
        { type: 'list', items: [l('Lihat riwayat commit:', 'View the commit history:')] },
        { type: 'code', lang: 'bash', code: 'git log --oneline', output: '3f2a1c9 first commit' },
      ],
      result: l(
        '`git log --oneline` menampilkan satu commit bernama "first commit".',
        '`git log --oneline` shows one commit named "first commit".',
      ),
      troubleshooting: [
        {
          problem: l('Git tidak tahu siapa kamu', 'Git does not know who you are'),
          error: 'Author identity unknown\n\n*** Please tell me who you are.',
          solution: [
            {
              type: 'p',
              text: l(
                'Nama dan email Git belum diatur. Jalankan perintah ini (ganti dengan data kamu, idealnya email yang sama dengan akun GitHub), lalu ulangi commit:',
                'Your Git name and email are not set. Run these (with your own details, ideally the email on your GitHub account), then commit again:',
              ),
            },
            {
              type: 'code',
              lang: 'bash',
              code: 'git config --global user.name "Your Name"\ngit config --global user.email "your-email@example.com"',
            },
          ],
        },
        {
          problem: l('"nothing to commit"', '"nothing to commit"'),
          error: 'nothing added to commit but untracked files present (use "git add" to track)',
          solution: [
            {
              type: 'p',
              text: l('Kamu belum menjalankan `git add .`. Stage dulu, lalu commit.', 'You have not run `git add .` yet. Stage first, then commit.'),
            },
          ],
        },
        {
          problem: l('Terminal masuk ke editor aneh (Vim) dan tidak bisa keluar', 'The terminal opened a strange editor (Vim) and I cannot exit'),
          solution: [
            {
              type: 'p',
              text: l(
                'Ini terjadi kalau kamu lupa `-m "pesan"`. Tekan `Esc`, ketik `:q!`, lalu Enter untuk membatalkan. Ulangi dengan `git commit -m "first commit"`.',
                'This happens when you forget `-m "message"`. Press `Esc`, type `:q!`, then Enter to cancel. Retry with `git commit -m "first commit"`.',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Paham bahwa commit = checkpoint tersimpan', 'Understand that a commit = a saved checkpoint'),
        l('`git commit -m "first commit"` berhasil', '`git commit -m "first commit"` succeeded'),
        l('Commit terlihat di `git log --oneline`', 'Commit visible in `git log --oneline`'),
      ],
    },

    // ───────────────────────────── L5
    {
      id: 'm04-main-branch',
      title: l('Atur Branch Utama', 'Set the Main Branch'),
      objective: l(
        'Menamai branch utama menjadi `main` supaya sama dengan default GitHub.',
        'Rename the primary branch to `main` to match GitHub’s default.',
      ),
      minutes: 4,
      mascot: l('Satu perintah kecil biar semuanya rapi. Gampang! ✨', 'One tiny command to keep things tidy. Easy!'),
      explanation: [
        {
          type: 'p',
          text: l(
            '**Branch** adalah jalur riwayat commit. Project kamu sekarang punya satu branch. Versi Git lama menamainya `master`, sedangkan GitHub memakai `main` sebagai default untuk repository baru.',
            'A **branch** is a line of commit history. Your project currently has one branch. Older Git versions name it `master`, while GitHub uses `main` as the default for new repositories.',
          ),
        },
        {
          type: 'p',
          text: l(
            '`git branch -M main` mengganti nama branch saat ini menjadi `main` (huruf `-M` berarti rename paksa, aman walaupun namanya sudah `main`).',
            '`git branch -M main` renames the current branch to `main` (`-M` forces the rename, and it is harmless if the name is already `main`).',
          ),
        },
      ],
      instructions: [
        { type: 'list', items: [l('Jalankan:', 'Run:')] },
        { type: 'code', lang: 'bash', code: 'git branch -M main' },
        { type: 'list', items: [l('Cek nama branch:', 'Check the branch name:')] },
        { type: 'code', lang: 'bash', code: 'git branch', output: '* main' },
      ],
      result: l('`git branch` menampilkan `* main`.', '`git branch` shows `* main`.'),
      troubleshooting: [
        {
          problem: l('Error saat rename branch sebelum ada commit', 'Error renaming the branch before any commit'),
          error: "error: refname refs/heads/master not found",
          solution: [
            {
              type: 'p',
              text: l(
                'Branch baru benar-benar ada setelah commit pertama. Selesaikan pelajaran 4 (`git add .` lalu `git commit -m "first commit"`), lalu jalankan `git branch -M main` lagi.',
                'A branch only really exists after the first commit. Finish lesson 4 (`git add .` then `git commit -m "first commit"`), then run `git branch -M main` again.',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Paham apa itu branch', 'Understand what a branch is'),
        l('`git branch -M main` sudah dijalankan', '`git branch -M main` has been run'),
        l('`git branch` menampilkan `* main`', '`git branch` shows `* main`'),
      ],
    },

    // ───────────────────────────── L6
    {
      id: 'm04-connect-remote',
      title: l('Hubungkan Repository GitHub', 'Connect the GitHub Repository'),
      objective: l(
        'Menghubungkan repository lokal ke repository GitHub dengan `git remote add origin`.',
        'Link your local repository to the GitHub repository with `git remote add origin`.',
      ),
      minutes: 6,
      mascot: l('Kita sambungkan komputer kamu ke GitHub, seperti memasang tali benang! 🧶', "Let's connect your computer to GitHub, like tying a ball of yarn!"),
      explanation: [
        {
          type: 'p',
          text: l(
            '**Remote** adalah alamat repository online. `origin` adalah nama panggilan standar untuk remote utama, jadi kamu tidak perlu mengetik URL panjang setiap kali push.',
            'A **remote** is the address of an online repository. `origin` is the standard nickname for the main remote, so you don’t have to type the long URL every time you push.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          text: l(
            'Ganti `USERNAME` dan `YOUR-REPOSITORY` dengan URL asli dari repo kamu (yang kamu salin di pelajaran 1). Huruf besar-kecil dan tanda hubung harus sama persis.',
            'Replace `USERNAME` and `YOUR-REPOSITORY` with your real repo URL (the one you copied in lesson 1). Capitalization and hyphens must match exactly.',
          ),
        },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            l('Tambahkan remote (ganti URL-nya!):', 'Add the remote (replace the URL!):'),
          ],
        },
        { type: 'code', lang: 'bash', code: 'git remote add origin https://github.com/USERNAME/YOUR-REPOSITORY.git' },
        { type: 'list', items: [l('Cek hasilnya:', 'Verify it:')] },
        {
          type: 'code',
          lang: 'bash',
          code: 'git remote -v',
          output: 'origin  https://github.com/USERNAME/YOUR-REPOSITORY.git (fetch)\norigin  https://github.com/USERNAME/YOUR-REPOSITORY.git (push)',
        },
      ],
      result: l(
        '`git remote -v` menampilkan `origin` dengan URL repository GitHub kamu.',
        '`git remote -v` shows `origin` with your GitHub repository URL.',
      ),
      troubleshooting: [
        {
          problem: l('Remote origin sudah ada', 'Remote origin already exists'),
          error: 'error: remote origin already exists.',
          solution: [
            {
              type: 'p',
              text: l(
                'Kamu sudah pernah menambahkan `origin` (mungkin dengan URL yang salah). Jangan tambah lagi; perbarui URL-nya:',
                'You already added `origin` (maybe with a wrong URL). Don’t add it again; update the URL instead:',
              ),
            },
            { type: 'code', lang: 'bash', code: 'git remote set-url origin https://github.com/USERNAME/YOUR-REPOSITORY.git' },
            { type: 'p', text: l('Lalu cek lagi dengan `git remote -v`.', 'Then check again with `git remote -v`.') },
          ],
        },
        {
          problem: l('URL masih berisi USERNAME/YOUR-REPOSITORY', 'The URL still contains USERNAME/YOUR-REPOSITORY'),
          solution: [
            {
              type: 'p',
              text: l(
                'Kamu menyalin contoh tanpa menggantinya. Ambil URL asli dari tombol **Code** di halaman repo kamu, lalu pakai `git remote set-url origin <URL-asli>`.',
                'You copied the example without replacing it. Get the real URL from the **Code** button on your repo page, then run `git remote set-url origin <real-URL>`.',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Paham apa itu remote dan origin', 'Understand what a remote and origin are'),
        l('Remote ditambahkan dengan URL asli', 'Remote added with the real URL'),
        l('`git remote -v` menampilkan URL yang benar', '`git remote -v` shows the correct URL'),
      ],
    },

    // ───────────────────────────── L7
    {
      id: 'm04-push',
      title: l('Push ke GitHub', 'Push to GitHub'),
      objective: l(
        'Mengirim commit ke GitHub dengan `git push -u origin main` dan login dengan aman.',
        'Send your commits to GitHub with `git push -u origin main` and authenticate securely.',
      ),
      minutes: 15,
      mascot: l('Ini dia momen besarnya! Kirim project kamu ke dunia! 🚀', "This is the big moment! Send your project out into the world!"),
      explanation: [
        {
          type: 'p',
          text: l(
            '`git push` mengirim commit dari komputer ke GitHub. `-u origin main` artinya "kirim branch `main` ke `origin`, dan ingat pasangan ini". Setelah itu, cukup ketik `git push` untuk push berikutnya.',
            '`git push` sends commits from your computer to GitHub. `-u origin main` means "send branch `main` to `origin` and remember this pairing". After that, a plain `git push` is enough.',
          ),
        },
        {
          type: 'heading',
          text: l('Bagaimana GitHub memastikan ini benar kamu?', 'How does GitHub know it’s really you?'),
        },
        {
          type: 'p',
          text: l(
            'GitHub **tidak lagi menerima password akun** untuk operasi Git lewat HTTPS. Kamu harus login lewat browser (Git Credential Manager atau GitHub CLI) atau memakai **personal access token** (PAT) sebagai pengganti password.',
            'GitHub **no longer accepts your account password** for Git operations over HTTPS. You must sign in through the browser (Git Credential Manager or GitHub CLI) or use a **personal access token** (PAT) in place of the password.',
          ),
        },
        ...authBlocks,
        {
          type: 'callout',
          tone: 'danger',
          title: l('Jaga token kamu', 'Protect your token'),
          text: l(
            'Personal access token sama berharganya dengan password. Jangan pernah menempelnya ke chat AI, file project, atau screenshot.',
            'A personal access token is as valuable as a password. Never paste it into an AI chat, a project file, or a screenshot.',
          ),
        },
      ],
      instructions: [
        { type: 'list', items: [l('Jalankan push pertama:', 'Run your first push:')] },
        {
          type: 'code',
          lang: 'bash',
          code: 'git push -u origin main',
          output: "Enumerating objects: 30, done.\nWriting objects: 100% (30/30), 45.10 KiB | 4.51 MiB/s, done.\nTo https://github.com/USERNAME/YOUR-REPOSITORY.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'.",
        },
        {
          type: 'list',
          items: [
            l('Kalau muncul jendela login, pilih login lewat browser dan klik **Authorize**.', 'If a sign-in window appears, choose browser sign-in and click **Authorize**.'),
            l(
              'Kalau diminta password di terminal dan kamu tidak memakai login browser, buat token: GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**. Batasi akses hanya ke repo ini, beri izin **Contents: Read and write**, dan atur masa berlaku.',
              'If the terminal asks for a password and you aren’t using browser sign-in, create a token: GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**. Limit it to this repo, grant **Contents: Read and write**, and set an expiration.',
            ),
            l(
              'Tempel token sebagai password. Karakternya memang tidak terlihat saat diketik/ditempel — itu normal.',
              'Paste the token as the password. Characters are not shown while typing/pasting — that is normal.',
            ),
          ],
        },
      ],
      result: l(
        'Terminal menampilkan `* [new branch] main -> main` dan file kamu sudah ada di GitHub.',
        'The terminal shows `* [new branch] main -> main` and your files are on GitHub.',
      ),
      troubleshooting: [
        {
          problem: l('Autentikasi gagal', 'Authentication failed'),
          error: "remote: Support for password authentication was removed on August 13, 2021.\nfatal: Authentication failed for 'https://github.com/USERNAME/YOUR-REPOSITORY.git/'",
          solution: [
            {
              type: 'p',
              text: l(
                'Kamu memasukkan password akun GitHub. Pakai login browser (Git Credential Manager / `gh auth login`) atau personal access token. Kalau sebelumnya tersimpan kredensial yang salah, hapus dulu: di Windows buka **Credential Manager → Windows Credentials** dan hapus entri `git:https://github.com`; di macOS buka **Keychain Access** dan hapus entri `github.com`. Lalu push lagi.',
                'You entered your GitHub account password. Use browser sign-in (Git Credential Manager / `gh auth login`) or a personal access token. If a wrong credential was saved earlier, remove it: on Windows open **Credential Manager → Windows Credentials** and delete the `git:https://github.com` entry; on macOS open **Keychain Access** and delete the `github.com` entry. Then push again.',
              ),
            },
          ],
        },
        {
          problem: l('Repository tidak ditemukan', 'Repository not found'),
          error: "remote: Repository not found.\nfatal: repository 'https://github.com/USERNAME/YOUR-REPOSITORY.git/' not found",
          solution: [
            {
              type: 'list',
              ordered: false,
              items: [
                l('Cek URL dengan `git remote -v`: ada typo, atau masih `USERNAME`?', 'Check the URL with `git remote -v`: a typo, or still `USERNAME`?'),
                l('Pastikan repo benar-benar sudah dibuat di GitHub.', 'Make sure the repo actually exists on GitHub.'),
                l(
                  'Untuk repo private, pesan ini juga muncul kalau kamu login dengan akun yang tidak punya akses, atau token tidak mencakup repo ini.',
                  'For private repos, this also appears if you are signed in with an account that has no access, or your token does not cover this repo.',
                ),
                l('Perbaiki dengan `git remote set-url origin <URL-benar>`.', 'Fix it with `git remote set-url origin <correct-URL>`.'),
              ],
            },
          ],
        },
        {
          problem: l('Izin ditolak (permission denied / 403)', 'Permission denied (403)'),
          error: "remote: Permission to USERNAME/YOUR-REPOSITORY.git denied to OTHER-ACCOUNT.\nfatal: unable to access 'https://github.com/USERNAME/YOUR-REPOSITORY.git/': The requested URL returned error: 403",
          solution: [
            {
              type: 'p',
              text: l(
                'Komputer kamu login dengan akun GitHub lain (misalnya akun kantor/teman), atau token tidak punya izin tulis. Hapus kredensial lama (lihat "Autentikasi gagal"), lalu login dengan akun pemilik repo. Kalau memakai fine-grained token, pastikan repo ini dipilih dan izin **Contents** adalah **Read and write**.',
                'Your computer is signed in with a different GitHub account (e.g. a work or friend’s account), or the token lacks write permission. Remove the old credential (see "Authentication failed"), then sign in as the repo owner. With a fine-grained token, make sure this repo is selected and **Contents** is **Read and write**.',
              ),
            },
          ],
        },
        {
          problem: l('Push ditolak karena GitHub sudah punya commit lain', 'Push rejected because GitHub already has other commits'),
          error: " ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'https://github.com/USERNAME/YOUR-REPOSITORY.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally.",
          solution: [
            {
              type: 'p',
              text: l(
                'Biasanya karena repo dibuat dengan README/.gitignore/license. Pilihan 1: ambil commit dari GitHub dan letakkan commit kamu di atasnya:',
                'Usually because the repo was created with a README/.gitignore/license. Option 1: fetch GitHub’s commit and place yours on top of it:',
              ),
            },
            { type: 'code', lang: 'bash', code: 'git pull --rebase origin main\ngit push -u origin main' },
            {
              type: 'p',
              text: l(
                'Kalau muncul konflik (misalnya di `README.md` atau `.gitignore`), buka file tersebut di VS Code, pilih isi yang benar, lalu `git add .` dan `git rebase --continue`. Pilihan 2 (lebih mudah untuk pemula): hapus repo di GitHub, buat ulang **tanpa** README/.gitignore/license, lalu push lagi.',
                'If conflicts appear (e.g. in `README.md` or `.gitignore`), open the file in VS Code, keep the correct content, then `git add .` and `git rebase --continue`. Option 2 (easier for beginners): delete the repo on GitHub, recreate it **without** README/.gitignore/license, and push again.',
              ),
            },
          ],
        },
        {
          problem: l('Branch main tidak ditemukan', 'Branch main not found'),
          error: "error: src refspec main does not match any\nerror: failed to push some refs to 'https://github.com/USERNAME/YOUR-REPOSITORY.git'",
          solution: [
            {
              type: 'p',
              text: l(
                'Belum ada commit, atau branch belum bernama `main`. Cek `git log --oneline` dan `git branch`, lalu ulangi pelajaran 4 dan 5.',
                'There is no commit yet, or the branch isn’t named `main`. Check `git log --oneline` and `git branch`, then repeat lessons 4 and 5.',
              ),
            },
          ],
        },
        {
          problem: l('File terlalu besar', 'File too large'),
          error: "remote: error: File assets/video.mp4 is 120.00 MB; this exceeds GitHub's file size limit of 100.00 MB\nremote: error: GH001: Large files detected.",
          solution: [
            {
              type: 'p',
              text: l(
                'GitHub menolak file di atas **100 MB**. Penyebab umum: `node_modules/` ikut ter-commit, atau video/gambar mentah berukuran besar. Pastikan `node_modules/` ada di `.gitignore`, kompres atau pindahkan file besar keluar project, lalu keluarkan dari Git:',
                'GitHub rejects files over **100 MB**. Common causes: `node_modules/` got committed, or a large raw video/image. Make sure `node_modules/` is in `.gitignore`, compress or move the big file out of the project, then remove it from Git:',
              ),
            },
            { type: 'code', lang: 'bash', code: 'git rm -r --cached node_modules\ngit commit --amend -m "first commit"\ngit push -u origin main' },
            {
              type: 'p',
              text: l(
                '`--amend` mengganti commit terakhir. Ini cukup kalau file besar hanya ada di commit terakhir. Kalau sudah tersebar di beberapa commit, cara termudah untuk pemula: hapus folder `.git`, perbaiki `.gitignore`, lalu ulangi dari pelajaran 2.',
                '`--amend` replaces the last commit. That works if the big file is only in the latest commit. If it spans several commits, the easiest beginner path: delete the `.git` folder, fix `.gitignore`, and restart from lesson 2.',
              ),
            },
          ],
        },
        {
          problem: l('GitHub menolak push karena mendeteksi secret', 'GitHub rejects the push because it detected a secret'),
          error: "remote: error: GH013: Repository rule violations found for refs/heads/main.\nremote: - GITHUB PUSH PROTECTION\nremote:   Push cannot contain secrets",
          solution: [
            {
              type: 'p',
              text: l(
                '**Push protection** GitHub menemukan sesuatu yang mirip API key atau token di commit kamu. Ini fitur keamanan — jangan memilih untuk mengizinkan secret tersebut. Keluarkan secret dari commit:',
                'GitHub **push protection** found something that looks like an API key or token in your commit. This is a safety feature — do not choose to allow the secret. Remove it from the commit:',
              ),
            },
            {
              type: 'list',
              items: [
                l('Pindahkan secret ke file `.env` dan pastikan `.env` ada di `.gitignore`.', 'Move the secret into a `.env` file and make sure `.env` is in `.gitignore`.'),
                l('Hapus secret dari kode (atau keluarkan file `.env` dari Git dengan `git rm --cached .env`).', 'Remove the secret from your code (or untrack `.env` with `git rm --cached .env`).'),
                l('Perbarui commit terakhir dengan `git add .` lalu `git commit --amend -m "first commit"`, kemudian push lagi.', 'Update the last commit with `git add .` then `git commit --amend -m "first commit"`, and push again.'),
                l(
                  'Karena secret sempat tersimpan di commit lokal, pertimbangkan untuk **mengganti (rotate)** secret itu di layanan asalnya.',
                  'Since the secret was stored in a local commit, consider **rotating** it at the service that issued it.',
                ),
              ],
            },
          ],
        },
      ],
      checklist: [
        l('Paham kenapa password akun tidak bisa dipakai', 'Understand why the account password doesn’t work'),
        l('Berhasil login ke GitHub (browser atau token)', 'Signed in to GitHub (browser or token)'),
        l('`git push -u origin main` berhasil', '`git push -u origin main` succeeded'),
        l('Token tidak dibagikan ke mana pun', 'Token not shared anywhere'),
      ],
    },

    // ───────────────────────────── L8
    {
      id: 'm04-verify-repository',
      title: l('Verifikasi Repository Kamu', 'Verify Your Repository'),
      objective: l(
        'Memastikan project sudah lengkap dan aman di GitHub, serta tahu cara push perubahan berikutnya.',
        'Confirm your project is complete and safe on GitHub, and know how to push future changes.',
      ),
      minutes: 8,
      mascot: l('Coba lihat! Project kamu sudah online. Kerja bagus! 🎉', 'Look! Your project is online now. Great job!'),
      explanation: [
        {
          type: 'p',
          text: l(
            'Setelah push, cek langsung di browser. Kamu ingin memastikan semua file penting ada dan **tidak ada** file sensitif yang ikut terunggah.',
            'After pushing, check in the browser. You want to make sure every important file is there and that **no** sensitive file was uploaded.',
          ),
        },
        {
          type: 'p',
          text: l(
            'Mulai sekarang, setiap kali kamu mengubah project, alurnya selalu sama:',
            'From now on, whenever you change the project, the flow is always the same:',
          ),
        },
        { type: 'flow', steps: ['git add .', 'git commit -m "..."', 'git push'] },
      ],
      instructions: [
        {
          type: 'list',
          items: [
            l('Buka `https://github.com/USERNAME/YOUR-REPOSITORY` di browser (atau refresh halamannya).', 'Open `https://github.com/USERNAME/YOUR-REPOSITORY` in your browser (or refresh the page).'),
            l('Pastikan ada `package.json`, `src/`, `index.html` (atau `app/` untuk Next.js), `.gitignore`, dan `README.md`.', 'Check that `package.json`, `src/`, `index.html` (or `app/` for Next.js), `.gitignore`, and `README.md` are present.'),
            l('Pastikan **tidak ada** `node_modules/`, `.env`, atau `dist/`.', 'Make sure there is **no** `node_modules/`, `.env`, or `dist/`.'),
            l('Klik jumlah **commits** untuk melihat commit "first commit" beserta nama kamu.', 'Click the **commits** count to see "first commit" with your name.'),
            l('Coba alur perubahan: edit `README.md` (misalnya tambahkan deskripsi project), lalu jalankan:', 'Try the change flow: edit `README.md` (e.g. add a project description), then run:'),
          ],
        },
        { type: 'code', lang: 'bash', code: 'git add .\ngit commit -m "update README"\ngit push' },
        { type: 'list', items: [l('Refresh halaman GitHub dan lihat perubahannya.', 'Refresh the GitHub page and see the change.')] },
        {
          type: 'prompt',
          id: 'm04-verify-repository-readme',
          title: l('Minta AI menulis README', 'Ask AI to write a README'),
          description: l(
            'README yang bagus membuat repo kamu terlihat profesional.',
            'A good README makes your repo look professional.',
          ),
          prompt:
            'Act as a technical writer.\n\nWrite a clear README.md for my project [PROJECT NAME], a [SHORT DESCRIPTION] built with [React/Vite or Next.js] and [Bun / npm].\n\nInclude:\n- Project title and one-paragraph description.\n- Main features.\n- How to install dependencies and run it locally.\n- How to build for production.\n- A note that the admin login is for demonstration only.\n\nDo not include any API keys, passwords, or tokens.',
        },
      ],
      result: l(
        'Repository GitHub kamu menampilkan seluruh file project, tanpa `node_modules/` atau `.env`, dengan riwayat commit yang terlihat.',
        'Your GitHub repository shows all project files, without `node_modules/` or `.env`, and a visible commit history.',
      ),
      troubleshooting: [
        {
          problem: l('File `.env` ternyata ikut ter-push', 'The `.env` file was pushed'),
          solution: [
            {
              type: 'callout',
              tone: 'danger',
              text: l(
                'Menghapus file dari commit terbaru **tidak** mencabut secret-nya. File itu masih ada di riwayat Git dan mungkin sudah dilihat orang. Anggap secret tersebut bocor.',
                'Removing the file from the latest commit does **not** revoke the secret. It still exists in Git history and may already have been seen. Treat the secret as leaked.',
              ),
            },
            {
              type: 'list',
              items: [
                l('**Segera rotate/revoke** setiap key, token, atau password di `.env` lewat dashboard layanan asalnya, lalu buat yang baru.', '**Immediately rotate/revoke** every key, token, or password in `.env` from the issuing service’s dashboard, and create new ones.'),
                l('Keluarkan `.env` dari Git (file lokal tetap ada):', 'Untrack `.env` from Git (the local file stays):'),
              ],
            },
            { type: 'code', lang: 'bash', code: 'git rm --cached .env' },
            { type: 'list', items: [l('Pastikan `.env` ada di `.gitignore`, lalu commit dan push:', 'Make sure `.env` is in `.gitignore`, then commit and push:')] },
            { type: 'code', lang: 'bash', code: 'git add .gitignore\ngit commit -m "remove .env from repository"\ngit push' },
          ],
        },
        {
          problem: l('`node_modules/` terlihat di GitHub', '`node_modules/` is visible on GitHub'),
          solution: [
            { type: 'code', lang: 'bash', code: 'git rm -r --cached node_modules\ngit commit -m "stop tracking node_modules"\ngit push' },
            { type: 'p', text: l('Lalu pastikan `node_modules/` ada di `.gitignore`.', 'Then make sure `node_modules/` is in `.gitignore`.') },
          ],
        },
        {
          problem: l('Perubahan tidak muncul di GitHub', 'Changes don’t show up on GitHub'),
          solution: [
            {
              type: 'p',
              text: l(
                'Cek `git status`. Kalau masih ada perubahan, kamu lupa `git add`/`git commit`. Kalau tertulis "Your branch is ahead of \'origin/main\'", kamu lupa `git push`. Lalu refresh halaman browser.',
                'Run `git status`. If changes remain, you forgot `git add`/`git commit`. If it says "Your branch is ahead of \'origin/main\'", you forgot `git push`. Then refresh the browser page.',
              ),
            },
          ],
        },
      ],
      checklist: [
        l('Semua file project terlihat di GitHub', 'All project files visible on GitHub'),
        l('Tidak ada `.env` atau `node_modules/` di repo', 'No `.env` or `node_modules/` in the repo'),
        l('Riwayat commit terlihat', 'Commit history visible'),
        l('Berhasil push perubahan kedua', 'Successfully pushed a second change'),
      ],
    },
  ],
  quiz: [
    {
      question: l('Apa perbedaan Git dan GitHub?', 'What is the difference between Git and GitHub?'),
      options: [
        l('Keduanya sama saja', 'They are the same thing'),
        l('Git mencatat perubahan di komputer; GitHub menyimpan repository online', 'Git tracks changes locally; GitHub hosts repositories online'),
        l('GitHub adalah editor kode', 'GitHub is a code editor'),
        l('Git hanya berjalan di browser', 'Git only runs in the browser'),
      ],
      answer: 1,
      explanation: l(
        'Git adalah tool version control di komputer kamu, GitHub adalah layanan online untuk menyimpan dan membagikan repository.',
        'Git is a version control tool on your computer; GitHub is an online service to host and share repositories.',
      ),
    },
    {
      question: l('Apa fungsi `git add .`?', 'What does `git add .` do?'),
      options: [
        l('Mengirim file ke GitHub', 'Sends files to GitHub'),
        l('Membuat repository baru', 'Creates a new repository'),
        l('Memasukkan semua perubahan ke staging area', 'Puts all changes into the staging area'),
        l('Menghapus file yang tidak dipakai', 'Deletes unused files'),
      ],
      answer: 2,
      explanation: l(
        '`git add .` menyiapkan perubahan untuk commit berikutnya. Mengirim ke GitHub dilakukan oleh `git push`.',
        '`git add .` prepares changes for the next commit. Sending to GitHub is done by `git push`.',
      ),
    },
    {
      question: l('Muncul `error: remote origin already exists.` Apa yang sebaiknya dilakukan?', 'You see `error: remote origin already exists.` What should you do?'),
      options: [
        l('Hapus seluruh project', 'Delete the whole project'),
        l('Jalankan `git remote set-url origin <URL-benar>`', 'Run `git remote set-url origin <correct-URL>`'),
        l('Jalankan `git init` lagi', 'Run `git init` again'),
        l('Buat akun GitHub baru', 'Create a new GitHub account'),
      ],
      answer: 1,
      explanation: l(
        '`set-url` memperbarui alamat remote yang sudah ada tanpa perlu menambahkannya lagi.',
        '`set-url` updates the existing remote’s address instead of adding it again.',
      ),
    },
    {
      question: l('Saat `git push` meminta password, apa yang harus dipakai?', 'When `git push` asks for a password, what should you use?'),
      options: [
        l('Password akun GitHub', 'Your GitHub account password'),
        l('Password laptop', 'Your laptop password'),
        l('Login browser lewat Git Credential Manager/GitHub CLI, atau personal access token', 'Browser sign-in via Git Credential Manager/GitHub CLI, or a personal access token'),
        l('Tidak perlu apa-apa, tekan Enter saja', 'Nothing, just press Enter'),
      ],
      answer: 2,
      explanation: l(
        'GitHub tidak menerima password akun untuk Git lewat HTTPS. Pakai login browser atau personal access token.',
        'GitHub does not accept account passwords for Git over HTTPS. Use browser sign-in or a personal access token.',
      ),
    },
    {
      question: l('Kamu tidak sengaja push file `.env` berisi API key. Langkah terpenting?', 'You accidentally pushed a `.env` file with an API key. The most important step?'),
      options: [
        l('Rename file menjadi `env.txt`', 'Rename the file to `env.txt`'),
        l('Cukup hapus file dari commit terbaru', 'Just remove the file from the latest commit'),
        l('Rotate/revoke API key tersebut, lalu keluarkan `.env` dari Git dan tambahkan ke `.gitignore`', 'Rotate/revoke the API key, then untrack `.env` and add it to `.gitignore`'),
        l('Ubah repo menjadi Public', 'Make the repo Public'),
      ],
      answer: 2,
      explanation: l(
        'Secret yang pernah di-push harus dianggap bocor karena masih ada di riwayat Git. Menghapus file saja tidak mencabutnya.',
        'A pushed secret must be treated as leaked because it remains in Git history. Removing the file alone does not revoke it.',
      ),
    },
  ],
}

export default m04

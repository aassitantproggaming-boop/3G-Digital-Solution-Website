## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ (Download dari [nodejs.org](https://nodejs.org))
- Git
- GitHub Account (sudah punya ✓)
- Vercel Account (free, daftar di [vercel.com](https://vercel.com))

### Langkah 1: Clone Repository
```bash
git clone https://github.com/aassitantproggaming-boop/3G-Digital-Solution-Website.git
cd 3G-Digital-Solution-Website
```

### Langkah 2: Install Dependencies
```bash
npm install
```

### Langkah 3: Setup Environment
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL=your_database_url_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Langkah 4: Run Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📱 Features

✅ **Responsive Design** - Mobile-first, bekerja sempurna di semua device
✅ **Multi-Language** - Support 6 bahasa (ID, EN, ZH, DE, ES, FR)
✅ **Dynamic Services** - Admin panel untuk manage services
✅ **Team Cards** - Bayern Munich style dengan hover effects
✅ **Portfolio Showcase** - Gallery dengan filtering
✅ **Admin Dashboard** - CRUD operations
✅ **SEO Optimized** - Meta tags & structured data
✅ **Production Ready** - TypeScript, linting, best practices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **Next.js 14** | React framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **next-intl** | Internationalization |
| **Vercel** | Hosting |

---

## 📦 Build & Production

### Build untuk Production
```bash
npm run build
npm start
```

### Generate Static Export (untuk CDN)
```bash
npm run build
# Output akan ada di folder 'out'
```

---

## 🌐 Deploy ke Vercel (GRATIS)

### Opsi 1: Via GitHub (Recommended)

1. **Push ke GitHub** ✓ (sudah done)

2. **Buka [vercel.com](https://vercel.com)**

3. **Sign up dengan GitHub**

4. **Import Project**
   - Click "New Project"
   - Select repository "3G-Digital-Solution-Website"
   - Framework: Next.js ✓ (auto-detected)

5. **Environment Variables**
   - Click "Environment Variables"
   - Add:
     - `DATABASE_URL` = your_database_url
     - `NEXT_PUBLIC_API_URL` = https://your-domain.com/api

6. **Deploy!**
   - Click "Deploy"
   - Wait untuk build selesai (~2-3 menit)

### Opsi 2: Dari Command Line

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 🗄️ Database Setup (Neon - FREE PostgreSQL)

### Langkah 1: Buat Neon Account
1. Buka [neon.tech](https://neon.tech)
2. Sign up dengan GitHub
3. Create project

### Langkah 2: Get Connection String
1. Copy DATABASE_URL dari Neon
2. Add ke `.env.local` dan `.env.production` di Vercel

---

## 🎨 Customization

### Warna Brand
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#ef4444',  // Ubah ke warna favorit
    600: '#dc2626',
  }
}
```

### Teks & Bahasa
Edit file di `/messages/`:
- `messages/id.json` - Indonesian
- `messages/en.json` - English
- `messages/zh.json` - Chinese
- Dst...

### Tambah Member Tim
Di `src/components/TeamSection.tsx`, edit array `teamMembers`

### Tambah Portfolio
Di `src/components/PortfolioSection.tsx`, edit array `portfolios`

---

## 📊 Admin Dashboard

**URL:** `http://localhost:3000/admin` atau `https://your-domain.com/admin`

Features:
- ✏️ Tambah/Edit/Hapus Services
- 👥 Manage Team Members
- 🖼️ Upload Portfolio
- 📊 View Analytics (coming soon)

---

## 🔐 Security Tips

1. **Jangan share .env.local**
2. **Use strong passwords**
3. **Enable 2FA di GitHub & Vercel**
4. **Regular backups**
5. **Monitor dependencies:** `npm audit`

---

## 🆘 Troubleshooting

### Error: "Cannot find module next-intl"
```bash
npm install
npm run dev
```

### Error: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Vercel Deploy Error
- Check `.env` variables
- Run `npm run build` locally first
- Check GitHub Actions logs

---

## 📝 Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Performance Optimization
```bash
npm run build
# Check build size
```

---

## 🎯 Next Steps

1. ✅ Setup lokal development
2. ✅ Test semua bahasa
3. ✅ Customize dengan data perusahaan Anda
4. ✅ Setup database (Neon)
5. ✅ Deploy ke Vercel
6. ✅ Setup domain (optional)
7. ✅ Enable HTTPS (auto di Vercel)

---

## 📞 Support

- **GitHub Issues:** [3G-Digital-Solution-Website/issues](https://github.com/aassitantproggaming-boop/3G-Digital-Solution-Website/issues)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## 📄 License

© 2026 3G Digital Solution. All rights reserved.

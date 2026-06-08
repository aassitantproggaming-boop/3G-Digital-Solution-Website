#!/bin/bash

# 3G Digital Solution Website - Setup Script
# Jalankan: bash setup.sh

echo "🚀 Starting 3G Digital Solution Website Setup..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js tidak terinstall!"
    echo "📥 Download dari: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed!"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Setup environment file
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local..."
    cp .env.local.example .env.local
    echo "✅ .env.local created"
    echo "⚠️  Please edit .env.local with your settings"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎉 Next steps:"
echo "   1. Edit .env.local with your settings"
echo "   2. Run: npm run dev"
echo "   3. Open: http://localhost:3000"
echo ""

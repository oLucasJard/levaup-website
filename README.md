# 🚗 LevaUp - A Nova Era da Mobilidade Urbana

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://levaup-website.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/oLucasJard/levaup-website)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Plataforma de mobilidade urbana com apenas 10% de comissão para motoristas, geolocalização precisa e segurança total. Em breve em Paraíso do Tocantins.**

## 🌟 Sobre o Projeto

O **LevaUp** é uma plataforma inovadora de mobilidade urbana que revoluciona o mercado com uma proposta única: **apenas 10% de comissão** para motoristas, oferecendo a melhor remuneração do setor.

### ✨ Características Principais

- 🚗 **Comissão Justa**: Apenas 10% de comissão para motoristas
- 📍 **Geolocalização Preciso**: Sistema de localização em tempo real
- 🔒 **Segurança Total**: Proteção completa para motoristas e passageiros
- 🎯 **Foco Regional**: Lançamento em Paraíso do Tocantins
- 💰 **Melhor Remuneração**: Maior lucro para motoristas parceiros

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos e acessíveis

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📁 Estrutura do Projeto

```
levaup-website/
├── public/                 # Arquivos estáticos
│   ├── favicon.png        # Favicon principal
│   ├── favicon-16x16.png  # Favicon 16x16
│   ├── favicon-32x32.png  # Favicon 32x32
│   ├── apple-touch-icon.png # Ícone para iOS
│   └── manifest.json      # Manifest PWA
├── src/                   # Código fonte
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI (shadcn)
│   │   ├── Navbar.tsx    # Barra de navegação
│   │   └── Footer.tsx    # Rodapé
│   ├── pages/            # Páginas da aplicação
│   │   ├── index.tsx     # Página inicial
│   │   ├── Motorista.tsx # Página do motorista
│   │   ├── Passageiro.tsx # Página do passageiro
│   │   ├── Sobre.tsx     # Página sobre
│   │   ├── contato.tsx   # Página de contato
│   │   └── FAQ.tsx       # Perguntas frequentes
│   ├── hooks/            # Hooks customizados
│   ├── lib/              # Utilitários e configurações
│   └── main.tsx          # Ponto de entrada da aplicação
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── tailwind.config.ts     # Configuração do Tailwind
├── vite.config.ts         # Configuração do Vite
└── vercel.json            # Configuração de deploy
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** 18+ 
- **npm** ou **yarn**

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/oLucasJard/levaup-website.git
cd levaup-website
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:8080
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 🌐 Deploy

O projeto está configurado para deploy automático na **Vercel**:

- **URL de Produção**: [levaup-website.vercel.app](https://levaup-website.vercel.app)
- **Deploy Automático**: Ativado via GitHub
- **Framework**: Vite (detectado automaticamente)

## 🎨 Design System

### Cores Principais
- **Primária**: Vermelho/terracota (#B91C1C)
- **Secundária**: Branco (#FFFFFF)
- **Acentos**: Tons de cinza para texto

### Componentes
- **shadcn/ui**: Biblioteca de componentes modernos
- **Tailwind CSS**: Classes utilitárias para estilização
- **Responsivo**: Design mobile-first

## 📱 PWA (Progressive Web App)

O projeto inclui funcionalidades PWA:
- **Manifest.json** para instalação
- **Ícones em múltiplos tamanhos**
- **Meta tags para tema**
- **Apple Touch Icon** para iOS

## 🔧 Configurações

### Vite
- **Porta**: 8080
- **Host**: :: (IPv6)
- **Alias**: @ → src/

### Tailwind CSS
- **Configuração customizada**
- **Animações incluídas**
- **Tipografia otimizada**

## 📊 Status do Projeto

- ✅ **Frontend**: Implementado
- ✅ **Design System**: Configurado
- ✅ **PWA**: Configurado
- ✅ **Deploy**: Configurado
- 🔄 **Backend**: Em desenvolvimento
- 🔄 **API**: Em desenvolvimento

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Desenvolvido por**: [BrandUp Hub](https://branduphub.com)
- **GitHub**: [@oLucasJard](https://github.com/oLucasJard)
- **Website**: [levaup-website.vercel.app](https://levaup-website.vercel.app)

## 🙏 Agradecimentos

- **shadcn/ui** pela biblioteca de componentes
- **Vercel** pela plataforma de deploy
- **Tailwind CSS** pelo framework de estilização
- **Vite** pela ferramenta de build

---

<div align="center">

**LevaUp** - Transformando a mobilidade urbana, uma viagem de cada vez! 🚗✨

[![LevaUp Logo](https://img.shields.io/badge/LevaUp-Website-FF6B6B?style=for-the-badge&logo=car&logoColor=white)](https://levaup-website.vercel.app)

</div>

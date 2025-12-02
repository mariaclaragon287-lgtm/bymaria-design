import React, { useState, useEffect } from "react";

// ⭐ IMPORTAÇÕES JÁ EXISTENTES (logo, mockups)
import logoImage from "../assets/logo.png";
import mockupImage from "../assets/logo-meio.png";
import mockupCamisa from "../assets/mockup-camisa.png";

// ======================================================================
// ===== IMPORTAÇÃO DOS PORTFÓLIOS: Adicionando seus 8 arquivos .png =====
// Você precisa importar cada imagem para que o React/Vite saiba onde encontrá-la.
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";
import portfolio7 from "../assets/portfolio-7.png";
import portfolio8 from "../assets/portfolio-8.png";
// ======================================================================

// BymariaDesign - Portfolio Single File React Component (FINAL E CORRIGIDO)

export default function BymariaDesignPortfolio() {
  
  // SOLUÇÃO PARA AS IMAGENS: Use as variáveis importadas
  const logoSrc = logoImage;
  const imageMockupSrc = mockupImage;
  const MockuoSrc = mockupCamisa;


  // ESTADO DO MENU MOBILE
  const [menuOpen, setMenuOpen] = useState(false);

  // WHATSAPP MESSAGE AUTO
  const waNumber = "5561998577526";
  const waMessage = encodeURIComponent(
    "Olá! Quero solicitar um orçamento — BymariaDesign 🙋🏻‍♀️✨"
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bymaria_theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("bymaria_theme", dark ? "dark" : "light");
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  // FUNÇÃO PARA FECHAR O MENU MOBILE AO CLICAR NO LINK
  const handleNavLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const heroBg = dark
    ? "bg-gradient-to-tr from-[#071126] via-[#0b1b33] to-[#1a0f25]"
    : "bg-gradient-to-tr from-white via-[#F8F6FF] to-[#F6F3FF]";

  // ===== SERVICES =====
  const services = [
    {
      title: "Identidade Visual",
      desc: "Logo, paleta, tipografia e manual de aplicação.",
      price: "Identity Basic R$150 / Identity Premium R$320",
    },
    {
      title: "Social Media",
      desc: "Posts, reels e stories com estética profissional.",
      price: "Essential R$180 / Growth R$290 / Elite R$520",
    },
    {
      title: "Design Esportivo",
      desc: "Escudos, uniformes e mockups para times.",
      price: "Starter R$150 / Pro Team R$320",
    },
    {
      title: "Artes Avulsas",
      desc: "Artes rápidas e entregas individuais.",
      price: "Single Art R$25 / Unlimited R$190/mês",
    },
  ];

// ======================================================================
// ===== PORTFÓLIO CORRIGIDO: Usando as variáveis de importação .png e títulos descritivos =====
  const portfolioItems = [
    { id: 1, title: "Marketing Salão", category: "Social Media", image: portfolio1 },
    { id: 2, title: "Marketing Gastrobar", category: "Social Media", image: portfolio2 },
    { id: 3, title: "Marketing Torneios", category: "Social Media Esportivo", image: portfolio3 },
    { id: 4, title: "Marketing Barbearia", category: "Social Media", image: portfolio4 },
    { id: 5, title: "Restaurante", category: "Identidade", image: portfolio5 },
    { id: 6, title: "Extensão de Cílios", category: "Identidade", image: portfolio6 },
    { id: 7, title: "Manicure - Nails Designer", category: "Identidade", image: portfolio7 },
    { id: 8, title: "Designer de Sobrancelhas", category: "Identidade", image: portfolio8 },
];
// ======================================================================

  // ===== PACKAGES =====
  const packages = [
    { name: "Essential", price: "R$180/mês", bullets: ["8 posts", "2 reels", "1 revisão"] },
    { name: "Growth", price: "R$290/mês", bullets: ["12 posts", "4 reels", "4 stories"] },
    { name: "Elite", price: "R$520/mês", bullets: ["20 posts", "8 reels", "10 stories"] },
  ];

  return (
    <div
      className={`min-h-screen font-sans ${
        dark ? "text-gray-200 bg-[#041022]" : "text-gray-800 bg-white"
      }`}
    >
      {/* NAV */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* LOGO CORRIGIDA */}
          <img
            src={logoSrc} 
            alt="BymariaDesign"
            className={`h-20 w-20 object-contain rounded-md shadow-md p-0 ${dark ? "bg-white/20 border border-white/10" : "bg-gray-100 border border-gray-200"}`}
          />

          <div>
            <h1 className="text-lg font-bold tracking-tight">BymariaDesign</h1>
            <p className="text-xs text-pink-600/90">
              Design Único — Identidade & Social Media
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:underline" onClick={handleNavLinkClick}>
            Serviços
          </a>
          <a href="#portfolio" className="hover:underline" onClick={handleNavLinkClick}>
            Portfólio
          </a>
          <a href="#packages" className="hover:underline" onClick={handleNavLinkClick}>
            Pacotes
          </a>
          <a href="#contact" className="hover:underline" onClick={handleNavLinkClick}>
            Contato
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md"
          >
            Solicitar orçamento
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="toggle theme"
            className="p-2 rounded-md border hover:shadow-sm transition bg-white/10"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* BOTÃO DO MENU MOBILE */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="abrir menu" 
              aria-expanded={menuOpen}
              aria-controls="nav-mobile"
              className={`p-2 rounded-md transition ${dark ? "bg-white/10" : "bg-gray-100"}`}
            >
              {menuOpen ? "✕" : "☰"} 
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE SUSPENSO */}
      {menuOpen && (
        <nav 
          id="nav-mobile" 
          className={`md:hidden p-4 mx-6 rounded-lg shadow-xl mb-4 transition-all duration-300 ${dark ? "bg-[#071124] border border-white/10" : "bg-white border border-gray-100"}`}
        >
          <div className="flex flex-col gap-3 text-sm">
            <a href="#services" className="py-2 hover:bg-pink-500/10 rounded-md px-2" onClick={handleNavLinkClick}>Serviços</a>
            <a href="#portfolio" className="py-2 hover:bg-pink-500/10 rounded-md px-2" onClick={handleNavLinkClick}>Portfólio</a>
            <a href="#packages" className="py-2 hover:bg-pink-500/10 rounded-md px-2" onClick={handleNavLinkClick}>Pacotes</a>
            <a href="#contact" className="py-2 hover:bg-pink-500/10 rounded-md px-2" onClick={handleNavLinkClick}>Contato</a>
            <a href={waLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-3 rounded-md font-semibold" onClick={handleNavLinkClick}>Solicitar orçamento</a>
          </div>
        </nav>
      )}

      {/* HERO */}
      <section className={`${heroBg} py-20`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              BymariaDesign
            </h2>

            <p
              className={`mt-4 text-lg ${
                dark ? "text-gray-300" : "text-gray-600"
              } max-w-xl`}
            >
              Design estratégico para marcas e times. Identidade visual, social media e design esportivo com performance e estética moderna.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#packages"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transform transition hover:-translate-y-1"
              >
                Ver pacotes
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-[#0B2545] px-5 py-3 rounded-lg font-semibold shadow"
              >
                Solicitar orçamento
              </a>
            </div> 
             <p
              className={`mt-4 text-lg ${
                dark ? "text-gray-300" : "text-gray-600"
              } max-w-xl`}
            >
              <strong>Especialidade:</strong> <span className="text-pink-500">Design esportivo</span> • Identidade Visual • Social Media
            </p>

          </div>

          <div className="md:w-1/2 flex justify-center">
            {/* Mockup do HERO (Agora com a imagem) */}
            <div
              className={`w-full max-w-lg h-auto rounded-2xl ${
                dark
                  ? "bg-gradient-to-tr from-[#071124] to-[#0b1530]"
                  : "bg-white/80"
              } border ${
                dark ? "border-white/10" : "border-gray-100"
              } flex items-center justify-center shadow-2xl overflow-hidden`}
            >
                {/* Imagem do Mockup (Usando a variável importada) */}
                <img
                    src={imageMockupSrc}
                    alt="Mockup da camisa ou Identidade Visual"
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]"
                />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Serviços</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`p-6 rounded-xl border shadow-sm hover:shadow-lg transition ${
                dark ? "bg-[#071124]/40 border-white/10" : "bg-white"
              }`}
            >
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className={`${dark ? "text-gray-300" : "text-gray-600"} mb-4`}>
                {s.desc}
              </p>
              <div className="text-sm text-pink-600 font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className={`${dark ? "bg-[#021022]" : "bg-gray-50"} py-16`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Portfólio</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioItems.map((p) => (
              <div
                key={p.id}
                className={`rounded-lg overflow-hidden shadow-sm ${
                  dark ? "bg-[#061126]" : "bg-white"
                }`}
              >
                <img
                  src={p.image} // Usando a variável importada que aponta para o .png
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-3">
                  <div className="text-sm text-pink-600 font-semibold">
                    {p.category}
                  </div>
                  <div className="mt-1 font-medium">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Pacotes</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-6 border rounded-xl shadow-sm hover:shadow-lg transition ${
                dark ? "bg-[#041126]/40 border-white/10" : "bg-white"
              }`}
            >
              <div className="text-sm text-pink-500">{pkg.name}</div>
              <div className="text-xl font-semibold mt-2 mb-3">
                {pkg.price}
              </div>

              <ul className="text-gray-600 list-disc pl-5">
                {pkg.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-pink-600 text-white rounded-md"
                >
                  Contratar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ UPDATED PRODUCT CTA WITH THEME SUPPORT + MOCKUP REAL + WHATSAPP MESSAGE */}
      <section className="py-16">
        <div
          className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center ${
            dark ? "bg-[#041022]" : "bg-white"
          }`}
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold">
              Produto: Design de Camisa para Time
            </h3>

            <p className={`mt-4 ${dark ? "text-gray-300" : "text-gray-600"}`}>
              Criação de uniformes completos: mockups profissionais, goleiro,
              variações e arquivos prontos para produção.
            </p>

            <ul className="mt-4 list-disc pl-5">
              <li>Escudo + camisa frente e costas</li>
              <li>Goleiro + alternativa</li>
              <li>Mockups profissionais</li>
              <li>Entrega em PNG, PDF e vetorial</li>
            </ul>

            <div className="mt-6">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-pink-600 text-white rounded-md"
              >
                Quero meu design
              </a>
            </div>
          </div>

          {/* Mockup atualizado com suporte ao tema e imagem CORRIGIDA */}
          <div className="md:w-1/2">
            <div
              className={`rounded-2xl p-6 shadow-md border transition ${
                dark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                src={MockuoSrc}
                alt="Mockup da camisa"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className={`${
          dark ? "bg-[#031423]" : "bg-[#0B2545]"
        } text-white py-16`}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src={logoSrc} // LOGO CORRIGIDA
              alt="BymariaDesign"
              className="h-12 w-12 object-contain mb-4"
            />
            <p className="text-gray-200">
              BymariaDesign — Transformando ideias em marcas reais.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <p className="text-sm text-gray-300">
              WhatsApp: <a href={waLink} className="underline">5561998577526</a>
            </p>
            <p className="text-sm text-gray-300">Instagram: @bymariadesign</p>
            <p className="text-sm text-gray-300">
              Email:{" "}
              <a href="mailto:bymariadesign00@gmail.com" className="underline">
                bymariadesign00@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Documentos</h4>
            <a
              href="/downloads/Contrato_Empresarial.pdf"
              className="text-sm text-gray-200 block mb-2"
            >
              Contrato Empresarial (3 meses)
            </a>
            <a
              href="/downloads/Contrato_Avulso.pdf"
              className="text-sm text-gray-200 block"
            >
              Contrato Avulso
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BymariaDesign. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
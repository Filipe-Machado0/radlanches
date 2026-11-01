/* ============================================================
   RAD LANCHES — SCRIPT.JS  (v4 — SVG Icons, Promoções & Orderbump)
   ============================================================ */

// ============================================================
// ⚙️ CONFIGURAÇÕES DA LANCHONETE
// ============================================================
const CONFIG = {
  /** WhatsApp oficial da Rad Lanches */
  whatsappNumber: '5515992784772',

  /** Taxa de entrega fixa (R$) */
  taxaEntrega: 5.00,

  /** Nome oficial */
  nomeEstabelecimento: 'Rad Lanches',

  /** Slogan oficial */
  slogan: 'O sabor que assombra sua fome! 🏍️',

  /** Orderbump de Refrigerante no Checkout */
  orderbump: {
    id: 999,
    name: 'Refrigerante Lata 350ml (Oferta Checkout)',
    shortName: 'Refri Lata 350ml (Oferta)',
    price: 5.90,
  },
};

// ============================================================
// 🎨 CATÁLOGO DE ÍCONES SVG (Substituindo Emojis)
// ============================================================
const SVGS = {
  flame: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 23c-4.97 0-9-4.03-9-9 0-3.9 2.5-7.75 6-11 .8 1.5 2.1 2.8 3.5 3.5-1 2.5.5 4.5 2 5.5 1.5-2 1.5-4 1-6 2.5 2 5.5 5.5 5.5 8 0 4.97-4.03 9-9 9z"/></svg>`,
  
  burger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a8 8 0 0 1 16 0H4z" fill="rgba(245,166,35,0.2)"/>
    <path d="M4 11h16"/>
    <path d="M5 14h14" stroke="#CC2200" stroke-width="2.2"/>
    <path d="M4 17h16" stroke="#F5A623" stroke-width="2.5"/>
    <path d="M5 20h14a2 2 0 0 0 2-2H3a2 2 0 0 0 2 2z" fill="rgba(245,166,35,0.2)"/>
    <circle cx="8" cy="7" r="0.8" fill="#F5F0DC"/>
    <circle cx="12" cy="6" r="0.8" fill="#F5F0DC"/>
    <circle cx="16" cy="7" r="0.8" fill="#F5F0DC"/>
  </svg>`,

  hotdog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="10" width="20" height="4" rx="2" fill="rgba(204,34,0,0.3)" stroke="#CC2200"/>
    <path d="M3 13c1-4 6-6 9-6s8 2 9 6" stroke="#F5A623"/>
    <path d="M3 13c1 4 6 6 9 6s8-2 9-6" stroke="#F5A623"/>
    <path d="M6 12c1.5-1.5 3 1.5 4.5 0s3 1.5 4.5 0 3 1.5 4.5 0" stroke="#F5F0DC" stroke-width="1.5"/>
  </svg>`,

  combo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 13a5 5 0 0 1 10 0H3z" fill="rgba(245,166,35,0.2)"/>
    <path d="M3 17h10"/>
    <path d="M4 19h8a1.5 1.5 0 0 0 1.5-1.5H2.5A1.5 1.5 0 0 0 4 19z"/>
    <path d="M16 6h5l-1 13a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 15 19L16 6z" fill="rgba(204,34,0,0.15)"/>
    <path d="M15 9h6"/>
    <path d="M18 6l1-3h2"/>
  </svg>`,

  drink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 4h10l-1.2 16a2 2 0 0 1-2 1.8h-3.6a2 2 0 0 1-2-1.8L7 4z" fill="rgba(245,166,35,0.15)"/>
    <path d="M6 8h12"/>
    <path d="M10 4l2-2.5h3"/>
    <path d="M10 13h4" stroke="#F5A623"/>
    <path d="M9 16h6" stroke="#F5A623"/>
  </svg>`,

  fries: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 11l2 10h10l2-10H5z" fill="rgba(204,34,0,0.2)"/>
    <path d="M8 11V5" stroke="#F5A623" stroke-width="2"/>
    <path d="M11 11V3" stroke="#F5A623" stroke-width="2"/>
    <path d="M14 11V4" stroke="#F5A623" stroke-width="2"/>
    <path d="M17 11V6" stroke="#F5A623" stroke-width="2"/>
  </svg>`,

  cheetos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a8 8 0 0 1 16 0H4z" fill="rgba(245,166,35,0.3)"/>
    <path d="M3 14c2-1 4 1 6 0s4 1 6 0 4 1 6 0" stroke="#F5A623" stroke-width="2.5"/>
    <path d="M4 17h16" stroke="#CC2200" stroke-width="2"/>
    <path d="M5 20h14a2 2 0 0 0 2-2H3a2 2 0 0 0 2 2z"/>
    <circle cx="8" cy="8" r="1.5" fill="#F5A623"/>
    <circle cx="16" cy="8" r="1.5" fill="#F5A623"/>
  </svg>`,
};

// ============================================================
// 🍔 CARDÁPIO OFICIAL COM PROMOÇÕES
// ============================================================
const MENU = [
  {
    id: 'promocoes',
    label: 'Promoções Rad',
    icon: 'flame',
    isPromo: true,
    items: [
      {
        id: 101,
        name: 'Rad Burguer (Oferta Fecha Mês)',
        desc: 'Hambúrguer artesanal no ponto, queijo derretido e molho especial Rad.',
        price: 13.99,
        oldPrice: 20.00,
        icon: 'burger',
        promoBadge: 'R$ 13,99 HOJE',
      },
      {
        id: 102,
        name: 'Rad Dog Bacon Especial',
        desc: 'Hot dog artesanal com muito bacon crocante, cheddar e molhos da casa.',
        price: 14.99,
        oldPrice: 23.00,
        icon: 'hotdog',
        promoBadge: 'OFERTA LIMITADA',
      },
      {
        id: 103,
        name: 'Combo Rad Casal (2 Burgers + Fritas)',
        desc: '2x Rad Burguers artesanais + Batata frita crocante para compartilhar.',
        price: 38.90,
        oldPrice: 48.00,
        icon: 'combo',
        promoBadge: 'ECONOMIZE R$ 9',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: 'burger',
    items: [
      {
        id: 1,
        name: 'Rad Burguer',
        desc: 'Hambúrguer artesanal bovino com ingredientes selecionados. Sabor garantido!',
        price: 20.00,
        icon: 'burger',
      },
      {
        id: 2,
        name: 'Explosão Cheetos',
        desc: 'O burger que explode em cada mordida! Muito Cheetos crocante e cheddar cremoso.',
        price: 28.90,
        icon: 'cheetos',
        promoBadge: 'MAIS PEDIDO',
      },
      {
        id: 3,
        name: 'Rad Double Bacon',
        desc: '2x blend artesanal, bacon duplo crocante, queijo derretido e barbecue especial.',
        price: 34.90,
        icon: 'burger',
      },
      {
        id: 4,
        name: 'Rad Cheddar Cremoso',
        desc: 'Blend 160g, piscina de cheddar legítimo e cebola caramelizada artesanal.',
        price: 26.90,
        icon: 'burger',
      },
    ],
  },
  {
    id: 'hotdogs',
    label: 'Hot Dogs',
    icon: 'hotdog',
    items: [
      {
        id: 10,
        name: 'Rad Dog Bacon',
        desc: 'Hot dog artesanal com farta cobertura de bacon crocante e cheddar cremoso.',
        price: 23.00,
        icon: 'hotdog',
      },
      {
        id: 11,
        name: 'Rad Dog Tradicional',
        desc: 'Pão macio, salsicha especial, vinagrete caseiro, milho, batata palha e molhos.',
        price: 18.00,
        icon: 'hotdog',
      },
      {
        id: 12,
        name: 'Rad Dog Duplo',
        desc: '2 salsichas, muito queijo derretido, purê de batata artesanal e batata palha.',
        price: 21.00,
        icon: 'hotdog',
      },
    ],
  },
  {
    id: 'combos',
    label: 'Combos',
    icon: 'combo',
    items: [
      {
        id: 20,
        name: 'Combo Rad Individual',
        desc: 'Rad Burguer + Batata Frita Individual + Refrigerante Lata 350ml geladinho.',
        price: 34.90,
        icon: 'combo',
      },
      {
        id: 21,
        name: 'Combo Dog Bacon',
        desc: 'Rad Dog Bacon + Batata Frita Crocante + Refrigerante Lata 350ml.',
        price: 36.90,
        icon: 'combo',
      },
      {
        id: 22,
        name: 'Combo Explosão',
        desc: 'Explosão Cheetos + Batata com Cheddar & Bacon + Refri Lata.',
        price: 44.90,
        icon: 'combo',
      },
    ],
  },
  {
    id: 'porcoes',
    label: 'Porções',
    icon: 'fries',
    items: [
      {
        id: 25,
        name: 'Batata Frita Tradicional',
        desc: 'Batatas palito sequinhas e crocantes. Acompanha maionese temperada.',
        price: 16.90,
        icon: 'fries',
      },
      {
        id: 26,
        name: 'Batata com Cheddar e Bacon',
        desc: 'Batata frita coberta com piscina de cheddar derretido e cubos de bacon.',
        price: 22.90,
        icon: 'fries',
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    icon: 'drink',
    items: [
      {
        id: 30,
        name: 'Refrigerante Lata 350ml',
        desc: 'Coca-Cola, Guaraná Antarctica, Sprite ou Fanta. Geladinho!',
        price: 7.00,
        icon: 'drink',
      },
      {
        id: 31,
        name: 'Refrigerante 2 Litros',
        desc: 'Coca-Cola ou Guaraná Antarctica 2L gelado para toda a família.',
        price: 14.00,
        icon: 'drink',
      },
      {
        id: 32,
        name: 'Suco Natural 500ml',
        desc: 'Laranja, Limão ou Maracujá natural feito na hora.',
        price: 9.90,
        icon: 'drink',
      },
      {
        id: 33,
        name: 'Água Mineral 500ml',
        desc: 'Com ou sem gás.',
        price: 4.00,
        icon: 'drink',
      },
    ],
  },
];

// ============================================================
// 🛒 ESTADO DO CARRINHO & ORDERBUMP
// ============================================================
let cart = [];
let orderbumpActive = false; // Estado do checkbox de refrigerante no checkout

// ============================================================
// 🛠️ UTILITÁRIOS
// ============================================================
function fmtBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function generateOrderId() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ============================================================
// 🍔 RENDERIZAR CARDÁPIO COM GLASS CARDS E ÍCONES SVG
// ============================================================
function renderMenu() {
  const main = document.getElementById('menuMain');
  const tabs = document.getElementById('catTabs');
  main.innerHTML = '';
  tabs.innerHTML = '';

  MENU.forEach((section, idx) => {
    // 1. Tab de categoria com SVG
    const tab = document.createElement('button');
    tab.className = 'cat-tab' + (idx === 0 ? ' active' : '');
    tab.dataset.category = section.id;
    tab.innerHTML = `
      ${SVGS[section.icon] || SVGS.burger}
      <span>${section.label}</span>
    `;
    tab.addEventListener('click', () => scrollToSection(section.id));
    tabs.appendChild(tab);

    // 2. Seção do menu
    const sec = document.createElement('section');
    sec.className = 'menu-section';
    sec.id = 'sec-' + section.id;

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.innerHTML = `
      ${SVGS[section.icon] || SVGS.burger}
      <span>${section.label}</span>
    `;
    sec.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    section.items.forEach(item => {
      grid.appendChild(createProductCard(item, section.isPromo));
    });

    sec.appendChild(grid);
    main.appendChild(sec);
  });

  setupScrollSpy();
}

function createProductCard(item, isPromoSection) {
  const card = document.createElement('div');
  card.className = 'product-card' + (isPromoSection || item.oldPrice ? ' promo-card' : '');

  const svgIcon = SVGS[item.icon] || SVGS.burger;
  const promoBadgeHtml = item.promoBadge ? `<span class="promo-badge">${item.promoBadge}</span>` : '';
  const oldPriceHtml = item.oldPrice ? `<span class="product-old-price">${fmtBRL(item.oldPrice)}</span>` : '';

  card.innerHTML = `
    ${promoBadgeHtml}
    <div class="product-img">
      ${svgIcon}
    </div>
    <div class="product-body">
      <p class="product-name">${item.name}</p>
      <p class="product-desc">${item.desc}</p>
      <div class="product-footer">
        <div class="product-price-wrap">
          ${oldPriceHtml}
          <span class="product-price">${fmtBRL(item.price)}</span>
        </div>
        <button class="btn-add" data-id="${item.id}" aria-label="Adicionar ${item.name}">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Adicionar
        </button>
      </div>
    </div>
  `;

  card.querySelector('.btn-add').addEventListener('click', () => addToCart(item));
  return card;
}

// ============================================================
// 🗺️ SCROLL SPY
// ============================================================
function scrollToSection(id) {
  const el = document.getElementById('sec-' + id);
  if (!el) return;
  const offset = 68 + 52 + 16;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('.menu-section');
  const tabs     = document.querySelectorAll('.cat-tab');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('sec-', '');
          tabs.forEach(t => t.classList.toggle('active', t.dataset.category === id));
          document.querySelector('.cat-tab.active')
            ?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    },
    { rootMargin: '-38% 0px -52% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

// ============================================================
// 🛒 LÓGICA DO CARRINHO
// ============================================================
function addToCart(item) {
  const existing = cart.find(c => c.item.id === item.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ item, qty: 1 });
  }
  showToast(`✓  ${item.name} adicionado!`);
  renderCart();
  updateBadge();
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.item.id !== itemId);
  renderCart();
  updateBadge();
}

function changeQty(itemId, delta) {
  const entry = cart.find(c => c.item.id === itemId);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) removeFromCart(itemId);
  else { renderCart(); updateBadge(); }
}

function getSubtotal() {
  return cart.reduce((s, c) => s + c.item.price * c.qty, 0);
}

function getTotalWithOrderbump() {
  if (cart.length === 0) return 0;
  const bumpPrice = orderbumpActive ? CONFIG.orderbump.price : 0;
  return getSubtotal() + CONFIG.taxaEntrega + bumpPrice;
}

function getTotalItems() {
  return cart.reduce((s, c) => s + c.qty, 0);
}

// ============================================================
// 🎨 RENDERIZAR CARRINHO
// ============================================================
function renderCart() {
  const list       = document.getElementById('cartList');
  const empty      = document.getElementById('cartEmpty');
  const subtotalEl = document.getElementById('subtotalEl');
  const feeEl      = document.getElementById('feeEl');
  const totalEl    = document.getElementById('totalEl');
  const foot       = document.getElementById('cartFoot');

  list.innerHTML = '';

  if (cart.length === 0) {
    empty.classList.remove('hidden');
    foot.style.display = 'none';
  } else {
    empty.classList.add('hidden');
    foot.style.display = '';

    cart.forEach(({ item, qty }) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      const iconSvg = SVGS[item.icon] || SVGS.burger;

      li.innerHTML = `
        <div class="ci-icon">${iconSvg}</div>
        <div class="ci-info">
          <p class="ci-name">${item.name}</p>
          <p class="ci-price">${fmtBRL(item.price * qty)}</p>
          <div class="ci-controls">
            <button class="ci-btn ci-minus" aria-label="Diminuir">−</button>
            <span class="ci-qty">${qty}</span>
            <button class="ci-btn ci-plus" aria-label="Aumentar">+</button>
          </div>
        </div>
        <button class="ci-remove" aria-label="Remover ${item.name}">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      `;
      li.querySelector('.ci-minus').addEventListener('click', () => changeQty(item.id, -1));
      li.querySelector('.ci-plus').addEventListener('click',  () => changeQty(item.id, +1));
      li.querySelector('.ci-remove').addEventListener('click', () => removeFromCart(item.id));
      list.appendChild(li);
    });
  }

  const sub = getSubtotal();
  subtotalEl.textContent = fmtBRL(sub);
  feeEl.textContent      = cart.length > 0 ? fmtBRL(CONFIG.taxaEntrega) : 'R$ 0,00';
  totalEl.textContent    = fmtBRL(cart.length > 0 ? sub + CONFIG.taxaEntrega : 0);

  // FAB mobile
  document.getElementById('fabCount').textContent = getTotalItems();
  document.getElementById('fabTotal').textContent = fmtBRL(cart.length > 0 ? sub + CONFIG.taxaEntrega : 0);
  document.getElementById('fabCart').classList.toggle('visible', cart.length > 0);
}

function updateBadge() {
  const badge = document.getElementById('cartBadge');
  const count = getTotalItems();
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
  badge.classList.add('bump');
  badge.addEventListener('animationend', () => badge.classList.remove('bump'), { once: true });
}

// ============================================================
// 📋 RESUMO DO PEDIDO COM ORDERBUMP (NO MODAL DE CHECKOUT)
// ============================================================
function renderOrderSummary() {
  const el = document.getElementById('orderSummary');
  let html = `<p class="os-title">Resumo do pedido</p>`;

  cart.forEach(({ item, qty }) => {
    html += `
      <div class="os-item">
        <span>${qty}x ${item.name}</span>
        <span>${fmtBRL(item.price * qty)}</span>
      </div>
    `;
  });

  // Linha do Orderbump se estiver selecionado
  if (orderbumpActive) {
    html += `
      <div class="os-item" style="color:var(--amber); font-weight:600;">
        <span>1x 🥤 ${CONFIG.orderbump.shortName}</span>
        <span>${fmtBRL(CONFIG.orderbump.price)}</span>
      </div>
    `;
  }

  const sub = getSubtotal();
  const bumpPrice = orderbumpActive ? CONFIG.orderbump.price : 0;
  const currentTotal = sub + CONFIG.taxaEntrega + bumpPrice;

  html += `
    <hr class="os-divider" />
    <div class="os-item">
      <span style="color:var(--text2)">Subtotal</span>
      <span style="color:var(--text2)">${fmtBRL(sub + bumpPrice)}</span>
    </div>
    <div class="os-item">
      <span style="color:var(--text2)">Taxa de entrega</span>
      <span style="color:var(--text2)">${fmtBRL(CONFIG.taxaEntrega)}</span>
    </div>
    <hr class="os-divider" />
    <div class="os-total">
      <span>Total a Pagar</span>
      <span>${fmtBRL(currentTotal)}</span>
    </div>
  `;

  el.innerHTML = html;
}

// ============================================================
// 📱 INTEGRAÇÃO WHATSAPP COM ORDERBUMP
// ============================================================
function buildWhatsAppMessage(address, payment) {
  const orderId = generateOrderId();
  const lines   = [];

  lines.push(`🍔 *PEDIDO #${orderId}*`);
  lines.push(`📍 ${CONFIG.nomeEstabelecimento}`);
  lines.push(`_${CONFIG.slogan}_`);
  lines.push('');
  lines.push('*📋 Itens do Pedido:*');

  cart.forEach(({ item, qty }) => {
    lines.push(`  ${qty}x ${item.name} — ${fmtBRL(item.price * qty)}`);
  });

  // Se ativou o orderbump de refrigerante
  if (orderbumpActive) {
    lines.push(`  1x 🥤 [OFERTA] ${CONFIG.orderbump.name} — ${fmtBRL(CONFIG.orderbump.price)}`);
  }

  const bumpPrice = orderbumpActive ? CONFIG.orderbump.price : 0;
  const subtotal = getSubtotal() + bumpPrice;
  const total = subtotal + CONFIG.taxaEntrega;

  lines.push('');
  lines.push(`💰 *Subtotal:* ${fmtBRL(subtotal)}`);
  lines.push(`🛵 *Taxa de entrega:* ${fmtBRL(CONFIG.taxaEntrega)}`);
  lines.push(`✅ *Total: ${fmtBRL(total)}*`);
  lines.push('');
  lines.push('📦 *Endereço de entrega:*');
  lines.push(`  ${address}`);
  lines.push('');
  lines.push(`💳 *Forma de pagamento:* ${payment}`);
  lines.push('');
  lines.push('Aguardo confirmação do pedido! 🙏');

  return lines.join('\n');
}

function sendToWhatsApp() {
  const address = document.getElementById('addressInput').value.trim();
  const payment = document.getElementById('paymentSelect').value;

  if (!address) {
    const input = document.getElementById('addressInput');
    input.focus();
    input.style.borderColor = '#CC2200';
    showToast('⚠️ Informe o endereço de entrega');
    setTimeout(() => { input.style.borderColor = ''; }, 2000);
    return;
  }

  const message = buildWhatsAppMessage(address, payment);
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ============================================================
// 🚪 ABERTURA / FECHAMENTO
// ============================================================
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function openModal() {
  if (cart.length === 0) {
    showToast('⚠️ Adicione itens ao carrinho primeiro');
    return;
  }
  closeCart();
  renderOrderSummary();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 🎧 EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderCart();

  // Botões de carrinho e checkout
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('fabBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', closeCart);
  document.getElementById('whatsappBtn').addEventListener('click', sendToWhatsApp);

  // 🥤 Orderbump switch event
  const orderbumpCheck = document.getElementById('orderbumpCheck');
  const orderbumpCard = document.getElementById('orderbumpCard');
  if (orderbumpCheck) {
    orderbumpCheck.addEventListener('change', (e) => {
      orderbumpActive = e.target.checked;
      orderbumpCard.classList.toggle('active', orderbumpActive);
      renderOrderSummary();
      if (orderbumpActive) {
        showToast('🥤 Refrigerante adicionado na oferta!');
      }
    });
  }

  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeModal(); }
  });
});

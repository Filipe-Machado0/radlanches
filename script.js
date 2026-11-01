/* ============================================================
   RAD LANCHES — SCRIPT.JS  (v2 — Identidade Oficial)
   ============================================================ */

// ============================================================
// ⚙️ CONFIGURAÇÕES — EDITE AQUI
// ============================================================
const CONFIG = {
  /** Número do WhatsApp da Rad Lanches */
  whatsappNumber: '5515992784772',

  /** Taxa de entrega em reais */
  taxaEntrega: 5.00,

  /** Nome na mensagem do WhatsApp */
  nomeEstabelecimento: 'Rad Lanches',

  /** Slogan na mensagem */
  slogan: 'O sabor que assombra sua fome! 🏍️',
};

// ============================================================
// 🍔 CARDÁPIO
// Atualize os itens com o cardápio real da lanchonete!
// ============================================================
const MENU = [
  {
    id: 'burgers',
    label: '🍔 Burgers',
    items: [
      {
        id: 1,
        name: 'Rad Burguer',
        desc: 'Hambúrguer artesanal com ingredientes de qualidade. Sabor garantido!',
        price: 20.00,
        emoji: '🍔',
      },
      {
        id: 2,
        name: 'Explosão Cheetos',
        desc: 'O burger que explode em cada mordida! Com Cheetos crocante e muito cheddar',
        price: 28.90,
        emoji: '🍔',
      },
      // ➕ Adicione mais burgers aqui:
      // { id: 3, name: 'Nome do Burger', desc: 'Descrição', price: 00.00, emoji: '🍔' },
    ],
  },
  {
    id: 'hotdogs',
    label: '🌭 Hot Dogs',
    items: [
      {
        id: 10,
        name: 'Rad Dog Bacon',
        desc: 'Hot dog artesanal com bacon crocante, cheddar cremoso e molhos especiais',
        price: 23.00,
        emoji: '🌭',
      },
      // ➕ Adicione mais hot dogs aqui:
      // { id: 11, name: 'Nome do Dog', desc: 'Descrição', price: 00.00, emoji: '🌭' },
    ],
  },
  {
    id: 'combos',
    label: '🍟 Combos',
    items: [
      {
        id: 20,
        name: 'Combo Rad',
        desc: 'Rad Burguer + Batata Frita + Refrigerante Lata. A combinação perfeita!',
        price: 34.90,
        emoji: '🍔',
      },
      {
        id: 21,
        name: 'Combo Dog',
        desc: 'Rad Dog Bacon + Batata Frita + Refrigerante Lata',
        price: 36.90,
        emoji: '🌭',
      },
      // ➕ Adicione mais combos aqui
    ],
  },
  {
    id: 'bebidas',
    label: '🥤 Bebidas',
    items: [
      {
        id: 30,
        name: 'Refrigerante Lata 350ml',
        desc: 'Coca-Cola, Guaraná, Sprite ou Fanta. Geladinho!',
        price: 7.00,
        emoji: '🥤',
      },
      {
        id: 31,
        name: 'Água Mineral 500ml',
        desc: 'Com ou sem gás',
        price: 4.00,
        emoji: '💧',
      },
      // ➕ Adicione mais bebidas aqui
    ],
  },
];

// ============================================================
// 🛒 ESTADO DO CARRINHO
// ============================================================
let cart = [];

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
// 🍔 RENDERIZAR CARDÁPIO
// ============================================================
function renderMenu() {
  const main = document.getElementById('menuMain');
  const tabs = document.getElementById('catTabs');
  main.innerHTML = '';
  tabs.innerHTML = '';

  MENU.forEach((section, idx) => {
    // Tab
    const tab = document.createElement('button');
    tab.className = 'cat-tab' + (idx === 0 ? ' active' : '');
    tab.textContent = section.label;
    tab.dataset.category = section.id;
    tab.addEventListener('click', () => scrollToSection(section.id));
    tabs.appendChild(tab);

    // Section
    const sec = document.createElement('section');
    sec.className = 'menu-section';
    sec.id = 'sec-' + section.id;

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = section.label;
    sec.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'product-grid';
    section.items.forEach(item => grid.appendChild(createProductCard(item)));
    sec.appendChild(grid);
    main.appendChild(sec);
  });

  setupScrollSpy();
}

function createProductCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-img">${item.emoji}</div>
    <div class="product-body">
      <p class="product-name">${item.name}</p>
      <p class="product-desc">${item.desc}</p>
      <div class="product-footer">
        <span class="product-price">${fmtBRL(item.price)}</span>
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

function getSubtotal() { return cart.reduce((s, c) => s + c.item.price * c.qty, 0); }
function getTotal()    { return cart.length > 0 ? getSubtotal() + CONFIG.taxaEntrega : 0; }
function getTotalItems(){ return cart.reduce((s, c) => s + c.qty, 0); }

// ============================================================
// 🎨 RENDERIZAR CARRINHO
// ============================================================
function renderCart() {
  const list     = document.getElementById('cartList');
  const empty    = document.getElementById('cartEmpty');
  const subtotalEl = document.getElementById('subtotalEl');
  const feeEl    = document.getElementById('feeEl');
  const totalEl  = document.getElementById('totalEl');
  const foot     = document.getElementById('cartFoot');

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
      li.innerHTML = `
        <div class="ci-emoji">${item.emoji}</div>
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

  subtotalEl.textContent = fmtBRL(getSubtotal());
  feeEl.textContent      = cart.length > 0 ? fmtBRL(CONFIG.taxaEntrega) : 'R$ 0,00';
  totalEl.textContent    = fmtBRL(getTotal());

  // FAB mobile
  document.getElementById('fabCount').textContent = getTotalItems();
  document.getElementById('fabTotal').textContent = fmtBRL(getTotal());
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
// 📋 RESUMO DO PEDIDO (no modal)
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
  html += `
    <hr class="os-divider" />
    <div class="os-item">
      <span style="color:var(--text2)">Subtotal</span>
      <span style="color:var(--text2)">${fmtBRL(getSubtotal())}</span>
    </div>
    <div class="os-item">
      <span style="color:var(--text2)">Taxa de entrega</span>
      <span style="color:var(--text2)">${fmtBRL(CONFIG.taxaEntrega)}</span>
    </div>
    <hr class="os-divider" />
    <div class="os-total">
      <span>Total</span>
      <span>${fmtBRL(getTotal())}</span>
    </div>
  `;
  el.innerHTML = html;
}

// ============================================================
// 📱 INTEGRAÇÃO WHATSAPP
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
  lines.push('');
  lines.push(`💰 *Subtotal:* ${fmtBRL(getSubtotal())}`);
  lines.push(`🛵 *Taxa de entrega:* ${fmtBRL(CONFIG.taxaEntrega)}`);
  lines.push(`✅ *Total: ${fmtBRL(getTotal())}*`);
  lines.push('');
  lines.push('📦 *Endereço de entrega:*');
  lines.push(`  ${address}`);
  lines.push('');
  lines.push(`💳 *Forma de pagamento:* ${payment}`);
  lines.push('');
  lines.push('Aguardo confirmação! 🙏');

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
  if (cart.length === 0) { showToast('⚠️ Adicione itens ao carrinho primeiro'); return; }
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

  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('fabBtn').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', closeCart);
  document.getElementById('whatsappBtn').addEventListener('click', sendToWhatsApp);

  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeModal(); }
  });
});

// Claude Code Harness - App Logic
// Data: window.SKILLS_CATALOG

const BANK_CONFIG = {
  bankId: 'MB', // MBBank
  bankName: 'MB Bank (Quân Đội)',
  accountNo: '0988666888', // Số tài khoản mẫu dễ nhớ (người dùng có thể sửa)
  accountName: 'CLAUDE CODE HARNESS'
};

const SYLLABUS_DATA = [
  {
    day: 1,
    title: 'Giao việc và phân quyền',
    subtitle: 'Vòng lặp vận hành an toàn & Phiếu giao việc 5 ý',
    tag: 'Nền tảng kiểm soát',
    desc: 'Thiết lập vòng làm việc an toàn của Claude Code trên máy tính. Hiểu rõ vì sao tuyệt đối không bật toàn quyền ngay từ ngày đầu tiên và cách kiểm soát từng thao tác ghi đè tệp tin.',
    modules: [
      {
        title: 'Vòng làm việc của Claude Code',
        detail: 'Đọc mã nguồn -> Lên kế hoạch (Plan) -> Thực thi (Act) -> Tự kiểm tra (Verify) trước khi báo hoàn thành.'
      },
      {
        title: '4 bậc quyền & Permission Mode',
        detail: 'Phân tích các chế độ Read-only, Normal, Bypass, Full-access. Chiến lược thăng cấp quyền hạn có kiểm soát.'
      },
      {
        title: 'Phiếu giao việc 5 ý chuẩn SOP',
        detail: '1. Mục tiêu tối thượng | 2. Dữ liệu đầu vào | 3. Định dạng đầu ra | 4. Tiêu chí nghiệm thu | 5. Điều cấm kỵ (Guardrails).'
      }
    ],
    deliverable: 'Một video motion chuyên nghiệp do chính Claude Code tự lập trình và render bằng Skill trên máy bạn!',
    deliverableIcon: 'film',
    codeSample: `# Phiếu giao việc chuẩn 5 ý mẫu
1. MỤC TIÊU: Dựng video 15s giới thiệu tính năng mới
2. ĐẦU VÀO: Thư mục ./assets/images và ./audio/voice.mp3
3. ĐẦU RA: File MP4 chuẩn 1080x1920 (9:16), 60fps
4. TIÊU CHÍ: Khớp beat nhạc ở giây thứ 3, 7, 11; chữ không che vùng an toàn
5. ĐIỀU CẤM: Không tự ý xoá file gốc trong thư mục ./assets`
  },
  {
    day: 2,
    title: 'Bộ não của hệ thống',
    subtitle: 'CLAUDE.md đa tầng & Auto Memory không quên',
    tag: 'Context & Trí nhớ',
    desc: 'Xây dựng bộ nhớ vĩnh cửu cho dự án. Khắc phục triệt để vấn đề Claude bị mất trí nhớ khi phiên chat dài hoặc khi làm việc nhiều ngày liên tiếp.',
    modules: [
      {
        title: 'CLAUDE.md nhiều tầng',
        detail: 'Cấu trúc phân tầng: Tầng Máy tính (~/.claude) -> Tầng Dự án (./CLAUDE.md) -> Tầng Thư mục con.'
      },
      {
        title: 'Auto Memory thông minh',
        detail: 'Chiến thuật quyết định khi nào giữ nguyên, khi nào gộp thông tin, sửa đổi hay dọn dẹp bộ nhớ tự động.'
      },
      {
        title: 'Tệp Handoff cho dự án dài ngày',
        detail: 'Kỹ thuật bàn giao ca làm việc (hand-off protocol) để phiên sau tiếp tục chính xác 100% công việc của phiên trước.'
      }
    ],
    deliverable: 'Bộ não CLAUDE.md viết trực tiếp từ các lỗi thực tế trong dự án của bạn, chạy kiểm thử lại để đo lường độ chính xác.',
    deliverableIcon: 'brain',
    codeSample: `# CLAUDE.md - Multi-layer Brain
## Coding Guidelines & Constraints
- Always use UTF-8 without BOM
- Never run destructive git commands without asking
- Run 'npm test' before marking task as completed
- Follow DESIGN.md for color variables and typography tokens`
  },
  {
    day: 3,
    title: 'Skill và Plugin',
    subtitle: 'Đóng gói quy trình & Phân phối 1 dòng lệnh',
    tag: 'Tự động hoá quy trình',
    desc: 'Học cách biến các công việc phức tạp thành các Skill chỉ cần gọi 1 từ là tự chạy. Đóng gói thành Plugin phân phối sang máy tính khác trong chớp mắt.',
    modules: [
      {
        title: 'Cấu tạo chuẩn của SKILL.md',
        detail: 'Viết metadata, triggers, quy trình SOP và script đi kèm để đảm bảo Claude xuất ra cùng một công thức chuẩn xác 100 lần như 1.'
      },
      {
        title: 'Sử dụng skill-creator',
        detail: 'Tận dụng công cụ chuyên dụng để tạo nhanh, chạy thử nghiệm, chấm điểm và tối ưu hóa skill.'
      },
      {
        title: 'Skill học phong cách từ video mẫu',
        detail: 'Trích xuất tự động nhịp cắt (cut BPM), cỡ chữ, bảng màu, phong cách chuyển cảnh từ sản phẩm có sẵn.'
      },
      {
        title: 'Đóng gói Plugin hoàn chỉnh',
        detail: 'Gói gồm Skill + Agent + Hook + Slash Command. Tạo kho plugin riêng, cài đặt máy khác chỉ với 1 câu lệnh.'
      }
    ],
    deliverable: 'Tự tay viết 2 Skill thực chiến giải quyết đúng bài toán của bạn + Đóng gói 1 Plugin chia sẻ được ngay.',
    deliverableIcon: 'package',
    codeSample: `---
name: my-auto-workflow
description: >-
  Tự động quét thư mục và xử lý định dạng video theo chuẩn studio
---
# Workflow SOP
1. Kiểm tra file đầu vào tại ./input
2. Áp dụng bảng màu Cinematic Teal & Orange
3. Chèn phụ đề tự động bằng VieNeu TTS
4. Xuất file tại ./output kèm file metadata JSON`
  },
  {
    day: 4,
    title: 'Hook, token và context',
    subtitle: 'Chốt chặn an toàn & Tiết kiệm chi phí',
    tag: 'Tối ưu chi phí & An toàn',
    desc: 'Làm chủ token và vòng đời thực thi. Đặt các chốt chặn tự động (Hook) ngăn Claude tự ý thực hiện các bước tốn kém hoặc nguy hiểm khi chưa có sự đồng ý của bạn.',
    modules: [
      {
        title: 'Đọc token & Cơ chế Context Window',
        detail: 'Phân biệt rạch ròi giữa /compact và /clear, cách đặt ngưỡng nén ngữ cảnh tối ưu để không mất dữ liệu quan trọng.'
      },
      {
        title: 'Chiến lược chọn Model & Depth',
        detail: 'Khi nào dùng Claude Haiku, Sonnet, Opus; phân bổ mức độ suy nghĩ (Thinking depth) và uỷ quyền việc đọc nặng cho subagent.'
      },
      {
        title: 'Hook theo 5 mốc vòng đời',
        detail: '1. Đầu phiên | 2. Mỗi lượt chat | 3. Trước/Sau khi gọi tool | 4. Trước khi compact | 5. Kết thúc lượt.'
      }
    ],
    deliverable: 'Cài đặt 3 Hook thiết yếu: Đo context tự động, Nạp lại tệp bàn giao sau khi compact, và Chặn bước tốn tiền.',
    deliverableIcon: 'shield-alert',
    codeSample: `# Lifecycle Hook Example (pre_tool_call)
function onPreToolCall(toolName, args) {
  if (toolName === 'execute_costly_api' && args.cost > 1000) {
    return { abort: true, reason: 'Bước này tiêu tốn hơn $1, cần xác nhận từ người dùng!' };
  }
  return { continue: true };
}`
  },
  {
    day: 5,
    title: 'Đội agent và vận hành tự động',
    subtitle: 'NEXUS Subagents & Hệ thống tự chạy ban đêm',
    tag: 'Quy mô Autonomous',
    desc: 'Nâng cấp lên mô hình đa tác tử (Multi-agent team). Kết nối MCP với Google Drive, Gmail, Lịch và thiết lập hệ thống tự chạy qua đêm không cần bạn ngồi canh.',
    modules: [
      {
        title: 'Đội hình Subagent 3 vai trò',
        detail: 'Mỗi agent có context & công cụ riêng: Vai Người làm (Worker) -> Vai Người soát (Reviewer) -> Vai Người phản biện (Critic).'
      },
      {
        title: 'Tích hợp MCP Server có kiểm soát',
        detail: 'Nối Drive, Gmail, Google Calendar theo nguyên tắc: Agent chỉ được soạn bản nháp (Draft), con người bấm duyệt.'
      },
      {
        title: 'Headless Mode & Chạy tự động ban đêm',
        detail: 'Chạy Claude Code không giao diện, lên lịch cron job trên cloud hoặc máy tính, hàng đợi công việc tự xử lý ban đêm.'
      },
      {
        title: 'Ứng dụng Claude Agent SDK vào app',
        detail: 'Cách đưa Claude Code harness vào ứng dụng web, bot Telegram hoặc dashboard quản trị riêng của bạn.'
      }
    ],
    deliverable: 'Một đội Agent soát chéo tự động + Hệ thống tự động tạo bản tin/báo cáo tổng hợp gửi về email mỗi sáng!',
    deliverableIcon: 'cpu',
    codeSample: `# Multi-agent Execution Pipeline
WorkerAgent: Viết kịch bản và chuẩn bị tài nguyên
   ↓
ReviewerAgent: Soát lại chính tả, độ dài và vùng an toàn
   ↓
CriticAgent: Đánh giá cảm xúc và độ thu hút của người xem
   ↓
Human: Duyệt đầu ra cuối cùng (Approval Checkpoint)`
  }
];

// App State
let state = {
  activeDay: 1,
  activeCategory: 'all',
  searchQuery: '',
  cart: [],
  discountCode: '',
  discountPercent: 0,
  activeSkillModal: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderSyllabus();
  renderSkills();
  initCategoryFilters();
  initSearch();
  initInteractiveTerminal();
  initRegistrationForm();
  updateCartUI();

  // Handle Hash Routing
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
});

// Toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${
    type === 'success' 
      ? 'bg-slate-900 border-amber-500/40 text-amber-200' 
      : 'bg-slate-900 border-red-500/40 text-red-200'
  }`;

  const icon = type === 'success' ? '✓' : 'ℹ';
  toast.innerHTML = `<span class="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Render Syllabus
function renderSyllabus() {
  const navContainer = document.getElementById('syllabusNav');
  const contentContainer = document.getElementById('syllabusContent');
  if (!navContainer || !contentContainer) return;

  // Render Tabs
  navContainer.innerHTML = SYLLABUS_DATA.map((item) => `
    <button onclick="switchSyllabusDay(${item.day})" class="w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
      state.activeDay === item.day
        ? 'bg-gradient-to-r from-amber-500/20 to-indigo-500/10 border-amber-500/50 text-white shadow-lg shadow-amber-500/10'
        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
    }">
      <div class="flex items-center gap-3">
        <span class="flex items-center justify-center w-8 h-8 rounded-lg font-mono text-sm font-bold ${
          state.activeDay === item.day ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
        }">0${item.day}</span>
        <div>
          <div class="text-sm font-bold ${state.activeDay === item.day ? 'text-amber-400' : 'text-slate-300'}">${item.title}</div>
          <div class="text-xs text-slate-500 truncate max-w-[180px]">${item.subtitle}</div>
        </div>
      </div>
      <span class="text-xs px-2 py-0.5 rounded-full ${state.activeDay === item.day ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-800 text-slate-500'}">${item.tag}</span>
    </button>
  `).join('');

  // Render Active Content
  const curr = SYLLABUS_DATA.find((s) => s.day === state.activeDay) || SYLLABUS_DATA[0];
  contentContainer.innerHTML = `
    <div class="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-2xl relative overflow-hidden">
      <!-- Glow Decor -->
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold">BUỔI 0${curr.day} / 05</span>
          <span class="text-xs text-slate-400">• Thời lượng: 90 Phút • Thực chiến qua Zoom</span>
        </div>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300">${curr.tag}</span>
      </div>

      <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">${curr.title}</h3>
      <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-6">${curr.desc}</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        ${curr.modules.map((m, idx) => `
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div class="text-xs font-mono text-amber-400 mb-1">Mục 0${idx + 1}</div>
            <div class="font-bold text-slate-200 text-sm mb-1">${m.title}</div>
            <div class="text-xs text-slate-400 leading-normal">${m.detail}</div>
          </div>
        `).join('')}
      </div>

      <!-- Deliverable Banner -->
      <div class="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-indigo-500/15 to-transparent border border-amber-500/30 mb-6 flex items-start gap-4">
        <div class="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-amber-400">Thành phẩm thu về sau buổi học</div>
          <div class="text-sm md:text-base font-semibold text-white mt-0.5">${curr.deliverable}</div>
        </div>
      </div>

      <!-- Code / Prompt Preview -->
      <div class="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
        <div class="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Tài liệu mẫu thực hành: Buổi ${curr.day}</span>
          <span class="text-amber-400/80">Claude Code Harness</span>
        </div>
        <pre class="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed"><code>${escapeHtml(curr.codeSample)}</code></pre>
      </div>
    </div>
  `;
}

function switchSyllabusDay(day) {
  state.activeDay = day;
  renderSyllabus();
}

// Render Skills Marketplace
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  const countBadge = document.getElementById('skillsCount');
  if (!container) return;

  const catalog = window.SKILLS_CATALOG || [];
  
  // Filter by category & search
  let filtered = catalog.filter((skill) => {
    const matchCat = state.activeCategory === 'all' || skill.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q || 
      skill.name.toLowerCase().includes(q) || 
      skill.heading.toLowerCase().includes(q) || 
      skill.description.toLowerCase().includes(q) || 
      skill.id.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} Skills`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <svg class="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <p class="text-base font-medium">Không tìm thấy skill nào phù hợp với từ khóa "${state.searchQuery}"</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg">Xóa bộ lọc tìm kiếm</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((skill) => {
    const isInCart = state.cart.some((item) => item.id === skill.id);
    return `
      <div class="glass-card rounded-2xl p-5 flex flex-col justify-between border border-slate-800/80 hover:border-amber-500/40 group relative">
        ${skill.badge ? `
          <span class="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full ${
            skill.badge.includes('Best') || skill.badge.includes('🔥')
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
          }">${skill.badge}</span>
        ` : ''}

        <div>
          <!-- Icon & Category -->
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              ${getSkillIconSvg(skill.icon || skill.category)}
            </div>
            <div>
              <span class="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">${getCategoryLabel(skill.category)}</span>
              <h4 class="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">${skill.name}</h4>
            </div>
          </div>

          <!-- Highlight / Description -->
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4 min-h-[48px]">
            ${skill.highlight || skill.description || 'Skill thực chiến chuẩn SOP đóng gói cho Claude Code & Antigravity.'}
          </p>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
          <div>
            <div class="text-[10px] text-slate-500 line-through">${formatVnd(skill.price * 1.5)}</div>
            <div class="text-sm font-extrabold text-white font-mono">${formatVnd(skill.price)}</div>
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="openSkillModal('${skill.id}')" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition" title="Xem chi tiết">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
            <button onclick="addToCart('${skill.id}')" class="px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
              isInCart
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
            }">
              ${isInCart ? '<span>✓ Đã chọn</span>' : '<span>+ Chọn mua</span>'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'Tất cả (200+)', icon: 'grid' },
    { id: 'video', label: '🎬 Video & Reels', icon: 'film' },
    { id: 'audio', label: '🎙️ Voice & Audio', icon: 'mic' },
    { id: 'design', label: '🎨 UI/UX & Design', icon: 'layout' },
    { id: 'agents', label: '🤖 Đội ngũ Agent', icon: 'bot' },
    { id: '3d', label: '🧊 3D & Blender', icon: 'box' },
    { id: 'tools', label: '⚙️ Dev & Tools', icon: 'wrench' }
  ];

  container.innerHTML = categories.map((cat) => `
    <button onclick="setCategory('${cat.id}')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
      state.activeCategory === cat.id
        ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
    }">
      ${cat.label}
    </button>
  `).join('');
}

function setCategory(catId) {
  state.activeCategory = catId;
  initCategoryFilters();
  renderSkills();
}

function initSearch() {
  const input = document.getElementById('skillSearchInput');
  if (!input) return;
  input.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderSkills();
  });
}

function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = 'all';
  const input = document.getElementById('skillSearchInput');
  if (input) input.value = '';
  initCategoryFilters();
  renderSkills();
}

function getCategoryLabel(cat) {
  switch (cat) {
    case 'video': return 'Video Production';
    case 'audio': return 'Voice & Audio AI';
    case 'design': return 'Design & UI/UX';
    case 'agents': return 'Agent Systems';
    case '3d': return '3D & Animation';
    default: return 'Developer Tool';
  }
}

function getSkillIconSvg(icon) {
  switch (icon) {
    case 'film':
    case 'video':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`;
    case 'mic':
    case 'volume-2':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>`;
    case 'layout':
    case 'palette':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`;
    case 'box':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
    case 'users':
    case 'bot':
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`;
    default:
      return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
  }
}

// Modal Skill Detail
function openSkillModal(skillId) {
  const skill = (window.SKILLS_CATALOG || []).find((s) => s.id === skillId);
  if (!skill) return;

  const modal = document.getElementById('skillDetailModal');
  const body = document.getElementById('skillModalBody');
  if (!modal || !body) return;

  const isInCart = state.cart.some((item) => item.id === skill.id);

  body.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            ${getSkillIconSvg(skill.icon || skill.category)}
          </div>
          <div>
            <span class="text-xs uppercase font-mono text-amber-400 font-semibold tracking-wider">${getCategoryLabel(skill.category)}</span>
            <h3 class="text-xl md:text-2xl font-bold text-white">${skill.name}</h3>
          </div>
        </div>
        <button onclick="closeSkillModal()" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="mb-6">
        <h4 class="text-sm font-semibold text-slate-300 mb-1">Mục đích và khả năng:</h4>
        <p class="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">${skill.description}</p>
      </div>

      <div class="mb-6">
        <h4 class="text-sm font-semibold text-slate-300 mb-2">Cách gọi trong Claude Code hoặc Antigravity:</h4>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 flex items-center justify-between">
          <code>claude "Sử dụng skill ${skill.name} để hoàn thành tác vụ này..."</code>
          <button onclick="copyText('claude &quot;Sử dụng skill ${skill.name} để hoàn thành tác vụ này...&quot;')" class="text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 text-[11px]">Copy</button>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-sm font-semibold text-slate-300 mb-2">Đóng gói sẵn sàng:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
          <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span class="text-amber-400 font-bold block mb-1">✓ File SOP</span>
            <span class="text-slate-400 text-[11px]">SKILL.md chuẩn chỉ</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span class="text-amber-400 font-bold block mb-1">✓ Scripts</span>
            <span class="text-slate-400 text-[11px]">Python / Node script</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span class="text-amber-400 font-bold block mb-1">✓ Cài 1 lệnh</span>
            <span class="text-slate-400 text-[11px]">Dùng ngay trên máy</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span class="text-amber-400 font-bold block mb-1">✓ Hỗ trợ</span>
            <span class="text-slate-400 text-[11px]">Bảo hành cập nhật</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-slate-800">
        <div>
          <span class="text-xs text-slate-500">Giá sở hữu bản quyền source:</span>
          <div class="text-2xl font-extrabold text-amber-400 font-mono">${formatVnd(skill.price)}</div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="closeSkillModal()" class="px-4 py-2 text-sm text-slate-400 hover:text-white">Đóng</button>
          <button onclick="addToCart('${skill.id}'); closeSkillModal();" class="px-6 py-2.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20">
            ${isInCart ? 'Đã có trong giỏ' : 'Thêm vào giỏ hàng'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeSkillModal() {
  const modal = document.getElementById('skillDetailModal');
  if (modal) modal.classList.remove('active');
}

// Cart Management
function loadCart() {
  try {
    const saved = localStorage.getItem('claude_harness_cart');
    if (saved) state.cart = JSON.parse(saved);
  } catch (e) {
    state.cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('claude_harness_cart', JSON.stringify(state.cart));
  } catch (e) {}
}

function addToCart(skillId) {
  const skill = (window.SKILLS_CATALOG || []).find((s) => s.id === skillId);
  if (!skill) return;

  const exists = state.cart.find((i) => i.id === skill.id);
  if (exists) {
    showToast(`"${skill.name}" đã có trong giỏ hàng!`);
    return;
  }

  state.cart.push({
    id: skill.id,
    name: skill.name,
    price: skill.price,
    category: skill.category,
    type: 'skill'
  });

  saveCart();
  updateCartUI();
  renderSkills();
  showToast(`Đã thêm "${skill.name}" vào giỏ hàng!`);
}

function addCourseToCart(type = 'group') {
  let item = null;
  if (type === 'group') {
    item = {
      id: 'course-claude-group',
      name: 'Khóa học Claude Code: Hệ thống tự chạy (Lớp nhóm 5 buổi Zoom)',
      price: 499000,
      category: 'course',
      type: 'course'
    };
  } else if (type === 'combo') {
    item = {
      id: 'course-claude-combo-vip',
      name: 'Combo Toàn Năng: Khóa học 5 buổi + Trọn bộ 20 Skill VIP Video & Voice',
      price: 990000,
      category: 'combo',
      type: 'combo'
    };
  }

  // Remove existing course item if any, then add
  state.cart = state.cart.filter((i) => !i.id.startsWith('course-'));
  state.cart.push(item);
  saveCart();
  updateCartUI();
  openCartDrawer();
  showToast(`Đã thêm ${item.name} vào giỏ!`);
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  saveCart();
  updateCartUI();
  renderSkills();
  showToast('Đã xóa khỏi giỏ hàng');
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartUI();
  renderSkills();
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
  const total = Math.max(0, subtotal - discountAmount);
  return { subtotal, discountAmount, total };
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const countSpan = document.getElementById('cartItemCount');
  if (badge) {
    badge.innerText = state.cart.length;
    badge.style.display = state.cart.length > 0 ? 'flex' : 'none';
  }
  if (countSpan) {
    countSpan.innerText = `${state.cart.length} món`;
  }

  const itemsContainer = document.getElementById('cartItemsList');
  const summaryContainer = document.getElementById('cartSummary');
  if (!itemsContainer || !summaryContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-12 text-center text-slate-500">
        <svg class="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p class="text-sm font-medium">Giỏ hàng của bạn đang trống</p>
        <button onclick="closeCartDrawer(); window.location.hash='#skills-section';" class="mt-4 px-4 py-2 text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition">
          Duyệt kho 200+ Skill ngay
        </button>
      </div>
    `;
    summaryContainer.style.display = 'none';
    return;
  }

  summaryContainer.style.display = 'block';

  itemsContainer.innerHTML = state.cart.map((item) => `
    <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="text-xs font-bold text-slate-200 truncate">${item.name}</div>
        <div class="text-[11px] text-amber-400 font-mono mt-0.5">${formatVnd(item.price)}</div>
      </div>
      <button onclick="removeFromCart('${item.id}')" class="p-1.5 text-slate-500 hover:text-red-400 transition" title="Xóa">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </button>
    </div>
  `).join('');

  const { subtotal, discountAmount, total } = calculateCartTotals();
  document.getElementById('cartSubtotal').innerText = formatVnd(subtotal);
  document.getElementById('cartDiscount').innerText = discountAmount > 0 ? `-${formatVnd(discountAmount)}` : '0đ';
  document.getElementById('cartTotal').innerText = formatVnd(total);
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('active');
}

function applyCoupon() {
  const input = document.getElementById('couponInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'HOCVIEN50') {
    state.discountPercent = 50;
    state.discountCode = code;
    showToast('Áp dụng mã HOCVIEN50: Giảm ngay 50%!');
  } else if (code === 'CLAUDEAI' || code === 'CLAUDE') {
    state.discountPercent = 20;
    state.discountCode = code;
    showToast('Áp dụng mã giảm 20% thành công!');
  } else {
    showToast('Mã ưu đãi không hợp lệ', 'error');
    return;
  }

  updateCartUI();
}

// Checkout & VietQR Generator
function proceedToCheckout() {
  if (state.cart.length === 0) {
    showToast('Giỏ hàng trống!', 'error');
    return;
  }

  const { total } = calculateCartTotals();
  const phone = document.getElementById('checkoutPhone')?.value || 'KHACH';
  const cleanPhone = phone.replace(/[^0-9]/g, '').slice(-4) || 'VIP';
  const memo = `CLAUDE ${cleanPhone}`;

  openPaymentModal(total, memo);
}

function openPaymentModal(amount, memo) {
  const modal = document.getElementById('paymentModal');
  const body = document.getElementById('paymentModalBody');
  if (!modal || !body) return;

  // VietQR API
  const qrUrl = `https://img.vietqr.io/image/${BANK_CONFIG.bankId}-${BANK_CONFIG.accountNo}-compact2.jpg?amount=${amount}&addInfo=${encodeURIComponent(memo)}&accountName=${encodeURIComponent(BANK_CONFIG.accountName)}`;

  body.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between mb-4">
        <div>
          <span class="text-xs uppercase font-mono text-amber-400 font-bold tracking-wider">CỔNG THANH TOÁN VIETQR TỰ ĐỘNG</span>
          <h3 class="text-xl md:text-2xl font-black text-white">Quét Mã QR Chuyển Khoản</h3>
        </div>
        <button onclick="closePaymentModal()" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <!-- QR Code Image -->
        <div class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white text-slate-900 shadow-2xl">
          <img src="${qrUrl}" alt="Mã VietQR" class="w-full max-w-[240px] rounded-lg" onerror="this.onerror=null; this.src='https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrUrl)}';">
          <div class="text-[11px] text-slate-600 font-medium text-center mt-2 flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Tự động điền số tiền và nội dung chuyển
          </div>
        </div>

        <!-- Bank Details -->
        <div class="space-y-3">
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[11px] text-slate-500">Ngân hàng:</div>
            <div class="text-sm font-bold text-slate-200">${BANK_CONFIG.bankName}</div>
          </div>

          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <div class="text-[11px] text-slate-500">Số tài khoản:</div>
              <div class="text-base font-extrabold text-amber-400 font-mono" id="copyAccNo">${BANK_CONFIG.accountNo}</div>
            </div>
            <button onclick="copyText('${BANK_CONFIG.accountNo}', 'Đã copy STK!')" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition">Copy</button>
          </div>

          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[11px] text-slate-500">Chủ tài khoản:</div>
            <div class="text-sm font-bold text-slate-200">${BANK_CONFIG.accountName}</div>
          </div>

          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <div class="text-[11px] text-slate-500">Số tiền:</div>
              <div class="text-lg font-black text-emerald-400 font-mono">${formatVnd(amount)}</div>
            </div>
            <button onclick="copyText('${amount}', 'Đã copy số tiền!')" class="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition">Copy</button>
          </div>

          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
            <div>
              <div class="text-[11px] text-amber-400">Nội dung chuyển khoản (bắt buộc):</div>
              <div class="text-sm font-mono font-black text-amber-300" id="copyMemo">${memo}</div>
            </div>
            <button onclick="copyText('${memo}', 'Đã copy cú pháp!')" class="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition">Copy</button>
          </div>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">
        <div class="text-xs text-slate-400 text-center md:text-left">
          Sau khi chuyển khoản, bạn sẽ nhận link kích hoạt tài liệu & vào nhóm hỗ trợ qua Zalo ngay!
        </div>
        <div class="flex items-center gap-3 w-full md:w-auto">
          <a href="https://zalo.me" target="_blank" class="flex-1 md:flex-initial text-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.24-1.31C8.68 21.49 10.29 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
            Nhắn Zalo xác nhận
          </a>
          <button onclick="confirmPaymentSuccess()" class="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition">
            Tôi đã chuyển khoản ✓
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closePaymentModal() {
  const modal = document.getElementById('paymentModal');
  if (modal) modal.classList.remove('active');
}

function confirmPaymentSuccess() {
  showToast('Cảm ơn bạn! Hệ thống đã ghi nhận đơn hàng. Đang chuyển hướng...');
  setTimeout(() => {
    closePaymentModal();
    closeCartDrawer();
    clearCart();
    alert('Đăng ký thành công! Vui lòng kiểm tra Zalo/Email để nhận thư mời vào nhóm lớp Zoom và kho Skill.');
  }, 1200);
}

// Registration Form Handler
function initRegistrationForm() {
  const form = document.getElementById('courseRegForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const task = document.getElementById('regTask').value.trim();
    const packageType = document.querySelector('input[name="regPackage"]:checked')?.value || 'group';

    if (!name || !phone) {
      showToast('Vui lòng điền họ tên và số điện thoại / Zalo', 'error');
      return;
    }

    let amount = 499000;
    let packageName = 'Khóa học 5 Buổi (499k)';
    if (packageType === 'combo') {
      amount = 990000;
      packageName = 'Combo Toàn Năng (990k)';
    } else if (packageType === 'mentor') {
      amount = 2500000;
      packageName = 'Kèm 1-1 Chuyên Sâu';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '').slice(-4) || 'VIP';
    const memo = `CLAUDE ${cleanPhone}`;

    // Store in localStorage for lead tracking
    try {
      const leads = JSON.parse(localStorage.getItem('claude_course_leads') || '[]');
      leads.push({ name, phone, email, task, packageType, date: new Date().toISOString() });
      localStorage.setItem('claude_course_leads', JSON.stringify(leads));
    } catch (err) {}

    openPaymentModal(amount, memo);
  });
}

// Interactive Terminal Simulator
function initInteractiveTerminal() {
  const terminalEl = document.getElementById('interactiveTerminalOutput');
  if (!terminalEl) return;

  const lines = [
    { text: '$ claude "Tự động phân tích video xe cổ, cắt nhịp theo BPM và tạo dự án CapCut"', delay: 600, color: 'text-amber-400' },
    { text: '→ Đang đọc cấu hình CLAUDE.md và nạp trí nhớ dự án...', delay: 1400, color: 'text-slate-400' },
    { text: '✓ Hook [pre_tool_call]: Kiểm tra quyền ghi đè thư mục -> HỢP LỆ', delay: 2200, color: 'text-emerald-400' },
    { text: '⚡ Kích hoạt Skill: capcut-draft-generator + cinematic-color-grading', delay: 3000, color: 'text-indigo-400' },
    { text: '🎙️ vieNeu-tts: Sinh giọng đọc tiếng Việt Studio 48kHz không robot...', delay: 3800, color: 'text-cyan-400' },
    { text: '🤖 Subagent [Reviewer]: Kiểm tra vùng an toàn 9:16 và sync nhạc... ĐẠT 100%', delay: 4600, color: 'text-emerald-400' },
    { text: '★ HOÀN THÀNH: File draft_content.json đã xuất vào CapCut Desktop!', delay: 5400, color: 'text-amber-300 font-bold' }
  ];

  let currentLine = 0;
  function printNext() {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      const p = document.createElement('div');
      p.className = `font-mono text-xs ${line.color} transition-all duration-300 opacity-0 transform translate-x-2`;
      p.innerText = line.text;
      terminalEl.appendChild(p);

      requestAnimationFrame(() => {
        p.classList.remove('opacity-0', 'translate-x-2');
      });

      terminalEl.scrollTop = terminalEl.scrollHeight;
      currentLine++;
      setTimeout(printNext, 900);
    } else {
      // Loop after 6s
      setTimeout(() => {
        terminalEl.innerHTML = '';
        currentLine = 0;
        printNext();
      }, 6000);
    }
  }

  printNext();
}

// Helpers
function formatVnd(num) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num).replace('₫', 'đ');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function copyText(text, successMsg = 'Đã copy vào clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, msg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(msg);
}

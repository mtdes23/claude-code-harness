const fs = require('fs');
const path = require('path');

const skillsDir = 'C:\\Users\\ThachMinhTri\\.gemini\\config\\skills';

const featuredSkillsMeta = {
  'capcut-draft-generator': {
    category: 'video',
    price: 299000,
    badge: 'Best Seller 🔥',
    icon: 'film',
    highlight: 'Tạo timeline CapCut đa track trực tiếp bằng code, mở máy là có sẵn dự án'
  },
  'vieneu-tts-v3-turbo': {
    category: 'audio',
    price: 299000,
    badge: 'Đột phá AI 🎙️',
    icon: 'mic',
    highlight: 'Giọng đọc Studio 48kHz chuẩn Bắc - Trung - Nam, chèn biểu cảm [cười], [thở dài]'
  },
  'cinematic-color-grading': {
    category: 'video',
    price: 249000,
    badge: 'Studio Grade 🎬',
    icon: 'palette',
    highlight: 'Color Space Transform, LUTs .cube, giả lập phim nhựa 35mm & Teal/Orange'
  },
  'full-stack-video-editor': {
    category: 'video',
    price: 299000,
    badge: 'All-in-One ⚡',
    icon: 'video',
    highlight: 'Quy trình dựng video chuẩn studio: Cắt thô, nhịp dựng, âm thanh 4 tầng, QC'
  },
  'agency-agents': {
    category: 'agents',
    price: 349000,
    badge: 'Siêu Hệ Thống 🤖',
    icon: 'users',
    highlight: 'Kho 268+ chuyên gia AI qua 18 phòng ban, khung điều phối đa tác tử NEXUS'
  },
  'ui-ux-pro-max': {
    category: 'design',
    price: 249000,
    badge: 'Design Leader 🎨',
    icon: 'layout',
    highlight: '79 styles thiết kế, 192 bảng màu, 119 UX guidelines & 17 GSAP presets'
  },
  'fish-s2': {
    category: 'audio',
    price: 199000,
    badge: 'Hot Voice 🔥',
    icon: 'volume-2',
    highlight: 'Fish Audio S2 voice cloning từ 5s audio mẫu, hỗ trợ streaming 80+ ngôn ngữ'
  },
  'blender-toolkit': {
    category: '3d',
    price: 249000,
    badge: '3D Automation 🧊',
    icon: 'box',
    highlight: 'Điều khiển Blender qua WebSocket, tự động map xương và retarget Mixamo'
  },
  'viral-video-scriptwriter': {
    category: 'video',
    price: 199000,
    badge: 'Viral Script ✍️',
    icon: 'feather',
    highlight: 'Hook giữ chân 3s, open loops, pattern interrupts và kịch bản có nhịp điệu'
  },
  'xspeedvn-tiktok-publisher': {
    category: 'agents',
    price: 249000,
    badge: 'Automation 🚀',
    icon: 'send',
    highlight: 'Đăng và hẹn giờ TikTok tự động 100%, custom thumbnail 9:16, chuẩn SEO'
  },
  'auto-subtitle': {
    category: 'video',
    price: 149000,
    badge: 'Tiện ích 🎯',
    icon: 'type',
    highlight: 'Tạo phụ đề tự động từng từ, hiệu ứng karaoke bắt mắt cho Reels/TikTok'
  },
  'sound-effects': {
    category: 'audio',
    price: 149000,
    badge: 'Foley AI 🎵',
    icon: 'music',
    highlight: 'Sinh hiệu ứng âm thanh whoosh, impact, cinematic ambience theo mô tả'
  },
  'react-bits': {
    category: 'design',
    price: 199000,
    badge: '200+ UI Components ✨',
    icon: 'code',
    highlight: '200+ linh kiện React hoạt họa cao cấp: Tailwind, Framer Motion & GSAP'
  },
  'tripo-3d-blender': {
    category: '3d',
    price: 199000,
    badge: 'Text-to-3D 🗿',
    icon: 'box',
    highlight: 'Biến ảnh và mô tả thành mô hình 3D hoàn chỉnh ngay trong Blender'
  },
  'video-qc-inspector': {
    category: 'video',
    price: 149000,
    badge: 'QC Inspector 🔍',
    icon: 'check-circle-2',
    highlight: 'Kiểm tra vùng an toàn 9:16, phát hiện chữ bị che khuất và lỗi hiển thị'
  },
  'auto-release-manager': {
    category: 'tools',
    price: 149000,
    badge: 'DevOps ⚙️',
    icon: 'git-branch',
    highlight: 'Tự động nâng version, tạo CHANGELOG, commit và release đa nền tảng'
  }
};

function categorize(id, name, desc) {
  if (featuredSkillsMeta[id]) return featuredSkillsMeta[id].category;
  const text = (id + ' ' + name + ' ' + desc).toLowerCase();
  if (text.includes('voice') || text.includes('tts') || text.includes('sound') || text.includes('audio') || text.includes('speech') || text.includes('sfx') || text.includes('music') || text.includes('whisper') || text.includes('elevenlabs')) {
    return 'audio';
  }
  if (text.includes('blender') || text.includes('3d') || text.includes('meshy') || text.includes('rodin') || text.includes('unity')) {
    return '3d';
  }
  if (text.includes('design') || text.includes('ui') || text.includes('ux') || text.includes('banner') || text.includes('slide') || text.includes('react-bits') || text.includes('css') || text.includes('canvas') || text.includes('apple-design') || text.includes('gsap')) {
    return 'design';
  }
  if (text.includes('video') || text.includes('capcut') || text.includes('remotion') || text.includes('cut') || text.includes('film') || text.includes('cinemat') || text.includes('color') || text.includes('subtitle') || text.includes('caption') || text.includes('broll') || text.includes('ffmpeg')) {
    return 'video';
  }
  if (text.includes('agent') || text.includes('workflow') || text.includes('copywriting') || text.includes('marketing') || text.includes('publish') || text.includes('tiktok')) {
    return 'agents';
  }
  return 'tools';
}

function cleanString(str) {
  if (!str) return '';
  return str.replace(/^["']|["']$/g, '').trim();
}

const dirs = fs.readdirSync(skillsDir);
const list = [];

for (const d of dirs) {
  const p = path.join(skillsDir, d, 'SKILL.md');
  if (!fs.existsSync(p)) continue;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    const nameMatch = raw.match(/^name:\s*(.+)$/m);
    const descMatch = raw.match(/^description:\s*(?:>-\s*|\s*)([\s\S]*?)(?=^---|\n[a-z_]+:)/m);
    const headingMatch = raw.match(/^#\s+(.+)$/m);

    let name = cleanString(nameMatch ? nameMatch[1] : d);
    let desc = cleanString(descMatch ? descMatch[1].replace(/\r?\n\s*/g, ' ') : '');
    let heading = cleanString(headingMatch ? headingMatch[1] : name);

    const isFeatured = !!featuredSkillsMeta[d];
    const category = categorize(d, name, desc);
    const meta = featuredSkillsMeta[d] || {};

    const price = meta.price || 149000;
    const badge = meta.badge || (isFeatured ? 'Khuyên Dùng ⭐' : 'Skill Chuẩn');
    const highlight = meta.highlight || (desc.length > 100 ? desc.slice(0, 100) + '...' : desc);

    list.push({
      id: d,
      name,
      heading,
      description: desc,
      highlight,
      category,
      price,
      badge,
      isFeatured,
      icon: meta.icon || (category === 'video' ? 'film' : category === 'audio' ? 'mic' : category === 'design' ? 'layout' : category === '3d' ? 'box' : category === 'agents' ? 'bot' : 'wrench')
    });
  } catch (e) {}
}

list.sort((a, b) => {
  if (a.isFeatured && !b.isFeatured) return -1;
  if (!a.isFeatured && b.isFeatured) return 1;
  return b.price - a.price;
});

// Write to skillsData.js to be easily imported via <script> tag without CORS issues when opened as file://
const jsContent = `window.SKILLS_CATALOG = ${JSON.stringify(list, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'skillsData.js'), jsContent, 'utf8');
console.log(`Generated skillsData.js with ${list.length} skills!`);

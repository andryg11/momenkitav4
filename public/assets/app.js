
const app = document.getElementById('app');
const STORE = {
  session:'mk_session_v3',
  users:'mk_users_v3',
  invitations:'mk_invitations_v3',
  packages:'mk_packages_v3',
  rsvps:'mk_rsvps_v3'
};

const A = {
  logo:'assets/logo-full.webp',
  favicon:'assets/favicon.png',
  landing:'assets/landing-ui.webp',
  wedding:'assets/tpl-wedding.webp',
  khitan:'assets/tpl-khitan.webp',
  aqiqah:'assets/tpl-aqiqah.webp',
  birthday:'assets/tpl-birthday.webp'
};

const editorMenus = [
  ['pengantin','👰','Pengantin / Data Utama'],
  ['acara','📅','Acara'],
  ['tema','🎨','Tema'],
  ['galeri','🖼️','Galeri'],
  ['musik','🎵','Musik'],
  ['amplop','💌','Amplop'],
  ['kado','🎁','Kado'],
  ['rsvp','✅','RSVP'],
  ['live','📺','Live Streaming'],
  ['kisah','💕','Kisah Cinta'],
  ['story','📱','Story IG'],
  ['quote','💬','Quote'],
  ['setting','⚙️','Setting'],
  ['buku','📖','Buku Tamu'],
  ['kirim','🚀','Kirim'],
  ['planner','🗓️','Event Planner']
];

const tplSeed = [
  ['Pernikahan','Wedding Luxury Gold','Nadya & Farel','Luxury Floral','Gold Rose', ['#fff7ee','#ead3a8','#8a6530'], 'assets/template-01-wedding-nadya-farel.webp', 'assets/template-01-wedding-nadya-farel-thumb.webp'],
  ['Pernikahan','Wedding Garden Sage','Dinda & Arfan','Garden Floral','Sage Green', ['#f7fbf5','#d7e5d2','#4f684d'], 'assets/template-02-wedding-garden.webp', 'assets/template-02-wedding-garden-thumb.webp'],
  ['Pernikahan','Wedding Javanese Classic','Safa & Aditya','Tradisional Elegan','Ivory Gold', ['#fffaf0','#e6d7b9','#6b5a3d'], 'assets/template-03-wedding-javanese.webp', 'assets/template-03-wedding-javanese-thumb.webp'],
  ['Khitanan','Khitanan Emerald Family','Zayan Al Fatih','Islami Family','Emerald Gold', ['#f8f2df','#d5bb75','#0f513f'], 'assets/template-04-khitan-zayan.webp', 'assets/template-04-khitan-zayan-thumb.webp'],
  ['Khitanan','Walimatul Khitan Gold','Zayan Al Fatih','Islamic Luxury','Deep Green', ['#fff5df','#d8b96b','#07513f'], 'assets/template-05-khitan-zayan-green.webp', 'assets/template-05-khitan-zayan-green-thumb.webp'],
  ['Khitanan','Khitanan Family Navy','Rasya Alfarel','Family Islamic','Navy Cream', ['#fff4df','#d9c39c','#1f405e'], 'assets/template-06-khitan-family.webp', 'assets/template-06-khitan-family-thumb.webp'],
  ['Aqiqah','Aqiqah Baby Blue','Baby Kenzie','Baby Islamic','Blue Gold', ['#f6fbff','#cdddf0','#2c587d'], 'assets/template-07-aqiqah-kenzie.webp', 'assets/template-07-aqiqah-kenzie-thumb.webp'],
  ['Aqiqah','Aqiqah Baby Pink','Baby Ameera','Baby Floral','Soft Pink', ['#fff6f7','#f0ccd4','#b66b7c'], 'assets/template-08-aqiqah-ameera.webp', 'assets/template-08-aqiqah-ameera-thumb.webp'],
  ['Ulang Tahun','Birthday Princess Pink','Naira','Princess Party','Pink Gold', ['#fff2f7','#f3c0ce','#c34f74'], 'assets/template-09-birthday-naira.webp', 'assets/template-09-birthday-naira-thumb.webp'],
  ['Ulang Tahun','Birthday Rainbow Party','Elora','Rainbow Kids','Candy Color', ['#fff2ff','#e6c5f7','#9c4bb1'], 'assets/template-10-birthday-elora.webp', 'assets/template-10-birthday-elora-thumb.webp'],

  ['Pernikahan','Wedding Blush Rose','Alya & Bagas','Floral','Rose', ['#fff7f8','#f1ced5','#9b5967'], null, null],
  ['Pernikahan','Wedding White Orchid','Meira & Alif','Orchid','White Gold', ['#ffffff','#efe5d5','#8b6b3f'], null, null],
  ['Pernikahan','Wedding Burgundy Night','Alma & Reno','Royal','Burgundy', ['#fff5f5','#e7c0c4','#6f2638'], null, null],
  ['Pernikahan','Wedding Blue Classic','Tiara & Fikri','Classic','Blue Gold', ['#f5f9ff','#ccdbee','#456584'], null, null],
  ['Pernikahan','Wedding Rustic Terracotta','Salsa & Dimas','Rustic','Terracotta', ['#fff4ed','#eec3a6','#a45b3e'], null, null],
  ['Khitanan','Khitanan Navy Modern','Aksa Pratama','Modern','Navy', ['#f6f8ff','#d2def2','#465f8c'], null, null],
  ['Khitanan','Khitanan Adventure Boy','Bima Adventure','Safari','Khaki', ['#fbfbef','#d7d8b7','#69704c'], null, null],
  ['Khitanan','Khitanan Blue Mosque','Daffa Alfarizqi','Islamic','Blue', ['#f4f9ff','#cfe2f5','#47709a'], null, null],
  ['Khitanan','Khitanan Cream Family','Rasya Family Day','Family','Cream', ['#fffaf3','#ead8bc','#8a704f'], null, null],
  ['Khitanan','Khitanan Dino Kids','Farzan Rayyan','Kids','Green', ['#f7fff6','#cde6c7','#4d7b47'], null, null],
  ['Aqiqah','Aqiqah Moonlight','Baby Nayla','Moon','Ivory', ['#fffdf7','#eee5d1','#8d7358'], null, null],
  ['Aqiqah','Aqiqah Cloud Baby','Baby Elvano','Cloud','Blue', ['#f8fbff','#d8e7f8','#5b789e'], null, null],
  ['Aqiqah','Aqiqah Floral Baby','Baby Keisha','Flower','Blush', ['#fff8f9','#efd3d8','#bd7484'], null, null],
  ['Aqiqah','Aqiqah Teddy Pastel','Baby Azka','Teddy','Beige', ['#fffaf4','#ebd7c0','#8f6d4e'], null, null],
  ['Aqiqah','Aqiqah Rose Baby','Baby Aleena','Rose','Pink', ['#fff7f9','#f1ccd7','#be687c'], null, null],
  ['Ulang Tahun','Princess Birthday','Naira Princess','Princess','Gold', ['#fff8fb','#efd1dd','#b36b83'], null, null],
  ['Ulang Tahun','Galaxy Kids Birthday','Raka Galaxy','Galaxy','Purple', ['#faf7ff','#d8c7ee','#7055a3'], null, null],
  ['Ulang Tahun','Rainbow Kids Party','Kaila Rainbow','Rainbow','Candy', ['#fff8f7','#f2cddf','#c9799b'], null, null],
  ['Ulang Tahun','Sweet Seventeen','Chika Sweet 17','Elegant','Rose', ['#fff7f8','#eecbd3','#b26878'], null, null],
  ['Ulang Tahun','Sporty Boy Birthday','Arka Sport Party','Sport','Blue', ['#f6fbff','#cee4f6','#4b789e'], null, null],
  ['Wisuda','Graduation Gold','Salsa Graduation','Formal','Black Gold', ['#fbfaf4','#e8ddbe','#67583b'], null, null],
  ['Wisuda','Scholar Blue','Rizka Wisuda','Academic','Blue', ['#f6f9ff','#d5e3f8','#526fa3'], null, null],
  ['Wisuda','Prestige Maroon','Nadira Graduation','Formal','Maroon', ['#fff7f7','#e8c8ce','#824653'], null, null],
  ['Wisuda','Soft Graduation','Zafira Scholar Day','Photo','Soft Pink', ['#fff8fa','#eecbd8','#b76f83'], null, null],
  ['Lamaran','Engagement Rose','Rania & Gilang','Romantic','Dusty Rose', ['#fff7f7','#eecdd3','#ad6877'], null, null],
  ['Lamaran','Mauve Intimate','Safa & Adit','Soft','Mauve', ['#fdf8ff','#e4cde2','#946a8f'], null, null],
  ['Lamaran','Ivory Floral Lamaran','Dina & Arman','Floral','Ivory', ['#fffdf7','#eadfca','#8b7154'], null, null],
  ['Syukuran','Syukuran Rumah','Family Home','Homey','Warm', ['#fff8f1','#e7cbb0','#8a5f46'], null, null],
  ['Syukuran','Tasyakuran Umrah','Keluarga Besar','Minimal','Earthy', ['#fbfaf4','#ded7bd','#70684c'], null, null],
  ['Syukuran','Family Day Syukuran','Tebar Syukur','Natural','Blush', ['#fff8f8','#eacfd0','#a36b6d'], null, null],
  ['Pengajian','Majelis Ilmu','An-Nur Invitation','Islamic','White', ['#ffffff','#eee7e7','#756265'], null, null],
  ['Pengajian','Muslimah Lily','Kajian Muslimah','Soft','Lily', ['#fffdf8','#e8ddca','#867054'], null, null],
  ['Pengajian','Doa Bersama','Doa & Syukur','Classic','Cream', ['#fffaf2','#ead8bd','#84694c'], null, null],
  ['Halal Bihalal','Lebaran Sage','Keluarga Harmoni','Lebaran','Sage', ['#f8fbf8','#d8e5d7','#5f7c62'], null, null],
  ['Halal Bihalal','Traditional Eid','Silaturahmi Akbar','Tradisi','Gold', ['#fff9ed','#e7cd99','#856336'], null, null],
  ['Halal Bihalal','Family Eid','Halal Bihalal 2026','Family','Ivory', ['#fffdf6','#e8dfcb','#7d684d'], null, null],
  ['Buka Bersama','Ramadan Emerald','Bukber Keluarga','Moon','Emerald', ['#f7fbf8','#cfe2d3','#35654d'], null, null],
  ['Buka Bersama','Navy Ramadan','Buka Puasa Team','Formal','Navy', ['#f5f8ff','#cdd9ed','#485f89'], null, null],
  ['Buka Bersama','Warm Iftar','Iftar Gathering','Warm','Cream', ['#fff8ef','#ead4b7','#8e6747'], null, null],
  ['Baby Shower','Cloudy Baby Shower','Baby Shower Aurel','Cloud','Blue', ['#f7fbff','#d8e7f6','#587a9e'], null, null],
  ['Baby Shower','Teddy Baby Shower','Baby Shower Kira','Teddy','Pastel', ['#fff8f8','#efd2d5','#ad6f78'], null, null]
];

const templates = tplSeed.map((x,i)=>({
  id:`tpl-${String(i+1).padStart(2,'0')}`,
  category:x[0], name:x[1], title:x[2], style:x[3], mood:x[4], colors:x[5],
  image:x[6] || null,
  thumb:x[7] || x[6] || null,
  premium:i>7
}));

const defaultInvitation = {
  category:'Pernikahan',
  templateId:'tpl-01',
  packageId:'premium',
  status:'Draft',
  title:'Anisa & Rizky',
  slug:'anisa-rizky',
  cover:'The Wedding Of',
  opening:'Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara bahagia kami.',
  person1Name:'Anisa Putri',
  person1Sub:'Putri dari Bapak Ahmad & Ibu Siti',
  person1Ig:'@anisa',
  person2Name:'Rizky Pratama',
  person2Sub:'Putra dari Bapak Rahman & Ibu Dewi',
  person2Ig:'@rizky',
  quote:'Merupakan kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
  music:'Beautiful in White',
  maps:'https://maps.google.com/',
  youtube:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  bank:'BCA 1234567890 a.n Anisa Putri',
  gift:'Jl. Melati No. 10, Jakarta Selatan',
  live:'https://youtube.com/live/demo',
  story:'Pertemuan pertama kami dimulai dari perkenalan sederhana yang kemudian menjadi cerita indah.',
  setting:{countdown:true,private:false,musicAuto:true},
  events:[
    {id:'evt_1',name:'Akad Nikah',place:'Gedung Serbaguna Harmoni',address:'Jl. Mawar No. 12, Jakarta Selatan',date:'2026-06-25',start:'08:00',end:'10:00',tz:'WIB'},
    {id:'evt_2',name:'Resepsi',place:'Gedung Serbaguna Harmoni',address:'Jl. Mawar No. 12, Jakarta Selatan',date:'2026-06-25',start:'11:00',end:'14:00',tz:'WIB'}
  ],
  gallery:[],
  guests:[
    {id:'gst_1',name:'Bapak/Ibu/Saudara/i',phone:'',status:'Belum dikirim'},
    {id:'gst_2',name:'Andry Gunawan',phone:'',status:'Belum dikirim'}
  ],
  rsvps:[],
  planner:[
    {id:'pln_1',task:'Siapkan data acara',done:true},
    {id:'pln_2',task:'Pilih tema undangan',done:false},
    {id:'pln_3',task:'Upload foto galeri',done:false}
  ]
};

function get(k,f){ try{return JSON.parse(localStorage.getItem(k)) ?? f}catch{return f} }
function set(k,v){ localStorage.setItem(k,JSON.stringify(v)) }
function uid(p='id'){ return `${p}_${Date.now()}_${Math.random().toString(16).slice(2,7)}` }
function user(){ const s=get(STORE.session,null); return s ? get(STORE.users,[]).find(u=>u.email===s.email) : null }
function toast(m){ const el=document.getElementById('toast'); el.textContent=m; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2400) }
function money(n){ return 'Rp ' + Number(n||0).toLocaleString('id-ID') }
function esc(s){ return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])) }
function hash(){ return location.hash.replace(/^#\/?/,'') || 'home' }
function params(){ return Object.fromEntries(new URLSearchParams((location.hash.split('?')[1]||''))) }
function requireAuth(){ if(!user()){ location.hash='#/login'; return false } return true }

function init(){
  if(!get(STORE.users,null)) set(STORE.users,[{name:'Demo Admin',email:'admin@momenkita.local',pass:'admin123',role:'admin'}]);
  if(!get(STORE.packages,null)) set(STORE.packages,[
    {id:'free',name:'Gratisan',normal:0,promo:0,duration:7,photo:3,features:['Preview undangan','3 foto','Watermark MomenKita']},
    {id:'basic',name:'Basic',normal:79000,promo:49000,duration:30,photo:6,features:['6 foto','RSVP','Google Maps','Share WhatsApp']},
    {id:'premium',name:'Premium',normal:149000,promo:99000,duration:180,photo:12,features:['12 foto','Musik','Amplop','Kado','Tema premium']},
    {id:'exclusive',name:'Exclusive',normal:249000,promo:149000,duration:365,photo:30,features:['30 foto','Live streaming','Buku tamu','Support prioritas']}
  ]);
  if(!get(STORE.invitations,null)) set(STORE.invitations,[]);
  if(!get(STORE.rsvps,null)) set(STORE.rsvps,{});
}

function logo(){ return `<a class="logo" href="#/home"><img src="${A.logo}" alt="MomenKita"></a>` }
function landingHeader(){
  return `<header class="appbar"><div class="container navrow">${logo()}<nav class="nav"><a href="#/home">Beranda</a><a href="#/templates">Tema</a><a href="#/pricing">Harga</a><a href="#/home#cara">Cara Kerja</a><a href="#/login">Login</a></nav><div class="nav-actions"><a class="btn btn-soft" href="#/login">Masuk</a><a class="btn btn-primary" href="#/setup/invitation">Buat Undangan</a></div></div></header>`
}

function home(){
  app.innerHTML = `${landingHeader()}
  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="pill">Aplikasi Undangan Digital</span>
          <h1>Buat undangan digital profesional dengan <span>dashboard editor lengkap</span></h1>
          <p class="lead">MomenKita dibuat ulang sebagai aplikasi, bukan landing page biasa. Mulai dari login, isi data, pilih paket, edit tema, kelola tamu, RSVP, musik, amplop, kado, hingga share WhatsApp.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#/setup/invitation">Buat Undangan Baru</a><a class="btn btn-soft" href="#/templates">Lihat Tema</a></div>
          <div class="hero-stats"><div class="stat"><b>50</b><span>Tema mockup HP</span></div><div class="stat"><b>16</b><span>Menu editor</span></div><div class="stat"><b>WA</b><span>Share tamu personal</span></div></div>
        </div>
        <div class="preview-card"><img src="${A.landing}" alt="Preview aplikasi MomenKita"></div>
      </div>
    </section>
    <section class="section" id="cara">
      <div class="container">
        <div class="section-head center"><span class="pill">Alur Aplikasi</span><h2>Flow seperti aplikasi undangan profesional</h2></div>
        <div class="grid g3">
          ${step(1,'Login / Daftar','Pembeli masuk melalui email atau simulasi Google login.')}
          ${step(2,'Setup Data','Isi data awal undangan sebelum memilih paket.')}
          ${step(3,'Pilih Paket','Pilih paket Gratisan, Basic, Premium, atau Exclusive.')}
          ${step(4,'Dashboard','Masuk ke dashboard dengan sidebar dan daftar undangan.')}
          ${step(5,'Editor Lengkap','Kelola Pengantin, Acara, Tema, Galeri, Musik, RSVP, dan lainnya.')}
          ${step(6,'Kirim Undangan','Generate link personal tamu dan share WhatsApp.')}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-head center"><span class="pill">Menu Editor</span><h2>Setiap fitur punya halaman sendiri</h2></div>
        <div class="menu-grid">${editorMenus.map(m=>`<div class="menu-card"><div class="mi">${m[1]}</div><b>${m[2]}</b></div>`).join('')}</div>
      </div>
    </section>
  </main>`;
}

function step(n,t,d){ return `<article class="card step-card" data-step="${n}"><h3>${t}</h3><p>${d}</p></article>` }

function login(){
  app.innerHTML = `<div class="auth-shell">
    <div class="auth-left"><img src="${A.landing}" alt="Preview"></div>
    <div class="auth-card">
      <div class="logo"><img src="${A.logo}" alt="MomenKita"></div>
      <h1>Masuk ke MomenKita</h1>
      <p style="color:var(--muted)">Gunakan email atau tombol Google demo untuk masuk.</p>
      <div class="form">
        <button class="btn btn-soft" onclick="googleDemo()">🌐 Masuk dengan Google</button>
        <div class="divider">atau</div>
        <div class="field"><label>Email</label><input id="email" value="admin@momenkita.local"></div>
        <div class="field"><label>Password</label><input id="pass" type="password" value="admin123"></div>
        <button class="btn btn-primary" onclick="doLogin()">Masuk</button>
        <p style="color:var(--muted);font-size:14px">Belum punya akun? <a href="#/register"><b>Daftar sekarang</b></a></p>
      </div>
    </div>
  </div>`;
}

function register(){
  app.innerHTML = `<div class="auth-shell">
    <div class="auth-left"><img src="${A.landing}" alt="Preview"></div>
    <div class="auth-card">
      <div class="logo"><img src="${A.logo}" alt="MomenKita"></div>
      <h1>Buat Akun</h1>
      <p style="color:var(--muted)">Setelah daftar, kamu akan diarahkan ke setup data undangan.</p>
      <div class="form">
        <button class="btn btn-soft" onclick="googleDemo(true)">🌐 Daftar dengan Google</button>
        <div class="divider">atau</div>
        <div class="field"><label>Nama</label><input id="name" placeholder="Nama kamu"></div>
        <div class="field"><label>Email</label><input id="email" placeholder="email@gmail.com"></div>
        <div class="field"><label>Password</label><input id="pass" type="password" placeholder="Minimal 6 karakter"></div>
        <button class="btn btn-primary" onclick="doRegister()">Daftar</button>
      </div>
    </div>
  </div>`;
}

window.doLogin = function(){
  const email=document.getElementById('email').value.trim();
  const pass=document.getElementById('pass').value;
  const u=get(STORE.users,[]).find(x=>x.email===email && x.pass===pass);
  if(!u) return toast('Email atau password salah');
  set(STORE.session,{email}); toast('Berhasil masuk'); location.hash='#/dashboard';
}
window.doRegister = function(){
  const name=document.getElementById('name').value.trim()||'User MomenKita';
  const email=document.getElementById('email').value.trim();
  const pass=document.getElementById('pass').value;
  if(!email || !pass) return toast('Email dan password wajib diisi');
  const users=get(STORE.users,[]);
  if(users.some(x=>x.email===email)) return toast('Email sudah terdaftar');
  users.push({name,email,pass,role:'user'}); set(STORE.users,users); set(STORE.session,{email});
  toast('Akun dibuat'); location.hash='#/setup/invitation';
}
window.googleDemo = function(isReg=false){
  const email='google.user@momenkita.local';
  const users=get(STORE.users,[]);
  if(!users.some(x=>x.email===email)){ users.push({name:'Google User Demo',email,pass:'google',role:'user'}); set(STORE.users,users); }
  set(STORE.session,{email}); toast('Masuk dengan Google demo'); location.hash=isReg?'#/setup/invitation':'#/dashboard';
}

function setupTop(active=1){ return `<div class="setup-page"><div class="setup-top"><div class="container">${logo()}</div></div><div class="setup-wrap"><div class="stepper"><div class="step-pill ${active===1?'active':''}">1. Isi Data</div><div class="step-pill ${active===2?'active':''}">2. Pilih Paket</div><div class="step-pill ${active===3?'active':''}">3. Dashboard</div></div>` }
function setupInvitation(){
  if(!requireAuth()) return;
  const draft=get('mk_setup_draft',defaultInvitation);
  app.innerHTML = `${setupTop(1)}
    <div class="card card-pad">
      <span class="pill">Setup Invitation</span>
      <h2 style="font-family:Georgia,serif;margin:12px 0 6px">Lengkapi data undangan awal</h2>
      <p style="color:var(--muted)">Data ini bisa diubah lagi nanti di dashboard editor.</p>
      <div class="form-grid">
        ${input('Judul Undangan','title',draft.title)}
        <div class="field"><label>Kategori</label><select id="category">${['Pernikahan','Khitanan','Aqiqah','Ulang Tahun','Wisuda','Lamaran','Syukuran'].map(c=>`<option ${draft.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
        ${input('Nama utama / mempelai 1 / anak','person1Name',draft.person1Name)}
        ${input('Nama kedua / mempelai 2 / orang tua','person2Name',draft.person2Name)}
        ${input('Tanggal acara','date',draft.events?.[0]?.date || '2026-06-25','date')}
        ${input('Lokasi / gedung','place',draft.events?.[0]?.place || 'Gedung Serbaguna Harmoni')}
        <div class="field full"><label>Kalimat pembuka</label><textarea id="opening">${esc(draft.opening)}</textarea></div>
      </div>
      <div class="actions" style="margin-top:18px"><button class="btn btn-primary" onclick="saveSetupData()">Lanjut Pilih Paket</button><a class="btn btn-soft" href="#/dashboard">Lewati</a></div>
    </div></div></div>`;
}
function input(label,id,value,type='text'){ return `<div class="field"><label>${label}</label><input id="${id}" type="${type}" value="${esc(value||'')}"></div>` }
window.saveSetupData=function(){
  const d={...defaultInvitation};
  d.title=document.getElementById('title').value;
  d.category=document.getElementById('category').value;
  d.person1Name=document.getElementById('person1Name').value;
  d.person2Name=document.getElementById('person2Name').value;
  d.opening=document.getElementById('opening').value;
  d.events[0].date=document.getElementById('date').value;
  d.events[0].place=document.getElementById('place').value;
  d.slug=d.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'undangan';
  const matched=templates.find(t=>t.category===d.category); if(matched) d.templateId=matched.id;
  set('mk_setup_draft',d); location.hash='#/setup/subscribe';
}

function subscribe(){
  if(!requireAuth()) return;
  const packages=get(STORE.packages,[]);
  app.innerHTML=`${setupTop(2)}
    <div class="section-head"><div><span class="pill">Pilih Paket</span><h2>Pilih paket untuk mengaktifkan undangan</h2><p>Di versi demo, tombol pilih paket langsung membuat undangan tanpa pembayaran.</p></div></div>
    <div class="grid g4">${packages.map(p=>`<article class="card card-pad">
      <span class="pill">${p.name}</span>
      <h3 style="font-size:34px;font-family:Georgia,serif;margin:14px 0 4px">${money(p.promo)}</h3>
      ${p.normal>p.promo?`<div style="color:var(--muted);text-decoration:line-through">${money(p.normal)}</div>`:''}
      <p>Durasi ${p.duration} hari • ${p.photo} foto</p>
      <ul style="color:var(--muted);line-height:1.9;padding-left:20px">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
      <button class="btn btn-primary" onclick="activatePackage('${p.id}')">Pilih Paket</button>
    </article>`).join('')}</div>
  </div></div>`;
}
window.activatePackage=function(pid){
  const u=user(); const d=get('mk_setup_draft',defaultInvitation);
  const inv={...d, id:uid('inv'), owner:u.email, packageId:pid, status:'Aktif', createdAt:new Date().toISOString()};
  const all=get(STORE.invitations,[]); all.push(inv); set(STORE.invitations,all); localStorage.removeItem('mk_setup_draft');
  toast('Undangan berhasil dibuat'); location.hash=`#/dashboard/invitation/${inv.id}`;
}

function shell(content, active='home'){
  const u=user();
  app.innerHTML=`<div class="app-layout">
    <aside class="sidebar">
      <div class="side-logo"><img src="${A.logo}" alt="MomenKita"></div>
      <nav class="side-nav">
        <a class="btn ${active==='home'?'active':''}" href="#/dashboard">🏠 Home</a>
        <a class="btn ${active==='undangan'?'active':''}" href="#/dashboard/invitation">💌 Undangan</a>
        <a class="btn ${active==='transaksi'?'active':''}" href="#/dashboard/transactions">💳 Transaksi</a>
        <a class="btn ${active==='cs'?'active':''}" href="#/dashboard/support">🎧 Customer Service</a>
      </nav>
      <div class="side-footer">
        <b>${esc(u?.name||'User')}</b><br>${esc(u?.email||'')}<br><br>
        <button class="btn btn-soft" onclick="logout()">Keluar</button>
      </div>
    </aside>
    <main class="main"><div class="main-inner">${content}</div></main>
  </div>`;
}
window.logout=function(){ localStorage.removeItem(STORE.session); toast('Keluar'); location.hash='#/home' }

function myInv(){ const u=user(); return get(STORE.invitations,[]).filter(i=>i.owner===u.email) }
function dashboard(){
  if(!requireAuth()) return;
  const list=myInv();
  shell(`
    <div class="notice">Email belum diverifikasi. <button class="btn btn-soft" onclick="toast('Email verifikasi demo terkirim')">Kirim ulang verifikasi</button></div>
    <div class="page-title"><div><h1>Dashboard</h1><p>Selamat datang di MomenKita. Kelola semua undangan digital kamu di sini.</p></div><a class="btn btn-primary" href="#/setup/invitation">+ Buat Undangan Baru</a></div>
    <div class="dash-grid">
      <div class="card card-pad">
        <h3>Undangan milikmu</h3>
        <div class="list">${list.length?list.map(invRow).join(''):'<div class="empty">Belum ada undangan. Klik Buat Undangan Baru.</div>'}</div>
      </div>
      <div class="grid">
        <div class="quick"><div class="icon">📷</div><div><b>Buka QR Code Scanner</b><p style="margin:4px 0 0;color:var(--muted)">Scan tamu yang hadir.</p></div></div>
        <div class="quick"><div class="icon">📊</div><div><b>Statistik RSVP</b><p style="margin:4px 0 0;color:var(--muted)">Pantau konfirmasi tamu.</p></div></div>
        <div class="quick"><div class="icon">🎧</div><div><b>Butuh bantuan?</b><p style="margin:4px 0 0;color:var(--muted)">Hubungi customer service.</p></div></div>
      </div>
    </div>
  `,'home');
}
function invRow(i){
  return `<div class="row"><div><b>${esc(i.title)}</b><small>${esc(i.category)} • ${esc(i.status)} • Paket ${esc(i.packageId)}</small></div><div class="actions"><a class="btn btn-soft" href="#/invite/${i.id}">Preview</a><a class="btn btn-primary" href="#/dashboard/invitation/${i.id}">Editing</a></div></div>`
}
function invitationList(){
  if(!requireAuth()) return;
  const list=myInv();
  shell(`<div class="page-title"><div><h1>Undangan</h1><p>Daftar semua undangan digital yang kamu buat.</p></div><a class="btn btn-primary" href="#/setup/invitation">+ Buat Undangan</a></div>
  <div class="card card-pad"><div class="list">${list.length?list.map(invRow).join(''):'<div class="empty">Belum ada undangan.</div>'}</div></div>`,'undangan');
}
function transactions(){
  if(!requireAuth()) return;
  shell(`<div class="page-title"><div><h1>Transaksi</h1><p>Riwayat pembayaran paket undangan.</p></div></div>
  <div class="card card-pad"><div class="row"><div><b>Premium</b><small>Demo transaksi • status paid</small></div><b>${money(99000)}</b></div></div>`,'transaksi');
}
function support(){
  if(!requireAuth()) return;
  shell(`<div class="page-title"><div><h1>Customer Service</h1><p>Bantuan untuk pengguna MomenKita.</p></div></div>
  <div class="card card-pad"><h3>Hubungi kami</h3><p>WhatsApp CS: 0812 3456 7890</p><button class="btn btn-primary" onclick="window.open('https://wa.me/6281234567890','_blank')">Chat WhatsApp</button></div>`,'cs');
}

function getInv(id){ return get(STORE.invitations,[]).find(x=>x.id===id) }
function saveInv(inv){ const all=get(STORE.invitations,[]); const idx=all.findIndex(x=>x.id===inv.id); if(idx>=0) all[idx]=inv; set(STORE.invitations,all); }
function editor(id, section='menu'){
  if(!requireAuth()) return;
  const inv=getInv(id); if(!inv) return shell(`<div class="empty">Undangan tidak ditemukan.</div>`,'undangan');
  const content = section==='menu' ? editorMenu(inv) : editorSection(inv,section);
  shell(`<div class="page-title"><div><h1>Edit Undangan</h1><p>${esc(inv.title)} • <span class="pill">${esc(inv.packageId)}</span></p></div><div class="actions"><a class="btn btn-soft" href="#/invite/${inv.id}">Preview</a><button class="btn btn-primary" onclick="publishInv('${inv.id}')">Publish</button></div></div>${content}`,'undangan');
}
window.publishInv=function(id){ const inv=getInv(id); inv.status='Published'; saveInv(inv); toast('Undangan dipublish'); render(); }

function editorMenu(inv){
  return `<div class="editor-grid">
    <div>
      <div class="notice">Pilih menu untuk mengedit bagian undangan. Semua perubahan otomatis tersimpan pada localStorage.</div>
      <div class="menu-grid">${editorMenus.map(m=>`<a class="menu-card" href="#/dashboard/invitation/${inv.id}/${m[0]}"><div class="mi">${m[1]}</div><b>${m[2]}</b></a>`).join('')}</div>
    </div>
    <aside class="preview-panel"><div class="card card-pad"><h3>Preview Live</h3><div class="preview-phone"><div class="preview-screen">${publicInviteMarkup(inv,true)}</div></div></div></aside>
  </div>`;
}

function editorSection(inv,section){
  const title=editorMenus.find(m=>m[0]===section)?.[2] || 'Editor';
  return `<div class="editor-grid">
    <div>
      <div class="tabs"><a class="tab" href="#/dashboard/invitation/${inv.id}">← Semua Menu</a>${editorMenus.slice(0,8).map(m=>`<a class="tab ${m[0]===section?'active':''}" href="#/dashboard/invitation/${inv.id}/${m[0]}">${m[1]} ${m[2].split('/')[0]}</a>`).join('')}</div>
      <div class="card card-pad"><span class="pill">${title}</span>${sectionContent(inv,section)}</div>
    </div>
    <aside class="preview-panel"><div class="card card-pad"><h3>Preview</h3><div class="preview-phone"><div class="preview-screen">${publicInviteMarkup(inv,true)}</div></div></div></aside>
  </div>`;
}

function saveField(id, key){
  const inv=getInv(id); inv[key]=document.getElementById(key).value; saveInv(inv); toast('Tersimpan'); render();
}
window.saveMain=function(id){
  const inv=getInv(id); ['title','cover','person1Name','person1Sub','person1Ig','person2Name','person2Sub','person2Ig','opening'].forEach(k=>inv[k]=document.getElementById(k).value); saveInv(inv); toast('Data utama tersimpan'); render();
}
function sectionContent(inv,s){
  if(s==='pengantin') return `<h2 style="font-family:Georgia,serif;margin:12px 0">Data Utama</h2><div class="form-grid">
    ${input('Judul Undangan','title',inv.title)}${input('Cover','cover',inv.cover)}
    ${input('Mempelai / Nama 1','person1Name',inv.person1Name)}${input('Subtitle 1','person1Sub',inv.person1Sub)}
    ${input('Instagram 1','person1Ig',inv.person1Ig)}${input('Mempelai / Nama 2','person2Name',inv.person2Name)}
    ${input('Subtitle 2','person2Sub',inv.person2Sub)}${input('Instagram 2','person2Ig',inv.person2Ig)}
    <div class="field full"><label>Pembuka</label><textarea id="opening">${esc(inv.opening)}</textarea></div>
  </div><button class="btn btn-primary" onclick="saveMain('${inv.id}')">Simpan Data</button>`;
  if(s==='acara') return eventEditor(inv);
  if(s==='tema') return themeEditor(inv);
  if(s==='galeri') return simpleTextarea(inv,'galleryText','Galeri','Masukkan catatan/nama foto galeri. Upload foto asli akan memakai Cloudflare R2 pada versi produksi.');
  if(s==='musik') return simpleInput(inv,'music','Musik','Judul musik / URL musik');
  if(s==='amplop') return simpleInput(inv,'bank','Amplop Digital','Nomor rekening / e-wallet');
  if(s==='kado') return simpleInput(inv,'gift','Kado','Alamat pengiriman kado');
  if(s==='rsvp') return rsvpEditor(inv);
  if(s==='live') return simpleInput(inv,'live','Live Streaming','Link YouTube/Zoom live streaming');
  if(s==='kisah') return simpleTextarea(inv,'story','Kisah Cinta','Tulis cerita singkat perjalanan cinta.');
  if(s==='story') return simpleInput(inv,'storyIg','Story IG','Link/teks Story Instagram');
  if(s==='quote') return simpleTextarea(inv,'quote','Quote','Tulis quote undangan.');
  if(s==='setting') return settingsEditor(inv);
  if(s==='buku') return guestBook(inv);
  if(s==='kirim') return sendEditor(inv);
  if(s==='planner') return plannerEditor(inv);
  return `<p>Menu belum tersedia.</p>`;
}
function simpleInput(inv,key,title,placeholder){ return `<h2 style="font-family:Georgia,serif;margin:12px 0">${title}</h2><div class="field"><label>${placeholder}</label><input id="${key}" value="${esc(inv[key]||'')}"></div><button class="btn btn-primary" onclick="saveField('${inv.id}','${key}')">Simpan</button>` }
function simpleTextarea(inv,key,title,placeholder){ return `<h2 style="font-family:Georgia,serif;margin:12px 0">${title}</h2><div class="field"><label>${placeholder}</label><textarea id="${key}">${esc(inv[key]||'')}</textarea></div><button class="btn btn-primary" onclick="saveField('${inv.id}','${key}')">Simpan</button>` }

function eventEditor(inv){
  return `<h2 style="font-family:Georgia,serif;margin:12px 0">Jadwal Acara</h2><p>Konfigurasi hitung mundur otomatis: <b>${inv.setting?.countdown?'ON':'OFF'}</b></p>
  <button class="btn btn-primary" onclick="openEventModal('${inv.id}')">+ Tambah Acara</button><div style="height:14px"></div>
  <div class="list">${(inv.events||[]).map(e=>`<div class="row"><div><b>${esc(e.name)}</b><small>${esc(e.place)} • ${esc(e.date)} • ${esc(e.start)}-${esc(e.end)} ${esc(e.tz)}</small></div><button class="btn btn-danger" onclick="deleteEvent('${inv.id}','${e.id}')">Hapus</button></div>`).join('')}</div>`;
}
window.openEventModal=function(id){
  const modal=document.createElement('div'); modal.className='modal open'; modal.innerHTML=`<div class="backdrop" onclick="this.parentElement.remove()"></div><div class="dialog"><div class="dialog-head"><b>Tambah Acara</b><button class="close" onclick="this.closest('.modal').remove()">×</button></div><div class="dialog-body"><div class="form-grid">
  ${input('Nama acara','evName','Akad Nikah')}${input('Nama lokasi / gedung','evPlace','Gedung Serbaguna')}
  <div class="field full"><label>Alamat</label><input id="evAddress" value="Jl. Mawar No. 12, Jakarta Selatan"></div>
  ${input('Tanggal acara','evDate','2026-06-25','date')}${input('Jam mulai','evStart','08:00','time')}${input('Jam selesai','evEnd','10:00','time')}
  <div class="field"><label>Zona waktu</label><select id="evTz"><option>WIB</option><option>WITA</option><option>WIT</option></select></div>
  </div><button class="btn btn-primary" onclick="addEvent('${id}')">Simpan Acara</button></div></div>`; document.body.appendChild(modal);
}
window.addEvent=function(id){ const inv=getInv(id); inv.events=inv.events||[]; inv.events.push({id:uid('evt'),name:evName.value,place:evPlace.value,address:evAddress.value,date:evDate.value,start:evStart.value,end:evEnd.value,tz:evTz.value}); saveInv(inv); document.querySelector('.modal')?.remove(); toast('Acara ditambahkan'); render(); }
window.deleteEvent=function(id,eid){ const inv=getInv(id); inv.events=inv.events.filter(e=>e.id!==eid); saveInv(inv); toast('Acara dihapus'); render(); }

function themeEditor(inv){
  return `<h2 style="font-family:Georgia,serif;margin:12px 0">Pilih Tema</h2><div class="grid g3">${templates.map(t=>`<article class="card"><div class="template-thumb no-mockup">${templateVisual(t)}</div><div class="tpl-body"><h3>${t.name}</h3><p>${t.category} • ${t.premium?'Premium':'Gratis'}</p><div class="tpl-actions"><button class="btn ${inv.templateId===t.id?'btn-green':'btn-primary'}" onclick="activateTheme('${inv.id}','${t.id}')">${inv.templateId===t.id?'Tema Aktif':'Aktifkan'}</button><button class="btn btn-soft" onclick="previewTheme('${t.id}')">Demo</button></div></div></article>`).join('')}</div>`;
}
window.activateTheme=function(id,tid){ const inv=getInv(id); inv.templateId=tid; saveInv(inv); toast('Tema diaktifkan'); render(); }
window.previewTheme=function(tid){ const t=templates.find(x=>x.id===tid); const inv={...defaultInvitation,templateId:tid,title:t.title,category:t.category}; const modal=document.createElement('div'); modal.className='modal open'; modal.innerHTML=`<div class="backdrop" onclick="this.parentElement.remove()"></div><div class="dialog"><div class="dialog-head"><b>Demo Tema: ${t.name}</b><button class="close" onclick="this.closest('.modal').remove()">×</button></div><div class="dialog-body">${publicInviteMarkup(inv,false)}</div></div>`; document.body.appendChild(modal); }

function templateVisual(t){
  if(t.thumb) return `<img class="full-template-preview" src="${t.thumb}" alt="${esc(t.name)}">`;
  const styleClass = templateStyleClass(t.category);
  return `<div class="real-template ${styleClass}" style="--c1:${t.colors[0]};--c2:${t.colors[1]};--ct:${t.colors[2]}">
    <div class="rt-orn rt-o1"></div>
    <div class="rt-orn rt-o2"></div>
    <div class="rt-orn rt-o3"></div>
    <div class="rt-badge">${esc(t.category)}</div>
    <div class="rt-title">${esc(t.title)}</div>
    <div class="rt-date">25 • 06 • 2026</div>
    <div class="rt-info">
      <span>📅 Detail</span>
      <span>📍 Lokasi</span>
    </div>
    <div class="rt-person-area">
      <div class="rt-person rt-p1"></div>
      <div class="rt-person rt-p2"></div>
    </div>
    <div class="rt-button">Buka Undangan</div>
  </div>`;
}
function templateStyleClass(category){
  if(category === 'Pernikahan' || category === 'Lamaran' || category === 'Anniversary') return 'style-wedding';
  if(category === 'Khitanan' || category === 'Pengajian' || category === 'Buka Bersama' || category === 'Halal Bihalal') return 'style-khitan';
  if(category === 'Aqiqah' || category === 'Baby Shower') return 'style-aqiqah';
  if(category === 'Ulang Tahun') return 'style-birthday';
  return 'style-formal';
}

function rsvpEditor(inv){
 const r=get(STORE.rsvps,{})[inv.id]||[];
 return `<h2 style="font-family:Georgia,serif;margin:12px 0">RSVP</h2><p>Daftar konfirmasi kehadiran tamu.</p><div class="list">${r.length?r.map(x=>`<div class="row"><div><b>${esc(x.name)}</b><small>${esc(x.status)} • ${esc(x.message)}</small></div></div>`).join(''):'<div class="empty">Belum ada RSVP.</div>'}</div>`;
}
function guestBook(inv){ return rsvpEditor(inv).replace('RSVP','Buku Tamu'); }

function sendEditor(inv){
 const host=location.origin+location.pathname;
 return `<h2 style="font-family:Georgia,serif;margin:12px 0">Kirim Undangan</h2><div class="form-grid">
  ${input('Nama tamu','guestName','Bapak/Ibu/Saudara/i')}${input('Nomor WhatsApp','guestPhone','')}
  </div><button class="btn btn-primary" onclick="addGuest('${inv.id}')">Tambah Tamu</button><div style="height:16px"></div>
  <div class="list">${(inv.guests||[]).map(g=>{ const link=`${host}#/invite/${inv.id}?to=${encodeURIComponent(g.name)}`; const wa=`https://wa.me/${(g.phone||'').replace(/[^0-9]/g,'')}?text=${encodeURIComponent('Assalamu’alaikum, kami mengundang '+g.name+' untuk hadir di acara '+inv.title+'. Link undangan: '+link)}`; return `<div class="row"><div><b>${esc(g.name)}</b><small class="code">${link}</small></div><div class="actions"><button class="btn btn-soft" onclick="copy('${link}')">Copy</button><a class="btn btn-primary" target="_blank" href="${wa}">WhatsApp</a></div></div>`}).join('')}</div>`;
}
window.addGuest=function(id){ const inv=getInv(id); inv.guests=inv.guests||[]; inv.guests.push({id:uid('gst'),name:guestName.value,phone:guestPhone.value,status:'Belum dikirim'}); saveInv(inv); toast('Tamu ditambahkan'); render(); }
window.copy=function(txt){ navigator.clipboard?.writeText(txt); toast('Link disalin'); }

function settingsEditor(inv){
  return `<h2 style="font-family:Georgia,serif;margin:12px 0">Setting</h2><div class="form-grid">
    <div class="field"><label>Status undangan</label><select id="status"><option ${inv.status==='Draft'?'selected':''}>Draft</option><option ${inv.status==='Aktif'?'selected':''}>Aktif</option><option ${inv.status==='Published'?'selected':''}>Published</option></select></div>
    ${input('Slug / URL','slug',inv.slug)}
    ${input('Google Maps URL','maps',inv.maps)}
    ${input('YouTube URL','youtube',inv.youtube)}
  </div><button class="btn btn-primary" onclick="saveSettings('${inv.id}')">Simpan Setting</button>`;
}
window.saveSettings=function(id){ const inv=getInv(id); ['status','slug','maps','youtube'].forEach(k=>inv[k]=document.getElementById(k).value); saveInv(inv); toast('Setting tersimpan'); render(); }

function plannerEditor(inv){
  return `<h2 style="font-family:Georgia,serif;margin:12px 0">Event Planner</h2><div class="form-grid">${input('Task baru','taskName','Follow up vendor dekorasi')}</div><button class="btn btn-primary" onclick="addTask('${inv.id}')">Tambah Task</button><div style="height:14px"></div><div class="list">${(inv.planner||[]).map(t=>`<div class="row"><div><b>${t.done?'✅':'⬜'} ${esc(t.task)}</b></div><button class="btn btn-soft" onclick="toggleTask('${inv.id}','${t.id}')">Toggle</button></div>`).join('')}</div>`;
}
window.addTask=function(id){ const inv=getInv(id); inv.planner=inv.planner||[]; inv.planner.push({id:uid('pln'),task:taskName.value,done:false}); saveInv(inv); toast('Task ditambah'); render(); }
window.toggleTask=function(id,tid){ const inv=getInv(id); const t=inv.planner.find(x=>x.id===tid); t.done=!t.done; saveInv(inv); render(); }

function templatesPage(){
  app.innerHTML=`${landingHeader()}<section class="section"><div class="container"><div class="section-head"><div><span class="pill">50 Tema</span><h2>Tema berbentuk mockup HP</h2><p>Setiap kartu tema menampilkan tampilan undangan, bukan hanya warna polos.</p></div></div><div class="grid g4">${templates.map(t=>`<article class="card"><div class="template-thumb no-mockup">${templateVisual(t)}</div><div class="tpl-body"><h3>${esc(t.name)}</h3><p>${t.category} • ${t.premium?'Premium':'Gratis'}</p><div class="tags"><span class="tag">${t.style}</span><span class="tag">${t.mood}</span></div><div class="tpl-actions"><button class="btn btn-soft" onclick="previewTheme('${t.id}')">Lihat Demo</button><a class="btn btn-primary" href="#/setup/invitation">Pakai</a></div></div></article>`).join('')}</div></div></section>`;
}
function pricing(){
 const p=get(STORE.packages,[]);
 app.innerHTML=`${landingHeader()}<section class="section"><div class="container"><div class="section-head center"><span class="pill">Paket</span><h2>Pilih paket sesuai kebutuhan</h2></div><div class="grid g4">${p.map(x=>`<article class="card card-pad"><span class="pill">${x.name}</span><h3 style="font-size:34px;font-family:Georgia,serif">${money(x.promo)}</h3>${x.normal>x.promo?`<p style="text-decoration:line-through">${money(x.normal)}</p>`:''}<p>Durasi ${x.duration} hari • ${x.photo} foto</p><ul style="color:var(--muted);line-height:1.9;padding-left:18px">${x.features.map(f=>`<li>${f}</li>`).join('')}</ul><a class="btn btn-primary" href="#/setup/invitation">Pilih Paket</a></article>`).join('')}</div></div></section>`;
}

function publicInvite(id){
 const inv=getInv(id); if(!inv){ app.innerHTML=`<div class="public"><div class="empty">Undangan tidak ditemukan.</div></div>`; return; }
 const to=new URLSearchParams(location.hash.split('?')[1]||'').get('to')||'Tamu Undangan';
 app.innerHTML=publicInviteMarkup(inv,false,to);
}
function publicInviteMarkup(inv,mini=false,to='Tamu Undangan'){
 const t=templates.find(x=>x.id===inv.templateId)||templates[0];
 const [c1,c2,ct]=t.colors;
 const first=inv.events?.[0]||{};
 const second=inv.events?.[1]||first;
 const scale=mini?'style="transform:scale(.55);transform-origin:top center;width:180%;height:auto"':'';
 const exactCover = t.image ? `
   <section class="exact-template-cover">
     <img src="${t.image}" alt="${esc(t.name)}">
     <a class="exact-open-btn" href="#detail">Buka Undangan</a>
   </section>
 ` : `
   <section class="dyn-hero">
    <div class="dyn-overlay"></div>
    <div class="dyn-content">
      <div class="pill">Kepada Yth. ${esc(to)}</div>
      <div class="dyn-cover">${esc(inv.cover || t.category)}</div>
      <h1 class="dyn-title">${esc(inv.title || t.title)}</h1>
      <p class="dyn-opening">${esc(inv.opening || '')}</p>
      <div class="dyn-persons">
        <div class="rt-person rt-p1"></div>
        <div class="rt-person rt-p2"></div>
      </div>
      <a class="dyn-open-btn" href="#detail">Buka Undangan</a>
    </div>
   </section>
 `;
 return `<div class="public template-dynamic ${templateStyleClass(t.category)}" style="--c1:${c1};--c2:${c2};--ct:${ct};${mini?'padding:0;min-height:auto':''}">
  <div class="invite dynamic-invite" ${scale}>
   ${exactCover}
   <section class="inv-section" id="detail">
    <h3>Detail Acara</h3>
    <p style="color:var(--muted);margin-top:-6px">Bagian ini tetap dinamis mengikuti data yang diisi di dashboard.</p>
    <div class="info">
      <div class="box"><b>📅 ${esc(first.name||'Acara')}</b><br>${esc(first.date||'-')}<br>${esc(first.start||'-')} ${esc(first.tz||'')}</div>
      <div class="box"><b>🎉 ${esc(second.name||'Resepsi')}</b><br>${esc(second.date||first.date||'-')}<br>${esc(second.start||'-')} ${esc(second.tz||'')}</div>
      <div class="box"><b>📍 Lokasi</b><br>${esc(first.place||'-')}<br>${esc(first.address||'')}</div>
    </div>
    <div class="actions" style="justify-content:center;margin-top:16px">
      <a class="btn btn-primary" href="${esc(inv.maps)}" target="_blank">Buka Google Maps</a>
    </div>
   </section>
   <section class="inv-section">
    <h3>${t.category === 'Pernikahan' ? 'Galeri Kami' : 'Galeri Momen'}</h3>
    <div class="gallery"><div class="photo"></div><div class="photo"></div><div class="photo"></div></div>
   </section>
   <section class="inv-section">
    <h3>Ucapan & RSVP</h3>
    ${mini?'<p>Form RSVP aktif di halaman undangan.</p>':`<div class="form-grid"><div class="field"><label>Nama</label><input id="rsvpName"></div><div class="field"><label>Status</label><select id="rsvpStatus"><option>Hadir</option><option>Tidak Hadir</option><option>Masih Ragu</option></select></div><div class="field full"><label>Ucapan</label><textarea id="rsvpMsg"></textarea></div></div><button class="btn btn-primary" onclick="sendRsvp('${inv.id}')">Kirim RSVP</button>`}
   </section>
  </div>
 </div>`;
}
window.sendRsvp=function(id){ const r=get(STORE.rsvps,{}); r[id]=r[id]||[]; r[id].push({name:rsvpName.value||'Tamu',status:rsvpStatus.value,message:rsvpMsg.value||'-'}); set(STORE.rsvps,r); toast('RSVP terkirim'); render(); }

function render(){
  init();
  const r=hash();
  if(r==='home'||r==='') return home();
  if(r==='login') return login();
  if(r==='register') return register();
  if(r==='templates') return templatesPage();
  if(r==='pricing') return pricing();
  if(r==='setup/invitation') return setupInvitation();
  if(r==='setup/subscribe') return subscribe();
  if(r==='dashboard') return dashboard();
  if(r==='dashboard/invitation') return invitationList();
  if(r==='dashboard/transactions') return transactions();
  if(r==='dashboard/support') return support();
  if(r.startsWith('dashboard/invitation/')){
    const parts=r.split('/');
    return editor(parts[2],parts[3]||'menu');
  }
  if(r.startsWith('invite/')) return publicInvite(r.split('/')[1].split('?')[0]);
  return home();
}
window.addEventListener('hashchange',render);
render();

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// ===== SIGN-UP MODALS =====
function signupRaid(day) {
  alert(`Sign-up modal for ${day} raid would appear here.`);
  // TODO: implement modal logic for registered/unregistered users
}

// ===== THUMBNAILS =====
function addMemberThumbnail(id, name, role) {
  const grid = document.getElementById('membersGrid');
  const img = document.createElement('img');
  img.src = 'images/default-avatar.png';
  img.classList.add('member-thumb');
  img.alt = name;
  img.title = name + ' (' + role + ')';
  img.onclick = () => {
    if(img.classList.contains('accepted')) {
      img.classList.remove('accepted');
      img.classList.add('bench');
    } else if(img.classList.contains('bench')) {
      img.classList.remove('bench');
    } else {
      img.classList.add('accepted');
    }
  };
  grid.appendChild(img);
}

// ===== ADMIN MODAL =====
const adminModal = document.getElementById('adminModal');
const closeModalBtn = document.getElementById('closeModal');
const adminPasswordInput = document.getElementById('adminPassword');
const loginAdminBtn = document.getElementById('loginAdminBtn');
const adminError = document.getElementById('adminError');
const adminModalTitle = document.getElementById('adminModalTitle');

let adminType = 'standard';

function openAdminModal(type) {
  adminType = type;
  adminModalTitle.textContent = type === 'standard' ? 'Standard Admin Login' : 'Master Admin Login';
  adminPasswordInput.value = '';
  adminError.style.display = 'none';
  adminModal.style.display = 'block';
}

closeModalBtn.onclick = () => adminModal.style.display = 'none';
window.onclick = e => { if(e.target === adminModal) adminModal.style.display = 'none'; };

loginAdminBtn.onclick = () => {
  const pw = adminPasswordInput.value.trim();
  if((adminType==='standard' && pw==='Admin123') || (adminType==='master' && pw==='MasterAdmin123')){
    alert(adminType==='standard' ? 'Standard Admin Access Granted!' : 'Master Admin Access Granted!');
    adminModal.style.display='none';
  } else {
    adminError.style.display = 'block';
  }
};

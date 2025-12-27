// scripts.js — modal behavior for project details

document.addEventListener('click', function(e) {
  const btn = e.target.closest('.open-details');
  if (!btn) return;

  const card = btn.closest('.project-card');
  if (!card) return;

  const title = card.dataset.title || '';
  const img = card.dataset.image || '';
  const desc = card.dataset.desc || '';
  const gh = card.dataset.gh || '#';
  const demo = card.dataset.demo || '#';

  document.getElementById('modal-title').textContent = title;
  const modalImg = document.getElementById('modal-image');
  modalImg.src = img;
  modalImg.alt = 'Screenshot de ' + title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-gh').href = gh;
  document.getElementById('modal-demo').href = demo;

  const modal = document.getElementById('project-modal');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
});

// Close modal when clicking close button or backdrop
const modal = document.getElementById('project-modal');
if (modal) {
  modal.addEventListener('click', function(e) {
    // if click on backdrop (modal itself) or on .modal-close
    if (e.target === modal || e.target.classList.contains('modal-close')) {
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
  });
}

// Close on ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('project-modal');
    if (modal && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
  }
});

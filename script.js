document.addEventListener('DOMContentLoaded', () => {
  const discordBtn = document.getElementById('discordBtn');
  const raidsBtn = document.getElementById('raidsBtn');
  const copiedMsg = document.getElementById('copiedMsg');
  const RAID_CODE = 'H92878766';

  // ===== Discord button animation =====
  discordBtn.addEventListener('click', function (e) {
    // Ripple effect
    createRipple(this, e);

    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 700);

    // Small delay so the animation is visible before navigation
    // (the link still works normally because it's an <a>)
  });

  // ===== Raids button: copy code =====
  raidsBtn.addEventListener('click', async function (e) {
    createRipple(this, e);
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 700);

    try {
      await navigator.clipboard.writeText(RAID_CODE);
      showCopied();
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = RAID_CODE;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showCopied();
      } catch (e2) {
        alert('Código de raids: ' + RAID_CODE);
      }
      document.body.removeChild(textarea);
    }
  });

  function showCopied() {
    copiedMsg.classList.add('show');
    setTimeout(() => {
      copiedMsg.classList.remove('show');
    }, 2200);
  }

  function createRipple(button, event) {
    const ripple = button.querySelector('.btn-ripple');
    if (!ripple) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    // Restart animation
    ripple.style.animation = 'none';
    ripple.offsetHeight; // reflow
    ripple.style.animation = '';
  }
});

function initVisitadorCurriculum() {
  const root = document.querySelector('[data-vm-curriculum]');
  if (!root) return;
  const tabs = [...root.querySelectorAll('[data-vm-module]')];
  const panels = [...root.querySelectorAll('.vm-curriculum__panel')];
  const select = (tab) => {
    const id = `vm-module-${tab.dataset.vmModule}`;
    tabs.forEach((item) => { const active = item === tab; item.classList.toggle('is-active', active); item.setAttribute('aria-selected', String(active)); });
    panels.forEach((panel) => { const active = panel.id === id; panel.classList.toggle('is-active', active); panel.hidden = !active; });
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => select(tab)));
}

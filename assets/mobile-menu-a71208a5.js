(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const d=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[d](document.body)};e.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();

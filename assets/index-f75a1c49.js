import"./modals-7ae64c72.js";$(".hero-slider").slick({dots:!0,infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};e.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();

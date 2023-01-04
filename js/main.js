'use strict';

class GlobalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header-section glassmorphism">
        <div class="header-wrapper container flex f--align-items-c">
          <iconify-icon
            inline
            icon="eva:menu-outline"
            class="side-menu-icon menu-toggle"
          ></iconify-icon>
          <iconify-icon
            inline
            icon="bi:x-lg"
            class="side-menu-iconClose menu-toggle"
          ></iconify-icon>
          <a href="https://kbelmarsos.org/" class="link">
            <img src="/imgs/kbelmarsos-logo.webp" alt="" class="site-logo"
          /></a>

          <nav class="nav-links flex f--align-items-c">
            <li><a href="https://kbelmarsos.org/" class="nav-links__link link">الرئيسية</a></li>
            <li>
              <a href="/pages/roadmap.html" target="_blank" class="nav-links__link link"
                >مسار البنيان</a
              >
            </li>
            <!-- <li><a href="#" class="nav-links__link link">الأسئلة الشائعة</a></li> -->
            <li class="drobdown-toggle p-relative">
              <a href="#" class="nav-links__link link">
                سهم العلم
                <iconify-icon
                  inline
                  icon="fa-solid:greater-than"
                  style="color: #322143; font-size: 1rem; transform: rotate(90deg)"
                ></iconify-icon>
              </a>

              <ul class="submenu list-s-none">
                <li class="flex f--align-items-c">
                  <iconify-icon inline icon="fluent-emoji:four-leaf-clover"></iconify-icon>
                  <a
                    href="https://almdrasa.com/donations/students/"
                    target="_blank"
                    class="submenu__link link"
                  >
                    تبرع
                  </a>
                </li>
                <li class="flex f--align-items-c">
                  <iconify-icon inline icon="fluent-emoji:wrapped-gift"></iconify-icon>

                  <a
                    href="https://almdrasa.com/financial-aid/"
                    target="_blank"
                    class="submenu__link link submenu__link--support"
                    >دعم مالي لغير القادرين</a
                  >
                </li>
              </ul>
            </li>
            <!-- <li><a href="#" class="nav-links__link link">قائمة الفائزين</a></li> -->
            <!-- <li>
              <a href="" class="nav-links__link">مصادر</a>
              <div class="drobdown--wrapper">
                <ul class="drobdown__content">
                  <li>
                    <a href="" class="nav-links__link">أدوات</a>
                  </li>
                  <li><a href="" class="nav-links__link">المدونة</a></li>
                </ul>
              </div>
            </li> -->
          </nav>
          <!-- <button class="login-btn">
            <img src="/imgs/header/login-icon.svg" alt="" class="login-btn__icon" />
          </button> -->
        </div>
      </header>`;
  }
}

customElements.define('global-header', GlobalHeader);

class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="footer-section container section-padding flex f--align-items-c">
          <div class="flex f--column">
            <a href="https://kbelmarsos.org/" class="link">
              <img src="/imgs/kbelmarsos-logo.webp" alt="" class="site-logo"
            /></a>
            <p class="footer-section__copyright">
              جميع الحقوق محفوظة&copy; -
             ${new Date().getFullYear()}
            </p>
          </div>
          <div class="footer-section__socials flex f--align-items-c">
            <a
              href="https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/"
              target="_blank"
              class="link"
              ><iconify-icon inline icon="line-md:linkedin"></iconify-icon>
            </a>
            <a
              href="https://www.youtube.com/channel/UCG-wLtNfSTg742SiH7Lne1Q"
              target="_blank"
              class="link"
            >
              <iconify-icon inline icon="icon-park-outline:youtube"></iconify-icon>
            </a>
            <a href="https://t.me/kalbonyan_elmarsos_contest_2" target="_blank" class="link"
              ><iconify-icon inline icon="line-md:telegram"></iconify-icon>
            </a>
          </div>
        </div>
      </footer>`;
  }
}

customElements.define('global-footer', GlobalFooter);

const sideMenu = document.querySelector('.side-menu-icon');
const sideMenuClose = document.querySelector('.side-menu-iconClose');
const sideNav = document.querySelector('.nav-links');
sideMenu.addEventListener('click', e => {
  sideMenu.classList.toggle('hidden');
  sideMenuClose.classList.toggle('menu-toggle');
  document.querySelector('body').classList.add('overflowHidden');
  document.querySelector('html').classList.add('overflowHidden');
  sideNav.classList.toggle('nav-open');
});

sideMenuClose.addEventListener('click', e => {
  sideMenuClose.classList.toggle('menu-toggle');
  sideMenu.classList.toggle('hidden');
  document.querySelector('body').classList.remove('overflowHidden');
  document.querySelector('html').classList.remove('overflowHidden');
  sideNav.classList.toggle('nav-open');
});

//timer
const registerBtn = document.querySelector('.register__regBtn');
const registerBtnLink = document.querySelector('.register__link');

function disableRegBtn() {
  registerBtn.style.cursor = 'not-allowed';
  registerBtnLink.style.cursor = 'not-allowed';
  registerBtnLink.removeAttribute('target');
  registerBtnLink.removeAttribute('href');
  registerBtnLink.innerHTML = 'التسجيل مغلق حاليًا';
}

function enableRegBtn() {
  registerBtn.style.cursor = 'pointer';
  registerBtnLink.style.cursor = 'pointer';
  registerBtnLink.setAttribute('target', '_blank');
  registerBtnLink.setAttribute(
    'href',
    'https://docs.google.com/forms/d/e/1FAIpQLSfUMn0-zOwixek_fbKXsdzuKKOZFv9uzburnFmJZkeMBBPlCg/closedform'
  );
  registerBtnLink.innerHTML = 'تم فتح باب التسجيل';
}

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor((total / (1000 * 60 * 60 * 24)) % 30);
  const months = Math.floor(total / (1000 * 60 * 60 * 24 * 30));

  return {
    total,
    months,
    days,
    hours,
    minutes,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const minutesSpan = clock.querySelector('.minutes');
  const hoursSpan = clock.querySelector('.hours');
  const daysSpan = clock.querySelector('.days');
  const monthsSpan = clock.querySelector('.months');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    daysSpan.innerHTML = t.days;
    monthsSpan.innerHTML = ('0' + t.months).slice(-2);
    if (!(t.total <= 0)) {
      disableRegBtn();
    }

    if (t.total <= 0) {
      minutesSpan.innerHTML = '0';
      hoursSpan.innerHTML = '0';
      daysSpan.innerHTML = '0';
      monthsSpan.innerHTML = '0';
      enableRegBtn();
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000 * 5);
}
const deadline = new Date(Date.parse('11/30 / 2022'));
initializeClock('timer', deadline);

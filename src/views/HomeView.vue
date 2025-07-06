<script setup lang="ts">
// Импорт необходимых зависимостей
import { onMounted } from 'vue' // Хук жизненного цикла Vue
import gsap from 'gsap' // Библиотека анимаций
import ScrollTrigger from 'gsap/ScrollTrigger' // Плагин для анимаций при скролле
import { useScroll } from '@/composables/useScroll' // Кастомный хук для навигации

// Инициализация хука прокрутки
const { scrollToSection } = useScroll()

// Регистрация плагина GSAP
gsap.registerPlugin(ScrollTrigger)

/*
Инициализация анимаций после монтирования компонента
 */
onMounted(() => {
  gsap.utils.toArray(['.v-card.glow', '.custom-panel']).forEach((el: any) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 }, // Начальные параметры
      {
        opacity: 1,
        y: 20,
        duration: 0.4,
        ease: 'power2.out', // для плавности
        clearProps: 'boxShadow', // Очистка свойств после анимации
        scrollTrigger: { // Конфигурация триггера скролла
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        onComplete: () => { // Колбек после завершения анимации
          if (el.classList.contains('v-card') && el.classList.contains('glow')) {
            el.style.transform = 'translateY(0) scale(1)'
          }
        }
      }
    )
  })
})
</script>

<template>
  <div>
    <div class="home-centered">
      <div class="home">
        <div class="with-background">
        <div class="razdel">
          <v-row 
            class="mt-4" 
            justify="center" 
            align="center"
          >
            <v-col cols="12" class="text-center home-title">
              <h1 id="main" class="text-h2 mb-4">ДОБРО ПОЖАЛОВАТЬ В PC BUILDER</h1>
              <p class="subtitle-text">Выберите готовую сборку ПК, которая подходит именно вам</p>
            </v-col>
          </v-row>

          <!-- Секция с карточками -->
          <v-row 
            id="offer" 
            justify="center" 
            align="center"
          >
            <v-col 
              cols="8" 
              md="3" 
              class="d-flex justify-center"
            >
            <!-- Карточка с текстом и изображением -->
              <v-card 
                class="mx-auto glow offer-card" 
                max-width="400" 
                min-height="250"
              >
                <v-card-title class="text-center title">
                  <img 
                    src="../assets/proc.png" 
                    alt="Settings icon"
                    class="card-title-icon mr-2"
                  >
                  Большой ассортимент
                  </v-card-title>
                <v-card-text class="text-center text">
                  Проверенные сборки для любых задач — от простых до профессиональных. Хотите индивидуальное решение? Наши специалисты бесплатно проконсультируют и подберут оптимальную конфигурацию под ваш случай!
                </v-card-text>
              </v-card>
            </v-col>

            <v-col 
              cols="8" 
              md="3" 
              class="d-flex justify-center"
            >
            <!-- Карточка с текстом и изображением -->
              <v-card 
                class="mx-auto glow offer-card" 
                max-width="400" 
                min-height="250"
              >
                <v-card-title class="text-center title"><img 
                    src="../assets/cash.png" 
                    alt="Settings icon"
                    class="card-title-icon mr-2">Оплата</v-card-title>
                <v-card-text class="text-center text">
                  Идеальный баланс соотношение цены и производительности - без переплат, максимальная выгода. <p>Акция: При полной предоплате — бесплатная сборка (+1500₽ экономии)!</p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col 
              cols="8" 
              md="3" 
              class="d-flex justify-center"
            >
              <!-- Карточка с текстом и изображением -->
              <v-card 
                class="mx-auto glow offer-card" 
                max-width="400" 
                min-height="250"
              >
                <v-card-title class="text-center title">
                  <img 
                    src="../assets/settings.png" 
                    alt="Settings icon"
                    class="card-title-icon mr-2"
                    >
                    Качество
                  </v-card-title>
                <v-card-text class="text-center text">
                  Только проверенные комплектующие от надежных производителей(ASUS, MSI, Kingston, Samsung). Партнерские поставки напрямую от производителей
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Секция с кнопкой -->
          <v-row 
            id="why" 
            class="mt-8" 
            justify="center" 
            align="center"
          >
            <v-col cols="12" class="text-center">
              <h2 class="text-choose-pc">ВЫБЕРИ СВОЙ ПК</h2>
            </v-col>
          </v-row>

          <!-- Секция с кнопкой -->
          <v-row 
            id="builds" 
            class="mt-8" 
            justify="center" 
            align="center"
          >
            <v-col cols="12" class="text-center">
              <v-btn
                href="#"
                class="btn-gradient"
                size="large"
                @click.prevent="scrollToSection('builds-section')"
              >
                Смотреть сборки
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
      
      <div class="background-all">

        <!-- Новая секция 'Мы предлагаем' -->
        <section id="offer-section" class="offer-section mt-16 mb-12">
          <h2 class="offer-title">
            <div class="top-bar-gradient"></div>МЫ ПРЕДЛАГАЕМ</h2>
          <v-row justify="center" align="center" class="custom-panels-row">
            
            <!-- Первый элемент (с текстом и изображением) -->
            <v-col cols="12" class="d-flex flex-column align-center mb-6 pa-0">
              <div class="custom-panel mx-auto">Большой выбор ассортиментов!</div>
              <div class="image-set mt-2 text-center">
                <video 
                  class="custom-img glow" 
                  preload="auto"
                  src="../assets/complect.mp4" 
                  style="max-width: 100%;"
                  playsinline="" 
                  autoplay="" 
                  muted="" 
                  loop=""
                ></video>
              </div>
            </v-col>
            
            <!-- Второй элемент (с текстом и изображением) -->
            <v-col cols="12" class="d-flex flex-column align-center mb-6 pa-0">
              <div class="custom-panel mx-auto">Большие скидки для постоянных покупателей!</div>
              <div class="image-set mt-2 text-center">
                <video 
                  class="custom-img glow"
                  preload="auto"
                  src="../assets/support.mp4" 
                  style="max-width: 100%;"
                  playsinline=""
                  autoplay="" 
                  muted="" 
                  loop=""
                ></video>
              </div>
            </v-col>

            <!-- Третий элемент (с текстом и изображением) -->
            <v-col cols="12" class="d-flex flex-column align-center mb-6 pa-0">
              <div class="custom-panel mx-auto">Выгодные Предложения!</div>
              <div class="image-set mt-2 text-center">
                <video 
                  class="custom-img glow"
                  preload="auto"
                  src="../assets/customization.mp4" 
                  style="width: 1224px; "
                  playsinline=""
                  autoplay="" 
                  muted="" 
                  loop=""
                ></video>
              </div>
            </v-col>

          </v-row>
        </section>

        <!-- Секция 'Почему выбирают нас?' -->
        <section id="why-choose-us" class="why-choose-us-section mt-16 mb-12">
          <h2 class="section-title mb-6">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
          <p class="section-subtitle mb-8">Не просто сборка — а надежная система, tailored под ваши задачи</p>

          <!-- Список преимуществ -->
          <v-row justify="center" class="mb-12">
            <v-col cols="12" md="6">
              <v-card class="advantage-card glow mb-6 offer-card">
                <v-card-title class="text-h5">
                  <v-icon icon="mdi-wrench" class="mr-2"></v-icon>
                  Технические преимущества
                </v-card-title>
                <v-card-text>
                  <ul class="advantage-list">
                    <li>✅ Оптимизированные сборки — подбираем комплектующие без «бутылочных горлышек»</li>
                    <li>✅ Стресс-тестирование — 24-часовая проверка на стабильность (AIDA64, FurMark)</li>
                    <li>✅ Гарантия на всю систему — 3 года, а не на отдельные компоненты</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Секция 'Преимущества' -->
            <v-col cols="12" md="6">
              <v-card class="advantage-card glow mb-6 offer-card">
                <v-card-title class="text-h5">
                  <v-icon icon="mdi-currency-usd" class="mr-2"></v-icon>
                  Выгода для клиента
                </v-card-title>
                <v-card-text>
                  <ul class="advantage-list">
                    <li>✔ Экономия до 30% — закупаем комплектующие у официальных дистрибьюторов</li>
                    <li>✔ Бесплатная диагностика — в течение всего срока службы</li>
                    <li>✔ Апгрейд «без боли» — продуманная архитектура для будущих улучшений</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Секция 'Экспертный подход' -->
            <v-col cols="12" md="6">
              <v-card class="advantage-card glow mb-6 offer-card">
                <v-card-title class="text-h5">
                  <v-icon icon="mdi-trophy" class="mr-2"></v-icon>
                  Экспертный подход
                </v-card-title>
                <v-card-text>
                  <ul class="advantage-list">
                    <li>🏆 Сборка от инженеров — не менеджеров, а специалистов с 5+ лет опыта</li>
                    <li>🎮 Игровые/рабочие ПК — разные стандарты для разных задач</li>
                    <li>📊 Честные бенчмарки — покажем тесты FPS в играх или рендеринга перед покупкой</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Секция 'Отзывы клиентов' -->
            <v-col cols="12" md="6">
              <v-card class="advantage-card glow testimonial-card offer-card">
                <v-card-title class="text-h5">
                  <v-icon icon="mdi-account-group" class="mr-2"></v-icon>
                  Доверие клиентов
                </v-card-title>
                <v-card-text>
                  <blockquote class="testimonial">
                    <em>«Собрали ПК для монтажа 4K — работает на 20% быстрее, чем расчеты в онлайн-конфигураторах»</em>
                    <footer class="testimonial-author">— Алексей В., видеограф</footer>
                  </blockquote>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <!-- Секция 'Готовые сборки' -->
        <section id="builds-section" class="builds-section mt-16 mb-12">
          <h2 class="section-title mb-8">ГОТОВЫЕ СБОРКИ</h2>

          <!-- Список сборок -->
          <!-- Первый элемент выбора пк (с текстом и изображением) -->
          <v-row justify="center" align="stretch" class="builds-row">
            <v-col cols="12" md="4" class="d-flex justify-center mb-8">
              <v-card class="build-card glow offer-card" max-width="370">
                <div class="build-badge budget">Бюджетная</div>
                <v-card-title class="text-h5 text-center">Бюджетная сборка</v-card-title>
                <v-card-subtitle class="text-center">Оптимальная сборка для офисных задач и базовых игр</v-card-subtitle>
                <v-card-text>
                  <ul class="build-components">
                    <li>AMD Ryzen 5 5600G</li>
                    <li>ASUS PRIME B550M-K</li>
                    <li>Kingston FURY Beast 16GB</li>
                    <li>WD Blue SN570 500GB</li>
                  </ul>
                  <div class="build-price">39 940 ₽</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn block color="success" variant="tonal" class="btn-select">Выбрать</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <!-- Второй элемент выбора пк (с текстом и изображением) -->
            <v-col cols="12" md="4" class="d-flex justify-center mb-8">
              <v-card class="build-card glow offer-card" max-width="370">
                <div class="build-badge gaming">Игровая</div>
                <v-card-title class="text-h5 text-center">Игровая сборка</v-card-title>
                <v-card-subtitle class="text-center">Мощная сборка для современных игр</v-card-subtitle>
                <v-card-text>
                  <ul class="build-components">
                    <li>Intel Core i5-12400F</li>
                    <li>NVIDIA RTX 3060</li>
                    <li>Kingston FURY Beast 32GB</li>
                    <li>Samsung 970 EVO Plus 1TB</li>
                  </ul>
                  <div class="build-price">89 930 ₽</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                    block color="info" 
                    variant="tonal" 
                    class="btn-select"
                  >
                  Выбрать
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <!-- Третий элемент выбора пк (с текстом и изображением) -->
            <v-col 
              cols="12" 
              md="4" 
              class="d-flex justify-center mb-8"
            >
              <v-card class="build-card glow offer-card" max-width="370">
                <div class="build-badge pro">Pro</div>
                <v-card-title class="text-h5 text-center">Профессиональная сборка</v-card-title>
                <v-card-subtitle class="text-center">Максимальная производительность для работы и игр</v-card-subtitle>
                <v-card-text>
                  <ul class="build-components">
                    <li>AMD Ryzen 7 5800X3D</li>
                    <li>NVIDIA RTX 4070</li>
                    <li>G.Skill Trident Z RGB 32GB</li>
                    <li>Samsung 980 PRO 2TB</li>
                  </ul>
                  <div class="build-price">153 930 ₽</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                    block color="primary" 
                    variant="tonal" 
                    class="btn-select"
                  >
                  Выбрать
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </section>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
.home,
.body {
  font-family: Museo,Segoe UI,sans-serif;
  padding: 0;
  margin: 0;
}

.custom-panel.text-center.mx-auto {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
}

.text-h2.mb-4 {
  font-weight: 900;
  width: 35%;
  margin: auto;
}

.text-choose-pc {
  font-size: 2.9rem;
  line-height: 0.5rem;
  font-weight: 900;
}

.section-title mb-6 {
  font-size: clamp(32px,3vw,64px);
  line-height: 1rem;
  font-weight: 900;
}

.subtitle-text {
  font-size: 1.35rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.text-center.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
}

.text-h5 {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
}

.text-center.text {
  font-size: 16px;
  line-height: 22px;
}

.build-components {
  font-size: 16px;
  line-height: 22px;
}

.advantage-list {
  font-size: 18px;
  line-height: 22px;
}

.text-why-we {
  font-size: clamp(1rem,2vw,1.75rem);
  line-height: 1.2rem;
  font-weight: 300;
}

.btn-select {
  font-weight: 700;
  font-size: 18px;
  line-height: 14px;
}

.card-title-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.mx-auto.glow {
  padding: 1rem;
  border-radius: 17px;
}

.offer-card {
  background: rgba(12, 14, 24, 0.75);   /* тёмный полупрозрачный */
  backdrop-filter: blur(6px);           /* мягкий blur, если нужен “frosted” */
}

.offer-card:hover {
  background: rgba(22, 26, 38, 0.85);
}
/*background: rgba(10, 20, 40, 0.85);*/

.background-all {
  width: 100vw;
  background: url('../assets/pc-backgr.png') center/100% repeat-y;
}

.background-all::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(10, 20, 41, 0.459);
  z-index: 0;
}

.background-all > * {
  position: relative;
  z-index: 3;
}

/* Background styles */
.with-background {
  position: relative;
  width: 100vw;
  min-height: 80vh;
  overflow: hidden;
}

.with-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('../assets/pc-build.jpg') center/cover no-repeat;
  filter: blur(8px);
  transform: scale(1.05);
  z-index: 1;
}

.with-background::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(10, 20, 40, 0.85);
  z-index: 1;
}

.with-background > * {
  position: relative;
  z-index: 3;
}

.with-background > * {
  position: relative;
  z-index: 2;
}

.with-background .v-card,
.with-background .btn,
.with-background .custom-panel {
  box-shadow: none !important;
}

.razdel {
  margin-bottom: 20rem;
}

/* Home styles */
.home-centered {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-center.home-title {
  margin-top: 5rem;
}

.home {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Button styles */
.btn-gradient {
  font-weight: 700;
  padding: 1.4rem 1.4rem 2.4rem 1.4rem;
  border-radius: 15px;
  border: none;
  position: relative;
  line-height: 1;
  color: #fff !important;
  font-weight: bold;
  background: rgba(12, 14, 24, 0.75);   /* тёмный полупрозрачный */
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
}

.btn-gradient:hover {
  transform: translateY(-2px) scale(1.07);               /* ← добавили */
  box-shadow: 0 0 20px 8px #a259ff66,
              0 0 40px 16px #38c8ff44;                    /* ← обновили */
  border-radius: 15px;
  color: #b388ff;
  background: rgba(22, 26, 38, 0.85);
}

/* Gradient flow */
@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Custom styles */
.custom-img {
  border-radius: 20px;
  width: 100%;
}

.custom-img.glow {
  box-shadow: 0 0 48px 6px #000000, 0 0 128px 8px #000000;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
}

.custom-panel {
  margin: 2rem 0 2rem 0;
  font-size: 1.4rem;
  color: #a8a095;
}

.v-card.glow {
  box-shadow: 0 0 32px 4px #000000, 0 0 128px 4px #000000;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
}

.v-card.glow:hover {
  box-shadow: 0 0 48px 16px #ffffff, 0 0 64px 16px #ffffff;
  transform: scale(1.07) translateY(-8px);
  z-index: 2;
}

/* Offer section */
.offer-section {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.offer-title {
  font-size: 3rem;
  font-weight: 900;
  position: relative;
}

.why-choose-us-section {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

/* Advantages section */
.advantage-card {
  height: 100%;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.advantage-list {
  list-style: none;
  padding: 0;
  text-align: left;
}

.advantage-list li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

/* Testimonials section */
.testimonial {
  font-size: 1.1rem;
  font-style: italic;
  margin: 0;
  padding: 1rem;
  border-radius: 8px;
}

.testimonial-author {
  margin-top: 1rem;
  font-weight: 600;
  text-align: right;
}

/* Builds section */
.builds-section {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.builds-row {
  margin-top: 0;
}

.build-card {
  position: relative;
  border-radius: 24px;
  overflow: visible;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.build-badge {
  position: absolute;
  top: -18px;
  left: 24px;
  padding: 0.4em 1.2em;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px 0 #0002;
  z-index: 2;
  color: #fff;
  background: #888;
  user-select: none;
}

.build-badge.budget {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
}

.build-badge.gaming {
  background: linear-gradient(90deg, #2196f3 0%, #38c8ff 100%);
}

.build-badge.pro {
  background: linear-gradient(90deg, #a259ff 0%, #6a11cb 100%);
}

.build-components {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2em 0;
  text-align: left;
}

.build-components li {
  margin-bottom: 0.5em;
  padding-left: 1.2em;
  position: relative;
}

.build-components li:before {
  content: '•';
  color: #a259ff;
  position: absolute;
  left: 0;
  font-size: 1.2em;
  top: 0;
}

.build-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0.5em;
  text-align: right;
}

.top-bar-gradient {
  position: absolute;
  left: -501.5%;
  bottom: 156%;
  width: 100vw;
  min-width: 16000px;
  height: 25px;
  background: linear-gradient(90deg, #a259ff 0%, #3b38ff 100%);
  margin-bottom: 24px;
}

/* Responsive styles */

@media (max-width: 900px) {
  .home {
    max-width: 100%;
    padding: 10px;
  }
  .offer-section,
  .why-choose-us-section,
  .builds-section {
    max-width: 100%;
    padding: 0 4px;
  }
  .offer-title,
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 960px) {
  .top-bar-gradient {
  position: absolute;
  left: 0;
  bottom: 73%;
}
}

@media (max-width: 600px) {
  .home {
    padding: 4px;
  }
  .razdel {
    margin-bottom: 6rem;
  }
  .offer-title,
  .section-title {
    font-size: 1.3rem;
  }
  .section-subtitle {
    font-size: 1rem;
    max-width: 98vw;
  }
  .v-card.glow,
  .build-card {
    max-width: 98vw !important;
    min-width: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .builds-row {
    flex-direction: column !important;
  }
  .build-badge {
    left: 12px;
    font-size: 0.95rem;
    padding: 0.3em 0.8em;
  }
  .build-price {
    font-size: 1.1rem;
  }
  .btn.gradient {
    font-size: 1rem;
    padding: 8px 16px;
  }
}

/* Стили для скролла */
.scroll-fade {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s, transform 0.6s;
  will-change: opacity, transform;
}
.scroll-fade.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Интерактивные эффекты для карточек */
.v-card.glow {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  transform: translateY(0) scale(1) !important;
  cursor: pointer !important;
  will-change: transform, box-shadow !important;
}

.v-card.glow:hover {
  transform: translateY(-10px) scale(1.05) !important;
  box-shadow: 0 0 20px 8px #a259ff66, 0 0 40px 16px #38c8ff44 !important;
  z-index: 10 !important;
}

/* Более специфичный селектор для карточек в секции offer */
#offer .v-card.glow {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  transform: translateY(0) scale(1) !important;
  cursor: pointer !important;
  will-change: transform, box-shadow !important;
}

#offer .v-card.glow:hover {
  transform: translateY(-10px) scale(1.05) !important;
  box-shadow: 0 0 20px 8px #a259ff66, 0 0 40px 16px #38c8ff44 !important;
  z-index: 10 !important;
}

/* Стили для иконок в карточках */
.card-title-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

/* Стили для заголовков карточек */
.title {
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* Стили для текста карточек */
.text {
  color: #ccc !important;
  font-size: 0.95rem !important;
  line-height: 1.5 !important;
}

/* Дополнительный эффект при наведении */
.v-card.glow:hover .title {
  color: #b388ff !important;
  transition: color 0.3s ease;
}

.v-card.glow:hover .text {
  color: #fff !important;
  transition: color 0.3s ease;
}
</style>

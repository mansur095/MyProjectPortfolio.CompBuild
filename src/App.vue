<script setup lang="ts">
import HomeView from './views/HomeView.vue'
import { useScroll } from '@/composables/useScroll'

const { scrollToSection } = useScroll()
</script>

<template>
  <v-app>
    <!-- заголовок -->
    <div class="custom-navbar-wrapper">
        <nav class="custom-navbar">
          <a
            href="#"
            class="brand"
            @click.prevent="scrollToSection('main')"
          >
          PC BUILDER
          </a>
          <!-- нав-ссылки -->
        <div class="nav-links">
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="scrollToSection('main')"
          >Главная</a>
            <div class="divider"></div>
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="scrollToSection('offer-section')"
          >Мы предлагаем</a>
            <div class="divider"></div>
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="scrollToSection('why-choose-us')"
          >Почему мы</a>
            <div class="divider"></div>
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="scrollToSection('builds-section')"
          >Готовые сборки</a>
            <div class="divider"></div>
          <a 
            href="#" 
            class="nav-link" 
            @click.prevent="scrollToSection('contacts')"
          >Контакты</a>
        </div>
      </nav>
    </div>

    <!-- основной контент -->
    <v-main>
        <HomeView />
    </v-main>
    <!-- футер -->
    <footer id="contacts" class="footer">
      <div>© 2024 PC Builder. Все права защищены.</div>
      <div>Контакты: info@pcbuilder.ru</div>
    </footer>
  </v-app>
</template>

<style>
*,
.home {
  margin: 0%;
  padding: 0%;
}

.custom-navbar {
  display: flex;
  align-items: center;
  width: 100%;
  background: transparent;
  border-radius: 20px;
  padding: 0 32px;
}

/* бренд слева */
.brand {
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  text-decoration: none;
  margin-right: 20%;
  padding: 0 16px 0 0;
  cursor: pointer;
}

/* контейнер нав-ссылок */
.nav-links {
  display: flex;
  align-items: center;
}

.custom-navbar-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  /* фон + размытие */
  background: rgba(12, 14, 24, 0.75);   /* тёмный с прозрачностью */
  backdrop-filter: blur(8px);           /* стекло-эффект */
  box-shadow: 0 2px 20px #0006;         /* мягкая тень */

  z-index: 1001;
  display: flex;
  justify-content: center;
  padding: 16px 0;                      /* небольшой внутренний отступ */
}

/* можно сделать прозрачной, чтобы не дублировать фон */
.custom-navbar {
  display: flex;
  justify-content: center;
  background: transparent;
  border-radius: 20px;
  padding: 0 32px;
}
.nav-link,
.nav-link:active,
.nav-link:focus,
.nav-link:visited {
  background: none !important;
  box-shadow: none !important;
  outline: none !important;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 0 24px;
  transition: color 0.2s;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-link:hover {
  color: #b388ff;
}
.divider {
  width: 1px;
  height: 46px;
  background: #232323;
  margin: 0 8px;
}
.centered-content {
  width: 100vw;
  min-height: 60vh;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.footer {
  background: #181818;
  color: #fff;
  text-align: center;
  padding: 32px 0 24px 0;
  margin-top: 120px;
  border-radius: 20px 20px 0 0;
  font-size: 16px;
}

@media (max-width: 1600px) {
  body::after,
#app::after, 
.v-application::after {
  display: none;
}
}
</style>

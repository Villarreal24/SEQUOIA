<template>
  <nav :ref="nr" class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Logo -->
      <NuxtLink to="/home1-light" class="logo">
        <img ref="lr" src="/img/logo-light.png"  alt="logo" v-if="showLogo !== false" />
      </NuxtLink>

      <button
        @click="handleMobileDropdown"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <!-- navbar links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="/home3-light">Compra</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/home3-light">Compra</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/renta">Renta</NuxtLink>
          </li> -->
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="/home3-light">Capitaliza</NuxtLink>
          </li> -->
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Funciones
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/compra">Compra</NuxtLink>
              <NuxtLink class="dropdown-item" to="/home3-light">Venta</NuxtLink>
              <NuxtLink class="dropdown-item" to="/renta">Renta</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog">Blog</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">Sobre nosotros</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contacto</NuxtLink>
          </li>
          <li class="nav-item" v-if="!logIn">
            <NuxtLink class="nav-link" to="/login">Iniciar sesión</NuxtLink>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown" v-if="logIn">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cuenta
            </span>
            <div class="dropdown-menu" >
              <NuxtLink class="dropdown-item" to="/blog">Perfil</NuxtLink>
              <NuxtLink class="dropdown-item" to="/blog-details">Cerrar sesión</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import getSiblings from "../../common/getSiblings";

export default {
  name: 'Navbar',
  props: ["lr", "theme", "nr", "showLogo"],
  data() {
    return {
      logIn: false
    }
  },
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement).filter((item) => item.classList.contains("show")).map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[2]) {
          item.childNodes[2].classList.remove("show");
        }
      });

      e.target.setAttribute("aria-expanded", true);

      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: (e) => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    },
  }
}
</script>
<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="a" class="navbar-brand">
      Ürün Listesi
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/urun-giris"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Ürün İşlemleri</a>
        </router-link>
        <router-link
          to="/urun-cikis"
          tag="li"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<template>
  <header class="app-header">
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #b8b8b8;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 16px;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 18px;
  font-weight: bold;
}

.nav-links a {
  text-decoration: none;
  color: #222;
  padding: 4px 10px;
  border-radius: 6px;
}

.nav-links a.router-link-active {
  background-color: #8ea9db;
  color: #fff;
}
</style>

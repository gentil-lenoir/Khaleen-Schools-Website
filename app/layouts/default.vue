<template>
  <div>
    <Header />
    <AdsterraSimple />
    <main class="main">
      <NuxtPage />
    </main>
    <AdsterraSimple />
    <Footer />
  </div>
</template>

<style>
.main{ margin-top:72px; margin-inline:0 }

/* Global variables and minimal utilities */
:root{
  --bg-color: #060613;
  --text-muted: #9ca3af;
  --header-bg: #07070a;
  --accent: #7c5cff;
  --muted: #9aa3b2;
  --glass-shadow: 0 8px 30px rgba(2,6,23,0.7);
  --border-muted: rgba(255,255,255,0.04);
}
html,body,#__nuxt{ height:100%; }
body{ margin:0; font-family: 'Century Gothic', -apple-system, 'Segoe UI'; background:var(--bg-color); color:#fff }
.text-muted{ color:var(--text-muted) }

</style>


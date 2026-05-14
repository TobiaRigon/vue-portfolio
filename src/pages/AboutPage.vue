<template>
  <div class="about-wrapper">
    <section class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="container flex-wrap d-flex justify-content-between">
        <div class="col-10 col-lg-6 mx-5">
          <h1>{{ $t('about.greeting') }}</h1>
          <p class="mx-2">{{ $t('about.bio') }}</p>
          <h1>{{ $t('about.aiTitle') }}</h1>
          <p class="mx-2">{{ $t('about.aiBody') }}</p>
        </div>
        <div class="col-11 mt-4 col-lg-3 mx-5">
          <div>
            <h5>{{ $t('about.likesTitle') }}</h5>
            <ul>
              <li>
                <a href="https://open.spotify.com/user/11153954997/playlists">Making Playlists</a>
              </li>
              <li>Auto UV</li>
              <li>Bali</li>
              <li>Obsidian</li>
              <li>Self-awareness</li>
            </ul>
          </div>

          <div>
            <h5>{{ $t('about.learningTitle') }}</h5>
            <ul>
              <li>Microsoft NAV 365</li>
              <li>Microsoft 365 Admin &amp; Licensing</li>
              <li>System Integration (APIs &amp; Webhooks)</li>
              <li>Laravel</li>
              <li>Mindfulness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  min-height: 100vh;
  margin-top: 25px;
  margin-bottom: 25px;
}
p,
li,
a {
  color: black;
  font-size: 18px;
  font-weight: 400;
}
</style>

<script></script>

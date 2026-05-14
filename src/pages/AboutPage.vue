<template>
  <div class="about-wrapper">
    <section class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="container flex-wrap d-flex justify-content-between">
        <div class="col-10 col-lg-6 mx-5">
          <h1>{{ $t('about.greeting') }}</h1>
          <p v-for="(para, i) in $tm('about.bio')" :key="i" class="mx-2">{{ para }}</p>
          <h1>{{ $t('about.aiTitle') }}</h1>
          <p v-for="(para, i) in $tm('about.aiBody')" :key="i" class="mx-2">{{ para }}</p>
        </div>
        <div class="col-11 mt-4 col-lg-3 mx-5">
          <div>
            <h5>{{ $t('about.likesTitle') }}</h5>
            <ul>
              <li><a href="https://open.spotify.com/user/11153954997/playlists" target="_blank" rel="noopener">Making Playlists</a></li>
              <li>Building Systems</li>
              <li>Obsidian</li>
              <li>Open Web &amp; Free Internet</li>
              <li>Vibe Coding</li>
              <li>Not Vibe Coding</li>
            </ul>
          </div>

          <div>
            <h5>{{ $t('about.learningTitle') }}</h5>
            <ul>
              <li>AI Integration in Production Workflows</li>
              <li>Servers &amp; Linux Infrastructure</li>
              <li>Networking &amp; Physical IT Infrastructure</li>
              <li>Enterprise Systems</li>
              <li>Security &amp; Reliability</li>
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

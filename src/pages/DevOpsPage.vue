<template>
  <section class="d-flex flex-wrap justify-content-center align-items-center">
    <div class="container flex-wrap d-flex justify-content-between">
      <div class="col-10 col-lg-8 mx-5">
        <h1>DevOps</h1>
        <p class="mx-2">
          This site is self-hosted on a Raspberry Pi 3, running from my local
          network. Apache serves the content, with basic port forwarding and
          firewall rules in place. I use a dynamic DNS service to keep the site
          reachable despite my ISP's changing IP address.
        </p>
        <p class="mx-2">
          The domain is registered through Namecheap, where I also manage DNS
          settings and link the domain to my dynamic IP setup. HTTPS is enabled
          with Let’s Encrypt and auto-renewed via a cron job. Deployments are
          done via SSH using a simple script from my development machine.
        </p>
        <p class="mx-2">
          I’ve optimized Raspberry Pi OS and Apache for performance, to ensure
          the site runs smoothly despite hardware limitations. It’s not built
          for scale, but for what it is, it works reliably. Basic security
          measures are in place to reduce the attack surface and mitigate risks.
        </p>
        <p class="mx-2">
          Monitoring is handled manually and occasionally—just enough to keep an
          eye on performance and spot issues. I’ve applied basic SEO techniques
          to make the site indexable without overengineering it. This setup
          exists because I want to learn, minimize costs, and retain full
          control over what I build—without relying on third-party hosting or
          cloud services.
        </p>
        <p class="mx-2">
          It’s a modest setup, but one I understand completely—and that’s the
          point.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DevOpsPage",
};
</script>

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

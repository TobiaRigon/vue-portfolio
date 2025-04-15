<template>
  <div class="container">
    <h1>DevOps</h1>
    <p>
      This site is self-hosted on a Raspberry Pi 3, running from my local
      network. Apache serves the content, with basic port forwarding and
      firewall rules in place. I use a dynamic DNS service to keep the site
      reachable despite my ISP's changing IP address. The domain is registered
      through Namecheap, where I also manage DNS settings and link the domain to
      my dynamic IP setup. HTTPS is enabled with Let’s Encrypt and auto-renewed
      via a cron job. Deployments are done via SSH using a simple script from my
      development machine. I’ve tried to optimize both Raspberry Pi OS and
      Apache for performance, to ensure the site runs smoothly despite the
      hardware limitations. It’s not built for scale, but for what it is, it
      works reliably. Basic security measures are in place to reduce the exposed
      surface and avoid unnecessary risks. Monitoring is handled manually and
      occasionally—enough to keep an eye on performance and spot any obvious
      issues. I’ve also applied basic SEO techniques to make sure the site gets
      indexed properly—just enough to be discoverable without overengineering
      it. This setup exists because I want to learn, minimize costs, and retain
      full control over what I build—without relying on third-party hosting or
      cloud services. It’s a modest setup, but one I understand completely, and
      that’s the point.
    </p>
    <!-- Aggiungi qui contenuti, immagini, tools, ecc -->
  </div>
</template>

<script>
export default {
  name: "DevOpsPage",
};
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>

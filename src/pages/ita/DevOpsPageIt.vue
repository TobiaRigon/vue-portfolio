<template>
  <div class="devOps-wrapper">
    <section class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="container flex-wrap d-flex justify-content-between">
        <div class="col-10 col-lg-8 mx-5">
          <h1>DevOps</h1>
          <p class="mx-2">
            Questo sito è ospitato autonomamente su un Raspberry Pi 3, in
            esecuzione dalla mia rete locale. Apache serve i contenuti, con
            semplici regole di port forwarding e firewall configurate. Utilizzo
            un servizio di DNS dinamico per mantenere il sito raggiungibile
            nonostante l’indirizzo IP variabile fornito dal mio ISP.
          </p>
          <p class="mx-2">
            Il dominio è registrato tramite Namecheap, dove gestisco anche le
            impostazioni DNS e collego il dominio alla configurazione del mio IP
            dinamico. HTTPS è abilitato tramite Let’s Encrypt e si rinnova
            automaticamente con un cron job. I deploy vengono effettuati via SSH
            tramite uno script semplice dal mio computer di sviluppo.
          </p>
          <p class="mx-2">
            Ho ottimizzato Raspberry Pi OS e Apache per garantire buone
            prestazioni, in modo che il sito funzioni in modo fluido nonostante
            le limitazioni hardware. Non è progettato per gestire grandi volumi,
            ma per quello che fa, funziona in modo affidabile. Sono in atto
            misure di sicurezza di base per ridurre la superficie di attacco e
            mitigare i rischi.
          </p>
          <p class="mx-2">
            Il monitoraggio viene eseguito manualmente e saltuariamente—quanto
            basta per tenere d’occhio le prestazioni e individuare eventuali
            problemi. Ho applicato tecniche SEO di base per rendere il sito
            indicizzabile senza complicarlo troppo. Questo setup esiste perché
            voglio imparare, ridurre i costi e mantenere il pieno controllo su
            ciò che costruisco—senza dipendere da servizi di hosting o cloud di
            terze parti.
          </p>
          <p class="mx-2">
            È una configurazione modesta, ma che comprendo a fondo—ed è proprio
            questo il punto.
          </p>
        </div>
      </div>
    </section>
  </div>
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

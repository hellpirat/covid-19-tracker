<style>
  .fixed-footer {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
    padding: 1rem 1.5rem 1rem;
  }
</style>

<script>
  export let lastUpdate
</script>

<section class="section is-small">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <slot />
      </div>
    </div>
  </div>
  <br />
  <br />
</section>

<footer class="footer fixed-footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        Based on
        <a
          href="https://systems.jhu.edu/research/public-health/ncov/"
          rel="noopener"
          target="_blank"
        >
          Johns Hopkins CSSE
        </a>
        data. Last update: {lastUpdate}
        <br />
        Check out
        <a
          href="https://docs.google.com/document/d/1vumYWoiV7NlVoc27rMQvmVkVu5cOAbnaW_RKkq2RMaQ/edit"
        >
          how to prepare for COVID-19
        </a>
        .
      </p>
    </div>
  </div>
</footer>

<script>
  import { onMount } from 'svelte'

  import Total from '../modules/app/Total.svelte'
  import Table from '../modules/app/Table.svelte'
  import Layout from '../modules/layout/BaseLayout.svelte'
  import Loader from '../ui/Loader.svelte'

  import * as api from '../api'
  import { formatDate } from '../lib/format-date'

  import 'bulma/css/bulma.css'

  let responseData = null
  let loading = true
  let data
  let lastUpdate

  onMount(async () => {
    data = await api.getLatest()
    loading = false
  })

  $: if (data) {
    lastUpdate = formatDate(data.created)
  }
</script>

{#if loading && !data}
  <Loader title="PageLoader" />
{:else}
  <Layout {lastUpdate}>

    <h1 class="title has-text-centered">COVID-19 cases</h1>
    <Total
      confirmedCount="{data.confirmed}"
      recoveredCount="{data.recovered}"
      deathsCount="{data.deaths}"
    />

    <progress
      class="progress is-success"
      max="{data.confirmed}"
      value="{data.recovered}"
    ></progress>

    <div>
      <Table countriesData="{data.countries_data}" />
    </div>
  </Layout>
{/if}

<script>
  import { onMount } from 'svelte'
  import { Progress } from 'svelma'

  import Total from '../modules/app/Total.svelte'
  import Table from '../modules/app/Table.svelte'
  import Layout from '../modules/layout/BaseLayout.svelte'
  import Loader from '../ui/Loader.svelte'

  import { request } from '../lib/request'
  import { formatDate } from '../lib/format-date'

  import 'bulma/css/bulma.css'

  let responseData = null
  let loading = true
  let data
  let lastUpdate

  onMount(async () => {
    responseData = await request('summary/')
    loading = false
  })

  console.log(responseData)

  $: data = responseData && responseData.results && responseData.results[0]
  $: console.log(data)
  $: lastUpdate = formatDate(data && data.created)
</script>

<Layout {lastUpdate}>
  {#if loading && !data}
    <Loader title="PageLoader" />
  {:else}
    <h1 class="title has-text-centered">COVID-19 cases</h1>
    <Total
      confirmedCount="{data.confirmed}"
      recoveredCount="{data.recovered}"
      deathsCount="{data.deaths}"
    />

    <Progress
      type="is-success"
      value="{data.recovered}"
      max="{data.confirmed}"
    />
    <Table countriesData="{data.countries_data}" />
  {/if}

</Layout>

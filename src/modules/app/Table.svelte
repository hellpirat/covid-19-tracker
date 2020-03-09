<script>
  import { getPercentage } from '../../lib/percentage'
  import { formatNumber } from '../../lib/format-number'

  export let countriesData
</script>

<style>
  .sticky {
    position: sticky;
    top: 0;
    background: #fff;
  }
</style>

  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th class="sticky" scope="col">Country</th>
        <th class="sticky" scope="col">Confirmed</th>
        <th class="sticky" scope="col">Recovered</th>
        <th class="sticky" scope="col">Deaths</th>
      </tr>
    </thead>
    <tbody>
      {#each countriesData as country}
        <tr>
          <th scope="row">{country.region}</th>
          <td>{formatNumber(country.confirmed)}</td>
          <td>
            {formatNumber(country.recovered)}
            <span class="has-text-weight-light">
              ({getPercentage(country.recovered, country.confirmed)}%)
            </span>
          </td>
          <td class="has-text-grey-light">{formatNumber(country.deaths)}</td>
        </tr>
      {/each}
    </tbody>
  </table>

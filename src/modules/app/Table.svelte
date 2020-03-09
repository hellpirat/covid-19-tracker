<script>
  import { getPercentage } from '../../lib/percentage'
  import { formatNumber } from '../../lib/format-number'
  export let countriesData
</script>

<div class="table-container">
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th scope="col">Country</th>
        <th scope="col">Confirmed</th>
        <th scope="col">Recovered</th>
        <th scope="col">Deaths</th>
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
</div>

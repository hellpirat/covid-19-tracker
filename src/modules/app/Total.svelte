<script>
  import { getPercentage } from '../../lib/percentage'
  import { formatNumber } from '../../lib/format-number'

  export let confirmedCount
  export let recoveredCount
  export let deathsCount
</script>

<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Confirmed</p>
      <p class="title">{formatNumber(confirmedCount)}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Recovered</p>
      <p class="title">
        {formatNumber(recoveredCount)}
        <span class="has-text-grey-dark">
          ({getPercentage(recoveredCount, confirmedCount)}%)
        </span>
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Deaths</p>
      <p class="title has-text-grey-light">{formatNumber(deathsCount)}</p>
    </div>
  </div>
</nav>

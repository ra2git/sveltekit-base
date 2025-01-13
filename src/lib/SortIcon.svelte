<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { BarsArrowDown, BarsArrowUp, Bars3 } from "@steeze-ui/heroicons";

  let { direction }: { direction: number } = $props();
</script>

{#if direction === 0}
  <Icon src={Bars3} class="size-5"></Icon>
{:else if direction === 1}
  <Icon src={BarsArrowUp} class="size-5"></Icon>
{:else}
  <Icon src={BarsArrowDown} class="size-5"></Icon>
{/if}

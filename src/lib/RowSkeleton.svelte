<script lang="ts">
  let { id }: { id: string } = $props();
</script>

<tr {id} class="h-8">
  <td
    class="content-line whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
  >
    <div class="shimmer-bg w-100 h-4"></div></td
  >
  <td
    class="content-line whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-500"
  >
    <div class="shimmer-bg w-100 h-4"></div>
  </td>
  <td class="whitespace-nowrap pl-4 pr-3 text-sm text-gray-500"
    ><div class="shimmer-bg w-100 h-4"></div></td
  >
</tr>

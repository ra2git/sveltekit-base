<tr class="h-8">
  <td
    class="content-line whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
  >
    <div class="shimmer-bg w-100 h-4"></div></td
  >
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

<style>
  .shimmer-bg {
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
    background-size: 1200px 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }
</style>

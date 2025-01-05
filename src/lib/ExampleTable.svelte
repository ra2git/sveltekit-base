<script>
  import exampleData from '../data/quotas.json';
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
  <div>
    <div class="px-4 pt-5 pb-0 sm:p-6 sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Quotas</h1>
        <p class="mt-2 text-sm text-gray-700">List of all the quotas in the project.</p>
      </div>      
      <div>
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600">
          Create                   
        </button>
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600">
          Export                   
        </button>
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-eaGrey-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-eaGrey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eaGrey-600">
          Import 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mr-0.5 size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
          </svg>                    
        </button>
      </div>
    </div>
    <div class="max-h-[600px] overflow-y-auto">
      <div class="px-4 sm:px-6 lg:px-8 flow-root">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">Name</th>  
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">Status</th>
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">Limit</th>                  
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                {#each exampleData as quota}
                <tr id="{quota.id}">
                  <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500">{quota.name}</td>            
                  <td class="whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-500">
                    {#if quota.is_enabled}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                    {:else}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Disabled
                    </span>   
                    {/if}
                  </td>
                  <td class="whitespace-nowrap pl-4 pr-3  text-sm text-gray-500">{quota.limit}</td>
                </tr>           
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
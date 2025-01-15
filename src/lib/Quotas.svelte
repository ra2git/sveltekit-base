<script lang="ts">
  import SortIcon from "./SortIcon.svelte";
  import RowSkeleton from "./RowSkeleton.svelte";
  import { fetchQuotas, filterData, sortData } from "./utils";
  import type { Quota } from "./utils";

  let original = $state<Quota[]>([]);
  let search = $state("");
  let sort = $state<Record<string, number>>({
    name: 0,
    is_enabled: 0,
    limit: 0,
  });

  let loading = $state(true);

  let data = $derived.by<Quota[]>(() => {
    return sortData(filterData(original, search), sort);
  });

  $effect(() => {
    loading = true;
    fetchQuotas("some-id").then((response) => {
      original = response;
      loading = false;
    });
  });

  const handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    search = value;
  };

  const handleSort = (event: Event) => {
    const { name } = event.currentTarget as HTMLButtonElement;
    sort = { ...sort, [name]: (sort[name] + 1) % 3 };
  };
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
  <div>
    <div class="p-2">
      <div
        class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={search}
          oninput={handleSearch}
          class="block min-w-0 grow rounded-s-md border-gray-300 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
        />
        <div class="flex p-1.5">
          <kbd
            class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400"
            >⌘K</kbd
          >
        </div>
      </div>
    </div>
    <div class="max-h-[600px] overflow-y-auto">
      <div class="flow-root px-4 sm:px-6 lg:px-8">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    <input
                      type="checkbox"
                      class="cursor-pointer rounded border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    />
                  </th>
                  <th
                    scope="col"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    <button
                      type="button"
                      class="flex cursor-pointer gap-2"
                      onclick={handleSort}
                      name="name"
                    >
                      <span>Name</span>
                      <SortIcon direction={sort.name}></SortIcon>
                    </button>
                  </th>
                  <th
                    scope="col"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    <button
                      type="button"
                      class="flex cursor-pointer gap-2"
                      onclick={handleSort}
                      name="is_enabled"
                    >
                      <span>Status</span>
                      <SortIcon direction={sort.status}></SortIcon>
                    </button>
                  </th>
                  <th
                    scope="col"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    <button
                      type="button"
                      class="flex cursor-pointer gap-2"
                      onclick={handleSort}
                      name="limit"
                    >
                      <span>Limit</span>
                      <SortIcon direction={sort.limit}></SortIcon>
                    </button>
                  </th>
                  <th
                    scope="col"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                {#if loading === true}
                  {#each { length: 10 }}
                    <RowSkeleton></RowSkeleton>
                  {/each}
                {:else}
                  {#each data as quota}
                    <tr id={quota.id}>
                      <td
                        class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer rounded border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
                        >{quota.name}</td
                      >
                      <td
                        class="whitespace-nowrap pl-4 pr-3 text-sm font-medium text-gray-500"
                      >
                        {#if quota.is_enabled}
                          <span
                            class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                          >
                            Enabled
                          </span>
                        {:else}
                          <span
                            class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800"
                          >
                            Disabled
                          </span>
                        {/if}
                      </td>
                      <td
                        class="whitespace-nowrap pl-4 pr-3 text-sm text-gray-500"
                        >{quota.limit}</td
                      >
                      <td
                        class="whitespace-nowrap pl-4 pr-3 text-sm text-gray-500"
                        >Edit</td
                      >
                    </tr>
                  {/each}
                {/if}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

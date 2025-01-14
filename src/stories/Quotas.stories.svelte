<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Quotas from "$lib/Quotas.svelte";

  const { Story } = defineMeta({
    title: "Quotas",
    component: Quotas,
    tags: ["autodocs"],
  });
</script>

<Story name="Primary" />

<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Quotas from "$lib/Quotas.svelte";

  const { Story } = defineMeta({
    title: "Quotas",
    component: Quotas,
    tags: ["autodocs"],
  });
</script>

<!-- Example table with default styling from tailwind and light branding -->
<Story name="Primary" />

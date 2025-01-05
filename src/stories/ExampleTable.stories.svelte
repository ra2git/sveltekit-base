<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ExampleTable from '$lib/ExampleTable.svelte';
  
  const { Story } = defineMeta({
    title: 'Example Table',
    component: ExampleTable,
    tags: ['autodocs'],
  });
</script>

<!-- Example table with default styling from tailwind and light branding -->
<Story name="Primary" />

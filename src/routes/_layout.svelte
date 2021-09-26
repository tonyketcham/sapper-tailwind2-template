<Nav {segment} />

<main>
  <slot />
</main>

<script lang="ts">
  import Nav from '../components/Nav.svelte';

  export let segment: string;
</script>

<style lang="postcss">
  main {
    @apply relative;
    @apply max-w-4xl;
    @apply bg-white;
    @apply p-8 my-0 mx-auto;
    @apply box-border;
  }
</style>

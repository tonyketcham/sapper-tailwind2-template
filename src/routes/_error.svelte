<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<script lang="ts">
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="postcss">
  h1,
  p {
    @apple my-0 mx-auto;
  }

  h1 {
    @apply text-4xl font-bold;
    @apply mb-2;
  }

  p {
    @apply my-4 mx-auto;
  }

  @media (min-width: 480px) {
    h1 {
      @apply text-6xl;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section class="flex flex-col space-y-3">
  <div class="relative flex justify-center">
    <h1 class="relative flex m-6 text-5xl" class:bg-gray-200={isGray}>
      Great success!
      <span
        class="absolute h-1 bg-gray-700 rounded-lg -bottom-1 left-7 right-7"
      />
    </h1>
  </div>
  <figure class="flex flex-col w-8/12 m-auto">
    <img alt="Success Kid" src={successkid} class="rounded-md" />
    <figcaption class="italic text-center text-gray-600">
      Have fun with Sapper!
    </figcaption>
  </figure>

  <p class="p-10 font-mono tracking-tight text-center text-indigo-700">
    <strong
      >Try editing this file (src/routes/index.svelte) to test live reloading.</strong
    >
  </p>
</section>

<script lang="ts">
  import successkid from 'images/successkid.jpg';
  let isGray = true;
</script>

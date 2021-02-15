<nav class="p-1">
  <ul class="flex space-x-2 text-lg">
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href="."
        >home</a
      >
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about"
        >about</a
      >
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a
      >
    </li>
  </ul>
</nav>

<script>
  export let segment;
</script>

<style>
  li {
    @apply bg-yellow-400 px-1;
  }
</style>

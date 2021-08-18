<script>
import IntersectionObserver from "../FUN/intersection.svelte";

let element;
let intersecting;

let rootMargin;
</script>
<IntersectionObserver
  element={element}
  bind:intersecting
  bind:rootMargin
>
  <button bind:this={element} id={rootMargin} class="px-5 py-5 text-2xl text-left text-white bg-transparent border-2 border-transparent rounded-2xl sm:px-10 group">
    <slot/>
  </button>
</IntersectionObserver>
<script>
  import IntersectionObserver from './intersection.svelte';
  import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';
  
  const progress = tweened(0, {
		duration: 500,
		easing: sineInOut
	});

  $: style =`
    backdrop-filter: blur(${$progress}px);
    background-color:rgba(20, 56, 167, ${$progress/100}); 
    border-color: rgba(20, 56, 167, ${$progress/12});
  `
  
  let element;
  let intersecting;

  $: intersecting ? progress.set(6) : progress.set(0)

  let rootMargin = '-45%';
  
</script>

<IntersectionObserver
  element={element}
  bind:intersecting
  bind:rootMargin
>
  <button bind:this={element} style={style} id="back" class="px-5 py-5 text-2xl text-left text-white bg-transparent border-2 border-transparent rounded-2xl sm:px-10 group">
    {rootMargin}
    <slot/>
  </button>
</IntersectionObserver>
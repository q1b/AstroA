<script>
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

  $: style =`
    backdrop-filter: blur(${$progress}px);
    border-color: rgba(15, 23, 42, ${$progress/6});
    text-shadow: 0px 1px 4px rgba(167, 64, 246, ${$progress/9});
  `
</script>

<button id="Projects" on:mouseenter={()=>{progress.set(6)}} on:mouseleave={()=>{progress.set(0)}} style={style} class="mt-2 text-white text-2xl rounded-2xl border-2 border-transparent px-10 py-5 text-left">
    <slot></slot>
</button>
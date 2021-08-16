<script>
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
</script>

<button id="Projects" on:mouseenter={()=>{progress.set(6)}} on:mouseleave={()=>{progress.set(0)}} style={style} class="text-white bg-transparent text-2xl rounded-2xl border-2 border-transparent px-5 sm:px-10 py-5 text-left group">
    <slot></slot>
</button>
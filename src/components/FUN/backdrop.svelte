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

<button id="Projects" on:mouseenter={()=>{progress.set(6)}} on:mouseleave={()=>{progress.set(0)}} style={style} class="px-5 py-5 text-2xl text-left text-white bg-transparent border-2 border-transparent rounded-2xl sm:px-10 group">
    <slot></slot>
</button>
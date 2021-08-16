<script>
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  export let link;
  export let classes;
  export let backgroundColor;
  const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

  $: style =`
    backdrop-filter: blur(${$progress}px);
    border-color: rgba(255, 255, 255, ${$progress/24});
    background-color: rgba(${backgroundColor}, ${$progress/11});
  `
</script>

<a href={link} id="Projects" on:mouseenter={()=>{progress.set(6)}} on:mouseleave={()=>{progress.set(0)}} style={style} class={`text-white hover:text-blueGray-100 font-jetMono hover:font-semibold text-lg rounded-lg border-2 border-transparent px-2 py-1 text-left ${classes}`}>
    <slot></slot>
</a>
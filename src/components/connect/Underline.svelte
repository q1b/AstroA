<script>
import { onMount } from 'svelte';
import { annotate } from 'rough-notation';
export let color;
let e;
onMount(()=>{
  // a for annotation
  const a = annotate( e, {
    type:'underline',
    color: color,
    rtl:false,
    animate:true,
    padding:10,
    animationDuration:500,
    iterations:2,
  });
  a.show();
});
</script>
<span bind:this={e}>
  <slot/>
</span>
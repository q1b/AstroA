<script>
import { onMount } from 'svelte';
import { annotate } from 'rough-notation';
let element;
onMount(() => {
  console.log(element)
  const annotation = annotate( element, { type: 'highlight',color:'#51B2FD33', rtl:false, animate:true ,animationDuration:1000 ,iterations:1 } );
  setTimeout(()=>{
    annotation.show();
  },1000)
});
</script>

<span bind:this={element} class="text-white">
  <slot/>
</span>
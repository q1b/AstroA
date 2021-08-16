<script>
import { onMount } from 'svelte';
import { annotate,annotationGroup } from 'rough-notation';
let ele1;
// Element of my Name
let ele2;
// Programming
let o1;
let o2;
let o3;
let o4;
// connet !
let c1;
function generateAnnotationObject(type,color,iterations=1){
  return {
    type: type,
    color: color, 
    rtl:false, 
    animate:true ,
    padding:10,
    animationDuration:1000 , 
    iterations:iterations, 
  }
}
onMount(()=>{
  // a for annotation
  const a1 = annotate( ele1, generateAnnotationObject('underline','#8033FF'));
  const a2 = annotate( ele2, generateAnnotationObject('highlight','#51B2FD33' ));
  const Eh1 = annotate(o1, generateAnnotationObject('highlight','#FE135A44',1));
  const Eh2 = annotate(o2, generateAnnotationObject('highlight','#FF2E1344',1));
  const Eh3 = annotate(o3, generateAnnotationObject('highlight','#FF6D1344',1));
  const Eh4 = annotate(o4, generateAnnotationObject('highlight','#FFB01344',1));
  const ConnetAnnotation = annotate(c1, generateAnnotationObject('underline','#FFF',2));
  const ag = annotationGroup([a1, a2, Eh1,Eh2,Eh3,Eh4,ConnetAnnotation]);
  ag.show();
  console.log(h1);
});

</script>
<article class="max-w-xl text-white text-xl">
    <h1 class="text-4xl font-black mb-6">Hi there, I'm <span bind:this={ele1}>Sukhpreet</span>.</h1>
    <p class="mb-3">
      I am a lover of new stuff in tech world that is comming everyday
      and slowly becoming part of this vast <span bind:this={ele2}>programming</span> world.
    </p> 
    <p class="mb-3">
      With learning by each passing day in my life,I also love
      to play <span bind:this={o1}>basketball</span>, <span bind:this={o2}>  Brawl Star</span>,<span bind:this={o3}>  Coding</span> and <span bind:this={o4}>  meditation</span>.
    </p>
    <p class="mb-3">
      Take a look at stuff that I can be helpful for developer,
      I love to make new friends and hear about the stuff they are doing,
    </p> 
    <span bind:this={c1} class="" >
      Connect !
    </span>
</article>
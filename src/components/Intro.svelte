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
let buttonConnect;
function generateAnnotationObject(type,color,iterations=1){
  return {
    type: type,
    color: color, 
    rtl:false, 
    animate:true ,
    padding:10,
    animationDuration:500, 
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
  buttonConnect.addEventListener('click',()=>{
    ag.hide();
    ag.show();
  },false)
});
</script>
<article class="relative max-w-xl text-white text-xl selection:text-[#0099ff] selection:bg-[hsla(210,100%,50%,0.2)]">
    <h1 class="text-4xl font-black mb-6">Hi there, I'm <span bind:this={ele1}>Sukhpreet</span>.</h1>
    <p class="mb-3 selection:text-blue-500 selection:bg-blue-500/10">
      I am a lover of new stuff in tech world that is comming everyday
      and slowly becoming part of this vast <span bind:this={ele2}>programming</span> world.
    </p> 
    <p class="mb-3 selection:text-indigo-500 selection:bg-indigo-500/10">
      With learning by each passing day in my life,I also love
      to play <span bind:this={o1}>basketball</span>, <span bind:this={o2}>Brawl&nbsp;Star</span>,<span bind:this={o3}>Coding</span> and <span bind:this={o4}>meditation</span>.
    </p>
    <p class="mb-3 selection:text-purple-500 selection:bg-purple-500/10">
      Take a look at stuff that I can be helpful for developer,
      I love to make new friends and hear about the stuff they are doing,
    </p>
    <a href="/Connect" >
      <span on:mouseenter={(e)=>{
          annotate(e.target,{type:'underline'}).show();
        }} bind:this={c1} class="" >
        Connect !
      </span>
    </a>
    <button bind:this={buttonConnect} class="absolute -top-8 right-0 hover:bg-white hover:text-lightBlue-500 flex items-center justify-center w-8 h-8 focus:ring focus:ring-offset-2 rounded-xl transition-colors ease-in-out">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </button>
</article>
function psr(obj,transformObj,property,value) {
	let prefix = ''
	switch(property){
		case 'rotate':
			prefix='deg'
			if(isXOrY(value)){
				return [...transformObj,`${property}${value.toUpperCase()}(${obj.split('-')[2]}${prefix})`]
			} else{
				//  translate3d(42px, -62px, -135px);
				return [...transformObj,`${property}(${obj.split('-')[1]}${prefix})`]
			}
		case 'scale':
			prefix=''
			if(isXOrY(value)){
				return [...transformObj,`${property}${value.toUpperCase()}(${obj.split('-')[2]/100}${prefix})`]
			} else {
				return [...transformObj,`${property}(${obj.split('-')[1]/100}${prefix})`]
			}
		case 'skew':
			prefix='deg'
			if(isXOrY(value)){
				return [...transformObj,`${property}${value.toUpperCase()}(${obj.split('-')[2]}${prefix})`]
			} else {
				return [...transformObj,`${property}(${obj.split('-')[1]}${prefix}, ${obj.split('-')[2]}${prefix})`]
			}
		case 'translate':
			prefix='px'
			if(isXOrY(value)){
				return [...transformObj,`${property}${value.toUpperCase()}(${obj.split('-')[2]*4}${prefix})`]
			} else {
				return [...transformObj,`${property}3d(${obj.split('-')[1]*4}${prefix}, ${obj.split('-')[2]*4}${prefix}, ${obj.split('-')[3]*4}${prefix})`]
			}
	}
}

function isXOrY(value){
	if( value==='x' || value==='y' || value==='z' ){
		return true
	}else{
		return false
	}
}

function splitClasses(classes) {
  return splitWithSeparator(classes," ")
}

function splitWithSeparator(input, separator) {
  return input.split(new RegExp(`\\${separator}(?![^[]*\\])`, 'g'))
}

export function cvt(str)  {
    const propsArray = splitClasses(str)
    const tempObj = {}
    tempObj['transform'] = []
    propsArray.forEach((a)=>{
        const property = a.split('-')[0]
        const value = a.split('-')[1]
        const transformProperties = ['scale','rotate','skew','translate'];
        if(transformProperties.includes(property)){
        	tempObj.transform = psr(a,tempObj.transform,property,value)
        }else{
        	switch(true){
        		case property==='bg':
        			// bg-transition and bg-[#555] are not type of colorName 
        			let AfterBg = a.split('-')[1]
        			if(AfterBg.endsWith(']')){
        				let colorValue = AfterBg.replace('[','').replace(']','')
        				tempObj['background'] = colorValue
        			} else {
        				let colorName = a.split('-')[1]
        				switch(colorName){
        					case 'white':
        						tempObj['backgroundColor'] = colors["white"]
        						break;
        					case 'black':
        						tempObj['backgroundColor'] = colors["black"]
        						break;
                  case 'transparent':
        						tempObj['backgroundColor'] = colors["transparent"]
        						break;
                  case 'current':
        						tempObj['backgroundColor'] = colors["current"]
        						break;
        					default:
        						let colorName = a.split('-')[1] // blue
        						let colorShade = a.split('-')[2] // 200
        						tempObj['backgroundColor'] = colors[colorName][colorShade]; 
        						break;
        				}
        			}
              break;
            case shortProp.includes(property):
        			tempObj[extValues(property,'-')] = `${value*4}px`
        			break;
            case property==='shadow':
              let Xcor = a.split('-')[1] ?? '0px';
              let Ycor = a.split('-')[2] ?? '2px'; // blue
        			let blurValue = a.split('-')[3] ?? '4px';
        			let spreadValue = a.split('-')[4] ?? '1px';
        			let colorValue = a.split('-')[5] ?? '#FFFFFF33';
        			tempObj['boxShadow'] = `${Xcor} ${Ycor} ${blurValue} ${spreadValue} ${colorValue}`;
              break;
           	default:
           		tempObj[property] = value
        	}
        }
    });
    try{
    	tempObj.transform = tempObj.transform.join(' ')
    } catch{
    	console.log('no transform')
    }
    return tempObj
}

export function simpleCvt(str)  {
    const propsArray = splitClasses(str)
    const tempObj = {}
    propsArray.forEach((a)=>{
        const property = a.split('-')[0]
        const value = a.split('-')[1]
        tempObj[property] = value
    })
    return tempObj
}

export function animation(uid,enter,enterFrom,enterTo,direction="alternate",hiddenFlag=false){
  return (
      `
      if( animate${uid} === undefined ){
        animate${uid} = element${uid}.animate(
          [${JSON.stringify(cvt(enterFrom))},${JSON.stringify(cvt(enterTo))}],
		  		{
            id:"${uid}",
            direction:"normal",
            fill:"both",
		  			duration:${parseInt(cvt(enter).duration)||200},
		  			delay:${parseInt(cvt(enter).delay)||0},
            easing:"${easing}",
		  		}
		    );
        ${hiddenFlag ? `
          animate${uid}.onfinish = function() {
            if(animate${uid}.playbackRate===-1){
              element${uid}.classList.add('hidden');
            }
          }
        ` : `` }
      } else {
        ${ direction==="forward"? `animate${uid}.playbackRate = +1`: (
            direction==="backward" ? `animate${uid}.playbackRate = -1` : `
              animate${uid}.playbackRate === +1 ? animate${uid}.playbackRate = -1 : animate${uid}.playbackRate = +1
            `
          )}
        animate${uid}.ready.then((e)=>{
          animate${uid}.play();
        });
    }`
  )
}
export function animationFrom(uid,enter,enterFrom,enterTo){
  return (
      `
      let animateForward${uid};
      if( animateForward${uid} === undefined ){
        animateForward${uid} = element${uid}.animate(
          [${JSON.stringify(cvt(enterFrom))},${JSON.stringify(cvt(enterTo))}],
		  		{
            id:"${uid}",
            direction:"normal",
            fill:"both",
		  			duration:${parseInt(cvt(enter).duration)||200},
		  			delay:${parseInt(cvt(enter).delay)||0},
            easing:"${easing}",
		  		}
		    )
      } else {
        animateForward${uid}.playbackRate = +1;
        animateForward${uid}.ready.then((e)=>{
          animateForward${uid}.play();
      })
    }`
  )
}
export function animationTo(uid,enter,enterFrom,enterTo,hiddenFlag=false){
  return (
      `
      let animateBackward${uid};
      if( animateBackward${uid} === undefined ){
        animateBackward${uid} = element${uid}.animate(
          [${JSON.stringify(cvt(enterFrom))},${JSON.stringify(cvt(enterTo))}],
		  		{
            id:"${uid}",
            direction:"normal",
            fill:"both",
		  			duration:${parseInt(cvt(enter).duration)||200},
		  			delay:${parseInt(cvt(enter).delay)||0},
            easing:"${easing}",
		  		}
		    );
        ${hiddenFlag ? `
          animateBackward${uid}.onfinish = function() {
              element${uid}.classList.add('hidden');
              console.log(element${uid}.classList)
          }
        ` : ``}
      } else {
        animateBackward${uid}.playbackRate = -1;
        animateBackward${uid}.play();
    }`
  )
}
// import './history.scss';

console.log('aaaaa');

const url ='/_assets/js/about/compilation-history.json';

fetch(url)
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(function(response) {
  const $jsic =document.querySelector('#jsic');
  const $jacct =document.querySelector('#jacct');
  const $jsicLocal =document.querySelector('#jsic-local');
  const $jacctLocal =document.querySelector('#jacct-local');

  // jsic
  const jsonJsic = response.jsic;
  const htmlJsic = [];
  for (let index = 0; index < jsonJsic.length; index++) {
    if(index === 0) {
      htmlJsic.push('<table class="base"><tbody><tr><th></th><th>氏名</th><th>所属</th><th>期間</th><th>場所</th></tr>')
    }
    const element = jsonJsic[index];
    const time = index+1;
    htmlJsic.push('<tr><td>第'+time+'回</td><td>'+element[0]+'</td><td>'+element[1]+'</td><td>'+element[2]+'</td><td>'+element[3]+'</td></tr>')

  }
  htmlJsic.push('</tbody></table>')

  // jacct
  const jsonJacct = response.jacct;
  const htmlJacct = [];
  for (let index = 0; index < jsonJacct.length; index++) {
    if(index === 0) {
      htmlJacct.push('<table class="base"><tbody><tr><th></th><th>氏名</th><th>所属</th><th>期間</th><th>場所</th></tr>')
    }
    const element = jsonJacct[index];
    const time = index+1;
    htmlJacct.push('<tr><td>第'+time+'回</td><td>'+element[0]+'</td><td>'+element[1]+'</td><td>'+element[2]+'</td><td>'+element[3]+'</td></tr>')

  }
  htmlJacct.push('</tbody></table>')

  // jsic-local
  const jsonJsicLocal = response.jsicLocal;
  const htmlJsicLocal = [];
  for (let index = 0; index < jsonJsicLocal.length; index++) {
    if(index === 0) {
      htmlJsicLocal.push('<table class="base history-local"><tbody>')
    }
    const time = index+1;
    const element = jsonJsicLocal[index];
    const length = element.length*4;
    for (let index = 0; index < element.length; index++) {
      const event = element[index];
      if(index === 0) {
        htmlJsicLocal.push('<tr><th rowspan="'+length+'">第'+time+'回</th><td rowspan="4">'+event[0]+'</td><td>開催日</td><td>'+event[1]+'</td></tr>')
        // detail loop
        for (let index = 0; index < event.length; index++) {
          if(index===2) {
            htmlJsicLocal.push('<tr><td>地方会名</td><td>'+event[2]+'</td></tr>')
          }
          if(index===3) {
            htmlJsicLocal.push('<tr><td>地方会名</td><td>'+event[3]+'</td></tr>')
          }
          if(index===4) {
            htmlJsicLocal.push('<tr><td>会場</td><td>'+event[4]+'</td></tr>')
          }
          if(index===5) {
            htmlJsicLocal.push('<tr><td>大会長</td><td>'+event[5]+'</td></tr>')
          }
        }
      } 
      else {
        htmlJsicLocal.push('<tr><td rowspan="4">'+event[0]+'</td><td>開催日</td><td>'+event[1]+'</td></tr>')
        // detail loop
        for (let index = 0; index < event.length; index++) {
          if(index===2) {
            htmlJsicLocal.push('<tr><td>地方会名</td><td>'+event[2]+'</td></tr>')
          }
          if(index===3) {
            htmlJsicLocal.push('<tr><td>地方会名</td><td>'+event[3]+'</td></tr>')
          }
          if(index===4) {
            htmlJsicLocal.push('<tr><td>会場</td><td>'+event[4]+'</td></tr>')
          }
          if(index===5) {
            htmlJsicLocal.push('<tr><td>大会長</td><td>'+event[5]+'</td></tr>')
          }
        }
      }
    }
  }
  htmlJsicLocal.push('</tbody></table>')



  // jacct-local
  const jsonJacctLocal  = response.jacctLocal;
  const htmlJacctLocal  = [];
  for (let index = 0; index < jsonJacctLocal.length; index++) {
    if(index === 0) {
      htmlJacctLocal.push('<table class="base history-local"><tbody>')
    }
    const time = index+1;
    const element = jsonJacctLocal[index];
    const length = element.length*4;
    console.log(length)

    for (let index = 0; index < element.length; index++) {
      const event = element[index];
      if(index === 0) {
        htmlJacctLocal.push('<tr><th rowspan="'+length+'">第'+time+'回</th><td rowspan="4">'+event[0]+'</td><td>開催日</td><td>'+event[1]+'</td></tr>')
        // detail loop
        for (let index = 0; index < event.length; index++) {
          if(index===2) {
            htmlJacctLocal.push('<tr><td>地方会名</td><td>'+event[2]+'</td></tr>')
          }
          if(index===3) {
            htmlJacctLocal.push('<tr><td>地方会名</td><td>'+event[3]+'</td></tr>')
          }
          if(index===4) {
            htmlJacctLocal.push('<tr><td>会場</td><td>'+event[4]+'</td></tr>')
          }
          if(index===5) {
            htmlJacctLocal.push('<tr><td>大会長</td><td>'+event[5]+'</td></tr>')
          }
        }
      } 
      else {
        htmlJacctLocal.push('<tr><td rowspan="4">'+event[0]+'</td><td>開催日</td><td>'+event[1]+'</td></tr>')
        // detail loop
        for (let index = 0; index < event.length; index++) {
          if(index===2) {
            htmlJacctLocal.push('<tr><td>地方会名</td><td>'+event[2]+'</td></tr>')
          }
          if(index===3) {
            htmlJacctLocal.push('<tr><td>地方会名</td><td>'+event[3]+'</td></tr>')
          }
          if(index===4) {
            htmlJacctLocal.push('<tr><td>会場</td><td>'+event[4]+'</td></tr>')
          }
          if(index===5) {
            htmlJacctLocal.push('<tr><td>大会長</td><td>'+event[5]+'</td></tr>')
          }
        }
      }
    }
  }
  htmlJacctLocal.push('</tbody></table>')


  // console.log(jsonJsic);
  // console.log(jsonJacct);
  // console.log(jsonJsicLocal);
  // console.log(jsonJacctLocal);


  $jsic.innerHTML=htmlJsic.join('');
  $jacct.innerHTML=htmlJacct.join('');
  $jsicLocal.innerHTML=htmlJsicLocal.join('');
  $jacctLocal.innerHTML=htmlJacctLocal.join('');
});


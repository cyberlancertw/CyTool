/**
 * 讀取晝面初始化
 * */
function CyLoadingInit() {
    // 不存在 div#divLoading 就創一個放在 body 下第一個
    if (!document.getElementById('divLoading')) {
        let docFrag = document.createDocumentFragment();
        let divLoading = document.createElement('div');
        divLoading.setAttribute('id', 'divLoading');
        docFrag.appendChild(divLoading);
        document.body.insertBefore(docFrag, document.body.childNodes[0]);
        // 創完再跑一次
        CyLoadingInit();
        return;
    }
    let xmls = 'http://www.w3.org/2000/svg';
    let w = Math.min(window.outerWidth * 0.1, window.outerHeight * 0.1);
    if (w < 25) w = 25;
    let r1 = w * 0.05, r2 = w * 0.35, r3 = w * 0.45;
    let x1 = w / 2, y1 = r1, x2 = w / 2, y2 = r1 * 3, x3 = x1 + r2, y3 = w / 2, x4 = w - r1, y4 = w / 2;
    let d = `M${x1} ${y1} A${r1} ${r1},0 1 1 ${x2} ${y2} A${r2} ${r2},0 1 0 ${x3} ${y3} A${r1} ${r1},0 1 1 ${x4} ${y4} A${r3} ${r3},0 1 1 ${x1} ${y1} Z`;

    let docFrag = document.createDocumentFragment();
    let docBg = document.createElement('div');
    docFrag.appendChild(docBg);
    docBg.setAttribute('id', 'loadingBackground');
    docBg.setAttribute('style', 'left: 0; top: 0; width: 100%; height: 100%; background-color: white; position: absolute; opacity: .5; z-index: 99998; display: none;');
    let docFg = document.createElement('div');
    docFrag.appendChild(docFg);
    docFg.setAttribute('id', 'loadingForeground');
    docFg.setAttribute('style', 'left: 50%; top: 50%; position: absolute; z-index: 99999; display: none; transform: translate(-' + x1 + 'px, -' + x1 + 'px);');
    docFg.setAttribute('width', w);
    docFg.setAttribute('height', w);
    let domSvg = document.createElementNS(xmls, 'svg');
    docFg.appendChild(domSvg);
    domSvg.setAttribute('width', w);
    domSvg.setAttribute('height', w);
    let domDefs = document.createElementNS(xmls, 'defs');
    domSvg.appendChild(domDefs);
    let domGradient = document.createElementNS(xmls, 'radialGradient');
    domDefs.appendChild(domGradient);
    domGradient.setAttribute('id', 'loadingGradient');
    domGradient.setAttribute('fx', '.92');
    domGradient.setAttribute('fy', '.56');
    domGradient.setAttribute('cx', '.79');
    domGradient.setAttribute('cy', '.6');
    domGradient.setAttribute('r', '1');
    let domStop1 = document.createElementNS(xmls, 'stop');
    domGradient.appendChild(domStop1);
    domStop1.setAttribute('offset', '.095');
    domStop1.setAttribute('stop-color', '#e4e4e4');
    let domStop2 = document.createElementNS(xmls, 'stop');
    domGradient.appendChild(domStop2);
    domStop2.setAttribute('offset', '.295');
    domStop2.setAttribute('stop-color', '#808080');
    let domStop3 = document.createElementNS(xmls, 'stop');
    domGradient.appendChild(domStop3);
    domStop3.setAttribute('offset', '.685');
    domStop3.setAttribute('stop-color', '#101010');
    let domG = document.createElementNS(xmls, 'g');
    domSvg.appendChild(domG);
    domG.setAttribute('id', 'loadingSVG');
    domG.setAttribute('data-center', x1);
    domG.setAttribute('transform', 'rotate(0 ' + x1 + ' ' + x1 + ')');
    let domPath = document.createElementNS(xmls, 'path');
    domG.appendChild(domPath);
    domPath.setAttribute('d', d);
    domPath.setAttribute('fill', 'url(#loadingGradient)');
    document.getElementById('divLoading').appendChild(docFrag);
}

/**
 * 讀取畫面旋轉
  * @param {number} degree
 */
function CyLoadingRotate(degree) {
    let loadingSVG = document.getElementById('loadingSVG');
    // 非開啟則不動，退出
    if (!loadingSVG.dataset.active) return;
    // 每次順時針旋轉 8 度
    degree += 8;
    let center = loadingSVG.dataset.center;
    let rotateStr = `rotate(${degree} ${center} ${center})`;
    loadingSVG.setAttribute('transform', rotateStr);
    // 五十分之一秒旋轉一次
    setTimeout(function () {
        CyLoadingRotate(degree % 360);
    }, 20);
}

const CyLoading = {
    /**
     * 啟動讀取中畫面
     * */
    Start: function () {
        let loadingSVG = document.getElementById('loadingSVG');
        // 已開啟則不動，退出
        if (loadingSVG.dataset.active) return;

        // 開啟
        loadingSVG.setAttribute('data-active', 1);
        document.getElementById('loadingBackground').style.display = 'block';
        document.getElementById('loadingForeground').style.display = 'block';
        CyLoadingRotate(0);
    },
    /**
     * 關閉讀取畫面
     * */
    Stop: function () {
        document.getElementById('loadingBackground').style.display = 'none';
        document.getElementById('loadingForeground').style.display = 'none';
        document.getElementById('loadingSVG').removeAttribute('data-active');
    }
}

window.addEventListener('load', CyLoadingInit);
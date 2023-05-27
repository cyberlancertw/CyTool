/* Author: cyberlancer
 * https://github.com/cyberlancertw/CyTool */

var CySchema = {};
var xmls = 'http://www.w3.org/2000/svg';


/**
 * 圖示 render
 * */
const CyIconList = {
    'check': 'M140 375l200 250l420 -525l100 80l-520 650l-300 -375z',
    'minus': 'M100 400l30 -30h640l30 30v100l-30 30h-640l-30 -30z',
    'plus': 'M100 400l30 -30h240v-240l30 -30h100l30 30v240h240l30 30v100l-30 30h-240v240l-30 30h-100l-30 -30v-240h-240l-30 -30z',
    'cross': 'M237.9 167.2h42.4l169.7 169.7l169.7 -169.7h42.4l70.7 70.7v42.4l-169.7 169.7l169.7 169.7v42.4l-70.7 70.7h-42.4l-169.7 -169.7l-169.7 169.7h-42.4l-70.7 -70.7v-42.4l169.7 -169.7l-169.7 -169.7v-42.4z',
    'zoom': 'M800 890l-225 -225v-50l-45 -45A315 315 0 1 1 570 530l45 45h50 l225 225l-90 90zM325 70A275 275 0 1 1 325 70zM326 78a245 245 0 1 0 0 500a245 245 0 1 0 0 -500z',
    'pencil': 'M20 870v-150l500 -500l160 160l-500 500h-150z M110 715l20 20l380 -380l-20 -20z M560 180 l80 -80a35.5 35.5 0 0 1 50 0l110 110a35.5 35.5 0 0 1 0 50l-80 80z',
    'trashcan': 'M170 200v-70a40 40 0 0 1 40 -40h150v-50a20 20 0 0 1 20 -20h140a20 20 0 0 1 20 20v50h150a40 40 0 0 1 40 40v70zM400 90h100v-30h-100zM190 240h520l-50 630h-420zM270 310l39 491.4h282l39 -491.4h-50.9l-34.1 430h-70v-430h-50v430h-70l-34.1 -430z',
    'gear': 'M450 30h40l40 120a310.48 310.48 0 0 1 75.59 31.27l113.15 -56.57l56.5 56.5l-56.5 113.22a310.48 310.48 0 0 1 31.27 75.59l120 40v80l-120 40a310.48 310.48 0 0 1 -31.27 75.59l56.5 113.22l-56.5 56.5l-113.15 -59.57a310.48 310.48 0 0 1 -75.59 31.27l-40 120h-80l-40 -120a310.48 310.48 0 0 1 -75.59 -31.27l-113.15 59.57l-56.5 -56.5l56.5 -113.22a310.48 310.48 0 0 1 -31.27 -75.59l-120 -40v-80l120 -40a310.48 310.48 0 0 1 31.27 -75.59l-56.5 -113.22l56.5 -56.5l113.15 56.57a310.48 310.48 0 0 1 75.59 -31.27l40 -120zM450 300a150 150 0 0 0 0 300a150 150 0 0 0 0 -300z',
    'undo': 'M383.2 110l-300 300a56.5 56.5 0 0 0 0 80l300 300v-250a487.5 487.5 0 0 1 450 300a450.9 450.9 0 0 0 -450 -480z',
    'redo': 'M516.8 110l300 300a56.5 56.5 0 0 1 0 80l-300 300v-250a487.5 487.5 0 0 0 -450 300a450.9 450.9 0 0 1 450 -480z',
    'arrow-w': 'M701.1 160l-433 250a46.1 46.1 0 0 0 0 80l433 250z',
    'arrow-e': 'M198.9 160l433 250a46.1 46.1 0 0 1 0 80l-433 250z',
    'arrow-n': 'M740 701.1l-250 -433a46.1 46.1 0 0 0 -80 0 l-250 433z',
    'arrow-s': 'M740 198.9l-250 433a46.1 46.1 0 0 1 -80 0 l-250 -433z',
    'arrow-w-end': 'M770 160l-433 250a46.1 46.1 0 0 0 0 80l433 250zM130 160v580h120v-580z',
    'arrow-e-end': 'M130 160l433 250a46.1 46.1 0 0 1 0 80l-433 250zM770 160v580h-120v-580z',
    'arrow-n-end': 'M740 770l-250 -433a46.1 46.1 0 0 0 -80 0 l-250 433zM740 130h-580v120h580z',
    'arrow-s-end': 'M740 130l-250 433a46.1 46.1 0 0 1 -80 0 l-250 -433zM740 770h-580v-120h580z',
    'arrow-w-b': 'M773.3 50l-623.5 360a46.1 46.1 0 0 0 0 80l623.5 360z',
    'arrow-e-b': 'M126.7 50l623.5 360a46.1 46.1 0 0 1 0 80l-623.5 360z',
    'arrow-n-b': 'M50 773.3l360 -623.5 a46.1 46.1 0 0 1 80 0l360 623.5z',
    'arrow-s-b': 'M50 126.7l360 623.5 a46.1 46.1 0 0 0 80 0l360 -623.5z',
    'arrow-w-end-b': 'M860 50l-623.5 360a46.1 46.1 0 0 0 0 80l623.5 360zM30 50v800h150v-800z',
    'arrow-e-end-b': 'M40 50l623.5 360a46.1 46.1 0 0 1 0 80l-623.5 360zM870 50v800h-150v-800z',
    'arrow-n-end-b': 'M50 860l360 -623.5 a46.1 46.1 0 0 1 80 0l360 623.5z M50 30h800v150h-800z',
    'arrow-s-end-b': 'M50 40l360 623.5 a46.1 46.1 0 0 0 80 0l360 -623.5z M50 860h800v-150h-800z',
    'file': 'M560 60l200 200v440a60 60 0 0 1 -60 60h-80v30a60 60 0 0 1 -60 60h-360a60 60 0 0 1 -60 -60v-580a60 60 0 0 1 60 -60h80v-30a60 60 0 0 1 60 -60zM560 144.8v116.2h116.2zM500 120h-160v580h360v-380h-200zM280 210h-80v580h360v-30h-220a60 60 0 0 1 -60 -60z',
    'file-text': 'M560 60l200 200v440a60 60 0 0 1 -60 60h-80v30a60 60 0 0 1 -60 60h-360a60 60 0 0 1 -60 -60v-580a60 60 0 0 1 60 -60h80v-30a60 60 0 0 1 60 -60zM560 144.8v116.2h116.2zM500 120h-160v580h360v-380h-200zM280 210h-80v580h360v-30h-220a60 60 0 0 1 -60 -60zM640 400v50h-240v-50zM640 500v50h-170v-50zM640 600v50h-240v-50z',
    'file-excel': 'M560 60l200 200v440a60 60 0 0 1 -60 60h-80v30a60 60 0 0 1 -60 60h-360a60 60 0 0 1 -60 -60v-580a60 60 0 0 1 60 -60h80v-30a60 60 0 0 1 60 -60zM560 144.8v116.2h116.2zM500 120h-160v580h360v-380h-200zM280 210h-80v580h360v-30h-220a60 60 0 0 1 -60 -60zM640 380v260h-240v-260zM600 420h-60v70h60zM600 530h-60v70h60zM500 420h-60v180h60zM560 60l200 200v440a60 60 0 0 1 -60 60h-80v30a60 60 0 0 1 -60 60h-360a60 60 0 0 1 -60 -60v-580a60 60 0 0 1 60 -60h80v-30a60 60 0 0 1 60 -60zM560 144.8v116.2h116.2zM500 120h-160v580h360v-380h-200zM280 210h-80v580h360v-30h-220a60 60 0 0 1 -60 -60zM640 380v260h-240v-260zM600 420h-160v70h160zM600 530h-60v70h60zM500 530h-60v70h60z',
};

/**
 * 分析 CyModal 傳入 Size 取得要繪製的彈窗寬與高
 * @param {string} Size
 */
function CyModalCheckWidthHeight(Size) {
    let WidthHeight = [];
    // 傳入 Size 是自訂寬高
    if (Size.indexOf('*') > -1) {
        let wh = Size.split('*');
        if (wh.length != 2) {
            console.error('CyModal 傳入 Size 不符 x*y 字串規則');
            return;
        }
        WidthHeight[0] = parseInt(wh[0]);
        WidthHeight[1] = parseInt(wh[1]);
        if (isNaN(WidthHeight[0]) || isNaN(WidthHeight[1])) {
            console.error('CyModal 傳入 Size 不符 x*y 字串規則');
            return;
        }
    }
    // 使用 XS, S, M, L, XL, XXL 大小
    else {
        switch (Size) {
            case 'XS': WidthHeight[0] = 250; WidthHeight[1] = 200; break;
            case 'S': WidthHeight[0] = 300; WidthHeight[1] = 250; break;
            case 'M': WidthHeight[0] = 450; WidthHeight[1] = 300; break;
            case 'L': WidthHeight[0] = 500; WidthHeight[1] = 400; break;
            case 'XL': WidthHeight[0] = 600; WidthHeight[1] = 450; break;
            case 'XXL': WidthHeight[0] = 800; WidthHeight[1] = 600; break;
            default: console.error('CyModal 傳入 Size 須為 XS,S,M,L,XL,XXL 之一'); return;
        }
    }
    return WidthHeight;
}

/**
 * 繪製 CyModal.Alert 
 * @param {any} Message
 * @param {number} width
 * @param {number} height
 * @param {string} Title
 * @param {string} Text
 * @param {function} Callback
 */
function CyModalAlertRender(Message, Width, Height, Title, Text, Callback) {
    let docFrag = document.createDocumentFragment();
    let divModalAlert = document.createElement('div');
    docFrag.appendChild(divModalAlert);
    divModalAlert.className = 'cy-modal-alert';
    divModalAlert.setAttribute('id', 'divModalAlert');
    let cyModalBg = document.createElement('div');
    divModalAlert.appendChild(cyModalBg);
    cyModalBg.className = 'cy-modal-background';
    let alertFg = document.createElement('div');
    divModalAlert.appendChild(alertFg);
    alertFg.className = 'cy-modal-foreground';
    alertFg.setAttribute('style', 'width:' + Width + 'px;height:' + Height + 'px;');

    let alertContent = document.createElement('div');
    alertFg.appendChild(alertContent);
    alertContent.className = 'cy-modal-content';

    let alertTitle = document.createElement('div');
    alertContent.appendChild(alertTitle);
    alertTitle.className = 'cy-modal-title';
    alertTitle.appendChild(document.createTextNode(Title));

    let alertMain = document.createElement('div');
    alertContent.appendChild(alertMain);
    alertMain.className = 'cy-modal-main';
    // 是 DocumentFragment 或 DomElemnet 就附加上去
    if (Message instanceof Node) alertMain.appendChild(Message);
    // 字串則用 text node 放進去
    else if (typeof Message === 'string') alertMain.appendChild(document.createTextNode(Message));

    let alertFooter = document.createElement('div');
    alertContent.appendChild(alertFooter);
    alertFooter.className = 'cy-modal-alert-footer';

    let alertButton = document.createElement('button');
    alertFooter.appendChild(alertButton);
    alertButton.setAttribute('id', 'CyAlertButton');
    alertButton.className = 'cy-button cy-modal-alert-button';
    alertButton.appendChild(document.createTextNode(Text));
    let promise = new Promise(function (resolve, reject) {
        alertButton.addEventListener('click', function () {
            // 移除本身 div
            document.getElementById('divModalAlert').remove();
            // 有給定按確認後的 callback function 則執行
            if (Callback && typeof Callback === 'function')
                Callback();
            resolve();
        });
    });
    document.body.insertBefore(docFrag, document.body.childNodes[0]);
    // 繪製完成就 focus 在確認按鈕上
    document.getElementById('CyAlertButton').focus();
    return Promise.race([promise]);
}

/**
 * 繪製 CyModal.Confirm
 * @param {any} Message
 * @param {number} Width
 * @param {number} Height
 * @param {string} Title
 * @param {string} TextOk
 * @param {string} TextNo
 * @param {function} CallbackOk
 * @param {function} CallbackNo
 */
function CyModalConfirmRender(Message, Width, Height, Title, TextOk, TextNo, CallbackOk, CallbackNo) {
    let docFrag = document.createDocumentFragment();
    let divModalConfirm = document.createElement('div');
    docFrag.appendChild(divModalConfirm);
    divModalConfirm.className = 'cy-modal-confirm';
    divModalConfirm.setAttribute('id', 'divModalConfirm');
    let cyModalBg = document.createElement('div');
    divModalConfirm.appendChild(cyModalBg);
    cyModalBg.className = 'cy-modal-background';
    let confirmFg = document.createElement('div');
    divModalConfirm.appendChild(confirmFg);
    confirmFg.className = 'cy-modal-foreground';
    confirmFg.setAttribute('style', 'width:' + Width + 'px;height:' + Height + 'px;');

    let confirmContent = document.createElement('div');
    confirmFg.appendChild(confirmContent);
    confirmContent.className = 'cy-modal-content';

    let confirmTitle = document.createElement('div');
    confirmContent.appendChild(confirmTitle);
    confirmTitle.className = 'cy-modal-title';
    confirmTitle.appendChild(document.createTextNode(Title));

    let confirmMain = document.createElement('div');
    confirmContent.appendChild(confirmMain);
    confirmMain.className = 'cy-modal-main';
    // 是 DocumentFragment 或 DomElemnet 就附加上去
    if (Message instanceof Node) confirmMain.appendChild(Message);
    // 字串則用 text node 放進去
    else if (typeof Message === 'string') confirmMain.appendChild(document.createTextNode(Message));

    let confirmFooter = document.createElement('div');
    confirmContent.appendChild(confirmFooter);
    confirmFooter.className = 'cy-modal-confirm-footer';

    let confirmButtonOk = document.createElement('button');
    confirmFooter.appendChild(confirmButtonOk);
    confirmButtonOk.setAttribute('id', 'CyConfirmButtonOk');
    confirmButtonOk.className = 'cy-button cy-modal-confirm-button-ok';
    confirmButtonOk.appendChild(document.createTextNode(TextOk));
    let promiseOk = new Promise(function (resolve, reject) {
        confirmButtonOk.addEventListener('click', function () {
            // 移除本身 div
            document.getElementById('divModalConfirm').remove();
            // 有給定按確認後的 callback function 則執行
            if (CallbackOk && typeof CallbackOk === 'function')
                CallbackOk();
            resolve(true);
        });
    });

    let confirmButtonNo = document.createElement('button');
    confirmFooter.appendChild(confirmButtonNo);
    confirmButtonNo.setAttribute('id', 'CyConfirmButtonNo');
    confirmButtonNo.className = 'cy-button cy-modal-confirm-button-no';
    confirmButtonNo.appendChild(document.createTextNode(TextNo));
    let promiseNo = new Promise(function (resolve, reject) {
        confirmButtonNo.addEventListener('click', function () {
            // 移除本身 div
            document.getElementById('divModalConfirm').remove();
            // 有給定按確認後的 callback function 則執行
            if (CallbackNo && typeof CallbackNo === 'function')
                CallbackNo();
            resolve(false);
        });
    });

    document.body.insertBefore(docFrag, document.body.childNodes[0]);
    // 繪製完成就 focus 在取消按鈕上
    document.getElementById('CyConfirmButtonNo').focus();
    return Promise.race([promiseOk, promiseNo]);
}

/**
 * 繪製 CyModal.Render
 * @param {string} ModalID
 * @param {any} Content
 * @param {number} Width
 * @param {number} Height
 * @param {string} Title
 */
function CyModalRender(ModalID, Content, Width, Height, Title) {
    // 不存在 div#ModalID 就創一個放在 body 下第一個
    if (!document.getElementById(ModalID)) {
        let docFrag = document.createDocumentFragment();
        let divModal = document.createElement('div');
        divModal.setAttribute('id', ModalID);
        divModal.className = 'cy-modal-close';
        docFrag.appendChild(divModal);
        document.body.insertBefore(docFrag, document.body.childNodes[0]);
        // 創完再跑一次
        CyModalRender(ModalID, Content, Width, Height, Title);
        return;
    }
    let docFrag = document.createDocumentFragment();
    let divModal = document.createElement('div');
    docFrag.appendChild(divModal);
    divModal.className = 'cy-modal-alert';
    let cyModalBg = document.createElement('div');
    divModal.appendChild(cyModalBg);
    cyModalBg.className = 'cy-modal-background';
    let modalFg = document.createElement('div');
    divModal.appendChild(modalFg);
    modalFg.className = 'cy-modal-foreground';
    modalFg.setAttribute('style', 'width:' + Width + 'px;height:' + Height + 'px;');

    let modalContent = document.createElement('div');
    modalFg.appendChild(modalContent);
    //modalContent.className = 'cy-modal-content';

    let modalTitle = document.createElement('div');
    modalContent.appendChild(modalTitle);
    modalTitle.className = 'cy-modal-title';
    let modalTitleSpan = document.createElement('span');
    modalTitle.appendChild(modalTitleSpan);
    modalTitleSpan.appendChild(document.createTextNode(Title));
    modalTitleSpan.setAttribute('id', ModalID + '-modal-title');

    let modalCloseButton = document.createElement('button');
    modalTitle.appendChild(modalCloseButton);
    modalCloseButton.setAttribute('id', ModalID + '-close-button');
    modalCloseButton.className = 'cy-modal-close-button';
    let closeIcon = document.createElementNS(xmls, 'svg');
    closeIcon.setAttribute('viewBox', '0 0 900 900');
    closeIcon.setAttribute('style', 'width:1.5rem;height:1.5rem;');
    let path = document.createElementNS(xmls, 'path');
    closeIcon.appendChild(path);
    path.setAttribute('d', 'M237.9 167.2h42.4l169.7 169.7l169.7 -169.7h42.4l70.7 70.7v42.4l-169.7 169.7l169.7 169.7v42.4l-70.7 70.7h-42.4l-169.7 -169.7l-169.7 169.7h-42.4l-70.7 -70.7v-42.4l169.7 -169.7l-169.7 -169.7v-42.4z');
    path.setAttribute('fill', 'currentColor');
    modalCloseButton.appendChild(closeIcon);
    modalCloseButton.addEventListener('click', function () {
        CyModal.Close(ModalID);
    });

    let modalMain = document.createElement('div');
    modalContent.appendChild(modalMain);
    modalMain.className = 'cy-modal-main';
    // 是 DocumentFragment 或 DomElemnet 就附加上去
    if (Content instanceof Node) modalMain.appendChild(Content);
    // 是 string 則抓取以此作為 id 的 DOM，複製出來附加上去
    else if (typeof Content === 'string') {
        let domContent = document.getElementById(Content);
        if (domContent) {
            modalMain.appendChild(domContent.cloneNode(true));
            domContent.remove();
        }
    }
    document.getElementById(ModalID).appendChild(docFrag);
    return;
}

/**
 * 生成 Grid 區域
 * @param {string} GridID
 * @param {object} GridSchema
 */
function CyGridRender(GridID, GridSchema) {
    if (CySchema[GridID]) {
        console.error('ID ' + GridID + ' 重覆使用');
        return;
    }
    else
        CySchema[GridID] = GridSchema;

    let docFrag = document.createDocumentFragment();
    let domTable = document.createElement('table');
    docFrag.appendChild(domTable);
    domTable.className = 'grid-table';
    domTable.setAttribute('id', GridID + '-table');
    domTable.setAttribute('data-primarykey', GridSchema.PrimaryKey);

    // 預設排序
    if (GridSchema.Sort && GridSchema.Sort.SortDefaultEnable) {
        domTable.setAttribute('data-sorttype', GridSchema.Sort.SortType);
        domTable.setAttribute('data-sortdesc', GridSchema.Sort.SortDesc);
    }

    let domThead = document.createElement('thead');
    domTable.appendChild(domThead);
    domThead.className = 'grid-thead';
    domThead.setAttribute('id', GridID + '-thead');

    let domTr = document.createElement('tr');
    domThead.appendChild(domTr);
    let hiddens = [], visibles = [];
    for (let i = 0; i < GridSchema.Column.length; i++) {
        let item = GridSchema.Column[i];
        if (item.Hidden) {
            hiddens.push(item.DataName);
        }
        else {
            let domTh = document.createElement('th');
            domTr.appendChild(domTh);
            domTh.textContent = item.ColumnName;
            if (item.Width)
                domTh.setAttribute('style', 'width:' + item.Width + 'px');

            visibles.push(item.DataName);

            // 有給定 SortType 表示可排序
            if (item.SortType) {
                domTh.classList.add('sortable');
                // 點擊欄位標題
                domTh.addEventListener('click', function () {
                    let data = document.getElementById(GridID + '-table').dataset;
                    // 若已經依這個排序，則遞增遞減對調
                    if (data.sorttype == item.SortType) {
                        if (data.sortdesc == '1')
                            data.sortdesc = '0';
                        else
                            data.sortdesc = '1';
                    }
                    // 若上一個排序依據和點選的不同，則設定下去，待重新 Read
                    else {
                        data.sortdesc = '0';
                        data.sorttype = item.SortType;
                    }
                    // 重新讀取資料
                    CyGrid.Read(GridID);
                })
            }
        }
    }
    if (hiddens.length > 0)
        domThead.setAttribute('data-hiddens', hiddens.join(','));
    if (visibles.length > 0)
        domThead.setAttribute('data-visibles', visibles.join(','));

    // 分頁設定
    if (GridSchema.Page && GridSchema.Page.Enable) {
        domTable.setAttribute('data-pageenable', GridSchema.Page.Enable ? '1' : '0');
        domTable.setAttribute('data-pagenow', '0');
        domTable.setAttribute('data-pagesize', GridSchema.Page.PageSize);

        let domPage = document.createElement('div');
        if (GridSchema.Page.PositionUp)
            docFrag.insertBefore(domPage, docFrag.childNodes[0]);
        else
            docFrag.appendChild(domPage);
        domPage.setAttribute('id', GridID + '-page');
        domPage.classList.add('grid-page');

        let domPageRange = document.createElement('div');
        domPage.appendChild(domPageRange);
        domPageRange.classList.add('grid-page-range-block');
        let spanRange = document.createElement('span');
        domPageRange.appendChild(spanRange);
        spanRange.setAttribute('id', GridID + '-page-range');
        spanRange.classList.add('grid-page-range');
        spanRange.textContent = '';

        let domPageButton = document.createElement('div');
        domPage.appendChild(domPageButton);
        domPageButton.setAttribute('id', GridID + '-page-button-block');
        domPageButton.classList.add('grid-page-button-block');

        CyPageButtonCreate(domPageButton, GridID, '|<', true, 0);
        CyPageButtonCreate(domPageButton, GridID, '<', true, 1);
        CyPageButtonCreate(domPageButton, GridID, '-', true, 2);
        CyPageButtonCreate(domPageButton, GridID, '', true, 3);
        CyPageButtonCreate(domPageButton, GridID, '1', false, 4);
        CyPageButtonCreate(domPageButton, GridID, '', true, 5);
        CyPageButtonCreate(domPageButton, GridID, '', true, 6);
        CyPageButtonCreate(domPageButton, GridID, '>', true, 7);
        CyPageButtonCreate(domPageButton, GridID, '>|', true, 8);
        let domPageInfo = document.createElement('div');
        domPage.appendChild(domPageInfo);
        domPageInfo.classList.add('grid-page-info-block');

        let spanJump = document.createElement('span');
        domPageInfo.appendChild(spanJump);
        spanJump.textContent = '跳至第 ';

        let domPageJump = document.createElement('div');
        domPageInfo.appendChild(domPageJump);
        let domJumpSelect = document.createElement('select');
        domPageJump.appendChild(domJumpSelect);
        domJumpSelect.setAttribute('id', GridID + '-page-jump');
        domJumpSelect.classList.add('form-control');
        domJumpSelect.classList.add('grid-page-jump');
        let jump0 = new Option(1, 0, true);
        domJumpSelect.appendChild(jump0)
        domJumpSelect.addEventListener('change', function () {
            domTable.dataset.pagenow = event.target.value;
            CyGrid.Read(GridID);
        });

        let spanSize = document.createElement('span');
        domPageInfo.appendChild(spanSize);
        spanSize.textContent = ' 頁，每頁筆數：';

        let domPageSize = document.createElement('div');
        domPageInfo.appendChild(domPageSize);
        let domPageSelect = document.createElement('select');
        domPageSize.appendChild(domPageSelect);
        domPageSelect.classList.add('form-control');
        let sizeList = GridSchema.Page.PageSizeSelect;

        for (let i = 0; i < sizeList.length; i++) {
            let opt = new Option(sizeList[i], sizeList[i], false);
            domPageSelect.appendChild(opt);
        }
        domPageSelect.value = GridSchema.Page.PageSize;

        domPageSelect.addEventListener('change', function () {
            domTable.dataset.pagenow = 0;
            domTable.dataset.pagesize = event.target.value;
            CyGrid.Read(GridID);
        });

        if (GridSchema.MultiSelect) {
            domTable.setAttribute('data-multiselect', 1)
        }
    }

    let domTbody = document.createElement('tbody');
    domTable.appendChild(domTbody);
    domTbody.className = 'grid-tbody';
    domTbody.setAttribute('id', GridID + '-tbody');

    let domGrid = document.getElementById(GridID);
    while (domGrid.firstChild) {
        domGrid.removeChild(domGrid.firstChild);
    }
    domGrid.appendChild(docFrag);

    if (GridSchema.ReadAfterRender) {
        CyGrid.Read(GridID);
    }
}

/**
 * 讀取資料送 AJAX
 * @param {string} GridID
 * @param {string} Url
 * @param {object} QueryData
 */
function CyGridRead(GridID, Url, QueryData) {

    if (QueryData == null)
        var QueryData = {};
    QueryData['Config'] = QueryCyGridConfig(GridID);
    CyLoading.Start();

    fetch(Url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(QueryData)
    })
        .then(res => res.json())
        .then(result => {
            //let config = document.getElementById(GridID + '-table').dataset;
            let schema = CySchema[GridID];
            if (result.success) {
                //處理表格資料繪製
                CyGridFill(GridID, result.data);
                if (schema.Page && schema.Page.Enable) {
                    if(result.data && result.data[0] && result.data[0].datacount)
                    //處理分頁繪製
                    CyPageFill(GridID, parseInt(result.data[0].datacount));
                }
                if (schema && schema.Event && schema.Event.ReadDone) {
                    schema.Event.ReadDone(result.data);
                }
            }
            else {
                CyModal.Alert(result.message, 'L');
            }
        })
        .then(function () {
            CyLoading.Stop();
        }).catch(function () {
            CyLoading.Stop();
        });

}

/**
 * 讀取資料前取得 Grid 設定值
 * @param {string} GridID
 */
function QueryCyGridConfig(GridID) {
    let data = document.getElementById(GridID + '-table').dataset;
    let config = {};
    if (data.pageenable) config['PageEnable'] = data.pageenable == '1';
    if (data.pagesize) config['PageSize'] = parseInt(data.pagesize);
    if (data.pagenow) config['PageNow'] = parseInt(data.pagenow);
    if (data.sorttype) config['SortType'] = data.sorttype;
    if (data.sortdesc) config['SortDesc'] = data.sortdesc == '1';
    return config;
}

/**
 * 將資料放入 Grid 的 tbody 中
 * @param {string} GridID
 * @param {object} FillData
 */
function CyGridFill(GridID, FillData) {
    let config = document.getElementById(GridID + '-table').dataset;
    let schema = CySchema[GridID];
    let docFrag = document.createDocumentFragment();
    let DataHiddens = document.getElementById(GridID + '-thead').dataset.hiddens.split(',');
    let DataVisibles = document.getElementById(GridID + '-thead').dataset.visibles.split(',');
    let s = DataHiddens.length;
    let t = DataVisibles.length;
    // 無資料的顯示
    if (FillData.length == 0) {
        let domTr = document.createElement('tr');
        docFrag.appendChild(domTr);
        domTr.className = 'row-nodata'
        let domTd = document.createElement('td');
        domTr.appendChild(domTd);
        domTd.setAttribute('colspan', t);
        domTd.textContent = '查無資料';
    }
    // 有資料則一列列塞入
    else {
        for (let i = 0, n = FillData.length; i < n; i++) {
            let item = FillData[i];
            let domTr = document.createElement('tr');
            docFrag.appendChild(domTr);
            domTr.setAttribute('data-selected', '0');
            domTr.setAttribute('data-data', JSON.stringify(item));
            domTr.classList.add('grid-row');
            for (let j = 0, c = schema.Column.length; j < c; j++) {
                let dataname = schema.Column[j].DataName;
                // 隱藏的屬性放入 tr 的 dataset 中，之後可用
                if (schema.Column[j].Hidden) {
                    domTr.setAttribute('data-' + dataname, item[dataname]);
                }
                // 可見的屬性用 td 顯示
                else {
                    let domTd = document.createElement('td');
                    domTr.appendChild(domTd);
                    // 有給定 Getter，用 Getter function 取得 node 或 text
                    if (schema.Column[j].Getter) {
                        let getterResult = schema.Column[j].Getter(item, FillData);
                        // 是 createElement 或 createDocumentFragment 等 node 則用 appendChild
                        if (getterResult instanceof Node)
                            domTd.appendChild(getterResult);
                        // 是一般文字
                        else
                            domTd.textContent = getterResult;
                    }
                    // 沒有 Getter 是一般文字則放入 TD 裡
                    else {
                        domTd.textContent = item[dataname];
                    }
                }
            }

            // 多選的點擊
            if (schema.MultiSelect) {
                domTr.addEventListener('click', function () {
                    let selectedList = config.selected.split(',');
                    // 從空的開始選取的處理
                    if (selectedList.length == 1 && selectedList[0] == '')
                        selectedList = [];
                    if (domTr.dataset.selected == '1') {
                        domTr.dataset.selected = '0';
                        domTr.classList.remove('row-selected');
                        // 陣列剔除選取到的主鍵
                        selectedList.pop(item[config.primarykey]);
                        config.selected = selectedList.join(',');
                        // 取消選取的自訂 callback
                        if (schema && schema.Event && schema.Event.RowDeselect) {
                            schema.Event.RowDeselect(item, FillData);
                        }
                    }
                    else {
                        domTr.dataset.selected = '1';
                        domTr.classList.add('row-selected');
                        // 陣列加入選取到的主鍵
                        selectedList.push(item[config.primarykey]);
                        config.selected = selectedList.join(',');
                        // 點擊選取的自訂 callback
                        if (schema && schema.Event && schema.Event.RowSelect) {
                            schema.Event.RowSelect(item, FillData);
                        }
                    }
                });
            }
            // 單選的點擊
            else {
                domTr.addEventListener('click', function () {
                    if (domTr.dataset.selected == '1') {
                        domTr.dataset.selected = '0';
                        domTr.classList.remove('row-selected');
                        // 設定選到的主鍵
                        config.selected = '';
                        // 取消選取的自訂 callback
                        if (schema && schema.Event && schema.Event.RowDeselect) {
                            schema.Event.RowDeselect(item, FillData);
                        }
                    }
                    else {
                        // 解掉其他選取(todo:應該可以用config.primarykey來唯一指定不用跑迴圈)
                        let allRow = document.getElementById(GridID + '-tbody').children;
                        for (let j = 0; j < allRow.length; j++) {
                            allRow[j].dataset.selected = '0';
                            allRow[j].classList.remove('row-selected');
                        }
                        domTr.dataset.selected = '1';
                        domTr.classList.add('row-selected');
                        // 設定選到的主鍵
                        config.selected = item[config.primarykey];
                        // 點擊選取的自訂 callback
                        if (schema && schema.Event && schema.Event.RowSelect) {
                            schema.Event.RowSelect(item, FillData);
                        }
                    }
                });
            }
            // 雙擊的自訂 callback
            if (schema.Event && schema.Event.RowDoubleClick && typeof schema.Event.RowDoubleClick === 'function') {
                domTr.addEventListener('dblclick', function () {
                    schema.Event.RowDoubleClick(item, FillData);
                });
            }


        }
    }
    // 清除之前的 tbody，放入新組成的
    let domBody = document.getElementById(GridID + '-tbody');
    while (domBody.firstChild) {
        domBody.removeChild(domBody.firstChild);
    }
    domBody.appendChild(docFrag);
    config.selected = '';

}

/**
 * 讀取完資料後，再整理分頁等元件
 * @param {string} GridID
 * @param {number} DataCount
 */
function CyPageFill(GridID, DataCount) {
    let schema = CySchema[GridID];
    let config = document.getElementById(GridID + '-table').dataset;
    let pageSize = parseInt(config.pagesize);
    let pageCount = Math.ceil(DataCount / pageSize);
    let pageNow = parseInt(config.pagenow);
    // 範圍
    let maxLength = DataCount.toString().length;
    let rangeStart = pageNow * pageSize + 1;
    let lengthStart = rangeStart.toString().length;
    let rangeEnd = (pageNow + 1) == pageCount ? DataCount : pageSize * (pageNow + 1);
    let lengthEnd = rangeEnd.toString().length;
    document.getElementById(GridID + '-page-range').textContent = '0'.repeat(maxLength - lengthStart) + rangeStart + ' - ' + '0'.repeat(maxLength - lengthEnd) + rangeEnd + ' 共 ' + DataCount + ' 筆';

    // 按鈕
    let buttons = document.getElementById(GridID + '-page-button-block').children;
    for (let i = 0; i < 9; i++) {
        let btn = buttons[i];
        switch (i) {
            case 0:
                CyPageButtonInit(btn, 0, '|<', pageNow != 0);
                break;
            case 1:
                CyPageButtonInit(btn, pageNow - 1, '<', pageNow != 0);
                break;
            case 2:
                if (pageNow > 1)
                    CyPageButtonInit(btn, pageNow - 2, pageNow - 1, true);
                else
                    CyPageButtonInit(btn, pageNow - 2, '　', false);
                break;
            case 3:
                if (pageNow > 0)
                    CyPageButtonInit(btn, pageNow - 1, pageNow, true);
                else
                    CyPageButtonInit(btn, pageNow - 1, '　', false);
                break;
            case 4:
                CyPageButtonInit(btn, pageNow, pageNow + 1, true);
                break;
            case 5:
                if (pageNow < pageCount - 1)
                    CyPageButtonInit(btn, pageNow + 1, pageNow + 2, true);
                else
                    CyPageButtonInit(btn, pageNow + 1, '　', false);
                break;
            case 6:
                if (pageNow < pageCount - 2)
                    CyPageButtonInit(btn, pageNow + 2, pageNow + 3, true);
                else
                    CyPageButtonInit(btn, pageNow + 2, '　', false);
                break;
            case 7:
                if (pageNow < pageCount - 1)
                    CyPageButtonInit(btn, pageNow + 1, '>', true);
                else
                    CyPageButtonInit(btn, pageNow + 1, '>', false);
                break;
            case 8:
                if (pageNow < pageCount - 1)
                    CyPageButtonInit(btn, pageCount - 1, '>|', true);
                else
                    CyPageButtonInit(btn, pageCount - 1, '>|', false);
                break;
            default:
                break;
        }
    }

    // 跳到該頁選單
    let docFragJump = document.createDocumentFragment();
    for (let i = 0; i < pageCount; i++) {
        let opt = new Option(i + 1, i, false);
        docFragJump.append(opt);
    }
    let jump = document.getElementById(GridID + '-page-jump');
    // 清空裡面的 node
    while (jump.firstChild) {
        jump.removeChild(jump.firstChild);
    }
    jump.appendChild(docFragJump);
    jump.value = pageNow;

    // 有讀取結束的事件則執行
    if (schema.Event && schema.Event.PageReadDone && typeof schema.Event.PageReadDone === 'function')
        schema.Event.PageReadDone();
}

/**
 * 初步繪製時產生分頁按鈕
 * @param {Node} ParentNode
 * @param {string} GridID
 * @param {string} Text
 * @param {boolean} Clickable
 */
function CyPageButtonCreate(ParentNode, GridID, Text, Clickable, index) {
    let btn = document.createElement('button');
    if (['|<', '<', '>', '>|'].indexOf(Text) == -1) {
        btn.textContent = Text;
    }
    else {
        let d = '';
        switch (Text) {
            case '|<': d = 'M770 160l-433 250a46.1 46.1 0 0 0 0 80l433 250zM130 160v580h120v-580z'; break;
            case '<': d = 'M701.1 160l-433 250a46.1 46.1 0 0 0 0 80l433 250z'; break;
            case '>': d = 'M198.9 160l433 250a46.1 46.1 0 0 1 0 80l-433 250z'; break;
            case '>|': d = 'M130 160l433 250a46.1 46.1 0 0 1 0 80l-433 250zM770 160v580h-120v-580z'; break;
            default: break;
        }
        let docFrag = document.createDocumentFragment();
        let svg = document.createElementNS(xmls, 'svg');
        docFrag.appendChild(svg);
        svg.setAttribute('style', 'width:1rem;height:1rem;');
        svg.setAttribute('viewBox', '0 0 900 900');
        let path = document.createElementNS(xmls, 'path');
        svg.appendChild(path);
        path.setAttribute('d', d);
        btn.appendChild(docFrag);
    }

    btn.classList.add('grid-page-button');
    if (Clickable) {
        btn.classList.add('grid-page-button-clickable');
        btn.addEventListener('click', function () {
            CyGrid.PageJump(GridID, parseInt(ParentNode.children[index].dataset.topage));
        });
    }
    if (Text == '1')
        btn.classList.add('grid-page-button-pagenow');
    ParentNode.appendChild(btn);
}

/**
 * 重繪 CyGrid 分頁的跳轉區域的按鈕
 * @param {object} ButtonNode
 * @param {number} ToPage
 * @param {string} Text
 * @param {boolean} Enable
 */
function CyPageButtonInit(ButtonNode, ToPage, Text, Enable) {
    ButtonNode.setAttribute('data-topage', ToPage);
    if (['|<', '<', '>', '>|'].indexOf(Text) == -1)
        ButtonNode.textContent = Text;
    if (Enable) {
        ButtonNode.removeAttribute('disabled');
        ButtonNode.classList.add('grid-page-button-clickable');
    }
    else {
        ButtonNode.setAttribute('disabled', true);
        ButtonNode.classList.remove('grid-page-button-clickable');
    }
}



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
    
    let w = Math.min(window.outerWidth * 0.1, window.outerHeight * 0.1);
    if (w < 25) w = 25;
    let r1 = w * 0.05, r2 = w * 0.35, r3 = w * 0.45;
    let x1 = w / 2, y1 = r1, x2 = w / 2, y2 = r1 * 3, x3 = x1 + r2, y3 = w / 2, x4 = w - r1, y4 = w / 2;
    let d = `M${x1} ${y1} A${r1} ${r1},0 1 1 ${x2} ${y2} A${r2} ${r2},0 1 0 ${x3} ${y3} A${r1} ${r1},0 1 1 ${x4} ${y4} A${r3} ${r3},0 1 1 ${x1} ${y1} Z`;

    let docFrag = document.createDocumentFragment();
    let docBg = document.createElement('div');
    docFrag.appendChild(docBg);
    docBg.setAttribute('id', 'loadingBackground');
    docBg.className = 'cy-loading-background';
    let docFg = document.createElement('div');
    docFrag.appendChild(docFg);
    docFg.setAttribute('id', 'loadingForeground');
    docFg.className = 'cy-loading-foreground';
    docFg.setAttribute('width', w);
    docFg.setAttribute('height', w);
    docFg.style.transform = 'translate(-' + x1 + 'px, -' + x1 + 'px)';
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
 * 旋轉讀取畫面
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

/**
 * CyLoading 控制物件
 * */
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
};


/**
 * CyGrid 控制物件
 * */
const CyGrid = {
    /**
     * 在指定位置繪出表格元件
     * @param {string} GridID
     * @param {object} GridSchema
     */
    Render: function (GridID, GridSchema) {
        if (!GridID || !GridSchema) {
            console.error('缺少 GridID 或 GridShcema');
            return;
        }
        if (!document.getElementById(GridID)) {
            console.error('需要 <div id="' + GridID + '"></div> DOM元件');
            return;
        }
        CyGridRender(GridID, GridSchema);
    },
    /**
     * 表格元件讀取資料
     * @param {string} GridID
     */
    Read: function (GridID) {
        let schema = CySchema[GridID];
        if (schema.Event.Read.Url) {
            if (schema.Event.Read.QueryData) {
                CyGridRead(GridID, schema.Event.Read.Url, schema.Event.Read.QueryData());
            }
            else {
                CyGridRead(GridID, schema.Event.Read.Url, null);
            }
        }
    },
    /**
     * 取得表格元件所選取的列編號
     * @param {string} GridID
     */
    Selected: function (GridID) {
        return document.getElementById(GridID + '-table').dataset.selected;
    },
    /**
     * 跳至表格元件的指定分頁
     * @param {string} GridID
     * @param {number} ToPage
     */
    PageJump: function (GridID, ToPage) {
        document.getElementById(GridID + '-table').dataset.pagenow = ToPage;
        this.Read(GridID);
    },
    /**
     * 取得表格元件該主鍵的資料
     * @param {string} GridID
     * @param {string} PrimaryKey
     */
    GetRowData: function (GridID, PrimaryKey) {
        let rows = document.getElementById(GridID + '-tbody').children;
        let primarykey = document.getElementById(GridID + '-table').dataset.primarykey.toLowerCase();
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].dataset[primarykey] == PrimaryKey) {
                let data = rows[i].dataset.data;
                return JSON.parse(data);
            }
        }
        return null;
    }
};


/**
 * CyModal 控制物件
 * */
const CyModal = {
    /**
     * 警告視窗
     * @param {any} Message
     * @param {string} Size
     * @param {string} Title
     * @param {string} Text
     * @param {function} Callback
     */
    Alert: function (Message, Size, Title, Text, Callback) {
        if (!Size) Size = 'M';
        let wh = CyModalCheckWidthHeight(Size);
        if (!wh) return;
        if (!Title) Title = '訊息';
        if (!Text) Text = '確認';
        return CyModalAlertRender(Message, wh[0], wh[1], Title, Text, Callback);
    },
    /**
     * 確認視窗
     * @param {any} Message
     * @param {string} Size
     * @param {string} Title
     * @param {string} TextOk
     * @param {string} TextNo
     * @param {function} CallbackOk
     * @param {function} CallbackNo
     */
    Confirm: function (Message, Size, Title, TextOk, TextNo, CallbackOk, CallbackNo) {
        if (!Size) Size = 'M';
        let wh = CyModalCheckWidthHeight(Size);
        if (!wh) return;
        if (!Title) Title = '訊息';
        if (!TextOk) TextOk = '確認';
        if (!TextNo) TextNo = '取消';
        return CyModalConfirmRender(Message, wh[0], wh[1], Title, TextOk, TextNo, CallbackOk,  CallbackNo);
    },
    /**
     * 繪製彈窗
     * @param {string} ModalID
     * @param {any} Content
     * @param {string} Size
     * @param {string} Title
     */
    Render: function (ModalID, Content, Size, Title) {
        if (!ModalID) {
            console.error('CyModal 缺少 ModalID');
            return;
        }
        if (!(Content instanceof Node || typeof Content === 'string')) {
            console.error('CyModal.Render 需要 Element Node 的 Content，或以此為 id 的 DOM 作為 Content');
            return;
        }
        if (!Size) Size = 'L';
        let wh = CyModalCheckWidthHeight(Size);
        if (!wh) return;
        if (!Title) Title = '';
        CyModalRender(ModalID, Content, wh[0], wh[1], Title);
    },
    /**
     * 開啟彈窗
     * @param {string} ModalID
     */
    Open: function (ModalID) {
        document.getElementById(ModalID).className = 'cy-modal-open';
    },
    /**
     * 關閉彈窗
     * @param {any} ModalID
     */
    Close: function (ModalID) {
        document.getElementById(ModalID).className = 'cy-modal-close';
    },
    SetTitle: function (ModalID, Title) {
        let modal = document.getElementById(ModalID + '-modal-title');
        if (!modal) {
            console.error('不存在 ' + ModalID + '的彈窗');
            return;
        }
        modal.textContent = Title;
    },
    Error: function () {

    }
};

/**
 * CyIcon 控制物件
 * */
const CyIcon = {
    Render: function () {
        let renderObj = document.querySelectorAll('i[data-size]');
        for (let i = 0, n = renderObj.length; i < n; i++) {
            let dom = renderObj[i];
            let iconName = dom.textContent;
            if (!CyIconList[iconName]) {
                console.error('CyIcon 缺少圖示名稱 ' + iconName);
                continue;
            }
            let s = dom.dataset.size;
            if (isNaN(s)) {
                console.error('CyIcon 的 data-size 內必須為數字表示多少 rem');
                continue;
            }
            let docFrag = document.createDocumentFragment();
            let svg = document.createElementNS(xmls, 'svg');
            docFrag.appendChild(svg);
            svg.setAttribute('viewBox', '0 0 900 900');
            svg.setAttribute('style', 'width:' + s + 'rem;height:' + s + 'rem;');
            let path = document.createElementNS(xmls, 'path');
            svg.appendChild(path);
            path.setAttribute('d', CyIconList[iconName]);
            path.setAttribute('fill', 'currentColor');
            dom.parentNode.insertBefore(docFrag, dom);
            dom.remove();
        }
    }
};


window.addEventListener('load', CyLoadingInit);
window.addEventListener('load', CyIcon.Render);
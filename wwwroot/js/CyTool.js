/* Author: cyberlancer
 * https://github.com/cyberlancertw/CyTool */

var CySchema = {};

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
    alertButton.addEventListener('click', function () {
        // 移除本身 div
        document.getElementById('divModalAlert').remove();
        // 有給定按確認後的 callback function 則執行
        if (Callback && typeof Callback === 'function')
            Callback();
    });
    document.body.insertBefore(docFrag, document.body.childNodes[0]);
    // 繪製完成就 focus 在確認按鈕上
    document.getElementById('CyAlertButton').focus();

}


function CyModalConfirmRender(Message, Width, Height, Title, CallbackOk, TextOk, TextNo, CallbackNo) {
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
    confirmButtonOk.addEventListener('click', function () {
        // 移除本身 div
        document.getElementById('divModalConfirm').remove();
        // 有給定按確認後的 callback function 則執行
        if (CallbackOk && typeof CallbackOk === 'function')
            CallbackOk();
    });

    let confirmButtonNo = document.createElement('button');
    confirmFooter.appendChild(confirmButtonNo);
    confirmButtonNo.setAttribute('id', 'CyConfirmButtonNo');
    confirmButtonNo.className = 'cy-button cy-modal-confirm-button-no';
    confirmButtonNo.appendChild(document.createTextNode(TextNo));
    confirmButtonNo.addEventListener('click', function () {
        // 移除本身 div
        document.getElementById('divModalConfirm').remove();
        // 有給定按確認後的 callback function 則執行
        if (CallbackNo && typeof CallbackNo === 'function')
            CallbackNo();
    });

    document.body.insertBefore(docFrag, document.body.childNodes[0]);
    // 繪製完成就 focus 在取消按鈕上
    document.getElementById('CyConfirmButtonNo').focus();
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
    // 事件
    if (GridSchema.Event) {
        if (GridSchema.Event.Read) {
            domTable.setAttribute('data-readurl', GridSchema.Event.Read.Url);
        }
        if (GridSchema.Event.RowSelect)
            domTable.setAttribute('data-rowselect', GridSchema.Event.RowSelect);
        if (GridSchema.Event.RowDeselect)
            domTable.setAttribute('data-rowdeselect', GridSchema.Event.RowDeselect);
        if (GridSchema.Event.RowDoubleClick)
            domTable.setAttribute('data-rowdoubleclick', GridSchema.Event.RowDoubleClick);
        if (GridSchema.Event.ReadDone)
            domTable.setAttribute('data-readdone', GridSchema.Event.ReadDone);
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

        CyPageButtonCreate(domPageButton, GridID, '|<', true);
        CyPageButtonCreate(domPageButton, GridID, '<', true);
        CyPageButtonCreate(domPageButton, GridID, '-', true);
        CyPageButtonCreate(domPageButton, GridID, '', true);
        CyPageButtonCreate(domPageButton, GridID, '1', false);
        CyPageButtonCreate(domPageButton, GridID, '', true);
        CyPageButtonCreate(domPageButton, GridID, '', true);
        CyPageButtonCreate(domPageButton, GridID, '>', true);
        CyPageButtonCreate(domPageButton, GridID, '>|', true);

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
                    if(result.data && result.data[0] && result.data[0].dataCount)
                    //處理分頁繪製
                    CyPageFill(GridID, parseInt(result.data[0].dataCount));
                }
                if (schema && schema.Event && schema.Event.ReadDone) {
                    schema.Event.ReadDone(result.data);
                }
            }
            else {
                alert('!?');// alert
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
                        if (schema && schema.Event && schema.Event.RowSelect) {
                            schema.Event.RowSelect(item, FillData);
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
            if (config.rowdoubleclick) {
                domTr.addEventListener('dblclick', function () {
                    eval(config.rowdoubleclick);
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
}

/**
 * 初步繪製時產生分頁按鈕
 * @param {Node} ParentNode
 * @param {string} GridID
 * @param {string} Text
 * @param {boolean} Clickable
 */
function CyPageButtonCreate(ParentNode, GridID, Text, Clickable) {
    let btn = document.createElement('button');
    btn.textContent = Text;
    btn.classList.add('grid-page-button');
    if (Clickable) {
        btn.classList.add('grid-page-button-clickable');
        btn.addEventListener('click', function () {
            CyGrid.PageJump(GridID, parseInt(event.target.dataset.topage));
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
     * 
     * @param {any} Message
     * @param {string} Size
     * @param {string} Title
     * @param {string} Text
     * @param {function} Callback
     */
    Alert: function (Message, Size, Title, Text, Callback) {
        let wh = CyModalCheckWidthHeight(Size);
        if (!wh) return;
        if (!Title) Title = '訊息';
        if (!Text) Text = '確認';
        CyModalAlertRender(Message, wh[0], wh[1], Title, Text, Callback);
    },
    Confirm: function (Message, Size, Title, CallbackOk, TextOk, TextNo, CallbackNo) {
        let wh = CyModalCheckWidthHeight(Size);
        if (!wh) return;
        if (!Title) Title = '訊息';
        if (!TextOk) TextOk = '確認';
        if (!TextNo) TextNo = '取消';
        CyModalConfirmRender(Message, wh[0], wh[1], Title, CallbackOk, TextOk, TextNo, CallbackNo);
    },
    Render: function (ModalID) {

    },
    Open: function (ModalID) {

    },
    Close: function (ModalID) {

    },
    Error: function () {

    }
};
window.addEventListener('load', CyLoadingInit);
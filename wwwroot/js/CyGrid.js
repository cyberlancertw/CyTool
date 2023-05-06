// 生成 Grid 區域
function CyGridRender(GridID, GridSchema) {

    let docFrag = document.createDocumentFragment();
    let domTable = document.createElement('table');
    docFrag.appendChild(domTable);
    domTable.className = 'table';
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
            domTable.setAttribute('data-readquerydata', GridSchema.Event.Read.QueryData);
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
    domThead.setAttribute('id', GridID + '-thead');

    let domTr = document.createElement('tr');
    domThead.appendChild(domTr);
    let hiddens = [], visibles = [], getters = [];
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
            if (item.Getter)
                domTh.setAttribute('data-getter', item.Getter);
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
    if (GridSchema.Page && GridSchema.Page.PageEnable) {
        domTable.setAttribute('data-pageenable', GridSchema.Page.PageEnable ? '1' : '0');
        domTable.setAttribute('data-pagenow', '0');
        domTable.setAttribute('data-pagesize', GridSchema.Page.PageSize);

        let domPage = document.createElement('div');
        docFrag.insertBefore(domPage, docFrag.childNodes[0]);
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

        PageButtonCreate(domPageButton, GridID, '|<', true);
        PageButtonCreate(domPageButton, GridID, '<', true);
        PageButtonCreate(domPageButton, GridID, '-', true);
        PageButtonCreate(domPageButton, GridID, '', true);
        PageButtonCreate(domPageButton, GridID, '1', false);
        PageButtonCreate(domPageButton, GridID, '', true);
        PageButtonCreate(domPageButton, GridID, '', true);
        PageButtonCreate(domPageButton, GridID, '>', true);
        PageButtonCreate(domPageButton, GridID, '>|', true);


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
    domTbody.setAttribute('id', GridID + '-tbody');
    document.getElementById(GridID).innerHTML = '';
    document.getElementById(GridID).appendChild(docFrag);

    if (GridSchema.ReadAfterRender) {
        CyGrid.Read(GridID);
    }
}

// 讀取資料送 AJAX
function CyGridRead(GridID, Url, QueryData) {

    QueryData['Config'] = QueryCyGridConfig(GridID);
    LoadingStart();

    fetch(Url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(QueryData)
    })
        .then(res => res.json())
        .then(result => {
            let config = document.getElementById(GridID + '-table').dataset;
            if (result.success) {
                GridFill(GridID, result.data);
                if (config.pageenable == '1')
                    PageFill(GridID, result.dataCount);
                if (config.readdone)
                    eval(config.readdone);
            }
        })
        .then(LoadingStop).catch(LoadingStop);

}

// 讀取資料前取得 Grid 設定值
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

// 將資料放入 Grid 的 tbody 中
function CyGridFill(GridID, FillData) {
    let config = document.getElementById(GridID + '-table').dataset;
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
        let isMultiSelect = config.multiselect == '1';
        for (let i = 0, n = FillData.length; i < n; i++) {
            let item = FillData[i];
            let domTr = document.createElement('tr');
            docFrag.appendChild(domTr);
            domTr.setAttribute('data-selected', '0');
            domTr.setAttribute('data-data', JSON.stringify(item));
            domTr.classList.add('grid-row');
            // 隱藏的屬性放入 tr 的 dataset 中，之後可用
            for (let j = 0; j < s; j++) {
                let dataname = DataHiddens[j];
                domTr.setAttribute('data-' + dataname, item[dataname]);
            }
            // 可見的屬性用 td 顯示
            for (let k = 0; k < t; k++) {
                let dataname = DataVisibles[k];
                let domTd = document.createElement('td');
                domTr.appendChild(domTd);
                // 有給定 Getter 則用 Getter，可用 HTML 
                let getter = document.getElementById(GridID + '-thead').querySelector('tr').children[k].dataset.getter;
                if (getter) {
                    domTd.innerHTML = eval(getter);
                }
                else {
                    domTd.textContent = item[dataname];
                }
            }
            // 多選的點擊
            if (isMultiSelect) {
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
                        if (config.rowdeselect)
                            eval(config.rowdeselect);
                    }
                    else {
                        domTr.dataset.selected = '1';
                        domTr.classList.add('row-selected');
                        // 陣列加入選取到的主鍵
                        selectedList.push(item[config.primarykey]);
                        config.selected = selectedList.join(',');
                        // 點擊選取的自訂 callback
                        if (config.rowselect)
                            eval(config.rowselect);
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
                        if (config.rowdeselect)
                            eval(config.rowdeselect);
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
                        if (config.rowselect)
                            eval(config.rowselect);
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
    document.getElementById(GridID + '-tbody').innerHTML = '';
    document.getElementById(GridID + '-tbody').appendChild(docFrag);
    config.selected = '';

}

// 讀取完資料整理分頁等元件
function PageFill(GridID, DataCount) {
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
    document.getElementById(GridID + '-page-range').innerHTML = '0'.repeat(maxLength - lengthStart) + rangeStart + ' - ' + "0".repeat(maxLength - lengthEnd) + rangeEnd + ' 共 ' + DataCount + ' 筆';

    // 按鈕
    let buttons = document.getElementById(GridID + '-page-button-block').children;
    for (let i = 0; i < 9; i++) {
        let btn = buttons[i];
        switch (i) {
            case 0:
                PageButtonInit(btn, 0, '|<', pageNow != 0);
                break;
            case 1:
                PageButtonInit(btn, pageNow - 1, '<', pageNow != 0);
                break;
            case 2:
                if (pageNow > 1)
                    PageButtonInit(btn, pageNow - 2, pageNow - 1, true);
                else
                    PageButtonInit(btn, pageNow - 2, '&nbsp;', false);
                break;
            case 3:
                if (pageNow > 0)
                    PageButtonInit(btn, pageNow - 1, pageNow, true);
                else
                    PageButtonInit(btn, pageNow - 1, '&nbsp;', false);
                break;
            case 4:
                PageButtonInit(btn, pageNow, pageNow + 1, true);
                break;
            case 5:
                if (pageNow < pageCount - 1)
                    PageButtonInit(btn, pageNow + 1, pageNow + 2, true);
                else
                    PageButtonInit(btn, pageNow + 1, '&nbsp;', false);
                break;
            case 6:
                if (pageNow < pageCount - 2)
                    PageButtonInit(btn, pageNow + 2, pageNow + 3, true);
                else
                    PageButtonInit(btn, pageNow + 2, '&nbsp; ', false);
                break;
            case 7:
                if (pageNow < pageCount - 1)
                    PageButtonInit(btn, pageNow + 1, '>', true);
                else
                    PageButtonInit(btn, pageNow + 1, '>', false);
                break;
            case 8:
                if (pageNow < pageCount - 1)
                    PageButtonInit(btn, pageCount - 1, '>|', true);
                else
                    PageButtonInit(btn, pageCount - 1, '>|', false);
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
    jump.innerHTML = ''
    jump.appendChild(docFragJump);
    jump.value = pageNow;
}

// 產生分頁按鈕
function CyPageButtonCreate(ParentNode, GridID, Text, Clickable) {
    let btn = document.createElement('button');
    btn.innerHTML = Text;
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

function CyPageButtonInit(ButtonNode, ToPage, Text, Enable) {
    ButtonNode.setAttribute('data-topage', ToPage);
    ButtonNode.innerHTML = Text;
    if (Enable) {
        ButtonNode.removeAttribute('disabled');
        ButtonNode.classList.add('grid-page-button-clickable');
    }
    else {
        ButtonNode.setAttribute('disabled', true);
        ButtonNode.classList.remove('grid-page-button-clickable');
    }
}




const CyGrid = {
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
    Read: function (GridID) {
        let readurl = document.getElementById(GridID + '-table').dataset.readurl;
        let readquerydata = document.getElementById(GridID + '-table').dataset.readquerydata;
        let datas = eval(readquerydata);
        CyGridRead(GridID, readurl, datas);
    },
    Selected: function (GridID) {
        return document.getElementById(GridID + '-table').dataset.selected;
    },
    PageJump: function (GridID, ToPage) {
        document.getElementById(GridID + '-table').dataset.pagenow = ToPage;
        this.Read(GridID);
    },
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
}


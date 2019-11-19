$(function () {
    sessionStorage.setItem('currentUrl', './page/joblist.html');
    let obj = {
        userhandle: '员工操作权',
        departhandle: '部门操作权',
        jobhandle: ' 职务操作权',
        departcustomer: '部门全部客户',
        allcustomer: '公司全部客户',
        resetpassword: '重置密码'
    }
    let canshow = localStorage.getItem('power').includes('resetpassword');
    if (!canshow) {
        $('.btnBox').remove();
    }

    function trans(power = '') {
        let ary = power.split('|');
        return ary.map(item => {
            return obj[item]
        }).join('|')
    }

    function getData() {
        axios.get('/job/list').then(data => {
            render(data.data);
            eventBind();
        })
    }

    function render(data) {
        let str = '';
        data.forEach(item => {
            let {
                id,
                name,
                desc,
                power
            } = item;
            str += `<tr>
            <td class="w8">${id}</td>
            <td class="w10">${name}</td>
            <td class="w20">${desc}</td>
            <td class="w50">${trans(power)}</td>
            ${canshow?`<td class="w12">
            <a href="./jobadd.html?jobId=${id}">编辑</a>
            <a href="javascript:; " jobId=${id} class="delBtn">删除</a>
        </td>`:''}
        </tr>`;
        })
        $('tbody').html(str);
    }
    getData();

    function eventBind() {
        $('.delBtn').on('click', function () {
            let id = $(this).attr('jobId');
            alert('确定删除吗？', {
                confirm: true,
                handled(type) {
                    if (type == 'CONFIRM') {
                        //确定删除
                        axios.get('/job/delete?jobId=' + id)
                    }
                }
            })
        })
    }
})
var layer = layui.layer,
    form = layui.form,
    element = layui.element,
    laydate = layui.laydate,
    upload = layui.upload;

// 通用提交
form.on('submit(*)', function (data) {
    var index = layer.msg('提交中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 父窗口通用提交
form.on('submit(i)', function (data) {
    var index = layer.msg('提交中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1) {
                setTimeout(function () {
                    parent.location.reload();
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 通用开关
form.on('switch(*)', function (data) {
    var index = layer.msg('修改中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: $(this).data('url'),
        type: 'post',
        dataType: 'json',
        data: {
            name: $(this).attr('name'),
            value: this.checked
        },
        success: function (result) {
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
});
// 通用全选
form.on('checkbox(*)', function(data) {
    var child = $(data.elem).parents('table').find('tbody input[name="ids[]"]');
    child.each(function(index, item) {
        item.checked = data.elem.checked;
    });
    form.render('checkbox');
});
// 通用提交
$('.ajax-submit').on('click', function () {
    var index = layer.msg('提交中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 通用异步
$('.ajax-action').on('click', function () {
    var url = $(this).attr('href');
    var index = layer.msg('请求中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 通用更新
$('.ajax-update').on('blur', function () {
    $.ajax({
        url: $(this).data('url'),
        type: 'post',
        dataType: 'json',
        data: {
            name: $(this).attr('name'),
            value: $(this).val()
        },
        success: function (result) {
            if (result.code === 1) {
                layer.msg(result.msg);
                setTimeout(function () {
                    location.reload();
                }, 1000);
            }
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 通用删除
$('.ajax-delete').on('click', function () {
    var url = $(this).attr('href');
    layer.confirm('确定删除？', {
        icon: 3,
        title: '提示'
    }, function (index) {
        var index = layer.msg('删除中，请稍候', {
            icon: 16,
            time: false,
            shade: 0.3
        });
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            success: function (result) {
                if (result.code === 1 && result.url != '') {
                    setTimeout(function () {
                        location.href = result.url;
                    }, 1000);
                }
                layer.close(index);
                layer.msg(result.msg);
            },
            error: function (xhr, state, errorThrown) {
                layer.close(index);
                layer.msg(state + '：' + errorThrown);
            }
        });
    });
    return false;
});
// 通用详情
$('.ajax-detail').on('click', function () {
    var title = $(this).html();
    var url = $(this).attr('href');
    var index = layer.open({
        title: title,
        type: 2,
        content: url,
        area: ['800px', '800px'],
        success: function (layero, index) {
            /*setTimeout(function () {
                layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
                    tips: 3
                });
            }, 500)*/
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    })
    // layer.full(index);
    return false;
});
// 通用窗口
$('.ajax-iframe').on('click', function () {
    var title = $(this).html();
    var url = $(this).attr('href');
    var index = layer.open({
        title: title,
        type: 2,
        content: url,
        success: function (layero, index) {
            setTimeout(function () {
                layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
                    tips: 3
                });
            }, 500)
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    })
    layer.full(index);
    return false;
});
// 通用搜索
$('.ajax-search').on('click', function () {
    var form = $(this).parents('form');
    var url = form.attr('action');
    var query = form.serialize();
    query = query.replace(/(&|^)(\w*?\d*?\-*?_*?)*?=?((?=&)|(?=$))/g, '');
    query = query.replace(/^&/g, '');
    if (url.indexOf('?') > 0) {
        url += '&' + query;
    } else {
        url += '?' + query;
    }
    location.href = url;
    return false;
});
// 通用批量
$('.ajax-batch').on('click', function() {
    var url = $(this).attr('href');
    var ids = [];
    $("input[name='ids[]']:checked").each(function(i) {
        ids[i] = $(this).val();
    });
    var index = layer.msg('请求中，请稍候', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: {ids: ids},
        success: function(result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function() {
                    location.href = result.url;
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '：' + errorThrown);
        }
    });
    return false;
});
// 添加图标
$('.ajax-icon').on('click', function() {
    var url = $(this).attr('href');
    var index = layer.open({
        title: '选择图标',
        type: 2,
        area: ['100%', '100%'],
        content: url
    });
    return false;
});
// 通用定位
var layid = location.hash.replace(/^#a=/, '');
element.tabChange('a', layid);

element.on('tab(a)', function (elem) {
    location.hash = 'a=' + $(this).attr('lay-id');
});
// 通用上传
upload.render({
    elem: '.ajax-images',
    url: '/admin/common/upload',
    done: function (result) {
        //上传完毕回调
        if (result.code === 1) {
            this.item.siblings('input').val(result.url);
        } else {
            layer.msg(result.msg);
        }
    }
});
// 通用相册
upload.render({
    elem: '.ajax-photos',
    url: '/admin/common/upload',
    multiple: true,
    done: function (result) {
        // 上传完毕回调
        if (result.code === 1) {
            var html = '<div class="layui-form-item"><label class="layui-form-label"></label><div class="layui-input-block"><input type="text" name="photo[]" value="' + result.url + '" autocomplete="off" readonly class="layui-input"><button type="button" class="layui-btn layui-btn-primary layui-btn-position delete-photo"><i class="fa fa-times-circle"></i></button></div></div>';
            this.item.parents('.layui-form-item').after(html);
        } else {
            layer.msg(result.msg);
        }
    }
});
// 上传文件
upload.render({
    elem:'.ajax-file',
    url:'/admin/common/upload',
    accept:'file',
    before: function(obj) { 
        layer.load(2, {shade: [0.5, '#000']}); //上传loading
    },
    done: function(result) {
        layer.close(layer.index);
        if (result.code === 1) {
            layer.msg('上传成功');
            this.item.siblings('input').val(result.url);
        } else layer.msg(result.msg);
    }
})
// 删除相册
$('.layui-form').delegate('.delete-photo', 'click', function () {
    $(this).parents('.layui-form-item').remove();
});
// 选择图标
$('.icon-library .fa').on('click', function(){
    $('input[name=icon]', window.parent.document).val($(this).attr('class'));
    parent.layer.closeAll();
});
form.verify({
    username: function (value, item) { // value：表单的值、item：表单的DOM对象
        if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
            return '用户名不能有特殊字符';
        }
        if (/(^\_)|(\__)|(\_+$)/.test(value)) {
            return '用户名首尾不能出现下划线\'_\'';
        }
        if (/^\d+\d+\d$/.test(value)) {
            return '用户名不能全为数字';
        }
    },

    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    password: [
        /^[\S]{6,12}$/
        , '密码必须6到12位，且不能出现空格'
    ]
});

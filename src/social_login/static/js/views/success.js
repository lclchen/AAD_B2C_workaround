$(function(){
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    var redirect_url = $.cookie('redirect_url') +
                       "?identity_provider=" + $.cookie('identity_provider') +
                       "&social_token=" + $("#social_token").attr('content') +
                       "&aad_token=" + $("#aad_token").attr('content');
                       //+ "$=&code=" + getUrlParam('code')

    //alert($("#aad_openid").attr('content'));
    $.cookie('redirect_url', null);
    $.cookie('identity_provider', null);
    $(window.location).attr('href', redirect_url);
})
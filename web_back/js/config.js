var BASEURL = 'http://192.168.172.91:8000'

// 用来保存所有的接口信息
var APILIST = {
    user_login : BASEURL + '/admin/login',
    user_logout : BASEURL + '/admin/logout',
    user_getInfo : BASEURL + '/admin/getuser',
    user_article : BASEURL + '/admin/article_count',
    user_comment_count : BASEURL + '/admin/comment_count'   //接口有问题，暂时无法解决
}
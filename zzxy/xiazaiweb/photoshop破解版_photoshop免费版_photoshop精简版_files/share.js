 (function() {
    var api= {
        url: function() {
            return encodeURIComponent(window.location.href)
        },
        title: function() {
            return encodeURIComponent(window.document.title)
        },
		
		baiduCang: function() {
            window.open("http://cang.baidu.com/do/add?it=" + this.title() + "&iu=" + this.url())
        },
		baishehui: function() {
            window.open("http://bai.sohu.com/share/blank/addbutton.do?from=fengyin&link=" + this.url() + "&title=" + this.title())
        },
		qqBookMark: function() {
            window.open("http://shuqian.qq.com/post?from=3&title=" + this.title() + "&uri=" + this.url())
        },
		qqZone: function() {
            window.open("http://rc.qzone.qq.com/myhome/share/#action=post&url=" + this.url())
        },
        sinaT: function() {
            window.open("http://v.t.sina.com.cn/share/share.php?url=" + this.url() + "&title=" + this.title())
        }, 
		renren: function() {
            window.open("http://share.renren.com/share/buttonshare.do?link=" + this.url() + "&title=" + this.title())
        },
		kaixin: function() {
            window.open("http://www.kaixin001.com/repaste/share.php?rtitle=" + this.title() + "&rurl=" + this.url() + "&rcontent=" + this.title() + this.url())
        }
        
    };
    window.share = api
})();

 function addBookmark(title,url) {
	if (window.sidebar) {
	window.sidebar.addPanel(title, url,"");
	} else if( document.all ) {
	window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
	return true;
	}
	}

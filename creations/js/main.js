/**
 * Created by Administrator on 2017/4/23.
 */
const data = [
    {
        name:"自制的小投篮游戏",
        time:"2016/6/8",
        tag:"移动端",
        img:"img/fame.png",
        target:'http://www.clramw.top/fame1/index.html'
    },
    {
        name:"仿苏宁移动端",
        time:"2015/10/28",
        tag:"移动端,rem",
        img:"img/suning.png",
        target:'http://www.clramw.top/demo/suning/index.html'
    },
    {
        name:"仿jQuery首页",
        time:"2015/10/20",
        tag:"响应式",
        img:"img/jquery.png",
        target:'http://www.clramw.top/demo/jQuery/index.html'
    },
    {
        name:"3D环形卡片",
        time:"2016/12/28",
        tag:"3D",
        img:"img/3dcards.png",
        target:' http://www.clramw.top/demo/3dcards/index.html'
    },
    {
        name:"3D盒子",
        time:"2016/12/14",
        tag:"3D",
        img:"img/3dbox.png",
        target:' http://www.clramw.top/demo/3dbox/index.html'
    },
    {
        name:"金属风按钮",
        time:"2016/12/28",
        tag:"CSS3",
        img:"img/switch.png",
        target:' http://www.clramw.top/demo/switch/index.html'
    },
    {
        name:"小黄人",
        time:"2016/10/20",
        tag:"CSS绘图",
        img:"img/yellow.png",
        target:' http://www.clramw.top/demo/yellow/yellow.html'
    },
    {
        name:"仿UEhtml首页",
        time:"2015/10/16",
        tag:"响应式",
        img:"img/uehtml.png",
        target:'http://www.clramw.top/demo/UEhtml/index.html'
    },
    {
        name:"仿QQ音乐会员",
        time:"2016/10/9",
        tag:"CSS3",
        img:"img/qqmusicvip.png",
        target:'http://www.clramw.top/demo/qqmusicvip/index.html'
    },
    {
        name:"纸风车",
        time:"2016/9/4",
        tag:"CSS绘图",
        img:"img/windmill.png",
        target:' http://www.clramw.top/demo/windmill/index.html'
    },
    {
        name:"仿QQ音乐首页",
        time:"2016/10/5",
        tag:"好看",
        img:"img/qqmusic.png",
        target:'http://www.clramw.top/demo/qqmusic/QQMusic.html'
    },
    {
        name:"仿迪士尼中国官网",
        time:"2016/9/26",
        tag:"CSS3",
        img:"img/disney.png",
        target:'http://www.clramw.top/demo/disney/index.html'
    },
    {
        name:"仿去哪儿网首页",
        time:"2015/9/21",
        tag:"兼容IE6",
        img:"img/qunaer.png",
        target:'http://www.clramw.top/demo/qunaer/index.html'
    }
];


//渲染li
let str = '';
data.forEach(ele =>{
    str += `<li class="list-item">
			<a href="${ele.target}" target="_blank">
				<div class="list-item-album"><img src="${ele.img}" alt=""></div>
				<div class="list-item-mask">
					<article>
						<h4>${ele.name}</h4>
						<div class="works_info">
							<dl class="works_time">
								<dt></dt>
								<dd>${ele.time}</dd>
								<div class="clear"></div>
							</dl>
							<!--<dl class="fr works_views">-->
							<!--<dt></dt>-->
							<!--<dd>28</dd>-->
							<!--<div class="clear"></div>-->
							<!--</dl>-->
							<dl class="works_comments">
								<dt></dt>
								<dd>${ele.tag}</dd>
								<div class="clear"></div>
							</dl>
						</div>
					</article>
				</div>
			</a>
		</li>`
});
$('#demo-list').html(str);

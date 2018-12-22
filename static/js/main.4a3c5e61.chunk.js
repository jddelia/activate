(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/activatelogo.a9c65e67.png"},16:function(e,t,a){e.exports=a.p+"static/media/activate.5bae620a.png"},20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),s=(a(26),a(17)),l=a(12),o=a(13),m=a(19),u=a(14),h=a(18),d=a(2),f=a(15),v=a.n(f),p=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"nav-left"},i.a.createElement("img",{src:v.a,height:"50",width:"50"})),i.a.createElement("div",{className:"nav-right"},i.a.createElement("a",{href:"#"},"home"),i.a.createElement("a",{href:"#pricing"},"pricing"),i.a.createElement("a",{href:"#about"},"about")))},g=a(16),E=a.n(g),w=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:E.a,height:"500",width:"500"})))},b=a(3),y=a.n(b),k=function(e){var t,a,n;if(e.user){t=e.user[0],a=i.a.createElement("img",{className:"thumbnail",src:t.picture.large});var r=t.name.first[0].toUpperCase()+t.name.first.slice(1),c=t.name.last[0].toUpperCase()+t.name.last.slice(1);n=i.a.createElement("div",{className:"user-name"},i.a.createElement("p",null,r+" "+c))}return i.a.createElement("div",{id:"about",className:"intro"},i.a.createElement("section",{className:"description"},i.a.createElement("h2",{className:"desc-title"},"How It Works"),i.a.createElement("div",{className:"desc-text"},i.a.createElement("p",null,"This app provides a fully integrated, decentralized, scalable infrastructure, with peer-to-peer functionality. The user is able to connect though a distributed system, optimized with the latest machine learning tech. This allows for a reliable network, by which, the user can out-source their activism through our algorithm."))),i.a.createElement("section",{className:"testimonial"},i.a.createElement("div",{className:"user-thumbnail"},a),n,i.a.createElement("div",{className:"user-comment"},i.a.createElement("p",null,'"',e.comment.comment,'"')),i.a.createElement("div",{className:"more-reviews"},i.a.createElement("div",{onClick:function(){y.a.get("https://randomuser.me/api/").then(function(t){e.onClick(t.data.results)})},className:"reviews-btn"},"More Reviews"))))},N=function(){return i.a.createElement("div",{className:"features"},i.a.createElement("h1",null,"Features"),i.a.createElement("div",{className:"feat-types"},i.a.createElement("div",{className:"likes"},i.a.createElement("i",{class:"fas fa-heart fa-5x"}),i.a.createElement("p",null,"Automatic Liking - Likes on AutoPilot")),i.a.createElement("div",{className:"cause"},i.a.createElement("i",{class:"far fa-hand-pointer fa-5x"}),i.a.createElement("p",null,"Select Your Cause - Peace of Mind")),i.a.createElement("div",{className:"share"},i.a.createElement("i",{class:"fas fa-share-alt fa-5x"}),i.a.createElement("p",null,"Share With Friends - Show off your Activism"))))},I=function(){return i.a.createElement("div",{id:"pricing",className:"pricing"},i.a.createElement("h1",null,"Pricing"),i.a.createElement("div",{className:"price-tiers"},i.a.createElement("div",{className:"lite"},i.a.createElement("h2",null,"Activist Lite"),i.a.createElement("p",null,"The Activist Lite package features automatic likes, and the ability to select your cause. This package allows the user to gain a light introduction into activism.")),i.a.createElement("div",{className:"future-leader"},i.a.createElement("h2",null,"Future Leader"),i.a.createElement("p",null,"The Future Leader package is suitable for anyone with the hope of making activism a career. With this package, you will recieve all features, plus the ability for one on one coaching, from a real live activist. They will be available 24/7, to assist you.")),i.a.createElement("div",{className:"foot-soldier"},i.a.createElement("h2",null,"Foot Soldier"),i.a.createElement("p",null,"The Foot Soldier package is great for the on the go activist. If you truly care about the causes, but can't find the time to hit the like button, or share the latest article you read, this package is for you."))))},S=function(){return i.a.createElement("footer",null,i.a.createElement("h4",null,"\xa9 activate 2018"))},T=[{id:1,comment:"Activate has allowed me to be cool amongst my peers, by showing them how socially aware I am. I can feel like I'm changing the world, while not investing much time or effort."},{id:2,comment:"Before Activate, I had to manually like or share posts and content, to do my part as an activist. I now feel empowered, and productive."},{id:3,comment:"This app has been heaven sent. With the wide array of features provided, I can be an activist, without actually being active!"},{id:4,comment:"I was unsure about becoming an activist, but activate made the journey smooth. I was able to schedule when I would like and share a cause of my choosing."},{id:5,comment:"The best part of activate, is the 'Select Your Cause' feature. I was able to just pick topics I was interested in, and the hard work of liking and sharing was done for me."},{id:6,comment:"I used to feel bad about not seeming enough like an activist, amongst my peers. That no longer is the case, thanks to activate!"},{id:7,comment:"I would reccommend this app to anyone. I feel good about myself, because I am helping a bunch of causes, close to my heart, without having to lift a finger."},{id:8,comment:"Whether I'm out partying, or hanging out with friends, I can feel comfort, knowing activate is liking and sharing about causes that I am passionate about."}],j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={user:null,comments:Object(s.a)(T)},a.handleSwitchUser=a.handleSwitchUser.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("https://randomuser.me/api/").then(function(t){e.setState({user:t.data.results})})}},{key:"handleSwitchUser",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this.state.comments[Math.floor(Math.random()*this.state.comments.length)];return i.a.createElement("div",{className:""},i.a.createElement(p,null),i.a.createElement(w,null),i.a.createElement(k,{onClick:this.handleSwitchUser,comment:e,user:this.state.user}),i.a.createElement(N,null),i.a.createElement(I,null),i.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.4a3c5e61.chunk.js.map
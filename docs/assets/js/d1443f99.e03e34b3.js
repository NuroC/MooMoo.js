"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},l=void 0,i={unversionedId:"Player",id:"Player",title:"Player",description:"Accessing Player Information with myPlayer",source:"@site/docs/Player.md",sourceDirName:".",slug:"/Player",permalink:"/MooMoo.js/Player",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"WebSocket",permalink:"/MooMoo.js/WebSocket"},next:{title:"Teams",permalink:"/MooMoo.js/Teams"}},s={},p=[{value:"Accessing Player Information with myPlayer",id:"accessing-player-information-with-myplayer",level:2},{value:"Accessing Player Data and Information",id:"accessing-player-data-and-information",level:3},{value:"Player Positions",id:"player-positions",level:3},{value:"Player Inventory and Items",id:"player-inventory-and-items",level:3},{value:"Player Methods",id:"player-methods",level:2},{value:"Placing Items",id:"placing-items",level:3},{value:"Resources",id:"resources",level:3},{value:"Working with Hats and Accessories",id:"working-with-hats-and-accessories",level:3},{value:"Chatting",id:"chatting",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accessing-player-information-with-myplayer"},"Accessing Player Information with myPlayer"),(0,r.kt)("p",null,"The MooMoo.js API provides a property called ",(0,r.kt)("inlineCode",{parentName:"p"},"myPlayer"),", which represents the current player in the game. This property is only defined when the player is actually in a game, and is undefined if the player has not yet joined."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"myPlayer")," property contains various information about the player, such as their name, position, and more. To access the myPlayer property, simply assign it to a variable like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let player = MooMoo.myPlayer;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": The myPlayer property is only defined when the player is actually in a game, and is undefined if the player has not yet joined."),(0,r.kt)("p",null,"To check if the game has loaded or not, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoaded")," property of the MooMoo API vars. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function doSomething() {\n    let myPlayer = MooMoo.myPlayer;\n    // Do something with myPlayer\n}\n\nsetInterval(() => {\n    if (MooMoo.vars.isLoaded) { // Check if the game has loaded\n        doSomething();\n    }\n}, 1000);\n")),(0,r.kt)("p",null,"or, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"onload")," event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"MooMoo.onGameLoad = () => {\n    let myPlayer = MooMoo.myPlayer;\n    // Do something with myPlayer\n}\n")),(0,r.kt)("p",null,"This is just an example to prevent errors."),(0,r.kt)("h3",{id:"accessing-player-data-and-information"},"Accessing Player Data and Information"),(0,r.kt)("p",null,"Once you have access to the myPlayer property, you can access various data and information about the player, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x"),": the player's x-coordinate on the map"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y"),": the player's y-coordinate on the map"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": the player's name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dir"),": the direction the player is facing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"health"),": the player's current health"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buildIndex"),": the index of the player's current building"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weaponIndex"),": the index of the player's current weapon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weaponVariant"),": the variant of the player's current weapon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"team"),": the player's current team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLeader"),": a boolean indicating whether the player is the leader of their team"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skinIndex"),": the index of the player's current skin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tailIndex"),": the index of the player's current tail"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iconIndex"),": the index of the player's current icon state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zIndex"),": the player's z-index"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isVisible"),": a boolean indicating whether the player is currently visible")),(0,r.kt)("h3",{id:"player-positions"},"Player Positions"),(0,r.kt)("p",null,"There is one special event for position updates, called ",(0,r.kt)("inlineCode",{parentName:"p"},"onPositionUpdate"),". "),(0,r.kt)("p",null,"When the coordinates of ANY player in your view range change, this event will be triggered. The one parameter of this event is the player object, which contains the player's name, x, y, and more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"MooMoo.onPositionUpdate = (player) => {\n    // Player is a Player object, which includes name, x, y and others\n    console.log(player.x);\n    console.log(player.y);\n}\n")),(0,r.kt)("p",null,"You can use this data and information to create scripts or perform other actions."),(0,r.kt)("h3",{id:"player-inventory-and-items"},"Player Inventory and Items"),(0,r.kt)("p",null,"The myPlayer property also includes the player's inventory, which contains the player's items such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primary"),": the player's primary weapon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secondary"),": the player's secondary weapon\n",(0,r.kt)("inlineCode",{parentName:"li"}," food"),": the player's food "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wall"),": the player's wall "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spike"),": the player's spike "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mill"),": the player's mill "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mine"),": the player's mine "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boostPad"),": the player's boost pad "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trap"),": the player's trap\n-",(0,r.kt)("inlineCode",{parentName:"li"},"turret"),": the player's turret "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spawnPad"),": the player's spawn pad\nYou can use these items to create macros or place items on the map.")),(0,r.kt)("h2",{id:"player-methods"},"Player Methods"),(0,r.kt)("p",null,"The myPlayer property also includes several methods that you can use to work with the player."),(0,r.kt)("h3",{id:"placing-items"},"Placing Items"),(0,r.kt)("p",null,"You can use the place method to place items on the map. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let spike = MooMoo.myPlayer.inventory.spike;\nlet place = MooMoo.myPlayer.place;\nplace(spike);\n")),(0,r.kt)("p",null,"The place method can take an optional second argument, which represents the angle in radians relative to the player at which the item will be placed."),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("p",null,"You can get your current points(gold), wood, food, stone, and kills with the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let resources = MooMoo.myPlayer.resources;\nconsole.log(resources.points);\nconsole.log(resources.wood);\n")),(0,r.kt)("h3",{id:"working-with-hats-and-accessories"},"Working with Hats and Accessories"),(0,r.kt)("p",null,"You can use the following methods to work with hats and accessories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equipHat"),": equips a hat. This method can take either a number representing the hat ID or the name of the hat as an argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equipAccessory"),": equips an accessory. This method can take either a number representing the accessory ID or the name of the accessory as an argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unequipHat"),": removes a hat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unequipAccessory"),": removes an accessory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buyHat"),": buys a hat. This method can take either a number representing the hat ID or the name of the hat as an argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"buyAccessory"),": buys an accessory. This method can take either a number representing the accessory ID or the name of the accessory as an argument.")),(0,r.kt)("p",null,"To buy a hat or accessory using the API, you can use the buyHat and buyAccessory methods. These methods work in the same way as the equipHat and equipAccessory methods, and can take either a number representing the item ID or the name of the item as an argument."),(0,r.kt)("h3",{id:"chatting"},"Chatting"),(0,r.kt)("p",null,"You can use the chat method to send a message to the chat. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let chat = MooMoo.myPlayer.chat;\nchat("Hello world!");\n')))}m.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2r/k":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("IJQQ"),l=a("15bR"),o=a("WLZb"),c=a("vOnD"),d=a("Wbzz"),s=a("9eSz"),m=a.n(s),p=a("NmYn"),u=a.n(p),f=a("PvO4"),g=c.default.section.withConfig({displayName:"style__TagContainer",componentId:"ffjhg4-0"})(["background-color:#fff;border-top:1px #e5eff5 solid;border-bottom:1px #e5eff5 solid;padding:40px;margin-top:75px;text-align:center;"]),h=c.default.h2.withConfig({displayName:"style__TagListTitle",componentId:"ffjhg4-1"})(["margin:0 0 40px;"]),y=c.default.ul.withConfig({displayName:"style__StyledTagList",componentId:"ffjhg4-2"})(["display:flex;list-style-type:none;margin:0;padding:0;justify-content:center;@media (max-width:","){flex-wrap:wrap;justify-content:flex-start;}"],f.a.breakpoints.sm),x=c.default.li.withConfig({displayName:"style__StyledTag",componentId:"ffjhg4-3"})(["margin:0 35px;transition:.5s all;&:hover{transform:scale(1.04);}@media (max-width:","){width:50%;margin:0 0 20px 0;&:last-child{margin-bottom:0;}}"],f.a.breakpoints.sm),b=c.default.img.withConfig({displayName:"style__TagIcon",componentId:"ffjhg4-4"})(["max-height:55px;"]),w=c.default.span.withConfig({displayName:"style__TagName",componentId:"ffjhg4-5"})(["display:block;"]),E=c.default.div.withConfig({displayName:"style__TagArchiveLinkWrapper",componentId:"ffjhg4-6"})(["display:block;margin-top:20px;"]),k=Object(c.default)(d.Link).withConfig({displayName:"style__TagArchiveLink",componentId:"ffjhg4-7"})(["font-style:italic;font-size:.8em;"]),I=function(){var e=Object(d.useStaticQuery)("444477021").allTags.nodes;return i.a.createElement(g,null,i.a.createElement(h,null,"Featured Tags"),i.a.createElement(y,null,e.map((function(e,t){var a=e.icon;return i.a.createElement(x,{key:t},i.a.createElement(d.Link,{to:"/tag/"+u()(e.name,{lower:!0})},"svg"!==a.extension?i.a.createElement(m.a,{fixed:e.icon.childImageSharp.fixed}):i.a.createElement(b,{src:a.publicURL,alt:e.name}),i.a.createElement(w,null,e.name)))}))),i.a.createElement(E,null,i.a.createElement(k,{to:"/tags"},"See all tags")))},_=a("dace"),v=c.default.div.withConfig({displayName:"sidebar-content__StickySidebarContent",componentId:"sc-1om5pwh-0"})(["position:sticky;top:30px;"]),C=function(){return i.a.createElement(v,null,i.a.createElement(_.a,{textAlign:"justify",avatarStyle:{float:"left",margin:"0 20px 5px 0"}}))},O=a("ywv1"),N=Object(c.default)(l.a).withConfig({displayName:"posts__HomeContainer",componentId:"sc-1b8h1ct-0"})(["display:grid;grid-template-columns:minmax(0,1fr) .25fr;grid-column-gap:30px;@media (max-width:","){grid-template-columns:1fr;}"],f.a.breakpoints.xl),A=Object(c.default)(l.b).withConfig({displayName:"posts__PostsContainer",componentId:"sc-1b8h1ct-1"})(['display:grid;grid-template-columns:repeat(2,1fr);grid-template-areas:"latest latest" ". .";width:100%;margin-left:0;margin-right:0;margin-top:-30px;@media (max-width:',"){display:block;padding:0;article{margin-bottom:30px;}}"],f.a.breakpoints.sm),S=c.default.aside.withConfig({displayName:"posts__Sidebar",componentId:"sc-1b8h1ct-2"})(["width:315px;padding-top:30px;@media (max-width:","){margin:30px auto;border-top:2px #e5eff5 solid;padding:20px;width:100%;}"],f.a.breakpoints.xl),j=c.default.div.withConfig({displayName:"posts__ArchiveLinkWrapper",componentId:"sc-1b8h1ct-3"})(["grid-column:1 / -1;text-align:center;"]),z=Object(c.default)(d.Link).withConfig({displayName:"posts__ArchiveLink",componentId:"sc-1b8h1ct-4"})(["font-size:.8em;padding:10px;border-radius:.3em;transition:background-color .5s;background-color:#f2f2f2;&:hover{background-color:#e6e6e6;}"]);t.default=function(e){var t=e.pathContext,a=e.location,n=t.posts.slice(0,t.postsPerPage);return i.a.createElement(r.a,null,i.a.createElement(O.a,{location:a,type:"WebSite"}),i.a.createElement(N,null,i.a.createElement(A,null,n.map((function(e,t){return i.a.createElement(o.a,{title:e.frontmatter.title,path:e.frontmatter.path,featuredImage:e.frontmatter.featuredImage?e.frontmatter.featuredImage.childImageSharp:null,content:e.frontmatter.excerpt,key:t,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null},style:{gridArea:0===t?"latest":void 0},halfImage:0===t})})),i.a.createElement(j,null,i.a.createElement(z,{to:"/archive"},"More posts"))),i.a.createElement(S,null,i.a.createElement(C,null))),i.a.createElement(I,null))}},NmYn:function(e,t,a){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function a(a,n){if("string"!=typeof a)throw new Error("slugify: string argument expected");var i=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},r=void 0===n.replacement?"-":n.replacement,l=a.split("").reduce((function(t,a){return t+(i[a]||e[a]||a).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+r+"]+","g"),r);return n.lower&&(l=l.toLowerCase()),n.strict&&(l=l.replace(new RegExp("[^a-zA-Z0-9"+r+"]","g"),"").replace(new RegExp("[\\s"+r+"]+","g"),r)),l}return a.extend=function(t){for(var a in t)e[a]=t[a]},a},e.exports=n(),e.exports.default=n()},WLZb:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),i=a.n(n),r=a("vOnD"),l=a("Wbzz"),o=a("PvO4"),c=a("9eSz"),d=a.n(c),s=Object(r.default)(l.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-1jkg5b1-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-50px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),m=r.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-1jkg5b1-1"})(["display:inline-block;width:100%;z-index:9999;@media (max-width:","){grid-area:unset !important;}"],o.a.breakpoints.sm),p=Object(r.default)(d.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-1jkg5b1-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+o.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),u=r.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-1jkg5b1-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),f=r.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-1jkg5b1-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;line-height:1em;"]),g=r.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-1jkg5b1-5"})(["margin:0;padding:0;"]),h=function(e){var t=e.title,a=e.meta,n=e.path,r=e.featuredImage,l=e.content,o=e.halfImage,c=void 0!==o&&o,d=e.compact,h=void 0!==d&&d,y=e.style,x=e.children;return i.a.createElement(m,{style:y},i.a.createElement(s,{to:n},r&&r.fixed&&i.a.createElement(p,{fixed:r.fixed,halfImage:c}),r&&r.sizes&&i.a.createElement(p,{sizes:r.sizes,halfImage:c}),i.a.createElement(u,{compact:h},x,i.a.createElement("header",null,a&&i.a.createElement(f,null,a.tag&&i.a.createElement(i.a.Fragment,null,a.tag),a.time&&i.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&i.a.createElement(g,null,t)),l&&i.a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))))}},dace:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("vOnD"),l=a("Wbzz"),o=a("ma3e"),c=r.default.ul.withConfig({displayName:"social-channel-list__StyledSocialChannels",componentId:"sc-16w9pwh-0"})(["list-style-type:none;margin:0;padding:0;"]),d=r.default.li.withConfig({displayName:"social-channel-list__StyledSocialChannel",componentId:"sc-16w9pwh-1"})(["display:inline-block;margin:0 10px;font-size:1.6em;opacity:.7;transition:opacity .5s;&:hover{opacity:1;}"]),s=function(e){var t=e.channels;return i.a.createElement(c,null,Object.keys(t).filter((function(e){return""!==t[e]})).map((function(e,a){return i.a.createElement(d,{key:a},i.a.createElement("a",{href:t[e],target:"_blank",rel:"noopener","aria-label":e},function(e){switch(e){case"twitter":return i.a.createElement(o.j,null);case"facebook":return i.a.createElement(o.b,null);case"github":return i.a.createElement(o.c,null);case"instagram":return i.a.createElement(o.d,null);case"linkedin":return i.a.createElement(o.e,null);case"twitch":return i.a.createElement(o.i,null);case"youtube":return i.a.createElement(o.k,null)}return i.a.createElement(o.f,null)}(e)))})))},m=a("9eSz"),p=a.n(m),u=Object(r.default)(p.a).withConfig({displayName:"avatar__StyledAvatar",componentId:"sc-1v6bq9n-0"})(["max-width:55px;border-radius:100%;"]),f=function(e){var t=e.alt,a=e.style,n=Object(l.useStaticQuery)("2206391224");return i.a.createElement(u,{fixed:n.file.childImageSharp.fixed,alt:t,style:a})},g=r.default.section.withConfig({displayName:"bio__StyledBio",componentId:"sc-19adui4-0"})(["margin:auto;text-align:",";width:100%;"],(function(e){return e.textAlign})),h=r.default.p.withConfig({displayName:"bio__AuthorDescription",componentId:"sc-19adui4-1"})(["margin:10px 0 13px;a{color:#000;text-decoration:underline;}"]),y=r.default.h3.withConfig({displayName:"bio__AuthorName",componentId:"sc-19adui4-2"})(["margin:10px;"]);t.a=function(e){var t=e.textAlign,a=void 0===t?"center":t,n=e.avatarStyle,r=e.showName,o=void 0!==r&&r,c=Object(l.useStaticQuery)("1116962356").site.siteMetadata.author;return i.a.createElement(g,{textAlign:a},i.a.createElement(f,{alt:c.name,style:n}),o&&i.a.createElement(y,null,c.name),i.a.createElement(h,{dangerouslySetInnerHTML:{__html:c.description}}),i.a.createElement(s,{channels:c.social}))}}}]);
//# sourceMappingURL=component---node-modules-nehalist-gatsby-theme-nehalem-src-templates-posts-tsx-7bcf93f900c258eedce1.js.map
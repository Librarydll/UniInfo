(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{G6fN:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(l,n){this.router=l,this.authService=n}canActivate(){return!!this.authService.authenticated||(this.router.navigateByUrl("/admin"),!1)}}var i=u("5nNs");class o{constructor(l,n,u){this.repo=l,this.quizService=n,this.authService=u,this.affectedRowCount=0,this.shuffle=!1,this.canShuffle=!0,this.created=!1}ngOnInit(){this.repo.getSubjectNames(),this.reset()}get subjects(){return this.repo.filteredSubjects}selectSubject(l){this.currentSubject=l,this.reset(),this.quiz.subject=l.code,this.affectedRowCount=0}createQuiz(l){l.valid&&this.quizService.createQuiz(this.quiz).subscribe(l=>{this.created=l})}reset(){this.quiz=new i.a,this.quiz.bothLanguages=!1,this.quiz.language=1,this.created=!1,this.affectedRowCount=0}openShuffleQuizButton(){this.shuffle=!0,this.currentSubject=null}shuffleQuizes(){this.canShuffle&&(this.canShuffle=!1,this.quizService.shuffleQuizes().subscribe(l=>{this.affectedRowCount=l.rowAffectedCount}),this.canShuffle=!0)}logout(){this.authService.logout()}}class r{constructor(l,n){this.router=l,this.auth=n}authenticate(l){l.valid?this.auth.authenticate(this.username,this.password).subscribe(l=>{this.showError=!l}):this.showError=!0}logOut(){this.auth.logout()}}class s{}var a=u("pMnS"),b=u("SVse"),c=u("s7LF"),d=u("iInd"),g=u("LRne"),C=u("lJxs"),h=u("JIr8");class m{constructor(l,n){this.http=l,this.router=n,this.authenticated=!1}authenticate(l,n){return this.authenticated=!1,this.http.post("/admin/login",{login:l,password:n}).pipe(Object(C.a)(l=>(l&&(this.authenticated=!0,this.router.navigateByUrl("admin/main")),this.authenticated)),Object(h.a)(l=>(this.authenticated=!1,Object(g.a)(!1))))}logout(){this.http.get("admin/logout"),this.authenticated=!1,this.router.navigateByUrl("admin")}}var p=t.pb({encapsulation:2,styles:[],data:{}});function f(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"div",[["class","bg-danger mt-2 p-2 text-center text-white"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Invalid username or password\n"]))],null,null)}function v(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","bg-info p-2 text-center text-white"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["UNIINFO Admin"])),(l()(),t.gb(16777216,null,null,1,null,f)),t.qb(4,16384,null,0,b.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(5,0,null,null,33,"div",[["class","p-2"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,32,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.Cb(l,8).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,8).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.authenticate(t.Cb(l,8))&&e),e}),null,null)),t.qb(7,16384,null,0,c.t,[],null,null),t.qb(8,4210688,[["form",4]],0,c.k,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Gb(2048,null,c.c,null,[c.k]),t.qb(10,16384,null,0,c.j,[[4,c.c]],null,null),(l()(),t.rb(11,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Name"])),(l()(),t.rb(14,0,null,null,7,"input",[["class","form-control"],["name","username"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,15)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,15).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,15)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,15)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.username=u)&&e),e}),null,null)),t.qb(15,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(16,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(19,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(21,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(22,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(23,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Password"])),(l()(),t.rb(25,0,null,null,7,"input",[["autocomplete","on"],["class","form-control"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,26)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,26).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,26)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,26)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.password=u)&&e),e}),null,null)),t.qb(26,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(27,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(30,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(32,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(33,0,null,null,5,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.rb(34,0,null,null,2,"button",[["class","btn btn-secondary m-1"],["routerLink","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,35).onClick()&&e),e}),null,null)),t.qb(35,16384,null,0,d.l,[d.k,d.a,[8,null],t.C,t.k],{routerLink:[0,"routerLink"]},null),(l()(),t.Jb(-1,null,["Go back"])),(l()(),t.rb(37,0,null,null,1,"button",[["class","btn btn-primary m-1"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Log in"]))],(function(l,n){var u=n.component;l(n,4,0,u.showError),l(n,16,0,""),l(n,19,0,"username",u.username),l(n,27,0,""),l(n,30,0,"password",u.password),l(n,35,0,"/")}),(function(l,n){l(n,6,0,t.Cb(n,10).ngClassUntouched,t.Cb(n,10).ngClassTouched,t.Cb(n,10).ngClassPristine,t.Cb(n,10).ngClassDirty,t.Cb(n,10).ngClassValid,t.Cb(n,10).ngClassInvalid,t.Cb(n,10).ngClassPending),l(n,14,0,t.Cb(n,16).required?"":null,t.Cb(n,21).ngClassUntouched,t.Cb(n,21).ngClassTouched,t.Cb(n,21).ngClassPristine,t.Cb(n,21).ngClassDirty,t.Cb(n,21).ngClassValid,t.Cb(n,21).ngClassInvalid,t.Cb(n,21).ngClassPending),l(n,25,0,t.Cb(n,27).required?"":null,t.Cb(n,32).ngClassUntouched,t.Cb(n,32).ngClassTouched,t.Cb(n,32).ngClassPristine,t.Cb(n,32).ngClassDirty,t.Cb(n,32).ngClassValid,t.Cb(n,32).ngClassInvalid,t.Cb(n,32).ngClassPending)}))}function q(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"ng-component",[],null,null,null,v,p)),t.qb(1,49152,null,0,r,[d.k,m],null,null)],null,null)}var k=t.nb("ng-component",r,q,{},{},[]),w=u("qdT6"),S=u("jD8U"),y=t.pb({encapsulation:2,styles:[],data:{}});function I(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,4,"button",[["class","btn btn-outline-info btn-block"],["routerLinkActive","active"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.selectSubject(l.context.$implicit)&&t),t}),null,null)),t.qb(1,1720320,null,2,d.m,[d.k,t.k,t.C,[2,d.l],[2,d.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.Jb(4,null,[" "," "]))],(function(l,n){l(n,1,0,"active")}),(function(l,n){l(n,4,0,n.context.$implicit.ruVersion)}))}function z(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"h1",[["class","col bg-success text-white text-center"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" \u0412\u043e\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043b\u0441\u044f "]))],null,null)}function M(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,110,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,z)),t.qb(2,16384,null,0,b.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(3,0,null,null,1,"p",[["class","m-2 text-center"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""])),(l()(),t.rb(5,0,null,null,105,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.Cb(l,7).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,7).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.createQuiz(t.Cb(l,7))&&e),e}),null,null)),t.qb(6,16384,null,0,c.t,[],null,null),t.qb(7,4210688,[["form",4]],0,c.k,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Gb(2048,null,c.c,null,[c.k]),t.qb(9,16384,null,0,c.j,[[4,c.c]],null,null),(l()(),t.rb(10,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Question"])),(l()(),t.rb(13,0,null,null,7,"input",[["class","form-control"],["name","question"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,14)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,14).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,14)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,14)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.question=u)&&e),e}),null,null)),t.qb(14,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(15,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(18,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(20,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(21,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Right answer"])),(l()(),t.rb(24,0,null,null,7,"input",[["class","form-control"],["name","rightAnswer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,25)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,25).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,25)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,25)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.rightAnswer=u)&&e),e}),null,null)),t.qb(25,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(26,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(29,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(31,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(32,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(33,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["First answer"])),(l()(),t.rb(35,0,null,null,7,"input",[["class","form-control"],["name","firstAnswer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,36)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,36).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,36)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,36)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.firstAnswer=u)&&e),e}),null,null)),t.qb(36,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(37,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(40,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(42,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(43,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(44,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Second asnwer"])),(l()(),t.rb(46,0,null,null,7,"input",[["class","form-control"],["name","secondAnswer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,47)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,47).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,47)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,47)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.secondAnswer=u)&&e),e}),null,null)),t.qb(47,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(48,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(51,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(53,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(54,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(55,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Third answer"])),(l()(),t.rb(57,0,null,null,7,"input",[["class","form-control"],["name","thirdAnswer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,58)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,58).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,58)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,58)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.thirdAnswer=u)&&e),e}),null,null)),t.qb(58,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(59,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(62,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(64,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(65,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(66,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Fourth answer"])),(l()(),t.rb(68,0,null,null,7,"input",[["class","form-control"],["name","fourthAnswer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,69)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,69).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,69)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,69)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.fourthAnswer=u)&&e),e}),null,null)),t.qb(69,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(70,16384,null,0,c.o,[],{required:[0,"required"]},null),t.Gb(1024,null,c.f,(function(l){return[l]}),[c.o]),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.d]),t.qb(73,671744,null,0,c.l,[[2,c.c],[6,c.f],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(75,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(76,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(77,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Language"])),(l()(),t.rb(79,0,null,null,9,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),t.rb(80,0,null,null,8,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),t.rb(81,0,null,null,6,"input",[["class","form-check-input"],["name","uz"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,82)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,82).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,82)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,82)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Cb(l,83).onChange()&&e),"blur"===n&&(e=!1!==t.Cb(l,83).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.language=u)&&e),e}),null,null)),t.qb(82,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(83,212992,null,0,c.n,[t.C,t.k,c.r,t.q],{name:[0,"name"],value:[1,"value"]},null),t.Gb(1024,null,c.g,(function(l,n){return[l,n]}),[c.d,c.n]),t.qb(85,671744,null,0,c.l,[[2,c.c],[8,null],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(87,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.Jb(-1,null,["Uz "])),(l()(),t.rb(89,0,null,null,9,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),t.rb(90,0,null,null,8,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),t.rb(91,0,null,null,6,"input",[["class","form-check-input"],["name","optradio"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,92)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,92).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,92)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,92)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Cb(l,93).onChange()&&e),"blur"===n&&(e=!1!==t.Cb(l,93).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.language=u)&&e),e}),null,null)),t.qb(92,16384,null,0,c.d,[t.C,t.k,[2,c.a]],null,null),t.qb(93,212992,null,0,c.n,[t.C,t.k,c.r,t.q],{name:[0,"name"],value:[1,"value"]},null),t.Gb(1024,null,c.g,(function(l,n){return[l,n]}),[c.d,c.n]),t.qb(95,671744,null,0,c.l,[[2,c.c],[8,null],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(97,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.Jb(-1,null,["Ru "])),(l()(),t.rb(99,0,null,null,8,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),t.rb(100,0,null,null,5,"input",[["class","form-check-input"],["name","both"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0,i=l.component;return"change"===n&&(e=!1!==t.Cb(l,101).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.Cb(l,101).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.quiz.bothLanguages=u)&&e),e}),null,null)),t.qb(101,16384,null,0,c.b,[t.C,t.k],null,null),t.Gb(1024,null,c.g,(function(l){return[l]}),[c.b]),t.qb(103,671744,null,0,c.l,[[2,c.c],[8,null],[8,null],[6,c.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,c.h,null,[c.l]),t.qb(105,16384,null,0,c.i,[[4,c.h]],null,null),(l()(),t.rb(106,0,null,null,1,"label",[["class","form-check-label"],["for","defaultCheck1"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Is for both languages? "])),(l()(),t.rb(108,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.rb(109,0,null,null,1,"button",[["class","btn btn-primary m-1"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Create question"]))],(function(l,n){var u=n.component;l(n,2,0,u.created),l(n,15,0,""),l(n,18,0,"question",u.quiz.question),l(n,26,0,""),l(n,29,0,"rightAnswer",u.quiz.rightAnswer),l(n,37,0,""),l(n,40,0,"firstAnswer",u.quiz.firstAnswer),l(n,48,0,""),l(n,51,0,"secondAnswer",u.quiz.secondAnswer),l(n,59,0,""),l(n,62,0,"thirdAnswer",u.quiz.thirdAnswer),l(n,70,0,""),l(n,73,0,"fourthAnswer",u.quiz.fourthAnswer),l(n,83,0,"uz",1),l(n,85,0,"uz",u.quiz.language),l(n,93,0,"optradio",2),l(n,95,0,"optradio",u.quiz.language),l(n,103,0,"both",u.quiz.bothLanguages)}),(function(l,n){l(n,4,0,n.component.currentSubject.ruVersion),l(n,5,0,t.Cb(n,9).ngClassUntouched,t.Cb(n,9).ngClassTouched,t.Cb(n,9).ngClassPristine,t.Cb(n,9).ngClassDirty,t.Cb(n,9).ngClassValid,t.Cb(n,9).ngClassInvalid,t.Cb(n,9).ngClassPending),l(n,13,0,t.Cb(n,15).required?"":null,t.Cb(n,20).ngClassUntouched,t.Cb(n,20).ngClassTouched,t.Cb(n,20).ngClassPristine,t.Cb(n,20).ngClassDirty,t.Cb(n,20).ngClassValid,t.Cb(n,20).ngClassInvalid,t.Cb(n,20).ngClassPending),l(n,24,0,t.Cb(n,26).required?"":null,t.Cb(n,31).ngClassUntouched,t.Cb(n,31).ngClassTouched,t.Cb(n,31).ngClassPristine,t.Cb(n,31).ngClassDirty,t.Cb(n,31).ngClassValid,t.Cb(n,31).ngClassInvalid,t.Cb(n,31).ngClassPending),l(n,35,0,t.Cb(n,37).required?"":null,t.Cb(n,42).ngClassUntouched,t.Cb(n,42).ngClassTouched,t.Cb(n,42).ngClassPristine,t.Cb(n,42).ngClassDirty,t.Cb(n,42).ngClassValid,t.Cb(n,42).ngClassInvalid,t.Cb(n,42).ngClassPending),l(n,46,0,t.Cb(n,48).required?"":null,t.Cb(n,53).ngClassUntouched,t.Cb(n,53).ngClassTouched,t.Cb(n,53).ngClassPristine,t.Cb(n,53).ngClassDirty,t.Cb(n,53).ngClassValid,t.Cb(n,53).ngClassInvalid,t.Cb(n,53).ngClassPending),l(n,57,0,t.Cb(n,59).required?"":null,t.Cb(n,64).ngClassUntouched,t.Cb(n,64).ngClassTouched,t.Cb(n,64).ngClassPristine,t.Cb(n,64).ngClassDirty,t.Cb(n,64).ngClassValid,t.Cb(n,64).ngClassInvalid,t.Cb(n,64).ngClassPending),l(n,68,0,t.Cb(n,70).required?"":null,t.Cb(n,75).ngClassUntouched,t.Cb(n,75).ngClassTouched,t.Cb(n,75).ngClassPristine,t.Cb(n,75).ngClassDirty,t.Cb(n,75).ngClassValid,t.Cb(n,75).ngClassInvalid,t.Cb(n,75).ngClassPending),l(n,81,0,t.Cb(n,87).ngClassUntouched,t.Cb(n,87).ngClassTouched,t.Cb(n,87).ngClassPristine,t.Cb(n,87).ngClassDirty,t.Cb(n,87).ngClassValid,t.Cb(n,87).ngClassInvalid,t.Cb(n,87).ngClassPending),l(n,91,0,t.Cb(n,97).ngClassUntouched,t.Cb(n,97).ngClassTouched,t.Cb(n,97).ngClassPristine,t.Cb(n,97).ngClassDirty,t.Cb(n,97).ngClassValid,t.Cb(n,97).ngClassInvalid,t.Cb(n,97).ngClassPending),l(n,100,0,t.Cb(n,105).ngClassUntouched,t.Cb(n,105).ngClassTouched,t.Cb(n,105).ngClassPristine,t.Cb(n,105).ngClassDirty,t.Cb(n,105).ngClassValid,t.Cb(n,105).ngClassInvalid,t.Cb(n,105).ngClassPending)}))}function G(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"h1",[["class","col bg-success text-white text-center"]],null,null,null,null,null)),(l()(),t.Jb(1,null,[" Affected Row Count "," "]))],null,(function(l,n){l(n,1,0,n.component.affectedRowCount)}))}function A(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,5,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,G)),t.qb(2,16384,null,0,b.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(3,0,null,null,2,"div",[["class","text-center"],["style","margin:0 auto;"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,1,"button",[["class","btn btn-outline-primary btn-block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.shuffleQuizes()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" \u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b "]))],(function(l,n){l(n,2,0,n.component.affectedRowCount>0)}),null)}function B(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"div",[["class","d-block mt-5 mb-5"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"button",[["class","btn btn-outline-info"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" Exit "])),(l()(),t.rb(4,0,null,null,10,"div",[["class","row mt-2"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,5,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.qb(7,278528,null,0,b.h,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(8,0,null,null,2,"div",[["class","mt-5"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"button",[["class","btn btn-outline-primary btn-block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openShuffleQuizButton()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" \u041f\u0435\u0440\u0435\u043c\u0435\u0448\u043a\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 "])),(l()(),t.gb(16777216,null,null,1,null,M)),t.qb(12,16384,null,0,b.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,A)),t.qb(14,16384,null,0,b.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.subjects),l(n,12,0,u.currentSubject),l(n,14,0,!u.currentSubject&&u.shuffle)}),null)}function T(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"ng-component",[],null,null,null,B,y)),t.qb(1,114688,null,0,o,[w.a,S.a,m],null,null)],(function(l,n){l(n,1,0)}),null)}var _=t.nb("ng-component",o,T,{},{},[]),J=u("IheW");u.d(n,"AdminModuleNgFactory",(function(){return P}));var P=t.ob(s,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Y,[[8,[a.a,k,_]],[3,t.j],t.w]),t.Bb(4608,b.k,b.j,[t.t,[2,b.t]]),t.Bb(4608,c.r,c.r,[]),t.Bb(4608,J.h,J.n,[b.c,t.A,J.l]),t.Bb(4608,J.o,J.o,[J.h,J.m]),t.Bb(5120,J.a,(function(l){return[l]}),[J.o]),t.Bb(4608,J.k,J.k,[]),t.Bb(6144,J.i,null,[J.k]),t.Bb(4608,J.g,J.g,[J.i]),t.Bb(6144,J.b,null,[J.g]),t.Bb(4608,J.f,J.j,[J.b,t.q]),t.Bb(4608,J.c,J.c,[J.f]),t.Bb(4608,m,m,[J.c,d.k]),t.Bb(4608,w.a,w.a,[J.c]),t.Bb(4608,S.a,S.a,[J.c]),t.Bb(4608,e,e,[d.k,m]),t.Bb(1073742336,d.o,d.o,[[2,d.t],[2,d.k]]),t.Bb(1073742336,b.b,b.b,[]),t.Bb(1073742336,c.q,c.q,[]),t.Bb(1073742336,c.e,c.e,[]),t.Bb(1073742336,J.e,J.e,[]),t.Bb(1073742336,J.d,J.d,[]),t.Bb(1073742336,s,s,[]),t.Bb(256,J.l,"XSRF-TOKEN",[]),t.Bb(256,J.m,"X-XSRF-TOKEN",[]),t.Bb(1024,d.i,(function(){return[[{path:"",component:r},{path:"main",component:o,canActivate:[e]}]]}),[])])}))}}]);
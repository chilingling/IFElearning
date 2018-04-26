import san from 'san'; //引入san
import './main.css'; //引入CSS文件

let test = [1, 2, 3, 4, 5];
for (let item of test) {
	console.log(item);
}


var MyApp = san.defineComponent({
	template: '<div class="bac"><p>Hello {{name}}!Hello Hot</p></div>',
	initData: function() {
		return {
			name: 'san'
		};
	}
});
var myApp = new MyApp();
myApp.attach(document.body);
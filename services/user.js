var User = require('../models/user').User;
// //如果是第一次运行的话,需要用sync 方法创建表
// db.sync().then(function () {
// 		//用sequelize创建我们第一个用户
// 		User.create({
// 			id : '1',
// 			firstname : 'first',
//             lastname : 'last'
// 		}).done(function (err, result){
// 				console.log(err)
// 				console.log(result)
// 			})
// 	})
// 	.error(function (err){
// 			console.log(err);

// })
User.findAll().then(Users => {
	console.log(Users)
});
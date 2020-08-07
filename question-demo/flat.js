let brr = [10, 20 ,30 ,[40,50,[60,70]], 80]


function flat(arr) {
	let isDeep = arr.some(item =>  item instanceof Array)
	if (!isDeep) {
		return arr
	}
	let res = Array.prototype.concat.apply([], arr)
	return flat(res)
}


console.log(flat(brr))
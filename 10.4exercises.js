const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturn = (arr, ...vals) => [...arr, ...vals.map(val => val *2)]


function removeRandom(items){
	const index = Math.floor(Math.random()*items.length);
	return [...items.slice(0, index), ...items.slice(index + 1)]
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

function addKeyVal(obj, key, val){
	return {...obj, [key]:val};
}

function removeKey(obj, key){
	const newObj = {...obj}
	delete newObj[key];
	return newObj;
}

function combine (obj1, obj2){
	return {...obj1, ...obj2};
}

function update(obj, key, val){
	return {...obj, [key]:val};
}

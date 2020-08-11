let activeEffect
class Dep{
	constructor(){
		this.subs = new Set()
	}
	depend(){
		if(activeEffect){
			this.subs.add(activeEffect)
		}
	}
	notify(){
		this.subs.forEach(effect=>effect())
	}
}
function effect(fn){
	activeEffect = fn
	fn()
}
const dep = new Dep()
 let _value = 0 
 let state = {
	get value(){
		dep.depend()
		return _value
	},
	set value(newValue){
		_value = newValue
		dep.notify()
	}
 }

 effect(()=>{
	console.log(state.value)
 })

setInterval(()=>{
	state.value++
},1000)
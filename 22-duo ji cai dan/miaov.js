// JavaScript Document

	function getPrev( obj ){ //上一个兄弟元素节点
	
		if(!obj||!obj.previousSibling)return null;
		//先检测传进来的是不是一个真值，并且有没有上一个兄弟节点
		
		return obj.previousSibling.nodeType === 1 ? obj.previousSibling : getPrev( obj.previousSibling );//递归
		
	}
	
	function getNext(obj){
		
		if(!obj||!obj.nextSibling)return null;
		//先检测传进来的是不是一个真值，并且有没有下一个兄弟节点
		
		return obj.nextSibling.nodeType === 1 ? obj.nextSibling : getNext( obj.nextSibling );//递归
		
	}
	
	function getFirst( obj ){
				
		if(!obj||!obj.firstChild)return null;
		//先检测传进来的是不是一个真值，并且有没有第一个兄弟节点
		
		return obj.firstChild.nodeType === 1 ? obj.firstChild : getNext( obj.firstChild );//递归
		
	}
	
	function getLast( obj ){
				
		if(!obj||!obj.lastChild)return null;
		//先检测传进来的是不是一个真值，并且有没有最后一个兄弟节点
		
		return obj.lastChild.nodeType === 1 ? obj.lastChild : getPrev( obj.lastChild );//递归
		
	}

pragma solidity ^0.5.0;

contract Bytes{
	
	bytes data;
	function setDataB(bytes memory _data) public {
		data= _data;
	}
	function getDataB()external view returns (bytes memory){

		return data;
	}
}

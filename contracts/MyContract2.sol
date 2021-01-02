pragma solidity ^0.5.0;

contract MyContract2 {

    event MyEvent(
        uint indexed id,
        uint indexed date,
        string value
    );
    uint nextId;

    function emitEvent(string calldata value) external {
        emit MyEvent(nextId,now,value);
        nextId++;

    }

}
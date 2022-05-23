// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./NonblockingLzApp.sol";

contract AtomicCurrencySwap is NonblockingLzApp{

    constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {}

    function atomicSwap(uint16 _dstChainId,bytes calldata adapterParams) public payable {
        _lzSend(_dstChainId, bytes(""), payable(msg.sender), address(0x0), adapterParams);
    }

    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory) internal override {
    }

}

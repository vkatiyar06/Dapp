pragma solidity ^0.4.24;

contract FactoryContract{
  address[] public deployedContracts;

  function createCampaign(uint min)public{
    address add = new Campaign(min,msg.sender);
    deployedContracts.push(add);
  }

  function getCampaigns() public view returns(address[]){
    return deployedContracts;
  }
}

contract Campaign{
  uint approversCount;
  address public manager;
  uint public minContri;
  mapping(address => bool) public approvers;
  struct Request{
    string title;
    address vendor;
    uint value;
    bool complete;
    uint approvalCount;
    mapping(address => bool)approvals;
  }
  Request[] public requests;

  modifier restricted(){
    require(msg.sender==manager);
    _;
  }

  function Campaign(uint min,address creator)public {
      minContri=min;
      manager=creator;
  }

  function contribute() public payable{
    require(msg.value>=minContri);
    approvers[msg.sender]= true;
    approversCount++;
  }

  function createRequest(string title,address vendor,uint value)public restricted{
      Request memory newRequest = Request({
      title:title,
      vendor:vendor,
      value:value,
      complete:false,
      approvalCount:0
      });
    requests.push(newRequest);
  }

  function approveRequest(uint index)public{
    Request storage req=requests[index];
    require(approvers[msg.sender]);
    require(!req.approvals[msg.sender]);
    req.approvals[msg.sender]=true;
    req.approvalCount++;

  }

  function finnalizeRequest(uint index)public restricted{
    require(!requests[index].complete);
    require(requests[index].approvalCount>(approversCount/2));
    requests[index].vendor.transfer(requests[index].value);
    requests[index].complete=true;

  }

  function getReq()public view returns(uint){
    return requests.length;
  }

  function summary() public view returns(uint, uint,uint,uint,address ){
    return(
        minContri,
        requests.length,
        this.balance,
        approversCount,
        manager
      );
  }
}
